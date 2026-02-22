import { useState, useMemo } from 'react';
import { tegnerScore } from '@/data/knee/tegner-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function TegnerScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => tegnerScore.calculate(values), [values]);
  const interp = useMemo(() => tegnerScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = tegnerScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Tegner Activity Scale — Nível de Atividade do Joelho</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala ordinal de 0-10 que quantifica o nível de atividade físico-esportiva do paciente. Nível 0 = incapacitado, Nível 10 = esportes competitivos de alto nível (futebol, rugby). Complementa o Lysholm.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação pré e pós-operatória de lesões ligamentares e meniscais do joelho, especialmente LCA. Quantifica se o paciente retornou ao mesmo nível esportivo pré-lesão.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Objetivo principal: retorno ao nível pré-lesão. Nível 5-6 = esportes recreativos. Nível 7-8 = futebol amador. Nível 9-10 = esporte de elite. Usado junto com IKDC e Lysholm como bateria completa para avaliação de joelho ligamentar.</p>
          </div>
        </div>
      </div>
      {tegnerScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={tegnerScore.maxScore} interpretation={interp} />}
    </div>
  );
}
