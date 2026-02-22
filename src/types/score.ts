import type { Reference } from './tool.ts';

export interface ScoreOption {
  value: number;
  label: string;
}

export interface ScoreItem {
  id: string;
  label: string;
  description?: string;
  type: 'radio' | 'slider' | 'number' | 'checkbox' | 'select';
  options?: ScoreOption[];
  min?: number;
  max?: number;
  step?: number;
  weight?: number;
  section?: string;
}

export interface ScoreInterpretation {
  range: [number, number];
  label: string;
  description: string;
  color: 'safe' | 'caution' | 'danger' | 'info';
  recommendation?: string;
}

export interface ScoreDefinition {
  id: string;
  name: string;
  items: ScoreItem[];
  maxScore: number;
  minScore: number;
  interpretations: ScoreInterpretation[];
  calculate: (values: Record<string, number>) => number;
  mcid?: number;
  references: Reference[];
}
