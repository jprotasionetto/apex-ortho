import type { ScoreDefinition } from '@/types/score';

export const marxActivityScale: ScoreDefinition = {
  id: 'marx-activity-scale',
  name: 'Marx Activity Rating Scale',
  items: [
    {
      id: 'running',
      label: 'Corrida: correr durante atividade esportiva ou de lazer',
      type: 'radio',
      section: 'Atividade Esportiva',
      options: [
        { value: 0, label: 'Menos de 1x por mês (0)' },
        { value: 1, label: '1x por mês (1)' },
        { value: 2, label: '1x por semana (2)' },
        { value: 3, label: '2-3x por semana (3)' },
        { value: 4, label: '4+ vezes por semana (4)' }
      ]
    },
    {
      id: 'cutting',
      label: 'Cutting: mudança de direção durante corrida',
      type: 'radio',
      section: 'Atividade Esportiva',
      options: [
        { value: 0, label: 'Menos de 1x por mês (0)' },
        { value: 1, label: '1x por mês (1)' },
        { value: 2, label: '1x por semana (2)' },
        { value: 3, label: '2-3x por semana (3)' },
        { value: 4, label: '4+ vezes por semana (4)' }
      ]
    },
    {
      id: 'deceleration',
      label: 'Desaceleração: parada brusca ou frenagem rápida',
      type: 'radio',
      section: 'Atividade Esportiva',
      options: [
        { value: 0, label: 'Menos de 1x por mês (0)' },
        { value: 1, label: '1x por mês (1)' },
        { value: 2, label: '1x por semana (2)' },
        { value: 3, label: '2-3x por semana (3)' },
        { value: 4, label: '4+ vezes por semana (4)' }
      ]
    },
    {
      id: 'pivoting',
      label: 'Pivoting: rotação sobre o membro inferior apoiado',
      type: 'radio',
      section: 'Atividade Esportiva',
      options: [
        { value: 0, label: 'Menos de 1x por mês (0)' },
        { value: 1, label: '1x por mês (1)' },
        { value: 2, label: '1x por semana (2)' },
        { value: 3, label: '2-3x por semana (3)' },
        { value: 4, label: '4+ vezes por semana (4)' }
      ]
    }
  ],
  maxScore: 16,
  minScore: 0,
  interpretations: [
    {
      range: [0, 4],
      label: 'Baixa Atividade',
      description: 'Nível baixo de atividade esportiva; sem demandas significativas sobre o joelho',
      color: 'info'
    },
    {
      range: [5, 8],
      label: 'Atividade Moderada',
      description: 'Nível moderado de atividade; demanda esportiva recreativa',
      color: 'safe'
    },
    {
      range: [9, 12],
      label: 'Alta Atividade',
      description: 'Nível alto de atividade; prática esportiva regular com demandas elevadas',
      color: 'safe'
    },
    {
      range: [13, 16],
      label: 'Atividade Muito Alta / Competitiva',
      description: 'Nível de atividade muito alto; atleta competitivo com demandas máximas sobre o joelho',
      color: 'safe'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Marx RG, et al. Development and evaluation of an activity rating scale for disorders of the knee. Am J Sports Med. 2001;29(2):213-218.'
  ]
};
