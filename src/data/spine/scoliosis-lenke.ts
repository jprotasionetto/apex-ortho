import type { ClassificationData } from '@/types/classification';

export const scoliosisLenke: ClassificationData = {
  id: 'scoliosis-lenke',
  name: 'Classificação de Lenke (Escoliose Idiopática do Adolescente)',
  author: 'Lenke',
  year: 2001,
  grades: [
    {
      id: 'type-1',
      label: 'Tipo 1 - Torácica Principal',
      description: 'Curva torácica principal estrutural',
      criteria: [
        'Curva torácica principal (PT): estrutural (maior e mais rígida)',
        'Curva toracolombar/lombar (TL/L): não estrutural (flexível)',
        'Curva torácica proximal (PT): não estrutural',
        'Fusão: torácica seletiva pode ser considerada',
        'Padrão mais comum (~30% dos casos)'
      ],
      treatment: 'Artrodese seletiva torácica posterior; instrumentação com parafusos pediculares; correção 3D',
      prognosis: 'Bom prognóstico; melhor candidato para fusão seletiva torácica',
      colorCode: 'caution'
    },
    {
      id: 'type-2',
      label: 'Tipo 2 - Dupla Torácica',
      description: 'Curvas torácica proximal e principal ambas estruturais',
      criteria: [
        'Curva torácica proximal (PT): estrutural',
        'Curva torácica principal (MT): estrutural (maior)',
        'Curva toracolombar/lombar: não estrutural',
        'Ombro esquerdo elevado frequente',
        'Ambas as curvas torácicas devem ser incluídas na fusão'
      ],
      treatment: 'Artrodese torácica estendida incluindo curva proximal; atenção ao equilíbrio dos ombros',
      prognosis: 'Bom prognóstico; necessário incluir curva proximal para evitar descompensação do ombro',
      colorCode: 'caution'
    },
    {
      id: 'type-3',
      label: 'Tipo 3 - Dupla Maior',
      description: 'Curvas torácica principal e toracolombar/lombar ambas estruturais',
      criteria: [
        'Curva torácica principal (MT): estrutural',
        'Curva toracolombar/lombar (TL/L): estrutural',
        'Ambas as curvas são maiores e rígidas',
        'Curva torácica proximal: não estrutural',
        'Necessidade de fusão longa (torácica + lombar)'
      ],
      treatment: 'Artrodese posterior longa incluindo ambas as curvas; instrumentação com parafusos pediculares',
      prognosis: 'Prognóstico reservado; fusão longa necessária; perda de mobilidade lombar',
      colorCode: 'danger'
    },
    {
      id: 'type-4',
      label: 'Tipo 4 - Tripla Maior',
      description: 'Três curvas estruturais',
      criteria: [
        'Curva torácica proximal: estrutural',
        'Curva torácica principal: estrutural',
        'Curva toracolombar/lombar: estrutural',
        'Todas as três curvas são maiores e rígidas',
        'Necessidade de fusão muito longa'
      ],
      treatment: 'Artrodese posterior longa de T2 a L3-L4; instrumentação extensa; correção 3D balanceada',
      prognosis: 'Prognóstico mais reservado; fusão extensa com perda significativa de mobilidade',
      colorCode: 'danger'
    },
    {
      id: 'type-5',
      label: 'Tipo 5 - Toracolombar/Lombar',
      description: 'Curva toracolombar ou lombar principal estrutural',
      criteria: [
        'Curva toracolombar/lombar (TL/L): estrutural (principal)',
        'Curva torácica: não estrutural',
        'Curva torácica proximal: não estrutural',
        'Ápex entre T12 e L1 (toracolombar) ou L1-L2 e abaixo (lombar)'
      ],
      treatment: 'Artrodese seletiva toracolombar/lombar; abordagem anterior ou posterior; fusão curta possível',
      prognosis: 'Bom prognóstico; fusão seletiva adequada na maioria dos casos',
      colorCode: 'caution'
    },
    {
      id: 'type-6',
      label: 'Tipo 6 - TL/L + Torácica Estrutural',
      description: 'Curva toracolombar/lombar principal + curva torácica estrutural',
      criteria: [
        'Curva toracolombar/lombar (TL/L): estrutural (principal - maior)',
        'Curva torácica principal: estrutural (mas menor que TL/L)',
        'Curva torácica proximal: não estrutural',
        'Necessidade de fusão incluindo ambas as curvas'
      ],
      treatment: 'Artrodese posterior longa incluindo ambas as curvas; instrumentação com parafusos pediculares',
      prognosis: 'Prognóstico reservado; fusão longa necessária',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Lumbar modifier (A: CSVL entre pedículos apicais, B: CSVL toca corpo apical, C: CSVL não toca corpo apical) e thoracic kyphosis modifier (-: <10°, N: 10-40°, +: >40°) complementam a classificação e influenciam decisões de fusão',
  pitfall: 'Classificação complexa, requer radiografias em inclinação lateral (bending films) para determinar flexibilidade e estruturalidade de cada curva',
  references: [
    'Lenke LG, et al. Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis. J Bone Joint Surg Am. 2001;83-A(8):1169-1181.',
    'Lenke LG. The Lenke classification system of operative adolescent idiopathic scoliosis. Neurosurg Clin N Am. 2007;18(2):199-206.'
  ]
};
