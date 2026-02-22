import { useState, useMemo } from 'react';
import { injurySeverityScoreData } from '@/data/trauma/injury-severity-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function InjurySeverityScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => injurySeverityScoreData.calculate(values), [values]);
  const interp = useMemo(() => injurySeverityScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = injurySeverityScoreData.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">ISS — Injury Severity Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escore anatômico de gravidade de trauma baseado na escala AIS (Abbreviated Injury Scale). Soma dos quadrados dos 3 maiores escores AIS em 3 regiões corporais diferentes. Preditor de mortalidade.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Politraumatizado para quantificar gravidade global e predizer mortalidade, tempo de internação e necessidade de UTI. Usado em auditoria de trauma e pesquisa. ISS ≥16: trauma grave.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">ISS ≥16: trauma grave (mortalidade ~10%). ISS ≥25: trauma muito grave (mortalidade ~25%). ISS = 75: lesão máxima (AIS 5 em 3 regiões). Limitação: uma lesão AIS 6 em qualquer região = ISS de 75 (morte provável). NISS (New ISS) usa as 3 piores lesões independente de região.</p>
          </div>
        </div>
      </div>
      {injurySeverityScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={injurySeverityScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
