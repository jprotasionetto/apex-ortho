import type { ScoreDefinition } from '@/types/tool';

export const messScoreData: ScoreDefinition = {
  id: 'mess-score',
  name: 'MESS - Mangled Extremity Severity Score',
  items: [
    {
      id: 'skeletal-soft-tissue',
      label: 'Energia do Trauma (Esqueleto/Partes Moles)',
      type: 'radio',
      section: 'Lesão Esquelética e de Partes Moles',
      options: [
        { value: 1, label: 'Baixa energia (fratura simples, ferida por arma de fogo civil)' },
        { value: 2, label: 'Média energia (fraturas expostas, luxações)' },
        { value: 3, label: 'Alta energia (arma de fogo militar, esmagamento)' },
        { value: 4, label: 'Altíssima energia (contaminação grosseira, avulsão de partes moles)' }
      ]
    },
    {
      id: 'limb-ischemia',
      label: 'Isquemia do Membro',
      type: 'radio',
      section: 'Isquemia do Membro',
      options: [
        { value: 0, label: 'Pulso reduzido ou ausente com perfusão normal' },
        { value: 1, label: 'Pulso ausente, parestesias, enchimento capilar diminuído' },
        { value: 2, label: 'Sem pulso, frio, paralisado, insensível, anestesiado' },
        { value: 3, label: 'Sem pulso, frio, paralisado, insensível (>6h de isquemia - pontuação duplica)' }
      ]
    },
    {
      id: 'shock',
      label: 'Choque',
      type: 'radio',
      section: 'Estado Hemodinâmico',
      options: [
        { value: 0, label: 'PAS > 90 mmHg consistentemente' },
        { value: 1, label: 'Hipotensão transitória (respondeu a reanimação)' },
        { value: 2, label: 'Hipotensão persistente (refratária a reanimação)' }
      ]
    },
    {
      id: 'age',
      label: 'Idade',
      type: 'radio',
      section: 'Idade do Paciente',
      options: [
        { value: 0, label: '< 30 anos' },
        { value: 1, label: '30 - 50 anos' },
        { value: 2, label: '> 50 anos' }
      ]
    }
  ],
  maxScore: 11,
  minScore: 1,
  calculate: (values: Record<string, number>) => {
    const skeletal = values['skeletal-soft-tissue'] ?? 0;
    const ischemia = values['limb-ischemia'] ?? 0;
    const shock = values['shock'] ?? 0;
    const age = values['age'] ?? 0;
    // Ischemia score of 3 means >6h, which doubles the ischemia component
    const ischemiaScore = ischemia === 3 ? 6 : ischemia * 1;
    return skeletal + ischemiaScore + shock + age;
  },
  interpretations: [
    {
      range: [0, 6],
      label: 'Membro Salvável',
      description: 'Score ≤ 6: alta probabilidade de salvamento do membro. Prosseguir com tentativa de reconstrução vascular e ortopédica.',
      color: 'safe'
    },
    {
      range: [7, 14],
      label: 'Amputação Provável',
      description: 'Score ≥ 7: alta probabilidade de amputação. Considerar amputação primária. Valor preditivo positivo para amputação > 90% na descrição original.',
      color: 'danger'
    }
  ],
  references: [
    {
      authors: 'Johansen K, Daines M, Howey T, Helfet D, Hansen ST Jr',
      title: 'Objective criteria accurately predict amputation following lower extremity trauma',
      journal: 'J Trauma',
      year: 1990
    },
    {
      authors: 'Bosse MJ, MacKenzie EJ, Kellam JF, et al',
      title: 'An analysis of outcomes of reconstruction or amputation after leg-threatening injuries',
      journal: 'N Engl J Med',
      year: 2002
    }
  ]
};
