import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/appStore.ts';
import { toolsRegistry } from '@/data/tools-registry.ts';
import { useSearch } from '@/hooks/useSearch.ts';
import { MODULE_COLORS } from '@/styles/theme.ts';
import { Badge } from '@/components/ui/Badge.tsx';

export function SearchModal() {
  const searchOpen = useAppStore((s) => s.searchOpen);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const { query, setQuery, results } = useSearch(toolsRegistry);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [setSearchOpen]);

  useEffect(() => { if (searchOpen) { setTimeout(() => inputRef.current?.focus(), 100); setQuery(''); } }, [searchOpen, setQuery]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]" onClick={() => setSearchOpen(false)}>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl w-full max-w-2xl mx-4 max-h-[70vh] overflow-hidden animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar ferramentas... (ex: Gustilo, MESS, Harris)"
              className="w-full bg-transparent text-lg text-white placeholder-[#6B7280] focus:outline-none" />
          </div>
        </div>
        <div className="overflow-y-auto max-h-[60vh] p-2">
          {results.length === 0 && query.length > 0 && <p className="text-sm text-[#6B7280] p-4 text-center">Nenhuma ferramenta encontrada</p>}
          {results.slice(0, 20).map((tool) => (
            <button key={tool.id} onClick={() => { navigate(`/app/module/${tool.module}/${tool.id}`); setSearchOpen(false); }}
              className="w-full text-left p-3 rounded-lg hover:bg-[rgba(212,175,55,0.06)] transition-colors flex items-center gap-3">
              <Badge color={MODULE_COLORS[tool.module]}>{tool.module}</Badge>
              <div><p className="text-sm font-medium text-white">{tool.name}</p>
                <p className="text-xs text-[#6B7280]">{tool.description}</p></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
