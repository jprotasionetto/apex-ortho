import type { ClassificationData } from '@/types/classification.ts';

export const brobergMorreyData: ClassificationData = {
  id: 'broberg-morrey',
  name: 'Classificação de Broberg-Morrey – Fraturas do Úmero Distal',
  author: 'Broberg & Morrey',
  year: 1986,
  epidemiology: 'Fraturas do úmero distal representam 2–6% de todas as fraturas do úmero; incidência 0,5–7/100.000/ano. Distribuição bimodal: adultos jovens (alta energia: acidentes, quedas de altura) e idosos >65a (osteoporose). Mulheres predominam no grupo idoso. Tipo III (cominutiva) mais frequente em >70a com osso osteoporótico. Classificação AO (13-A/B/C) é a mais usada mundialmente; Broberg-Morrey orienta decisão RAFI vs TEA.',
  mechanism: 'O úmero distal é uma estrutura bicolumnar com capitellum e tróclea. Mecanismo primário: queda com cotovelo fletido + carga axial transmitida pelo rádio e ulna. Jovens: trauma de alta energia. Idosos: queda simples. Princípio bicolumnar de Müller: dupla placa paralela (medial + lateral) converte forças torcionais em compressão através das placas → estabilidade rotacional superior à placa perpendicular. TEA (prótese total do cotovelo) em Tipo III >70a: cimento com link semi-constrained elimina necessidade de reconstrução articular.',
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I – Não Deslocada',
      description: 'Fratura do úmero distal não deslocada ou minimamente deslocada.',
      criteria: [
        'Deslocamento mínimo (<2mm)',
        'Traço de fratura sem separação significativa',
        'Superfície articular congruente',
        'Estabilidade do cotovelo mantida',
      ],
      treatment: 'Tratamento conservador: imobilização em tala posterior a 90° por 2-3 semanas, seguida de mobilização ativa precoce. Controlo radiográfico semanal.',
      prognosis: 'Bom. Risco de rigidez se imobilização prolongada.',
      colorCode: 'safe',
    },
    {
      id: 'type-ii',
      label: 'Tipo II – Deslocada Sem Cominução',
      description: 'Fratura deslocada do úmero distal sem cominução significativa. Passível de reconstrução anatómica.',
      criteria: [
        'Deslocamento >2mm',
        'Separação dos fragmentos',
        'Sem cominução significativa',
        'Fragmentos de tamanho adequado para fixação',
        'Pode ser unicondiliana ou bicondiliana',
      ],
      treatment: 'RAFI com dupla placa (medial e lateral) com princípio de placa paralela ou perpendicular. Reconstrução articular anatómica. Mobilização precoce.',
      prognosis: 'Bom com reconstrução anatómica. Risco de rigidez e neuropatia ulnar.',
      colorCode: 'caution',
    },
    {
      id: 'type-iii',
      label: 'Tipo III – Cominutiva',
      description: 'Fratura cominutiva do úmero distal. Reconstrução articular difícil ou impossível.',
      criteria: [
        'Cominução significativa',
        'Múltiplos fragmentos articulares',
        'Perda óssea possível',
        'Reconstrução anatómica desafiante',
      ],
      treatment: 'RAFI com dupla placa se reconstrução possível. Prótese total do cotovelo (TEA) em doentes >65-70 anos com cominução severa não reconstruível. Considerar ORIF-assist (fixador externo temporário).',
      prognosis: 'Reservado. Risco elevado de rigidez, artrose e falência de material. TEA tem bons resultados funcionais em idosos.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'A abordagem posterior com osteotomia do olécrano (chevron) proporciona a melhor exposição para fraturas complexas do úmero distal. Alternativas: triceps-sparing (Bryan-Morrey) ou TRAP (triceps-reflecting anconeus pedicle).',
  pitfall: 'Em doentes >70 anos com fraturas tipo III, a RAFI pode resultar em falência de material e rigidez. A prótese total do cotovelo pode ser a melhor opção primária, mas impõe restrição de carga permanente (5 kg).',
  references: [
    {
      authors: 'Broberg MA, Morrey BF',
      title: 'Results of treatment of fracture-dislocations of the elbow',
      journal: 'Clinical Orthopaedics and Related Research',
      year: 1986,
    },
  ],
};
