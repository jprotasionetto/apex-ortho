import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';
import { osteossintesePrinciplesData } from '@/data/universal/osteossintese-guide.ts';

const colorMap: Record<string, string> = {
  safe:    'border-green-500/30 bg-green-500/5',
  caution: 'border-yellow-500/30 bg-yellow-500/5',
  danger:  'border-red-500/30 bg-red-500/5',
  info:    'border-blue-500/30 bg-blue-500/5',
};

export default function OsteossintesePrinciplesGuideTool() {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    osteossintesePrinciplesData.sections[0].id
  );

  const activeSection = osteossintesePrinciplesData.sections.find(
    (s) => s.id === activeSectionId
  ) ?? osteossintesePrinciplesData.sections[0];

  return (
    <div className="space-y-5">
      {/* Header card */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">
              Princípios de Osteossíntese — AO/ASIF, Implantes e Biomecânica
            </p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Guia completo de fixação de fraturas: princípios AO, parafusos (cortical, esponjoso, lag, bloqueado),
              placas (DCP, LCP, neutralização, ponte), hastes intramedulares, fixadores externos,
              enxerto ósseo e biomecânica (strain theory, stress shielding, lei de Wolff).
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Como usar</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Selecione uma das 7 abas para navegar entre os tópicos. Cada seção apresenta conteúdo detalhado
              e pontos-chave destacados em ouro.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Cobertura</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              {osteossintesePrinciplesData.sections.length} tópicos: princípios AO, parafusos, placas,
              hastes IM, fixadores externos, enxerto ósseo e biomecânica.
            </p>
          </div>
        </div>
      </div>

      {/* Section tabs */}
      <div className="flex flex-wrap gap-2">
        {osteossintesePrinciplesData.sections.map((section) => {
          const isActive = activeSectionId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                isActive
                  ? 'bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] font-semibold'
                  : 'bg-[#111111] text-gray-400 border-[rgba(212,175,55,0.15)] hover:text-white hover:border-[rgba(212,175,55,0.35)]'
              }`}
            >
              {section.title}
            </button>
          );
        })}
      </div>

      {/* Active section content */}
      <div
        className={`border rounded-xl p-4 space-y-3 ${
          activeSection.colorCode ? colorMap[activeSection.colorCode] : 'border-slate-700 bg-slate-800'
        }`}
      >
        <h2 className="text-base font-semibold text-slate-100">{activeSection.title}</h2>

        {/* Content bullet list */}
        <ul className="space-y-2">
          {activeSection.content.map((line, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-[#D4AF37]/60" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {/* Key points */}
        {activeSection.keyPoints && activeSection.keyPoints.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              Pontos-chave
            </p>
            <ul className="space-y-1.5">
              {activeSection.keyPoints.map((kp, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="flex-shrink-0 w-1 h-1 mt-1.5 rounded-full bg-[#D4AF37]" />
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Clinical pearl and pitfall */}
      {osteossintesePrinciplesData.clinicalPearl && (
        <Alert type="info">{osteossintesePrinciplesData.clinicalPearl}</Alert>
      )}
      {osteossintesePrinciplesData.pitfall && (
        <Alert type="caution">{osteossintesePrinciplesData.pitfall}</Alert>
      )}

      {/* References */}
      {osteossintesePrinciplesData.references && osteossintesePrinciplesData.references.length > 0 && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.1)] rounded-xl p-4">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-3">
            Referências
          </p>
          <ol className="space-y-1.5">
            {osteossintesePrinciplesData.references.map((ref, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                <span className="flex-shrink-0 text-[#D4AF37]/50 font-mono text-[10px] mt-0.5">
                  {i + 1}.
                </span>
                <span>{ref}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
