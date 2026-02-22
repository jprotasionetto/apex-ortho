import type { ClassificationData } from '@/types/classification.ts';

export const pauwelsClassificationData: ClassificationData = {
  id: 'pauwels-classification',
  name: 'Classificação de Pauwels – Fraturas do Colo Femoral',
  author: 'Pauwels',
  year: 1935,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I – Ângulo <30° (Abdução)',
      description: 'Traço de fratura com ângulo <30° em relação à horizontal. Predomínio de forças de compressão.',
      criteria: [
        'Ângulo do traço de fratura <30° com a horizontal',
        'Forças de compressão predominam sobre cisalhamento',
        'Fratura mais estável',
        'Impactação natural do foco de fratura',
        'Menor risco de desvio secundário',
      ],
      treatment: 'Fixação com parafusos canulados (3 parafusos em triângulo invertido). Carga parcial protegida por 6-8 semanas.',
      prognosis: 'Bom. Alta taxa de consolidação. Menor risco de necrose avascular.',
      colorCode: 'safe',
    },
    {
      id: 'type-ii',
      label: 'Tipo II – Ângulo 30-50°',
      description: 'Traço de fratura com ângulo entre 30° e 50°. Forças mistas de compressão e cisalhamento.',
      criteria: [
        'Ângulo do traço de fratura 30-50° com a horizontal',
        'Forças mistas de compressão e cisalhamento',
        'Estabilidade intermediária',
        'Risco moderado de desvio',
      ],
      treatment: 'Fixação com parafusos canulados ou DHS (dynamic hip screw) com parafuso anti-rotacional. Redução anatômica essencial.',
      prognosis: 'Moderado. Risco intermediário de falha de fixação e necrose avascular.',
      colorCode: 'caution',
    },
    {
      id: 'type-iii',
      label: 'Tipo III – Ângulo >50° (Adução)',
      description: 'Traço de fratura com ângulo >50°. Predomínio de forças de cisalhamento.',
      criteria: [
        'Ângulo do traço de fratura >50° com a horizontal',
        'Forças de cisalhamento superam as de compressão',
        'Fratura mais instável',
        'Alto risco de desvio e falha de fixação',
        'Maior risco de pseudoartrose',
      ],
      treatment: 'Pacientes jovens: redução anatômica + fixação com DHS com ângulo fixo ou placa angulada (130°). Considerar osteotomia valgizante (Pauwels) para converter tipo III em tipo I. Idosos: artroplastia.',
      prognosis: 'Reservado para fixação. Taxa de falha significativa. Em jovens, osteotomia de Pauwels pode melhorar biologia da consolidação.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Angulo >50 graus: forcas de cisalhamento superam as de compressao',
  pitfall: 'Angulo varia conforme posicao do membro na radiografia',
  references: [
    {
      authors: 'Pauwels F',
      title: 'Der Schenkelhalsbruch, ein mechanisches Problem',
      journal: 'Z Orthop Ihre Grenzgeb',
      year: 1935,
    },
  ],
};
