import { useState, useMemo } from 'react';
import { isisScoreData } from '@/data/shoulder/instability-severity-index.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function InstabilitySeverityIndexTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => isisScoreData.calculate(values), [values]);
  const interp = useMemo(() => isisScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = isisScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">ISI — Instability Severity Index Score — Instabilidade Glenoumeral</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala pré-operatória de 10 pontos com 6 fatores de risco para recidiva após estabilização do ombro (Bankart artroscópico). Identifica pacientes de alto risco que se beneficiam de Latarjet.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Todo paciente com instabilidade glenoumeral anterior antes de decidir entre Bankart artroscópico e Latarjet. Avalia: idade, nível esportivo, tipo de esporte, hiperlassidão, Hill-Sachs e perda óssea glnoide.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">ISI ≤3 pts: Bankart artroscópico — baixo risco de recidiva (&lt;10%). ISI 4-6: zona cinzenta — considerar Latarjet. ISI ≥7: Latarjet indicado — alto risco de recidiva com Bankart (&gt;70%). Cada ponto aumenta o risco de falha em ~10%.</p>
          </div>
        </div>
      </div>
      {isisScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={isisScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
