import type { GuideData } from '@/types/guide';

export const orthopedicAnglesData: GuideData = {
  id: 'orthopedic-angles',
  name: 'Ângulos Ortopédicos',
  description: 'Referência completa de ângulos e medidas radiográficas ortopédicas por região anatômica: valores normais, técnica de medição e significado clínico',
  sections: [
    // ─── QUADRIL ────────────────────────────────────────────────────────────────
    {
      id: 'hip-cea',
      title: 'Ângulo Centro-Borda de Wiberg (CEA/LCE) — Quadril',
      content: [
        'Medição: ângulo entre a linha vertical que passa pelo centro da cabeça femoral e a linha que une o centro da cabeça ao lábio acetabular lateral (sourcil)',
        'Incidência: AP de bacia em ortostatismo, com rotação neutra dos membros',
        'Normal: 25–40°',
        '< 20° = displasia acetabular (cobertura insuficiente da cabeça femoral)',
        '20–25° = zona limítrofe (considerar impacto clínico e sintomas)',
        '> 40° = pincer (sobrecobertura acetabular, risco de FAI tipo pincer)',
        'Uso clínico: planejamento de osteotomia periacetabular (OPA/PAO) e avaliação de displasia do quadril do adulto'
      ],
      keyPoints: [
        'Normal: 25–40° | Displasia: < 20° | Pincer: > 40°',
        'Medido no AP de bacia em ortostatismo',
        'Valor < 25° com sintomas = indicação potencial de PAO'
      ],
      colorCode: 'info'
    },
    {
      id: 'hip-ccd',
      title: 'Ângulo Colo-Diáfise (CCD / Neck-Shaft Angle) — Quadril',
      content: [
        'Medição: ângulo entre o eixo do colo femoral e o eixo da diáfise femoral, medido no AP de quadril em rotação neutra',
        'Normal adulto: 120–135° (média ~127°)',
        '> 135° = coxa valga (reduz momento abdutor, favorece colapso em varo)',
        '< 120° = coxa vara (aumenta estresse em valgo, pode causar claudicação de Trendelenburg)',
        'Crianças: valores fisiologicamente maiores (~145° ao nascimento, reduzindo com o crescimento)',
        'Relevância em FAI: CCD aumentado associa-se a maior risco de lesão de labrum por mecanismo de pincer',
        'Planejamento de prótese total do quadril: restaurar CCD nativo para otimizar biomecânica abdominal'
      ],
      keyPoints: [
        'Normal: 120–135° | Vara: < 120° | Valga: > 135°',
        'Medido no AP com rotação neutra rigorosa',
        'Impacta diretamente o momento abdutor do glúteo médio'
      ],
      colorCode: 'info'
    },
    {
      id: 'hip-alpha',
      title: 'Ângulo Alfa (FAI Cam) — Quadril',
      content: [
        'Medição: ângulo entre o eixo do colo femoral e a linha tangente à esfera da cabeça femoral no ponto de transição cabeça-colo (não esférico)',
        'Incidência de Dunn 45° (padrão ouro para cam): quadril em 45° de flexão e 20° de abdução; Dunn 90° e axial de frog-leg são complementares',
        'Normal: < 50°',
        '50–60° = morfologia cam limítrofe (avaliar em conjunto com sintomas e impingement)',
        '> 60° = morfologia cam significativa (FAI tipo cam confirmado)',
        'Mecanismo de lesão: a saliência óssea anterossuperior impacta contra o rebordo acetabular em flexão/rotação interna, causando lesão do labrum e cartilagem',
        'Importante: morfologia cam isolada não é sinônimo de doença — cerca de 20–25% da população masculina tem ângulo > 55° sem sintomas'
      ],
      keyPoints: [
        'Normal: < 50° | Cam: > 60° | Limítrofe: 50–60°',
        'Incidência padrão: Dunn 45°',
        'Cam é muito mais prevalente em homens jovens atletas'
      ],
      colorCode: 'caution'
    },
    {
      id: 'hip-tonnis',
      title: 'Índice Acetabular de Tönnis — Quadril',
      content: [
        'Medição: ângulo entre a linha horizontal de Hilgenreiner e a tangente ao teto acetabular (sourcil — esclerosa subarticular do acetábulo)',
        'Também chamado: ângulo de inclinação acetabular ou acetabular index',
        'Normal adulto: 0–10°',
        '> 10° = displasia acetabular (teto acetabular inclinado, cobertura insuficiente)',
        '< 0° (retroversão acetabular) = sobrecobertura, associado a FAI tipo pincer',
        'Classificação de displasia de Tönnis (para coxartrose secundária): 0 = sem artrose, 1 = esclerose e osteófitos mínimos, 2 = moderado estreitamento, 3 = colapso e deformidade',
        'Diferentemente do CEA, o índice de Tönnis avalia a inclinação do sourcil, não a borda lateral'
      ],
      keyPoints: [
        'Normal: 0–10° | Displasia: > 10° | Pincer: < 0°',
        'Medido no teto acetabular (sourcil), não na borda óssea lateral',
        'Complementa o CEA na avaliação de displasia e FAI'
      ],
      colorCode: 'info'
    },
    {
      id: 'hip-pauwels',
      title: 'Classificação de Pauwels (Ângulo da Fratura do Colo Femoral) — Quadril',
      content: [
        'Medição: ângulo entre a linha de fratura do colo femoral e a horizontal (linha de Hilgenreiner)',
        'Tipo I: < 30° — forças predominantemente compressivas; melhor prognóstico para consolidação',
        'Tipo II: 30–50° — forças mistas (compressão + cisalhamento); risco intermediário',
        'Tipo III: > 50° — forças predominantemente de cisalhamento; maior risco de pseudartrose e necrose avascular da cabeça femoral (NAV)',
        'Mecanismo: quanto mais vertical o traço, mais as forças de cisalhamento superam a compressão interfragmentária, dificultando a consolidação',
        'Relevância cirúrgica: fraturas Pauwels III têm indicação mais forte de artroplastia (parcial ou total) em vez de fixação interna, especialmente em idosos',
        'Complementa a classificação de Garden (deslocamento) no planejamento de fraturas do colo femoral'
      ],
      keyPoints: [
        'Tipo I: < 30° (bom) | Tipo II: 30–50° | Tipo III: > 50° (pior)',
        'Maior ângulo = maior cisalhamento = pior prognóstico para fixação',
        'Pauwels III em idoso: considerar prótese de entrada'
      ],
      colorCode: 'danger'
    },
    // ─── JOELHO ─────────────────────────────────────────────────────────────────
    {
      id: 'knee-mechanical-axis',
      title: 'Eixo Mecânico / Ângulo Femorotibial (FTA) — Joelho',
      content: [
        'Medição: ângulo entre o eixo mecânico do fêmur (centro da cabeça femoral ao centro do joelho) e o eixo mecânico da tíbia (centro do joelho ao centro do tornozelo), medido no teleradiograma (RX panorâmico de membros inferiores em ortostatismo)',
        'Normal: 1,2–4° de varo fisiológico no alinhamento mecânico (linha mecânica passa levemente medial ao joelho)',
        'Eixo anatômico femorotibial (FTA): 5–7° de valgo (diferença entre eixo mecânico e anatômico femoral)',
        'Varismo > 5° = genu varum patológico (sobrecarga compartimento medial)',
        'Valgismo > 5° = genu valgum patológico (sobrecarga compartimento lateral)',
        'Teleradiograma (full-leg X-ray) é mandatório para planejamento de osteotomia e alinhamento de PTJ (prótese total do joelho)',
        'Erro comum: medir no AP do joelho isolado sem linha de peso — invalida o cálculo do eixo mecânico'
      ],
      keyPoints: [
        'Normal: 1,2–4° varo no eixo mecânico (ou 0° = neutro)',
        'Teleradiograma em ortostatismo é obrigatório para osteotomia',
        'Eixo anatômico femoral é ~6° mais valgo que o mecânico'
      ],
      colorCode: 'info'
    },
    {
      id: 'knee-ldfa',
      title: 'LDFA — Lateral Distal Femoral Angle — Joelho',
      content: [
        'Medição: ângulo entre o eixo mecânico do fêmur e a tangente à superfície articular distal do fêmur (intercondilar), medido lateralmente',
        'Normal: 84–89° (média 87°)',
        '< 84° = componente femoral em varo relativo (valgo do joelho)',
        '> 89° = componente femoral em valgo relativo (varo do joelho)',
        'Utilizado no planejamento de osteotomias varizantes/valguizantes do fêmur distal (DFO — distal femoral osteotomy)',
        'Junto com MPTA, permite calcular a origem da deformidade (femoral vs. tibial) antes de osteotomia',
        'No planejamento de PTJ: o corte femoral distal visa restaurar o LDFA fisiológico'
      ],
      keyPoints: [
        'Normal: 84–89° | < 84° = deformidade femoral em varo',
        'Medido no teleradiograma (eixo mecânico obrigatório)',
        'Diferencia deformidade femoral de tibial para planejamento cirúrgico'
      ],
      colorCode: 'info'
    },
    {
      id: 'knee-mpta',
      title: 'MPTA — Medial Proximal Tibial Angle — Joelho',
      content: [
        'Medição: ângulo entre o eixo mecânico da tíbia e a tangente à superfície articular proximal da tíbia (platô tibial), medido medialmente',
        'Normal: 85–90° (média 87°)',
        '< 85° = platô tibial em varo (favorece sobrecarga medial)',
        '> 90° = platô tibial em valgo',
        'Principal parâmetro para planejamento de osteotomia tibial alta (HTO — high tibial osteotomy) no genu varum sintomático',
        'HTO de abertura medial (OWHTO): visa atingir MPTA de 87–90° pós-operatório com eixo mecânico passando 62% lateral ao planalto tibial medial (ponto de Fujisawa)',
        'Inclinação do platô tibial (PTS) deve ser avaliada concomitantemente para não alterar cinemática do LCA/LCP'
      ],
      keyPoints: [
        'Normal: 85–90° | < 85° = deformidade tibial em varo',
        'Base do planejamento de HTO no genu varum',
        'Meta pós-HTO: eixo mecânico no ponto de Fujisawa (62% lateral)'
      ],
      colorCode: 'info'
    },
    {
      id: 'knee-q-angle',
      title: 'Ângulo Q (Quadricípital) — Joelho',
      content: [
        'Medição: ângulo entre a linha da EIAS (espinha ilíaca anterossuperior) ao centro da patela e a linha do centro da patela à tuberosidade tibial anterior (TTA)',
        'Medido clinicamente com joelho em extensão e quadríceps relaxado; variações com joelho a 30° de flexão',
        'Normal: 14–17° em homens; até 18–20° em mulheres (maior pela anatomia pélvica mais larga)',
        '> 20° = risco aumentado de instabilidade patelofemoral, subluxação e síndrome patelofemoral',
        'Limitação: avaliação estática, influenciada por posicionamento (rotação femoral, pé); a TTTG distância no TC é mais precisa',
        'Componente dinâmico: valgo do joelho em carga ("knee-in") é mais relevante funcionalmente do que o ângulo Q estático',
        'Usado como triagem, mas TTTG no TC é o padrão-ouro para decisão cirúrgica (trocleoplastia, MPFL)'
      ],
      keyPoints: [
        'Normal: 14–17° (homens) e até 18° (mulheres)',
        '> 20° = risco de instabilidade patelofemoral',
        'TTTG distância no TC é mais precisa para decisão cirúrgica'
      ],
      colorCode: 'caution'
    },
    {
      id: 'knee-tttg',
      title: 'Distância TTTG (Tuberosidade Tibial – Sulco Troclear) — Joelho',
      content: [
        'Medição: distância horizontal entre a projeção da tuberosidade tibial anterior (TTA) e o ponto mais profundo do sulco troclear femoral, medida no TC do joelho (corte axial)',
        'Metodologia: sobrepõe-se o corte axial com maior profundidade troclear ao corte axial com maior proeminência da TTA; mede-se a distância paralela à linha posterior dos côndilos femorais',
        'Normal: < 20 mm',
        '20–25 mm = zona limítrofe (correlacionar com sintomas e morfologia troclear)',
        '> 25 mm = lateralização significativa da TTA; indicação de cirurgia de mediação da TTA (medialization osteotomy)',
        'TTTG > 20 mm é um dos critérios para anteromediação (Fulkerson) ou anteroização (Maquet) da TTA',
        'Complementado pela classificação troclear de Dejour (A–D) para planejamento completo do joelho patelofemoral instável',
        'TT-PCL (tuberosidade tibial – ligamento cruzado posterior) > 24 mm = critério alternativo mais robusto'
      ],
      keyPoints: [
        'Normal: < 20 mm | Limítrofe: 20–25 mm | Cirúrgico: > 25 mm',
        'Medido no TC — cortes axiais sobrepostos',
        'Principal parâmetro para indicação de mediação/anteromediação da TTA'
      ],
      colorCode: 'caution'
    },
    {
      id: 'knee-patellar-height',
      title: 'Altura Patelar — Joelho',
      content: [
        '**Índice de Insall-Salvati:** comprimento do tendão patelar (LT, inserção inferior da patela à TTA) / comprimento da patela (LP); medido no RX lateral do joelho a 30–90° de flexão',
        'Insall-Salvati normal: 0,8–1,2',
        'Insall-Salvati > 1,2 = patela alta (alta patelae) — risco aumentado de luxação patelar',
        'Insall-Salvati < 0,8 = patela baixa (baja patelae / patela infra) — pode ocorrer após cirurgia de quadríceps ou tibial',
        '**Índice de Caton-Deschamps:** distância da borda inferior articular da patela ao ângulo anterossuperior do platô tibial (AT) / comprimento da superfície articular patelar (AP); mais reprodutível após artroplastia',
        'Caton-Deschamps normal: 0,6–1,3 (alguns autores: 0,8–1,2)',
        '> 1,3 = patela alta; < 0,6 = patela baixa',
        'Índice de Blackburne-Peel (BP): alternativa menos afetada por cirurgias tibiais anteriores'
      ],
      keyPoints: [
        'Insall-Salvati normal: 0,8–1,2 | Alta: > 1,2 | Baixa: < 0,8',
        'Caton-Deschamps: 0,6–1,3 (preferido pós-artroplastia)',
        'Patela alta é o principal fator anatômico de instabilidade patelofemoral'
      ],
      colorCode: 'info'
    },
    {
      id: 'knee-posterior-tibial-slope',
      title: 'Inclinação do Platô Tibial Posterior (PTS) — Joelho',
      content: [
        'Medição: ângulo entre a perpendicular ao eixo mecânico da tíbia e a tangente à superfície articular do platô tibial medial (ou lateral), no RX lateral do joelho',
        'Normal: 5–10° (média ~7°)',
        'Importância biomecânica no LCA: maior inclinação posterior (> 10°) aumenta a translação anterior da tíbia, elevando a carga no LCA e o risco de ruptura e re-ruptura pós-cirurgia',
        'Importância no LCP: menor inclinação (ou inclinação anterior) favorece a translação posterior, aumentando carga no LCP',
        'Cirurgia corretiva: osteotomia tibial de fechamento anterior (slope-reducing HTO) indicada em re-rupturas de LCA com PTS > 12–14° (controvérsia)',
        'Na PTJ: inclinação do implante tibial deve respeitar o PTS nativo para preservar cinemática (roll-back femoral)',
        'Variação: PTS medial tende a ser 2–3° maior que o lateral'
      ],
      keyPoints: [
        'Normal: 5–10° | > 12° = risco aumentado de ruptura/re-ruptura de LCA',
        'Inclinação aumentada translada tíbia anteriormente — sobrecarrega LCA',
        'PTS > 12° em re-rupturas: considerar slope-reducing HTO'
      ],
      colorCode: 'caution'
    },
    // ─── PÉ / TORNOZELO ─────────────────────────────────────────────────────────
    {
      id: 'foot-bohler',
      title: 'Ângulo de Böhler — Calcâneo',
      content: [
        'Medição: ângulo formado pela interseção de duas linhas no RX lateral do pé/tornozelo: (1) linha da tuberosidade posterior do calcâneo ao pico da faceta posterior e (2) linha do pico da faceta posterior ao bico anterior do calcâneo',
        'Normal: 20–40° (média ~28–32°)',
        '< 20° = suspeita de fratura do calcâneo com colapso articular (achatamento do ângulo)',
        'Fratura calcanear grave: ângulo pode ser 0° ou negativo (inversão)',
        'Indicação cirúrgica: ângulo < 0° ou colapso significativo de faceta com ângulo de Gissane alterado são critérios adicionais para RAFI',
        'Ângulo restaurado após RAFI é preditor de bom resultado funcional',
        'Deve ser medido bilateralmente para comparação — variação individual significativa'
      ],
      keyPoints: [
        'Normal: 20–40° | < 20° = fratura calcanear suspeita | 0° ou negativo = grave',
        'RX lateral do pé em ortostatismo ou decúbito lateral',
        'Restauração do ângulo é objetivo cirúrgico na RAFI de calcâneo'
      ],
      colorCode: 'danger'
    },
    {
      id: 'foot-gissane',
      title: 'Ângulo de Gissane (Ângulo Crítico) — Calcâneo',
      content: [
        'Medição: ângulo formado pela interseção das corticais do sulco do seio do tarso: (1) cortical que desce desde a faceta posterior e (2) cortical que sobe até o processo anterior do calcâneo; medido no RX lateral',
        'Normal: 95–105° (valores até 120° aceitos por alguns autores)',
        'Relevância: o ângulo de Gissane aumenta nas fraturas do calcâneo com envolvimento da faceta posterior, pois a faceta colapsa e amplia o ângulo',
        'Usado em conjunto com o ângulo de Böhler para classificar a gravidade de fraturas calcâneas',
        'Aumentado após fratura = indicador de envolvimento da faceta subtalar posterior',
        'Classificação de Essex-Lopresti: tongue-type (traço horizontal) vs. joint-depression (colapso faceta) — ambas alteram o ângulo de Gissane'
      ],
      keyPoints: [
        'Normal: 95–105° | Aumentado = envolvimento de faceta posterior',
        'Complementa o ângulo de Böhler na avaliação de fratura calcanear',
        'Ângulo > 120° indica lesão grave da faceta subtalar'
      ],
      colorCode: 'caution'
    },
    {
      id: 'foot-talocalcaneal',
      title: 'Ângulo Talocalcâneo de Kite — Pé',
      content: [
        'Medição AP (incidência dorsoplantar): ângulo entre o eixo longo do tálus e o eixo longo do calcâneo; normal 20–40°',
        'Medição lateral: ângulo entre o eixo do tálus e o eixo do calcâneo (linha da tuberosidade posterior); normal 25–45°',
        'Pes planus (pé plano): aumento do ângulo talocalcâneo (> 45° no lateral) por abdução do tálus e valgismo do retropé',
        'Pes cavus: diminuição do ângulo (< 20° no AP) por adução do tálus e inversão do retropé',
        'Pé torto congênito (PTC): ângulo AP frequentemente < 15°, com tálus e calcâneo paralelos (paralelismo talocalcâneo = sinal patognomônico de PTC)',
        'Uso clínico: monitoramento da correção em PTC tratado com Ponseti, e avaliação do retropé em cirurgias de planovalgismo',
        'Raio X do pé em carga bilateral para comparação é ideal'
      ],
      keyPoints: [
        'Normal AP: 20–40° | Lateral: 25–45°',
        'PTC: paralelismo talocalcâneo (< 15° no AP)',
        'Pé plano: aumento | Pes cavus: diminuição'
      ],
      colorCode: 'info'
    },
    {
      id: 'foot-meary',
      title: 'Ângulo de Meary (Talo–1º Metatarso) — Pé',
      content: [
        'Medição: ângulo entre o eixo longo do tálus e o eixo longo do 1º metatarso, no RX lateral do pé em ortostatismo',
        'Normal: 0° (tálus e 1º metatarso colineares — sem angulação)',
        'Ângulo positivo (vértice apontando para baixo/plantar): pé plano (planovalgismo) — quanto maior, mais grave',
        'Classificação do planovalgismo pelo ângulo de Meary: leve < 5°, moderado 5–15°, grave > 15°',
        'Ângulo negativo (vértice apontando para cima/dorsal): pes cavus — pronação e arco excessivos',
        'Avalia a coluna medial do pé: alterações na articulação talonavicular e tarsometatarsal refletem no ângulo',
        'Complementado pelo ângulo de pitch calcâneo e ângulo de Hibbs (calcâneo–1º metatarso) na avaliação de cavus'
      ],
      keyPoints: [
        'Normal: 0° (colinear) | Positivo = pé plano | Negativo = pé cavo',
        'Grave: > 15° (pé plano) ou muito negativo (pes cavus)',
        'RX lateral em ortostatismo bilateral é mandatório'
      ],
      colorCode: 'info'
    },
    {
      id: 'foot-calcaneal-pitch',
      title: 'Ângulo de Inclinação Calcânea (Calcaneal Pitch) — Pé',
      content: [
        'Medição: ângulo entre o plano de apoio (chão) e a linha que une o ponto mais inferior da tuberosidade posterior do calcâneo ao ponto mais inferior do processo anterior do calcâneo; RX lateral em ortostatismo',
        'Normal: 10–20°',
        '< 10° = pé plano com retropé em valgo (calcâneo horizontalizado)',
        '> 20° = pes cavus com retropé em varo (calcâneo verticalizado)',
        'Avaliado junto ao ângulo de Meary para estadiamento completo do pé plano e do pé cavo',
        'Na cirurgia de pé plano adulto (reconstrução do tibial posterior): objetivo é restaurar pitch calcâneo normal',
        'Osteotomia de calcâneo (Dwyer, Evans, Cotton) visa corrigir o pitch e o ângulo talocalcâneo'
      ],
      keyPoints: [
        'Normal: 10–20° | < 10° = pé plano | > 20° = pes cavus',
        'Calcâneo horizontalizado = pé plano; verticalizado = cavus',
        'RX lateral em ortostatismo bilateral'
      ],
      colorCode: 'info'
    },
    {
      id: 'foot-talar-tilt',
      title: 'Tilt Talar (Inclinação Talar) — Tornozelo',
      content: [
        'Medição: ângulo entre a superfície articular distal da tíbia (teto do pilão tibial) e a superfície articular superior do tálus, no RX AP do tornozelo em estresse em inversão (stress test)',
        'Normal: 0–5° (simétricamente bilateral)',
        '> 10° = lesão do complexo ligamentar lateral (FATO — fibular anterior talo-peroneal e calcâneo-peroneal)',
        'Assimetria > 5° em relação ao tornozelo contralateral = instabilidade lateral clinicamente significativa',
        'Indicação cirúrgica (Broström-Gould): instabilidade crônica sintomática + tilt talar > 10°',
        'Complementado pelo teste de gaveta anterior (translação talar anterior > 10 mm = lesão LTFA)',
        'Técnica: RX em estresse com inversão forçada a 20° de flexão plantar; pode ser feito sob anestesia local para eliminar dor reflexa'
      ],
      keyPoints: [
        'Normal: 0–5° | > 10° = instabilidade lateral | Cirúrgico: > 10° sintomático',
        'Comparar com tornozelo contralateral — assimetria > 5° é significativa',
        'Complementado pelo teste de gaveta anterior (translação > 10 mm)'
      ],
      colorCode: 'caution'
    },
    // ─── COLUNA ──────────────────────────────────────────────────────────────────
    {
      id: 'spine-cobb',
      title: 'Ângulo de Cobb (Escoliose) — Coluna',
      content: [
        'Medição: ângulo entre a linha paralela ao platô superior da vértebra apical superior da curva e a linha paralela ao platô inferior da vértebra apical inferior da curva; medido no RX panorâmico de coluna em AP',
        'Normal (simetria): < 10°',
        'Escoliose leve: 10–25°',
        'Escoliose moderada: 25–40°',
        'Escoliose grave: > 40°',
        'Indicação cirúrgica (fusão): curva > 50° na coluna torácica; > 40° na lombar (diretrizes gerais — variam por etiologia e maturidade)',
        'Progressão: risco elevado na adolescência durante o pico de crescimento (Risser 0–1); > 5° de progressão em 6 meses = tratamento ativo',
        'Colete (órtese de Milwaukee/Boston): indicado em curvas 25–45° com Risser ≤ 2',
        'Curva de Cobb > 70° na torácica: comprometimento da função pulmonar (CVF reduzida)'
      ],
      keyPoints: [
        '< 10° normal | 10–25° leve | 25–40° moderado | > 50° cirúrgico',
        'Risco de progressão máximo em Risser 0–2 (esqueleto imaturo)',
        'Curva > 70° torácica impacta função respiratória'
      ],
      colorCode: 'danger'
    },
    {
      id: 'spine-lumbar-lordosis',
      title: 'Lordose Lombar (Cobb L1–S1) — Coluna',
      content: [
        'Medição: ângulo de Cobb entre o platô superior de L1 e o platô superior de S1, no RX lateral de coluna em ortostatismo',
        'Normal: 40–60° (média ~50°)',
        'Hiperlordose: > 75°',
        'Hipolordose (retificação lombar): < 30°',
        'Relação com incidência pélvica (PI): lordose lombar deve ser PI ± 9° para equilíbrio sagital ideal (fórmula de Schwab: LL ≈ PI − 10°)',
        'Desalinhamento sagital: quando LL não compensa o PI, ocorre desequilíbrio anterior (SVA > 50 mm)',
        'Relevância em cirurgia de fusão lombar: restaurar a lordose segmentar e total para evitar falha de fusão, síndrome da junção proximal e dor lombar persistente',
        'Gaiolas (cages) lombares com ângulo lordótico (ALIF, XLIF lordótico) auxiliam na restauração da lordose'
      ],
      keyPoints: [
        'Normal: 40–60° | Hipolordose: < 30° | Hiperlordose: > 75°',
        'LL deve ser ≈ PI − 10° para equilíbrio sagital',
        'Fusão lombar: restaurar lordose segmentar é fundamental'
      ],
      colorCode: 'info'
    },
    {
      id: 'spine-thoracic-kyphosis',
      title: 'Cifose Torácica (Cobb T1–T12) — Coluna',
      content: [
        'Medição: ângulo de Cobb entre o platô superior de T1 e o platô inferior de T12, no RX lateral de coluna em ortostatismo (ou sentado para avaliar compensação)',
        'Normal: 20–45°',
        '> 50° = hipercifose torácica patológica',
        '< 20° = hipocifose (coluna torácica "reta" ou retificada)',
        'Doença de Scheuermann: cifose rígida > 45° com cunhamento vertebral ≥ 5° em ≥ 3 vértebras consecutivas',
        'Hipercifose postural: redutível com hiperextensão passiva (diferencia de Scheuermann)',
        'Cifose de Scheuermann grave (> 75°): pode ter indicação cirúrgica (osteotomia + instrumentação)',
        'Interação com lordose lombar: hipercifose torácica compensatória ativa hiperlordose lombar por mecanismo de compensação sagital',
        'Avaliação da junção toracolombar (T10–L2): ângulo normal ~ 0°; > 15° = patológico (fratura por compressão, Scheuermann toracolombar)'
      ],
      keyPoints: [
        'Normal: 20–45° | Hipercifose: > 50° | Scheuermann: > 45° com cunhamento',
        'Cifose > 75° Scheuermann = considerar cirurgia',
        'Sempre avaliar equilíbrio sagital global (SVA)'
      ],
      colorCode: 'caution'
    },
    {
      id: 'spine-pelvic-parameters',
      title: 'Parâmetros Espinopélvicos (PI, SS, PT, SVA) — Coluna',
      content: [
        '**Incidência Pélvica (PI):** ângulo entre a perpendicular ao platô sacral e a linha do centro do platô sacral ao centro dos eixos femorais; valor fixo e individual, não muda com a postura; normal 40–65°; PI = PT + SS',
        '**Slope Sacral (SS):** ângulo entre o platô superior de S1 e a horizontal; normal 30–45°; diminui quando a pelve retroversa para compensar desalinhamento',
        '**Tilt Pélvico (PT):** ângulo entre a linha vertical e a linha do centro do platô sacral ao centro dos eixos femorais; normal 10–25°; PT > 25° indica retroversão compensatória (pior prognóstico funcional)',
        '**SVA (Sagittal Vertical Axis):** distância horizontal entre o fio de prumo de C7 e a borda posterossuperior de S1; normal < 50 mm anteriormente; SVA > 100 mm = desequilíbrio sagital grave',
        'Fórmula chave: PI = PT + SS (identidade pélvica — sempre válida)',
        'Objetivo cirúrgico: LL ≈ PI − 10°; PT < 20°; SVA < 50 mm',
        'T1 Pelvic Angle (TPA): alternativa ao SVA — não afetado por posição de membros inferiores; normal < 14°'
      ],
      keyPoints: [
        'PI = PT + SS (identidade sempre válida)',
        'PI normal: 40–65° (fixo); PT normal: < 20°; SS normal: 30–45°',
        'SVA > 50 mm anterior = desequilíbrio sagital; meta cirúrgica: SVA < 50 mm'
      ],
      colorCode: 'caution'
    },
    // ─── OMBRO ───────────────────────────────────────────────────────────────────
    {
      id: 'shoulder-csa',
      title: 'Ângulo Crítico do Ombro (CSA) — Ombro',
      content: [
        'Medição: ângulo entre a linha horizontal que une o ponto lateral da glenoide ao ponto mais lateral do acrômio e a linha da borda inferior da glenoide ao ponto mais lateral do acrômio; medido no RX AP verdadeiro do ombro (view Grashey)',
        'Normal: 30–35°',
        '> 35° = aumento do stress de cisalhamento nos tendões do manguito rotador → risco elevado de ruptura do supraespinhal',
        '< 30° = aumento da força compressiva no complexo glenoumeral → risco de osteoartrite glenoumeral primária',
        'Mecanismo: CSA alto lateraliza o acrômio, aumentando o braço de momento da força gravitacional do membro — sobrecarga dos tendões do MR',
        'CSA > 38° é fator de risco independente para ruptura maciça do manguito',
        'Relevância terapêutica: CSA elevado pode justificar acromioplastia lateral (acromioplastia de Rockwood) vs. CSA normal (sem benefício)',
        'Limitação: medição no AP verdadeiro é imprescindível — rotação da escápula altera significativamente o valor'
      ],
      keyPoints: [
        'Normal: 30–35° | > 35° = risco de ruptura do MR | < 30° = risco de OA glenoumeral',
        'Medido no AP verdadeiro (Grashey) — posicionamento rigoroso',
        'CSA > 38° = fator independente para ruptura maciça do manguito'
      ],
      colorCode: 'caution'
    },
    {
      id: 'shoulder-glenoid-version',
      title: 'Versão Glenoidal — Ombro',
      content: [
        'Medição: ângulo entre a linha perpendicular ao eixo escapular e a linha tangente à superfície articular da glenoide, no TC axial do ombro',
        'Normal: 0–7° de retroversão glenoidal',
        'Retroversão excessiva (> 10–15°): associada a instabilidade posterior do ombro e falência de próteses glenoidais por "rocking horse" phenomenon',
        'Anteversão glenoidal: rara, associada a instabilidade anterior',
        'No planejamento de artroplastia total do ombro: retroversão > 15° exige augment posterior do implante glenoidal ou osteotomia subescapular',
        'Classificação de Walch (A1, A2, B1, B2, C): baseada na morfologia da glenoide no TC; B2 e C têm retroversão significativa',
        'Versão umeral: haste umeral deve ser implantada em ~20–30° de retroversão; combinação com versão glenoidal define a estabilidade rotacional'
      ],
      keyPoints: [
        'Normal: 0–7° de retroversão | > 15° = instabilidade posterior / problema para prótese',
        'TC axial é mandatório para planejamento de artroplastia',
        'Classificação de Walch orienta necessidade de augment glenoidal'
      ],
      colorCode: 'info'
    },
    {
      id: 'shoulder-acromiohumeral',
      title: 'Distância Acrômio-Umeral (DAU) — Ombro',
      content: [
        'Medição: distância entre a superfície inferior do acrômio e a superfície superior da cabeça umeral, no RX AP verdadeiro do ombro com membros em posição neutra',
        'Normal: ≥ 7 mm (média 9–11 mm)',
        '< 7 mm = suspeita de ruptura significativa do manguito rotador (especialmente supraespinhal)',
        '< 6 mm = ruptura maciça do manguito, com ascensão da cabeça umeral (arthropatie de la coiffe)',
        'Causa: perda de função dos tendões do MR elimina a força depressora da cabeça umeral durante a elevação → cabeça sobe e impacta o acrômio',
        'DAU muito pequena + osteoartrite acrômio-umeral = "artropatia do manguito" (Cuff Tear Arthropathy — CTA, grau IV de Hamada)',
        'Valor prognóstico: DAU < 5 mm contra-indica artroplastia total do ombro convencional — indicação de prótese reversa (Delta III / Grammont)'
      ],
      keyPoints: [
        'Normal: ≥ 7 mm | < 7 mm = ruptura MR | < 6 mm = ruptura maciça / artropatia',
        'DAU < 5 mm = indicação de prótese reversa (contra-indica aTSR convencional)',
        'RX AP verdadeiro (Grashey) com rotação neutra'
      ],
      colorCode: 'danger'
    },
    // ─── COTOVELO ────────────────────────────────────────────────────────────────
    {
      id: 'elbow-carrying-angle',
      title: 'Ângulo de Carregamento (Carrying Angle / Cúbito Valgo) — Cotovelo',
      content: [
        'Medição: ângulo entre o eixo longo do úmero e o eixo longo do antebraço, com cotovelo em extensão completa e supinação; medido clinicamente ou no RX AP do cotovelo',
        'Normal: 10–15° de valgo em mulheres; 5–10° de valgo em homens',
        'Cúbito valgo: > 15° (mulheres) ou > 10° (homens) — pode comprimir o nervo ulnar no túnel cubital',
        'Cúbito varo: ângulo em varo (negativo) — sequela comum de fratura supracondilar mal reduzida na infância ("deformidade em coronha de espingarda")',
        'Relevância em fraturas supracondilares (Gartland II/III): objetivo da redução é restaurar o carrying angle normal',
        'Ângulo de Baumann (RX): parâmetro radiográfico mais confiável para guiar a redução de fraturas supracondilares pediátricas (vide abaixo)',
        'Cúbito varo residual é estético e funcional — pode necessitar osteotomia corretiva lateral em cunha'
      ],
      keyPoints: [
        'Normal: 5–10° (homens) / 10–15° (mulheres) de valgo fisiológico',
        'Cúbito varo = sequela clássica de fratura supracondilar mal tratada',
        'Cúbito valgo excessivo: risco de neurite ulnar tardia'
      ],
      colorCode: 'info'
    },
    {
      id: 'elbow-baumann',
      title: 'Ângulo de Baumann — Cotovelo Pediátrico',
      content: [
        'Medição: ângulo entre o eixo longo do úmero (linha diafisária) e a linha do epicôndilo lateral ao nível da fise lateral do côndilo umeral (linha capitelofisária), no RX AP do cotovelo',
        'Normal: 72–84° (média ~76°)',
        'Uso clínico principal: guiar a redução de fraturas supracondilares (Gartland II e III) na criança',
        'Redução adequada: Baumann do lado acometido deve ser igual ao lado normal (comparar com contralateral)',
        'Ângulo > 84° após redução = cotovelo em varo excessivo (risco de cúbito varo residual)',
        'Ângulo < 72° = valgo excessivo',
        'Limitação: varia com a rotação do braço durante o RX — comparar sempre com o contralateral na mesma incidência',
        'Cada 5° de alteração no ângulo de Baumann corresponde a ~2° de mudança no carrying angle clínico'
      ],
      keyPoints: [
        'Normal: 72–84° | Comparar sempre com o contralateral',
        'Principal guia de redução em fratura supracondilar Gartland II/III',
        'Alteração de 5° no Baumann ≈ 2° no carrying angle clínico'
      ],
      colorCode: 'caution'
    },
    {
      id: 'elbow-ahl',
      title: 'Linha Umeral Anterior (AHL) — Cotovelo Pediátrico',
      content: [
        'Definição: linha traçada ao longo da cortical anterior do úmero no RX lateral do cotovelo a 90° de flexão',
        'Normal: a AHL deve passar pelo terço médio do capitello umeral',
        'Em fratura supracondilar com extensão: o fragmento distal translada posteriorment → capitello fica posterior à AHL (AHL passa pelo terço anterior ou anterior ao capitello)',
        'Sensibilidade diagnóstica: a AHL anormal é diagnóstica de deslocamento posterior em fraturas supracondilares — mesmo quando o traço de fratura não é visível no lateral (Gartland I oculta)',
        'Em crianças muito novas, o capitello pode não estar ossificado — sinal do coxim gorduroso (fat pad sign / vela de barco) no lateral é o achado principal',
        'Após redução: verificar que AHL passa pelo terço médio do capitello em ambas as projeções antes de fixar com fios de Kirschner',
        'Linha de Kager (coxim de Kager) na radiografia lateral: útil para avaliar tendão calcanear e fraturas do calcâneo (complemento)'
      ],
      keyPoints: [
        'Normal: AHL passa pelo terço médio do capitello no lateral',
        'AHL anterior ao capitello = fratura supracondilar com deslocamento posterior',
        'Verificar AHL após cada manobra de redução antes de fixar'
      ],
      colorCode: 'danger'
    },
    {
      id: 'elbow-radiocapitellar',
      title: 'Linha Radiocapitelar — Cotovelo',
      content: [
        'Definição: linha traçada ao longo do eixo longo do colo e diáfise do rádio (linha de Storen) deve sempre passar pelo centro do capitello umeral, em TODAS as projeções radiográficas do cotovelo (AP, lateral e oblíquas)',
        'Normal: alinhamento preciso em todas as incidências — linha intersecta o capitello em todas as posições',
        'Luxação da cabeça radial: a linha não passa pelo capitello — diagnóstico definitivo de luxação da cabeça do rádio',
        'Armadilha diagnóstica: a linha deve ser verificada em TODA fratura do cotovelo em criança para excluir lesão de Monteggia (fratura de cúbito + luxação da cabeça radial)',
        'Classificação de Bado: Monteggia tipo I (mais comum, luxação anterior da cabeça radial) até tipo IV — a AHL e a linha radiocapitelar confirmam o tipo',
        'Lesão de Monteggia é frequentemente subdiagnosticada se a linha radiocapitelar não for verificada sistematicamente',
        'Em adultos: luxação da cabeça radial pode ocorrer isolada — sempre verificar a linha no AP e lateral'
      ],
      keyPoints: [
        'Normal: linha do rádio passa pelo centro do capitello em TODAS as incidências',
        'Não passa pelo capitello = luxação da cabeça radial',
        'Sempre verificar em fraturas do cotovelo pediátrico (Monteggia não diagnosticado)'
      ],
      colorCode: 'danger'
    },
    // ─── ANTEBRAÇO ───────────────────────────────────────────────────────────────
    {
      id: 'forearm-radial-bow',
      title: 'Arqueamento Radial (Radial Bow) — Antebraço',
      content: [
        'Medição: máxima distância perpendicular entre o eixo longo do rádio e o ponto de máxima curvatura da diáfise radial, no RX AP do antebraço; alternativamente: percentagem em relação ao comprimento total do rádio (%RB)',
        'Normal: 9–15 mm (ou ~15% do comprimento total do rádio na técnica de Matthews e Kaufer)',
        'Relevância na redução de fraturas de ambos os ossos do antebraço (FAOA): restaurar o arqueamento radial é essencial para recuperar a pronossupinação',
        'Perda do arco radial (< 9 mm): resulta em perda significativa de rotação do antebraço (cada 1 mm de redução do arco = 20° de perda de rotação)',
        'Técnica de avaliação: o arqueamento máximo normal ocorre na junção do terço proximal com o terço médio do rádio (isthmus)',
        'Ponto de curvatura máxima: lateral na diáfise (rádio curva para lateral, permitindo espaço interósseo para pronossupinação)',
        'Critério de redução pediátrica: tolerância de remodelação em crianças < 10 anos (zona diafisária) — alinhamento < 10° de angulação e < 1 cm de encurtamento'
      ],
      keyPoints: [
        'Normal: 9–15 mm | Perda do arco radial = perda de rotação',
        'Cada 1 mm de redução do arco ≈ 20° de perda de pronossupinação',
        'Restaurar o arco radial é o principal objetivo na RAFI de FAOA'
      ],
      colorCode: 'caution'
    }
  ],
  clinicalPearl: 'Regra dos "ângulos de equilíbrio sagital": PI = PT + SS. A incidência pélvica (PI) é um valor fixo e anatômico de cada paciente — ela define quanto de lordose lombar e slope sacral são necessários para o equilíbrio sagital. Em cirurgia de fusão lombar, não respeitar esse equilíbrio (LL ≈ PI − 10°) é a principal causa de falha mecânica, síndrome da junção proximal e dor residual.',
  pitfall: 'O ângulo de Cobb da escoliose e o ângulo de Baumann do cotovelo exigem incidências precisas e padronizadas — variações de posicionamento (rotação do paciente, rotação do membro) podem alterar o valor em até 5–10°. Sempre comparar com o contralateral e com estudos anteriores em série, usando a mesma técnica radiográfica.',
  references: [
    'Wiberg G. Studies on dysplastic acetabula and congenital subluxation of the hip joint. Acta Chir Scand. 1939;83(Suppl 58):1-135.',
    'Notzli HP, et al. The contour of the femoral head-neck junction as a predictor for the risk of anterior impingement. J Bone Joint Surg Br. 2002;84(4):556-560.',
    'Pauwels F. Der Schenkelhalsbruch, ein mechanisches Problem. Beilageheft ZWZO. 1935.',
    'Coventry MB, et al. Osteotomy about the knee for degenerative and rheumatoid arthritis. J Bone Joint Surg Am. 1973;55(1):23-48.',
    'Dejour H, Walch G, et al. Factors of patellar instability: an anatomic radiographic study. Knee Surg Sports Traumatol Arthrosc. 1994;2(1):19-26.',
    'Insall J, Salvati E. Patella position in the normal knee joint. Radiology. 1971;101(1):101-104.',
    'Bohler L. Diagnosis, pathology and treatment of fractures of the os calcis. J Bone Joint Surg. 1931;13(1):75-89.',
    'Meary R. On the measurement of the angle between the talus and the first metatarsal. Rev Chir Orthop. 1967;53(5):389-393.',
    'Cobb JR. Outline for the study of scoliosis. Instr Course Lect. 1948;5:261-275.',
    'Legaye J, et al. Pelvic incidence: a fundamental pelvic parameter for three-dimensional regulation of spinal sagittal curves. Eur Spine J. 1998;7(2):99-103.',
    'Moor BK, et al. Relationship of individual scapular anatomy and degenerative rotator cuff tears. J Shoulder Elbow Surg. 2014;23(4):536-541.',
    'Baumann E. Beitrage zur Kenntnis der Frakturen am Ellenbogen. Bruns Beitr Klin Chir. 1929;146:1.',
    'Matthews LS, Kaufer H. Effect on supination-pronation of angular malalignment of fractures of both bones of the forearm. J Bone Joint Surg Am. 1979;61(1):14-20.'
  ]
};
