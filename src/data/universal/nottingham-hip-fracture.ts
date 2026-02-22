import type { ScoreDefinition } from '@/types/score';

export const nottinghamHipFractureScore: ScoreDefinition = {
  id: 'nottingham-hip-fracture',
  name: 'Nottingham Hip Fracture Score (NHFS)',
  items: [
    {
      id: 'age',
      label: 'Idade',
      type: 'radio',
      section: 'Dados Demográficos',
      options: [
        { value: 0, label: '≤ 65 anos (0)' },
        { value: 3, label: '66-85 anos (3)' },
        { value: 4, label: '≥ 86 anos (4)' }
      ]
    },
    {
      id: 'sex',
      label: 'Sexo',
      type: 'radio',
      section: 'Dados Demográficos',
      options: [
        { value: 0, label: 'Feminino (0)' },
        { value: 1, label: 'Masculino (1)' }
      ]
    },
    {
      id: 'hemoglobin',
      label: 'Hemoglobina na admissão ≤ 10 g/dL',
      type: 'radio',
      section: 'Exames Laboratoriais',
      options: [
        { value: 0, label: 'Não (Hb > 10) (0)' },
        { value: 1, label: 'Sim (Hb ≤ 10) (1)' }
      ]
    },
    {
      id: 'amts',
      label: 'AMTS (Abbreviated Mental Test Score) ≤ 6/10',
      description: 'Teste mental abreviado para avaliação cognitiva',
      type: 'radio',
      section: 'Avaliação Cognitiva',
      options: [
        { value: 0, label: 'Não (AMTS > 6) (0)' },
        { value: 1, label: 'Sim (AMTS ≤ 6) (1)' }
      ]
    },
    {
      id: 'institution',
      label: 'Vive em instituição (ILPI / lar de idosos)',
      type: 'radio',
      section: 'Contexto Social',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    },
    {
      id: 'comorbidities',
      label: 'Número de comorbidades ≥ 2',
      description: 'Cardiopatia, doença pulmonar, DM, AVC, doença renal, doença hepática, neoplasia',
      type: 'radio',
      section: 'Comorbidades',
      options: [
        { value: 0, label: 'Não (0-1 comorbidades) (0)' },
        { value: 1, label: 'Sim (≥ 2 comorbidades) (1)' }
      ]
    },
    {
      id: 'malignancy',
      label: 'Neoplasia (nos últimos 20 anos)',
      type: 'radio',
      section: 'Comorbidades',
      options: [
        { value: 0, label: 'Não (0)' },
        { value: 1, label: 'Sim (1)' }
      ]
    }
  ],
  maxScore: 10,
  minScore: 0,
  interpretations: [
    {
      range: [0, 3],
      label: 'Risco Baixo',
      description: 'Mortalidade em 30 dias estimada em ~3%',
      color: 'safe',
      recommendation: 'Tratamento cirúrgico padrão; reabilitação precoce e agressiva'
    },
    {
      range: [4, 5],
      label: 'Risco Moderado',
      description: 'Mortalidade em 30 dias estimada em ~7%',
      color: 'caution',
      recommendation: 'Otimização pré-operatória; considerar avaliação geriátrica; vigilância pós-operatória intensificada'
    },
    {
      range: [6, 7],
      label: 'Risco Alto',
      description: 'Mortalidade em 30 dias estimada em ~14%',
      color: 'danger',
      recommendation: 'Avaliação geriátrica obrigatória; ortogeriatria; discutir riscos detalhadamente com paciente/família; otimização máxima pré-operatória'
    },
    {
      range: [8, 10],
      label: 'Risco Muito Alto',
      description: 'Mortalidade em 30 dias estimada em > 20%',
      color: 'danger',
      recommendation: 'Discussão multidisciplinar sobre benefício cirúrgico vs risco; diretivas antecipadas; se operar: equipe sênior, UTI pós-operatória, ortogeriatria integral'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Maxwell MJ, et al. Development and validation of a preoperative scoring system to predict 30 day mortality in patients undergoing hip fracture surgery. Br J Anaesth. 2008;101(4):511-517.',
    'Wiles MD, et al. Nottingham Hip Fracture Score as a predictor of one year mortality in patients undergoing surgical repair of fractured neck of femur. Br J Anaesth. 2011;106(4):501-504.'
  ]
};
