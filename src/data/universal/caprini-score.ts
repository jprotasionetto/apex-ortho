import type { ScoreDefinition } from '@/types/score';

export const capriniScore: ScoreDefinition = {
  id: 'caprini-score',
  name: 'Score de Caprini (Risco de TEV)',
  items: [
    {
      id: 'age',
      label: 'Idade',
      type: 'radio',
      section: 'Dados Demográficos',
      options: [
        { value: 0, label: '≤ 40 anos (0)' },
        { value: 1, label: '41-60 anos (1)' },
        { value: 2, label: '61-74 anos (2)' },
        { value: 3, label: '≥ 75 anos (3)' }
      ]
    },
    {
      id: 'bmi',
      label: 'IMC > 25 kg/m²',
      type: 'radio',
      section: 'Dados Demográficos',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'surgery_type',
      label: 'Tipo de Cirurgia',
      type: 'radio',
      section: 'Cirurgia',
      options: [
        { value: 0, label: 'Sem cirurgia (0)' },
        { value: 1, label: 'Cirurgia menor (1)' },
        { value: 2, label: 'Cirurgia maior (> 45min) (2)' },
        { value: 5, label: 'Artroplastia maior / fratura do quadril (5)' }
      ]
    },
    {
      id: 'bed_rest',
      label: 'Repouso no leito > 72h',
      type: 'radio',
      section: 'Mobilidade',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 2, label: 'Sim (2)' }
      ]
    },
    {
      id: 'vte_history',
      label: 'História prévia de TVP/TEP',
      type: 'radio',
      section: 'História Médica',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 3, label: 'Sim (3)' }
      ]
    },
    {
      id: 'malignancy',
      label: 'Neoplasia ativa ou em tratamento',
      type: 'radio',
      section: 'História Médica',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 2, label: 'Sim (2)' }
      ]
    },
    {
      id: 'oral_contraceptives',
      label: 'Anticoncepcionais orais ou TRH',
      type: 'radio',
      section: 'Medicações',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'varicose_veins',
      label: 'Varizes de membros inferiores',
      type: 'radio',
      section: 'Exame Físico',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    }
  ],
  maxScore: 18,
  minScore: 0,
  interpretations: [
    {
      range: [0, 1],
      label: 'Risco Muito Baixo',
      description: 'Risco muito baixo de TEV; deambulação precoce',
      color: 'safe',
      recommendation: 'Deambulação precoce; meias elásticas opcionais'
    },
    {
      range: [2, 2],
      label: 'Risco Baixo',
      description: 'Risco baixo de TEV; profilaxia mecânica',
      color: 'safe',
      recommendation: 'Meias de compressão elástica (TED) e/ou compressão pneumática intermitente (CPI)'
    },
    {
      range: [3, 4],
      label: 'Risco Moderado',
      description: 'Risco moderado de TEV; profilaxia farmacológica indicada',
      color: 'caution',
      recommendation: 'HBPM (enoxaparina 40mg SC 1x/dia) OU HNF 5000UI SC 2-3x/dia + meias elásticas'
    },
    {
      range: [5, 18],
      label: 'Risco Alto',
      description: 'Risco alto de TEV; profilaxia farmacológica obrigatória + mecânica',
      color: 'danger',
      recommendation: 'HBPM (enoxaparina 40mg SC 1x/dia) + CPI; duração estendida (35 dias para artroplastia maior); considerar rivaroxabana 10mg/dia'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon. 2005;51(2-3):70-78.',
    'Bahl V, et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg. 2010;251(2):344-350.'
  ]
};
