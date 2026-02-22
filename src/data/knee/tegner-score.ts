import type { ScoreDefinition } from '@/types/score';

export const tegnerScore: ScoreDefinition = {
  id: 'tegner-score',
  name: 'Tegner Activity Scale',
  items: [
    {
      id: 'activity_level',
      label: 'Nível de atividade atual',
      type: 'radio',
      section: 'Nível de Atividade',
      options: [
        { value: 0, label: 'Nível 0 - Aposentadoria por invalidez devido ao joelho (0)' },
        { value: 1, label: 'Nível 1 - Trabalho sedentário; caminhar em terreno plano (1)' },
        { value: 2, label: 'Nível 2 - Trabalho leve; caminhar em terreno irregular (2)' },
        { value: 3, label: 'Nível 3 - Trabalho leve pesado; caminhada competitiva (3)' },
        { value: 4, label: 'Nível 4 - Trabalho moderadamente pesado; ciclismo recreativo (4)' },
        { value: 5, label: 'Nível 5 - Trabalho pesado; esportes recreativos (natação, ciclismo) (5)' },
        { value: 6, label: 'Nível 6 - Esportes recreativos com bola (tênis, badminton) (6)' },
        { value: 7, label: 'Nível 7 - Esportes competitivos de raquete; corrida competitiva (7)' },
        { value: 8, label: 'Nível 8 - Esportes competitivos com bola (futebol amador, hockey) (8)' },
        { value: 9, label: 'Nível 9 - Futebol competitivo (divisão inferior); wrestling; ginástica (9)' },
        { value: 10, label: 'Nível 10 - Esportes competitivos de elite internacional (futebol profissional) (10)' }
      ]
    }
  ],
  maxScore: 10,
  minScore: 0,
  interpretations: [
    {
      range: [0, 3],
      label: 'Sedentário',
      description: 'Nível de atividade sedentário ou trabalho leve; atividades de baixo impacto',
      color: 'info'
    },
    {
      range: [4, 5],
      label: 'Moderado',
      description: 'Nível de atividade moderado; trabalho moderado a pesado ou esportes recreativos',
      color: 'safe'
    },
    {
      range: [6, 7],
      label: 'Ativo',
      description: 'Nível de atividade ativo; esportes recreativos ou competitivos de menor impacto',
      color: 'safe'
    },
    {
      range: [8, 10],
      label: 'Atleta Competitivo',
      description: 'Nível de atividade de atleta competitivo; esportes de alto impacto',
      color: 'safe'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return values['activity_level'] || 0;
  },
  references: [
    'Tegner Y, Lysholm J. Rating systems in the evaluation of knee ligament injuries. Clin Orthop Relat Res. 1985;(198):43-49.'
  ]
};
