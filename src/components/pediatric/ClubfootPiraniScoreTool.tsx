import { useState, useMemo } from 'react';
import { clubfootPiraniScoreData } from '@/data/pediatric/clubfoot-pirani.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function ClubfootPiraniScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => clubfootPiraniScoreData.calculate(values), [values]);
  const interp = useMemo(() => clubfootPiraniScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = clubfootPiraniScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Pirani Score — Gravidade do Pé Torto Congênito</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 0-6 pontos que quantifica a gravidade do pé torto equinovaro congênito (PTEC) em 6 sinais clínicos (0, 0.5 ou 1 ponto cada). Guia o tratamento e prevê o número de gessos necessários.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de todo pé torto congênito ao nascimento e durante tratamento pelo Método Ponseti. Monitoramento da resposta ao tratamento com gessos seriados.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Score inicial alto (&gt;4): mais gessos necessários (8-10) e maior risco de necessitar tenotomia de Aquiles. Score baixo (&lt;3): resposta mais rápida (5-6 gessos). Score do mediopé e retropé separados orientam quando fazer tenotomia percutânea. Sucesso: 90-95% com Ponseti.</p>
          </div>
        </div>
      </div>
      {clubfootPiraniScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={clubfootPiraniScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
