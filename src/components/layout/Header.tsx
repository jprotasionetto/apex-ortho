import { useAppStore } from '@/store/appStore.ts';
import { Link } from 'react-router-dom';

export function Header() {
  const toggleSidebar = useAppStore((s) => s.toggleSidebar);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);

  return (
    <header className="h-14 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between px-4 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="lg:hidden p-2 text-[#6B7280] hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md flex items-center justify-center font-bold text-black text-xs"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D03F)' }}>
            A
          </div>
          <span className="text-sm font-bold tracking-wider">
            <span className="text-white">APEX</span>
            <span className="text-[#D4AF37] ml-1">Ortho</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setSearchOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111111] border border-[rgba(255,255,255,0.06)] text-sm text-[#6B7280] hover:text-white hover:border-[rgba(212,175,55,0.2)] transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="hidden sm:inline">Buscar</span><kbd className="hidden sm:inline text-xs bg-[rgba(255,255,255,0.06)] text-[#6B7280] px-1.5 py-0.5 rounded">Ctrl+K</kbd>
        </button>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 text-[#6B7280] hover:text-[#D4AF37] transition-colors">
          {theme === 'dark' ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
        </button>
      </div>
    </header>
  );
}
