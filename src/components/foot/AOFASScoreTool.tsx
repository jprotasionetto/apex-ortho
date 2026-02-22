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
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">AOFAS — American Orthopaedic Foot &amp; Ankle Society Score</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala funcional do pé e tornozelo de 100 pontos, avaliando dor (40 pts), função/atividade (50 pts) e alinhamento (10 pts). Existem versões para antepé, médiopé, hálux e tornozelo.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação de resultados clínicos em cirurgias do pé e tornozelo: hálux valgo, fraturas, instabilidade de tornozelo, artrodese, reconstrução ligamentar.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Excelente: 90-100 | Bom: 75-89 | Regular: 60-74 | Ruim: &lt;60. Muito utilizado em literatura científica, porém com limitações por incluir avaliação do médico (alinhamento). PROMIS e FAAM são alternativas mais modernas.</p>
          </div>
        </div>
      </div>
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
