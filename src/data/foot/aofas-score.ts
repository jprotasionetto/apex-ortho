import type { ScoreDefinition } from '@/types/score.ts';

export const aofasScore: ScoreDefinition = {
  id: 'aofas-score',
  name: 'AOFAS Score (Hindfoot-Ankle)',
  items: [
    {
      id: 'pain',
      label: 'Dor',
      description: 'Nivel de dor no pe e tornozelo',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 40, label: 'Sem dor' },
        { value: 30, label: 'Leve, ocasional' },
        { value: 20, label: 'Moderada, diaria' },
        { value: 0, label: 'Severa, quase sempre presente' }
      ]
    },
    {
      id: 'activity-limitations',
      label: 'Limitacoes funcionais',
      description: 'Limitacoes nas atividades diarias e recreativas',
      type: 'radio',
      section: 'Funcao',
      options: [
        { value: 10, label: 'Sem limitacao' },
        { value: 7, label: 'Limitacao em atividades recreativas' },
        { value: 4, label: 'Limitacao em atividades diarias e recreativas' },
        { value: 0, label: 'Limitacao severa em atividades diarias' }
      ]
    },
    {
      id: 'max-walking-distance',
      label: 'Distancia maxima de marcha',
      description: 'Distancia maxima caminhada em blocos',
      type: 'radio',
      section: 'Funcao',
      options: [
        { value: 5, label: 'Mais de 6 quarteiroes' },
        { value: 4, label: '4-6 quarteiroes' },
        { value: 2, label: '1-3 quarteiroes' },
        { value: 0, label: 'Menos de 1 quarteirao' }
      ]
    },
    {
      id: 'walking-surface',
      label: 'Superficie de marcha',
      description: 'Dificuldade em diferentes superficies',
      type: 'radio',
      section: 'Funcao',
      options: [
        { value: 5, label: 'Sem dificuldade em qualquer superficie' },
        { value: 3, label: 'Alguma dificuldade em terreno irregular' },
        { value: 0, label: 'Dificuldade severa em terreno irregular' }
      ]
    },
    {
      id: 'gait-abnormality',
      label: 'Anormalidade da marcha',
      description: 'Presenca de claudicacao ou alteracao da marcha',
      type: 'radio',
      section: 'Funcao',
      options: [
        { value: 8, label: 'Nenhuma' },
        { value: 4, label: 'Claudicacao leve' },
        { value: 0, label: 'Claudicacao severa' }
      ]
    },
    {
      id: 'sagittal-motion',
      label: 'Movimento sagital (flexao/extensao)',
      description: 'Amplitude de movimento sagital do tornozelo',
      type: 'radio',
      section: 'Alinhamento',
      options: [
        { value: 8, label: 'Normal ou restricao leve (>=30 graus)' },
        { value: 4, label: 'Restricao moderada (15-29 graus)' },
        { value: 0, label: 'Restricao severa (<15 graus)' }
      ]
    },
    {
      id: 'hindfoot-motion',
      label: 'Movimento do retropé (inversao/eversao)',
      description: 'Amplitude de movimento do retropé',
      type: 'radio',
      section: 'Alinhamento',
      options: [
        { value: 6, label: 'Normal ou restricao leve (>=75% do normal)' },
        { value: 3, label: 'Restricao moderada (25-74% do normal)' },
        { value: 0, label: 'Restricao severa (<25% do normal)' }
      ]
    },
    {
      id: 'ankle-stability',
      label: 'Estabilidade do tornozelo',
      description: 'Estabilidade articular do tornozelo',
      type: 'radio',
      section: 'Alinhamento',
      options: [
        { value: 8, label: 'Estavel' },
        { value: 0, label: 'Instavel' }
      ]
    }
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    {
      range: [90, 100],
      label: 'Excelente',
      description: 'Funcao excelente do pe e tornozelo com minima ou nenhuma limitacao',
      color: 'safe',
      recommendation: 'Manter atividade fisica regular; acompanhamento de rotina'
    },
    {
      range: [75, 89],
      label: 'Bom',
      description: 'Boa funcao com limitacoes leves',
      color: 'safe',
      recommendation: 'Fisioterapia se necessario; modificacao de atividades conforme sintomas'
    },
    {
      range: [50, 74],
      label: 'Regular',
      description: 'Funcao moderadamente comprometida com limitacoes significativas',
      color: 'caution',
      recommendation: 'Investigacao adicional; considerar tratamento especifico; fisioterapia intensiva'
    },
    {
      range: [0, 49],
      label: 'Mau',
      description: 'Funcao severamente comprometida com limitacoes importantes',
      color: 'danger',
      recommendation: 'Considerar intervencao cirurgica se indicado; reabilitacao intensiva; avaliacao multidisciplinar'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Kitaoka HB, Alexander IJ, Adelaar RS, et al. Clinical rating systems for the ankle-hindfoot, midfoot, hallux, and lesser toes. Foot Ankle Int. 1994;15(7):349-353.'
  ]
};
