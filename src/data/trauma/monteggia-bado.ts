import type { ClassificationData } from '@/types/tool';

export const monteggiaBadoData: ClassificationData = {
  id: 'monteggia-bado',
  name: 'Classificação de Bado (Monteggia)',
  author: 'Bado',
  year: 1967,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I - Luxação Anterior',
      description: 'Luxação anterior da cabeça do rádio + fratura da ulna com ápice anterior',
      criteria: [
        'Luxação anterior da cabeça do rádio',
        'Fratura da diáfise proximal da ulna com angulação anterior',
        'Ápice anterior da fratura da ulna',
        'Mecanismo: hiperpronação forçada ou trauma direto',
        'Tipo mais comum (60-70% dos casos)',
        'Em crianças: pode ter fratura em galho verde da ulna'
      ],
      treatment: 'Crianças: redução fechada da luxação (supinação + flexão) e imobilização em supinação e flexão > 90°. Adultos: RAFI da ulna com placa DCP/LCP 3.5 mm + redução da cabeça do rádio (geralmente reduz com fixação da ulna).',
      prognosis: 'Bom prognóstico se diagnóstico e tratamento precoces. Crianças: excelente resultado com tratamento conservador. Adultos: bom com fixação adequada da ulna.',
      colorCode: 'caution'
    },
    {
      id: 'type-ii',
      label: 'Tipo II - Luxação Posterior',
      description: 'Luxação posterior da cabeça do rádio + fratura da ulna com ápice posterior',
      criteria: [
        'Luxação posterior ou posterolateral da cabeça do rádio',
        'Fratura da diáfise proximal da ulna com angulação posterior',
        'Ápice posterior da fratura da ulna',
        'Mecanismo: trauma axial com cotovelo em flexão',
        'Mais comum em adultos',
        'Pode incluir fratura do processo coronóide'
      ],
      treatment: 'Adultos: RAFI da ulna com placa + redução da cabeça do rádio. Se cabeça do rádio fraturada: fixação ou prótese da cabeça do rádio. Reparar ligamento anular se instável.',
      prognosis: 'Prognóstico moderado. Mais associado a instabilidade residual que tipo I. Risco de recidiva da luxação.',
      colorCode: 'caution'
    },
    {
      id: 'type-iii',
      label: 'Tipo III - Luxação Lateral',
      description: 'Luxação lateral da cabeça do rádio + fratura metafisária proximal da ulna',
      criteria: [
        'Luxação lateral ou anterolateral da cabeça do rádio',
        'Fratura da metáfise proximal da ulna',
        'Fratura geralmente distal ao processo coronóide',
        'Mecanismo: abdução forçada do antebraço',
        'Mais comum em crianças (5-10 anos)',
        'Pode estar associada a lesão do nervo interósseo posterior'
      ],
      treatment: 'Crianças: redução fechada e imobilização. Adultos: RAFI da ulna + redução da cabeça do rádio. Avaliar nervo interósseo posterior (queda dos dedos).',
      prognosis: 'Bom prognóstico em crianças. Risco de lesão do nervo interósseo posterior (geralmente neuropraxia com recuperação espontânea).',
      colorCode: 'caution'
    },
    {
      id: 'type-iv',
      label: 'Tipo IV - Luxação Anterior + Fratura de Ambos os Ossos',
      description: 'Luxação anterior da cabeça do rádio + fratura de ambos os ossos do antebraço',
      criteria: [
        'Luxação anterior da cabeça do rádio',
        'Fratura da diáfise da ulna (proximal)',
        'Fratura da diáfise do rádio (proximal)',
        'Combinação tipo I + fratura do rádio',
        'Alta energia',
        'Mais raro dos tipos'
      ],
      treatment: 'RAFI de ambos os ossos do antebraço (placas DCP/LCP). Redução da luxação da cabeça do rádio (geralmente reduz com fixação dos ossos). Reparo do ligamento anular se necessário.',
      prognosis: 'Prognóstico reservado pela complexidade da lesão. Maior risco de rigidez do cotovelo e sinostose radioulnar proximal.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Tipo I é o mais comum (60-70%). Regra fundamental: sempre radiografar o cotovelo em fratura isolada da ulna. Em toda fratura da ulna, suspeitar de luxação da cabeça do rádio.',
  pitfall: 'Luxação da cabeça do rádio pode ser sutil - regra: a linha do eixo longitudinal do rádio deve passar pelo centro do capitelo em TODAS as incidências radiográficas. Se não passa, há luxação.',
  references: [
    {
      authors: 'Bado JL',
      title: 'The Monteggia lesion',
      journal: 'Clin Orthop Relat Res',
      year: 1967
    },
    {
      authors: 'Ring D, Jupiter JB, Simpson NS',
      title: 'Monteggia fractures in adults',
      journal: 'J Bone Joint Surg Am',
      year: 1998
    }
  ]
};
