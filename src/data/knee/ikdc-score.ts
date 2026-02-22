import type { ScoreDefinition } from '@/types/score';

export const ikdcScore: ScoreDefinition = {
  id: 'ikdc-score',
  name: 'IKDC Subjective Knee Evaluation Form (Simplificado)',
  items: [
    {
      id: 'highest_activity',
      label: 'Maior nível de atividade sem dor significativa',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 4, label: 'Atividades muito extenuantes (futebol, basquete) (4)' },
        { value: 3, label: 'Atividades extenuantes (corrida, trabalho pesado) (3)' },
        { value: 2, label: 'Atividades moderadas (caminhada rápida, trabalho moderado) (2)' },
        { value: 1, label: 'Atividades leves (caminhada, trabalho doméstico) (1)' },
        { value: 0, label: 'Incapaz de realizar atividades acima (0)' }
      ]
    },
    {
      id: 'pain_frequency',
      label: 'Frequência da dor no joelho',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 4, label: 'Nunca (4)' },
        { value: 3, label: 'Raramente (3)' },
        { value: 2, label: 'Às vezes (2)' },
        { value: 1, label: 'Frequentemente (1)' },
        { value: 0, label: 'Constantemente (0)' }
      ]
    },
    {
      id: 'pain_severity',
      label: 'Intensidade da dor (0=sem dor, 10=pior dor imaginável)',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 10, label: '0 - Sem dor (10)' },
        { value: 8, label: '1-2 - Dor leve (8)' },
        { value: 6, label: '3-4 - Dor leve a moderada (6)' },
        { value: 4, label: '5-6 - Dor moderada (4)' },
        { value: 2, label: '7-8 - Dor severa (2)' },
        { value: 0, label: '9-10 - Pior dor imaginável (0)' }
      ]
    },
    {
      id: 'stiffness',
      label: 'Rigidez ou edema no joelho',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 4, label: 'Nenhuma (4)' },
        { value: 3, label: 'Leve (3)' },
        { value: 2, label: 'Moderada (2)' },
        { value: 1, label: 'Severa (1)' },
        { value: 0, label: 'Extrema (0)' }
      ]
    },
    {
      id: 'giving_way',
      label: 'Falseio / cedimento do joelho',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 4, label: 'Sem falseio (4)' },
        { value: 3, label: 'Raramente (3)' },
        { value: 2, label: 'Às vezes (2)' },
        { value: 1, label: 'Frequentemente (1)' },
        { value: 0, label: 'A cada passo (0)' }
      ]
    },
    {
      id: 'stairs',
      label: 'Subir escadas',
      type: 'radio',
      section: 'Atividades Diárias',
      options: [
        { value: 4, label: 'Sem dificuldade (4)' },
        { value: 3, label: 'Dificuldade mínima (3)' },
        { value: 2, label: 'Dificuldade moderada (2)' },
        { value: 1, label: 'Dificuldade extrema (1)' },
        { value: 0, label: 'Incapaz (0)' }
      ]
    },
    {
      id: 'standing',
      label: 'Ficar em pé',
      type: 'radio',
      section: 'Atividades Diárias',
      options: [
        { value: 4, label: 'Sem dificuldade (4)' },
        { value: 3, label: 'Dificuldade mínima (3)' },
        { value: 2, label: 'Dificuldade moderada (2)' },
        { value: 1, label: 'Dificuldade extrema (1)' },
        { value: 0, label: 'Incapaz (0)' }
      ]
    },
    {
      id: 'walking',
      label: 'Caminhar',
      type: 'radio',
      section: 'Atividades Diárias',
      options: [
        { value: 4, label: 'Sem limitação (4)' },
        { value: 3, label: 'Limitação leve (3)' },
        { value: 2, label: 'Limitação moderada (2)' },
        { value: 1, label: 'Limitação severa (1)' },
        { value: 0, label: 'Incapaz (0)' }
      ]
    },
    {
      id: 'running',
      label: 'Correr',
      type: 'radio',
      section: 'Atividades Esportivas',
      options: [
        { value: 4, label: 'Sem dificuldade (4)' },
        { value: 3, label: 'Dificuldade mínima (3)' },
        { value: 2, label: 'Dificuldade moderada (2)' },
        { value: 1, label: 'Dificuldade extrema (1)' },
        { value: 0, label: 'Incapaz (0)' }
      ]
    },
    {
      id: 'overall_function',
      label: 'Função geral do joelho (0=pior, 10=normal)',
      type: 'radio',
      section: 'Função Global',
      options: [
        { value: 10, label: '10 - Normal / sem limitação (10)' },
        { value: 8, label: '8-9 - Quase normal (8)' },
        { value: 6, label: '6-7 - Limitação leve (6)' },
        { value: 4, label: '4-5 - Limitação moderada (4)' },
        { value: 2, label: '2-3 - Limitação severa (2)' },
        { value: 0, label: '0-1 - Limitação extrema (0)' }
      ]
    }
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    {
      range: [86, 100],
      label: 'Normal',
      description: 'Joelho com função normal; sem limitações',
      color: 'safe'
    },
    {
      range: [66, 85],
      label: 'Quase Normal',
      description: 'Função quase normal; limitações mínimas',
      color: 'safe'
    },
    {
      range: [41, 65],
      label: 'Anormal',
      description: 'Função anormal do joelho; limitações moderadas a significativas',
      color: 'caution'
    },
    {
      range: [0, 40],
      label: 'Severamente Anormal',
      description: 'Joelho severamente comprometido; limitações importantes',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    const rawSum = Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
    const maxRaw = 52; // 8 items x 4 + pain_severity(10) + overall_function(10) = 42 + 10 = 52
    return Math.round((rawSum / maxRaw) * 100);
  },
  references: [
    'Irrgang JJ, et al. Development of a patient-reported measure of function of the knee. J Bone Joint Surg Am. 2001;83-A(12):1856-1864.',
    'International Knee Documentation Committee. Knee forms and calculation. AOSSM, 2000.'
  ]
};
