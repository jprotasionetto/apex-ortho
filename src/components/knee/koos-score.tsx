import { useState, useMemo } from 'react';
import { koosScore } from '@/data/knee/koos-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function KoosScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => koosScore.calculate(values), [values]);
  const interp = useMemo(() => koosScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = koosScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">KOOS — Knee Injury and Osteoarthritis Outcome Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Questionário de 42 itens auto-aplicável dividido em 5 subescalas: Dor, Sintomas, AVD, Esporte/Recreação e Qualidade de Vida. Específico para lesões e OA de joelho.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de resultados em lesões do joelho (LCA, menisco, cartilagem) e osteoartrite. Derivado do WOMAC com adição de subescalas de esporte e qualidade de vida. Adequado para populações jovens e ativas.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Pontuação 0-100 por subescala (maior = melhor). Subescala Esporte/Recreação é a mais sensível em jovens atletas. MCID: 8-10 pontos por subescala. KOOS-12 é versão abreviada validada. Usado em estudos multicêntricos de LCA e menisco.</p>
          </div>
        </div>
      </div>
      {koosScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={koosScore.maxScore} interpretation={interp} />}
    </div>
  );
}
