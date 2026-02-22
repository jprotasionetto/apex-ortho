import { useState } from 'react';
import { mirelsScore } from '@/data/tumor/mirels-score.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function MirelsScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const allAnswered = mirelsScore.items.every((item) => values[item.id] !== undefined);
  const total = mirelsScore.calculate(values);
  const interp = mirelsScore.interpretations.find((i) => total >= i.range[0] && total <= i.range[1]);

  const sections = [...new Set(mirelsScore.items.map((i) => i.section))];

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Score de Mirels — Risco de Fratura Patológica</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala preditiva de 12 pontos para risco de fratura patológica em metástases ósseas. Avalia 4 variáveis: sítio anatômico, dor, natureza da lesão (blástica/lítica) e tamanho cortical.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda metástase óssea de osso longo para determinar necessidade de fixação profilática versus radioterapia. Evita fratura patológica com alto impacto funcional e mortalidade.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Score ≤7: risco baixo de fratura (&lt;4%) — radioterapia. Score 8: risco intermediário (~15%) — individualizar. Score ≥9: risco alto (&gt;33%) — fixação profilática cirúrgica antes da radioterapia. Fêmur proximal: fixar profilaticamente se &gt;50% do córtex comprometido.</p>
          </div>
        </div>
      </div>
      {sections.map((section) => (
        <div key={section} className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-slate-100">{section}</h3>
          {mirelsScore.items.filter((i) => i.section === section).map((item) => (
            <div key={item.id} className="space-y-2">
              <label className="text-sm font-medium text-slate-300">{item.label}</label>
              {item.description && <p className="text-xs text-slate-500">{item.description}</p>}
              <div className="grid gap-1">
                {item.options?.map((opt) => (
                  <button key={opt.value} onClick={() => setValues((prev) => ({ ...prev, [item.id]: opt.value }))} className={`text-left p-3 rounded-lg border text-sm transition-all ${values[item.id] === opt.value ? 'border-primary-500 bg-primary-500/10 text-slate-100' : 'border-slate-600 hover:border-slate-500 text-slate-400'}`}>
                    <span className="font-medium">{opt.label}</span>
                    <span className="ml-2 text-xs text-slate-500">({opt.value} pts)</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-100">Resultado</h3>
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-slate-100">{total}</div>
          <div className="text-sm text-slate-400">/ {mirelsScore.maxScore} pontos</div>
        </div>
        {allAnswered && interp && (
          <div className="space-y-2">
            <Alert type={interp.color}>{interp.label}: {interp.description}</Alert>
            {interp.recommendation && <p className="text-sm text-slate-400">{interp.recommendation}</p>}
          </div>
        )}
        {!allAnswered && <p className="text-sm text-slate-500">Responda todas as perguntas para ver a interpretacao completa.</p>}
      </div>
    </div>
  );
}
