import type { ClassificationData } from '@/types/tool';

export const robinsonClavicleData: ClassificationData = {
  id: 'robinson-clavicle',
  name: 'Classificação de Robinson — Fraturas da Clavícula',
  author: 'Robinson',
  year: 1998,
  epidemiology: 'Fraturas da clavícula representam 2,6–5% de todas as fraturas do esqueleto e 35–44% das fraturas da cintura escapular. Incidência: ~64/100.000/ano. Pico em homens jovens (20–30 anos) por esportes e acidentes motociclísticos; segundo pico em idosos. Distribuição por localização: terço médio 80–85%, terço lateral 10–15%, terço medial 5%. Mecanismo predominante: queda sobre o ombro estendido (>87% dos casos) — estudos de cinemática mostram transmissão de força do cotovelo/punho até a clavícula. Taxa de pseudoartrose no terço médio deslocado com conservador: 5–15% (estudos prospectivos mais recentes indicam 15–20% em deslocadas com encurtamento > 2 cm). Taxa de pseudoartrose no terço lateral deslocado (Craig II / Robinson 3B1): 30–40%. Encurtamento > 2 cm associado a déficit de força de ombro e endurance em estudos prospectivos (McKee 2006, Lazarides 2006).',
  mechanism: 'Mecanismo principal (87%): queda direta sobre o ombro lateralmente, transmitindo força de compressão da glenoide ao manúbrio através da clavícula. O ponto de menor resistência no adulto é o terço médio (ausência de sustentação ligamentar, transição entre reto e curvo). Mecanismo secundário (13%): impacto direto sobre a clavícula ou queda sobre a mão estendida. Forças deformantes pós-fratura no terço médio: músculo esternocleidomastoideo eleva o fragmento medial; peso do membro + músculo peitoral maior e deltoide deprimem e lateralizam o fragmento distal. No terço lateral (Robinson 3B1 / Craig II): ligamentos coracoclaviculares prendem ao fragmento lateral → fragmento medial fica livre → eleva-se pelo trapézio → pseudoartrose frequente sem ancoragem ligamentar.',
  grades: [
    {
      id: 'robinson-1a1',
      label: 'Tipo 1A1 — Terço Medial, Não Deslocada, Extra-articular',
      description: 'Fratura do terço medial da clavícula, sem desvio significativo, fora da articulação esternoclavicular',
      criteria: [
        'Localização: terço medial (25% medial da clavícula)',
        'Desvio < 100% da espessura cortical',
        'Extra-articular — não envolve a articulação esternoclavicular',
        'Incidência: ~1,5% de todas as fraturas da clavícula',
        'Mecanismo: trauma direto ou indireto sobre o ombro medial',
        'Avaliar estruturas do mediastino — TC se suspeita de desvio posterior',
        'AO/OTA 15.2 — clavícula (segmento medial)'
      ],
      treatment: 'Conservador: tipoia por 3–4 semanas, analgesia e mobilização precoce. Complicações raras.',
      prognosis: 'Excelente. Consolidação na grande maioria. Pseudoartrose rara no terço medial.',
      colorCode: 'safe'
    },
    {
      id: 'robinson-1a2',
      label: 'Tipo 1A2 — Terço Medial, Não Deslocada, Intra-articular',
      description: 'Fratura do terço medial da clavícula, sem desvio, envolvendo a articulação esternoclavicular',
      criteria: [
        'Localização: terço medial com extensão à articulação esternoclavicular',
        'Desvio < 100% — não deslocada',
        'Intra-articular — fratura da superfície articular da esternoclavicular',
        'Risco de artrose esternoclavicular tardia',
        'TC esternoclavicular obrigatória para avaliação da extensão articular',
        'Mecanismo: trauma direto ou queda sobre o ombro'
      ],
      treatment: 'Conservador: tipoia 3–4 semanas. Monitorar artrose esternoclavicular a longo prazo.',
      prognosis: 'Bom. Artrose esternoclavicular sintomática possível em 10–20% a longo prazo.',
      colorCode: 'safe'
    },
    {
      id: 'robinson-1b1',
      label: 'Tipo 1B1 — Terço Medial, Deslocada, Extra-articular',
      description: 'Fratura do terço medial da clavícula com desvio significativo, fora da articulação esternoclavicular',
      criteria: [
        'Localização: terço medial da clavícula',
        'Desvio ≥ 100% da espessura cortical ou angulação significativa',
        'Extra-articular',
        'TC obrigatória para avaliar relação com estruturas do mediastino',
        'Desvio posterior = emergência: risco de compressão de traqueia, vasos e esôfago',
        'Desvio anterior: geralmente estável, sem risco vital'
      ],
      treatment: 'Desvio posterior com comprometimento mediastinal: redução fechada emergencial (palpação da clavícula com pinça) ou cirurgia. Desvio anterior sem complicações: conservador.',
      prognosis: 'Moderado. Depende da direção do desvio. Desvio posterior com diagnóstico tardio pode ter complicações graves.',
      colorCode: 'caution'
    },
    {
      id: 'robinson-1b2',
      label: 'Tipo 1B2 — Terço Medial, Deslocada, Intra-articular',
      description: 'Fratura do terço medial da clavícula com desvio significativo envolvendo a articulação esternoclavicular',
      criteria: [
        'Localização: terço medial com extensão articular esternoclavicular',
        'Desvio ≥ 100%',
        'Intra-articular esternoclavicular',
        'Equivalente à luxação esternoclavicular com fratura epifisária em jovens (placa de crescimento funde-se somente aos 23–25 anos)',
        'TC obrigatória para diferenciar luxação de fratura epifisária',
        'Emergência se desvio posterior com sintomas mediastinais'
      ],
      treatment: 'Desvio posterior: redução cirúrgica urgente. Desvio anterior: conservador ou redução fechada. Em jovens: diferenciação com luxação esternoclavicular por TC (placa de crescimento).',
      prognosis: 'Moderado a reservado. Artrose esternoclavicular e instabilidade residual possíveis.',
      colorCode: 'caution'
    },
    {
      id: 'robinson-2a1',
      label: 'Tipo 2A1 — Terço Médio, Não Deslocada, Simples/Cunha',
      description: 'Fratura do terço médio da clavícula sem desvio significativo — padrão simples ou em cunha (butterfly)',
      criteria: [
        'Localização: terço médio da clavícula (segmento entre as inserções do deltoide e do trapézio)',
        'Desvio < 100% da espessura cortical',
        'Padrão simples (transversa, oblíqua) ou cunha (butterfly fragment)',
        'Incidência: ~69% de todas as fraturas da clavícula — mais comum',
        'AO/OTA 15.2B (diáfise clavícula)',
        'Sem encurtamento significativo (< 1,5 cm)',
        'Mecanismo: queda sobre o ombro ou trauma direto'
      ],
      treatment: 'Conservador: tipoia por 4–6 semanas com analgesia e mobilização precoce do cotovelo e dedos. Alta taxa de consolidação (> 95%). RX de controle em 4–6 semanas.',
      prognosis: 'Excelente. Consolidação em > 95%. Encurtamento residual < 1,5 cm geralmente bem tolerado funcionalmente.',
      colorCode: 'safe'
    },
    {
      id: 'robinson-2a2',
      label: 'Tipo 2A2 — Terço Médio, Não Deslocada, Cominutiva',
      description: 'Fratura do terço médio da clavícula sem desvio mas com cominuição',
      criteria: [
        'Localização: terço médio da clavícula',
        'Desvio < 100% da espessura cortical',
        'Cominuição — múltiplos fragmentos sem desvio',
        'Sem encurtamento significativo',
        'Mecanismo de alta energia típico',
        'AO/OTA 15.2C (diáfise cominutiva)'
      ],
      treatment: 'Conservador: tipoia com monitorização radiográfica cuidadosa. Risco de desvio secundário maior que 2A1 pela instabilidade inerente da cominuição.',
      prognosis: 'Bom. Taxa de consolidação ligeiramente menor que fraturas simples. Monitorização de desvio secundário necessária.',
      colorCode: 'safe'
    },
    {
      id: 'robinson-2b1',
      label: 'Tipo 2B1 — Terço Médio, Deslocada, Simples/Cunha',
      description: 'Fratura do terço médio da clavícula com desvio significativo — padrão simples ou cunha. Principal indicação de cirurgia.',
      criteria: [
        'Localização: terço médio da clavícula',
        'Desvio ≥ 100% da espessura cortical (sobreposição completa dos fragmentos)',
        'Padrão simples ou cunha',
        'Encurtamento da clavícula ≥ 2 cm = indicação cirúrgica relativa/absoluta',
        'Fratura exposta = indicação cirúrgica absoluta',
        'Tenting cutâneo (ameaça de exposição) = indicação relativa',
        'Lesão neurovascular associada = indicação absoluta',
        '"Floating shoulder" (fratura da clavícula + escápula) = indicação relativa a absoluta'
      ],
      treatment: 'Conservador: tipoia em pacientes de baixa demanda sem indicação cirúrgica absoluta. Cirurgia (indicações): encurtamento > 2 cm, fratura exposta, lesão neurovascular, floating shoulder, tenting cutâneo, não consolidação prevista (cominuição, desvio). Fixação: placa anatômica de clavícula superior ou anteroinferior (LCP) OU haste intramedular elástica (Rockwood pin, TEN).',
      prognosis: 'Moderado a bom. Pseudoartrose em 5–15% sem cirurgia quando deslocada. Cirurgia reduz risco de pseudoartrose e melhora força e endurance do ombro. Encurtamento > 2 cm associado a piores resultados funcionais.',
      colorCode: 'caution'
    },
    {
      id: 'robinson-2b2',
      label: 'Tipo 2B2 — Terço Médio, Deslocada, Cominutiva',
      description: 'Fratura do terço médio da clavícula com desvio significativo e cominuição — maior risco de pseudoartrose e pior prognóstico funcional',
      criteria: [
        'Localização: terço médio da clavícula',
        'Desvio ≥ 100% da espessura cortical',
        'Cominuição — múltiplos fragmentos com desvio',
        'Encurtamento > 2 cm frequente',
        'Risco máximo de pseudoartrose no tratamento conservador (15–25%)',
        'Mecanismo de alta energia',
        'AO/OTA 15.2C deslocada'
      ],
      treatment: 'Cirurgia: placa de bloqueio anatômica de clavícula com parafusos bicorticais. Enxerto ósseo se necessário para preencher lacuna de cominuição. Haste intramedular menos indicada por incapacidade de controlar cominuição.',
      prognosis: 'Moderado. Maior risco de pseudoartrose com conservador. Cirurgia com placa reduz significativamente este risco mas aumenta taxa de complicações de ferida e necessidade de retirada de material.',
      colorCode: 'danger'
    },
    {
      id: 'robinson-3a1',
      label: 'Tipo 3A1 — Terço Lateral, Não Deslocada, Extra-articular',
      description: 'Fratura do terço lateral da clavícula sem desvio, fora da articulação acromioclavicular — ligamentos coracoclaviculares intactos',
      criteria: [
        'Localização: terço lateral (25% lateral da clavícula)',
        'Desvio < 100%',
        'Extra-articular — não envolve a articulação acromioclavicular',
        'Ligamentos coracoclaviculares (conoide + trapezoide) INTACTOS',
        'Equivale ao Craig Tipo I (lateral ao ligamento CC) e Tipo II (entre os ligamentos CC)',
        'Incidência: ~28% das fraturas da clavícula',
        'Prognóstico estável pela integridade dos ligamentos CC'
      ],
      treatment: 'Conservador: tipoia por 4–6 semanas. Alta taxa de consolidação pela ancoragem periosteal e ligamentar.',
      prognosis: 'Excelente. Consolidação consistente pela ancoragem dos ligamentos coracoclaviculares. Pseudoartrose muito rara.',
      colorCode: 'safe'
    },
    {
      id: 'robinson-3a2',
      label: 'Tipo 3A2 — Terço Lateral, Não Deslocada, Intra-articular',
      description: 'Fratura do terço lateral da clavícula sem desvio envolvendo a articulação acromioclavicular',
      criteria: [
        'Localização: terço lateral com extensão à articulação acromioclavicular',
        'Desvio < 100%',
        'Intra-articular acromioclavicular',
        'Ligamentos CC relativamente preservados',
        'Craig Tipo V equivalente (intra-articular)',
        'Risco de artrose acromioclavicular pós-traumática'
      ],
      treatment: 'Conservador: tipoia por 4–6 semanas. Monitorar artrose AC a longo prazo.',
      prognosis: 'Bom. Artrose acromioclavicular sintomática em 10–20% a longo prazo — ressecção distal da clavícula se refratária.',
      colorCode: 'safe'
    },
    {
      id: 'robinson-3b1',
      label: 'Tipo 3B1 — Terço Lateral, Deslocada, Extra-articular (Craig II)',
      description: 'Fratura do terço lateral da clavícula com desvio, ligamentos coracoclaviculares rompidos — alta taxa de pseudoartrose. Corresponde ao Craig Tipo II.',
      criteria: [
        'Localização: terço lateral, medial à inserção dos ligamentos CC',
        'Desvio ≥ 100% — fragmento medial elevado pelo trapézio',
        'Ligamentos coracoclaviculares ROMPIDOS no fragmento medial',
        'Fragmento lateral ancorado ao acrômio pelo ligamento AC + CC remanescente',
        'Forças deformantes: trapézio eleva fragmento medial; peso do membro + deltoide deprimem fragmento lateral',
        'Craig Tipo II: fratura medial aos ligamentos CC com ruptura dos CC',
        'Alta taxa de pseudoartrose com tratamento conservador (30–40%)'
      ],
      treatment: 'Cirurgia frequentemente indicada: fixação com placa em gancho (hook plate) OU parafuso coracoclavicular ± osteossíntese da fratura. A placa em gancho deve ser retirada em 3–6 meses (erosão acromial). Alternativas: endobutton coracoclavicular, parafuso CC com enxerto. Conservador pode ser considerado em idosos com baixa demanda — tolerância à pseudoartrose fibrosa sintomática.',
      prognosis: 'Moderado. Pseudoartrose em 30–40% com conservador — pode ser assintomática ou sintomática. Cirurgia reduz risco de pseudoartrose mas tem complicações específicas (soltura de placa em gancho, erosão acromial).',
      colorCode: 'danger'
    },
    {
      id: 'robinson-3b2',
      label: 'Tipo 3B2 — Terço Lateral, Deslocada, Intra-articular',
      description: 'Fratura do terço lateral da clavícula com desvio envolvendo a articulação acromioclavicular — ligamentos rompidos + extensão articular',
      criteria: [
        'Localização: terço lateral com extensão à articulação acromioclavicular',
        'Desvio ≥ 100%',
        'Intra-articular acromioclavicular',
        'Ligamentos CC rompidos',
        'Craig Tipo IV (fratura com luxação posterior pelo trapézio) ou Tipo VI (raros)',
        'Lesão complexa: instabilidade + extensão articular',
        'Frequentemente requer reconstrução ligamentar associada'
      ],
      treatment: 'Cirurgia: fixação da fratura + reconstrução dos ligamentos CC se necessário. Placa em gancho ou fixação CC. Artroscopia AC assistida em casos selecionados.',
      prognosis: 'Moderado a reservado. Artrose acromioclavicular frequente. Instabilidade residual possível se reconstrução CC inadequada.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Indicações cirúrgicas na fratura de clavícula: (1) Absoluta: fratura exposta, lesão vascular ou neurológica (plexo braquial), tenting cutâneo iminente; (2) Relativa: encurtamento > 2 cm (evidência moderada de melhora funcional com cirurgia), floating shoulder (fratura de clavícula + colo de escápula = instabilidade do complexo suspensor superior do ombro), atletas de alta demanda, bilateral, politraumatizado. Encurtamento > 2 cm: associado a redução de força de ombro e endurance a longo prazo (McKee 2006, JBJS). Classificação de Craig (terço lateral): Tipo I (lateral aos ligamentos CC — estável), Tipo II (medial aos CC com ruptura — instável, 30–40% pseudoartrose), Tipo III (articular AC sem ruptura CC), Tipo IV (posterior no trapézio — crianças), Tipo V (inferior com ruptura CC), Tipo VI (inferior ao processo coracoide — muito raro).',
  pitfall: 'A maioria das fraturas do terço médio displasadas NÃO precisa de cirurgia — evidência para cirurgia rotineira ainda controversa (estudo COTS 2007: NNT de 15 para evitar 1 pseudoartrose, mas 3,8% de complicações cirúrgicas). Fractura do terço lateral com ligamentos CC intactos (3A) tem prognóstico excelente com conservador — não confundir com 3B (CC rompidos). Na fratura do terço lateral 3B1 (Craig II), o fragmento medial NÃO tem ancoragem ligamentar para o coracoide — é o principal fator de pseudoartrose. Sempre avaliar o plexo braquial e a artéria subclávia em fraturas de clavícula deslocadas com mecanismo de alta energia.',
  references: [
    {
      authors: 'Robinson CM',
      title: 'Fractures of the clavicle in the adult. Epidemiology and classification',
      journal: 'J Bone Joint Surg Br',
      year: 1998
    },
    {
      authors: 'Canadian Orthopaedic Trauma Society',
      title: 'Nonoperative treatment compared with plate fixation of displaced midshaft clavicular fractures: a multicenter, randomized clinical trial',
      journal: 'J Bone Joint Surg Am',
      year: 2007
    },
    {
      authors: 'McKee MD, Pedersen EM, Jones C, et al',
      title: 'Deficits following nonoperative treatment of displaced midshaft clavicular fractures',
      journal: 'J Bone Joint Surg Am',
      year: 2006
    },
    {
      authors: 'Craig EV',
      title: 'Fractures of the clavicle',
      journal: 'Rockwood and Green\'s Fractures in Adults',
      year: 1996
    }
  ]
};
