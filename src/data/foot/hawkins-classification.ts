import type { ClassificationData } from '@/types/classification.ts';

export const hawkinsClassification: ClassificationData = {
  id: 'hawkins-classification',
  name: 'Classificacao de Hawkins (Fraturas do Colo do Talo)',
  author: 'Hawkins',
  year: 1970,
  grades: [
    {
      id: 'type-1',
      label: 'Tipo I',
      description: 'Fratura nao deslocada do colo do talo',
      criteria: [
        'Fratura vertical do colo do talo sem desvio',
        'Articulacoes subtalar e tibiotalar congruentes',
        'Sem subluxacao ou luxacao associada',
        'Suprimento vascular parcialmente mantido'
      ],
      treatment: 'Imobilizacao com bota gessada sem carga por 8-12 semanas; TC para confirmar ausencia de desvio',
      prognosis: 'Taxa de necrose avascular (NAV): 0-13%. Bom prognostico com tratamento conservador adequado.',
      colorCode: 'safe'
    },
    {
      id: 'type-2',
      label: 'Tipo II',
      description: 'Fratura do colo com subluxacao/luxacao subtalar',
      criteria: [
        'Fratura do colo do talo com desvio',
        'Subluxacao ou luxacao da articulacao subtalar',
        'Articulacao tibiotalar congruente ou com subluxacao minima',
        'Ruptura do suprimento vascular pela arteria do canal do tarso'
      ],
      treatment: 'Reducao urgente e ORIF com parafusos de compressao; abordagem anteromedial e/ou anterolateral; reducao anatomica essencial',
      prognosis: 'Taxa de NAV: 20-50%. Risco significativo de complicacoes; resultado depende da qualidade da reducao.',
      colorCode: 'caution'
    },
    {
      id: 'type-3',
      label: 'Tipo III',
      description: 'Fratura do colo com luxacao subtalar e tibiotalar',
      criteria: [
        'Fratura do colo do talo com desvio significativo',
        'Luxacao da articulacao subtalar',
        'Luxacao da articulacao tibiotalar',
        'Corpo do talo extrudido posteriormente',
        'Ruptura de grande parte do suprimento vascular'
      ],
      treatment: 'Reducao de urgencia (emergencia ortopedica); ORIF apos reducao; abordagens combinadas frequentemente necessarias; considerar fixacao temporaria com fios K',
      prognosis: 'Taxa de NAV: 80-100%. Prognostico reservado; alta incidencia de artrose pos-traumatica e necessidade de artrodese.',
      colorCode: 'danger'
    },
    {
      id: 'type-4',
      label: 'Tipo IV',
      description: 'Fratura do colo com luxacao subtalar, tibiotalar e talonavicular',
      criteria: [
        'Fratura do colo do talo com luxacao completa',
        'Luxacao subtalar',
        'Luxacao tibiotalar',
        'Luxacao talonavicular (adicao de Canale e Kelly)',
        'Perda completa do suprimento vascular'
      ],
      treatment: 'Reducao de emergencia imediata; ORIF complexa; risco elevado de perda cutanea e infeccao; considerar fixador externo temporario',
      prognosis: 'Taxa de NAV: ~100%. Prognostico muito reservado; frequentemente necessita de artrodese tibiotalo-calcaneana ou amputacao em casos graves.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sinal de Hawkins (radiolucencia subcondral as 6-8 semanas) indica revascularizacao e e um bom prognostico. A presenca deste sinal na cupula do talo confirma que NAV nao ocorreu.',
  pitfall: 'Taxa de NAV: I=0-13%, II=20-50%, III=80-100%, IV=~100%. A reducao urgente e fundamental para minimizar lesao vascular adicional e necrose cutanea.',
  references: [
    'Hawkins LG. Fractures of the neck of the talus. J Bone Joint Surg Am. 1970;52(5):991-1002.',
    'Canale ST, Kelly FB Jr. Fractures of the neck of the talus. Long-term evaluation of seventy-one cases. J Bone Joint Surg Am. 1978;60(2):143-156.'
  ]
};
