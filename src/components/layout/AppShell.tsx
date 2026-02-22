import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';
import { Sidebar } from './Sidebar.tsx';
import { BottomNav } from './BottomNav.tsx';
import { SearchModal } from '@/components/tools/SearchModal.tsx';
import { useAppStore } from '@/store/appStore.ts';

function DisclaimerModal({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg p-6 space-y-4 animate-slide-up">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Bem-vindo ao APEX Ortho</h2>
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <p>Este aplicativo e uma <strong className="text-slate-100">ferramenta de apoio a decisao clinica</strong> em Ortopedia e Traumatologia.</p>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-yellow-300">
            <p className="font-medium">Aviso Importante</p>
            <ul className="mt-1 space-y-1 text-xs">
              <li>- Nao substitui o julgamento clinico profissional</li>
              <li>- Nao deve ser a unica base para decisoes terapeuticas</li>
              <li>- Destinado a profissionais de saude qualificados</li>
              <li>- Classificacoes e scores sao auxiliares, nao absolutos</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500">Ao continuar, voce reconhece que este e um recurso educativo e de apoio, e que as decisoes clinicas devem ser individualizadas.</p>
        </div>
        <button onClick={onAccept} className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-colors">
          Concordo e Continuar
        </button>
      </div>
    </div>
  );
}

export function AppShell() {
  const theme = useAppStore((s) => s.theme);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('apex-ortho-disclaimer-accepted');
    if (!accepted) setShowDisclaimer(true);
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('apex-ortho-disclaimer-accepted', 'true');
    setShowDisclaimer(false);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0A0A0A] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Header />
      <Sidebar />
      <SearchModal />
      {showDisclaimer && <DisclaimerModal onAccept={handleAcceptDisclaimer} />}
      <main className="lg:ml-64 pb-20 lg:pb-4">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Suspense fallback={<div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500" /></div>}>
            <Outlet />
          </Suspense>
        </div>
        <footer className={`text-center py-4 text-xs border-t mt-8 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className={`flex items-center justify-center gap-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            <svg className="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.832c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            Apoio a decisao clinica. Nao substitui o julgamento profissional.
          </div>
          <p className={`mt-1 text-[10px] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>APEX Ortho v1.0 - ortho.apexhealthia.com</p>
        </footer>
      </main>
      <BottomNav />
    </div>
  );
}
