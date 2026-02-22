import type { ClassificationData } from '@/types/classification.ts';

export const masonClassificationData: ClassificationData = {
  id: 'mason-classification',
  name: 'Classificação de Mason – Fraturas da Cabeça do Rádio',
  author: 'Mason',
  year: 1954,
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
