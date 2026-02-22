interface ResultDisplayProps {
  score: number; maxScore: number;
  interpretation: { label: string; color: 'safe' | 'caution' | 'danger' | 'info'; description: string; };
  threshold?: { value: number; label: string; };
}
const colorMap = {
  safe: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', bar: 'bg-green-500' },
  caution: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', bar: 'bg-yellow-500' },
  danger: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', bar: 'bg-red-500' },
  info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', bar: 'bg-blue-500' },
};
export function ResultDisplay({ score, maxScore, interpretation, threshold }: ResultDisplayProps) {
  const colors = colorMap[interpretation.color];
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  return (
    <div className={`${colors.bg} border ${colors.border} rounded-xl p-6`}>
      <div className="flex items-center justify-between mb-4">
        <div><p className="text-sm text-slate-400">Score Total</p>
          <p className={`text-3xl font-bold ${colors.text}`}>{score}<span className="text-lg text-slate-500 font-normal"> / {maxScore}</span></p></div>
        <div className={`px-4 py-2 rounded-lg ${colors.bg} border ${colors.border}`}><p className={`text-sm font-semibold ${colors.text}`}>{interpretation.label}</p></div>
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full mb-3 relative">
        <div className={`h-full ${colors.bar} rounded-full transition-all duration-500`} style={{ width: `${Math.min(percentage, 100)}%` }} />
        {threshold && <div className="absolute top-0 bottom-0 w-0.5 bg-slate-400" style={{ left: `${(threshold.value / maxScore) * 100}%` }} title={threshold.label}>
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-slate-400 whitespace-nowrap">{threshold.label}</div></div>}
      </div>
      <p className="text-sm text-slate-300">{interpretation.description}</p>
    </div>
  );
}
