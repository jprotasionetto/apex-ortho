import { useState, useMemo } from 'react';
import type { ScoreDefinition, ScoreItem, ScoreInterpretation } from '@/types/score.ts';
import { RadioGroup } from '@/components/ui/RadioGroup.tsx';
import { ResultDisplay } from '@/components/tools/ResultDisplay.tsx';
import { ProgressRing } from '@/components/ui/ProgressRing.tsx';

const CLINICAL_COLORS: Record<ScoreInterpretation['color'], string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

interface ScoreCalculatorProps {
  data: ScoreDefinition;
}

function SliderInput({
  item,
  value,
  onChange,
}: {
  item: ScoreItem;
  value: number | undefined;
  onChange: (v: number) => void;
}) {
  const min = item.min ?? 0;
  const max = item.max ?? 10;
  const step = item.step ?? 1;
  const current = value ?? min;

  return (
    <div>
      <label className="text-sm font-medium text-slate-300 mb-2 block">{item.label}</label>
      {item.description && <p className="text-xs text-slate-500 mb-2">{item.description}</p>}
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
        />
        <span className="text-sm font-mono text-slate-300 min-w-[3ch] text-right">{current}</span>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

function NumberInput({
  item,
  value,
  onChange,
}: {
  item: ScoreItem;
  value: number | undefined;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300 mb-2 block">{item.label}</label>
      {item.description && <p className="text-xs text-slate-500 mb-2">{item.description}</p>}
      <input
        type="number"
        min={item.min}
        max={item.max}
        step={item.step ?? 1}
        value={value ?? ''}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (!isNaN(v)) onChange(v);
        }}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-primary-500 focus:outline-none transition-colors"
        placeholder="0"
      />
    </div>
  );
}

function CheckboxInput({
  item,
  value,
  onChange,
}: {
  item: ScoreItem;
  value: number | undefined;
  onChange: (v: number) => void;
}) {
  const checked = value === 1;
  return (
    <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${checked ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked ? 1 : 0)}
        className="sr-only"
      />
      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${checked ? 'border-primary-500 bg-primary-500' : 'border-slate-600'}`}>
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className="flex-1">
        <span className="text-sm text-slate-300">{item.label}</span>
        {item.description && <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>}
      </div>
      {item.weight !== undefined && (
        <span className="text-xs text-slate-500 font-mono">+{item.weight}</span>
      )}
    </label>
  );
}

function SelectInput({
  item,
  value,
  onChange,
}: {
  item: ScoreItem;
  value: number | undefined;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300 mb-2 block">{item.label}</label>
      {item.description && <p className="text-xs text-slate-500 mb-2">{item.description}</p>}
      <select
        value={value ?? ''}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-primary-500 focus:outline-none transition-colors"
      >
        <option value="" disabled>
          Selecione...
        </option>
        {(item.options ?? []).map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function renderItem(
  item: ScoreItem,
  value: number | undefined,
  onChange: (v: number) => void,
) {
  switch (item.type) {
    case 'radio':
      return (
        <RadioGroup
          name={item.id}
          label={item.label}
          description={item.description}
          options={item.options ?? []}
          value={value}
          onChange={onChange}
        />
      );
    case 'slider':
      return <SliderInput item={item} value={value} onChange={onChange} />;
    case 'number':
      return <NumberInput item={item} value={value} onChange={onChange} />;
    case 'checkbox':
      return <CheckboxInput item={item} value={value} onChange={onChange} />;
    case 'select':
      return <SelectInput item={item} value={value} onChange={onChange} />;
    default:
      return null;
  }
}

export function ScoreCalculator({ data }: ScoreCalculatorProps) {
  const [values, setValues] = useState<Record<string, number>>({});

  const score = useMemo(() => data.calculate(values), [data, values]);

  const interpretation = useMemo(
    () => data.interpretations.find((i) => score >= i.range[0] && score <= i.range[1]),
    [data.interpretations, score],
  );

  const allFilled = useMemo(
    () => data.items.every((item) => values[item.id] !== undefined),
    [data.items, values],
  );

  const handleChange = (itemId: string, value: number) => {
    setValues((prev) => ({ ...prev, [itemId]: value }));
  };

  // Group items by section
  const sections = useMemo(() => {
    const grouped = new Map<string, ScoreItem[]>();
    for (const item of data.items) {
      const section = item.section ?? '__default__';
      const existing = grouped.get(section) ?? [];
      existing.push(item);
      grouped.set(section, existing);
    }
    return grouped;
  }, [data.items]);

  const ringColor = interpretation ? CLINICAL_COLORS[interpretation.color] : '#3B82F6';

  return (
    <div className="space-y-6">
      {/* Score items grouped by section */}
      {Array.from(sections.entries()).map(([section, items]) => (
        <div key={section} className="space-y-4">
          {section !== '__default__' && (
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide border-b border-slate-700 pb-2">
              {section}
            </h3>
          )}
          {items.map((item) => (
            <div key={item.id}>{renderItem(item, values[item.id], (v) => handleChange(item.id, v))}</div>
          ))}
        </div>
      ))}

      {/* Progress ring + live score */}
      <div className="flex items-center gap-4 py-2">
        <ProgressRing value={score} max={data.maxScore} size={64} strokeWidth={5} color={ringColor} />
        <div>
          <p className="text-sm text-slate-400">Score parcial</p>
          <p className="text-2xl font-bold text-slate-100">
            {score}
            <span className="text-sm text-slate-500 font-normal"> / {data.maxScore}</span>
          </p>
        </div>
      </div>

      {/* Full result when all items filled */}
      {allFilled && interpretation && (
        <div className="animate-fade-in">
          <ResultDisplay score={score} maxScore={data.maxScore} interpretation={interpretation} />

          {interpretation.recommendation && (
            <div className="mt-4 bg-slate-800 border border-slate-700 rounded-xl p-4">
              <h4 className="text-sm font-medium text-slate-400 mb-1">Recomendacao</h4>
              <p className="text-sm text-slate-300">{interpretation.recommendation}</p>
            </div>
          )}

          {data.mcid !== undefined && (
            <p className="mt-3 text-xs text-slate-500">
              MCID (diferenca clinicamente importante minima): {data.mcid} pontos
            </p>
          )}
        </div>
      )}
    </div>
  );
}
