import { useState } from 'react';
import { letournelJudetAcetabulumData } from '@/data/trauma/letournel-judet-acetabulum.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const colorMap: Record<string, string> = { safe: '#22C55E', caution: '#F59E0B', danger: '#EF4444' };

const images = [
  { src: '/images/manual-trauma/page143_img1.png', caption: 'Epidemiologia das fraturas do acetábulo' },
  { src: '/images/manual-trauma/page144_img1.png', caption: 'Corona Mortis — anastomose presente em 84%' },
  { src: '/images/manual-trauma/page146_img1.png', caption: 'Incidências de Judet: alar e obturatriz' },
  { src: '/images/manual-trauma/page146_img2.png', caption: 'Letournel — tipos elementares' },
  { src: '/images/manual-trauma/page146_img3.png', caption: 'Letournel — tipos associados' },
  { src: '/images/manual-trauma/page147_img1.png', caption: 'Abordagem de Kocher-Langenbeck' },
  { src: '/images/manual-trauma/page148_img1.png', caption: 'Abordagem ilioinguinal — fixação definitiva' },
];

export default function LetournelJudetTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const data = letournelJudetAcetabulumData;
  const active = selected ? data.grades.find((g) => g.id === selected) : null;
  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Acetábulo — Manual SBOT (pp. 143–149)</p>
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
