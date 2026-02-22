import type { ScoreDefinition } from '@/types/tool';

export const fatEmbolismScoreData: ScoreDefinition = {
  id: 'fat-embolism-score',
  name: 'Critérios de Gurd - Embolia Gordurosa',
  items: [
    {
      id: 'petechiae',
      label: 'Petéquias (axilar, conjuntival, subungueal)',
      type: 'radio',
      section: 'Critérios Maiores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'respiratory',
      label: 'Sintomas respiratórios + infiltrado bilateral na radiografia',
      type: 'radio',
      section: 'Critérios Maiores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'cerebral',
      label: 'Sinais cerebrais (confusão, rebaixamento) não relacionados a TCE',
      type: 'radio',
      section: 'Critérios Maiores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'tachycardia',
      label: 'Taquicardia > 120 bpm',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'fever',
      label: 'Febre > 39°C',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'retinal',
      label: 'Alterações retinianas (fat emboli na fundoscopia)',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'renal',
      label: 'Alterações renais (oligúria, lipidúria)',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'jaundice',
      label: 'Icterícia',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'thrombocytopenia',
      label: 'Trombocitopenia (plaquetas < 150.000)',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'high-esr',
      label: 'VHS elevada (> 70 mm/h)',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    },
    {
      id: 'fat-macroglobulinemia',
      label: 'Macroglobulinemia gordurosa (gordura no sangue)',
      type: 'radio',
      section: 'Critérios Menores',
      options: [
        { value: 0, label: 'Ausente' },
        { value: 1, label: 'Presente' }
      ]
    }
  ],
  maxScore: 11,
  minScore: 0,
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  interpretations: [
    {
      range: [0, 1],
      label: 'Embolia Gordurosa Improvável',
      description: 'Diagnóstico de síndrome de embolia gordurosa improvável. Manter vigilância clínica em pacientes com fraturas de ossos longos.',
      color: 'safe'
    },
    {
      range: [2, 4],
      label: 'Embolia Gordurosa Possível',
      description: 'Diagnóstico possível. Critérios de Gurd: 1 critério maior + ≥ 4 critérios menores = diagnóstico. Iniciar suporte e monitorização em UTI.',
      color: 'caution'
    },
    {
      range: [5, 11],
      label: 'Embolia Gordurosa Provável',
      description: 'Diagnóstico provável de síndrome de embolia gordurosa. Suporte ventilatório, hemodinâmico. Considerar fixação precoce das fraturas. Corticoterapia é controversa.',
      color: 'danger'
    }
  ],
  references: [
    {
      authors: 'Gurd AR',
      title: 'Fat embolism: an aid to diagnosis',
      journal: 'J Bone Joint Surg Br',
      year: 1970
    },
    {
      authors: 'Gurd AR, Wilson RI',
      title: 'The fat embolism syndrome',
      journal: 'J Bone Joint Surg Br',
      year: 1974
    }
  ]
};
