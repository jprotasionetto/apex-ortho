import { useState } from 'react';
import { rorabeckClassificationData } from '@/data/reconstruction/rorabeck-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function RorabeckClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? rorabeckClassificationData.grades.find((g) => g.id === selected) : null;

  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação de Rorabeck (Lewis-Rorabeck) — Fraturas Periprotésicas Supracondilianas do Fêmur (ATJ)</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Classifica fraturas periprotésicas supracondilianas do fêmur após artroplastia total do joelho em 3 tipos baseados no desvio da fratura e estabilidade do componente protésico.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura supracondiliana do fêmur em paciente com ATJ. Incidência: 0,3-2,5% das ATJs. Aumenta com osteoporose e revisões.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tipo I: conservador possível. Tipo II: RAFI com placa. Tipo III (prótese solta): revisão obrigatória da ATJ — NÃO fixar apenas a fratura.</p>
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        {rorabeckClassificationData.grades.map((g) => (
          <button key={g.id} onClick={() => setSelected(g.id)} className={`text-left p-4 rounded-xl border transition-all ${selected === g.id ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
            <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: g.colorCode === 'safe' ? '#22C55E' : g.colorCode === 'caution' ? '#F59E0B' : '#EF4444' }} /><span className="font-medium text-slate-100">{g.label}</span></div>
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
      {rorabeckClassificationData.clinicalPearl && <Alert type="info">{rorabeckClassificationData.clinicalPearl}</Alert>}
      {rorabeckClassificationData.pitfall && <Alert type="caution">{rorabeckClassificationData.pitfall}</Alert>}
    </div>
  );
}
