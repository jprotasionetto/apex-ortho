import { useState } from 'react';
import { neerProximalHumerusData } from '@/data/trauma/neer-proximal-humerus.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const colorMap: Record<string, string> = { safe: '#22C55E', caution: '#F59E0B', danger: '#EF4444', info: '#3B82F6' };

const images = [
  { src: '/images/manual-trauma/page68_img1.png', caption: 'Classificação de Neer — os 4 segmentos do úmero proximal' },
  { src: '/images/manual-trauma/page68_img2.png', caption: 'Critérios de desvio: > 1 cm ou > 45° de angulação' },
  { src: '/images/manual-trauma/page70_img1.png', caption: 'Fraturas em 2 partes — tipos e padrões radiológicos' },
  { src: '/images/manual-trauma/page71_img1.png', caption: 'Fraturas em 3 e 4 partes — padrões de desvio' },
  { src: '/images/manual-trauma/page71_img2.png', caption: 'Fratura-luxação e fratura da superfície articular' },
];

export default function NeerProximalHumerusTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? neerProximalHumerusData.grades.find((g) => g.id === selected) : null;
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação de Neer — Fraturas do Úmero Proximal</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Classifica fraturas do úmero proximal pelos 4 segmentos anatômicos (cabeça, troquíter, troquim, diáfise) e pelo deslocamento (&gt;1cm ou &gt;45°). Orienta tratamento conservador vs cirúrgico.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura do úmero proximal em adulto. TC com 3D para casos complexos. Avalia: número de partes deslocadas, envolvimento articular e risco de necrose avascular da cabeça (NAV).</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">1-2 partes: conservador frequente (tipoia, fisioterapia precoce). 3-4 partes em jovem: ORIF (placa angular bloqueada). 3-4 partes em idoso (&gt;65 anos): hemiartroplastia ou RTSA. NAV: fratura-luxação cabeça ou 4 partes = alto risco (&gt;75%). RTSA supera hemiartroplastia em resultados funcionais em idosos.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Úmero Proximal — Manual SBOT (pp. 68–71)</p>
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
        {neerProximalHumerusData.grades.map((g) => (
          <button key={g.id} onClick={() => setSelected(g.id === selected ? null : g.id)} className={`text-left p-4 rounded-xl border transition-all ${selected === g.id ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]' : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,175,55,0.3)] bg-[#111111]'}`}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colorMap[g.colorCode] ?? '#3B82F6' }} />
              <span className="font-medium text-white text-sm">{g.label}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 ml-6">{g.description}</p>
          </button>
        ))}
      </div>
      {active && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colorMap[active.colorCode] ?? '#3B82F6' }} />
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
      {neerProximalHumerusData.clinicalPearl && <Alert type="info">{neerProximalHumerusData.clinicalPearl}</Alert>}
      {neerProximalHumerusData.pitfall && <Alert type="caution">{neerProximalHumerusData.pitfall}</Alert>}
    </div>
  );
}
