import type { ScoreDefinition } from '@/types/tool';

export const injurySeverityScoreData: ScoreDefinition = {
  id: 'injury-severity-score',
  name: 'ISS - Injury Severity Score',
  items: [
    {
      id: 'head-neck',
      label: 'Cabeça/Pescoço (AIS)',
      type: 'radio',
      section: 'Regiões Corporais (AIS - Abbreviated Injury Scale)',
      options: [
        { value: 0, label: '0 - Sem lesão' },
        { value: 1, label: '1 - Leve' },
        { value: 2, label: '2 - Moderada' },
        { value: 3, label: '3 - Grave (sem risco de vida)' },
        { value: 4, label: '4 - Grave (com risco de vida)' },
        { value: 5, label: '5 - Crítica (sobrevivência incerta)' }
      ]
    },
    {
      id: 'face',
      label: 'Face (AIS)',
      type: 'radio',
      section: 'Regiões Corporais (AIS - Abbreviated Injury Scale)',
      options: [
        { value: 0, label: '0 - Sem lesão' },
        { value: 1, label: '1 - Leve' },
        { value: 2, label: '2 - Moderada' },
        { value: 3, label: '3 - Grave (sem risco de vida)' },
        { value: 4, label: '4 - Grave (com risco de vida)' },
        { value: 5, label: '5 - Crítica (sobrevivência incerta)' }
      ]
    },
    {
      id: 'chest',
      label: 'Tórax (AIS)',
      type: 'radio',
      section: 'Regiões Corporais (AIS - Abbreviated Injury Scale)',
      options: [
        { value: 0, label: '0 - Sem lesão' },
        { value: 1, label: '1 - Leve' },
        { value: 2, label: '2 - Moderada' },
        { value: 3, label: '3 - Grave (sem risco de vida)' },
        { value: 4, label: '4 - Grave (com risco de vida)' },
        { value: 5, label: '5 - Crítica (sobrevivência incerta)' }
      ]
    },
    {
      id: 'abdomen',
      label: 'Abdômen/Conteúdo Pélvico (AIS)',
      type: 'radio',
      section: 'Regiões Corporais (AIS - Abbreviated Injury Scale)',
      options: [
        { value: 0, label: '0 - Sem lesão' },
        { value: 1, label: '1 - Leve' },
        { value: 2, label: '2 - Moderada' },
        { value: 3, label: '3 - Grave (sem risco de vida)' },
        { value: 4, label: '4 - Grave (com risco de vida)' },
        { value: 5, label: '5 - Crítica (sobrevivência incerta)' }
      ]
    },
    {
      id: 'extremity',
      label: 'Extremidades/Cintura Pélvica (AIS)',
      type: 'radio',
      section: 'Regiões Corporais (AIS - Abbreviated Injury Scale)',
      options: [
        { value: 0, label: '0 - Sem lesão' },
        { value: 1, label: '1 - Leve' },
        { value: 2, label: '2 - Moderada' },
        { value: 3, label: '3 - Grave (sem risco de vida)' },
        { value: 4, label: '4 - Grave (com risco de vida)' },
        { value: 5, label: '5 - Crítica (sobrevivência incerta)' }
      ]
    },
    {
      id: 'external',
      label: 'Externa (queimaduras, hipotermia, etc.) (AIS)',
      type: 'radio',
      section: 'Regiões Corporais (AIS - Abbreviated Injury Scale)',
      options: [
        { value: 0, label: '0 - Sem lesão' },
        { value: 1, label: '1 - Leve' },
        { value: 2, label: '2 - Moderada' },
        { value: 3, label: '3 - Grave (sem risco de vida)' },
        { value: 4, label: '4 - Grave (com risco de vida)' },
        { value: 5, label: '5 - Crítica (sobrevivência incerta)' }
      ]
    }
  ],
  maxScore: 75,
  minScore: 0,
  calculate: (values: Record<string, number>) => {
    const scores = [
      values['head-neck'] ?? 0,
      values['face'] ?? 0,
      values['chest'] ?? 0,
      values['abdomen'] ?? 0,
      values['extremity'] ?? 0,
      values['external'] ?? 0
    ];
    // If any AIS is 6 (unsurvivable), ISS is automatically 75
    if (scores.some((s) => s === 6)) return 75;
    // Sort descending and take top 3
    const sorted = [...scores].sort((a, b) => b - a);
    const top3 = sorted.slice(0, 3);
    // ISS = sum of squares of top 3 AIS scores
    return top3.reduce((sum, val) => sum + val * val, 0);
  },
  interpretations: [
    {
      range: [0, 8],
      label: 'Trauma Menor',
      description: 'ISS 1-8: Trauma menor. Geralmente não necessita internação em centro de trauma. Tratamento ambulatorial ou internação breve.',
      color: 'safe'
    },
    {
      range: [9, 15],
      label: 'Trauma Moderado',
      description: 'ISS 9-15: Trauma moderado. Internação em centro de trauma recomendada. Monitorização e tratamento das lesões individuais.',
      color: 'caution'
    },
    {
      range: [16, 24],
      label: 'Trauma Grave',
      description: 'ISS 16-24: Trauma grave (politraumatizado). Centro de trauma nível I. Considerar damage control. Mortalidade começa a aumentar significativamente.',
      color: 'danger'
    },
    {
      range: [25, 75],
      label: 'Trauma Crítico',
      description: 'ISS ≥ 25: Trauma crítico. Alta mortalidade. Damage control obrigatório. UTI. ISS > 40: mortalidade > 50%. ISS = 75: lesão virtualmente fatal.',
      color: 'danger'
    }
  ],
  references: [
    {
      authors: 'Baker SP, O\'Neill B, Haddon W Jr, Long WB',
      title: 'The injury severity score: a method for describing patients with multiple injuries and evaluating emergency care',
      journal: 'J Trauma',
      year: 1974
    },
    {
      authors: 'Copes WS, Champion HR, Sacco WJ, et al',
      title: 'The Injury Severity Score revisited',
      journal: 'J Trauma',
      year: 1988
    }
  ]
};
