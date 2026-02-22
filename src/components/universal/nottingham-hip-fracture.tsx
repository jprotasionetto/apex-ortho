import { useState, useMemo } from 'react';
import { nottinghamHipFractureScore } from '@/data/universal/nottingham-hip-fracture.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function NottinghamHipFractureTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => nottinghamHipFractureScore.calculate(values), [values]);
  const interp = useMemo(() => nottinghamHipFractureScore.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = nottinghamHipFractureScore.items.every((item) => values[item.id] !== undefined);
  return (
    <div className="space-y-6">
      {nottinghamHipFractureScore.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={nottinghamHipFractureScore.maxScore} interpretation={interp} />}
    </div>
  );
}
