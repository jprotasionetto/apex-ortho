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
