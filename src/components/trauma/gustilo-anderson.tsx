import { useState } from 'react';
import { gustiloAndersonData } from '@/data/trauma/gustilo-anderson.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function GustiloAndersonTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? gustiloAndersonData.grades.find((g) => g.id === selected) : null;
  return (
    <div className="space-y-6">
      {/* Images from MANUAL DE TRAUMA ORTOPÉDICO — Fraturas Expostas chapter (pp. 31-40) */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Fraturas Expostas — Manual SBOT (pp. 31–40)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { src: '/images/manual-trauma/page30_img1.png', caption: 'Algoritmo de conduta — lesão arterial e estado hemodinâmico' },
            { src: '/images/manual-trauma/page50_img1.png', caption: 'Classificação de Gustilo-Anderson — Tipos I, II, III' },
            { src: '/images/manual-trauma/page51_img1.png', caption: 'Gustilo Tipo IIIA — cobertura adequada de periósteo' },
            { src: '/images/manual-trauma/page51_img2.png', caption: 'Gustilo Tipo IIIB/C — perda de cobertura, lesão vascular' },
          ].map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-32 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {gustiloAndersonData.grades.map((g) => (
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
      {gustiloAndersonData.clinicalPearl && <Alert type="info">{gustiloAndersonData.clinicalPearl}</Alert>}
      {gustiloAndersonData.pitfall && <Alert type="caution">{gustiloAndersonData.pitfall}</Alert>}
    </div>
  );
}
