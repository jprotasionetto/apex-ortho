import type { ScoreDefinition } from '@/types/score.ts';

export const mirelsScore: ScoreDefinition = {
  id: 'mirels-score',
  name: 'Score de Mirels (Risco de Fratura Patologica)',
  items: [
    {
      id: 'site',
      label: 'Localizacao',
      description: 'Localizacao anatomica da lesao metastatica',
      type: 'radio',
      section: 'Caracteristicas da Lesao',
      options: [
        { value: 1, label: 'Membro superior' },
        { value: 2, label: 'Membro inferior' },
        { value: 3, label: 'Peritrocanterica' }
      ]
    },
    {
      id: 'pain',
      label: 'Dor',
      description: 'Intensidade da dor na regiao da lesao',
      type: 'radio',
      section: 'Caracteristicas da Lesao',
      options: [
        { value: 1, label: 'Leve' },
        { value: 2, label: 'Moderada' },
        { value: 3, label: 'Funcional (dor ao apoio/carga)' }
      ]
    },
    {
      id: 'lesion-type',
      label: 'Tipo de lesao',
      description: 'Padrao radiografico da lesao ossea',
      type: 'radio',
      section: 'Caracteristicas da Lesao',
      options: [
        { value: 1, label: 'Blastica (esclerótica)' },
        { value: 2, label: 'Mista' },
        { value: 3, label: 'Litica' }
      ]
    },
    {
      id: 'size',
      label: 'Tamanho da lesao',
      description: 'Proporcao da lesao em relacao ao diametro do osso',
      type: 'radio',
      section: 'Caracteristicas da Lesao',
      options: [
        { value: 1, label: '< 1/3 do diametro' },
        { value: 2, label: '1/3 a 2/3 do diametro' },
        { value: 3, label: '> 2/3 do diametro' }
      ]
    }
  ],
  maxScore: 12,
  minScore: 4,
  interpretations: [
    {
      range: [4, 7],
      label: 'Baixo Risco',
      description: 'Risco baixo de fratura patologica. Seguro para irradiacao e observacao.',
      color: 'safe',
      recommendation: 'Radioterapia paliativa e observacao clinica. Monitoramento radiografico periodico. Bifosfonatos/denosumab.'
    },
    {
      range: [8, 8],
      label: 'Risco Intermediario (Borderline)',
      description: 'Risco intermediario de fratura patologica. Julgamento clinico individualizado.',
      color: 'caution',
      recommendation: 'Decisao individualizada. Considerar fixacao profilatica em pacientes com boa expectativa de vida e demanda funcional. Radioterapia pode ser insuficiente.'
    },
    {
      range: [9, 12],
      label: 'Alto Risco',
      description: 'Alto risco de fratura patologica. Fixacao profilatica recomendada.',
      color: 'danger',
      recommendation: 'Fixacao profilatica cirurgica fortemente recomendada antes da irradiacao. Haste intramedular ou placa conforme localizacao. Cimento se necessario.'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Mirels H. Metastatic disease in long bones: a proposed scoring system for diagnosing impending pathologic fractures. Clin Orthop Relat Res. 1989;(249):256-264.'
  ]
};
