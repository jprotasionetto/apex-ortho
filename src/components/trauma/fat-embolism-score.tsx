import { useState, useMemo } from 'react';
import { fatEmbolismScoreData } from '@/data/trauma/fat-embolism-score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function FatEmbolismScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => fatEmbolismScoreData.calculate(values), [values]);
  const interp = useMemo(() => fatEmbolismScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = fatEmbolismScoreData.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {fatEmbolismScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={fatEmbolismScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
