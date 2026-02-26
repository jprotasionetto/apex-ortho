import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';
import { orthopedicAnglesData } from '@/data/universal/orthopedic-angles.ts';

// Map each section id prefix to a body region tab
const REGIONS = [
  { key: 'hip',      label: 'Quadril',       prefix: 'hip-' },
  { key: 'knee',     label: 'Joelho',         prefix: 'knee-' },
  { key: 'foot',     label: 'Pé / Tornozelo', prefix: 'foot-' },
  { key: 'spine',    label: 'Coluna',         prefix: 'spine-' },
  { key: 'shoulder', label: 'Ombro',          prefix: 'shoulder-' },
  { key: 'elbow',    label: 'Cotovelo',       prefix: 'elbow-' },
  { key: 'forearm',  label: 'Antebraço',      prefix: 'forearm-' },
] as const;

type RegionKey = typeof REGIONS[number]['key'];

const colorMap: Record<string, string> = {
  safe:    'border-green-500/30 bg-green-500/5',
  caution: 'border-yellow-500/30 bg-yellow-500/5',
  danger:  'border-red-500/30 bg-red-500/5',
  info:    'border-blue-500/30 bg-blue-500/5',
};

const badgeMap: Record<string, string> = {
  safe:    'bg-green-500/15 text-green-300 border border-green-500/30',
  caution: 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30',
  danger:  'bg-red-500/15 text-red-300 border border-red-500/30',
  info:    'bg-blue-500/15 text-blue-300 border border-blue-500/30',
};

const badgeLabel: Record<string, string> = {
  safe:    'Normal',
  caution: 'Atenção',
  danger:  'Crítico',
  info:    'Referência',
};

// Extract the "Normal: X" value from a section's first keyPoint or content
function extractNormalValue(content: string[]): string | null {
  for (const line of content) {
    const m = line.match(/Normal[^:]*:\s*([^|;–\n]+)/i);
    if (m) return m[1].trim();
  }
  return null;
}

export default function OrthopedicAnglesGuideTool() {
  const [activeRegion, setActiveRegion] = useState<RegionKey>('hip');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const activeSections = orthopedicAnglesData.sections.filter((s) => {
    const region = REGIONS.find((r) => r.key === activeRegion);
    return region ? s.id.startsWith(region.prefix) : false;
  });

  return (
    <div className="space-y-5">
      {/* Header card */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Ângulos Ortopédicos — Referência Radiográfica Completa</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Valores normais, técnica de medição e significado clínico dos principais ângulos e parâmetros radiográficos ortopédicos.
              Organizado por região anatômica. Inclui quadril, joelho, pé/tornozelo, coluna, ombro, cotovelo e antebraço.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Como usar</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Selecione a região anatômica nas abas abaixo. Toque em um ângulo para expandir os detalhes completos de medição e significado clínico.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Cobertura</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              {orthopedicAnglesData.sections.length} parâmetros em {REGIONS.length} regiões: CEA, CCD, alfa, Cobb, PI/PT/SS, LDFA, MPTA, TTTG, Böhler, Meary e mais.
            </p>
          </div>
        </div>
      </div>

      {/* Region tabs */}
      <div className="flex flex-wrap gap-2">
        {REGIONS.map((region) => {
          const isActive = activeRegion === region.key;
          const count = orthopedicAnglesData.sections.filter((s) => s.id.startsWith(region.prefix)).length;
          return (
            <button
              key={region.key}
              onClick={() => {
                setActiveRegion(region.key);
                setExpandedId(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                isActive
                  ? 'bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] font-semibold'
                  : 'bg-[#111111] text-gray-400 border-[rgba(212,175,55,0.15)] hover:text-white hover:border-[rgba(212,175,55,0.35)]'
              }`}
            >
              {region.label}
              <span className={`text-[10px] rounded-full px-1.5 py-0.5 ${
                isActive ? 'bg-[#0A0A0A]/20 text-[#0A0A0A]' : 'bg-[rgba(212,175,55,0.1)] text-[#D4AF37]'
              }`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Angle cards grid */}
      <div className="space-y-3">
        {activeSections.map((section) => {
          const isExpanded = expandedId === section.id;
          const normalVal = extractNormalValue(section.keyPoints?.length ? section.keyPoints : section.content);
          const colorClass = section.colorCode ? colorMap[section.colorCode] : 'border-slate-700 bg-slate-800';
          const badgeClass = section.colorCode ? badgeMap[section.colorCode] : '';
          const badgeTxt = section.colorCode ? badgeLabel[section.colorCode] : '';

          // Strip trailing region label in parentheses for display
          const displayTitle = section.title.replace(/\s*—\s*[^—]+$/, '');

          return (
            <div
              key={section.id}
              className={`border rounded-xl overflow-hidden transition-all ${colorClass}`}
            >
              {/* Card header — always visible, tap to toggle */}
              <button
                className="w-full text-left p-4"
                onClick={() => setExpandedId(isExpanded ? null : section.id)}
                aria-expanded={isExpanded}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {badgeTxt && (
                        <span className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${badgeClass}`}>
                          {badgeTxt}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-100 leading-snug">{displayTitle}</p>
                    {normalVal && (
                      <p className="text-xs mt-1">
                        <span className="text-gray-500">Normal: </span>
                        <span className="text-[#D4AF37] font-semibold">{normalVal}</span>
                      </p>
                    )}
                  </div>
                  {/* Expand chevron */}
                  <div className={`flex-shrink-0 mt-0.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-3 border-t border-white/5">
                  <div className="space-y-1.5 pt-3">
                    {section.content.map((line, i) => {
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

                  {section.keyPoints && section.keyPoints.length > 0 && (
                    <div className="mt-2 pt-3 border-t border-white/5">
                      <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Pontos-chave</p>
                      <ul className="space-y-1.5">
                        {section.keyPoints.map((kp, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="flex-shrink-0 w-1 h-1 mt-1.5 rounded-full bg-[#D4AF37]" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Global pearls */}
      {orthopedicAnglesData.clinicalPearl && (
        <Alert type="info">{orthopedicAnglesData.clinicalPearl}</Alert>
      )}
      {orthopedicAnglesData.pitfall && (
        <Alert type="caution">{orthopedicAnglesData.pitfall}</Alert>
      )}

      {/* References */}
      {orthopedicAnglesData.references && orthopedicAnglesData.references.length > 0 && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.1)] rounded-xl p-4">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-3">Referências</p>
          <ol className="space-y-1.5">
            {orthopedicAnglesData.references.map((ref, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                <span className="flex-shrink-0 text-[#D4AF37]/50 font-mono text-[10px] mt-0.5">{i + 1}.</span>
                <span>{ref}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
