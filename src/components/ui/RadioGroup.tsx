interface RadioOption { value: number; label: string; }
interface RadioGroupProps {
  name: string; label: string; description?: string; options: RadioOption[];
  value: number | undefined; onChange: (value: number) => void; showPoints?: boolean;
}
export function RadioGroup({ name, label, description, options, value, onChange, showPoints = true }: RadioGroupProps) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300 mb-2 block">{label}</label>
      {description && <p className="text-xs text-slate-500 mb-2">{description}</p>}
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt.value} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${value === opt.value ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
            <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={() => onChange(opt.value)} className="sr-only" />
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${value === opt.value ? 'border-primary-500' : 'border-slate-600'}`}>
              {value === opt.value && <div className="w-2 h-2 rounded-full bg-primary-500" />}
            </div>
            <span className="text-sm text-slate-300 flex-1">{opt.label}</span>
            {showPoints && <span className="text-xs text-slate-500 font-mono">+{opt.value}</span>}
          </label>
        ))}
      </div>
    </div>
  );
}
