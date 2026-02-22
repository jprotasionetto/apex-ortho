import type { ScoreDefinition } from '@/types/score.ts';

export const mepsScoreData: ScoreDefinition = {
  id: 'meps-score',
  name: 'MEPS (Mayo Elbow Performance Score)',
  items: [
    {
      id: 'pain',
      label: 'Dor',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Dor severa (0)' },
        { value: 15, label: 'Dor moderada (15)' },
        { value: 30, label: 'Dor ligeira (30)' },
        { value: 45, label: 'Sem dor (45)' },
      ],
    },
    {
      id: 'motion',
      label: 'Arco de movimento (flexão-extensão)',
      type: 'radio',
      section: 'Mobilidade',
      options: [
        { value: 5, label: 'Arco <50° (5)' },
        { value: 10, label: 'Arco 50-100° (10)' },
        { value: 15, label: 'Arco 100-130° (15)' },
        { value: 20, label: 'Arco >130° (20)' },
      ],
    },
    {
      id: 'stability',
      label: 'Estabilidade',
      type: 'radio',
      section: 'Estabilidade',
      options: [
        { value: 0, label: 'Instabilidade grosseira (0)' },
        { value: 5, label: 'Instabilidade moderada (5)' },
        { value: 10, label: 'Estável (10)' },
      ],
    },
    {
      id: 'func_comb',
      label: 'Pentear o cabelo',
      type: 'radio',
      section: 'Função Diária',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 5, label: 'Capaz (5)' },
      ],
    },
    {
      id: 'func_feed',
      label: 'Alimentar-se',
      type: 'radio',
      section: 'Função Diária',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 5, label: 'Capaz (5)' },
      ],
    },
    {
      id: 'func_hygiene',
      label: 'Higiene pessoal',
      type: 'radio',
      section: 'Função Diária',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 5, label: 'Capaz (5)' },
      ],
    },
    {
      id: 'func_shirt',
      label: 'Vestir camisa/camisola',
      type: 'radio',
      section: 'Função Diária',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 5, label: 'Capaz (5)' },
      ],
    },
    {
      id: 'func_shoe',
      label: 'Calçar sapatos',
      type: 'radio',
      section: 'Função Diária',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 5, label: 'Capaz (5)' },
      ],
    },
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    { range: [90, 100], label: 'Excelente', description: 'Resultado excelente. Cotovelo funcional e indolor.', color: 'safe' },
    { range: [75, 89], label: 'Bom', description: 'Bom resultado funcional do cotovelo.', color: 'safe' },
    { range: [60, 74], label: 'Razoável', description: 'Resultado razoável com alguma limitação.', color: 'caution' },
    { range: [0, 59], label: 'Mau', description: 'Resultado insatisfatório. Limitação funcional significativa.', color: 'danger' },
  ],
  calculate: (values: Record<string, number>) => {
    const ids = ['pain', 'motion', 'stability', 'func_comb', 'func_feed', 'func_hygiene', 'func_shirt', 'func_shoe'];
    return ids.reduce((sum, id) => sum + (values[id] ?? 0), 0);
  },
  references: [
    {
      authors: 'Morrey BF, An KN',
      title: 'Functional evaluation of the elbow',
      journal: 'The Elbow and Its Disorders',
      year: 1993,
    },
  ],
};
