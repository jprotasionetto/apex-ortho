import { useState } from 'react';
import { perthesHerringClassificationData } from '@/data/pediatric/perthes-herring.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function PerthesHerringClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? perthesHerringClassificationData.grades.find((g) => g.id === selected) : null;

  return (
    <div className="space-y-6">
      {/* Manual Images */}
      <div className="pt-2 pb-4 border-b border-[rgba(212,175,55,0.15)]">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Manual SBOT — Imagens de Referência (pp. 299, 303–304, 318)</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: '/images/manual-trauma/page299_img1.png', alt: 'Doença de Perthes — quadril pediátrico' },
            { src: '/images/manual-trauma/page303_img1.png', alt: 'Classificação de Herring — pilar lateral A/B' },
            { src: '/images/manual-trauma/page304_img1.png', alt: 'Herring C — comprometimento severo do pilar' },
            { src: '/images/manual-trauma/page318_img1.png', alt: 'Tratamento e evolução radiológica' },
          ].map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display='none'; }}
              />
              <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {perthesHerringClassificationData.grades.map((g) => (
          <button key={g.id} onClick={() => setSelected(g.id)} className={`text-left p-4 rounded-xl border transition-all ${selected === g.id ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
            <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: g.colorCode === 'safe' ? '#22C55E' : g.colorCode === 'caution' ? '#F59E0B' : g.colorCode === 'danger' ? '#EF4444' : '#3B82F6' }} /><span className="font-medium text-slate-100">{g.label}</span></div>
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
      {perthesHerringClassificationData.clinicalPearl && <Alert type="info">{perthesHerringClassificationData.clinicalPearl}</Alert>}
      {perthesHerringClassificationData.pitfall && <Alert type="caution">{perthesHerringClassificationData.pitfall}</Alert>}
    </div>
  );
}
