import type { ClassificationData } from '@/types/classification.ts';

export const pipkinClassificationData: ClassificationData = {
  id: 'pipkin-classification',
  name: 'Classificação de Pipkin – Fraturas da Cabeça Femoral',
  author: 'Pipkin',
  year: 1957,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I – Abaixo da Fóvea',
      description: 'Fratura da cabeça femoral abaixo da fóvea capitis (zona de não carga).',
      criteria: [
        'Fragmento de fratura abaixo (inferior) à fóvea capitis',
        'Zona de não carga afetada',
        'Associada a luxação posterior do quadril',
        'Fragmento não envolve área de carga principal',
      ],
      treatment: 'Redução urgente da luxação (<6h). Se fragmento não interposto e articulação congruente: tratamento conservador. Se interposto ou incongruente: excisão do fragmento ou RAFI.',
      prognosis: 'Bom se redução precoce e congruente. Menor risco de artrose que Tipo II.',
      colorCode: 'caution',
    },
    {
      id: 'type-ii',
      label: 'Tipo II – Acima da Fóvea',
      description: 'Fratura da cabeça femoral acima da fóvea capitis (zona de carga).',
      criteria: [
        'Fragmento de fratura acima (superior) à fóvea capitis',
        'Zona de carga principal afetada',
        'Associada a luxação posterior do quadril',
        'Maior área de superfície articular envolvida',
      ],
      treatment: 'Redução urgente da luxação. RAFI do fragmento (parafusos headless, Herbert) para restaurar congruência articular. Excisão se fragmento muito pequeno ou cominutivo.',
      prognosis: 'Moderado a reservado. Maior risco de artrose pós-traumática por envolvimento da zona de carga.',
      colorCode: 'danger',
    },
    {
      id: 'type-iii',
      label: 'Tipo III – Com Fratura do Colo Femoral',
      description: 'Tipo I ou II associado a fratura do colo femoral.',
      criteria: [
        'Fratura da cabeça femoral (Tipo I ou II)',
        'Fratura associada do colo femoral',
        'Lesão de alta energia',
        'Vascularização da cabeça femoral severamente comprometida',
        'Alta taxa de necrose avascular',
      ],
      treatment: 'Jovens: tentativa de RAFI urgente (colo + cabeça). Idosos: artroplastia total do quadril primária. Prioridade: redução da luxação + fixação do colo.',
      prognosis: 'Reservado. Pior prognóstico de todos os tipos. Taxa de NAV muito alta. Artroplastia frequentemente necessária.',
      colorCode: 'danger',
    },
    {
      id: 'type-iv',
      label: 'Tipo IV – Com Fratura Acetabular',
      description: 'Tipo I ou II associado a fratura do acetábulo.',
      criteria: [
        'Fratura da cabeça femoral (Tipo I ou II)',
        'Fratura associada do acetábulo (parede/coluna posterior)',
        'Lesão de alta energia',
        'Instabilidade do quadril',
        'Avaliação com TC obrigatória',
      ],
      treatment: 'Redução urgente da luxação. Tratamento cirúrgico da fratura acetabular (RAFI via Kocher-Langenbeck) + tratamento da fratura da cabeça conforme Tipo I ou II.',
      prognosis: 'Reservado. Prognóstico depende da qualidade da redução acetabular e congruência articular residual.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Tipo III: pior prognostico, alta taxa de necrose avascular',
  pitfall: 'Reducao urgente da luxacao e prioritaria',
  references: [
    {
      authors: 'Pipkin G',
      title: 'Treatment of grade IV fracture-dislocation of the hip',
      journal: 'J Bone Joint Surg Am',
      year: 1957,
    },
  ],
};
