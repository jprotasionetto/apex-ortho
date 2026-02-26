import type { ClassificationData } from '@/types/classification.ts';

export const pauwelsClassificationData: ClassificationData = {
  id: 'pauwels-classification',
  name: 'Classificação de Pauwels – Fraturas do Colo Femoral',
  author: 'Pauwels',
  year: 1935,
  epidemiology: 'Pauwels (1935) é o sistema biomecânico mais utilizado para fraturas do colo femoral, complementando Garden no planejamento cirúrgico. Prevalência por tipo: Tipo I (~20–25%), Tipo II (~40–45%), Tipo III (~30–35%) — embora a distribuição varie com a definição do examinador e a qualidade do Rx. Importância prognóstica: em jovens com Pauwels III, a taxa de pseudoartrose pode atingir 20–35% mesmo com fixação adequada, comparada a < 10% no Tipo I. Osteotomia valgizante de Pauwels (converte Tipo III em Tipo I) é indicada em falhas de fixação em jovens. A classificação de Pauwels tem reprodutibilidade interobservador moderada (Kappa 0,45–0,60) devido à variação do ângulo conforme posição do membro no Rx.',
  mechanism: 'O mecanismo biomecânico de Pauwels baseia-se na orientação da linha de fratura em relação à horizontal (medida em AP): Tipo I (< 30°) → forças de compressão axial predominam, impactando os fragmentos (estabilizante) → consolidação favorável. Tipo II (30–50°) → equilíbrio entre compressão e cisalhamento → estabilidade intermediária. Tipo III (> 50°) → forças de cisalhamento superam compressão → o fragmento proximal desliza sobre o distal → falha do implante e pseudoartrose. A inclinação do traço determina o vetor de carga: quanto mais vertical, maior a componente de cisalhamento e menor a impactação. A posição do membro no Rx influencia diretamente o ângulo medido — o membro deve estar em posição neutra. Em fraturas com Garden III–IV, o ângulo de Pauwels é mais difícil de medir com precisão, mas ainda orienta o tipo de fixação (parafusos canulados paralelos vs DHS vs osteotomia).',
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
  clinicalPearl: 'Pauwels III com angulo > 50°: forças de cisalhamento superam compressão — converter tipo III em tipo I com osteotomia valgizante de Pauwels em jovens com pseudoartrose ou alto risco biomecânico. Regra prática: Pauwels define o "como fixar" (ângulo, dispositivo), Garden define o "quem opera" (idade, deslocamento).',
  pitfall: 'O ângulo de Pauwels varia significativamente conforme a posição do membro na radiografia. Membro em rotação interna subestima o ângulo; rotação externa superestima. Sempre medir em posição neutra com quadril a 15° de rotação interna para anular a anteversão femoral. Em fraturas Garden III–IV muito deslocadas, a medição é imprecisa — usar TC se necessário.',
  references: [
    {
      authors: 'Pauwels F',
      title: 'Der Schenkelhalsbruch, ein mechanisches Problem',
      journal: 'Z Orthop Ihre Grenzgeb',
      year: 1935,
    },
  ],
};
