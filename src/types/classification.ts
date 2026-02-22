import type { Reference } from './tool.ts';

export interface ClassificationGrade {
  id: string;
  label: string;
  description: string;
  criteria: string[];
  treatment: string;
  prognosis?: string;
  colorCode: 'safe' | 'caution' | 'danger' | 'info';
  svgHighlightZone?: string;
  imageNote?: string;
}

export interface ClassificationData {
  id: string;
  name: string;
  author: string;
  year: number;
  revision?: string;
  grades: ClassificationGrade[];
  clinicalPearl?: string;
  pitfall?: string;
  references?: Reference[];
}
