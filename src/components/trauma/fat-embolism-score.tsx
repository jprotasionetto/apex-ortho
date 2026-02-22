import { useState, useMemo } from 'react';
import { fatEmbolismScoreData } from '@/data/trauma/fat-embolism-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function FatEmbolismScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => fatEmbolismScoreData.calculate(values), [values]);
  const interp = useMemo(() => fatEmbolismScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = fatEmbolismScoreData.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Score de Embolia Gordurosa (Gurd e Wilson)</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Critérios diagnósticos para síndrome de embolia gordurosa (SEG) após fraturas de ossos longos ou cirurgia ortopédica. Critérios maiores e menores de Gurd para diagnóstico clínico.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Paciente com fratura de fêmur, pelve ou cirurgia de artroplastia que desenvolve insuficiência respiratória, alteração de consciência e petéquias 24-72h após trauma. Excluir TEP e pneumonia.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Diagnóstico: ≥1 critério maior + ≥4 menores + ≥60% neutrófilos com lipídeos. Tratamento: suporte (O2, ventilação mecânica se necessário). Prevenção: fixação cirúrgica precoce de fraturas de ossos longos reduz risco de SEG em 4-5x.</p>
          </div>
        </div>
      </div>
      {fatEmbolismScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={fatEmbolismScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
