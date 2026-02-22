import type { ClassificationData } from '@/types/classification';

export const schenckClassification: ClassificationData = {
  id: 'schenck-classification',
  name: 'Classificação de Schenck (Luxação do Joelho)',
  author: 'Schenck',
  year: 1998,
  grades: [
    {
      id: 'kd-1',
      label: 'KD-I',
      description: 'Lesão de 1 cruzado (LCA ou LCP) + colaterais',
      criteria: [
        'Lesão isolada de um ligamento cruzado',
        'Possível lesão de colaterais associada',
        'Articulação redutível',
        'Menor energia envolvida'
      ],
      treatment: 'Reconstrução do cruzado lesado + reparo dos colaterais se necessário; reabilitação progressiva',
      prognosis: 'Melhor prognóstico entre as luxações; bom resultado funcional esperado',
      colorCode: 'caution'
    },
    {
      id: 'kd-2',
      label: 'KD-II',
      description: 'Lesão de ambos os cruzados (LCA + LCP), colaterais intactos',
      criteria: [
        'Ruptura do LCA e LCP',
        'Ligamentos colaterais intactos',
        'Instabilidade anteroposterior',
        'Estabilidade em varo-valgo preservada'
      ],
      treatment: 'Reconstrução bicruzada; pode ser estadiada; avaliação vascular obrigatória',
      prognosis: 'Prognóstico reservado; instabilidade residual possível',
      colorCode: 'danger'
    },
    {
      id: 'kd-3',
      label: 'KD-III',
      description: 'Lesão de ambos os cruzados + 1 colateral (KD-IIIM ou KD-IIIL)',
      criteria: [
        'Ruptura do LCA e LCP',
        'Ruptura de um ligamento colateral (medial ou lateral)',
        'KD-IIIM: colateral medial lesado',
        'KD-IIIL: colateral lateral/canto posterolateral lesado (pior prognóstico)'
      ],
      treatment: 'Reconstrução multiligamentar; priorizar canto posterolateral (KD-IIIL); avaliação vascular obrigatória',
      prognosis: 'KD-IIIL tem pior prognóstico que KD-IIIM; risco de lesão do nervo fibular',
      colorCode: 'danger'
    },
    {
      id: 'kd-4',
      label: 'KD-IV',
      description: 'Lesão de ambos os cruzados + ambos os colaterais',
      criteria: [
        'Ruptura de todos os 4 ligamentos principais',
        'Instabilidade multidirecional',
        'Alto risco de lesão vascular (artéria poplítea)',
        'Alto risco de lesão do nervo fibular'
      ],
      treatment: 'Avaliação vascular emergencial; reconstrução multiligamentar estadiada; pode necessitar fixador externo inicialmente',
      prognosis: 'Prognóstico reservado; alto risco de complicações vasculares e neurológicas',
      colorCode: 'danger'
    },
    {
      id: 'kd-5',
      label: 'KD-V',
      description: 'Fratura-luxação',
      criteria: [
        'Luxação do joelho associada a fratura periarticular',
        'Pode envolver platô tibial, fêmur distal ou patela',
        'Combinação de lesão óssea e ligamentar',
        'Mecanismo de alta energia'
      ],
      treatment: 'Fixação da fratura + reconstrução ligamentar (pode ser estadiada); avaliação vascular obrigatória',
      prognosis: 'Pior prognóstico; alta taxa de rigidez e artrose pós-traumática',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sempre avaliar status vascular - angiografia/angioTC em todas as luxações do joelho',
  pitfall: 'Luxação pode reduzir espontaneamente - alta suspeição se lesão multiligamentar no exame físico',
  references: [
    'Schenck RC Jr. Classification of knee dislocations. Oper Tech Sports Med. 2003;11(3):193-198.',
    'Schenck RC Jr. The dislocated knee. Instr Course Lect. 1994;43:127-136.'
  ]
};
