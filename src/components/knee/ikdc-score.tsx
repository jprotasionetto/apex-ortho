import { useState, useMemo } from 'react';
import { ikdcScore } from '@/data/knee/ikdc-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function IkdcScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => ikdcScore.calculate(values), [values]);
  const interp = useMemo(() => ikdcScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = ikdcScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">IKDC — International Knee Documentation Committee Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Questionário funcional subjetivo do joelho com 18 perguntas em 3 domínios: sintomas (7), função esportiva (2) e atividade atual (1 IKDC). Sensível a mudanças clínicas significativas.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de resultados em patologias do joelho: lesões ligamentares (LCA, LCP), menisco, cartilagem. Padrão-ouro em pesquisa de LCA. Frequentemente usado junto com Lysholm e Tegner.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Escala 0-100 (maior = melhor). ≥16 pontos de mudança = diferença clinicamente importante. IKDC &gt;75 = bom resultado. Especialmente sensível para lesões ligamentares. Complementar com Tegner para nível de atividade esportiva.</p>
          </div>
        </div>
      </div>
      {ikdcScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={ikdcScore.maxScore} interpretation={interp} />}
    </div>
  );
}
