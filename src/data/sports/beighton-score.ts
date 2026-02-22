import type { ScoreDefinition } from '@/types/score';

export const beightonScore: ScoreDefinition = {
  id: 'beighton-score',
  name: 'Score de Beighton (Hipermobilidade)',
  items: [
    {
      id: 'mcp_5_left',
      label: '5ª MCF esquerda: dorsiflexão passiva > 90°',
      type: 'radio',
      section: 'Mão e Punho',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'mcp_5_right',
      label: '5ª MCF direita: dorsiflexão passiva > 90°',
      type: 'radio',
      section: 'Mão e Punho',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'thumb_left',
      label: 'Polegar esquerdo: aposição passiva ao antebraço',
      type: 'radio',
      section: 'Mão e Punho',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'thumb_right',
      label: 'Polegar direito: aposição passiva ao antebraço',
      type: 'radio',
      section: 'Mão e Punho',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'elbow_left',
      label: 'Cotovelo esquerdo: hiperextensão > 10°',
      type: 'radio',
      section: 'Cotovelo',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'elbow_right',
      label: 'Cotovelo direito: hiperextensão > 10°',
      type: 'radio',
      section: 'Cotovelo',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'knee_left',
      label: 'Joelho esquerdo: hiperextensão > 10°',
      type: 'radio',
      section: 'Joelho',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'knee_right',
      label: 'Joelho direito: hiperextensão > 10°',
      type: 'radio',
      section: 'Joelho',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'trunk_flexion',
      label: 'Flexão anterior do tronco: palmas das mãos planas no chão (joelhos estendidos)',
      type: 'radio',
      section: 'Tronco',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    }
  ],
  maxScore: 9,
  minScore: 0,
  interpretations: [
    {
      range: [0, 3],
      label: 'Normal',
      description: 'Mobilidade articular dentro dos limites normais',
      color: 'safe'
    },
    {
      range: [4, 6],
      label: 'Hipermobilidade',
      description: 'Hipermobilidade articular; avaliar possibilidade de síndrome de hipermobilidade benigna ou distúrbio do tecido conectivo',
      color: 'caution'
    },
    {
      range: [7, 9],
      label: 'Hipermobilidade Generalizada',
      description: 'Hipermobilidade articular generalizada; investigar síndrome de Ehlers-Danlos ou outras colagenoses',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Beighton P, Solomon L, Soskolne CL. Articular mobility in an African population. Ann Rheum Dis. 1973;32(5):413-418.',
    'Remvig L, et al. Epidemiology of general joint hypermobility and basis for the proposed criteria for benign joint hypermobility syndrome: review of the literature. J Rheumatol. 2007;34(4):804-809.'
  ]
};
