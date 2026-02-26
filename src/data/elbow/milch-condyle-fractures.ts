import type { ClassificationData } from '@/types/classification';

export const milchCondyleFracturesData: ClassificationData = {
  id: 'milch-condyle-fractures',
  name: 'Classificação de Milch — Fraturas do Côndilo Lateral e Medial do Úmero',
  author: 'Milch',
  year: 1936,
  epidemiology: 'Fraturas do côndilo lateral representam 12–17% de todas as fraturas do cotovelo em crianças (2ª mais comum, após supracondiliana). Pico de incidência: 5–10 anos. Mecanismo: queda com valgo em extensão — compressão do capitelo pelo cabeça do rádio. Fraturas do côndilo medial são raras (1% das fraturas do cotovelo pediátrico), frequentemente associadas a avulsão do epicôndilo medial. Na classificação de Milch: Tipo II são instáveis e requerem redução aberta por risco de cubitus valgus e síndrome do nervo ulnar tardio.',
  mechanism: 'Côndilo lateral (mais comum): mecanismo de valgismo em extensão + compressão axial pela cabeça do rádio empurrando o capitelo. O fragmento inclui o capitelo e pode incluir a crista lateral da tróclea (Tipo II — instável). Côndilo medial (raro): mecanismo de avulsão em valgo — o epitróclea arranca com parte do côndilo medial, ou compressão direta em varo. A linha de fratura em relação ao sulco/crista troclear determina a estabilidade articular (chave da classificação).',
  surgicalBasis: 'A classificação de Milch guia o tratamento pelo conceito de estabilidade articular: Tipo I (Milch) — a crista lateral da tróclea permanece com o úmero, mantendo a articulação de dobradiça → pode ser estável → tratamento conservador se sem deslocamento. Tipo II (Milch) — a linha de fratura passa medialmente à tróclea, levando a crista lateral COM o fragmento → articulação instável → indicação cirúrgica de redução aberta + fixação com fios de Kirschner ou parafusos. Complicações de fraturas não tratadas do côndilo lateral: malunião em valgo (cubitus valgus), síndrome do nervo ulnar tardio (décadas depois), não-união (pseudoartrose), artrose pós-traumática.',
  grades: [
    {
      id: 'lateral-tipo-1',
      label: 'Côndilo Lateral — Milch Tipo I (Salter-Harris II)',
      description: 'Linha de fratura passa pelo capitelo — crista lateral da tróclea permanece com o úmero',
      criteria: [
        'Linha de fratura através do capitelo (osso subcondral ou cartilagem)',
        'Crista lateral da tróclea permanece com o úmero (intacta)',
        'Articulação umeroradial potencialmente estável',
        'Corresponde a Salter-Harris Tipo II (metáfise)',
        'Fragmento inclui: capitelo + porção lateral do úmero distal',
        'Rx: linha de fratura lateral ao sulco troclear'
      ],
      treatment: 'Sem deslocamento (< 2 mm): imobilização em flexão 90° + supinação 4–6 semanas. Controle radiográfico semanal (risco de deslocamento secundário). Deslocamento > 2 mm: redução percutânea + fios de Kirschner cruzados sob fluoroscopia.',
      prognosis: 'Melhor prognóstico quando diagnosticado precocemente. Risco de não-união se não detectado — fragmento avascular por rotação.',
      colorCode: 'caution'
    },
    {
      id: 'lateral-tipo-2',
      label: 'Côndilo Lateral — Milch Tipo II (Salter-Harris IV)',
      description: 'Linha de fratura passa pela crista lateral da tróclea — articulação instável',
      criteria: [
        'Linha de fratura atravessa a tróclea medialmente à crista lateral',
        'Crista lateral da tróclea é levada COM o fragmento',
        'Articulação umeroradial E umeroulnar potencialmente instáveis',
        'Corresponde a Salter-Harris Tipo IV (epifisário)',
        'Fragmento inclui: capitelo + crista lateral da tróclea',
        'Maior tendência ao deslocamento e rotação do fragmento'
      ],
      treatment: 'Redução aberta e fixação interna (ORIF) indicada: abordagem lateral (Kocher ou Kaplan), redução anatômica, fixação com 2 fios de Kirschner paralelos (ou parafuso canulado em crianças maiores). Imobilização pós-operatória 4–6 semanas.',
      prognosis: 'Sem tratamento adequado: cubitus valgus (deformidade em valgo), síndrome do nervo ulnar tardio (décadas depois), pseudoartrose. Cirurgia precoce: excelentes resultados em > 90% dos casos.',
      colorCode: 'danger'
    },
    {
      id: 'medial-tipo-1',
      label: 'Côndilo Medial — Milch Tipo I',
      description: 'Fratura do côndilo medial com linha de fratura pelo capitelo medial — tróclea parcialmente intacta',
      criteria: [
        'Fratura rara do côndilo medial',
        'Linha de fratura medial à crista da tróclea',
        'Fragmento inclui epitróclea + porção do côndilo medial',
        'Articulação potencialmente mais estável',
        'TC frequentemente necessária para definição do traço',
        'Risco de lesão do nervo ulnar'
      ],
      treatment: 'Fraturas sem deslocamento: tratamento conservador com órtese em flexão 90°. Deslocamento: ORIF. Sempre verificar nervo ulnar (parestesias, deficit de flexão 4°-5° dedos).',
      prognosis: 'Risco de não-união se deslocado e não tratado. Cubitus varus pode ocorrer.',
      colorCode: 'caution'
    },
    {
      id: 'medial-tipo-2',
      label: 'Côndilo Medial — Milch Tipo II',
      description: 'Fratura do côndilo medial com linha atravessando a crista troclear — instabilidade articular',
      criteria: [
        'Linha de fratura atravessa a crista da tróclea',
        'Fragmento grande incluindo porção significativa da tróclea',
        'Instabilidade articular do cotovelo',
        'Risco de lesão do nervo ulnar (anatomicamente próximo)',
        'Frequentemente associada a avulsão do epicôndilo medial',
        'Deformidade em varo pode ocorrer'
      ],
      treatment: 'ORIF sempre indicado. Abordagem medial com cuidado com nervo ulnar (transposição pode ser necessária). Fixação com parafusos ou fios de Kirschner. Verificar integridade ligamentar.',
      prognosis: 'Maior risco de complicações neurológicas (n. ulnar). Resultados bons com tratamento cirúrgico adequado.',
      colorCode: 'danger'
    },
    {
      id: 'jakob-1',
      label: 'Jakob I — Sem Deslocamento (Complementar)',
      description: 'Cotovelo lateral: fratura de côndilo lateral sem deslocamento — cartilagem intacta',
      criteria: [
        'Classificação de Jakob complementa Milch para côndilo lateral pediátrico',
        'Jakob I: fratura incompleta, sem deslocamento (< 2 mm)',
        'Cartilagem articular intacta na artroscopia/TC',
        'Aspecto de "microfissura" na radiografia',
        'Fragmento estável'
      ],
      treatment: 'Imobilização 4–6 semanas. Controle radiográfico semanal nas primeiras 3 semanas.',
      prognosis: 'Excelente prognóstico com imobilização adequada.',
      colorCode: 'safe'
    },
    {
      id: 'jakob-2',
      label: 'Jakob II — Deslocamento Parcial (Complementar)',
      description: 'Côndilo lateral: fratura com deslocamento parcial — cartilagem ainda em continuidade',
      criteria: [
        'Deslocamento 2–4 mm',
        'Cartilagem articular parcialmente íntegra (dobradiça condral)',
        'Fragmento deslocado mas ainda "pregado" por cartilagem',
        'Fluoroscopia + artrograma necessários para definição'
      ],
      treatment: 'Controverso: redução percutânea + fios K vs ORIF. Artrograma intraoperatório para confirmar integridade condral.',
      prognosis: 'Bom com redução adequada.',
      colorCode: 'caution'
    },
    {
      id: 'jakob-3',
      label: 'Jakob III — Deslocamento Completo (Complementar)',
      description: 'Côndilo lateral: fratura completamente deslocada e rotada — cartilagem rompida',
      criteria: [
        'Deslocamento > 4 mm com rotação do fragmento',
        'Cartilagem articular completamente rompida',
        'Fragmento rotado até 90° ou 180° possível',
        'Rx: fragmento lateral com aspecto "invertido"',
        'Articulação instável'
      ],
      treatment: 'ORIF obrigatório. Redução aberta (abordagem de Kocher), desrotação do fragmento, fixação com 2 fios de Kirschner paralelos. Imobilização 6 semanas.',
      prognosis: 'Risco de não-união, cubitus valgus e n. ulnar tardio se não tratado.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Na suspeita de fratura do côndilo lateral, SEMPRE solicitar incidência oblíqua (30-40° de pronação) além das incidências padrão — o traço de fratura pode ser invisível em AP puro. O sinal da "gordura" (fat pad sign) posterior na lateral é altamente sugestivo mesmo com Rx aparentemente normal.',
  pitfall: 'Não confundir o centro de ossificação do capitelo com um fragmento osteocondral! A epífise condral é cartilaginosa até os 2 anos. Em crianças < 2 anos, a artrograma ou RM é necessária. A classificação de Milch foi originalmente descrita para adultos — em crianças, a classificação de Jakob é mais utilizada clinicamente.',
  references: [
    { id: 'r1', text: 'Milch H. Fractures and fracture dislocations of the humeral condyles. J Trauma. 1964;4:592-607.' },
    { id: 'r2', text: 'Jakob R, et al. Observations concerning fractures of the lateral humeral condyle in children. J Bone Joint Surg Br. 1975;57(4):430-436.' },
    { id: 'r3', text: 'Weiss JM, et al. Lateral humeral condyle fractures in children. J Pediatr Orthop. 2009;29(6):576-582.' },
    { id: 'r4', text: 'Flynn JM, ed. Rockwood and Wilkins Fractures in Children, 8th ed. Lippincott Williams & Wilkins, 2015.' }
  ]
};
