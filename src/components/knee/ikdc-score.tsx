import { useState, useMemo } from 'react';
import { ikdcScore } from '@/data/knee/ikdc-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function IkdcScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => ikdcScore.calculate(values), [values]);
  const interp = useMemo(() => ikdcScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = ikdcScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {ikdcScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={ikdcScore.maxScore} interpretation={interp} />}
    </div>
  );
}
