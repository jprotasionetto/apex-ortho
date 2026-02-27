import type { ClassificationData } from '@/types/classification.ts';

export const masonClassificationData: ClassificationData = {
  id: 'mason-classification',
  name: 'Classificação de Mason – Fraturas da Cabeça do Rádio',
  author: 'Mason',
  year: 1954,
  epidemiology: 'Fraturas da cabeça do rádio são as fraturas mais comuns do cotovelo no adulto: ~33% de todas as fraturas do cotovelo e ~3–5% de todas as fraturas. Incidência: ~30/100.000/ano. Pico na 4ª–5ª décadas. Relação F:M 1,5:1 (osteoporose pré-menopausa/menopausa). Distribuição: Mason I 50–55%, Mason II 20–25%, Mason III 15–20%, Mason IV com luxação ~10%. Hemartrose do cotovelo em 100% dos casos → sinal da gordura posterior ("posterior fat pad sign") na radiografia lateral = hemartrose = fratura até prova em contrário. Lesão Essex-Lopresti (Mason III + ruptura da membrana interóssea + DRUJ) em 1–3% — raramente diagnosticada agudamente; sequela grave. LCL lesado em 20–30% dos Mason II–III. Triad terrível (Mason IV + luxação + coronóide fraturada) em 5–10% das Mason com luxação — instabilidade grave. Artrose pós-traumática em ~20% das Mason II–III com redução inadequada.',
  mechanism: 'Mecanismo: queda com mão espalmada no chão (FOOSH — Fall On OutStretched Hand) → força axial transmitida pelo rádio → cabeça do rádio impacta o capítulo umeral. Em pronação (posição mais comum na queda): o aspecto anterolateral da cabeça do rádio (o setor que contata o capítulo em pronação completa) é o local preferencial de fratura. Com energia crescente: Tipo I = fissura/fratura sem desvio. Tipo II = fragmento marginal deslocado pelo impacto contra capítulo. Tipo III = cominuição total (alta energia — impacto direto ou queda de altura). Tipo IV = força adicional desvia todo o rádio + ruptura dos ligamentos colaterais → luxação. A cabeça do rádio tem dupla função biomecânica: (1) Estabilizadora em valgo (junto com LCM); (2) Transmissora longitudinal de forças (50% da carga axial vai pela rádio → capítulo → úmero). Excisão sem prótese em cotovelo instável → migração proximal do rádio + dor e DRUJ + instabilidade em valgo = Essex-Lopresti = desastre cirúrgico evitável.',
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I – Não Deslocada',
      description: 'Fratura não deslocada ou minimamente deslocada (<2mm) da cabeça do rádio.',
      criteria: [
        'Deslocamento <2mm',
        'Sem bloqueio mecânico',
        'Prono-supinação completa ou quase completa',
        'Fat pad sign positivo na radiografia',
      ],
      treatment: 'Tratamento conservador: tipoia 1-2 semanas, mobilização precoce. Aspiração da hemartrose para alívio da dor.',
      prognosis: 'Excelente. Recuperação completa em 4-6 semanas.',
      colorCode: 'safe',
    },
    {
      id: 'type-ii',
      label: 'Tipo II – Deslocamento Parcial',
      description: 'Fratura com deslocamento >2mm ou angulação >30 graus, envolvendo fragmento marginal.',
      criteria: [
        'Deslocamento >2mm',
        'Angulação >30 graus',
        'Fragmento marginal da cabeça do rádio',
        'Possível bloqueio mecânico da prono-supinação',
        'Envolve geralmente <30% da superfície articular',
      ],
      treatment: 'RAFI (redução aberta e fixação interna) com parafusos ou placa se fragmento >30% da superfície, bloqueio mecânico ou instabilidade. Conservador se <30% e sem bloqueio.',
      prognosis: 'Bom com tratamento adequado. Risco de rigidez se imobilização prolongada.',
      colorCode: 'caution',
    },
    {
      id: 'type-iii',
      label: 'Tipo III – Cominutiva',
      description: 'Fratura cominutiva de toda a cabeça do rádio. Não passível de reconstrução.',
      criteria: [
        'Fratura cominutiva da cabeça do rádio',
        'Múltiplos fragmentos',
        'Não reconstruível',
        'Possível bloqueio mecânico',
      ],
      treatment: 'Excisão da cabeça do rádio com prótese metálica se instabilidade do cotovelo ou lesão da membrana interóssea (Essex-Lopresti). Excisão simples se cotovelo estável.',
      prognosis: 'Bom com prótese se indicação correta. Risco de instabilidade em valgo se excisão sem prótese com lesão ligamentar.',
      colorCode: 'danger',
    },
    {
      id: 'type-iv',
      label: 'Tipo IV – Com Luxação do Cotovelo',
      description: 'Fratura da cabeça do rádio associada a luxação do cotovelo (modificação de Hotchkiss/Johnston).',
      criteria: [
        'Fratura da cabeça do rádio (qualquer tipo)',
        'Luxação do cotovelo associada',
        'Possível tríade terrível (+ coronóide + LCL)',
        'Instabilidade do cotovelo',
      ],
      treatment: 'Tratamento cirúrgico. Fixação ou prótese da cabeça do rádio + reparação ligamentar (LCL). Fixação da coronóide se fraturada.',
      prognosis: 'Reservado. Depende das lesões associadas. Risco de rigidez e instabilidade residual.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Sempre avaliar a estabilidade do cotovelo e a articulação radioulnar distal (Essex-Lopresti). A decisão entre excisão simples e prótese depende da estabilidade ligamentar.',
  pitfall: 'O fat pad sign posterior pode ser o único sinal radiográfico em fraturas tipo I. Não confundir fratura tipo III isolada e estável com tipo IV (com luxação) – o tratamento é diferente.',
  references: [
    {
      authors: 'Mason ML',
      title: 'Some observations on fractures of the head of the radius with a review of one hundred cases',
      journal: 'British Journal of Surgery',
      year: 1954,
    },
  ],
};
