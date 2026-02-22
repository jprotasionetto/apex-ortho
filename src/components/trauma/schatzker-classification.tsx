import { useState } from 'react';
import { schatzkerClassificationData } from '@/data/trauma/schatzker-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function SchatzkerClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? schatzkerClassificationData.grades.find((g) => g.id === selected) : null;
  return (
    <div className="space-y-6">
      {/* Images from MANUAL DE TRAUMA ORTOPÉDICO — Schatzker chapter (p. 180) */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Classificação de Schatzker — Manual SBOT (p. 180)
        </p>
        <img
          src="/images/manual-trauma/page180_img1.png"
          alt="Classificação de Schatzker — Planalto Tibial"
          className="w-full rounded-lg bg-[#0A0A0A] object-contain max-h-72"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <p className="text-xs text-gray-400 mt-2 text-center">Tipos I–VI de Schatzker — do livro SBOT Manual de Trauma Ortopédico</p>
      </div>
      <div className="grid gap-2">
        {schatzkerClassificationData.grades.map((g) => (
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
      {schatzkerClassificationData.clinicalPearl && <Alert type="info">{schatzkerClassificationData.clinicalPearl}</Alert>}
      {schatzkerClassificationData.pitfall && <Alert type="caution">{schatzkerClassificationData.pitfall}</Alert>}
    </div>
  );
}
