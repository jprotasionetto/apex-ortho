import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

/**
 * Mercado Pago Webhook — APEX Ortho
 * POST /api/mercadopago-webhook
 *
 * Configure in MP Dashboard:
 *   Webhook URL: https://ortho.apexhealthia.com/api/mercadopago-webhook
 *   Events: payment, subscription_preapproval, subscription_authorized_payment
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const MP_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN
    if (!MP_ACCESS_TOKEN) throw new Error('MERCADOPAGO_ACCESS_TOKEN not configured')

    const { type, data } = req.body
    console.log('Webhook received:', type, data?.id)

    // ── PAYMENT (lifetime) ────────────────────────────────────────────────────
    if (type === 'payment') {
      const paymentResp = await fetch(
        `https://api.mercadopago.com/v1/payments/${data.id}`,
        { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } }
      )
      const payment = await paymentResp.json()

      if (payment.status === 'approved') {
        const userId = payment.metadata?.user_id
        const planType = payment.metadata?.plan_type

        if (userId && planType === 'lifetime') {
          await supabase.from('subscriptions').upsert({
            user_id: userId,
            plan: 'lifetime',
            status: 'active',
            mp_payment_id: String(data.id),
            current_period_start: new Date().toISOString(),
            current_period_end: null,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'user_id' })

          await supabase.from('profiles')
            .update({ role: 'lifetime', updated_at: new Date().toISOString() })
            .eq('id', userId)

          console.log('Lifetime activated for user:', userId)
        }
      }
    }

    // ── SUBSCRIPTION (monthly) ────────────────────────────────────────────────
    if (type === 'subscription_preapproval' || type === 'subscription_authorized_payment') {
      const preapprovalResp = await fetch(
        `https://api.mercadopago.com/preapproval/${data.id}`,
        { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } }
      )
      const preapproval = await preapprovalResp.json()

      let userId = preapproval.metadata?.user_id
      if (!userId && preapproval.external_reference) {
        userId = preapproval.external_reference.split('_')[0]
      }

      if (userId) {
        const mpStatus = preapproval.status
        const dbStatus = mpStatus === 'authorized' ? 'active'
          : mpStatus === 'paused' ? 'inactive'
          : mpStatus === 'cancelled' ? 'cancelled' : 'pending'
        const role = dbStatus === 'active' ? 'paid' : 'free'

        await supabase.from('subscriptions').upsert({
          user_id: userId,
          plan: dbStatus === 'active' ? 'monthly' : 'free',
          status: dbStatus,
          mp_subscription_id: String(data.id),
          current_period_start: preapproval.date_created || new Date().toISOString(),
          current_period_end: preapproval.next_payment_date || null,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id' })

        await supabase.from('profiles')
          .update({ role, updated_at: new Date().toISOString() })
          .eq('id', userId)

        console.log('Monthly subscription updated for user:', userId, 'status:', dbStatus)
      }
    }

    return res.status(200).json({ received: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Webhook error:', message)
    return res.status(500).json({ error: message })
  }
}
