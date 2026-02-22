import { Link } from 'react-router-dom';
import { toolsRegistry } from '@/data/tools-registry.ts';
import { useAppStore } from '@/store/appStore.ts';
import { MODULE_COLORS } from '@/styles/theme.ts';
import { Badge } from '@/components/ui/Badge.tsx';

export default function RecentPage() {
  const recentTools = useAppStore((s) => s.recentTools);
  const recTools = recentTools.map((id) => toolsRegistry.find((t) => t.id === id)).filter(Boolean);
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-white">Recentes</h1>
      {recTools.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <p className="text-white font-medium">Nenhuma ferramenta acessada</p>
          <p className="text-[#6B7280] text-sm mt-1">As ferramentas que voce usar aparecerao aqui.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {recTools.map((tool) => tool && (
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
