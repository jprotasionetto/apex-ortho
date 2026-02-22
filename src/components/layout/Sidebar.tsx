import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '@/store/appStore.ts';
import { MODULE_COLORS } from '@/styles/theme.ts';
import { MODULE_LABELS } from '@/types/tool.ts';
import type { ModuleId } from '@/types/tool.ts';

const modules: ModuleId[] = ['trauma','shoulder','elbow','hand','hip','knee','spine','foot','tumor','pediatric','reconstruction','sports','universal'];

export function Sidebar() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen);
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);
  const location = useLocation();
  return (
    <>
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <aside className={`fixed top-14 left-0 bottom-0 w-64 bg-[#0A0A0A] border-r border-[rgba(255,255,255,0.06)] z-30 transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <nav className="p-3 space-y-1">
          <Link to="/app" onClick={() => setSidebarOpen(false)} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${location.pathname === '/app' ? 'bg-[rgba(212,175,55,0.1)] text-[#D4AF37]' : 'text-[#9CA3AF] hover:bg-[rgba(255,255,255,0.04)] hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Inicio</Link>
          <Link to="/app/favorites" onClick={() => setSidebarOpen(false)} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${location.pathname === '/app/favorites' ? 'bg-[rgba(212,175,55,0.1)] text-[#D4AF37]' : 'text-[#9CA3AF] hover:bg-[rgba(255,255,255,0.04)] hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            Favoritos</Link>
          <Link to="/app/recent" onClick={() => setSidebarOpen(false)} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${location.pathname === '/app/recent' ? 'bg-[rgba(212,175,55,0.1)] text-[#D4AF37]' : 'text-[#9CA3AF] hover:bg-[rgba(255,255,255,0.04)] hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Recentes</Link>
          <div className="pt-4 pb-2"><p className="px-3 text-xs font-medium text-[#6B7280] uppercase tracking-wider">Modulos</p></div>
          {modules.map((mod) => (
            <Link key={mod} to={`/app/module/${mod}`} onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${location.pathname.startsWith(`/app/module/${mod}`) ? 'bg-[rgba(255,255,255,0.06)] text-white' : 'text-[#9CA3AF] hover:bg-[rgba(255,255,255,0.04)] hover:text-white'}`}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: MODULE_COLORS[mod] }} />
              {MODULE_LABELS[mod]}</Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
