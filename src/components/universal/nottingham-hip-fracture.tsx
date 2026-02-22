import { useState, useMemo } from 'react';
import { nottinghamHipFractureScore } from '@/data/universal/nottingham-hip-fracture.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function NottinghamHipFractureTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => nottinghamHipFractureScore.calculate(values), [values]);
  const interp = useMemo(() => nottinghamHipFractureScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = nottinghamHipFractureScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Nottingham Hip Fracture Score — Mortalidade Pós-Fratura de Quadril</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Score preditivo de mortalidade em 30 dias após fratura de quadril com 7 variáveis: idade, sexo, hemoglobina, MMSE, comorbidade, institucionalização e neoplasia. Desenvolvido e validado no NHS.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Todo paciente com fratura de quadril para estratificação de risco, planejamento de cuidados e comunicação com família. Orienta intensidade de suporte pós-operatório e local de reabilitação.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Score 0-10. Score ≥6: mortalidade em 30 dias &gt;10%. Score ≥8: mortalidade &gt;25%. Uso: triagem para cuidados paliativos vs curativos, planejamento de UTI e comunicação de prognóstico. Mortalidade global de fratura de quadril em 1 ano: 20-30% — é emergência médico-cirúrgica.</p>
          </div>
        </div>
      </div>
      {nottinghamHipFractureScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={nottinghamHipFractureScore.maxScore} interpretation={interp} />}
    </div>
  );
}
