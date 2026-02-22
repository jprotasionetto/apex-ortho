import { useState, useMemo } from 'react';
import { joaScore } from '@/data/spine/joa-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function JoaScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => joaScore.calculate(values), [values]);
  const interp = useMemo(() => joaScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = joaScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {joaScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={joaScore.maxScore} interpretation={interp} />}
    </div>
  );
}
