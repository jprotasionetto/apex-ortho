import type { ClassificationData } from '@/types/tool';

export const gartlandClassificationData: ClassificationData = {
  id: 'gartland-classification',
  name: 'Classificação de Gartland',
  author: 'Gartland',
  year: 1959,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I - Sem Desvio',
      description: 'Fratura supracondiliana sem desvio',
      criteria: [
        'Fratura não deslocada ou minimamente deslocada',
        'Linha humeral anterior passa pelo terço médio/anterior do capitelo',
        'Sinal da gordura posterior positivo (patognomônico de fratura)',
        'Cortical anterior pode ter linha de fratura visível',
        'Angulação < 10 graus',
        'Sem rotação'
      ],
      treatment: 'Tratamento conservador. Imobilização com tala gessada axilopalmar com cotovelo em 60-90 graus de flexão. Controle radiográfico em 5-7 dias. Imobilização por 3-4 semanas.',
      prognosis: 'Excelente prognóstico. Consolidação em 3-4 semanas. Retorno completo da mobilidade esperado. Complicações raras.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II - Deslocada com Cortical Posterior Intacta',
      description: 'Fratura deslocada com dobradiça cortical posterior',
      criteria: [
        'Fratura com angulação/desvio',
        'Cortical posterior intacta (funciona como dobradiça)',
        'Linha humeral anterior não cruza o capitelo ou passa anteriormente',
        'Desvio em extensão (mais comum) ou flexão',
        'Pode ter componente rotacional',
        'IIA: sem rotação, IIB: com rotação (modificação Wilkins)'
      ],
      treatment: 'Tipo IIA (sem rotação): redução fechada + imobilização gessada, controle rigoroso. Tipo IIB (com rotação): redução fechada + fixação percutânea com fios de Kirschner (2-3 fios laterais ou cruzados).',
      prognosis: 'Bom prognóstico com tratamento adequado. Risco de desvio secundário se tratado conservadoramente com rotação. Rigidez temporária comum.',
      colorCode: 'caution'
    },
    {
      id: 'type-iii',
      label: 'Tipo III - Completamente Deslocada',
      description: 'Fratura completamente deslocada sem contato cortical',
      criteria: [
        'Desvio completo sem contato cortical',
        'Cortical posterior rompida',
        'Desvio posteromedial (75%) ou posterolateral (25%)',
        'Alta energia',
        'Edema importante',
        'Risco significativo de lesão neurovascular'
      ],
      treatment: 'Emergência ortopédica. Redução fechada urgente sob anestesia geral + fixação percutânea com fios de Kirschner (2-3 fios laterais, ou cruzados evitando nervo ulnar medialmente). Se irredutível: redução aberta.',
      prognosis: 'Prognóstico depende de lesões associadas. Risco de lesão neurovascular (artéria braquial, nervo interósseo anterior, nervo mediano). Se tratada adequadamente, bom resultado funcional.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Tipo III = emergência ortopédica com risco de lesão neurovascular. Avaliar sempre: pulso radial, enchimento capilar, função do nervo interósseo anterior (pinça com polegar e indicador - sinal do OK).',
  pitfall: 'Avaliar sempre pulso radial e função do nervo interósseo anterior. Mão rosa sem pulso (pink pulseless hand) = espasmo vascular vs lesão arterial - monitorizar de perto. Se perfusão não melhora após redução: explorar artéria braquial.',
  references: [
    {
      authors: 'Gartland JJ',
      title: 'Management of supracondylar fractures of the humerus in children',
      journal: 'Surg Gynecol Obstet',
      year: 1959
    },
    {
      authors: 'Wilkins KE',
      title: 'Supracondylar fractures: what\'s new?',
      journal: 'J Pediatr Orthop B',
      year: 1997
    }
  ]
};
