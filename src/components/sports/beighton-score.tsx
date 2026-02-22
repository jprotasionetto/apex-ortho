import { useState, useMemo } from 'react';
import { beightonScore } from '@/data/sports/beighton-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function BeightonScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => beightonScore.calculate(values), [values]);
  const interp = useMemo(() => beightonScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = beightonScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Beighton Score — Hiperlassidão Ligamentar</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 9 pontos que quantifica hiperlassidão articular generalizada através de 5 manobras bilaterais e 1 unilateral. Componente diagnóstico da Síndrome de Hiperlassidão Articular e síndrome de Ehlers-Danlos.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Suspeita de hiperlassidão generalizada em pacientes com instabilidade múltipla articular, luxações recorrentes (ombro, patela, tornozelo) e síndrome de dor crônica musculoesquelética.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">≥4/9: hiperlassidão positiva (adultos). ≥5/9: critério para síndrome de hiperlassidão articular. Importante em instabilidade do ombro (ISI score inclui lassidão): aumenta risco de falha de Bankart. Requer programa especial de propriocepção e estabilização muscular.</p>
          </div>
        </div>
      </div>

      {beightonScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={beightonScore.maxScore} interpretation={interp} />}
    </div>
  );
}
