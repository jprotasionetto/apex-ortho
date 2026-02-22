interface AlertProps { type: 'safe' | 'caution' | 'danger' | 'info'; children: React.ReactNode; }
const alertStyles = {
  safe: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-300' },
  caution: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-300' },
  danger: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-300' },
  info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-300' },
};
export function Alert({ type, children }: AlertProps) {
  const s = alertStyles[type];
  return <div className={`${s.bg} border ${s.border} ${s.text} rounded-lg p-4 text-sm`}>{children}</div>;
}
