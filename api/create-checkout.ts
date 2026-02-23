import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

/**
 * Create Mercado Pago Checkout — APEX Ortho
 * POST /api/create-checkout
 * Body: { plan_type: 'monthly' | 'lifetime' }
 *
 * Env vars required:
 *   SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
 *   MERCADOPAGO_ACCESS_TOKEN
 */

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v))
    return res.status(200).end()
  }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v))

  try {
    const authHeader = req.headers.authorization
    if (!authHeader) throw new Error('Missing authorization header')

    const userClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: authHeader } } }
    )
    const { data: { user } } = await userClient.auth.getUser()
    if (!user) throw new Error('Não autorizado')

    const { plan_type } = req.body
    if (!plan_type || !['monthly', 'lifetime'].includes(plan_type)) {
      throw new Error('plan_type deve ser "monthly" ou "lifetime"')
    }

    const MP_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN
    if (!MP_ACCESS_TOKEN) throw new Error('MERCADOPAGO_ACCESS_TOKEN não configurado')

    const origin = req.headers.origin || 'https://ortho.apexhealthia.com'

    if (plan_type === 'monthly') {
      const preapprovalResponse = await fetch('https://api.mercadopago.com/preapproval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
        body: JSON.stringify({
          reason: 'APEX Ortho — Assinatura Mensal',
          auto_recurring: {
            frequency: 1,
            frequency_type: 'months',
            transaction_amount: 49.99,
            currency_id: 'BRL',
          },
          payer_email: user.email,
          back_url: `${origin}/app?payment=success`,
          external_reference: `${user.id}_monthly_${Date.now()}`,
          metadata: { user_id: user.id, plan_type: 'monthly' },
        }),
      })
      if (!preapprovalResponse.ok) {
        const errText = await preapprovalResponse.text()
        console.error('MP preapproval error:', errText)
        throw new Error('Erro ao criar assinatura no Mercado Pago')
      }
      const data = await preapprovalResponse.json()
      return res.status(200).json({ init_point: data.init_point, id: data.id, type: 'subscription' })
    }

    // Lifetime
    const preference = {
      items: [{ title: 'APEX Ortho — Acesso Vitalício', quantity: 1, unit_price: 599.90, currency_id: 'BRL' }],
      payer: { email: user.email },
      payment_methods: { installments: 12, default_installments: 1 },
      metadata: { user_id: user.id, plan_type: 'lifetime' },
      back_urls: {
        success: `${origin}/app?payment=success`,
        failure: `${origin}/login?payment=failure`,
        pending: `${origin}/login?payment=pending`,
      },
      auto_return: 'approved',
      external_reference: `${user.id}_lifetime_${Date.now()}`,
    }

    const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
      body: JSON.stringify(preference),
    })
    if (!mpResponse.ok) {
      const errText = await mpResponse.text()
      console.error('MP preference error:', errText)
      throw new Error('Erro ao criar checkout no Mercado Pago')
    }
    const mpData = await mpResponse.json()
    return res.status(200).json({ init_point: mpData.init_point, id: mpData.id, type: 'one_time' })

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('create-checkout error:', message)
    return res.status(400).json({ error: message })
  }
}
