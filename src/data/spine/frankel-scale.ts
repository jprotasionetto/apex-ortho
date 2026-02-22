import type { ClassificationData } from '@/types/classification';

export const frankelScale: ClassificationData = {
  id: 'frankel-scale',
  name: 'Escala de Frankel / ASIA (Lesão Medular)',
  author: 'Frankel 1969 / ASIA 1982',
  year: 1969,
  grades: [
    {
      id: 'grade-a',
      label: 'Grau A - Completa',
      description: 'Sem função motora ou sensitiva nos segmentos sacrais S4-S5',
      criteria: [
        'Ausência completa de função motora abaixo do nível da lesão',
        'Ausência completa de função sensitiva abaixo do nível da lesão',
        'Sem preservação sacral (S4-S5)',
        'Sem contração anal voluntária',
        'Sem sensibilidade perianal'
      ],
      treatment: 'Estabilização cirúrgica urgente se instabilidade; metilprednisolona controversa; reabilitação intensiva; prevenção de complicações (TVP, úlceras de pressão, ITU)',
      prognosis: 'Prognóstico de recuperação neurológica muito limitado; <5% convertem para deambulação funcional',
      colorCode: 'danger'
    },
    {
      id: 'grade-b',
      label: 'Grau B - Sensitiva Incompleta',
      description: 'Função sensitiva preservada abaixo do nível, sem função motora nos segmentos sacrais S4-S5',
      criteria: [
        'Sensibilidade preservada abaixo do nível neurológico incluindo S4-S5',
        'Sem função motora preservada >3 níveis abaixo do nível motor',
        'Alguma preservação sacral sensitiva',
        'Sem função motora útil'
      ],
      treatment: 'Descompressão cirúrgica se indicada; estabilização; reabilitação intensiva precoce',
      prognosis: 'Algum potencial de recuperação; ~30% podem recuperar alguma função motora',
      colorCode: 'danger'
    },
    {
      id: 'grade-c',
      label: 'Grau C - Motora Incompleta',
      description: 'Função motora preservada abaixo do nível, maioria dos músculos-chave com grau <3',
      criteria: [
        'Função motora preservada abaixo do nível neurológico',
        'Mais da metade dos músculos-chave abaixo do nível com grau muscular <3',
        'Contração anal voluntária pode estar presente',
        'Função motora não útil para deambulação'
      ],
      treatment: 'Descompressão e estabilização cirúrgica; reabilitação motora intensiva; treino de marcha quando possível',
      prognosis: 'Potencial moderado de recuperação; ~50-75% podem recuperar alguma capacidade de marcha',
      colorCode: 'caution'
    },
    {
      id: 'grade-d',
      label: 'Grau D - Motora Incompleta',
      description: 'Função motora preservada abaixo do nível, maioria dos músculos-chave com grau ≥3',
      criteria: [
        'Função motora preservada abaixo do nível neurológico',
        'Pelo menos metade dos músculos-chave abaixo do nível com grau muscular ≥3',
        'Capacidade funcional presente',
        'Pode deambular com ou sem auxílio'
      ],
      treatment: 'Descompressão e estabilização se indicadas; reabilitação intensiva; treino de marcha e fortalecimento',
      prognosis: 'Bom potencial de recuperação; maioria recupera capacidade de deambulação comunitária',
      colorCode: 'caution'
    },
    {
      id: 'grade-e',
      label: 'Grau E - Normal',
      description: 'Função motora e sensitiva normais',
      criteria: [
        'Função motora normal em todos os segmentos',
        'Função sensitiva normal em todos os segmentos',
        'Reflexos podem ser anormais',
        'Pode ter tido déficit prévio que recuperou'
      ],
      treatment: 'Tratamento da lesão óssea/ligamentar conforme indicação; monitorização neurológica',
      prognosis: 'Excelente prognóstico neurológico',
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'A avaliação ASIA deve ser realizada após resolução do choque medular (48-72h). Preservação sacral (sensibilidade perianal e contração anal voluntária) é o fator mais importante para diferenciar lesão completa de incompleta',
  pitfall: 'Não classificar como ASIA A durante o período de choque medular - reavaliar após 48-72 horas',
  references: [
    'Frankel HL, et al. The value of postural reduction in the initial management of closed injuries of the spine with paraplegia and tetraplegia. Paraplegia. 1969;7(3):179-192.',
    'American Spinal Injury Association. International Standards for Neurological Classification of Spinal Cord Injury. Revised 2019.'
  ]
};
