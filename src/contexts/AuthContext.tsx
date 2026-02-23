import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase.ts'

interface SubscriptionStatus {
  hasAccess: boolean
  role: 'free' | 'paid' | 'lifetime' | 'founder'
  plan: 'free' | 'monthly' | 'lifetime'
  status: string
  periodEnd: string | null
}

interface AuthContextType {
  session: Session | null
  user: User | null
  loading: boolean
  subscription: SubscriptionStatus | null
  subscriptionLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  refreshSubscription: () => Promise<void>
}

const DEFAULT_SUB: SubscriptionStatus = {
  hasAccess: false,
  role: 'free',
  plan: 'free',
  status: 'inactive',
  periodEnd: null,
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null)
  const [subscriptionLoading, setSubscriptionLoading] = useState(false)

  async function fetchSubscription(sess: Session) {
    setSubscriptionLoading(true)
    try {
      const res = await fetch('/api/check-subscription', {
        headers: { Authorization: `Bearer ${sess.access_token}` },
      })
      if (res.ok) {
        const data = await res.json()
        setSubscription(data)
      } else {
        setSubscription(DEFAULT_SUB)
      }
    } catch {
      setSubscription(DEFAULT_SUB)
    } finally {
      setSubscriptionLoading(false)
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s) fetchSubscription(s)
      setLoading(false)
    })

    const { data: { subscription: authSub } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s) {
        fetchSubscription(s)
      } else {
        setSubscription(null)
      }
    })

    return () => authSub.unsubscribe()
  }, [])

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { error: error.message }
    return { error: null }
  }

  async function signUp(email: string, password: string, fullName: string) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    })
    if (error) return { error: error.message }
    return { error: null }
  }

  async function signOut() {
    await supabase.auth.signOut()
    setSubscription(null)
  }

  async function refreshSubscription() {
    if (session) await fetchSubscription(session)
  }

  return (
    <AuthContext.Provider value={{
      session, user, loading,
      subscription, subscriptionLoading,
      signIn, signUp, signOut, refreshSubscription,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
