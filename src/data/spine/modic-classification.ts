import type { ClassificationData } from '@/types/classification';

export const modicClassification: ClassificationData = {
  id: 'modic-classification',
  name: 'Classificação de Modic (Alterações dos Platôs Vertebrais na RM)',
  author: 'Modic',
  year: 1988,
  grades: [
    {
      id: 'type-1',
      label: 'Tipo I - Edema / Inflamação',
      description: 'Alterações inflamatórias: T1 hipointenso, T2 hiperintenso',
      criteria: [
        'T1: sinal baixo (hipointenso)',
        'T2: sinal alto (hiperintenso)',
        'STIR: sinal alto',
        'Representa edema e inflamação da medula óssea vertebral',
        'Vascularização aumentada e tecido de granulação fibroso',
        'Fase aguda/ativa do processo degenerativo'
      ],
      treatment: 'Tratamento conservador: anti-inflamatórios, fisioterapia, modificação de atividade. Se refratário: considerar antibioticoterapia prolongada (controverso - protocolo MAST), infiltrações, ou artrodese',
      prognosis: 'Fase mais sintomática; pode converter para Tipo II com o tempo; associação mais forte com lombalgia',
      colorCode: 'caution'
    },
    {
      id: 'type-2',
      label: 'Tipo II - Substituição Gordurosa',
      description: 'Degeneração gordurosa: T1 hiperintenso, T2 hiperintenso',
      criteria: [
        'T1: sinal alto (hiperintenso)',
        'T2: sinal alto (hiperintenso ou isointenso)',
        'STIR: sinal baixo (supressão de gordura)',
        'Representa substituição gordurosa da medula óssea',
        'Fase crônica/estável do processo degenerativo',
        'Tipo mais comum'
      ],
      treatment: 'Tratamento conservador: exercícios de estabilização, fortalecimento core; geralmente menos sintomático que Tipo I',
      prognosis: 'Fase mais estável; menor correlação com dor; pode ser achado incidental',
      colorCode: 'safe'
    },
    {
      id: 'type-3',
      label: 'Tipo III - Esclerose',
      description: 'Esclerose subcondral: T1 hipointenso, T2 hipointenso',
      criteria: [
        'T1: sinal baixo (hipointenso)',
        'T2: sinal baixo (hipointenso)',
        'Representa esclerose subcondral do platô vertebral',
        'Fase mais avançada e rara',
        'Corresponde a esclerose vista na radiografia/TC'
      ],
      treatment: 'Tratamento conservador; monitorização; artrodese se sintomático e refratário',
      prognosis: 'Fase avançada e estabilizada; menor correlação com sintomas',
      colorCode: 'info'
    }
  ],
  clinicalPearl: 'Modic I tem a maior associação com lombalgia discogênica e é a fase mais "ativa" do processo. A conversão de Modic I para II ao longo do tempo é comum e geralmente indica estabilização',
  pitfall: 'Modic I pode mimetizar espondilodiscite infecciosa na RM - correlacionar com clínica, laboratório (PCR, VHS) e padrão de envolvimento discal',
  references: [
    'Modic MT, et al. Degenerative disk disease: assessment of changes in vertebral body marrow with MR imaging. Radiology. 1988;166(1 Pt 1):193-199.',
    'Albert HB, Manniche C. Modic changes following lumbar disc herniation. Eur Spine J. 2007;16(7):977-982.'
  ]
};
