import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';

const ACCESS_CODE = 'apex2025';
const AUTH_KEY = 'apex_auth_v1';

export default function LoginPage() {
  const [code, setCode] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (code === ACCESS_CODE) {
        localStorage.setItem(AUTH_KEY, '1');
        navigate('/app');
      } else {
        setError('Código de acesso incorreto.');
        setLoading(false);
      }
    }, 500);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
          style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))', border: '1px solid rgba(212,175,55,0.3)' }}>
          <Shield className="w-8 h-8 text-[#D4AF37]" />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">APEX Ortho</h1>
        <p className="text-sm text-gray-500 mt-1">Plataforma clínica de ortopedia</p>
      </div>

      {/* Card */}
      <div className="w-full max-w-sm bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-2xl p-6 shadow-2xl">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">Acesso restrito</h2>
          <p className="text-xs text-gray-400 mt-1">Insira o código de acesso para continuar.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type={show ? 'text' : 'password'}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código de acesso"
              autoComplete="current-password"
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
            <p className="text-xs text-red-400 flex items-center gap-1">
              <span>⚠</span> {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !code}
            className="w-full py-3 rounded-xl text-sm font-semibold text-[#0A0A0A] transition-all disabled:opacity-40"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8961E)' }}
          >
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </form>
      </div>

      <p className="text-xs text-gray-600 mt-8">APEX Ortho © 2025 · Uso médico restrito</p>
    </div>
  );
}
