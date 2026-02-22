import type { ClassificationData } from '@/types/classification';

export const woundClassification: ClassificationData = {
  id: 'wound-classification',
  name: 'Classificação de Feridas Cirúrgicas (CDC/NRC)',
  author: 'CDC/NRC',
  year: 1964,
  grades: [
    {
      id: 'class-1',
      label: 'Classe I - Limpa',
      description: 'Ferida operatória não infectada, sem inflamação, sem quebra de técnica asséptica',
      criteria: [
        'Sem penetração de vísceras ocas (respiratório, digestivo, geniturinário)',
        'Ferida fechada primariamente',
        'Técnica asséptica mantida sem quebras',
        'Sem uso de drenos',
        'Exemplos: artroplastia eletiva, fixação de fratura fechada, artroscopia'
      ],
      treatment: 'Profilaxia antibiótica: dose única de cefazolina 2g IV pré-operatória em ortopedia',
      prognosis: 'Taxa de infecção esperada: 1-2%',
      colorCode: 'safe'
    },
    {
      id: 'class-2',
      label: 'Classe II - Limpa-Contaminada',
      description: 'Penetração controlada de víscera oca sem contaminação significativa',
      criteria: [
        'Entrada controlada no trato respiratório, digestivo ou geniturinário',
        'Sem contaminação incomum',
        'Quebra mínima de técnica asséptica',
        'Drenagem mecânica utilizada',
        'Exemplos: cirurgia com acesso por via oral, reoperação precoce limpa'
      ],
      treatment: 'Profilaxia antibiótica padrão; monitorizar sinais de infecção no pós-operatório',
      prognosis: 'Taxa de infecção esperada: 3-5%',
      colorCode: 'caution'
    },
    {
      id: 'class-3',
      label: 'Classe III - Contaminada',
      description: 'Ferida aberta, fresca, ou quebra grave de técnica asséptica',
      criteria: [
        'Fratura exposta (< 6-8h)',
        'Ferida traumática recente e aberta',
        'Extravasamento de conteúdo de víscera oca',
        'Incisão com inflamação aguda não purulenta',
        'Quebra grave da técnica asséptica',
        'Exemplos: fratura exposta Gustilo I-IIIA, ferida traumática contaminada'
      ],
      treatment: 'Antibioticoterapia terapêutica (não apenas profilática); limpeza cirúrgica obrigatória; considerar fechamento tardio',
      prognosis: 'Taxa de infecção esperada: 5-15%',
      colorCode: 'danger'
    },
    {
      id: 'class-4',
      label: 'Classe IV - Suja/Infectada',
      description: 'Ferida traumática antiga com tecido desvitalizado ou infecção clínica pré-existente',
      criteria: [
        'Ferida traumática antiga (> 6-8h) com tecido desvitalizado retido',
        'Infecção clínica pré-existente',
        'Perfuração de víscera pré-operatória',
        'Presença de pus',
        'Exemplos: fratura exposta Gustilo IIIB-IIIC tardia, artrite séptica, osteomielite ativa'
      ],
      treatment: 'Antibioticoterapia terapêutica ampla; desbridamentos seriados; fechamento por segunda intenção ou tardio; culturas obrigatórias',
      prognosis: 'Taxa de infecção esperada: 15-40%',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Ortopedia eletiva com implante: classe I. Fratura exposta: classe III-IV. A classificação determina o regime de antibióticos e a expectativa de infecção',
  pitfall: 'Classificação determina taxa esperada de infecção e regime de profilaxia/tratamento antibiótico; subclassificar uma ferida pode levar a profilaxia inadequada',
  references: [
    'National Research Council. Postoperative wound infections: the influence of ultraviolet irradiation of the operating room and of various other factors. Ann Surg. 1964;160(Suppl 2):1-132.',
    'Mangram AJ, et al. Guideline for prevention of surgical site infection, 1999. CDC Hospital Infection Control Practices Advisory Committee. Infect Control Hosp Epidemiol. 1999;20(4):250-278.'
  ]
};
