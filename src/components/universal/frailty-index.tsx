import { useState, useMemo } from 'react';
import { frailtyIndex } from '@/data/universal/frailty-index.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function FrailtyIndexTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => frailtyIndex.calculate(values), [values]);
  const interp = useMemo(() => frailtyIndex.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = frailtyIndex.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Índice de Fragilidade — Avaliação de Risco Cirúrgico em Idosos</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Avaliação da fragilidade pré-operatória em pacientes idosos para predizer complicações pós-operatórias, mortalidade e necessidade de reabilitação. Escalas: Fried Phenotype, CFS (Clinical Frailty Scale) e mFI-5.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Idosos (&gt;65 anos) submetidos a cirurgia ortopédica eletiva ou de urgência (fratura de quadril). Identifica pacientes que se beneficiam de otimização pré-operatória e maior suporte pós-operatório.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Pré-frágil: otimização pré-operatória (nutrição, fisioterapia, controle de comorbidades) reduz complicações. Frágil: maior risco de mortalidade, delirium, IAM e complicações cirúrgicas — decisão compartilhada sobre risco-benefício. CFS ≥7: risco muito alto.</p>
          </div>
        </div>
      </div>
      {frailtyIndex.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={frailtyIndex.maxScore} interpretation={interp} />}
    </div>
  );
}
