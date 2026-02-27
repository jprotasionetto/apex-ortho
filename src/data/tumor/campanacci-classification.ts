import type { ClassificationData } from '@/types/classification.ts';

export const campanacciClassificationData: ClassificationData = {
  id: 'campanacci-classification',
  name: 'Classificacao de Campanacci (Tumor de Celulas Gigantes)',
  author: 'Campanacci',
  year: 1987,
  epidemiology: 'Tumor de células gigantes (TCG) representa 5% dos tumores ósseos primários e 20% dos benignos. Incidência: 1–1,5/1.000.000/ano; pico 20–40 anos; leve predominância feminina. Localização: metáfise-epífise de ossos longos — 60% ao redor do joelho (fêmur distal + tíbia proximal). Grau III: 15–25% dos casos. Transformação maligna: <5%. Metástase pulmonar benigna (lung implants): 2–3% independente do grau. Denosumab (anti-RANKL) aprovado FDA 2013 para TCG irressecável ou cirurgia com morbidade excessiva.',
  mechanism: 'TCG origina das células estromais do compartimento mieloide — não das células gigantes (osteoclastos recrutados). Células estromais expressam RANKL em excesso → recrutamento de osteoclastos (células gigantes multinucleadas) → destruição óssea agressiva. Denosumab: anticorpo anti-RANKL → inibe osteoclastos → recuperação da cortical óssea. Adjuvantes intraoperatórios (fenol 5%, N2 líquido, eletrocautério): criam necrose química/física de 1–2mm além da margem visível → reduz recidiva de 40–60% (curetagem simples) para 10–30% (curetagem + adjuvante). PMMA gera necrose térmica adicional e permite detecção precoce de recidiva pelo RX.',
  grades: [
    {
      id: 'grade-1',
      label: 'Grau I (Latente)',
      description: 'Lesao com margens bem definidas e borda esclerótica',
      criteria: [
        'Lesao geografica com margem esclerótica bem definida',
        'Cortical intacta e preservada',
        'Sem expansao significativa do osso',
        'Pode ser assintomatica ou com dor leve',
        'Correspondencia radiografica: Lodwick IA'
      ],
      treatment: 'Curetagem intralesional estendida com adjuvantes locais (fenol, nitrogenio liquido, eletrocauterio de alta velocidade) e preenchimento com cimento (PMMA) ou enxerto osseo',
      prognosis: 'Bom; taxa de recidiva 10-15% com curetagem e adjuvantes',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau II (Ativo)',
      description: 'Lesao com margem definida mas sem esclerose, cortical adelgacada e expandida',
      criteria: [
        'Lesao geografica com margem definida mas sem esclerose',
        'Cortical adelgacada e expandida (insuflada)',
        'Sem rotura cortical franca',
        'Frequentemente sintomatica com dor e edema',
        'Correspondencia radiografica: Lodwick IB'
      ],
      treatment: 'Curetagem intralesional estendida agressiva com adjuvantes locais e preenchimento com PMMA (permite deteccao precoce de recidiva no RX). Considerar denosumab neoadjuvante para reduzir tumor.',
      prognosis: 'Moderado; taxa de recidiva 20-30%; PMMA permite monitoramento radiografico eficaz',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau III (Agressivo)',
      description: 'Lesao com rotura cortical e extensao para partes moles',
      criteria: [
        'Rotura da cortical com massa em partes moles',
        'Margens mal definidas na zona de rotura cortical',
        'Crescimento rapido e sintomatico',
        'Pode causar fratura patologica',
        'Correspondencia radiografica: Lodwick IC/II',
        'Pode ter transformacao maligna rara (<5%)'
      ],
      treatment: 'Resseccao ampla (en bloc) com reconstrucao (endoprotese, aloenxerto, artrodese). Curetagem pode ser tentada em localizacoes dificeis com denosumab neoadjuvante. Embolizacao pre-operatoria recomendada.',
      prognosis: 'Reservado; recidiva com curetagem >50%; resseccao ampla com recidiva de 5-10%. Risco de metastase pulmonar benigna em 2-3%.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Grau III pode necessitar resseccao ampla + reconstrucao. O denosumab (anti-RANKL) revolucionou o tratamento, permitindo reducao tumoral pre-operatoria e facilitando curetagem em casos selecionados de grau III.',
  pitfall: 'Recidiva local comum mesmo com curetagem + adjuvante. O PMMA gera necrose termica nas margens e facilita deteccao precoce de recidiva. Recidiva em partes moles nao e detectavel ao RX.',
  references: [
    'Campanacci M, Baldini N, Boriani S, Sudanese A. Giant-cell tumor of bone. J Bone Joint Surg Am. 1987;69(1):106-114.',
    'Balke M, et al. Giant cell tumors of bone. Clin Orthop Relat Res. 2012;470(8):2000-2008.'
  ]
};
