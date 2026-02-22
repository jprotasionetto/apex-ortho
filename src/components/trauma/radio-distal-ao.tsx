import { useState } from 'react';
import { radioDistalAOData, fernandezClassificationData } from '@/data/trauma/radio-distal-ao.ts';

const colorMap: Record<string, string> = { safe: '#22C55E', caution: '#F59E0B', danger: '#EF4444' };

const MANUAL_IMAGES = [
  { src: '/images/manual-trauma/page100_img1.png', caption: 'Desvio angular — parâmetros radiográficos do rádio distal' },
  { src: '/images/manual-trauma/page104_img1.png', caption: 'Três colunas do rádio distal (conceito de Rikli & Regazzoni)' },
  { src: '/images/manual-trauma/page104_img2.png', caption: 'Três colunas — vista lateral' },
  { src: '/images/manual-trauma/page106_img1.png', caption: 'Parâmetros articulares — distância e altura radial' },
  { src: '/images/manual-trauma/page112_img1.png', caption: 'Sistema AO 23-A/B/C — representação esquemática' },
  { src: '/images/manual-trauma/page113_img1.png', caption: 'Parâmetros radiográficos para decisão terapêutica' },
];

const TABS = [
  { id: 'ao', label: 'AO 23 (A/B/C)' },
  { id: 'fernandez', label: 'Fernandez (I-V)' },
];

export default function RadioDistalAOTool() {
  const [activeTab, setActiveTab] = useState<'ao' | 'fernandez'>('ao');
  const [selected, setSelected] = useState<string | null>(null);

  const data = activeTab === 'ao' ? radioDistalAOData : fernandezClassificationData;
  const active = selected ? data.grades.find((g) => g.id === selected) : null;

  const handleTabChange = (tab: 'ao' | 'fernandez') => {
    setActiveTab(tab);
    setSelected(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-1">
          Rádio Distal — Manual SBOT (pp. 100-113)
        </p>
        <p className="text-xs text-gray-500">
          Classificação AO (23-A/B/C) correlacionada com Fernandez (I-V) — parâmetros radiográficos e indicações cirúrgicas
        </p>
      </div>

      {/* Image gallery */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Imagens do Manual — Anatomia e Parâmetros Radiográficos
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {MANUAL_IMAGES.map((img) => (
            <div
              key={img.src}
              className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-36 object-contain bg-[#0A0A0A]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="px-2 py-1 bg-[#0A0A0A]">
                <p className="text-xs text-gray-400 leading-tight">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Classification tabs */}
      <div className="flex gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id as 'ao' | 'fernandez')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all border ${
              activeTab === tab.id
                ? 'bg-[rgba(212,175,55,0.15)] border-[#D4AF37] text-[#D4AF37]'
                : 'bg-[#111111] border-[rgba(255,255,255,0.08)] text-gray-400 hover:border-[rgba(212,175,55,0.3)] hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Classification name */}
      <div className="px-1">
        <h3 className="text-sm font-semibold text-white">{data.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{data.author} · {data.year}</p>
      </div>

      {/* Grades list */}
      <div className="grid gap-2">
        {data.grades.map((g) => (
          <button
            key={g.id}
            onClick={() => setSelected(g.id === selected ? null : g.id)}
            className={`text-left p-4 rounded-xl border transition-all ${
              selected === g.id
                ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]'
                : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,175,55,0.3)] bg-[#111111]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: colorMap[g.colorCode] }}
              />
              <span className="font-medium text-white text-sm">{g.label}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 ml-6">{g.description}</p>
          </button>
        ))}
      </div>

      {/* Selected grade details */}
      {active && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: colorMap[active.colorCode] }}
            />
            <h3 className="text-lg font-semibold text-white">{active.label}</h3>
          </div>
          <p className="text-sm text-gray-300 ml-7">{active.description}</p>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              Critérios Diagnósticos
            </h4>
            <ul className="space-y-1">
              {active.criteria.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
              Conduta / Tratamento
            </h4>
            <p className="text-sm text-gray-300">{active.treatment}</p>
          </div>
        </div>
      )}

      {/* References */}
      {data.references && data.references.length > 0 && (
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-xl p-4">
          <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-2">Referências</p>
          <ul className="space-y-1">
            {data.references.map((ref, i) => (
              <li key={i} className="text-xs text-gray-500 leading-relaxed">
                {typeof ref === 'string' ? ref : `${ref.authors}. ${ref.title}. ${ref.journal}. ${ref.year}.`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
