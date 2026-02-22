import type { ScoreDefinition } from '@/types/score';

export const frailtyIndex: ScoreDefinition = {
  id: 'frailty-index',
  name: 'Índice de Fragilidade (Simplificado)',
  items: [
    {
      id: 'adl_independence',
      label: 'Independência nas Atividades de Vida Diária (AVDs)',
      type: 'radio',
      section: 'Funcionalidade',
      options: [
        { value: 0, label: 'Independente para todas as AVDs (0)' },
        { value: 1, label: 'Necessita ajuda em 1-2 AVDs (1)' },
        { value: 2, label: 'Dependente em ≥ 3 AVDs (2)' }
      ]
    },
    {
      id: 'mobility',
      label: 'Mobilidade',
      type: 'radio',
      section: 'Funcionalidade',
      options: [
        { value: 0, label: 'Deambula sem auxílio, sem limitação (0)' },
        { value: 1, label: 'Deambula com auxílio (bengala/andador) ou limitação leve (1)' },
        { value: 2, label: 'Restrito a cadeira de rodas ou acamado (2)' }
      ]
    },
    {
      id: 'cognition',
      label: 'Cognição',
      type: 'radio',
      section: 'Estado Mental',
      options: [
        { value: 0, label: 'Cognição preservada (0)' },
        { value: 1, label: 'Comprometimento cognitivo leve (1)' },
        { value: 2, label: 'Demência moderada a severa (2)' }
      ]
    },
    {
      id: 'nutrition',
      label: 'Nutrição',
      type: 'radio',
      section: 'Estado Nutricional',
      options: [
        { value: 0, label: 'Bem nutrido (IMC 18.5-30, albumina > 3.5) (0)' },
        { value: 1, label: 'Desnutrição ou risco nutricional (IMC < 18.5, albumina < 3.5, perda de peso involuntária) (1)' }
      ]
    },
    {
      id: 'comorbidity_burden',
      label: 'Carga de Comorbidades',
      type: 'radio',
      section: 'Comorbidades',
      options: [
        { value: 0, label: 'Nenhuma ou 1 comorbidade controlada (0)' },
        { value: 1, label: '2-3 comorbidades controladas (1)' },
        { value: 2, label: '≥ 4 comorbidades ou qualquer descompensada (2)' }
      ]
    }
  ],
  maxScore: 9,
  minScore: 0,
  interpretations: [
    {
      range: [0, 2],
      label: 'Fit (Robusto)',
      description: 'Paciente robusto; boa reserva fisiológica; tolera cirurgia e reabilitação padrão',
      color: 'safe',
      recommendation: 'Tratamento cirúrgico padrão; reabilitação convencional'
    },
    {
      range: [3, 4],
      label: 'Pré-Frágil',
      description: 'Paciente pré-frágil; reserva fisiológica reduzida; risco moderado de complicações',
      color: 'caution',
      recommendation: 'Otimização pré-operatória (nutricional, funcional); considerar via cirúrgica menos invasiva; reabilitação supervisionada'
    },
    {
      range: [5, 6],
      label: 'Frágil',
      description: 'Paciente frágil; alto risco de complicações, delirium, institucionalização e mortalidade',
      color: 'danger',
      recommendation: 'Discussão multidisciplinar (ortopedia, geriatria, anestesia); ortogeriatria; objetivos realistas de tratamento; considerar tratamento conservador em casos selecionados'
    },
    {
      range: [7, 9],
      label: 'Severamente Frágil',
      description: 'Paciente severamente frágil; risco muito alto; expectativa de vida limitada',
      color: 'danger',
      recommendation: 'Avaliação geriátrica abrangente obrigatória; priorizar conforto e qualidade de vida; discutir diretivas antecipadas; cirurgia apenas se benefício claro para qualidade de vida'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Fried LP, et al. Frailty in older adults: evidence for a phenotype. J Gerontol A Biol Sci Med Sci. 2001;56(3):M146-156.',
    'Rockwood K, et al. A global clinical measure of fitness and frailty in elderly people. CMAJ. 2005;173(5):489-495.',
    'Partridge JS, et al. The prevalence and impact of undiagnosed cognitive impairment in older vascular surgical patients. J Vasc Surg. 2014;60(4):1002-1011.'
  ]
};
