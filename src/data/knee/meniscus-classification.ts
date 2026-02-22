import type { ClassificationData } from '@/types/classification';

export const meniscusClassification: ClassificationData = {
  id: 'meniscus-classification',
  name: 'Classificação das Lesões Meniscais',
  author: 'ISAKOS',
  year: 2005,
  grades: [
    {
      id: 'vertical-longitudinal',
      label: 'Vertical/Longitudinal',
      description: 'Lesão vertical paralela à borda meniscal',
      criteria: [
        'Orientação vertical ao longo das fibras circunferenciais',
        'Pode envolver zona vermelha-vermelha ou vermelha-branca',
        'Comprimento variável',
        'Estabilidade dependente do comprimento'
      ],
      treatment: 'Reparo meniscal quando em zona vascular (red-red ou red-white); meniscectomia parcial se zona avascular',
      prognosis: 'Bom prognóstico com reparo em zona vascular; cicatrização em 80-90% dos casos',
      colorCode: 'caution'
    },
    {
      id: 'bucket-handle',
      label: 'Alça de Balde (Bucket Handle)',
      description: 'Lesão longitudinal extensa com fragmento deslocado',
      criteria: [
        'Lesão longitudinal extensa',
        'Fragmento central deslocado para o intercôndilo',
        'Frequentemente causa bloqueio articular',
        'Sinal do duplo PCL na RM'
      ],
      treatment: 'Reparo meniscal artroscópico urgente; redução e fixação do fragmento',
      prognosis: 'Bom se reparado precocemente; risco de lesão condral se bloqueio persistente',
      colorCode: 'danger'
    },
    {
      id: 'radial',
      label: 'Radial',
      description: 'Lesão perpendicular às fibras circunferenciais',
      criteria: [
        'Orientação perpendicular à borda meniscal',
        'Interrompe as fibras circunferenciais',
        'Compromete a função de distribuição de carga',
        'Mais comum no menisco lateral (junção corpo-corno posterior)'
      ],
      treatment: 'Reparo quando possível (técnicas side-to-side); meniscectomia parcial limitada se irreparável',
      prognosis: 'Pior prognóstico biomecanico - perda da função de aro (hoop stress)',
      colorCode: 'danger'
    },
    {
      id: 'horizontal-cleavage',
      label: 'Horizontal/Clivagem',
      description: 'Lesão no plano horizontal dividindo o menisco em folhetos',
      criteria: [
        'Plano de clivagem horizontal',
        'Divide menisco em folheto superior e inferior',
        'Frequentemente associada a degeneração',
        'Pode formar cisto parameniscal'
      ],
      treatment: 'Meniscectomia parcial do folheto instável; drenagem de cisto se presente',
      prognosis: 'Geralmente associada a processo degenerativo; baixo potencial de cicatrização',
      colorCode: 'caution'
    },
    {
      id: 'root-tear',
      label: 'Lesão de Raiz (Root Tear)',
      description: 'Avulsão ou lesão na inserção meniscal (raiz)',
      criteria: [
        'Lesão na inserção óssea do menisco',
        'Equivalente funcional à meniscectomia total',
        'Extrusão meniscal na RM',
        'Sinal do menisco fantasma (ghost meniscus)',
        'Mais comum: raiz posterior do menisco medial'
      ],
      treatment: 'Reparo com pullout transósseo (transtibial pullout repair); fixação anatômica da raiz',
      prognosis: 'Sem reparo: progressão rápida para artrose; com reparo: resultados promissores',
      colorCode: 'danger'
    },
    {
      id: 'complex-degenerative',
      label: 'Complexa/Degenerativa',
      description: 'Lesão com múltiplos planos de clivagem',
      criteria: [
        'Combinação de padrões de lesão',
        'Múltiplos planos envolvidos',
        'Tecido meniscal degenerado',
        'Frequente em pacientes >40 anos',
        'Associação com artrose'
      ],
      treatment: 'Meniscectomia parcial limitada; fisioterapia; tratar artrose associada',
      prognosis: 'Parte do espectro degenerativo; preservar o máximo de tecido meniscal possível',
      colorCode: 'caution'
    }
  ],
  clinicalPearl: 'Localização na zona vascular (red-red, red-white) determina potencial de reparo',
  pitfall: 'Meniscectomia leva a artrose precoce - reparar sempre que possível',
  references: [
    'Anderson AF, et al. Interobserver reliability of the International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine (ISAKOS) classification of meniscal tears. Am J Sports Med. 2011;39(5):926-932.'
  ]
};
