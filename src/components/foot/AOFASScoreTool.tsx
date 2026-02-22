import { useState } from 'react';
import { aofasScore } from '@/data/foot/aofas-score.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function AOFASScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const allAnswered = aofasScore.items.every((item) => values[item.id] !== undefined);
  const total = aofasScore.calculate(values);
  const interp = aofasScore.interpretations.find((i) => total >= i.range[0] && total <= i.range[1]);

  const sections = [...new Set(aofasScore.items.map((i) => i.section))];

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section} className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-slate-100">{section}</h3>
          {aofasScore.items.filter((i) => i.section === section).map((item) => (
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
          <div className="text-sm text-slate-400">/ {aofasScore.maxScore} pontos</div>
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
