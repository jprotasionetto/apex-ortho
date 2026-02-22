import { useState, useMemo } from 'react';
import { frailtyIndex } from '@/data/universal/frailty-index.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function FrailtyIndexTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => frailtyIndex.calculate(values), [values]);
  const interp = useMemo(() => frailtyIndex.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = frailtyIndex.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {frailtyIndex.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={frailtyIndex.maxScore} interpretation={interp} />}
    </div>
  );
}
