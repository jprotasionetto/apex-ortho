import type { ClassificationData } from '@/types/classification.ts';

export const herbertScaphoidClassificationData: ClassificationData = {
  id: 'herbert-scaphoid-classification',
  name: 'Classificação de Herbert — Fraturas do Escafoide',
  author: 'Herbert & Fisher',
  year: 1984,
  revision: 'Herbert & Fisher revisão (1990) — adição Tipo D3',
  epidemiology:
    'Fraturas do escafoide são as fraturas carpal mais comuns: 60–70% de todas as fraturas do carpo. Incidência: ~4/100.000/ano; considerada subestimada pela alta taxa de subdiagnóstico inicial. Pico: homens jovens 20–30 anos (quedas esportivas, FOOSH). Relação M:F 4:1. Distribuição: terço médio (cintura) 65–75%, polo proximal 15–25%, polo distal 10%. A pseudoartrose é a principal complicação: 5–15% das fraturas da cintura; 20–40% das fraturas do polo proximal — se não tratada corretamente. Causa de pseudoartrose: diagnóstico tardio (RX normal em 20% na apresentação aguda) + suprimento vascular deficiente do polo proximal. Necrose avascular (NAV) do polo proximal em 13–50% das fraturas tipo B4 (polo proximal). Doença de Kienböck e SNAC wrist (Scaphoid Non-union Advanced Collapse) são as sequelas tardias. "Anatomical snuffbox tenderness" = sinal clínico mais sensível (90%) mas pouco específico para fratura do escafoide aguda.',
  mechanism:
    'Mecanismo clássico: queda com a mão espalmada no chão (FOOSH — Fall On OutStretched Hand) com dorsiflexão forçada do punho + desvio radial. O polo proximal do escafoide fica fixo na fossa escafoidal do rádio enquanto o polo distal acompanha o movimento do carpo distal → cisalhamento na cintura (ponto de menor resistência). Suprimento vascular do escafoide: 70–80% por entrada DORSAL (ramo da artéria radial → entrada pelo dorso da cintura → irrigação proximal retrógrada). O polo proximal é COMPLETAMENTE dependente dessa irrigação retrógrada → qualquer fratura proximal à cintura = risco alto de isquemia do polo proximal. Fraturas do polo distal (tubérculo) = extraarticulares + excelente vascularização = consolidação confiável. Diagnóstico tardio = pseudoartrose por fibrocartilagem interposta na linha de fratura que impede consolidação. RNM é o gold standard para fratura oculta: sensibilidade 97–100%, especificidade 89–96% — indicar se RX negativo mas clínica positiva após 2 semanas de imobilização.',
  surgicalBasis:
    'Algoritmo de Herbert baseado em estabilidade. Tipo A (estável = sem desvio): imobilização gessada 8–12 semanas. Tipo B (instável = desvio ≥ 1mm, perpendicular, ângulo SL > 60° ou RL > 15°): RAFI com parafuso Herbert (compressão diferencial) ou cannulated screw (Acutrak, AO 3.0mm). Tipo C (pseudoartrose precoce < 6 meses): gesso por mais 12 semanas OU parafuso Herbert sozinho. Tipo D (pseudoartrose estabelecida > 6 meses): cirurgia obrigatória — D1 (fibrose, sem colapso): curetagem + enxerto esponjoso + parafuso Herbert; D2 (necrose, colapso): Russe grafting (enxerto corticoesponjoso ilíaco); D3 (avascular + SNAC): enxerto vascularizado (MFC — medial femoral condyle, ou 1,2-ICSRA) + parafuso. SNAC wrist avançado: salvamento (ressecção da fileira proximal, 4-corner fusion, ou artrodese total).',
  grades: [
    {
      id: 'herbert-a1',
      label: 'Herbert A1 — Fratura Tuberosidade (Polo Distal)',
      description:
        'Fratura do tubérculo do polo distal — extraarticular, estável, vascularização excelente',
      criteria: [
        'Fratura do tubérculo do polo distal do escafoide',
        'Localização extraarticular',
        'Sem desvio (< 1mm)',
        'Vascularização excelente pela entrada distal',
        'Frequentemente avulsão pelo ligamento radioescafoide capitato',
        'RX: linha radiotransparente na projeção PA com desvio radial (incidência específica)',
      ],
      treatment:
        'Imobilização gessada antebraquial com polegar por 4–6 semanas. Não requer cirurgia. Consolidação confiável.',
      prognosis: 'Excelente. Consolidação praticamente universal. Sequelas raras.',
      colorCode: 'safe',
    },
    {
      id: 'herbert-a2',
      label: 'Herbert A2 — Fratura Incompleta da Cintura (Fissurada)',
      description:
        'Fratura fissurada incompleta da cintura do escafoide — estável sem desvio',
      criteria: [
        'Fratura incompleta ou fissurada da cintura do escafoide',
        'Sem desvio (< 1mm)',
        'Cortical posterior intacta',
        'Estabilidade do ligamento escafolunato mantida',
        'RX pode ser normal — RNM ou TC para confirmar',
        'Sensibilidade na tabaqueira anatômica com compressão axial do polegar',
      ],
      treatment:
        'Imobilização gessada (escafoidite) por 8–12 semanas. Controle radiográfico seriado. Avaliação por TC em 6–8 semanas para confirmar consolidação. Cirurgia se falha conservadora (desvio secundário ou não consolidação em TC).',
      prognosis: 'Bom. Taxa de consolidação 90–95% com gesso adequado.',
      colorCode: 'safe',
    },
    {
      id: 'herbert-b1',
      label: 'Herbert B1 — Fratura Oblíqua Distal (Instável)',
      description:
        'Fratura oblíqua do polo distal ou cintura distal — instável pelo componente de cisalhamento',
      criteria: [
        'Fratura oblíqua da porção distal do escafoide',
        'Traço oblíquo que confere instabilidade ao fragmento',
        'Desvio ≥ 1mm ou instabilidade ao teste de estresse',
        'Mecanismo de cisalhamento > compressão pura',
        'Pode ser intraarticular',
        'TC para avaliar instabilidade real',
      ],
      treatment:
        'RAFI com parafuso de compressão (Herbert, Acutrak, AO 3.0mm cannulated). Abordagem volar (incisão radial à FCR). Imobilização curta 4–6 semanas pós-op.',
      prognosis: 'Bom com fixação. Retorno às atividades em 3–4 meses.',
      colorCode: 'caution',
    },
    {
      id: 'herbert-b2',
      label: 'Herbert B2 — Fratura Completa da Cintura (Deslocada)',
      description:
        'Fratura completa e deslocada da cintura do escafoide — a mais comum das instáveis',
      criteria: [
        'Fratura completa da cintura do escafoide com desvio',
        'Desvio ≥ 1mm entre fragmentos',
        'Ângulo escafolunato (SL) > 60° ou radio-lunato (RL) > 15° = DISI pattern',
        'Instabilidade ligamentar escafolunato possível associada',
        'TC: desvio em 3D + angulação "humpback deformity" (cifose do escafoide)',
        'Risco significativo de pseudoartrose sem fixação',
      ],
      treatment:
        'RAFI com parafuso de compressão diferencial (Herbert, Acutrak 4.7–3.5mm). Abordagem volar ou dorsal conforme deformidade. Correção da deformidade "humpback" com posicionamento intraoperatório. Imobilização 6–8 semanas.',
      prognosis:
        'Bom com fixação precoce e anatômica. Pseudoartrose em 10–20% sem tratamento.',
      colorCode: 'caution',
    },
    {
      id: 'herbert-b3',
      label: 'Herbert B3 — Fratura do Polo Proximal',
      description:
        'Fratura do polo proximal — alto risco de necrose avascular pela vascularização dependente retrógrada',
      criteria: [
        'Fratura do polo proximal do escafoide (1/3 proximal)',
        'Suprimento vascular 100% dependente da irrigação retrógrada pelo dorso da cintura',
        'Qualquer desvio = risco elevado de NAV do polo proximal',
        'TC: confirmar localização exata do traço e fragmento proximal',
        'RNM: avaliar vitalidade do polo proximal (hipossinal T1 = NAV iminente)',
        'Fragmento proximal frequentemente muito pequeno',
      ],
      treatment:
        'RAFI urgente (<2 semanas): abordagem dorsal, parafuso Herbert/Acutrak orientado polo proximal → distal. Gesto técnico delicado pelo tamanho reduzido do polo. Imobilização 8–12 semanas. Bifosfonatos contraindicados pós-op (prejudicam consolidação).',
      prognosis:
        'Moderado a reservado. NAV em 13–50%. Pseudoartrose em 20–40% sem cirurgia precoce. Bom resultado com fixação precoce e polo proximal viável.',
      colorCode: 'danger',
    },
    {
      id: 'herbert-b4',
      label: 'Herbert B4 — Fratura Trans-escafoperilunato (Luxação)',
      description:
        'Fratura do escafoide associada a luxação perilunar — lesão de alta energia com instabilidade carpal severa',
      criteria: [
        'Fratura do escafoide associada a luxação perilunar',
        'Lesão do arco perilunar (Mayfield estágio III-IV)',
        'Instabilidade carpal marcada',
        'Possível lesão dos ligamentos escafolunato e lunotriquetral',
        'RX: fratura escafoide + posição anormal do lunato (luxação)',
        'TC + RNM para mapear todas as lesões ligamentares',
      ],
      treatment:
        'Emergência cirúrgica: redução da luxação + RAFI do escafoide + reparo ligamentar (via combinada dorsal + volar). Síntese dos ligamentos escafolunato e lunotriquetral com âncoras. Imobilização 12 semanas.',
      prognosis:
        'Reservado. Alta taxa de artrose intercárpica e SLAC/SNAC wrist mesmo com tratamento adequado. Resultado funcional depende da qualidade da redução e do reparo ligamentar.',
      colorCode: 'danger',
    },
    {
      id: 'herbert-c',
      label: 'Herbert C — Pseudoartrose Precoce (< 6 meses)',
      description:
        'Ausência de consolidação com < 6 meses de evolução — sem deformidade ou necrose',
      criteria: [
        'Fratura do escafoide sem consolidação em < 6 meses',
        'TC: linha de fratura persistente sem calo ósseo',
        'Sem deformidade "humpback"',
        'Polo proximal viável (RNM: sinal T1 normal)',
        'Fibrocartilagem preenchendo a linha de fratura (impedem consolidação)',
        'Paciente frequentemente assintomático ou dor leve',
      ],
      treatment:
        'Gesso por mais 8–12 semanas se polo viável e alinhamento adequado. OU RAFI com parafuso compressão (sem enxerto) se traço adequado. Estimulação elétrica (baixa evidência).',
      prognosis:
        'Moderado. Consolidação possível mas menos confiável que fratura aguda.',
      colorCode: 'caution',
    },
    {
      id: 'herbert-d1',
      label: 'Herbert D1 — Pseudoartrose com Fibrose (> 6 meses)',
      description:
        'Pseudoartrose estabelecida > 6 meses com fibrose na linha de fratura — polo proximal viável',
      criteria: [
        'Ausência de consolidação com > 6 meses de evolução',
        'Fibrose ou fibrocartilagem na linha de fratura',
        'TC: cisto(s) na linha de fratura, esclerose nas bordas',
        'Polo proximal VIÁVEL (RNM T1 preservado — hipossinal apenas T2 = edema)',
        'Sem colapso significativo do escafoide',
        'Dor ao esforço, diminuição da força de preensão',
      ],
      treatment:
        'Cirurgia: curetagem da fibrose + enxerto ósseo esponjoso autólogo (crista ilíaca ou rádio distal) + parafuso Herbert de compressão. Técnica de Matti-Russe ou Fernandez.',
      prognosis: 'Bom com enxerto e fixação. Taxa de consolidação 80–90%.',
      colorCode: 'danger',
    },
    {
      id: 'herbert-d2',
      label: 'Herbert D2 — Pseudoartrose com Necrose Parcial',
      description:
        'Pseudoartrose estabelecida com necrose avascular parcial do polo proximal',
      criteria: [
        'Pseudoartrose > 6 meses com sinais de NAV no polo proximal',
        'RNM: hipossinal em T1 no polo proximal (necrose)',
        'TC: colapso, esclerose e cistos no polo proximal',
        'Possível deformidade "humpback" (cifose do escafoide)',
        'Carpo distal pode começar a colapsar (SNAC I)',
        'Dor persistente com fraqueza significativa',
      ],
      treatment:
        'Enxerto ósseo VASCULARIZADO: enxerto do côndilo femoral medial pediculado (MFC — gold standard atual) ou enxerto 1,2-ICSRA da região dorsal do rádio. Parafuso Herbert. Tempo cirúrgico longo — altamente especializado.',
      prognosis:
        'Moderado. Taxa de consolidação 70–85% com enxerto vascularizado experiente. Resultado pior que D1.',
      colorCode: 'danger',
    },
    {
      id: 'herbert-d3',
      label: 'Herbert D3 — SNAC Wrist (Artrose Avançada)',
      description:
        'Sequela final: SNAC wrist (Scaphoid Non-union Advanced Collapse) — artrose radioescafoidal e intercárpica',
      criteria: [
        'Pseudoartrose de longa data com artrose estabelecida',
        'SNAC I: artrose radioescafoidal na estilóide (borda dorsal)',
        'SNAC II: artrose radioescafoidal + capitolunata',
        'SNAC III: artrose pancarpal',
        'RX: estreitamento do espaço articular + osteófitos + esclerose',
        'Limitação funcional significativa com dor constante',
      ],
      treatment:
        'SNAC I-II: ressecção da fileira proximal do carpo (PRC) — preserva mobilidade; ou artrodese dos 4 cantos (4-corner fusion = capitato+hamato+lunato+triquetro) + excisão do escafoide. SNAC III: artrodese total do punho (elimina dor, sacrifica mobilidade).',
      prognosis:
        'Reservado para preservação. Bom controle da dor com ressecção ou artrodese. PRC: 70% de satisfação com 50% da ADM preservada.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'Regra dos 2: desvio > 2mm, ângulo SL > 60°, ângulo RL > 15° = INSTÁVEL = B2 = cirurgia. RX normal com dor na tabaqueira anatômica = TRATAR como fratura até RNM confirmar: imobilizar + solicitar RNM em 48–72h (não esperar 2 semanas para repetir RX — taxa de pseudoartrose dobra com diagnóstico tardio). O parafuso Herbert é "compressivo diferencial" porque tem dois filetes de passo diferente — o proximal avança mais rápido que o distal, gerando compressão interfragmentária automaticamente durante a inserção.',
  pitfall:
    'RX normal NÃO exclui fratura do escafoide aguda — sensibilidade do RX é apenas 60–70%. Gesso "short arm" (sem polegar) É INSUFICIENTE para fraturas da cintura e polo proximal — usar gesso com polegar ou cirurgia. Fratura do polo proximal: diagnóstico tardio > 4 semanas = risco de NAV dramaticamente aumentado. Não pedir RNM "de rotina" depois de 6 semanas — pedir IMEDIATAMENTE se alta suspeita clínica.',
  references: [
    {
      authors: 'Herbert TJ, Fisher WE',
      title: 'Management of the fractured scaphoid using a new bone screw',
      journal: 'J Bone Joint Surg Br',
      year: 1984,
    },
    {
      authors: 'Herbert TJ',
      title: 'Use of the Herbert bone screw in surgery of the wrist',
      journal: 'Clin Orthop',
      year: 1986,
    },
    {
      authors: 'Ramamurthy C, et al.',
      title:
        'Factors that influence the union and functional outcome of Herbert screw fixation for scaphoid fractures',
      journal: 'J Hand Surg Eur',
      year: 2007,
    },
  ],
};
