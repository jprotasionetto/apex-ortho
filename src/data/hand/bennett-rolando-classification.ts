import type { ClassificationData } from '@/types/classification.ts';

export const bennettRolandoClassificationData: ClassificationData = {
  id: 'bennett-rolando',
  name: 'Classificação de Bennett/Rolando – Fraturas da Base do 1º Metacarpo',
  author: 'Bennett/Rolando',
  year: 1882,
  grades: [
    {
      id: 'bennett',
      label: 'Bennett – Fratura-Subluxação (2 fragmentos)',
      description: 'Fratura intra-articular com 2 fragmentos e subluxação dorso-radial do metacarpo.',
      criteria: [
        'Fratura intra-articular da base do 1º metacarpo',
        'Dois fragmentos: fragmento volar-ulnar pequeno e corpo do metacarpo',
        'Fragmento volar retido pelo ligamento oblíquo anterior (beak ligament)',
        'Subluxação dorsal e radial do metacarpo por ação do APL',
        'Padrão mais comum de fratura da base do 1º MC',
      ],
      treatment: 'Redução fechada e fixação percutânea com fios de Kirschner ou parafuso. Redução aberta (RAFI) se redução fechada inadequada. Objetivo: restaurar congruência articular (<1mm de degrau).',
      prognosis: 'Bom com redução anatômica. Risco de artrose CMC se incongruência articular residual.',
      colorCode: 'caution',
    },
    {
      id: 'rolando',
      label: 'Rolando – Fratura em Y/T (3+ fragmentos)',
      description: 'Fratura intra-articular cominutiva da base do 1º metacarpo em padrão Y ou T.',
      criteria: [
        'Fratura intra-articular cominutiva',
        'Três ou mais fragmentos (padrão Y ou T)',
        'Padrão dorsal e volar da base do metacarpo',
        'Maior destruição articular que Bennett',
        'Menos comum que Bennett',
      ],
      treatment: 'Redução aberta e fixação interna com mini-placa e parafusos se fragmentos permitem fixação. Fixação com fios K + tração se cominução severa. Fixador externo em casos de cominução extrema.',
      prognosis: 'Reservado. Pior prognóstico que Bennett devido à maior destruição articular. Alta taxa de artrose pós-traumática.',
      colorCode: 'danger',
    },
    {
      id: 'extra-articular',
      label: 'Extra-articular – Fratura Transversa da Base',
      description: 'Fratura transversa da base do 1º metacarpo sem envolvimento articular.',
      criteria: [
        'Fratura da base do 1º metacarpo',
        'Traço extra-articular (não envolve superfície articular CMC)',
        'Padrão transverso ou oblíquo curto',
        'Desvio variável conforme forças musculares',
        'Angulação dorsal frequente',
      ],
      treatment: 'Redução fechada e imobilização gessada com inclusão do polegar (spica) por 4-6 semanas se estável. Fixação percutânea com fios K se instável ou angulação >30°.',
      prognosis: 'Bom a excelente. Sem envolvimento articular, menor risco de artrose. Consolidação habitual em 6 semanas.',
      colorCode: 'safe',
    },
  ],
  clinicalPearl: 'Bennett: fragmento volar retido pelo ligamento obliquo anterior',
  pitfall: 'Reducao anatomica da superficie articular e essencial',
  references: [
    {
      authors: 'Bennett EH',
      title: 'Fractures of the metacarpal bones',
      journal: 'Dublin J Med Sci',
      year: 1882,
    },
    {
      authors: 'Rolando S',
      title: 'Fracture de la base du premier metacarpien',
      journal: 'Presse Med',
      year: 1910,
    },
  ],
};
