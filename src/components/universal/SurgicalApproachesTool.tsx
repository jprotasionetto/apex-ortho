import { useState } from 'react';
import type { GuideSection } from '@/types/guide';
import { Alert } from '@/components/ui/Alert.tsx';
import { surgicalApproachesData } from '@/data/universal/surgical-approaches.ts';

const TABS: { id: string; label: string }[] = [
  { id: 'shoulder-approaches',   label: '🦾 Ombro' },
  { id: 'elbow-approaches',      label: '💪 Cotovelo' },
  { id: 'wrist-hand-approaches', label: '✋ Punho/Mão' },
  { id: 'hip-approaches',        label: '⚙️ Quadril' },
  { id: 'femur-knee-approaches', label: '🦵 Fêmur/Joelho' },
  { id: 'ankle-foot-approaches', label: '🦶 Tornozelo/Pé' },
  { id: 'spine-approaches',      label: '🦴 Coluna' },
  { id: 'general-principles',    label: '📋 Princípios' },
];

const colorMap: Record<string, string> = {
  safe:    'border-green-500/30 bg-green-500/5',
  caution: 'border-yellow-500/30 bg-yellow-500/5',
  danger:  'border-red-500/30 bg-red-500/5',
  info:    'border-blue-500/30 bg-blue-500/5',
};

export default function SurgicalApproachesTool() {
  const [activeId, setActiveId] = useState<string>(surgicalApproachesData.sections[0].id);

  const activeSection = surgicalApproachesData.sections.find(
    (s) => s.id === activeId,
  ) as GuideSection;

  const sectionColorClass = activeSection.colorCode
    ? colorMap[activeSection.colorCode]
    : 'border-slate-700 bg-slate-800';

  return (
    <div className="space-y-5">
      {/* Header card */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">
              Vias de Acesso Cirúrgico — Referência Anatômica Completa
            </p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Intervalos internervosos, estruturas em risco e indicações das principais vias de acesso
              ortopédicas. Organizado por região anatômica.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">
              Como usar
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Selecione a região anatômica nas abas abaixo. Cada seção detalha as vias de acesso,
              estruturas nobres e indicações cirúrgicas.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">
              Cobertura
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              {surgicalApproachesData.sections.length} regiões: ombro, cotovelo, punho/mão, quadril,
              fêmur/joelho, tornozelo/pé, coluna e princípios gerais.
            </p>
          </div>
        </div>
      </div>

      {/* Region tabs */}
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                isActive
                  ? 'bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] font-semibold'
                  : 'bg-[#111111] text-gray-400 border-[rgba(212,175,55,0.15)] hover:text-white hover:border-[rgba(212,175,55,0.35)]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Section content */}
      <div className={`border rounded-xl p-5 space-y-3 ${sectionColorClass}`}>
        <h2 className="text-base font-semibold text-slate-100">{activeSection.title}</h2>

        <div className="space-y-1.5">
          {activeSection.content.map((line, i) => {
            if (line === '') {
              return <div key={i} className="h-2" />;
            }
            const isBold = line.startsWith('**');
            const isIndented = line.startsWith('  -') || line.startsWith('- ');
            const cleaned = line.replace(/\*\*/g, '');
            return (
              <p
                key={i}
                className={`text-sm leading-relaxed ${
                  isBold
                    ? 'text-slate-100 font-semibold mt-2'
                    : isIndented
                    ? 'text-slate-300 pl-4'
                    : 'text-slate-300'
                }`}
              >
                {cleaned}
              </p>
            );
          })}
        </div>

        {activeSection.keyPoints && activeSection.keyPoints.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              Pontos-chave
            </p>
            <ul className="space-y-1.5">
              {activeSection.keyPoints.map((kp, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-1 rounded-full bg-[#D4AF37]" />
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Clinical pearl and pitfall */}
      {surgicalApproachesData.clinicalPearl && (
        <Alert type="info">{surgicalApproachesData.clinicalPearl}</Alert>
      )}
      {surgicalApproachesData.pitfall && (
        <Alert type="caution">{surgicalApproachesData.pitfall}</Alert>
      )}

      {/* References */}
      {surgicalApproachesData.references && surgicalApproachesData.references.length > 0 && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.1)] rounded-xl p-4">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-3">
            Referências
          </p>
          <ol className="space-y-1.5">
            {surgicalApproachesData.references.map((ref, i) => (
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
