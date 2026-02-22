import type { ScoreDefinition } from '@/types/score.ts';

export const isisScoreData: ScoreDefinition = {
  id: 'instability-severity-index',
  name: 'ISIS (Instability Severity Index Score)',
  items: [
    {
      id: 'age',
      label: 'Idade na cirurgia',
      type: 'radio',
      section: 'Fatores do Doente',
      options: [
        { value: 0, label: '> 20 anos (0)' },
        { value: 2, label: '≤ 20 anos (2)' },
      ],
    },
    {
      id: 'sport_level',
      label: 'Nível desportivo',
      type: 'radio',
      section: 'Fatores do Doente',
      options: [
        { value: 0, label: 'Recreativo ou sem desporto (0)' },
        { value: 1, label: 'Competitivo (1)' },
        { value: 2, label: 'Competitivo de contacto ou overhead forçado (2)' },
      ],
    },
    {
      id: 'sport_type',
      label: 'Tipo de desporto',
      type: 'radio',
      section: 'Fatores do Doente',
      options: [
        { value: 0, label: 'Outro (0)' },
        { value: 1, label: 'Desporto de contacto ou overhead forçado (1)' },
      ],
    },
    {
      id: 'hyperlaxity',
      label: 'Hiperlaxidez do ombro (rotação externa >85°)',
      type: 'radio',
      section: 'Fatores do Doente',
      options: [
        { value: 0, label: 'Sem hiperlaxidez (0)' },
        { value: 1, label: 'Com hiperlaxidez (1)' },
      ],
    },
    {
      id: 'hill_sachs',
      label: 'Hill-Sachs na radiografia AP',
      type: 'radio',
      section: 'Fatores Radiológicos',
      options: [
        { value: 0, label: 'Sem Hill-Sachs visível (0)' },
        { value: 2, label: 'Hill-Sachs visível na radiografia AP (2)' },
      ],
    },
    {
      id: 'glenoid_loss',
      label: 'Perda óssea glenoidal na radiografia AP',
      type: 'radio',
      section: 'Fatores Radiológicos',
      options: [
        { value: 0, label: 'Contorno glenoidal normal (0)' },
        { value: 2, label: 'Perda de contorno glenoidal visível (2)' },
      ],
    },
  ],
  maxScore: 10,
  minScore: 0,
  interpretations: [
    { range: [0, 3], label: 'Risco Baixo', description: 'Baixo risco de recidiva. Reparação artroscópica de Bankart recomendada. Taxa de recidiva <10%.', color: 'safe' },
    { range: [4, 6], label: 'Risco Moderado', description: 'Risco moderado de recidiva. Considerar Bankart artroscópico com remplissage ou avaliar Latarjet.', color: 'caution' },
    { range: [7, 10], label: 'Risco Elevado', description: 'Alto risco de recidiva (>70% com Bankart isolado). Latarjet recomendado. Taxa de recidiva com Bankart >35%.', color: 'danger' },
  ],
  calculate: (values: Record<string, number>) => {
    const ids = ['age', 'sport_level', 'sport_type', 'hyperlaxity', 'hill_sachs', 'glenoid_loss'];
    return ids.reduce((sum, id) => sum + (values[id] ?? 0), 0);
  },
  references: [
    {
      authors: 'Balg F, Boileau P',
      title: 'The instability severity index score. A simple pre-operative score to select patients for arthroscopic or open shoulder stabilisation',
      journal: 'Journal of Bone and Joint Surgery (Br)',
      year: 2007,
    },
  ],
};
