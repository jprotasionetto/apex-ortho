import type { ClassificationData } from '@/types/classification';

export const outerbridgeClassification: ClassificationData = {
  id: 'outerbridge-classification',
  name: 'Classificação de Outerbridge (Lesão Condral)',
  author: 'Outerbridge',
  year: 1961,
  grades: [
    {
      id: 'grade-1',
      label: 'Grau I',
      description: 'Amolecimento e edema da cartilagem',
      criteria: [
        'Cartilagem amolecida ao toque (probe)',
        'Edema e tumefação superficial',
        'Superfície articular intacta',
        'Sem fibrilação'
      ],
      treatment: 'Tratamento conservador: modificação de atividade, fisioterapia, condroprotetores',
      prognosis: 'Bom prognóstico; pode ser reversível com medidas adequadas',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau II',
      description: 'Fragmentação e fissura ≤1,5cm de diâmetro',
      criteria: [
        'Fragmentação ou fissura da cartilagem',
        'Diâmetro da lesão menor ou igual a 1,5cm',
        'Profundidade não atinge osso subcondral',
        'Fibrilação superficial'
      ],
      treatment: 'Desbridamento artroscópico, microfratura para lesões sintomáticas; fisioterapia',
      prognosis: 'Prognóstico moderado; responde bem a microfratura em pacientes jovens',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau III',
      description: 'Fragmentação e fissura >1,5cm de diâmetro',
      criteria: [
        'Fragmentação ou fissura da cartilagem',
        'Diâmetro da lesão maior que 1,5cm',
        'Profundidade pode se aproximar do osso subcondral',
        'Sem exposição do osso subcondral'
      ],
      treatment: 'Microfratura, OATS/mosaicoplastia, transplante de condrócitos autólogos (ACI/MACI)',
      prognosis: 'Prognóstico reservado; necessita intervenção para prevenir progressão',
      colorCode: 'danger'
    },
    {
      id: 'grade-4',
      label: 'Grau IV',
      description: 'Exposição do osso subcondral',
      criteria: [
        'Erosão completa da cartilagem',
        'Osso subcondral exposto',
        'Eburnação possível',
        'Lesão de espessura total'
      ],
      treatment: 'OATS/mosaicoplastia, ACI/MACI, transplante osteocondral alógeno; artroplastia se extensa',
      prognosis: 'Prognóstico reservado; lesões extensas podem necessitar artroplastia',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Classificação artroscópica - avaliação direta da cartilagem durante artroscopia é o padrão-ouro',
  pitfall: 'RM pode subestimar o grau da lesão condral; correlação com artroscopia é imperfeita',
  references: [
    'Outerbridge RE. The etiology of chondromalacia patellae. J Bone Joint Surg Br. 1961;43-B:752-757.'
  ]
};
