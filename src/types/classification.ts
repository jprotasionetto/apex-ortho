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

export interface ClassificationImage {
  src: string;
  caption: string;
  source?: string; // e.g. 'Rockwood Green, 10th ed.' | 'Manual SBOT'
}

export interface ClassificationData {
  id: string;
  name: string;
  author: string;
  year: number;
  revision?: string;
  grades: ClassificationGrade[];
  epidemiology?: string;       // Epidemiology, demographics, incidence
  mechanism?: string;          // Injury mechanism / biomechanics
  theory?: string;             // Theoretical basis / historical context
  surgicalBasis?: string;      // General surgical indications & decision-making
  referenceImages?: ClassificationImage[]; // Additional reference images
  clinicalPearl?: string;
  pitfall?: string;
  references?: Reference[];
}
