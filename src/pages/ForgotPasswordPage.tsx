import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Shield, AlertCircle, CheckCircle } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext.tsx'

export default function ForgotPasswordPage() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const { error: err } = await resetPassword(email.trim())
    if (err) {
      setError(err)
      setSubmitting(false)
    } else {
      setSent(true)
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
        {sent ? (
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Email enviado!</h2>
            <p className="text-sm text-gray-400 mb-6">
              Se existe uma conta com este email, você receberá as instruções de recuperação em instantes.
            </p>
            <Link
              to="/login"
              className="text-sm text-[#D4AF37] hover:text-[#F4D03F] transition-colors"
            >
              ← Voltar ao login
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white">Recuperar senha</h2>
              <p className="text-xs text-gray-400 mt-1">
                Informe seu email e enviaremos um link para criar uma nova senha.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  autoComplete="email"
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
                disabled={submitting || !email}
                className="w-full py-3 rounded-xl text-sm font-semibold text-[#0A0A0A] transition-all disabled:opacity-40"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8961E)' }}
              >
                {submitting ? 'Enviando...' : 'Enviar link de recuperação'}
              </button>
            </form>

            <div className="mt-5 pt-5 border-t border-[rgba(255,255,255,0.06)] text-center">
              <Link
                to="/login"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                ← Voltar ao login
              </Link>
            </div>
          </>
        )}
      </div>

      <p className="text-xs text-gray-700 mt-8">APEX Ortho © 2025 · Uso médico restrito</p>
    </div>
  )
}
