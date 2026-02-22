interface SliderProps {
  name: string;
  label: string;
  description?: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  showValue?: boolean;
}

export function Slider({
  name,
  label,
  description,
  min,
  max,
  step,
  value,
  onChange,
  showValue = true,
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={name} className="text-sm font-medium text-slate-300">
          {label}
        </label>
        {showValue && (
          <span className="text-sm font-mono text-primary-500">{value}</span>
        )}
      </div>
      {description && (
        <p className="text-xs text-slate-500 mb-3">{description}</p>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 appearance-none cursor-pointer rounded-full bg-slate-700 outline-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-primary-500
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-primary-400
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-primary-500
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-primary-400
            [&::-moz-range-thumb]:shadow-lg"
          style={{
            background: `linear-gradient(to right, rgb(var(--color-primary-500, 99 102 241)) 0%, rgb(var(--color-primary-500, 99 102 241)) ${percentage}%, rgb(51 65 85) ${percentage}%, rgb(51 65 85) 100%)`,
          }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-slate-600">{min}</span>
        <span className="text-xs text-slate-600">{max}</span>
      </div>
    </div>
  );
}
