import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { modules } from '@/data/modules.ts';
import { toolsRegistry } from '@/data/tools-registry.ts';
import { useAppStore } from '@/store/appStore.ts';
import { Badge } from '@/components/ui/Badge.tsx';
import type { ToolCategory } from '@/types/tool.ts';
import { MODULE_COLORS } from '@/styles/theme.ts';
import { CATEGORY_LABELS } from '@/types/tool.ts';

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const [filter, setFilter] = useState<ToolCategory | 'all'>('all');
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const favorites = useAppStore((s) => s.favorites);
  const mod = modules.find((m) => m.id === moduleId);
  const tools = useMemo(() => toolsRegistry.filter((t) => t.module === moduleId || t.crossModules?.includes(moduleId as any)), [moduleId]);
  const filtered = useMemo(() => filter === 'all' ? tools : tools.filter((t) => t.category === filter), [tools, filter]);
  const categories = useMemo(() => {
    const cats = new Set(tools.map((t) => t.category));
    return ['all' as const, ...Array.from(cats)] as (ToolCategory | 'all')[];
  }, [tools]);

  if (!mod) return <div className="text-center py-12 text-slate-400">Modulo nao encontrado</div>;
  const color = MODULE_COLORS[mod.id] || '#64748B';

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-300 mb-2 inline-block">{'<'} Voltar</Link>
        <h1 className="text-2xl font-bold text-slate-50">{mod.name}</h1>
        <p className="text-slate-400 mt-1">{mod.description}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${filter === cat ? 'bg-primary-600 text-white' : 'bg-slate-700 text-slate-400 hover:text-slate-200'}`}>
            {cat === 'all' ? 'Todos' : CATEGORY_LABELS[cat]}</button>
        ))}
      </div>
      <div className="grid gap-3">
        {filtered.map((tool) => (
          <Link key={tool.id} to={`/module/${moduleId}/${tool.id}`}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium text-slate-100">{tool.name}</h3>
                {!tool.component && <span className="text-[10px] bg-slate-700 text-slate-500 px-1.5 py-0.5 rounded">Em breve</span>}
              </div>
              <p className="text-xs text-slate-500">{tool.description}</p>
              <div className="flex gap-1.5 mt-2"><Badge color={color}>{mod.name}</Badge><Badge color="#64748B">{CATEGORY_LABELS[tool.category]}</Badge></div>
            </div>
            <button onClick={(e) => { e.preventDefault(); toggleFavorite(tool.id); }} className={`p-1.5 ${favorites.includes(tool.id) ? 'text-yellow-400' : 'text-slate-600 hover:text-slate-400'}`}>
              <svg className="w-4 h-4" fill={favorites.includes(tool.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg></button>
          </Link>
        ))}
      </div>
    </div>
  );
}
