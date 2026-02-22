import type { ScoreDefinition } from '@/types/score.ts';

export const asesScoreData: ScoreDefinition = {
  id: 'ases-score',
  name: 'ASES Score (American Shoulder & Elbow Surgeons)',
  items: [
    {
      id: 'pain',
      label: 'Dor (escala visual analógica)',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Sem dor (0)' },
        { value: 1, label: 'Dor mínima (1)' },
        { value: 2, label: 'Dor ligeira (2)' },
        { value: 3, label: 'Dor ligeira a moderada (3)' },
        { value: 4, label: 'Dor moderada (4)' },
        { value: 5, label: 'Dor moderada a intensa (5)' },
        { value: 6, label: 'Dor intensa (6)' },
        { value: 7, label: 'Dor intensa a severa (7)' },
        { value: 8, label: 'Dor severa (8)' },
        { value: 9, label: 'Dor muito severa (9)' },
        { value: 10, label: 'Dor máxima insuportável (10)' },
      ],
    },
    {
      id: 'func_coat',
      label: 'Vestir um casaco',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_sleep',
      label: 'Dormir sobre o lado afetado',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_wash_back',
      label: 'Lavar as costas / apertar soutien atrás',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_toilet',
      label: 'Higiene pessoal (usar a sanita)',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_comb',
      label: 'Pentear o cabelo',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_shelf',
      label: 'Alcançar prateleira alta',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_lift',
      label: 'Levantar 4.5 kg acima do ombro',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_throw',
      label: 'Lançar uma bola por cima da cabeça',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_work',
      label: 'Realizar o trabalho habitual',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
    {
      id: 'func_sport',
      label: 'Praticar desporto habitual',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Incapaz (0)' },
        { value: 1, label: 'Muito difícil (1)' },
        { value: 2, label: 'Difícil (2)' },
        { value: 3, label: 'Normal (3)' },
      ],
    },
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    { range: [86, 100], label: 'Excelente', description: 'Função excelente do ombro.', color: 'safe' },
    { range: [71, 85], label: 'Bom', description: 'Boa função do ombro.', color: 'safe' },
    { range: [56, 70], label: 'Razoável', description: 'Função razoável com limitações.', color: 'caution' },
    { range: [0, 55], label: 'Mau', description: 'Função significativamente comprometida.', color: 'danger' },
  ],
  calculate: (values: Record<string, number>) => {
    const painValue = values.pain ?? 0;
    const painScore = (10 - painValue) * 5;
    const funcIds = ['func_coat', 'func_sleep', 'func_wash_back', 'func_toilet', 'func_comb', 'func_shelf', 'func_lift', 'func_throw', 'func_work', 'func_sport'];
    const funcSum = funcIds.reduce((sum, id) => sum + (values[id] ?? 0), 0);
    const funcScore = Math.round((funcSum / 30) * 50);
    return painScore + funcScore;
  },
  references: [
    {
      authors: 'Richards RR, An KN, Bigliani LU, et al.',
      title: 'A standardized method for the assessment of shoulder function',
      journal: 'Journal of Shoulder and Elbow Surgery',
      year: 1994,
    },
  ],
};
