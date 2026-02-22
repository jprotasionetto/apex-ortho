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

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-slate-50">APEX Ortho</h1>
        <p className="text-slate-400 mt-1">Ferramentas clinicas interativas para ortopedia e traumatologia</p>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex-1 h-2 bg-slate-700 rounded-full"><div className="h-full bg-primary-500 rounded-full transition-all" style={{ width: `${(implementedCount / totalCount) * 100}%` }} /></div>
          <span className="text-xs text-slate-400">{implementedCount}/{totalCount} ferramentas</span>
        </div>
      </div>
      {recentTools.length > 0 && (
        <div><h2 className="text-lg font-semibold text-slate-200 mb-3">Recentes</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {recentTools.slice(0, 5).map((id) => {
              const tool = toolsRegistry.find((t) => t.id === id);
              if (!tool) return null;
              return <Link key={id} to={`/module/${tool.module}/${tool.id}`} className="shrink-0 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-slate-600">{tool.shortName}</Link>;
            })}
          </div>
        </div>
      )}
      {favorites.length > 0 && (
        <div><h2 className="text-lg font-semibold text-slate-200 mb-3">Favoritos</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {favorites.slice(0, 5).map((id) => {
              const tool = toolsRegistry.find((t) => t.id === id);
              if (!tool) return null;
              return <Link key={id} to={`/module/${tool.module}/${tool.id}`} className="shrink-0 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-slate-600">{tool.shortName}</Link>;
            })}
          </div>
        </div>
      )}
      <div><h2 className="text-lg font-semibold text-slate-200 mb-4">Modulos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {moduleData.map((mod) => (
            <Link key={mod.id} to={`/module/${mod.id}`} className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: MODULE_COLORS[mod.id] + '20' }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MODULE_COLORS[mod.id] }} /></div>
              <h3 className="text-sm font-medium text-slate-200 group-hover:text-slate-50">{mod.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{mod.toolCount} ferramentas</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
