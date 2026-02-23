import { useState, useMemo } from 'react';
import { roweScoreData } from '@/data/shoulder/rowe-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function RoweScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => roweScoreData.calculate(values), [values]);
  const interp = useMemo(() => roweScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = roweScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Rowe Score — Avaliação de Instabilidade Glenoumeral</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 100 pontos para avaliação de resultados pós-operatórios de estabilização do ombro (Bankart, Latarjet, Bristow). Avalia estabilidade (50 pts), movimento (20 pts) e função (30 pts).</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de resultados após cirurgia de estabilização glenoumeral anterior. Padrão histórico para estudos de Bankart e Latarjet. Comparação pré e pós-operatória.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Excelente: 90-100 | Bom: 75-89 | Regular: 51-74 | Ruim: ≤50. Recidiva: score cai drasticamente para &lt;50 pts. Limitação: não detecta bem instabilidade posterior. Amplamente usado em publicações de instabilidade do ombro como outcome primário.</p>
          </div>
        </div>
      </div>
      {roweScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={roweScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
