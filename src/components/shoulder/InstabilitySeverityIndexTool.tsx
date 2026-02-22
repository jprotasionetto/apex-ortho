import { useState, useMemo } from 'react';
import { isisScoreData } from '@/data/shoulder/instability-severity-index.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function InstabilitySeverityIndexTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => isisScoreData.calculate(values), [values]);
  const interp = useMemo(() => isisScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = isisScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {isisScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={isisScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
