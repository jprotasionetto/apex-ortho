import type { ComponentType, LazyExoticComponent } from 'react';

export type ToolCategory =
  | 'classification'
  | 'calculator'
  | 'scale'
  | 'guide'
  | 'reference'
  | 'safety';

export type ModuleId =
  | 'trauma' | 'shoulder' | 'elbow' | 'hand'
  | 'hip' | 'knee' | 'spine' | 'foot'
  | 'tumor' | 'pediatric' | 'reconstruction'
  | 'sports' | 'universal';

export type Reference = string | { authors: string; title: string; journal: string; year: number; doi?: string };

export interface ToolDefinition {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: ToolCategory;
  module: ModuleId;
  crossModules?: ModuleId[];
  keywords: string[];
  hasSVG?: boolean;
  isInteractive: boolean;
  evidenceLevel?: string;
  references: Reference[];
  component?: LazyExoticComponent<ComponentType> | null;
}

export interface ModuleDefinition {
  id: ModuleId;
  name: string;
  description: string;
  icon: string;
  color: string;
  toolCount: number;
}

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  classification: 'Classificacao',
  calculator: 'Calculadora',
  scale: 'Escala',
  guide: 'Guia Clinico',
  reference: 'Referencia',
  safety: 'Seguranca',
};

export const MODULE_LABELS: Record<ModuleId, string> = {
  trauma: 'Trauma',
  shoulder: 'Ombro',
  elbow: 'Cotovelo',
  hand: 'Mao e Punho',
  hip: 'Quadril',
  knee: 'Joelho',
  spine: 'Coluna',
  foot: 'Pe e Tornozelo',
  tumor: 'Tumor Osseo',
  pediatric: 'Pediatrica',
  reconstruction: 'Reconstrucao',
  sports: 'Esportiva',
  universal: 'Universal',
};

// Re-export classification and score types for convenience
export type { ClassificationGrade, ClassificationData } from './classification.ts';
export type { ScoreOption, ScoreItem, ScoreInterpretation, ScoreDefinition } from './score.ts';
