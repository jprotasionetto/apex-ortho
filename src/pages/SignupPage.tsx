import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff, Shield, Mail, User, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext.tsx'

export default function SignupPage() {
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres.')
      return
    }
    setSubmitting(true)
    setError('')
    const { error: err } = await signUp(email.trim(), password, fullName.trim())
    if (err) {
      setError(
        err.includes('already registered')
          ? 'Este email já está cadastrado. Faça login.'
          : err
      )
      setSubmitting(false)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)' }}>
            <CheckCircle2 className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Conta criada!</h2>
          <p className="text-sm text-gray-400 mb-6">
            Verifique seu email <span className="text-white font-medium">{email}</span> e clique no link de confirmação para ativar sua conta.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-xl text-sm font-semibold text-[#0A0A0A]"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8961E)' }}
          >
            Ir para o Login
          </button>
        </div>
      </div>
    )
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
          <h2 className="text-lg font-semibold text-white">Criar conta</h2>
          <p className="text-xs text-gray-400 mt-1">
            Crie sua conta para acessar após a compra.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nome completo"
              autoComplete="name"
              required
              className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(212,175,55,0.5)] transition-colors"
            />
          </div>

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
              placeholder="Senha (mín. 8 caracteres)"
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

          {error && (
            <p className="text-xs text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting || !email || !password || !fullName}
            className="w-full py-3 rounded-xl text-sm font-semibold text-[#0A0A0A] transition-all disabled:opacity-40"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8961E)' }}
          >
            {submitting ? 'Criando conta...' : 'Criar conta'}
          </button>
        </form>

        <div className="mt-5 pt-5 border-t border-[rgba(255,255,255,0.06)] text-center">
          <p className="text-xs text-gray-500">
            Já tem conta?{' '}
            <Link to="/login" className="text-[#D4AF37] hover:text-[#F4D03F] transition-colors">
              Entrar
            </Link>
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-700 mt-8">APEX Ortho © 2025 · Uso médico restrito</p>
    </div>
  )
}
