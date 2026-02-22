import { useState, useMemo } from 'react';
import { joaScore } from '@/data/spine/joa-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function JoaScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => joaScore.calculate(values), [values]);
  const interp = useMemo(() => joaScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = joaScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">JOA Score — Japanese Orthopaedic Association Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala funcional para mielopatia cervical com 17 pontos (versão cervical) avaliando: função motora membros superiores e inferiores, sensibilidade e função vesical. Padrão japonês para mielopatia.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de mielopatia cervical pré e pós-operatória. Classifica gravidade: leve (≥13 pts), moderada (9-12) e grave (≤8 pts). Taxa de recuperação = [(pós-JOA - pré-JOA) / (17 - pré-JOA)] × 100%.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Taxa de recuperação >50%: bom resultado cirúrgico. JOA mJOA (versão modificada): 18 pts, mais usada no Ocidente. Limitações: subestima déficits sutis. Útil para comparação em artigos japoneses e asiáticos sobre mielopatia.</p>
          </div>
        </div>
      </div>

      {joaScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={joaScore.maxScore} interpretation={interp} />}
    </div>
  );
}
