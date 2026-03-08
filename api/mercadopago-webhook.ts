import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

/**
 * Mercado Pago Webhook — APEX Ortho
 * POST /api/mercadopago-webhook
 *
 * Configure in MP Dashboard:
 *   Webhook URL: https://ortho.apexhealthia.com/api/mercadopago-webhook
 *   Events: payment, subscription_preapproval, subscription_authorized_payment
 *
 * On payment approved:
 *   1. Writes payer email to signup_approvals (allows signup)
 *   2. If existing user found by email, activates subscription immediately
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

    // ── Helper: activate subscription for a known user_id ─────────────────────
    async function activateForUser(
      userId: string,
      plan: 'lifetime' | 'monthly',
      mpPaymentId: string,
      periodStart: string,
      periodEnd: string | null
    ) {
      const role = plan === 'lifetime' ? 'lifetime' : 'paid'
      await supabase.from('subscriptions').upsert({
        user_id: userId,
        plan,
        status: 'active',
        mp_payment_id: mpPaymentId,
        current_period_start: periodStart,
        current_period_end: periodEnd,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })
      await supabase.from('profiles')
        .update({ role, updated_at: new Date().toISOString() })
        .eq('id', userId)
      console.log(`${plan} activated for user:`, userId)
    }

    // ── Helper: write to signup_approvals and try to activate existing user ────
    async function approveEmailAndActivate(
      payerEmail: string,
      plan: 'lifetime' | 'monthly',
      mpPaymentId: string,
      periodStart: string,
      periodEnd: string | null
    ) {
      const normalizedEmail = payerEmail.toLowerCase().trim()

      // Always store approval so signup is unblocked
      await supabase.from('signup_approvals').upsert({
        email: normalizedEmail,
        plan,
        mp_payment_id: mpPaymentId,
      }, { onConflict: 'email' })
      console.log('signup_approvals updated for email:', normalizedEmail)

      // Try to find existing user by email and activate immediately
      const { data: { users } } = await supabase.auth.admin.listUsers({ perPage: 1000 })
      const existingUser = users?.find(u => u.email?.toLowerCase() === normalizedEmail)
      if (existingUser) {
        await activateForUser(existingUser.id, plan, mpPaymentId, periodStart, periodEnd)
      }
    }

    // ── PAYMENT (lifetime one-time) ────────────────────────────────────────────
    if (type === 'payment') {
      const paymentResp = await fetch(
        `https://api.mercadopago.com/v1/payments/${data.id}`,
        { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } }
      )
      const payment = await paymentResp.json()

      if (payment.status === 'approved') {
        const userId = payment.metadata?.user_id
        const planType = payment.metadata?.plan_type
        const payerEmail = payment.metadata?.payer_email || payment.payer?.email

        if (planType === 'lifetime') {
          const periodStart = new Date().toISOString()

          // If we have a user_id, activate directly
          if (userId) {
            await activateForUser(userId, 'lifetime', String(data.id), periodStart, null)
          }
          // Also write signup_approvals for payer email (covers new-user flow)
          if (payerEmail) {
            await approveEmailAndActivate(payerEmail, 'lifetime', String(data.id), periodStart, null)
          }
        }
      }
    }

    // ── SUBSCRIPTION (monthly recurring) ─────────────────────────────────────
    if (type === 'subscription_preapproval' || type === 'subscription_authorized_payment') {
      const preapprovalResp = await fetch(
        `https://api.mercadopago.com/preapproval/${data.id}`,
        { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } }
      )
      const preapproval = await preapprovalResp.json()

      const userId = preapproval.metadata?.user_id
        || preapproval.external_reference?.split('_')[0]
      const payerEmail = preapproval.metadata?.payer_email || preapproval.payer_email

      const mpStatus = preapproval.status
      const dbStatus = mpStatus === 'authorized' ? 'active'
        : mpStatus === 'paused' ? 'inactive'
        : mpStatus === 'cancelled' ? 'cancelled' : 'pending'
      const role = dbStatus === 'active' ? 'paid' : 'free'

      const periodStart = preapproval.date_created || new Date().toISOString()
      const periodEnd = preapproval.next_payment_date || null

      if (dbStatus === 'active') {
        // Approve email (for new-user flow) and activate existing user if found
        if (payerEmail) {
          await approveEmailAndActivate(payerEmail, 'monthly', String(data.id), periodStart, periodEnd)
        }
        // Also update by user_id if we have it
        if (userId && userId !== payerEmail) {
          await activateForUser(userId, 'monthly', String(data.id), periodStart, periodEnd)
        }
      } else if (userId) {
        // Subscription paused/cancelled — update status by user_id
        await supabase.from('subscriptions').upsert({
          user_id: userId,
          plan: 'monthly',
          status: dbStatus,
          mp_subscription_id: String(data.id),
          current_period_start: periodStart,
          current_period_end: periodEnd,
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
