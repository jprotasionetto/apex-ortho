import { Suspense, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toolsRegistry } from '@/data/tools-registry.ts';
import { useAppStore } from '@/store/appStore.ts';

export default function ToolPage() {
  const { moduleId, toolId } = useParams<{ moduleId: string; toolId: string }>();
  const addRecent = useAppStore((s) => s.addRecent);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const favorites = useAppStore((s) => s.favorites);
  const tool = toolsRegistry.find((t) => t.id === toolId && (t.module === moduleId || t.crossModules?.includes(moduleId as any)));

  useEffect(() => { if (toolId) addRecent(toolId); }, [toolId, addRecent]);

  if (!tool) return <div className="text-center py-12 text-[#6B7280]">Ferramenta nao encontrada</div>;
  const Component = tool.component;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <Link to={`/app/module/${moduleId}`} className="text-sm text-[#6B7280] hover:text-[#D4AF37] inline-flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Voltar
        </Link>
        <button onClick={() => toggleFavorite(tool.id)} className={`p-2 rounded-lg transition-colors ${favorites.includes(tool.id) ? 'text-[#D4AF37] bg-[rgba(212,175,55,0.1)]' : 'text-[#6B7280] hover:text-[#D4AF37]'}`}>
          <svg className="w-5 h-5" fill={favorites.includes(tool.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg></button>
      </div>
      {Component ? (
        <Suspense fallback={
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-2 border-[rgba(212,175,55,0.3)] border-t-[#D4AF37] rounded-full animate-spin" />
          </div>
        }>
          <Component />
        </Suspense>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </div>
          <p className="text-white text-lg font-medium">Em desenvolvimento</p>
          <p className="text-[#6B7280] text-sm mt-2">Esta ferramenta estara disponivel em breve!</p>
        </div>
      )}
    </div>
  );
}
