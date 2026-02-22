import { useState, useMemo } from 'react';
import { ndiScore } from '@/data/spine/ndi-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function NdiScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => ndiScore.calculate(values), [values]);
  const interp = useMemo(() => ndiScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = ndiScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">NDI — Neck Disability Index</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Questionário auto-aplicável de 10 itens avaliando limitação funcional por dor cervical: intensidade da dor, cuidado pessoal, levantamento, leitura, cefaleia, concentração, trabalho, direção, sono e lazer.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de resultados em patologias cervicais: cervicalgia, radiculopatia, mielopatia e pós-operatório de ACDF. Análogo cervical do Oswestry para coluna lombar.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">0-8%: sem incapacidade. 10-28%: leve. 30-48%: moderada. 50-64%: grave. 65-100%: incapacidade completa. MCID: ~7-10 pontos. Usado em publicações de ACDF, disc replacement e mielopatia como desfecho primário.</p>
          </div>
        </div>
      </div>

      {ndiScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={ndiScore.maxScore} interpretation={interp} />}
    </div>
  );
}
