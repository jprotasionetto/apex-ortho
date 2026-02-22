import type { ScoreDefinition } from '@/types/score.ts';

export const roweScoreData: ScoreDefinition = {
  id: 'rowe-score',
  name: 'Rowe Score (Instabilidade do Ombro)',
  items: [
    {
      id: 'stability',
      label: 'Estabilidade',
      type: 'radio',
      section: 'Estabilidade',
      options: [
        { value: 0, label: 'Luxação recorrente (0)' },
        { value: 15, label: 'Subluxação ou apreensão marcada (15)' },
        { value: 25, label: 'Apreensão em certas posições (25)' },
        { value: 50, label: 'Sem instabilidade (50)' },
      ],
    },
    {
      id: 'motion',
      label: 'Amplitude de movimento',
      type: 'radio',
      section: 'Mobilidade',
      options: [
        { value: 0, label: '25% ou menos da rotação externa normal, elevação limitada (0)' },
        { value: 5, label: '50% da rotação externa normal, elevação até 90° (5)' },
        { value: 10, label: '75% da rotação externa normal, elevação 90-120° (10)' },
        { value: 15, label: '75-100% da rotação externa normal, elevação 120-150° (15)' },
        { value: 20, label: '100% da rotação externa normal, elevação completa (20)' },
      ],
    },
    {
      id: 'function',
      label: 'Função',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 0, label: 'Limitação marcada, incapaz de realizar AVD (0)' },
        { value: 5, label: 'Limitação moderada em AVD e trabalho (5)' },
        { value: 10, label: 'Limitação ligeira, capaz de trabalhar acima da cabeça (10)' },
        { value: 20, label: 'Sem limitação para AVD, ligeira limitação desportiva (20)' },
        { value: 25, label: 'Ligeira limitação para trabalho e desporto (25)' },
        { value: 30, label: 'Sem limitações (30)' },
      ],
    },
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    { range: [90, 100], label: 'Excelente', description: 'Resultado excelente. Ombro estável e funcional.', color: 'safe' },
    { range: [75, 89], label: 'Bom', description: 'Bom resultado. Mínima limitação residual.', color: 'safe' },
    { range: [51, 74], label: 'Razoável', description: 'Resultado razoável. Alguma instabilidade ou limitação residual.', color: 'caution' },
    { range: [0, 50], label: 'Mau', description: 'Resultado insatisfatório. Instabilidade persistente.', color: 'danger' },
  ],
  calculate: (values: Record<string, number>) => {
    return (values.stability ?? 0) + (values.motion ?? 0) + (values.function ?? 0);
  },
  references: [
    {
      authors: 'Rowe CR, Patel D, Southmayd WW',
      title: 'The Bankart procedure: a long-term end-result study',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 1978,
    },
  ],
};
