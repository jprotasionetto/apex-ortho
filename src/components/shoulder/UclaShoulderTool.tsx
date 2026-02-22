import { useState, useMemo } from 'react';
import { uclaShoulderData } from '@/data/shoulder/ucla-shoulder.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function UclaShoulderTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => uclaShoulderData.calculate(values), [values]);
  const interp = useMemo(() => uclaShoulderData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = uclaShoulderData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {uclaShoulderData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={uclaShoulderData.maxScore} interpretation={interp} />}
    </div>
  );
}
