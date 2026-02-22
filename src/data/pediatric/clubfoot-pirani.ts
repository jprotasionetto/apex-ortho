import type { ScoreDefinition } from '@/types/score.ts';

export const clubfootPiraniScoreData: ScoreDefinition = {
  id: 'clubfoot-pirani',
  name: 'Score de Pirani (Pé Torto Congénito)',
  items: [
    {
      id: 'posterior_crease',
      label: 'Vinco Posterior',
      description: 'Avaliação do vinco cutâneo posterior do retropé',
      type: 'radio',
      section: 'Retropé (Hindfoot)',
      options: [
        { value: 0, label: 'Sem vinco (0)' },
        { value: 1, label: 'Vinco moderado (0.5)' },
        { value: 2, label: 'Vinco profundo (1)' },
      ],
    },
    {
      id: 'empty_heel',
      label: 'Calcanhar Vazio',
      description: 'Palpação do calcanhar para avaliar a posição do calcâneo',
      type: 'radio',
      section: 'Retropé (Hindfoot)',
      options: [
        { value: 0, label: 'Calcanhar palpável (0)' },
        { value: 1, label: 'Parcialmente palpável (0.5)' },
        { value: 2, label: 'Calcanhar vazio (1)' },
      ],
    },
    {
      id: 'rigid_equinus',
      label: 'Equino Rígido',
      description: 'Avaliação da dorsiflexão passiva do tornozelo',
      type: 'radio',
      section: 'Retropé (Hindfoot)',
      options: [
        { value: 0, label: 'Dorsiflexão além de neutro (0)' },
        { value: 1, label: 'Dorsiflexão até neutro (0.5)' },
        { value: 2, label: 'Equino rígido, sem dorsiflexão (1)' },
      ],
    },
    {
      id: 'medial_crease',
      label: 'Vinco Medial',
      description: 'Avaliação do vinco cutâneo medial do pé',
      type: 'radio',
      section: 'Mediopé (Midfoot)',
      options: [
        { value: 0, label: 'Sem vinco (0)' },
        { value: 1, label: 'Vinco moderado (0.5)' },
        { value: 2, label: 'Vinco profundo (1)' },
      ],
    },
    {
      id: 'lateral_head_talus',
      label: 'Cabeça Lateral do Tálus',
      description: 'Palpação da cabeça do tálus na face lateral do pé',
      type: 'radio',
      section: 'Mediopé (Midfoot)',
      options: [
        { value: 0, label: 'Coberta pelo navicular (0)' },
        { value: 1, label: 'Parcialmente coberta (0.5)' },
        { value: 2, label: 'Exposta/palpável lateralmente (1)' },
      ],
    },
    {
      id: 'curved_lateral_border',
      label: 'Bordo Lateral Curvo',
      description: 'Avaliação da curvatura do bordo lateral do pé',
      type: 'radio',
      section: 'Mediopé (Midfoot)',
      options: [
        { value: 0, label: 'Bordo reto (0)' },
        { value: 1, label: 'Ligeiramente curvo (0.5)' },
        { value: 2, label: 'Curvo/convexo (1)' },
      ],
    },
  ],
  maxScore: 6,
  minScore: 0,
  interpretations: [
    {
      range: [0, 0],
      label: 'Normal / Corrigido',
      description: 'Pé normal ou completamente corrigido. Sem deformidade residual.',
      color: 'safe',
      recommendation: 'Manter ortótese de abdução (Dennis-Brown) conforme protocolo de Ponseti.',
    },
    {
      range: [0.5, 2.5],
      label: 'Leve',
      description: 'Deformidade residual leve. Boa resposta ao tratamento conservador.',
      color: 'caution',
      recommendation: 'Continuar gessos seriados. Reavaliar necessidade de tenotomia.',
    },
    {
      range: [3, 4.5],
      label: 'Moderado',
      description: 'Deformidade moderada. Requer tratamento ativo continuado.',
      color: 'caution',
      recommendation: 'Gessos seriados segundo Ponseti. Tenotomia de Aquiles provavelmente necessária.',
    },
    {
      range: [5, 6],
      label: 'Severo',
      description: 'Deformidade severa. Pé rígido com pouca redutibilidade.',
      color: 'danger',
      recommendation: 'Gessos seriados de Ponseti intensivos + tenotomia de Aquiles. Preparar para possível necessidade de procedimentos adicionais.',
    },
  ],
  calculate: (values: Record<string, number>) => {
    const ids = ['posterior_crease', 'empty_heel', 'rigid_equinus', 'medial_crease', 'lateral_head_talus', 'curved_lateral_border'];
    const rawSum = ids.reduce((sum, id) => sum + (values[id] ?? 0), 0);
    return rawSum / 2;
  },
  references: [
    {
      authors: 'Pirani S, Outerbridge HK, Sawatzky B, Stothers K',
      title: 'A reliable method of clinically evaluating a virgin clubfoot evaluation',
      journal: '21st SICOT World Congress',
      year: 1999,
    },
  ],
};
