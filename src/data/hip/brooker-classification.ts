import type { ClassificationData } from '@/types/classification.ts';

export const brookerClassificationData: ClassificationData = {
  id: 'brooker-classification',
  name: 'Classificação de Brooker – Ossificação Heterotópica',
  author: 'Brooker',
  year: 1973,
  grades: [
    {
      id: 'class-i',
      label: 'Classe I – Ilhas Ósseas',
      description: 'Ilhas de osso nos tecidos moles ao redor do quadril.',
      criteria: [
        'Ilhas de osso dentro dos tecidos moles',
        'Sem ponte óssea entre superfícies',
        'Não limita amplitude de movimento significativamente',
        'Geralmente achado incidental',
      ],
      treatment: 'Observação na maioria dos casos. Tratamento apenas se sintomático. AINE profilático não necessário se já presente.',
      prognosis: 'Excelente. Geralmente assintomático. Progressão incomum.',
      colorCode: 'safe',
    },
    {
      id: 'class-ii',
      label: 'Classe II – Gap <1cm Entre Superfícies',
      description: 'Esporões ósseos com gap <1cm entre superfícies opostas (fêmur e pelve).',
      criteria: [
        'Esporões ósseos originando do fêmur e/ou pelve',
        'Gap <1cm entre as superfícies opostas',
        'Sem ponte óssea completa',
        'Possível limitação da amplitude de movimento',
      ],
      treatment: 'Observação se assintomático. Se limitação funcional: aguardar maturação (12-18 meses) e então excisão cirúrgica.',
      prognosis: 'Bom. Pode limitar parcialmente amplitude de movimento. Risco de progressão moderado.',
      colorCode: 'caution',
    },
    {
      id: 'class-iii',
      label: 'Classe III – Gap >1cm Entre Superfícies',
      description: 'Esporões ósseos com gap reduzido (>1cm) entre superfícies opostas.',
      criteria: [
        'Esporões ósseos originando do fêmur e pelve',
        'Gap >1cm entre as superfícies',
        'Ponte óssea incompleta mas com espaço reduzido',
        'Limitação significativa da amplitude de movimento',
      ],
      treatment: 'Excisão cirúrgica após maturação (12-18 meses). Cintilografia óssea para confirmar maturação (fase fria). Profilaxia pós-excisão obrigatória: indometacina 75mg/dia por 6 semanas ou RT dose única.',
      prognosis: 'Moderado. Limitação funcional significativa. Excisão cirúrgica com bons resultados se timing adequado.',
      colorCode: 'danger',
    },
    {
      id: 'class-iv',
      label: 'Classe IV – Anquilose',
      description: 'Anquilose aparente com ponte óssea entre fêmur e pelve.',
      criteria: [
        'Ponte óssea completa entre fêmur e pelve',
        'Anquilose do quadril',
        'Ausência ou mínima amplitude de movimento',
        'Severa limitação funcional',
      ],
      treatment: 'Excisão cirúrgica extensa após maturação completa. Profilaxia obrigatória pós-operatória. Considerar radioterapia 700cGy dose única no pré ou pós-operatório imediato.',
      prognosis: 'Reservado. Recidiva após excisão 15-30% mesmo com profilaxia. Resultado funcional pode ser limitado.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Profilaxia com indometacina ou RT em dose unica para pacientes de risco',
  pitfall: 'Esperar maturacao (12-18 meses) antes de considerar resseccao',
  references: [
    {
      authors: 'Brooker AF, Bowerman JW, Robinson RA, Riley LH Jr',
      title: 'Ectopic ossification following total hip replacement',
      journal: 'J Bone Joint Surg Am',
      year: 1973,
    },
  ],
};
