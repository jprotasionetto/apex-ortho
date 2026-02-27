import type { ClassificationData } from '@/types/classification';

export const schenckClassification: ClassificationData = {
  id: 'schenck-classification',
  name: 'Classificação de Schenck (Luxação do Joelho)',
  author: 'Schenck',
  year: 1998,
  epidemiology: 'Luxação do joelho (LX joelho) é uma lesão rara: 0,02–0,2% de todas as lesões ortopédicas — incidência real subestimada pela redução espontânea em 30–50% dos casos antes da chegada ao serviço de emergência. Alta energia em 50% (MVA, quedas de altura), baixa energia/esportiva em 50% (futebol americano, luta livre). Classificação de Schenck (KD I–V): baseada no padrão ligamentar + presença de fratura. KD-IIIL (canto posterolateral comprometido): pior prognóstico funcional — lesão do nervo fibular comum em 20–40%. KD-IV (todos os 4 ligamentos): lesão vascular em 30–40% (artéria poplítea por tração ou laceração direta). Complicações vasculares: artéria poplítea tem mobilidade limitada pelas origens do músculo gastrocnêmio → suscetível à tração → isquemia distal. Regra imutável: AVALIAÇÃO VASCULAR EM TODAS AS LUXAÇÕES — ITB <0,9 ou ausência de pulso distal = angiotomografia emergencial (sensibilidade 95%). Amputação: 0–10% com diagnóstico e revascularização precoces; até 86% com isquemia >8h.',
  mechanism: 'Biomecânica: joelho necessita força extrema para luxar — estruturas capsulares múltiplas precisam ser rompidas sequencialmente. Mecanismo principal: hiperextensão (LCA → LCP → capsula posterior → vasos poplíteos) OU força em valgo + rotação (LCA → colateral medial → LCP → canto posterolateral). Sequência anatômica de lesão por energia crescente: Schenck KD-I (1 cruzado) → KD-II (LCA+LCP, colaterais preservados — "raro, suspeitar de redução espontânea") → KD-III (LCA+LCP + 1 colateral) → KD-IV (LCA+LCP + ambos colaterais) → KD-V (fratura + luxação = pior). KD-IIIL (canto posterolateral lesado): artéria geniculate lateral superior comprimida + nervo fibular tracionado ao redor da cabeça da fíbula → lesão neurológica em 20–40%. KD-IIIM (colateral medial): menor risco vascular/neurológico, melhor prognóstico geral. Luxação com redução espontânea: pode parecer "multiligamentar" na RM sem dados claros de luxação — alta suspeição clínica + avaliação vascular obrigatória mesmo sem luxação radiográfica.',
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
