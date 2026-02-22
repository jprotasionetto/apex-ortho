import { useState, useMemo } from 'react';
import { tlicsScore } from '@/data/spine/tlics-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function TlicsScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => tlicsScore.calculate(values), [values]);
  const interp = useMemo(() => tlicsScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = tlicsScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">TLICS — Thoracolumbar Injury Classification and Severity Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Sistema de classificação e score de gravidade para fraturas toracolombares baseado em 3 parâmetros: morfologia (1-4 pts), integridade do complexo ligamentar posterior (0-3 pts) e estado neurológico (0-3 pts).</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura toracolombar para determinar tratamento: conservador vs cirúrgico. Complementa a classificação AO-TLICS. Considera a importância crítica do estado neurológico na decisão.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Score ≤3: tratamento conservador (colar, colete). Score = 4: borderline — individualizar. Score ≥5: cirurgia indicada. Lesão do CLP (3 pts) sozinha já indica cirurgia. Vantagem: inclui estado neurológico explicitamente.</p>
          </div>
        </div>
      </div>
      {/* Imagem do Manual */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Fratura Toracolombar — Manual SBOT (p. 188)
        </p>
        <img
          src="/images/manual-trauma/page188_img1.png"
          alt="Fratura toracolombar — classificação e morfologia"
          className="w-full rounded-lg bg-[#0A0A0A] object-contain max-h-72"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <p className="text-xs text-gray-400 mt-2 text-center">Morfologia das fraturas toracolombares — Manual SBOT de Trauma Ortopédico</p>
      </div>

      {tlicsScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={tlicsScore.maxScore} interpretation={interp} />}
    </div>
  );
}
