import type { ScoreDefinition } from '@/types/score';

export const lysholmScore: ScoreDefinition = {
  id: 'lysholm-score',
  name: 'Lysholm Knee Score',
  items: [
    {
      id: 'limp',
      label: 'Claudicação (Mancando)',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 5, label: 'Nenhuma (5)' },
        { value: 3, label: 'Leve ou periódica (3)' },
        { value: 0, label: 'Severa e constante (0)' }
      ]
    },
    {
      id: 'support',
      label: 'Apoio / Suporte',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 5, label: 'Sem apoio (5)' },
        { value: 3, label: 'Bengala ou muleta (3)' },
        { value: 0, label: 'Impossível apoiar peso (0)' }
      ]
    },
    {
      id: 'locking',
      label: 'Travamento (Bloqueio)',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 15, label: 'Sem travamento ou sensação de falseio (15)' },
        { value: 10, label: 'Sensação de travamento mas sem bloqueio real (10)' },
        { value: 6, label: 'Travamento ocasional (6)' },
        { value: 0, label: 'Bloqueio frequente (0)' }
      ]
    },
    {
      id: 'instability',
      label: 'Instabilidade (Falseio)',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 25, label: 'Nunca falseio (25)' },
        { value: 20, label: 'Raramente durante atividades intensas (20)' },
        { value: 15, label: 'Frequentemente durante atividades intensas (15)' },
        { value: 10, label: 'Ocasionalmente em atividades diárias (10)' },
        { value: 5, label: 'Frequentemente em atividades diárias (5)' },
        { value: 0, label: 'A cada passo (0)' }
      ]
    },
    {
      id: 'pain',
      label: 'Dor',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 25, label: 'Nenhuma (25)' },
        { value: 20, label: 'Inconstante e leve durante exercício intenso (20)' },
        { value: 15, label: 'Marcada durante exercício intenso (15)' },
        { value: 10, label: 'Marcada durante ou após caminhar >2km (10)' },
        { value: 5, label: 'Marcada durante ou após caminhar <2km (5)' },
        { value: 0, label: 'Constante (0)' }
      ]
    },
    {
      id: 'swelling',
      label: 'Edema (Inchaço)',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 10, label: 'Nenhum (10)' },
        { value: 6, label: 'Com exercício intenso (6)' },
        { value: 0, label: 'Com atividades comuns (0)' }
      ]
    },
    {
      id: 'stair_climbing',
      label: 'Subir Escadas',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 10, label: 'Sem problemas (10)' },
        { value: 6, label: 'Levemente limitado (6)' },
        { value: 0, label: 'Um degrau por vez / impossível (0)' }
      ]
    },
    {
      id: 'squatting',
      label: 'Agachamento',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 5, label: 'Sem problemas (5)' },
        { value: 4, label: 'Levemente limitado (4)' },
        { value: 0, label: 'Não além de 90° / impossível (0)' }
      ]
    }
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    {
      range: [95, 100],
      label: 'Excelente',
      description: 'Função excelente do joelho; sem limitações significativas',
      color: 'safe'
    },
    {
      range: [84, 94],
      label: 'Bom',
      description: 'Boa função do joelho; limitações mínimas',
      color: 'safe'
    },
    {
      range: [65, 83],
      label: 'Regular',
      description: 'Função razoável; limitações moderadas nas atividades',
      color: 'caution'
    },
    {
      range: [0, 64],
      label: 'Ruim',
      description: 'Função comprometida; limitações significativas; considerar intervenção',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Lysholm J, Gillquist J. Evaluation of knee ligament surgery results with special emphasis on use of a scoring scale. Am J Sports Med. 1982;10(3):150-154.',
    'Tegner Y, Lysholm J. Rating systems in the evaluation of knee ligament injuries. Clin Orthop Relat Res. 1985;(198):43-49.'
  ]
};
