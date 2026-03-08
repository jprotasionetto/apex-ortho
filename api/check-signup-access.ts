import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

/**
 * Check if an email is allowed to create an account — APEX Ortho
 * POST /api/check-signup-access
 * Body: { email: string, coupon_code?: string }
 *
 * Returns: { allowed: boolean, source?: 'payment'|'coupon', plan?: string }
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
    const { email, coupon_code } = req.body
    if (!email) return res.status(400).json({ error: 'email is required' })

    const normalizedEmail = String(email).toLowerCase().trim()
    const adminClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // 1. Check signup_approvals (payment-based access)
    const { data: approval } = await adminClient
      .from('signup_approvals')
      .select('plan, created_at')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (approval) {
      return res.json({ allowed: true, source: 'payment', plan: approval.plan })
    }

    // 2. Check access coupons (if coupon_code provided)
    if (coupon_code) {
      const normalizedCode = String(coupon_code).toUpperCase().trim()
      const now = new Date().toISOString()

      const { data: coupon } = await adminClient
        .from('coupons')
        .select('id, coupon_type, access_months, current_uses, max_uses, valid_until')
        .eq('code', normalizedCode)
        .eq('coupon_type', 'access')
        .eq('is_active', true)
        .maybeSingle()

      if (coupon) {
        // Validate expiry
        if (coupon.valid_until && coupon.valid_until < now) {
          return res.json({ allowed: false, reason: 'coupon_expired' })
        }
        // Validate usage limit
        if (coupon.max_uses !== null && coupon.current_uses >= coupon.max_uses) {
          return res.json({ allowed: false, reason: 'coupon_exhausted' })
        }
        return res.json({
          allowed: true,
          source: 'coupon',
          plan: 'monthly',
          coupon_id: coupon.id,
          access_months: coupon.access_months,
        })
      }
    }

    return res.json({ allowed: false })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('check-signup-access error:', message)
    return res.status(500).json({ error: message })
  }
}
