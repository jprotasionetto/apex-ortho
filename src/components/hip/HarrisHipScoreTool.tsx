import { useState, useMemo } from 'react';
import { harrisHipScoreData } from '@/data/hip/harris-hip-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';
import { Alert } from '@/components/ui/Alert.tsx';

export default function HarrisHipScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});

  const score = useMemo(() => {
    if (Object.keys(values).length === 0) return null;
    return harrisHipScoreData.calculate(values);
  }, [values]);

  const interpretation = useMemo(() => {
    if (score === null) return null;
    return harrisHipScoreData.interpretations.find(
      (i) => score >= i.range[0] && score <= i.range[1]
    ) || null;
  }, [score]);

  const allAnswered = harrisHipScoreData.items.every((item) => values[item.id] !== undefined);

  const sections = useMemo(() => {
    const sectionMap = new Map<string, typeof harrisHipScoreData.items>();
    harrisHipScoreData.items.forEach((item) => {
      const section = item.section || 'Geral';
      if (!sectionMap.has(section)) sectionMap.set(section, []);
      sectionMap.get(section)!.push(item);
    });
    return Array.from(sectionMap.entries());
  }, []);

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Harris Hip Score (HHS) — Escore Funcional do Quadril</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escala de 100 pontos para avaliação funcional do quadril: dor (44 pts), função (47 pts), ausência de deformidade (4 pts) e amplitude de movimento (5 pts). Padrão para artroplastia.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Avaliação pré e pós-operatória de artroplastia total ou parcial do quadril, fraturas do colo femoral, osteoartrite e impacto femoroacetabular. Principal outcome em cirurgia do quadril.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Excelente: ≥90 | Bom: 80-89 | Regular: 70-79 | Ruim: <70. Um aumento de ≥10 pontos é clinicamente significativo. A subescala de dor (44 pts) é o domínio mais ponderado do escore.</p>
          </div>
        </div>
      </div>
      {sections.map(([sectionName, items]) => (
        <div key={sectionName}>
          <h3 className="text-md font-semibold text-slate-200 mb-3 pb-2 border-b border-slate-700">{sectionName}</h3>
          <div className="space-y-4">
            {items.map((item) => (
              <RadioGroup
                key={item.id}
                name={item.id}
                label={item.label}
                description={item.description}
                options={item.options || []}
                value={values[item.id]}
                onChange={(val) => setValues((prev) => ({ ...prev, [item.id]: val }))}
              />
            ))}
          </div>
        </div>
      ))}
      {allAnswered && score !== null && interpretation && (
        <ResultDisplay
          score={score}
          maxScore={harrisHipScoreData.maxScore}
          interpretation={interpretation}
        />
      )}
      {!allAnswered && Object.keys(values).length > 0 && (
        <Alert type="info">Responda todas as perguntas para ver o resultado. Respondidas: {Object.keys(values).length}/{harrisHipScoreData.items.length}</Alert>
      )}
    </div>
  );
}
