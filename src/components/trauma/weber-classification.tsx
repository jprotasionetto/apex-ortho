import { useState } from 'react';
import { weberClassificationData } from '@/data/trauma/weber-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function WeberClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? weberClassificationData.grades.find((g) => g.id === selected) : null;
  return (
    <div className="space-y-6">
      {/* Images from MANUAL DE TRAUMA ORTOPÉDICO — Weber/Lauge-Hansen chapter (pp. 198-205) */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Fraturas do Tornozelo — Manual SBOT (pp. 198–205)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { src: '/images/manual-trauma/page198_img1.png', caption: 'Anatomia ligamentar do tornozelo' },
            { src: '/images/manual-trauma/page198_img2.png', caption: 'Complexo sindesmótico' },
            { src: '/images/manual-trauma/page199_img1.png', caption: 'Incidência mortise — espaços normais' },
            { src: '/images/manual-trauma/page200_img1.png', caption: 'Weber A – abaixo da sindesmose' },
            { src: '/images/manual-trauma/page201_img1.png', caption: 'Weber B – ao nível da sindesmose' },
            { src: '/images/manual-trauma/page202_img1.png', caption: 'Weber C – acima da sindesmose' },
          ].map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Técnica Cirúrgica e Resultados — Manual SBOT */}
      <div className="mt-4 pt-4 border-t border-[rgba(212,175,55,0.1)]">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Técnica e Resultados</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { src: '/images/manual-trauma/page199_img2.png', alt: 'Estabilização articular — técnica' },
            { src: '/images/manual-trauma/page201_img2.png', alt: 'Fixação Weber B/C — placa e parafusos (2)' },
            { src: '/images/manual-trauma/page201_img3.png', alt: 'Fixação Weber B/C — placa e parafusos (3)' },
            { src: '/images/manual-trauma/page203_img1.png', alt: 'Fraturas por cisalhamento — tratamento' },
            { src: '/images/manual-trauma/page203_img2.png', alt: 'Fraturas por cisalhamento (2)' },
            { src: '/images/manual-trauma/page204_img1.png', alt: 'Retirada de fragmentos' },
            { src: '/images/manual-trauma/page204_img2.png', alt: 'Retirada de fragmentos (2)' },
            { src: '/images/manual-trauma/page205_img1.png', alt: 'Consolidação viciosa — encurtamento' },
          ].map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]">
              <img src={img.src} alt={img.alt} className="w-full h-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display='none'; }} />
              <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        {weberClassificationData.grades.map((g) => (
          <button key={g.id} onClick={() => setSelected(g.id)} className={`text-left p-4 rounded-xl border transition-all ${selected === g.id ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
            <div className="flex items-center gap-3"><div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: g.colorCode === 'safe' ? '#22C55E' : g.colorCode === 'caution' ? '#F59E0B' : g.colorCode === 'danger' ? '#EF4444' : '#3B82F6' }} /><span className="font-medium text-slate-100">{g.label}</span></div>
            <p className="text-sm text-slate-400 mt-1">{g.description}</p>
          </button>
        ))}
      </div>
      {active && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-slate-100">{active.label}</h3>
          <div><h4 className="text-sm font-medium text-slate-400 mb-2">Criterios</h4><ul className="list-disc list-inside space-y-1 text-sm text-slate-300">{active.criteria.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
          <div><h4 className="text-sm font-medium text-slate-400 mb-1">Tratamento</h4><p className="text-sm text-slate-300">{active.treatment}</p></div>
          {active.prognosis && <div><h4 className="text-sm font-medium text-slate-400 mb-1">Prognostico</h4><p className="text-sm text-slate-300">{active.prognosis}</p></div>}
        </div>
      )}
      {weberClassificationData.clinicalPearl && <Alert type="info">{weberClassificationData.clinicalPearl}</Alert>}
      {weberClassificationData.pitfall && <Alert type="caution">{weberClassificationData.pitfall}</Alert>}
    </div>
  );
}
