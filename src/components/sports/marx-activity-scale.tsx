import { useState, useMemo } from 'react';
import { marxActivityScale } from '@/data/sports/marx-activity-scale.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function MarxActivityScaleTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => marxActivityScale.calculate(values), [values]);
  const interp = useMemo(() => marxActivityScale.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = marxActivityScale.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Marx Activity Rating Scale — Nível de Atividade Esportiva</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 16 pontos que quantifica a frequência de 4 atividades relacionadas ao joelho (corrida, desaceleração, corte e pivô) nos últimos 12 meses. Avalia nível real de atividade esportiva.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de nível de atividade em patologias do joelho que requerem agachamento, corte ou pivô: LCA, menisco, cartilagem, instabilidade patelar. Complementa Tegner Scale.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Score 0-16 (maior = mais ativo). Score ≥12: atleta de alta demanda — critério para lesões que requerem reconstrução cirúrgica em ativo. Vantagem sobre Tegner: quantifica frequência (4x/semana vs 1x), não apenas nível esportivo.</p>
          </div>
        </div>
      </div>

      {marxActivityScale.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={marxActivityScale.maxScore} interpretation={interp} />}
    </div>
  );
}
