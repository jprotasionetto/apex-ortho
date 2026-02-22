import { useState, useMemo } from 'react';
import { uclaShoulderData } from '@/data/shoulder/ucla-shoulder.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function UclaShoulderTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => uclaShoulderData.calculate(values), [values]);
  const interp = useMemo(() => uclaShoulderData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = uclaShoulderData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">UCLA Shoulder Score — Escore Funcional do Ombro (UCLA)</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 35 pontos avaliando 5 domínios: dor (10 pts), função (10 pts), flexão ativa (5 pts), força de flexão (5 pts) e satisfação (5 pts). Utilizado principalmente em artroplastia e manguito.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de resultados em artroplastia total do ombro, hemiartroplastia e cirurgia do manguito rotador. Clássico em estudos norte-americanos — menos usado na atualidade, substituído por ASES e Constant.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Excelente: 34-35 pts | Bom: 29-33 | Regular: 21-28 | Ruim: ≤20. Inclui avaliação clínica (força) — não é puramente auto-aplicável. Útil para comparar com literatura histórica de artroplastia. Para estudos atuais: preferir ASES ou Constant.</p>
          </div>
        </div>
      </div>
      {uclaShoulderData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={uclaShoulderData.maxScore} interpretation={interp} />}
    </div>
  );
}
