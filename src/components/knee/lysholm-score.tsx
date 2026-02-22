import { useState, useMemo } from 'react';
import { lysholmScore } from '@/data/knee/lysholm-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function LysholmScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => lysholmScore.calculate(values), [values]);
  const interp = useMemo(() => lysholmScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = lysholmScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {lysholmScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={lysholmScore.maxScore} interpretation={interp} />}
    </div>
  );
}
