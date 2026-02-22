import { useState, useMemo } from 'react';
import { vasPainScale } from '@/data/universal/vas-pain-scale.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function VasPainScaleTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => vasPainScale.calculate(values), [values]);
  const interp = useMemo(() => vasPainScale.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = vasPainScale.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {vasPainScale.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={vasPainScale.maxScore} interpretation={interp} />}
    </div>
  );
}
