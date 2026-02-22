import { useState, useMemo } from 'react';
import { constantScoreData } from '@/data/shoulder/constant-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function ConstantScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => constantScoreData.calculate(values), [values]);
  const interp = useMemo(() => constantScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = constantScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {constantScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={constantScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
