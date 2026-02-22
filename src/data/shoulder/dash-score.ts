import type { ScoreDefinition } from '@/types/score.ts';

export const dashScoreData: ScoreDefinition = {
  id: 'dash-score',
  name: 'QuickDASH (Disabilities of Arm, Shoulder & Hand)',
  items: [
    {
      id: 'open_jar',
      label: 'Abrir um frasco apertado ou novo',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'write',
      label: 'Escrever',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'turn_key',
      label: 'Rodar uma chave',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'prepare_meal',
      label: 'Preparar uma refeição',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'push_door',
      label: 'Empurrar uma porta pesada',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'place_object',
      label: 'Colocar objeto numa prateleira acima da cabeça',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'heavy_chores',
      label: 'Tarefas domésticas pesadas (limpar chão, paredes)',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'gardening',
      label: 'Jardinagem ou trabalho no quintal',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'make_bed',
      label: 'Fazer a cama',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'carry_bag',
      label: 'Carregar um saco de compras ou mala',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
    {
      id: 'wash_back',
      label: 'Lavar as costas',
      type: 'radio',
      section: 'Função',
      options: [
        { value: 1, label: 'Sem dificuldade (1)' },
        { value: 2, label: 'Dificuldade ligeira (2)' },
        { value: 3, label: 'Dificuldade moderada (3)' },
        { value: 4, label: 'Dificuldade severa (4)' },
        { value: 5, label: 'Incapaz (5)' },
      ],
    },
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    { range: [0, 20], label: 'Incapacidade Mínima', description: 'Funcionalidade do membro superior quase normal.', color: 'safe' },
    { range: [21, 40], label: 'Incapacidade Ligeira', description: 'Ligeira limitação funcional do membro superior.', color: 'caution' },
    { range: [41, 60], label: 'Incapacidade Moderada', description: 'Limitação funcional moderada do membro superior.', color: 'danger' },
    { range: [61, 100], label: 'Incapacidade Severa', description: 'Limitação funcional severa do membro superior.', color: 'danger' },
  ],
  calculate: (values: Record<string, number>) => {
    const ids = ['open_jar', 'write', 'turn_key', 'prepare_meal', 'push_door', 'place_object', 'heavy_chores', 'gardening', 'make_bed', 'carry_bag', 'wash_back'];
    const answered = ids.filter((id) => values[id] !== undefined);
    if (answered.length === 0) return 0;
    const sum = answered.reduce((s, id) => s + (values[id] ?? 0), 0);
    return Math.round(((sum / answered.length) - 1) * 25);
  },
  references: [
    {
      authors: 'Hudak PL, Amadio PC, Bombardier C',
      title: 'Development of an upper extremity outcome measure: the DASH',
      journal: 'American Journal of Industrial Medicine',
      year: 1996,
    },
  ],
};
