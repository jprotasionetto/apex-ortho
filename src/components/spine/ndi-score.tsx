import { useState, useMemo } from 'react';
import { ndiScore } from '@/data/spine/ndi-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function NdiScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => ndiScore.calculate(values), [values]);
  const interp = useMemo(() => ndiScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = ndiScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {ndiScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={ndiScore.maxScore} interpretation={interp} />}
    </div>
  );
}
