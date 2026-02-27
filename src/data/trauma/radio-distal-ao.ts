import type { ClassificationData } from '@/types/tool';

export const radioDistalAOData: ClassificationData = {
  id: 'radio-distal-ao',
  name: 'Classificação AO — Fratura do Terço Distal do Rádio (23)',
  author: 'Müller / AO Foundation / Fernandez',
  year: 2018,
  epidemiology: 'Fraturas do rádio distal são as mais comuns no adulto: 15–20% de todas as fraturas em PS; incidência: 400/100.000/ano em mulheres >65a. Bimodal: adultos jovens (alta energia: acidentes) e mulheres pós-menopáusicas (osteoporose). Fratura de Colles (23-A2/A3, extra-articular dorsal): ~75% de todas as fraturas do rádio distal. Articular completa (23-C): 25–30%. Taxa de desvio secundário em gesso: 30–50% em idosos — justifica maior indicação cirúrgica. Placa volar de ângulo fixo (VLP): revolucionou o tratamento → fixação estável + reabilitação precoce + retorno precoce às atividades.',
  mechanism: 'A metáfise distal do rádio é zona de transição entre osso esponjoso (compressão) e cortical (tensão) → vulnerável a impactação. Mecanismo clássico: queda sobre mão em extensão → carga axial + momento de flexão dorsal → fratura da metáfise distal (Colles). Tipos AO: A (extra-articular) → B (articular parcial, uma margem preserva ligação com metáfise) → C (articular completa, toda articulação separada da diáfise). SARUD (superfície articular rádio-ulnar distal): lesão associada frequente (23-C → "Galeazzi do punho") — avaliação obrigatória. Classificação de Fernandez complementa a AO pelo mecanismo: I (flexão) → II (compressão articular = die-punch) → III (avulsão ligamentar = Barton) → IV (alta energia) → V (luxação).',
  grades: [
    {
      id: 'ao-23a',
      label: 'AO 23-A — Fratura Extra-Articular',
      colorCode: 'safe',
      description: 'Fratura do terço distal do rádio sem extensão à superfície articular do rádio distal',
      criteria: [
        'AO 23-A1: fratura isolada da ulna distal (estilóide, metáfise)',
        'AO 23-A2: fratura simples (transversa ou oblíqua) do rádio — sem cominuição',
        'AO 23-A3: fratura do rádio com cominuição metafisária (cunha ou fragmentada)',
        'Superfície articular radiocárpica íntegra',
        'Superfície articular rádio-ulnar distal (SARUD) íntegra',
        'Tratamento conservador geralmente viável se critérios radiográficos favoráveis',
        'Parâmetros aceitáveis: inclinação radial ≥ 15°, altura radial ≥ 10 mm, inclinação palmar entre -15° e +20°'
      ],
      treatment: 'Conservador em gesso axilopalmar por 5-6 semanas se parâmetros aceitáveis. Indicação cirúrgica (placa volar com parafusos de ângulo fixo): desvio > 5 mm altura radial, angulação dorsal > 10°, incongruência articular > 2 mm, instabilidade após redução.'
    },
    {
      id: 'ao-23b',
      label: 'AO 23-B — Fratura Parcialmente Articular',
      colorCode: 'caution',
      description: 'Uma parte da superfície articular está envolvida, mas a outra permanece unida ao fragmento proximal',
      criteria: [
        'AO 23-B1: fratura sagital (corte no plano sagital) da margem radial — "fratura de Chauffeur"',
        'AO 23-B2: fratura da margem dorsal (fragmento de Barton dorsal)',
        'AO 23-B3: fratura da margem palmar (Barton palmar / fratura de volar rim)',
        'Articulação rádio-cárpica parcialmente comprometida',
        'Risco de instabilidade do carpo quando margens estão envolvidas',
        'Requer avaliação de estabilidade carpiana (desvio do semilunar, DISI/VISI)'
      ],
      treatment: 'Fratura de Barton palmar e dorsal: cirurgia com placa de contrafim (buttress). Fratura de Chauffeur: RAFI com parafuso canulado ou placa. Pós-op: órtese por 4-6 semanas, fisioterapia precoce.'
    },
    {
      id: 'ao-23c',
      label: 'AO 23-C — Fratura Completamente Articular',
      colorCode: 'danger',
      description: 'Toda a superfície articular está separada do fragmento diafisário — padrão mais complexo, classificação de Fernandez tipo IV-V',
      criteria: [
        'AO 23-C1: fratura articular simples + fratura metafisária simples',
        'AO 23-C2: fratura articular simples + fratura metafisária cominutiva',
        'AO 23-C3: cominuição articular (múltiplos fragmentos articulares) — pior prognóstico',
        'Separação completa da superfície articular em relação à diáfise',
        'Frequentemente associada a lesão da SARUD (Galeazzi equivalente)',
        'Requer TC pré-operatória para planejamento — identificar fragmentos articulares menores',
        'Critério cirúrgico absoluto: degrau articular > 2 mm'
      ],
      treatment: 'RAFI obrigatório: placa volar de ângulo fixo (gold standard). C3: pode necessitar placa dorsal adicional, fixação com placa fragmentada, ou fixador externo provisório (damage control). TC pré-op essencial. Reabilitação com fisioterapia precoce em 2-4 semanas.'
    }
  ],
  references: [
    'SBOT — Manual de Trauma Ortopédico, 1ª edição 2023, Capítulo Fratura do Terço Distal do Rádio (pp. 100-113)',
    'Müller ME, et al. The Comprehensive Classification of Fractures of Long Bones. Springer; 1990.',
    'Fernandez DL. Fractures of the distal radius: operative treatment. Instr Course Lect. 1993;42:73-88.',
    'Lichtman DM, et al. Distal Radius Fractures — Classification and Evaluation. J Am Acad Orthop Surg. 2010;18(10):601-10.'
  ]
};

// Fernandez classification (complementary to AO)
export const fernandezClassificationData: ClassificationData = {
  id: 'fernandez-radio-distal',
  name: 'Classificação de Fernandez — Fratura do Rádio Distal',
  author: 'Diego L. Fernandez',
  year: 1993,
  epidemiology: 'Classificação mecanística de Fernandez (1993) para fraturas do rádio distal — complementar à AO morfológica. Tipo I (flexão): ~70–75% dos casos; inclui Colles (dorsal) e Smith (palmar). Tipo II (compressão articular = die-punch): 10–15%. Tipo III (avulsão ligamentar = Barton, Chauffeur): 5–10%. Tipo IV (compressão-cisalhamento alta energia): 5–8%. Tipo V (fratura-luxação): <5% mas mais grave. Valor clínico: orienta escolha de tratamento pelo mecanismo — I conservador viável; II–V quase sempre cirúrgico.',
  mechanism: 'Cada tipo de Fernandez corresponde a um mecanismo de falha biomecânica distinto: I (flexão): falha por tensão na cortical oposta ao lado comprimido (Colles = tensão volar, Smith = tensão dorsal) → fratura extra-articular metafisária. II (compressão): impactação direta do carpo sobre a superfície articular → "die-punch" com depressão do semilunar na fossa lunata. III (avulsão): forças ligamentares durante hiperpronação/supinação forçada → fragmentos de estilóide, margens articulares (Barton). IV (compressão-cisalhamento, alta energia): combinação de mecanismos → AO 23-C2/C3. V (fratura-luxação): lesão combinada rádio + SARUD ou luxação carpal perilunar — emergência cirúrgica.',
  grades: [
    {
      id: 'fernandez-i',
      label: 'Fernandez I — Flexão (Colles / Smith)',
      colorCode: 'safe',
      description: 'Falha por tensão na cortical oposta ao lado comprimido — mecanismo de flexão',
      criteria: [
        'Colles: dorsal, extra-articular — queda com pulso em extensão',
        'Smith: palmar, extra-articular — queda com pulso em flexão ("Colles invertido")',
        'Carga compressiva axial + flexão do punho',
        'Geralmente sem cominuição articular significativa'
      ],
      treatment: 'Maioria: tratamento conservador em gesso. Cirurgia se critérios de instabilidade.'
    },
    {
      id: 'fernandez-ii',
      label: 'Fernandez II — Compressão (Articular)',
      colorCode: 'caution',
      description: 'Falha compressiva da superfície articular — "die-punch" e fraturas articulares',
      criteria: [
        'Impactação direta da superfície articular pelo carpo',
        '"Die-punch": fragmento articular central deprimido',
        'Frequentemente associada à AO 23-B ou 23-C1',
        'Pode ser sutilmente visível no RX convencional — TC diagnóstica'
      ],
      treatment: 'Cirúrgico: elevação do fragmento articular ("tenting"), enxerto ósseo se necessário, fixação com placa volar ou parafusos.'
    },
    {
      id: 'fernandez-iii',
      label: 'Fernandez III — Avulsão (Ligamentar)',
      colorCode: 'caution',
      description: 'Avulsão de inserções ligamentares — estilóides e margens articulares',
      criteria: [
        'Avulsão do estilóide radial ("fratura de Chauffeur")',
        'Avulsão do estilóide ulnar',
        'Fratura de Barton (margem dorsal ou palmar)',
        'Risco de instabilidade carpiana associada'
      ],
      treatment: 'Cirúrgico: fixação do fragmento avulsionado (parafuso canulado, fio K, placa de contrafim). Avaliar ligamentos associados.'
    },
    {
      id: 'fernandez-iv',
      label: 'Fernandez IV — Compressão-Cisalhamento (Alta Energia)',
      colorCode: 'danger',
      description: 'Fratura articular complexa por alta energia — combinação de mecanismos',
      criteria: [
        'Alta energia cinética',
        'Cominuição articular e metafisária',
        'Frequentemente corresponde a AO 23-C2 ou C3',
        'Lesão de partes moles associada — risco de síndrome compartimental'
      ],
      treatment: 'RAFI complexa: placa volar + dorsal, fixador externo provisório, possível enxerto. Equipe experiente.'
    },
    {
      id: 'fernandez-v',
      label: 'Fernandez V — Combinado (Fratura-Luxação)',
      colorCode: 'danger',
      description: 'Fratura do rádio distal associada a luxação da SARUD, instabilidade grave do carpo',
      criteria: [
        'Fratura do rádio distal + luxação SARUD (Galeazzi equivalente)',
        'Fratura-luxação radiocárpica',
        'Luxação perilunar com fratura do rádio',
        'Alta energia — mecanismo complexo'
      ],
      treatment: 'Emergência: redução urgente. Estabilização da SARUD é obrigatória. Reparação ligamentar possível. Alto risco de rigidez e complicações.'
    }
  ],
  references: [
    'Fernandez DL. Fractures of the distal radius. Clin Plast Surg. 1989;16(1):39-55.',
    'SBOT — Manual de Trauma Ortopédico, 1ª edição 2023, pp. 100-113.'
  ]
};
