import { useState, useMemo } from 'react';
import { vasPainScale } from '@/data/universal/vas-pain-scale.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function VasPainScaleTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => vasPainScale.calculate(values), [values]);
  const interp = useMemo(() => vasPainScale.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = vasPainScale.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">EVA/VAS — Escala Visual Analógica de Dor</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala unidimensional de 0-10 (ou 0-100mm) para quantificação subjetiva da intensidade da dor pelo próprio paciente. Simples, rápida e amplamente validada em todas as especialidades médicas.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação da dor em qualquer condição ortopédica no pré e pós-operatório, em avaliações seriadas e como desfecho em pesquisa clínica. Componente obrigatório em publicações de dor e tratamento.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">0 = sem dor; 10 = pior dor imaginável. Leve: 1-3 | Moderada: 4-6 | Grave: 7-10. MCID: redução de ≥2 pontos ou ≥30% é considerada clinicamente significativa. Limitação: não avalia qualidade ou impacto funcional da dor — complementar com scores funcionais (ASES, HHS, ODI).</p>
          </div>
        </div>
      </div>
      {vasPainScale.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={vasPainScale.maxScore} interpretation={interp} />}
    </div>
  );
}
