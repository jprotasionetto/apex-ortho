import { useState, useMemo } from 'react';
import { mepsScoreData } from '@/data/elbow/meps-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function MepsScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => mepsScoreData.calculate(values), [values]);
  const interp = useMemo(() => mepsScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = mepsScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">MEPS — Mayo Elbow Performance Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala funcional do cotovelo que avalia 4 domínios: dor (45 pts), amplitude de movimento (20 pts), estabilidade (10 pts) e função diária (25 pts). Total de 100 pontos.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação funcional do cotovelo após tratamento cirúrgico ou conservador de fraturas, instabilidade, artroplastia ou rigidez. Padrão-ouro de outcome para cirurgia do cotovelo.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Excelente: ≥90 pts | Bom: 75-89 | Regular: 60-74 | Ruim: &lt;60. Usado em publicações científicas como desfecho primário. Considera que dor corresponde a 45% da pontuação total.</p>
          </div>
        </div>
      </div>
      {mepsScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={mepsScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
