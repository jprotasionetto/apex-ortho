import { useState, useMemo } from 'react';
import { clubfootPiraniScoreData } from '@/data/pediatric/clubfoot-pirani.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';

export default function ClubfootPiraniScoreTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const score = useMemo(() => clubfootPiraniScoreData.calculate(values), [values]);
  const interp = useMemo(() => clubfootPiraniScoreData.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]), [score]);
  const allFilled = clubfootPiraniScoreData.items.every((item) => values[item.id] !== undefined);

  return (
    <div className="space-y-6">
      {clubfootPiraniScoreData.items.map((item) => (
        <RadioGroup key={item.id} name={item.id} label={item.label} options={item.options || []} value={values[item.id]} onChange={(v) => setValues((prev) => ({ ...prev, [item.id]: v }))} />
      ))}
      {allFilled && interp && <ResultDisplay score={score} maxScore={clubfootPiraniScoreData.maxScore} interpretation={interp} />}
    </div>
  );
}
