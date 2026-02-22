import { useState, useMemo } from 'react';
import { injurySeverityScoreData } from '@/data/trauma/injury-severity-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function InjurySeverityScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => injurySeverityScoreData.calculate(values), [values]);
  const interp = useMemo(() => injurySeverityScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = injurySeverityScoreData.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {injurySeverityScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={injurySeverityScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
