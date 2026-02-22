import { useState } from 'react';
import { pauwelsClassificationData } from '@/data/hip/pauwels-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';
import PauwelsSVG from '@/components/svg/hip/PauwelsSVG.tsx';

export default function PauwelsClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? pauwelsClassificationData.grades.find((g) => g.id === selected) : null;

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação de Pauwels — Ângulo da Fratura do Colo Femoral</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Classifica as fraturas do colo femoral pelo ângulo da linha de fratura em relação à horizontal. Determina as forças de cisalhamento e o risco de pseudartrose.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Fraturas do colo femoral em pacientes com osso de qualidade adequada para fixação interna (geralmente &lt; 65 anos ou &gt; 65 anos biologicamente jovens).</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância</p>
            <p className="text-xs text-gray-300 leading-relaxed">Pauwels III (&gt;70°) tem alto cisalhamento e maior risco de pseudartrose e necrose avascular. Frequentemente indica fixação com parafusos canulados + enxerto ou artroplastia.</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 overflow-hidden">
        <PauwelsSVG activeGrade={selected} onGradeSelect={setSelected} interactive={true} showLabels={true} />
      </div>
      <div className="grid gap-2">
        {pauwelsClassificationData.grades.map((g) => (
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
      {pauwelsClassificationData.clinicalPearl && <Alert type="info">{pauwelsClassificationData.clinicalPearl}</Alert>}
      {pauwelsClassificationData.pitfall && <Alert type="caution">{pauwelsClassificationData.pitfall}</Alert>}
    </div>
  );
}
