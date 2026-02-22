import { Link } from 'react-router-dom';
import { toolsRegistry } from '@/data/tools-registry.ts';
import { useAppStore } from '@/store/appStore.ts';
import { MODULE_COLORS } from '@/styles/theme.ts';
import { Badge } from '@/components/ui/Badge.tsx';

export default function FavoritesPage() {
  const favorites = useAppStore((s) => s.favorites);
  const favTools = toolsRegistry.filter((t) => favorites.includes(t.id));
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-white">Favoritos</h1>
      {favTools.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
          </div>
          <p className="text-white font-medium">Nenhuma ferramenta favoritada</p>
          <p className="text-[#6B7280] text-sm mt-1">Clique na estrela em qualquer ferramenta para adicionar.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {favTools.map((tool) => (
            <Link key={tool.id} to={`/app/module/${tool.module}/${tool.id}`}
              className="bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-xl p-4 hover:border-[rgba(212,175,55,0.2)] transition-all">
              <h3 className="text-sm font-medium text-white">{tool.name}</h3>
              <p className="text-xs text-[#6B7280] mt-1">{tool.description}</p>
              <Badge color={MODULE_COLORS[tool.module]}>{tool.module}</Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
