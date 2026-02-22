import type { ScoreDefinition } from '@/types/score.ts';

export const uclaShoulderData: ScoreDefinition = {
  id: 'ucla-shoulder',
  name: 'UCLA Shoulder Score',
  items: [
    {
      id: 'pain',
      label: 'Dor',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 1, label: 'Dor constante, insuportável, uso frequente de analgésicos fortes (1)' },
        { value: 2, label: 'Dor constante mas suportável, uso ocasional de analgésicos fortes (2)' },
        { value: 4, label: 'Dor mínima ou ausente em repouso, presente em atividades leves (4)' },
        { value: 6, label: 'Dor presente apenas em atividades pesadas (6)' },
        { value: 8, label: 'Dor ocasional ligeira (8)' },
        { value: 10, label: 'Sem dor (10)' },
      ],
    },
    {
      id: 'function',
      label: 'Função',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Incapaz de usar o membro (1)' },
        { value: 2, label: 'Apenas atividades muito leves (2)' },
        { value: 4, label: 'Trabalho leve de casa, maioria das AVD (4)' },
        { value: 6, label: 'Maioria das tarefas domésticas, compras, conduzir (6)' },
        { value: 8, label: 'Ligeira limitação, capaz de trabalhar acima do ombro (8)' },
        { value: 10, label: 'Atividades normais sem restrição (10)' },
      ],
    },
    {
      id: 'forward_flexion',
      label: 'Flexão anterior ativa',
      type: 'radio',
      section: 'Flexão Anterior',
      options: [
        { value: 0, label: '<30° (0)' },
        { value: 1, label: '30-45° (1)' },
        { value: 2, label: '45-90° (2)' },
        { value: 3, label: '90-120° (3)' },
        { value: 4, label: '120-150° (4)' },
        { value: 5, label: '>150° (5)' },
      ],
    },
    {
      id: 'strength',
      label: 'Força de flexão anterior (teste manual)',
      type: 'radio',
      section: 'Força',
      options: [
        { value: 0, label: 'Grau 0 - Ausente (0)' },
        { value: 1, label: 'Grau 1 - Contração palpável (1)' },
        { value: 2, label: 'Grau 2 - Sem gravidade (2)' },
        { value: 3, label: 'Grau 3 - Contra gravidade (3)' },
        { value: 4, label: 'Grau 4 - Contra alguma resistência (4)' },
        { value: 5, label: 'Grau 5 - Normal (5)' },
      ],
    },
    {
      id: 'satisfaction',
      label: 'Satisfação do doente',
      type: 'radio',
      section: 'Satisfação',
      options: [
        { value: 0, label: 'Insatisfeito (0)' },
        { value: 5, label: 'Satisfeito (5)' },
      ],
    },
  ],
  maxScore: 35,
  minScore: 0,
  interpretations: [
    { range: [34, 35], label: 'Excelente', description: 'Resultado excelente', color: 'safe' },
    { range: [29, 33], label: 'Bom', description: 'Bom resultado funcional', color: 'safe' },
    { range: [21, 28], label: 'Razoável', description: 'Resultado razoável com limitações', color: 'caution' },
    { range: [0, 20], label: 'Mau', description: 'Resultado insatisfatório', color: 'danger' },
  ],
  calculate: (values: Record<string, number>) => {
    const ids = ['pain', 'function', 'forward_flexion', 'strength', 'satisfaction'];
    return ids.reduce((sum, id) => sum + (values[id] ?? 0), 0);
  },
  references: [
    {
      authors: 'Amstutz HC, Sew Hoy AL, Clarke IC',
      title: 'UCLA anatomic total shoulder arthroplasty',
      journal: 'Clinical Orthopaedics and Related Research',
      year: 1981,
    },
  ],
};
