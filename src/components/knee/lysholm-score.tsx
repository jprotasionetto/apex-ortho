import { useState, useMemo } from 'react';
import { lysholmScore } from '@/data/knee/lysholm-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function LysholmScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => lysholmScore.calculate(values), [values]);
  const interp = useMemo(() => lysholmScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = lysholmScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Lysholm Score — Escore Funcional do Joelho</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 100 pontos para avaliação funcional do joelho com 8 itens: claudicação, apoio, bloqueio, instabilidade, dor, inchaço, subida de escadas e agachamento.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de lesões ligamentares e meniscais do joelho, especialmente LCA e LCP. Frequentemente usado junto com IKDC e Tegner Activity Scale para avaliar retorno ao esporte.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Excelente: 95-100 | Bom: 84-94 | Regular: 65-83 | Ruim: &lt;65. Sensível para instabilidade de joelho. MCID: ~10 pontos. Limitação: não avalia retorno específico ao esporte — complementar com Tegner. Amplamente validado em português.</p>
          </div>
        </div>
      </div>
      {lysholmScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={lysholmScore.maxScore} interpretation={interp} />}
    </div>
  );
}
