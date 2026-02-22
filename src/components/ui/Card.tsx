interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
}

export function Card({ children, className = '', hover = false, padding = true }: CardProps) {
  return (
    <div className={`bg-slate-800 rounded-xl border border-slate-700 ${hover ? 'hover:border-slate-600 transition-colors cursor-pointer' : ''} ${padding ? 'p-4' : ''} ${className}`}>
      {children}
    </div>
  );
}
