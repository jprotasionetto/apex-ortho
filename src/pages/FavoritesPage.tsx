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
      <h1 className="text-2xl font-bold text-slate-50">Favoritos</h1>
      {favTools.length === 0 ? (
        <div className="text-center py-12"><p className="text-slate-400">Nenhuma ferramenta favoritada ainda.</p>
          <p className="text-slate-500 text-sm mt-1">Clique na estrela em qualquer ferramenta para adicionar.</p></div>
      ) : (
        <div className="grid gap-3">
          {favTools.map((tool) => (
            <Link key={tool.id} to={`/app/module/${tool.module}/${tool.id}`} className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors">
              <h3 className="text-sm font-medium text-slate-100">{tool.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{tool.description}</p>
              <Badge color={MODULE_COLORS[tool.module]}>{tool.module}</Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
