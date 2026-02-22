import type { ClassificationData } from '@/types/classification.ts';

export const morreyClassificationData: ClassificationData = {
  id: 'morrey-classification',
  name: 'Classificação de Morrey – Fraturas do Olécrano',
  author: 'Morrey',
  year: 2000,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I – Não Deslocada',
      description: 'Fratura do olécrano não deslocada ou minimamente deslocada (<2mm).',
      criteria: [
        'Deslocamento <2mm',
        'Mecanismo extensor intacto (extensão ativa contra gravidade)',
        'Articulação ulnoumeral estável',
        'Congruência articular mantida',
      ],
      treatment: 'Tratamento conservador: imobilização em tala posterior a 45-90° de flexão por 2-3 semanas, seguida de mobilização progressiva.',
      prognosis: 'Excelente. Consolidação em 6-8 semanas.',
      colorCode: 'safe',
    },
    {
      id: 'type-ii',
      label: 'Tipo II – Deslocada Estável',
      description: 'Fratura deslocada do olécrano com articulação ulnoumeral estável.',
      criteria: [
        'Deslocamento >2mm',
        'Articulação ulnoumeral estável',
        'Não há subluxação/luxação do cotovelo',
        'Pode ser transversa, oblíqua ou cominutiva',
      ],
      treatment: 'Tratamento cirúrgico: osteossíntese com banda de tensão (cerclagem em 8 com fios K), parafusos ou placa pré-moldada. A banda de tensão é o gold standard para fraturas simples transversas.',
      prognosis: 'Bom. Mobilização precoce essencial para prevenir rigidez.',
      colorCode: 'caution',
    },
    {
      id: 'type-iii',
      label: 'Tipo III – Instável',
      description: 'Fratura do olécrano com instabilidade da articulação ulnoumeral.',
      criteria: [
        'Subluxação ou luxação do cotovelo associada',
        'Instabilidade articular ulnoumeral',
        'Possível fratura-luxação trans-olécraniana (Monteggia variante)',
        'Pode envolver o processo coronóide',
      ],
      treatment: 'Tratamento cirúrgico urgente: redução da luxação, fixação do olécrano (placa e parafusos), reparação ligamentar se necessário. Fixação da coronóide se fraturada.',
      prognosis: 'Reservado. Risco de rigidez, instabilidade residual e artrose pós-traumática.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Testar sempre a capacidade de extensão ativa contra gravidade. Se o doente consegue estender ativamente, o mecanismo extensor está intacto e o tratamento conservador pode ser considerado mesmo com deslocamento mínimo.',
  pitfall: 'Não esquecer de avaliar a estabilidade do cotovelo e excluir fratura-luxação (Monteggia variante). Radiografias do antebraço completo são essenciais para excluir lesão da cabeça do rádio ou da articulação radioulnar distal.',
  references: [
    {
      authors: 'Morrey BF',
      title: 'Current concepts in the treatment of fractures of the radial head, the olecranon, and the coronoid',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 2000,
    },
  ],
};
