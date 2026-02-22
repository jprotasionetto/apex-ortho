import { useState, useMemo } from 'react';
import { oswestryScore } from '@/data/spine/oswestry-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function OswestryScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => oswestryScore.calculate(values), [values]);
  const interp = useMemo(() => oswestryScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = oswestryScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">ODI — Oswestry Disability Index</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Questionário de 10 itens para avaliação de incapacidade por lombalgia: dor, autocuidado, levantamento, caminhada, assentar, ficar de pé, sono, vida sexual, atividade social e viagem.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Padrão-ouro para avaliação de lombalgia e suas intervenções: discectomia, fusão lombar, infiltrações, fisioterapia. Obrigatório em publicações de cirurgia lombar.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">0-20%: incapacidade mínima. 21-40%: moderada. 41-60%: grave. 61-80%: muito grave (cama ou cadeira). 81-100%: acamado/exagero. MCID: ~10-15 pontos. Complementar com EVA para dor e SF-36 para qualidade de vida.</p>
          </div>
        </div>
      </div>

      {oswestryScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={oswestryScore.maxScore} interpretation={interp} />}
    </div>
  );
}
