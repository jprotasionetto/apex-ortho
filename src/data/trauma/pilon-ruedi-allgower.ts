import type { ClassificationData } from '@/types/tool';

export const pilonRuediAllgowerData: ClassificationData = {
  id: 'pilon-ruedi-allgower',
  name: 'Classificação de Rüedi-Allgöwer — Pilon Tibial',
  author: 'Rüedi & Allgöwer',
  year: 1969,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I — Articular Sem Desvio (AO/OTA 43C1)',
      description: 'Fratura articular do pilon tibial sem desvio significativo',
      criteria: [
        'Fratura do pilon tibial (tíbia distal articular) com traço articular',
        'Sem desvio significativo da superfície articular',
        'Cominuição mínima ou ausente',
        'Congruência articular mantida — "clivagem" sem deslocamento',
        'AO/OTA: 43C1 (articular completa, articular simples, metáfise simples)',
        'Fratura da fíbula distal frequentemente associada'
      ],
      treatment: 'RAFI se qualquer desvio articular (mínimo = parafusos percutâneos, placa anterolateral). Raramente conservador. Primeiro fixar fíbula para restaurar comprimento. Mobilização precoce do tornozelo.',
      prognosis: 'Bom prognóstico. Baixa taxa de artrose pós-traumática se redução anatômica. Consolidação em 8–12 semanas.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II — Articular Deslocada, Mínima Cominuição (AO/OTA 43C2)',
      description: 'Fratura articular do pilon com desvio e cominuição mínima da superfície',
      criteria: [
        'Fratura articular com desvio (incongruência) da superfície',
        'Cominuição mínima da superfície articular — fragmentos principais passíveis de redução',
        'Impacção metafisária moderada (die-punch possível)',
        'AO/OTA: 43C2 (articular completa, articular simples, metáfise multifragmentária)',
        'Fragmento articular posterior (Volkmann) frequente — avaliar com TC',
        'Subgrupos 43C2: .1 = com impacção assimétrica, .2 = sem impacção, .3 = extensão diafisária'
      ],
      treatment: 'RAFI. Estratégia: 1) Restaurar comprimento fibular (placa lateral/posterolateral). 2) Redução anatômica articular (articulação com articulação). 3) Enxerto ósseo do defeito metafisário. 4) Placa de suporte na tíbia (anterolateral ou medial). Staged approach se edema significativo.',
      prognosis: 'Prognóstico moderado. Resultado depende da qualidade da redução articular. Risco moderado de artrose pós-traumática (20–40%).',
      colorCode: 'caution'
    },
    {
      id: 'type-iii',
      label: 'Tipo III — Articular Cominutiva com Impacção (AO/OTA 43C3)',
      description: 'Fratura articular cominutiva do pilon com impacção significativa',
      criteria: [
        'Cominuição significativa da superfície articular (múltiplos fragmentos)',
        'Impacção articular e metafisária severa',
        'Alta energia (queda de altura, acidente automobilístico com impacção axial)',
        'Frequente lesão SEVERA de tecidos moles (edema massivo, flictenas)',
        'Defeito ósseo metafisário importante',
        'AO/OTA: 43C3 (articular completa, articular multifragmentária, metáfise multifragmentária)',
        'Subgrupos 43C3: .1 = epifisária, .2 = epifisária-metafisária, .3 = epifisária-metafisária-diafisária'
      ],
      treatment: 'Staged approach OBRIGATÓRIO: 1º) RAFI da fíbula + fixador externo spanning (2–3 semanas). 2º) TC com reconstrução 3D para planejamento. 3º) RAFI definitiva quando wrinkle test POSITIVO. Considerar artrodese primária em articulação irreconstrutível. Considerar fixação com placa de suporte anterior (anterolateral) e placa posterolateral.',
      prognosis: 'Prognóstico reservado. Alta taxa de artrose pós-traumática (50–70%). Complicações de tecidos moles até 40% se timing inadequado. Risco de infecção profunda 10–15% mesmo com staged approach.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Estratégia cirúrgica clássica de Rüedi-Allgöwer (4 passos): 1) Restaurar comprimento fibular, 2) Reconstruir superfície articular tibial (articulação com articulação), 3) Preencher defeito metafisário com enxerto, 4) Placa de suporte na tíbia. AO/OTA 43C = fraturas do pilon (tíbia distal, articular completa). TC é mandatória — identificar fragmento de Volkmann posterior e die-punch central.',
  pitfall: 'TIMING CIRÚRGICO é o fator mais importante. Wrinkle test (aparecimento de rugas na pele ao dorsiflexão do tornozelo) deve ser positivo antes da cirurgia aberta. Cirurgia em tecidos edemaciados leva a complicações de ferida em até 40%. Staged approach com fixador externo reduziu complicações dramaticamente.',
  references: [
    {
      authors: 'Rüedi TP, Allgöwer M',
      title: 'Fractures of the lower end of the tibia into the ankle joint',
      journal: 'Injury',
      year: 1969
    },
    {
      authors: 'Rüedi TP, Allgöwer M',
      title: 'The operative treatment of intra-articular fractures of the lower end of the tibia',
      journal: 'Clin Orthop Relat Res',
      year: 1979
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018 (Tibia distal)',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
