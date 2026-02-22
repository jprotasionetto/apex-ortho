import { useState, useMemo } from 'react';
import { marxActivityScale } from '@/data/sports/marx-activity-scale.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function MarxActivityScaleTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => marxActivityScale.calculate(values), [values]);
  const interp = useMemo(() => marxActivityScale.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = marxActivityScale.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {marxActivityScale.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={marxActivityScale.maxScore} interpretation={interp} />}
    </div>
  );
}
