import { useState, useMemo } from 'react';
import { constantScoreData } from '@/data/shoulder/constant-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function ConstantScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => constantScoreData.calculate(values), [values]);
  const interp = useMemo(() => constantScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = constantScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Constant Score — Escore Funcional do Ombro</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 100 pontos com 4 domínios: dor (15 pts), atividades de vida diária (20 pts), amplitude de movimento (40 pts) e força (25 pts). Combina avaliação subjetiva e objetiva do ombro.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação funcional do ombro em lesões do manguito rotador, fraturas (Neer), instabilidade e artroplastia. Amplamente utilizado na Europa. Permite comparação antes/depois de tratamento.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Score 0-100 (maior = melhor). Resultado normal para idade >75 pts. Limitação: força medida com dinamômetro ou método padronizado — sem equipamento, pode ser estimada. Constant age-adjusted: normaliza por sexo e idade. Complementar com ASES para avaliação completa.</p>
          </div>
        </div>
      </div>
      {constantScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={constantScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
