import type { ClassificationData } from '@/types/tool';

export const gartlandClassificationData: ClassificationData = {
  id: 'gartland-classification',
  name: 'Classificação de Gartland',
  author: 'Gartland',
  year: 1959,
  epidemiology: 'Fraturas supracondilianas do úmero são as fraturas mais comuns do cotovelo pediátrico: 60–70% de todas as fraturas do cotovelo em crianças e ~3% de todas as fraturas pediátricas. Incidência: ~300/100.000 crianças/ano. Pico etário: 5–8 anos (cotovelo com ossificação incompleta + ligamentos frouxos). Relação M:F ligeiramente masculina (1,2:1). Distribuição: Tipo I ~14%, Tipo II ~40%, Tipo III ~46%. Tipo em extensão (queda com cotovelo estendido): 97%. Lesões neurovasculares: Tipo III 15–25%. Nervo mais lesado: NIA (ramo mediano) com desvio posteromedial; nervo radial com desvio posterolateral; nervo ulnar iatrogênico (pino medial). Artéria braquial comprometida em 10–20% dos Tipo III — "mão rosa sem pulso" (pink pulseless hand) = espasmo vs lesão: observar após redução. Cubitus varus residual (gunstock deformity) em 15–30% dos casos com redução inadequada — principalmente cosmético, mas causa preocupação nos pais.',
  mechanism: 'Mecanismo mais comum (97%): queda com cotovelo em extensão e mão espalmada no chão → força axial + hiperextensão → o fragmento distal desloca-se POSTERIORMENTE. Desvio posteromedial (75%): angulação em varo + hiperextensão; risco de lesão do NIA (pinça polegar-indicador = sinal do OK). Desvio posterolateral (25%): angulação em valgo + hiperextensão; risco de nervo radial. Cubitus varus resulta de: rotação do fragmento distal em varismo + perda da inclinação da metáfise lateral (ângulo de Baumann) → deformidade permanente se redução inadequada. O músculo braquial traciona o fragmento distal anteriormente; o tríceps puxa a diáfise proximalmente. A artéria braquial bifurca a nível do cotovelo — em Tipo III com desvio posteromedial, a artéria pode ser aprisionada entre os fragmentos ou sofrer espasmo reflexo (mão "rosa" = perfusão via circulação colateral; mão "branca" = isquemia real = indicação de exploração cirúrgica).',
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
