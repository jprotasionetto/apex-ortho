import { useState, useMemo } from 'react';
import { messScoreData } from '@/data/trauma/mess-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function MessScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => messScoreData.calculate(values), [values]);
  const interp = useMemo(() => messScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = messScoreData.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">MESS — Mangled Extremity Severity Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Score preditivo para amputação de membro com trauma vascular grave. Avalia 4 fatores: tipo/energia do trauma, isquemia de membro, choque e idade. Score de 0-14 pontos.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Extremidade com trauma vascular grave, lesão esmagamento ou avulsão para decisão de reconstrução versus amputação primária. Usado em conjunto com avaliação clínica e vascular.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">MESS ≥7: amputação previsível (especificidade ~100%, sensibilidade ~78%). MESS &lt;7: tentativa de revascularização. Limitação: falsos positivos em isquemia fria (pontuação dobrada). Não usar isoladamente — decisão multidisciplinar com cirurgia vascular. Considerar ISCISS para lesões complexas.</p>
          </div>
        </div>
      </div>
      {/* Imagens do Manual de Trauma Ortopédico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Trauma Vascular e Partes Moles — Manual SBOT (p. 83)</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: '/images/manual-trauma/page83_img1.png', caption: 'Avaliação de partes moles — isquemia e lesão vascular' },
            { src: '/images/manual-trauma/page30_img1.png', caption: 'Algoritmo — lesão arterial e estado hemodinâmico' },
          ].map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-28 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      {messScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={messScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
