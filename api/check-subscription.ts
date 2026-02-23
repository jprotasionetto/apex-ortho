import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

/**
 * Check subscription status — APEX Ortho
 * GET /api/check-subscription
 * Header: Authorization: Bearer <supabase_jwt>
 */

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v))
    return res.status(200).end()
  }
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v))

  try {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ error: 'Unauthorized' })

    const userClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: authHeader } } }
    )
    const { data: { user } } = await userClient.auth.getUser()
    if (!user) return res.status(401).json({ error: 'Unauthorized' })

    const adminClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: profile } = await adminClient
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const { data: subscription } = await adminClient
      .from('subscriptions')
      .select('plan, status, current_period_end')
      .eq('user_id', user.id)
      .single()

    const role = profile?.role || 'free'
    const hasAccess = role === 'lifetime' || role === 'founder' ||
      (subscription?.status === 'active' && (
        !subscription.current_period_end ||
        new Date(subscription.current_period_end) > new Date()
      ))

    return res.status(200).json({
      hasAccess,
      role,
      plan: subscription?.plan || 'free',
      status: subscription?.status || 'none',
      periodEnd: subscription?.current_period_end || null,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({ error: message })
  }
}
