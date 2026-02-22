import { useState, useMemo } from 'react';
import { womacScoreData } from '@/data/hip/womac-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';
import { Alert } from '@/components/ui/Alert.tsx';

export default function WomacScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});

  const score = useMemo(() => {
    if (Object.keys(values).length === 0) return null;
    return womacScoreData.calculate(values);
  }, [values]);

  const interpretation = useMemo(() => {
    if (score === null) return null;
    return womacScoreData.interpretations.find(
      (i) => score >= i.range[0] && score <= i.range[1]
    ) || null;
  }, [score]);

  const allAnswered = womacScoreData.items.every((item) => values[item.id] !== undefined);

  const sections = useMemo(() => {
    const sectionMap = new Map<string, typeof womacScoreData.items>();
    womacScoreData.items.forEach((item) => {
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
            <p className="text-sm font-semibold text-white">WOMAC — Western Ontario and McMaster Universities Osteoarthritis Index</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Questionário de 24 perguntas auto-aplicável para osteoartrite de quadril e joelho, avaliando dor (5 itens), rigidez (2 itens) e função física (17 itens). Responde à tratamento conservador e cirúrgico.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">OA de quadril ou joelho — avaliação pré e pós-operatória de artroplastia, fisioterapia, infiltrações e medicamentos. Diferencia-se do HHS por ser completamente auto-reportado pelo paciente (PROM).</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Pontuação 0-96 (maior = pior). Redução de ≥10% é clinicamente relevante. Usado em estudos comparativos de ATQ e ATJ. Correlaciona bem com qualidade de vida geral. Alternativa: KOOS-Hip (versão extendida).</p>
          </div>
        </div>
      </div>
      <Alert type="info">WOMAC: pontuacao mais alta = pior funcao. Escala de 0 (sem sintomas) a 96 (sintomas extremos).</Alert>
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
                showPoints={false}
              />
            ))}
          </div>
        </div>
      ))}
      {allAnswered && score !== null && interpretation && (
        <ResultDisplay
          score={score}
          maxScore={womacScoreData.maxScore}
          interpretation={interpretation}
        />
      )}
      {!allAnswered && Object.keys(values).length > 0 && (
        <Alert type="info">Responda todas as perguntas para ver o resultado. Respondidas: {Object.keys(values).length}/{womacScoreData.items.length}</Alert>
      )}
    </div>
  );
}
