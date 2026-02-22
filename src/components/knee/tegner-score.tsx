import { useState, useMemo } from 'react';
import { tegnerScore } from '@/data/knee/tegner-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function TegnerScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => tegnerScore.calculate(values), [values]);
  const interp = useMemo(() => tegnerScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = tegnerScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {tegnerScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={tegnerScore.maxScore} interpretation={interp} />}
    </div>
  );
}
