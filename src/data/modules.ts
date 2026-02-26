import type { ModuleDefinition } from '@/types/tool.ts';

export const modules: ModuleDefinition[] = [
  { id: 'trauma', name: 'Trauma', description: 'Classificacoes de fraturas e lesoes traumaticas', icon: 'Bone', color: '#EF4444', toolCount: 21 },
  { id: 'shoulder', name: 'Ombro', description: 'Ferramentas clinicas para o ombro', icon: 'CircleDot', color: '#F59E0B', toolCount: 14 },
  { id: 'elbow', name: 'Cotovelo', description: 'Ferramentas clinicas para o cotovelo', icon: 'Radius', color: '#8B5CF6', toolCount: 12 },
  { id: 'hand', name: 'Mao e Punho', description: 'Ferramentas clinicas para mao e punho', icon: 'Hand', color: '#EC4899', toolCount: 12 },
  { id: 'hip', name: 'Quadril', description: 'Ferramentas clinicas para o quadril', icon: 'Circle', color: '#06B6D4', toolCount: 15 },
  { id: 'knee', name: 'Joelho', description: 'Ferramentas clinicas para o joelho', icon: 'Disc', color: '#10B981', toolCount: 18 },
  { id: 'spine', name: 'Coluna', description: 'Ferramentas clinicas para a coluna', icon: 'Layers', color: '#6366F1', toolCount: 19 },
  { id: 'foot', name: 'Pe e Tornozelo', description: 'Ferramentas clinicas para pe e tornozelo', icon: 'Footprints', color: '#F97316', toolCount: 14 },
  { id: 'tumor', name: 'Tumores', description: 'Classificacoes e estadiamento de tumores musculoesqueleticos', icon: 'Target', color: '#DC2626', toolCount: 9 },
  { id: 'pediatric', name: 'Pediatria', description: 'Ferramentas clinicas para ortopedia pediatrica', icon: 'Baby', color: '#A855F7', toolCount: 15 },
  { id: 'reconstruction', name: 'Reconstrucao', description: 'Artroplastias e cirurgia reconstrutiva', icon: 'Wrench', color: '#14B8A6', toolCount: 8 },
  { id: 'sports', name: 'Esportes', description: 'Medicina esportiva e lesoes do esporte', icon: 'Dumbbell', color: '#84CC16', toolCount: 9 },
  { id: 'universal', name: 'Universal', description: 'Ferramentas transversais e perioperatorias', icon: 'Globe', color: '#64748B', toolCount: 18 },
];
