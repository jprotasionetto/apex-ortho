import { useState, useMemo } from 'react';
import { asesScoreData } from '@/data/shoulder/ases-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function AsesScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => asesScoreData.calculate(values), [values]);
  const interp = useMemo(() => asesScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = asesScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">ASES — American Shoulder and Elbow Surgeons Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala funcional do ombro de 100 pontos: 50 pts de dor (VAS) e 50 pts de função (10 atividades diárias). Simples, rápido e amplamente validado para patologias do ombro.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de resultados em patologias do ombro: lesões do manguito rotador, instabilidade, artrose glenoumeral, capsulite adesiva, artroplastia. Usado antes e após tratamento cirúrgico ou conservador.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Score 0-100 (maior = melhor). MCID: ~12-17 pontos. Excelente: &gt;80 pts. Limitação: não avalia amplitude de movimento nem função muscular diretamente. Complementar com Constant Score para avaliação mais completa. Ambos os escores são padrão em estudos de ombro.</p>
          </div>
        </div>
      </div>
      {asesScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={asesScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
