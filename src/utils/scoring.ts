import type { ScoreInterpretation } from '@/types/score.ts';

export function getInterpretation(
  score: number,
  interpretations: ScoreInterpretation[]
): ScoreInterpretation | undefined {
  return interpretations.find((i) => score >= i.range[0] && score <= i.range[1]);
}

export function calculatePercentage(score: number, max: number): number {
  return max > 0 ? Math.round((score / max) * 100) : 0;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
