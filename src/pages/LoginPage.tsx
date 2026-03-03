import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Lock, Eye, EyeOff, Shield, Mail, AlertCircle } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext.tsx'

export default function LoginPage() {
  const { signIn, user, subscription, loading } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const reason = params.get('reason')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Redireciona se já autenticado e com acesso
  useEffect(() => {
    if (!loading && user && subscription?.hasAccess) {
      navigate('/app', { replace: true })
    }
  }, [user, subscription, loading, navigate])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const { error: err } = await signIn(email.trim(), password)
    if (err) {
      setError(
        err.includes('Invalid login')
          ? 'Email ou senha incorretos.'
          : err.includes('Email not confirmed')
          ? 'Confirme seu email antes de entrar.'
          : err
      )
      setSubmitting(false)
    }
    // Redirecionamento feito pelo useEffect acima via subscription change
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
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">Entrar na conta</h2>
          <p className="text-xs text-gray-400 mt-1">
            Acesse com o email cadastrado no momento da compra.
          </p>
        </div>

        {/* Aviso de acesso negado */}
        {reason === 'no_access' && (
          <div className="mb-4 flex items-start gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Sua assinatura está inativa ou expirada.{' '}
              <Link to="/#precos" className="underline hover:text-amber-300">
                Renove o acesso aqui.
              </Link>
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
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

          {/* Senha */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              autoComplete="current-password"
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

          {error && (
            <p className="text-xs text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting || !email || !password}
            className="w-full py-3 rounded-xl text-sm font-semibold text-[#0A0A0A] transition-all disabled:opacity-40"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8961E)' }}
          >
            {submitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-5 pt-5 border-t border-[rgba(255,255,255,0.06)] text-center space-y-2">
          <p className="text-xs text-gray-500">
            Ainda não tem conta?{' '}
            <Link to="/signup" className="text-[#D4AF37] hover:text-[#F4D03F] transition-colors">
              Criar conta
            </Link>
          </p>
          <Link
            to="/forgot-password"
            className="block text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            Esqueceu a senha?
          </Link>
          <Link
            to="/#precos"
            className="block text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            Ver planos →
          </Link>
        </div>
      </div>

      <p className="text-xs text-gray-700 mt-8">APEX Ortho © 2025 · Uso médico restrito</p>
    </div>
  )
}
