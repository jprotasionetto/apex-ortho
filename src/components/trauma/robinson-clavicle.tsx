import { useState } from 'react';
import { robinsonClavicleData } from '@/data/trauma/robinson-clavicle.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const colorMap: Record<string, string> = { safe: '#22C55E', caution: '#F59E0B', danger: '#EF4444' };

const images = [
  { src: '/images/manual-trauma/page61_img1.png', caption: 'Classificação de Robinson — terços da clavícula' },
  { src: '/images/manual-trauma/page61_img2.png', caption: 'Tipos de fratura — terço médio e distal' },
  { src: '/images/manual-trauma/page62_img1.png', caption: 'Anatomia e relações neurovasculares' },
  { src: '/images/manual-trauma/page90_img3.png', caption: 'Tratamento definitivo — fixação da clavícula' },
];

export default function RobinsonClavicleTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const data = robinsonClavicleData;
  const active = selected ? data.grades.find((g) => g.id === selected) : null;
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação de Robinson — Fraturas da Clavícula</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Classifica fraturas da clavícula em 3 grupos por localização: Tipo 1 (medial), Tipo 2 (diáfise/médio — 80%) e Tipo 3 (lateral). Subtipados por deslocamento e cominuição. Orienta cirurgia vs conservador.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura da clavícula. Tipo 2B (diáfise deslocada) é o mais comum e o que mais tem benefício cirúrgico comprovado. TC para lateral (Tipo 3) para avaliar articulação AC.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tipo 1: geralmente conservador. Tipo 2A (não deslocada): conservador (tipoia). Tipo 2B (deslocada &gt;100%, encurtamento &gt;2cm, cominutiva): cirurgia — placa superior ou ânterosuperior. Reduz pseudartrose (de 15% para &lt;5%) e acelera retorno ao esporte. Tipo 3: classificar como Neer para lesão AC.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Clavícula — Manual SBOT (pp. 44–49)</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {data.grades.map((g) => (
          <button key={g.id} onClick={() => setSelected(g.id === selected ? null : g.id)} className={`text-left p-4 rounded-xl border transition-all ${selected === g.id ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]' : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,175,55,0.3)] bg-[#111111]'}`}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colorMap[g.colorCode] }} />
              <span className="font-medium text-white text-sm">{g.label}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 ml-6">{g.description}</p>
          </button>
        ))}
      </div>
      {active && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colorMap[active.colorCode] }} />
            <h3 className="text-lg font-semibold text-white">{active.label}</h3>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Critérios</h4>
            <ul className="space-y-1">{active.criteria.map((c, i) => (<li key={i} className="flex gap-2 text-sm text-gray-300"><span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span><span>{c}</span></li>))}</ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">Tratamento</h4>
            <p className="text-sm text-gray-300">{active.treatment}</p>
          </div>
          {active.prognosis && (<div><h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">Prognóstico</h4><p className="text-sm text-gray-300">{active.prognosis}</p></div>)}
        </div>
      )}
      {data.clinicalPearl && <Alert type="info">{data.clinicalPearl}</Alert>}
      {data.pitfall && <Alert type="caution">{data.pitfall}</Alert>}
    </div>
  );
}
