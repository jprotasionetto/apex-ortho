import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, Eye, EyeOff, Shield, AlertCircle, CheckCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase.ts'
import { useAuth } from '@/contexts/AuthContext.tsx'

export default function ResetPasswordPage() {
  const { updatePassword } = useAuth()
  const navigate = useNavigate()
  const [ready, setReady] = useState(false)
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [show, setShow] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  // Supabase fires PASSWORD_RECOVERY when user arrives from reset email link
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setReady(true)
      }
    })
    // Also check if already in a recovery session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true)
    })
    return () => subscription.unsubscribe()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirm) {
      setError('As senhas não coincidem.')
      return
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      return
    }
    setSubmitting(true)
    setError('')
    const { error: err } = await updatePassword(password)
    if (err) {
      setError(err)
      setSubmitting(false)
    } else {
      setDone(true)
      setTimeout(() => navigate('/login'), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <Link to="/" className="mb-10 text-center group">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
        >
          <Shield className="w-8 h-8 text-[#D4AF37]" />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">APEX Ortho</h1>
        <p className="text-sm text-gray-500 mt-1">Plataforma clínica de ortopedia</p>
      </Link>

      {/* Card */}
      <div className="w-full max-w-sm bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-2xl p-6 shadow-2xl">
        {done ? (
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Senha atualizada!</h2>
            <p className="text-sm text-gray-400">
              Redirecionando para o login...
            </p>
          </div>
        ) : !ready ? (
          <div className="text-center py-4">
            <p className="text-sm text-gray-400">Verificando link de recuperação...</p>
            <p className="text-xs text-gray-600 mt-2">
              Se chegou aqui por engano,{' '}
              <Link to="/login" className="text-[#D4AF37] hover:text-[#F4D03F]">
                volte ao login
              </Link>
              .
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white">Nova senha</h2>
              <p className="text-xs text-gray-400 mt-1">
                Escolha uma nova senha para sua conta.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nova senha"
                  autoComplete="new-password"
                  required
                  className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,0.5)] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type={show ? 'text' : 'password'}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Confirmar nova senha"
                  autoComplete="new-password"
                  required
                  className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,0.5)] transition-colors"
                />
              </div>

              {error && (
                <p className="text-xs text-red-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting || !password || !confirm}
                className="w-full py-3 rounded-xl text-sm font-semibold text-[#0A0A0A] transition-all disabled:opacity-40"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8961E)' }}
              >
                {submitting ? 'Salvando...' : 'Salvar nova senha'}
              </button>
            </form>
          </>
        )}
      </div>

      <p className="text-xs text-gray-700 mt-8">APEX Ortho © 2025 · Uso médico restrito</p>
    </div>
  )
}
