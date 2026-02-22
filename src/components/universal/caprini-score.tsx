import { useState, useMemo } from 'react';
import { capriniScore } from '@/data/universal/caprini-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function CapriniScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => capriniScore.calculate(values), [values]);
  const interp = useMemo(() => capriniScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = capriniScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Score de Caprini — Risco de Tromboembolismo Venoso</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Score de estratificação de risco de TEV (TVP/TEP) em pacientes cirúrgicos baseado em fatores de risco individuais acumulados. Mais de 30 variáveis com peso de 1-5 pontos cada.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Todo paciente cirúrgico ortopédico para determinar necessidade e duração da profilaxia anticoagulante. Avalia risco perioperatório e orienta escolha entre HBPM, anticoagulantes orais ou apenas medidas mecânicas.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Baixo risco (0-1): apenas mobilização precoce. Moderado (2): HBPM 7 dias. Alto (3-4): HBPM 10 dias. Muito alto (≥5): HBPM 30 dias + meias elásticas. ATQ e ATJ: anticoagulação estendida 35 dias independente do score. Rivaroxabana/apixabana: alternativas orais validadas.</p>
          </div>
        </div>
      </div>
      {capriniScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={capriniScore.maxScore} interpretation={interp} />}
    </div>
  );
}
