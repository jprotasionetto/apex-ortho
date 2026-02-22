import { useState, useMemo } from 'react';
import { capriniScore } from '@/data/universal/caprini-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function CapriniScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => capriniScore.calculate(values), [values]);
  const interp = useMemo(() => capriniScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = capriniScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {capriniScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={capriniScore.maxScore} interpretation={interp} />}
    </div>
  );
}
