import type { ClassificationData } from '@/types/classification.ts';

export const perthesHerringClassificationData: ClassificationData = {
  id: 'perthes-herring',
  name: 'Classificação de Herring – Pilar Lateral (Perthes)',
  author: 'Herring',
  year: 1992,
  grades: [
    {
      id: 'group-a',
      label: 'Grupo A – Pilar Lateral Intacto',
      description: 'Altura do pilar lateral completamente mantida.',
      criteria: [
        'Pilar lateral sem envolvimento',
        'Altura do pilar lateral 100% preservada',
        'Sem colapso lateral da cabeça femoral',
        'Densidade pode estar alterada centralmente',
      ],
      treatment: 'Observação. Tratamento sintomático. Boa evolução independente da idade.',
      prognosis: 'Excelente. Bom prognóstico independentemente da idade.',
      colorCode: 'safe',
    },
    {
      id: 'group-b',
      label: 'Grupo B – >50% Altura Mantida',
      description: 'Mais de 50% da altura do pilar lateral preservada.',
      criteria: [
        'Pilar lateral mantém >50% da altura original',
        'Lucência e colapso parcial do pilar lateral',
        'Cabeça pode estar ligeiramente alargada',
        'Ainda há suporte lateral significativo',
      ],
      treatment: 'Contenção se <8 anos: ortótese ou cirurgia (osteotomia femoral/pélvica). >8 anos: pior prognóstico, considerar cirurgia.',
      prognosis: 'Bom em crianças <8 anos. Em >8 anos, prognóstico reservado.',
      colorCode: 'caution',
    },
    {
      id: 'group-bc',
      label: 'Grupo B/C – Borderline (50%)',
      description: 'Pilar lateral com exatamente 50% da altura preservada.',
      criteria: [
        'Pilar lateral com exatamente 50% de altura',
        'Estreitamento do pilar lateral a 50%',
        'Classificação intermediária com prognóstico variável',
        'Pode ter pillar lateral fino mas com 50% de altura',
      ],
      treatment: 'Tratar como grupo C em crianças >8 anos. Contenção cirúrgica frequentemente recomendada.',
      prognosis: 'Intermediário. Comporta-se mais como grupo C em crianças maiores.',
      colorCode: 'caution',
    },
    {
      id: 'group-c',
      label: 'Grupo C – <50% Altura Mantida',
      description: 'Menos de 50% da altura do pilar lateral preservada.',
      criteria: [
        'Pilar lateral com <50% da altura original',
        'Colapso significativo da cabeça femoral',
        'Perda de contenção lateral',
        'Risco de deformidade residual (coxa magna, artrose)',
      ],
      treatment: 'Contenção cirúrgica recomendada em crianças >8 anos (osteotomia femoral varizante ou osteotomia pélvica). Resultados pobres em adolescentes.',
      prognosis: 'Mau em crianças >8 anos. Alta taxa de deformidade residual e artrose precoce.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Grupo A: bom prognóstico independente da idade. Grupo C em >8 anos: mau prognóstico mesmo com tratamento. A classificação só é aplicável na fase de fragmentação da doença.',
  pitfall: 'A classificação só é válida durante a fase de fragmentação de Perthes. Não classificar na fase inicial de necrose ou na fase de reconstituição.',
  references: [
    {
      authors: 'Herring JA, Neustadt JB, Williams JJ, Early JS, Browne RH',
      title: 'The lateral pillar classification of Legg-Calvé-Perthes disease',
      journal: 'Journal of Pediatric Orthopaedics',
      year: 1992,
    },
  ],
};
