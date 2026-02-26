import type { ClassificationData } from '@/types/classification';

export const dejourTrochlearDysplasiaData: ClassificationData = {
  id: 'dejour-trochlear-dysplasia',
  name: 'Classificação de Dejour – Displasia Troclear',
  author: 'Dejour',
  year: 1994,
  epidemiology:
    'Displasia troclear presente em 85% dos casos de luxação recorrente da patela. Tipos B, C e D constituem displasia de alto grau. Displasia troclear isolada (sem instabilidade patelar) é rara. A classificação de Dejour é a mais utilizada mundialmente para guiar o tratamento cirúrgico da instabilidade patelofemoral.',
  mechanism:
    'Anormalidade morfológica congênita da tróclea femoral, desenvolvida durante o período fetal e de crescimento. A teoria da direção da força do quadríceps propõe que a força anormal do músculo quadríceps durante o crescimento impede a formação adequada do sulco troclear. A ausência de "estresse compressivo" normal pela patela na tróclea resulta em tróclea rasa ou convexa.',
  surgicalBasis:
    'Trocleoplastia (aprofundamento troclear) indicada em displasia sintomática de alto grau (Tipos B, C e D) com instabilidade documentada e falha no tratamento conservador. Frequentemente combinada com reconstrução do MPFL (ligamento patelofemoral medial). Osteotomia de Tibial Tuberosity (TTO) indicada se TTTG >20 mm. Em casos Tipo A, artroscopia com sulcoplastia superficial pode ser suficiente em sintomas leves.',
  grades: [
    {
      id: 'type-a',
      label: 'Tipo A – Tróclea Rasa',
      description:
        'Tróclea simétrica com profundidade reduzida (índice de profundidade <0,4). Sinal do cruzamento presente na radiografia de perfil. Tipo mais comum (66% dos casos).',
      criteria: [
        'Tróclea simétrica (facetas medial e lateral mantêm proporção)',
        'Índice de profundidade troclear <0,4 (normal >0,5)',
        'Sinal do cruzamento presente no perfil (crossing sign)',
        'Ausência de esporão supratroclear',
        'Tipo mais frequente: ~66% das displasias',
      ],
      treatment:
        'Casos leves: conservador (fortalecimento do VMO, órtese patelofemoral). Casos sintomáticos com instabilidade: sulcoplastia artroscópica superficial ou trocleoplastia aberta (técnica de Bereiter). Associar reconstrução do MPFL se instabilidade recorrente.',
      prognosis:
        'Bom prognóstico com tratamento adequado. Risco de instabilidade menor que nos tipos de alto grau. Resultados da sulcoplastia artroscópica satisfatórios na maioria dos pacientes.',
      colorCode: 'caution',
    },
    {
      id: 'type-b',
      label: 'Tipo B – Tróclea Plana ou Convexa',
      description:
        'Tróclea plana ou convexa com sinal do cruzamento e esporão supratroclear. Facetas medial e lateral planas (platô). Displasia de alto grau.',
      criteria: [
        'Tróclea plana ou convexa (sem sulco)',
        'Sinal do cruzamento presente na radiografia de perfil',
        'Esporão supratroclear visível no perfil (bump supratroclear)',
        'Ambas as facetas medial e lateral planas',
        'Displasia de alto grau',
      ],
      treatment:
        'Trocleoplastia de aprofundamento (sulcização) indicada na maioria dos casos sintomáticos. Técnica de Bereiter (trocleoplastia de remodelamento da cartilagem) ou trocleoplastia por cunha. Reconstrução do MPFL obrigatória se instabilidade recorrente. TTO se TTTG >20 mm.',
      prognosis:
        'Prognóstico reservado sem correção cirúrgica adequada. Com trocleoplastia + MPFL, maioria alcança estabilidade. Risco de artrose patelofemoral em longo prazo.',
      colorCode: 'danger',
    },
    {
      id: 'type-c',
      label: 'Tipo C – Assimétrica (Padrão Cliff)',
      description:
        'Displasia assimétrica: faceta medial plana/hipoplásica, faceta lateral convexa (padrão cliff). A faceta lateral é mais alta que a medial. Principal causa de luxação lateral da patela.',
      criteria: [
        'Assimetria das facetas trocleares',
        'Faceta medial plana ou hipoplásica',
        'Faceta lateral convexa e elevada (padrão "cliff" ou penhasco)',
        'Faceta lateral mais alta que a medial',
        'Principal causa anatômica de luxação lateral recorrente',
      ],
      treatment:
        'Trocleoplastia lateral com rebaixamento da faceta lateral convexa. Técnica cirúrgica complexa. Reconstrução do MPFL combinada. Atenção ao nervo e vasos durante abordagem lateral. TTO lateral (antero-medialização) se TTTG aumentado.',
      prognosis:
        'Prognóstico reservado. Risco elevado de luxação lateral recorrente sem correção do padrão cliff. Cirurgia tecnicamente exigente; curva de aprendizado importante.',
      colorCode: 'danger',
    },
    {
      id: 'type-d',
      label: 'Tipo D – Assimétrica + Esporão (Mais Grave)',
      description:
        'Displasia mais grave: combina padrão cliff do Tipo C com esporão supratroclear do Tipo B. Maior risco de instabilidade. Representa características de B + C.',
      criteria: [
        'Assimetria troclear (padrão cliff como Tipo C)',
        'Esporão supratroclear presente (como Tipo B)',
        'Faceta lateral convexa e elevada',
        'Faceta medial hipoplásica',
        'Maior grau de instabilidade patelofemoral',
        'Combinação das características de Tipo B e Tipo C',
      ],
      treatment:
        'Trocleoplastia de grande porte obrigatória (aprofundamento + rebaixamento lateral). Reconstrução do MPFL. Considerar TTO se TTTG >20mm. Abordagem combinada multiplanar na maioria dos casos. Maior risco cirúrgico; considerar encaminhamento para centro especializado.',
      prognosis:
        'Prognóstico mais reservado dos quatro tipos. Maior risco de falha cirúrgica se técnica inadequada. Risco de artrose patelofemoral precoce em longo prazo. Resultados dependem fortemente da experiência do cirurgião e da técnica empregada.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'O sinal do cruzamento (crossing sign) no perfil verdadeiro do joelho é o marco radiográfico fundamental: representa a tróclea rasa cruzando a linha das facetas. TC ou RM são obrigatórias para classificação precisa e planejamento cirúrgico. Medir TTTG (distância tuberosidade tibial – sulco troclear) em todos os casos.',
  pitfall:
    'Não confundir displasia troclear com condromalácia patelar ou síndrome da dor patelofemoral sem instabilidade. A trocleoplastia tem complicações relevantes (rigidez, condromalácia, necrose) e deve ser reservada para displasia de alto grau com instabilidade documentada. Radiografia de perfil deve ser verdadeiramente lateral (côndilos sobrepostos) para identificar o crossing sign.',
  references: [
    {
      authors: 'Dejour H, Walch G, Nove-Josserand L, Guier C',
      title: 'Factors of patellar instability: an anatomic radiographic study',
      journal: 'Knee Surgery, Sports Traumatology, Arthroscopy',
      year: 1994,
    },
    {
      authors: 'Dejour D, Le Coultre B',
      title: 'Osteotomies in patello-femoral instabilities',
      journal: 'Sports Medicine and Arthroscopy Review',
      year: 2007,
    },
  ],
};
