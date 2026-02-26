import type { ClassificationData } from '@/types/classification';

export const ocdKneeClassificationData: ClassificationData = {
  id: 'ocd-knee-classification',
  name: 'Lesão Osteocondral do Joelho — Classificação OCD (Juvenil/Adulto)',
  author: 'Clanton & DeLee / ICRS / Guhl',
  year: 1982,
  epidemiology:
    'Osteocondrite dissecante (OCD) do joelho é a lesão osteocondral mais comum do joelho em jovens atletas. Incidência: 15–29/100.000 adolescentes/ano; relação homem:mulher de 3:1. Localização clássica: côndilo femoral medial, face lateral (60–70%); côndilo femoral lateral (15–20%); patela (5–10%); côndilo medial face central (10%). Forma juvenil (fise aberta) tem prognóstico muito melhor: ~50–94% de resolução espontânea com tratamento conservador. Forma adulta (fise fechada): tendência à fragmentação e não consolidação — indicação cirúrgica mais frequente. Tamanho da lesão é o principal preditor: < 2 cm² consolidam melhor (>80%); > 4 cm² ou fragmentos instáveis têm indicação cirúrgica. O côndilo femoral medial é nutrido pela artéria genicular superior medial — tortuosidade e compressão por impacto repetitivo explicam a isquemia focal.',
  mechanism:
    'Etiologia multifatorial: (1) Microtrauma repetitivo — impacto da espinha tibial posterior sobre o côndilo femoral medial em extensão-rotação (mecanismo de Wilson); (2) Isquemia focal por compressão vascular no osso subcondral; (3) Predisposição genética (casos familiares relatados). Fisiopatologia: necrose do osso subcondral → separação da cartilagem + osso necrótico = fragmento OCD → progressão: fragmento in situ estável → fragmento parcialmente destacado instável → fragmento solto (corpo livre intra-articular). O sinal de Wilson (dor à extensão com tíbia em rotação interna, aliviada com rotação externa) é positivo em ~90% dos casos sintomáticos de OCD do côndilo medial. Fatores de mau prognóstico: fise fechada (adulto), lesão > 2 cm², localização lateral do côndilo medial, fragmento destacado.',
  surgicalBasis:
    'Algoritmo baseado em 3 variáveis: (1) Estabilidade do fragmento; (2) Maturidade esquelética (juvenil vs adulto); (3) Tamanho. OCD estável (Guhl I–IIA / ICRS I–II): 6–12 meses conservador → se falha → fixação percutânea (parafusos Herbert ou cabeçados reabsorvíveis) ± perfurações retrógradas (drilling de Bandi). OCD instável com fragmento viável (Guhl IIB–III / ICRS III): RAFI com fixação do fragmento (fragmentos >1 cm²) OU microfraturas/perfurações se fragmento não viável (<1 cm²). Fragmento destacado (corpo livre, Guhl IV / ICRS IV): remoção do corpo livre + tratamento da lesão osteocondral de base — microfraturas se < 2 cm², osteocondral autólogo (OATS) se 2–4 cm², aloenxerto osteocondral ou MACI se > 4 cm² ou falha de microfraturas.',
  grades: [
    // ─── Guhl (Artroscópica) ───────────────────────────────────────────────
    {
      id: 'guhl-i',
      label: 'Guhl I — Intacta / Amolecida',
      description: 'Cartilagem intacta, fragmento in situ sem instabilidade',
      criteria: [
        'Cartilagem intacta e íntegra à sondagem',
        'Fragmento in situ sem instabilidade',
        'Osso subcondral pode mostrar amolecimento à pressão',
        'Sem falha na cartilagem',
        'Artroscopicamente: tecido normal ou amolecido sem depressão',
      ],
      treatment:
        'Conservador: descarga por 6–12 semanas, fisioterapia, restrição de atividades de impacto. Perfurações retrógradas (drilling de Bandi) se falha conservadora após 6 meses.',
      prognosis:
        'Excelente na forma juvenil (>85% de resolução). Adultos: menor taxa de resolução espontânea.',
      colorCode: 'safe',
    },
    {
      id: 'guhl-iia',
      label: 'Guhl IIA — Fissura Cartilaginosa Estável',
      description: 'Fissura na cartilagem sem deslocamento — fragmento estável à sondagem',
      criteria: [
        'Fissura na cartilagem sem deslocamento',
        'Fragmento estável à sondagem (palpação com gancho)',
        'Sem mobilidade do fragmento sob pressão',
        'Cartilagem com falha linear mas aderida ao leito',
      ],
      treatment:
        'Perfurações trans-cartilaginosas (drilling anterógrado ou retrógrado) ± fixação com parafusos reabsorvíveis ou metálicos de pequeno perfil. 6 semanas de descarga pós-op.',
      prognosis: 'Bom. Alta taxa de consolidação com tratamento cirúrgico (>80%).',
      colorCode: 'caution',
    },
    {
      id: 'guhl-iib',
      label: 'Guhl IIB — Retalho Parcialmente Instável',
      description: 'Fragmento parcialmente destacado — "alça de balde" (trapdoor)',
      criteria: [
        'Fragmento parcialmente destacado — "alça de balde" (trapdoor)',
        'Instável mas ainda conectado por ponte de cartilagem',
        'Líquido sinovial infiltra sob o fragmento',
        'À sondagem: fragmento move mas não destaca completamente',
        'Osso subcondral necrótico visível sob o fragmento',
      ],
      treatment:
        'Cirúrgico: desbridamento da interface, curetagem do leito + enxerto de osso esponjoso + fixação firme do fragmento com parafusos reabsorvíveis ou Herbert. Descarga 6 semanas.',
      prognosis: 'Moderado. Depende da viabilidade e qualidade do fragmento.',
      colorCode: 'caution',
    },
    {
      id: 'guhl-iii',
      label: 'Guhl III — Fragmento In Situ Necrótico',
      description: 'Fragmento osteocondral destacado mas in situ — osso necrótico visível',
      criteria: [
        'Fragmento osteocondral destacado mas IN SITU (ainda no leito)',
        'Osso necrótico no fragmento (bege/branco, sem sangramento ao desbridamento)',
        'Leito côncavo exposto com fibrose',
        'Circulação comprometida no fragmento',
        'Artroscopia: fragmento móvel no leito original',
      ],
      treatment:
        'Cirúrgico: se fragmento viável (>1 cm²) — RAFI após curetagem e enxerto. Se fragmento não viável (<1 cm²) — remoção + microfraturas/perfurações do leito. Avaliação de viabilidade com fluoroscopia (sangramento após fresagem).',
      prognosis: 'Reservado. Depende da viabilidade do fragmento e tamanho da lesão.',
      colorCode: 'danger',
    },
    {
      id: 'guhl-iv',
      label: 'Guhl IV — Corpo Livre (Fragmento Destacado)',
      description: 'Fragmento completamente destacado — corpo livre intra-articular',
      criteria: [
        'Fragmento completamente destacado do leito',
        'Corpo livre intra-articular (pode estar em qualquer recessus)',
        'Leito de OCD exposto — cratera osteocondral',
        'Bloqueio articular ou derrame recorrente frequentes',
        'Fragmento pode ter crescido por nutrição sinovial (alotriosteose)',
      ],
      treatment:
        'Remoção do corpo livre. Tratamento do leito: microfraturas se < 2 cm², OATS (mosaicoplastia) se 2–4 cm², aloenxerto osteocondral ou MACI se > 4 cm².',
      prognosis: 'Reservado. Risco de artrose precoce proporcional ao tamanho da lesão.',
      colorCode: 'danger',
    },
    // ─── ICRS OCD ─────────────────────────────────────────────────────────
    {
      id: 'icrs-i',
      label: 'ICRS OCD I — Cartilagem Estável com Lesão de Continuidade',
      description: 'Cartilagem contínua — amolecimento superficial sem solução de continuidade',
      criteria: [
        'Cartilagem contínua — sem solução de continuidade macroscópica',
        'Amolecimento da superfície cartilaginosa (± balonamento)',
        'Sondagem: cartilagem compressível mas intacta',
        'Sinal de imagem: edema subcondral mas cartilagem íntegra',
        'Corresponde a Guhl I e início de IIA',
      ],
      treatment: 'Conservador: 3–6 meses. Drilling retrógrado se sem melhora em imagem.',
      prognosis: 'Excelente na forma juvenil.',
      colorCode: 'safe',
    },
    {
      id: 'icrs-ii',
      label: 'ICRS OCD II — Fragmento Estável com Fissura Parcial',
      description: 'Fissura na cartilagem — fragmento estável (< 50% perímetro destacado)',
      criteria: [
        'Fissura na cartilagem mas fragmento estável (< 50% perímetro destacado)',
        'Sondagem: sem mobilidade expressiva',
        'Fragmento com menos de metade do contorno descolado',
        'Sem infiltração de líquido sob o fragmento',
      ],
      treatment:
        'Cirúrgico: drilling + parafusos reabsorvíveis na maioria. Drilling retrógrado guiado por TC/artroscopia se cartilagem intacta.',
      prognosis: 'Bom. Taxa de consolidação >80% com fixação adequada.',
      colorCode: 'caution',
    },
    {
      id: 'icrs-iii',
      label: 'ICRS OCD III — Fragmento Instável Parcialmente Destacado',
      description: 'Fragmento instável com > 50% do perímetro destacado (trapdoor)',
      criteria: [
        'Fragmento instável com > 50% do perímetro destacado ("trapdoor")',
        'Sondagem: mobilidade clara do fragmento',
        'Líquido sinovial sob o fragmento (sinal de T2 elevado na RNM)',
        'Fragmento ainda conectado por ponte de tecido',
        'Indica RNM para avaliar viabilidade',
      ],
      treatment:
        'RAFI obrigatória se fragmento viável. Curetagem do leito + enxerto esponjoso + fixação.',
      prognosis: 'Moderado. Melhor resultado com fixação precoce.',
      colorCode: 'danger',
    },
    {
      id: 'icrs-iv',
      label: 'ICRS OCD IV — Fragmento Solto (Corpo Livre)',
      description: 'Fragmento completamente destacado — cratera osteocondral exposta',
      criteria: [
        'Fragmento completamente destacado — dentro ou fora do leito',
        'Cratera osteocondral exposta',
        'Corpo livre intra-articular (pode ser sintomático ou não)',
        'Leito necrótico/fibrótico',
      ],
      treatment:
        'Remoção do corpo livre + restauração osteocondral do leito conforme tamanho.',
      prognosis: 'Reservado. Risco de artrose pós-traumática.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'Regra prática: fragmento ESTÁVEL (Guhl I–IIA / ICRS I–II) em esqueleto IMATURO → conservador por 6–12 meses (chance de resolução >50%). Fragmento INSTÁVEL ou ADULTO → cirurgia. Teste de Wilson positivo: dor à extensão com rotação interna, aliviada em rotação externa — sinal clínico clássico para OCD côndilo medial. RNM é OBRIGATÓRIA para estadiar a estabilidade do fragmento: sinal T2 elevado na interface = instabilidade.',
  pitfall:
    'Confundir OCD com variante normal (centro de ossificação acessório, ossificação irregular do côndilo em adolescentes). Sinal de Wilson é falso-negativo em lesões laterais (côndilo medial lateral) e lesões patela. OCD juvenil ≠ OCD adulto — o prognóstico conservador é radicalmente diferente. Tamanho da lesão na RNM deve ser medido em 3 planos para calcular a área real (não apenas o diâmetro).',
  references: [
    {
      id: 'r1',
      text: 'Clanton TO, DeLee JC. Osteochondritis dissecans. History, pathophysiology and current treatment concepts. Clin Orthop Relat Res. 1982.',
    },
    {
      id: 'r2',
      text: 'Brittberg M, Winalski CS. Evaluation of cartilage injuries and repair. J Bone Joint Surg Am. 2003 (ICRS grading).',
    },
    {
      id: 'r3',
      text: 'Hefti F, et al. Osteochondritis dissecans: a multicenter study of the European Pediatric Orthopedic Society. J Pediatr Orthop B. 1999.',
    },
    {
      id: 'r4',
      text: 'Krause M, et al. ICRS OCD Study Group Classification of osteochondritis dissecans. Knee Surg Sports Traumatol Arthrosc. 2013.',
    },
  ],
};
