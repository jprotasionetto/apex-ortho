import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';
import { Sidebar } from './Sidebar.tsx';
import { BottomNav } from './BottomNav.tsx';
import { SearchModal } from '@/components/tools/SearchModal.tsx';

function DisclaimerModal({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-2xl w-full max-w-lg p-6 space-y-4 animate-slide-up">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-xl font-bold text-white">Bem-vindo ao APEX Ortho</h2>
        </div>
        <div className="space-y-3 text-sm text-[#9CA3AF]">
          <p>Este aplicativo e uma <strong className="text-white">ferramenta de apoio a decisao clinica</strong> em Ortopedia e Traumatologia.</p>
          <div className="bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.15)] rounded-xl p-4">
            <p className="font-semibold text-[#D4AF37] text-xs uppercase tracking-wider mb-2">Aviso Importante</p>
            <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-0.5">•</span>
                Nao substitui o julgamento clinico profissional
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-0.5">•</span>
                Nao deve ser a unica base para decisoes terapeuticas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-0.5">•</span>
                Destinado a profissionais de saude qualificados
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-0.5">•</span>
                Classificacoes e scores sao auxiliares, nao absolutos
              </li>
            </ul>
          </div>
          <p className="text-xs text-[#6B7280]">Ao continuar, voce reconhece que este e um recurso educativo e de apoio, e que as decisoes clinicas devem ser individualizadas.</p>
        </div>
        <button
          onClick={onAccept}
          className="w-full py-3 rounded-xl font-semibold text-sm text-black tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D03F)' }}
        >
          Concordo e Continuar
        </button>
      </div>
    </div>
  );
}

export function AppShell() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('apex-ortho-disclaimer-accepted');
    if (!accepted) setShowDisclaimer(true);
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('apex-ortho-disclaimer-accepted', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <Sidebar />
      <SearchModal />
      {showDisclaimer && <DisclaimerModal onAccept={handleAcceptDisclaimer} />}
      <main className="lg:ml-64 pb-20 lg:pb-4">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Suspense fallback={
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-[rgba(212,175,55,0.3)] border-t-[#D4AF37] rounded-full animate-spin" />
            </div>
          }>
            <Outlet />
          </Suspense>
        </div>
        <footer className="text-center py-4 text-xs border-t border-[rgba(255,255,255,0.04)] mt-8">
          <div className="flex items-center justify-center gap-1.5 text-[#6B7280]">
            <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.832c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            Apoio a decisao clinica. Nao substitui o julgamento profissional.
          </div>
          <p className="mt-1 text-[10px] text-[rgba(255,255,255,0.15)]">APEX Ortho v1.0 — ortho.apexhealthia.com</p>
        </footer>
      </main>
      <BottomNav />
    </div>
  );
}
