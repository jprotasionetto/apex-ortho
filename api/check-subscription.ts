import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

/**
 * Check subscription status — APEX Ortho
 * GET /api/check-subscription
 * Header: Authorization: Bearer <supabase_jwt>
 *
 * Auto-activates subscription if email is found in signup_approvals
 * (handles users who paid before creating an account).
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
    let hasAccess = role === 'lifetime' || role === 'founder' ||
      (subscription?.status === 'active' && (
        !subscription.current_period_end ||
        new Date(subscription.current_period_end) > new Date()
      ))

    // Auto-activate: if no access yet, check signup_approvals by email
    if (!hasAccess && user.email) {
      const normalizedEmail = user.email.toLowerCase().trim()
      const { data: approval } = await adminClient
        .from('signup_approvals')
        .select('plan, mp_payment_id')
        .eq('email', normalizedEmail)
        .maybeSingle()

      if (approval) {
        const newPlan = approval.plan as 'lifetime' | 'monthly'
        const newRole = newPlan === 'lifetime' ? 'lifetime' : 'paid'
        const periodEnd = newPlan === 'lifetime'
          ? null
          : new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString()

        await adminClient.from('subscriptions').upsert({
          user_id: user.id,
          plan: newPlan,
          status: 'active',
          mp_payment_id: approval.mp_payment_id,
          current_period_start: new Date().toISOString(),
          current_period_end: periodEnd,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id' })

        await adminClient.from('profiles')
          .update({ role: newRole, updated_at: new Date().toISOString() })
          .eq('id', user.id)

        console.log('Auto-activated subscription for user:', user.id, 'plan:', newPlan)

        return res.status(200).json({
          hasAccess: true,
          role: newRole,
          plan: newPlan,
          status: 'active',
          periodEnd,
        })
      }
    }

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
