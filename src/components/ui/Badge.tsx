interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  variant?: 'filled' | 'outline';
}

export function Badge({ children, color = '#3B82F6', variant = 'filled' }: BadgeProps) {
  if (variant === 'outline') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border" style={{ borderColor: color, color }}>
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white" style={{ backgroundColor: color }}>
      {children}
    </span>
  );
}
