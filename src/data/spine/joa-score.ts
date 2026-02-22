import type { ScoreDefinition } from '@/types/score';

export const joaScore: ScoreDefinition = {
  id: 'joa-score',
  name: 'JOA Score - Japanese Orthopaedic Association (Mielopatia Cervical)',
  items: [
    {
      id: 'motor_upper',
      label: 'Função Motora - Membros Superiores',
      type: 'radio',
      section: 'Função Motora',
      options: [
        { value: 0, label: 'Incapaz de se alimentar sozinho (0)' },
        { value: 1, label: 'Incapaz de abotoar camisa, consegue usar colher para comer (1)' },
        { value: 2, label: 'Consegue abotoar com grande dificuldade (2)' },
        { value: 3, label: 'Consegue abotoar com leve dificuldade (3)' },
        { value: 4, label: 'Normal (4)' }
      ]
    },
    {
      id: 'motor_lower',
      label: 'Função Motora - Membros Inferiores',
      type: 'radio',
      section: 'Função Motora',
      options: [
        { value: 0, label: 'Incapaz de andar (0)' },
        { value: 1, label: 'Necessita bengala ou apoio em superfície plana (1)' },
        { value: 2, label: 'Necessita apoio para subir escadas (2)' },
        { value: 3, label: 'Consegue andar sem apoio, marcha instável (3)' },
        { value: 4, label: 'Normal (4)' }
      ]
    },
    {
      id: 'sensory_upper',
      label: 'Função Sensitiva - Membros Superiores',
      type: 'radio',
      section: 'Função Sensitiva',
      options: [
        { value: 0, label: 'Perda aparente de sensibilidade (0)' },
        { value: 1, label: 'Perda mínima de sensibilidade ou dormência (1)' },
        { value: 2, label: 'Normal (2)' }
      ]
    },
    {
      id: 'sensory_lower',
      label: 'Função Sensitiva - Membros Inferiores',
      type: 'radio',
      section: 'Função Sensitiva',
      options: [
        { value: 0, label: 'Perda aparente de sensibilidade (0)' },
        { value: 1, label: 'Perda mínima de sensibilidade ou dormência (1)' },
        { value: 2, label: 'Normal (2)' }
      ]
    },
    {
      id: 'bladder',
      label: 'Função Vesical (Bexiga)',
      type: 'radio',
      section: 'Função Vesical',
      options: [
        { value: 0, label: 'Retenção urinária e/ou incontinência (0)' },
        { value: 1, label: 'Sensação de retenção e/ou gotejamento fino (1)' },
        { value: 2, label: 'Retenção urinária e/ou frequência urinária (2)' },
        { value: 3, label: 'Normal (3)' }
      ]
    }
  ],
  maxScore: 17,
  minScore: 0,
  interpretations: [
    {
      range: [14, 17],
      label: 'Mielopatia Leve',
      description: 'Comprometimento leve; monitorização e tratamento conservador podem ser adequados em casos selecionados',
      color: 'safe'
    },
    {
      range: [10, 13],
      label: 'Mielopatia Moderada',
      description: 'Comprometimento moderado; considerar tratamento cirúrgico (descompressão) se progressivo ou sintomático',
      color: 'caution'
    },
    {
      range: [0, 9],
      label: 'Mielopatia Severa',
      description: 'Comprometimento severo; tratamento cirúrgico indicado (descompressão cervical anterior ou posterior)',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Japanese Orthopaedic Association. Scoring system for cervical myelopathy. J Jpn Orthop Assoc. 1994;68:490-503.',
    'Yonenobu K, et al. Interobserver and intraobserver reliability of the Japanese Orthopaedic Association scoring system for evaluation of cervical compression myelopathy. Spine. 2001;26(17):1890-1894.',
    'Nota: Taxa de recuperação = (JOA pós-op - JOA pré-op) / (17 - JOA pré-op) × 100%'
  ]
};
