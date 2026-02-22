export function formatScore(score: number, decimals = 0): string {
  return score.toFixed(decimals);
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR');
}
