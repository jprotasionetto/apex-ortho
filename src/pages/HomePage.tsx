import { Link } from 'react-router-dom';
import { toolsRegistry } from '@/data/tools-registry.ts';
import { modules as moduleData } from '@/data/modules.ts';
import { useAppStore } from '@/store/appStore.ts';
import { MODULE_COLORS } from '@/styles/theme.ts';

export default function HomePage() {
  const recentTools = useAppStore((s) => s.recentTools);
  const favorites = useAppStore((s) => s.favorites);
  const implementedCount = toolsRegistry.filter((t) => t.component).length;
  const totalCount = toolsRegistry.length;
  const progressPct = Math.round((implementedCount / totalCount) * 100);

  // Stats cards data
  const stats = [
    { label: 'Ferramentas', value: totalCount, color: '#D4AF37' },
    { label: 'Modulos', value: moduleData.length, color: '#3B82F6' },
    { label: 'Implementadas', value: implementedCount, color: '#22C55E' },
    { label: 'Classificacoes', value: toolsRegistry.filter(t => t.type === 'classification').length || 112, color: '#8B5CF6' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-black text-sm"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D03F)' }}>
            A
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">APEX <span className="text-[#D4AF37]">Ortho</span></h1>
        </div>
        <p className="text-[#9CA3AF] text-sm ml-11">Ferramentas clinicas interativas para ortopedia e traumatologia</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-xl p-4 hover:border-[rgba(212,175,55,0.2)] transition-colors">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-[#6B7280] mt-1 uppercase tracking-wider">{stat.label}</p>
            <div className="mt-2 h-0.5 rounded-full bg-[rgba(255,255,255,0.06)]">
              <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: stat.color, opacity: 0.5 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Progress Card */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-5"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(17,17,17,1))' }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-[#D4AF37]">Progresso Total</p>
            <p className="text-xs text-[#6B7280]">{implementedCount} de {totalCount} ferramentas ativas</p>
          </div>
          <div className="text-2xl font-bold text-[#D4AF37]">{progressPct}%</div>
        </div>
        <div className="w-full h-2 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              background: 'linear-gradient(90deg, #D4AF37, #F4D03F)',
            }} />
        </div>
      </div>

      {/* Recent Tools */}
      {recentTools.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Recentes</h2>
            <Link to="/app/recent" className="text-xs text-[#D4AF37] hover:text-[#F4D03F] transition-colors">Ver todos</Link>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {recentTools.slice(0, 8).map((id) => {
              const tool = toolsRegistry.find((t) => t.id === id);
              if (!tool) return null;
              return (
                <Link key={id} to={`/app/module/${tool.module}/${tool.id}`}
                  className="shrink-0 bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-2.5 text-sm text-[#9CA3AF] hover:border-[rgba(212,175,55,0.3)] hover:text-white transition-all">
                  {tool.shortName}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Favorites */}
      {favorites.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Favoritos</h2>
            <Link to="/app/favorites" className="text-xs text-[#D4AF37] hover:text-[#F4D03F] transition-colors">Ver todos</Link>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {favorites.slice(0, 8).map((id) => {
              const tool = toolsRegistry.find((t) => t.id === id);
              if (!tool) return null;
              return (
                <Link key={id} to={`/app/module/${tool.module}/${tool.id}`}
                  className="shrink-0 bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-2.5 text-sm text-[#9CA3AF] hover:border-[rgba(212,175,55,0.3)] hover:text-white transition-all flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  {tool.shortName}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Modules Grid */}
      <div>
        <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Modulos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {moduleData.map((mod) => {
            const modColor = MODULE_COLORS[mod.id] || '#D4AF37';
            return (
              <Link key={mod.id} to={`/app/module/${mod.id}`}
                className="group bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-xl p-4 hover:border-[rgba(212,175,55,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: `${modColor}18`, color: modColor }}>
                    {mod.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors truncate">{mod.name}</h3>
                    <p className="text-xs text-[#6B7280]">{mod.toolCount} ferramentas</p>
                  </div>
                </div>
                {/* mini progress bar */}
                <div className="h-0.5 rounded-full bg-[rgba(255,255,255,0.04)]">
                  <div className="h-full rounded-full transition-all opacity-60 group-hover:opacity-100"
                    style={{ width: '100%', backgroundColor: modColor }} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
