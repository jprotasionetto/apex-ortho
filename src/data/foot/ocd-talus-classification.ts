import type { ClassificationData } from '@/types/classification';

export const ocdTalusClassification: ClassificationData = {
  id: 'ocd-talus-classification',
  name: 'Lesões Osteocondrais do Tálus — Berndt-Harty, Ferkel e Hepple',
  author: 'Berndt & Harty / Ferkel / Hepple',
  year: 1959,
  revision: 'Ferkel 1990 / Hepple 1999',
  epidemiology: 'As lesões osteocondrais do tálus (LOT) ocorrem em 0,09% da população, com pico entre 20–30 anos. São mais comuns no terço médio da borda medial (60–70%) e no terço anterior da borda lateral (30–40%). LOT mediais tendem a ser mais profundas e cônicas (trauma de flexão plantar + inversão); LOT laterais são mais rasas e fragmentadas (trauma de dorsiflexão + inversão). Associação com entorse de tornozelo em 50–70% dos casos. Taxa de LOT ocultas após entorse de tornozelo com fratura associada: 6,5%.',
  mechanism: 'LOT lateral: mecanismo de compressão em dorsiflexão + inversão — superfície lateral do tálus comprime-se contra a fíbula. LOT medial: mecanismo de tração + torção em flexão plantar + inversão — traciona-se o ligamento deltóide, arrancando osteocondral posteromedial. Após o trauma inicial, a lesão pode evoluir por ciclos de pressão hidrostática no tecido subcondral, levando a necrose isquêmica, formação de cisto e destacamento do fragmento. A cartilagem avascular depende 100% do líquido sinovial para nutrição.',
  surgicalBasis: 'Tratamento baseado no tamanho e estabilidade da lesão: (1) Lesões estáveis pequenas (<1,5 cm²): microfraturas artroscópicas — estimulam fibrocartilagem, bons resultados em 75–85% dos casos. (2) Lesões maiores ou falha das microfraturas: transplante osteocondral (OAT/mosaicoplastia) — cartilagem hialina real, melhor para lesões >1,5 cm². (3) MACI/ACI (implante de condrócitos autólogos): lesões grandes, jovens. (4) Fragmento grande viável: fixação artroscópica com parafuso reabsorvível ou pino bioabsorvível. Abordagem artroscópica transtibial ou posterolateral dependendo da localização.',
  grades: [
    {
      id: 'berndt-1',
      label: 'Berndt-Harty Estágio I',
      description: 'Compressão subcondral — sem deslocamento, cartilagem intacta',
      criteria: [
        'Radiografia: frequentemente normal ou compressão subcondral mínima',
        'RM: edema ósseo subcondral (sinal baixo T1, alto T2)',
        'Cartilagem articular intacta',
        'Sem fragmento osteocondral visível',
        'TC: pode mostrar esclerose subcondral focal',
        'Lesão isquêmica inicial, reversível'
      ],
      treatment: 'Tratamento conservador: imobilização com bota gessada ou órtese 6–8 semanas, descarga parcial. Taxa de cura com conservador: 45–55%. Reavaliação com RM em 3 meses.',
      prognosis: 'Boa resposta ao tratamento conservador. Resolução completa possível com imobilização adequada.',
      colorCode: 'safe'
    },
    {
      id: 'berndt-2',
      label: 'Berndt-Harty Estágio II',
      description: 'Fragmento osteocondral parcialmente destacado mas ainda preso',
      criteria: [
        'Radiografia: linha de radiolucência parcial abaixo do fragmento',
        'Fragmento osteocondral visível, ainda conectado ao leito',
        'RM: fluido entre fragmento e leito em parte da interface',
        'TC: linha de fratura parcial subcondral',
        'Cartilagem pode estar íntegra',
        'Lesão instável potencial'
      ],
      treatment: 'Conservador tentado por 3–6 meses (descarga total). Se falha: artroscopia com microfraturas no leito. Fixação do fragmento se viável e grande (> 1 cm²).',
      prognosis: 'Resposta moderada ao conservador. 30–40% evoluem para destacamento completo sem tratamento adequado.',
      colorCode: 'caution'
    },
    {
      id: 'berndt-3',
      label: 'Berndt-Harty Estágio III',
      description: 'Fragmento completamente destacado mas não deslocado (in situ)',
      criteria: [
        'Fragmento completamente destacado do leito',
        'Sem deslocamento — permanece no nicho',
        'Linha de radiolucência completa na radiografia',
        'RM: fluido circundando completamente o fragmento',
        'TC: confirmação do destacamento completo',
        'Fragmento potencialmente "solto" mas estacionário'
      ],
      treatment: 'Cirurgia indicada: artroscopia com remoção do fragmento + microfraturas no leito (standard), ou fixação se fragmento grande e viável. Transplante osteocondral para lesões > 1,5 cm². Ausência de resposta ao conservador.',
      prognosis: 'Tratamento conservador falha em > 70%. Cirurgia necessária na maioria. Bons resultados com microfraturas em lesões < 1,5 cm².',
      colorCode: 'danger'
    },
    {
      id: 'berndt-4',
      label: 'Berndt-Harty Estágio IV',
      description: 'Corpo livre — fragmento destacado e deslocado na articulação',
      criteria: [
        'Fragmento completamente deslocado ("rato articular")',
        'Corpo livre visível na articulação do tornozelo',
        'Leito osteocondral exposto, com osso subcondral nu',
        'Bloqueio mecânico da articulação possível',
        'Dor mecânica, crepitação e bloqueios episódicos',
        'Radiografia: fragmento fora do nicho'
      ],
      treatment: 'Cirurgia urgente indicada: artroscopia para remoção do corpo livre + tratamento do leito (microfraturas, mosaicoplastia ou MACI dependendo do tamanho). Corpo livre causa dano condral progressivo.',
      prognosis: 'Risco de artrose progressiva se não tratado. Resultados cirúrgicos dependem do tamanho do defeito remanescente.',
      colorCode: 'danger'
    },
    {
      id: 'ferkel-a',
      label: 'Ferkel Tipo A (Artroscópico) — Cartilagem Lisa, Mole e Intacta',
      description: 'Cartilagem intacta mas amolecida — sinal de ondulação (wave sign) artroscópico',
      criteria: [
        'Artroscopia: cartilagem macroscopicamente intacta',
        'Sinal de amolecimento (softening) ao palpador artroscópico',
        'Sem fissuras, ulcerações ou fragmentação visível',
        'Corresponde a Berndt-Harty I-II na visão artroscópica',
        'RM: edema subcondral sem alteração condral'
      ],
      treatment: 'Perfuração artroscópica transtalar ou microfraturas para estimular vascularização subcondral. Imobilização 6 semanas pós-artroscopia.',
      prognosis: 'Melhor prognóstico entre os tipos de Ferkel. 80–90% de bom resultado com perfuração.',
      colorCode: 'safe'
    },
    {
      id: 'ferkel-b',
      label: 'Ferkel Tipo B — Cartilagem Rugosa e Fibrilada',
      description: 'Cartilagem com fibrilação superficial — grau intermediário de dano condral',
      criteria: [
        'Artroscopia: superfície condral irregular, fibrilada',
        'Fissuras superficiais na cartilagem',
        'Perda de lustre e espelho articular',
        'Corresponds a Outerbridge grau II-III',
        'Sem exposição de osso subcondral'
      ],
      treatment: 'Desbridamento artroscópico + microfraturas. Transplante osteocondral considerado se jovem com lesão > 1,5 cm².',
      prognosis: 'Resultados moderados. 65–75% de satisfação com microfraturas.',
      colorCode: 'caution'
    },
    {
      id: 'ferkel-c',
      label: 'Ferkel Tipo C — Fragmento Parcialmente Destacado (Abaulamento)',
      description: 'Flap condral ou fragmento parcialmente solto com abaulamento',
      criteria: [
        'Flap de cartilagem com fragmento osteocondral abaulado',
        'Fragmento parcialmente solto — move ao palpador',
        'Interface osteocondral comprometida',
        'Correspondência com Berndt-Harty II-III',
        'Risco de corpo livre'
      ],
      treatment: 'Remoção do flap instável + curetagem do leito + microfraturas. Fixação se fragmento viável e grande.',
      prognosis: 'Resultados variáveis. Lesões grandes (> 1,5 cm²) se beneficiam de transplante osteocondral.',
      colorCode: 'danger'
    },
    {
      id: 'ferkel-d',
      label: 'Ferkel Tipo D — Fragmento Completamente Destacado sem Deslocamento',
      description: 'Fragmento solto in situ — completamente destacado mas no nicho',
      criteria: [
        'Fragmento completamente solto ao palpador',
        'Permanece no nicho sem deslocamento',
        'Leito osteocondral totalmente exposto',
        'Corresponde a Berndt-Harty III',
        'Risco iminente de migração'
      ],
      treatment: 'Remoção artroscópica + microfraturas ou transplante osteocondral. Fixação se fragmento grande e viável.',
      prognosis: 'Cirurgia necessária. Prognóstico dependente do tamanho do defeito.',
      colorCode: 'danger'
    },
    {
      id: 'hepple-1',
      label: 'Hepple Estágio 1 (RM) — Lesão Condral sem Dano Ósseo',
      description: 'Lesão isolada da cartilagem articular na RM — osso subcondral normal',
      criteria: [
        'RM: alteração de sinal apenas na cartilagem articular',
        'T2: sinal alto na cartilagem (edema ou fissura condral)',
        'Osso subcondral: sinal normal',
        'Sem edema ósseo',
        'Rx e TC normais',
        'Lesão condral pura — mais difícil de detectar'
      ],
      treatment: 'Tratamento conservador 3–6 meses. Se falha: artroscopia com debridamento condral + microfraturas focais.',
      prognosis: 'Melhor prognóstico — lesão mais precoce. Boa resposta ao conservador em 50–60%.',
      colorCode: 'safe'
    },
    {
      id: 'hepple-2a',
      label: 'Hepple Estágio 2A (RM) — Fragmento Osteocondral com Edema Subcondral',
      description: 'Fragmento osteocondral na RM com edema ósseo subcondral — sem fluido na interface',
      criteria: [
        'RM T1: linha hipointensa subcondral (fragmento)',
        'RM T2: edema ósseo subcondral',
        'Sem fluido entre fragmento e leito (lesão estável)',
        'Cartilagem pode estar íntegra ou com fissura',
        'Rx: pode mostrar esclerose focal'
      ],
      treatment: 'Conservador com descarga por 8–12 semanas. Controle com RM em 3 meses. Se sem melhora: artroscopia.',
      prognosis: 'Lesão estável — 45–55% de resolução com conservador.',
      colorCode: 'caution'
    },
    {
      id: 'hepple-2b',
      label: 'Hepple Estágio 2B (RM) — Fragmento com Edema e Linha de Fluido',
      description: 'Fragmento osteocondral com fluido parcial na interface — início de instabilidade',
      criteria: [
        'RM T2: linha de fluido parcial na interface fragmento-leito',
        'Edema ósseo subcondral',
        'Cartilagem frequentemente fissura',
        'Lesão em transição para instabilidade',
        'Distingue-se do 2A pela presença de fluido'
      ],
      treatment: 'Artroscopia indicada na maioria: desbridamento + microfraturas. Se fragmento viável: fixação.',
      prognosis: 'Risco de progressão sem cirurgia. Resultados cirúrgicos bons (75–80%).',
      colorCode: 'caution'
    },
    {
      id: 'hepple-3',
      label: 'Hepple Estágio 3 (RM) — Fragmento Destacado sem Deslocamento',
      description: 'Fragmento completamente cercado por fluido na RM mas in situ',
      criteria: [
        'RM T2: fluido circundando completamente o fragmento',
        'Fragmento osteocondral in situ mas instável',
        'Leito osteocondral exposto',
        'Cisto subcondral pode estar presente',
        'Corresponde a Berndt-Harty III'
      ],
      treatment: 'Cirurgia: remoção do fragmento + microfraturas ou transplante. Fixação se fragmento grande e viável (> 1 cm²) em jovens.',
      prognosis: 'Tratamento cirúrgico necessário. 70–80% de bons resultados com cirurgia.',
      colorCode: 'danger'
    },
    {
      id: 'hepple-4',
      label: 'Hepple Estágio 4 (RM) — Corpo Livre',
      description: 'Fragmento destacado e deslocado — corpo livre na articulação',
      criteria: [
        'RM: fragmento fora do nicho osteocondral',
        'Leito exposto visível na RM',
        'Corpo livre na articulação',
        'Sintomas mecânicos: bloqueio, ressalto',
        'Rx pode mostrar o fragmento solto'
      ],
      treatment: 'Artroscopia urgente para remoção do corpo livre + tratamento do leito. Mosaicoplastia ou MACI para defeitos grandes.',
      prognosis: 'Artrose progressiva sem cirurgia. Resultados bons com cirurgia precoce.',
      colorCode: 'danger'
    },
    {
      id: 'hepple-5',
      label: 'Hepple Estágio 5 (RM) — Cisto Subcondral',
      description: 'Lesão com cisto subcondral — necrose e liquefação do osso abaixo da cartilagem',
      criteria: [
        'RM: cisto subcondral bem definido (T2 alto)',
        'Pode ou não ter fragmento osteocondral associado',
        'Destruição do suporte ósseo subcondral',
        'Cartilagem suprajacente comprometida',
        'Mais frequente em lesões mediais crônicas'
      ],
      treatment: 'Tratamento mais complexo: curetagem do cisto + enxerto ósseo esponjoso + microfraturas, ou transplante osteocondral (OAT de côndilo femoral do joelho). MACI para defeitos grandes em jovens.',
      prognosis: 'Pior prognóstico da classificação de Hepple. Maior risco de artrose precoce. Resultados com transplante osteocondral: 75–85% bons em 5 anos.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'A LOT deve ser investigada em toda entorse de tornozelo que não melhora em 6 semanas. A RM é o exame gold-standard (Hepple). O tamanho da lesão é o principal preditor de resultado: lesões < 1,5 cm² respondem bem às microfraturas; lesões maiores necessitam transplante osteocondral.',
  pitfall: 'Não confiar apenas na radiografia — Berndt-Harty I e II frequentemente são radiograficamente normais. 30–50% das LOT são invisíveis no Rx. RM com sequências cartilagem (fat-sat, T2) é essencial para o estadiamento correto.',
  references: [
    { id: 'r1', text: 'Berndt AL, Harty M. Transchondral fractures (osteochondritis dissecans) of the talus. J Bone Joint Surg Am. 1959;41-A:988-1020.' },
    { id: 'r2', text: 'Ferkel RD, Sgaglione NA. Arthroscopic treatment of osteochondral lesions of the talus: long-term results. Orthop Trans. 1990;14:172-173.' },
    { id: 'r3', text: 'Hepple S, Winson IG, Glew D. Osteochondral lesions of the talus: a revised classification. Foot Ankle Int. 1999;20(12):789-793.' },
    { id: 'r4', text: 'Zengerink M, et al. Treatment of osteochondral lesions of the talus: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2010;18(2):238-246.' }
  ]
};
