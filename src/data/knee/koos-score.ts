import type { ScoreDefinition } from '@/types/score';

export const koosScore: ScoreDefinition = {
  id: 'koos-score',
  name: 'KOOS - Knee Injury and Osteoarthritis Outcome Score (Simplificado)',
  items: [
    // Pain subscale (4 items)
    {
      id: 'pain_walking',
      label: 'Dor ao caminhar em superfície plana',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    {
      id: 'pain_stairs',
      label: 'Dor ao subir/descer escadas',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    {
      id: 'pain_night',
      label: 'Dor à noite na cama',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    {
      id: 'pain_sitting',
      label: 'Dor ao sentar ou deitar',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    // Symptoms subscale (4 items)
    {
      id: 'symptoms_swelling',
      label: 'Inchaço no joelho',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 0, label: 'Nunca (0)' },
        { value: 1, label: 'Raramente (1)' },
        { value: 2, label: 'Às vezes (2)' },
        { value: 3, label: 'Frequentemente (3)' },
        { value: 4, label: 'Sempre (4)' }
      ]
    },
    {
      id: 'symptoms_grinding',
      label: 'Crepitação ou estalidos',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 0, label: 'Nunca (0)' },
        { value: 1, label: 'Raramente (1)' },
        { value: 2, label: 'Às vezes (2)' },
        { value: 3, label: 'Frequentemente (3)' },
        { value: 4, label: 'Sempre (4)' }
      ]
    },
    {
      id: 'symptoms_catching',
      label: 'Travamento ou bloqueio',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 0, label: 'Nunca (0)' },
        { value: 1, label: 'Raramente (1)' },
        { value: 2, label: 'Às vezes (2)' },
        { value: 3, label: 'Frequentemente (3)' },
        { value: 4, label: 'Sempre (4)' }
      ]
    },
    {
      id: 'symptoms_stiffness_morning',
      label: 'Rigidez matinal',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    // ADL subscale (4 items)
    {
      id: 'adl_stairs',
      label: 'Dificuldade ao subir escadas',
      type: 'radio',
      section: 'Atividades de Vida Diária (AVD)',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    {
      id: 'adl_standing',
      label: 'Dificuldade ao ficar em pé',
      type: 'radio',
      section: 'Atividades de Vida Diária (AVD)',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    {
      id: 'adl_bending',
      label: 'Dificuldade ao agachar/curvar',
      type: 'radio',
      section: 'Atividades de Vida Diária (AVD)',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    {
      id: 'adl_walking',
      label: 'Dificuldade ao caminhar',
      type: 'radio',
      section: 'Atividades de Vida Diária (AVD)',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    // Sport/Recreation subscale (2 items)
    {
      id: 'sport_squatting',
      label: 'Dificuldade ao agachar (esporte)',
      type: 'radio',
      section: 'Esporte e Recreação',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    {
      id: 'sport_running',
      label: 'Dificuldade ao correr',
      type: 'radio',
      section: 'Esporte e Recreação',
      options: [
        { value: 0, label: 'Nenhuma (0)' },
        { value: 1, label: 'Leve (1)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 3, label: 'Severa (3)' },
        { value: 4, label: 'Extrema (4)' }
      ]
    },
    // QoL subscale (2 items)
    {
      id: 'qol_awareness',
      label: 'Com que frequência você está consciente do problema no joelho?',
      type: 'radio',
      section: 'Qualidade de Vida',
      options: [
        { value: 0, label: 'Nunca (0)' },
        { value: 1, label: 'Raramente (1)' },
        { value: 2, label: 'Às vezes (2)' },
        { value: 3, label: 'Frequentemente (3)' },
        { value: 4, label: 'Constantemente (4)' }
      ]
    },
    {
      id: 'qol_lifestyle',
      label: 'Quanto você modificou seu estilo de vida por causa do joelho?',
      type: 'radio',
      section: 'Qualidade de Vida',
      options: [
        { value: 0, label: 'Nada (0)' },
        { value: 1, label: 'Pouco (1)' },
        { value: 2, label: 'Moderadamente (2)' },
        { value: 3, label: 'Muito (3)' },
        { value: 4, label: 'Totalmente (4)' }
      ]
    }
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    {
      range: [75, 100],
      label: 'Bom',
      description: 'Boa função do joelho; limitações mínimas em todas as subescalas',
      color: 'safe'
    },
    {
      range: [50, 74],
      label: 'Moderado',
      description: 'Comprometimento moderado da função do joelho',
      color: 'caution'
    },
    {
      range: [25, 49],
      label: 'Ruim',
      description: 'Comprometimento significativo; limitações importantes nas atividades',
      color: 'danger'
    },
    {
      range: [0, 24],
      label: 'Muito Ruim',
      description: 'Comprometimento severo da função do joelho; limitações extremas',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    const subscales: Record<string, string[]> = {
      pain: ['pain_walking', 'pain_stairs', 'pain_night', 'pain_sitting'],
      symptoms: ['symptoms_swelling', 'symptoms_grinding', 'symptoms_catching', 'symptoms_stiffness_morning'],
      adl: ['adl_stairs', 'adl_standing', 'adl_bending', 'adl_walking'],
      sport: ['sport_squatting', 'sport_running'],
      qol: ['qol_awareness', 'qol_lifestyle']
    };

    const subscaleScores: number[] = [];

    for (const [, items] of Object.entries(subscales)) {
      const itemValues = items.map(id => values[id] || 0);
      const mean = itemValues.reduce((sum, v) => sum + v, 0) / items.length;
      const score = (1 - mean / 4) * 100;
      subscaleScores.push(score);
    }

    return Math.round(subscaleScores.reduce((sum, s) => sum + s, 0) / subscaleScores.length);
  },
  references: [
    'Roos EM, et al. Knee Injury and Osteoarthritis Outcome Score (KOOS) - development of a self-administered outcome measure. J Orthop Sports Phys Ther. 1998;28(2):88-96.',
    'Roos EM, Lohmander LS. The Knee injury and Osteoarthritis Outcome Score (KOOS): from joint injury to osteoarthritis. Health Qual Life Outcomes. 2003;1:64.'
  ]
};
