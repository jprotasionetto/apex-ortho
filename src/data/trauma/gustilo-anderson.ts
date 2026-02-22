import type { ClassificationData } from '@/types/tool';

export const gustiloAndersonData: ClassificationData = {
  id: 'gustilo-anderson',
  name: 'Classificação de Gustilo-Anderson',
  author: 'Gustilo',
  year: 1976,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I',
      description: 'Fratura exposta de baixa energia com ferida < 1 cm',
      criteria: [
        'Ferida < 1 cm',
        'Ferida limpa',
        'Fratura geralmente simples (transversa ou oblíqua curta)',
        'Mínima lesão de tecidos moles',
        'Sem esmagamento'
      ],
      treatment: 'Antibioticoterapia (cefalosporina 1ª geração), desbridamento e lavagem, fixação da fratura. Pode considerar fechamento primário em feridas limpas.',
      prognosis: 'Bom prognóstico. Taxa de infecção 0-2%.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II',
      description: 'Ferida de 1 a 10 cm com contaminação moderada',
      criteria: [
        'Ferida entre 1 e 10 cm',
        'Contaminação moderada',
        'Lesão moderada de tecidos moles',
        'Sem retalho ou avulsão extensa',
        'Cominuição moderada da fratura'
      ],
      treatment: 'Antibioticoterapia (cefalosporina 1ª geração + aminoglicosídeo), desbridamento cirúrgico, lavagem copiosa, fixação da fratura. Fechamento primário tardio ou secundário.',
      prognosis: 'Prognóstico intermediário. Taxa de infecção 2-7%.',
      colorCode: 'caution'
    },
    {
      id: 'type-iiia',
      label: 'Tipo IIIA',
      description: 'Alta energia com cobertura adequada de tecidos moles',
      criteria: [
        'Ferida > 10 cm',
        'Alta energia',
        'Contaminação importante',
        'Cominuição severa',
        'Cobertura adequada de tecidos moles sobre o osso após desbridamento',
        'Inclui fraturas segmentares expostas'
      ],
      treatment: 'Antibioticoterapia ampla (cefalosporina + aminoglicosídeo ± penicilina se contaminação de solo), desbridamento seriado, fixação (frequentemente externa temporária), fechamento tardio.',
      prognosis: 'Prognóstico reservado. Taxa de infecção 7-10%.',
      colorCode: 'danger'
    },
    {
      id: 'type-iiib',
      label: 'Tipo IIIB',
      description: 'Necessita retalho para cobertura óssea',
      criteria: [
        'Perda extensa de tecidos moles',
        'Desnudamento periosteal',
        'Exposição óssea que requer retalho (local ou livre)',
        'Contaminação maciça',
        'Geralmente associada a alta energia'
      ],
      treatment: 'Desbridamentos seriados, fixação externa temporária, cobertura com retalho (local rotacional ou microcirúrgico livre) idealmente em até 72 horas. Antibioticoterapia prolongada.',
      prognosis: 'Prognóstico reservado. Taxa de infecção 10-50%. Risco elevado de pseudoartrose.',
      colorCode: 'danger'
    },
    {
      id: 'type-iiic',
      label: 'Tipo IIIC',
      description: 'Lesão vascular que necessita reparo',
      criteria: [
        'Lesão arterial que necessita reparo para viabilidade do membro',
        'Qualquer grau de lesão de tecidos moles',
        'Inclui qualquer fratura exposta com lesão vascular major',
        'Isquemia do membro'
      ],
      treatment: 'Reparo vascular urgente (até 6h de isquemia quente), fasciotomias profiláticas, fixação externa, desbridamento seriado. Avaliar indicação de amputação primária (MESS score ≥ 7).',
      prognosis: 'Prognóstico grave. Taxa de amputação significativa. Taxa de infecção até 25-50%. Mortalidade associada elevada.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Classificação deve ser feita no intraoperatório após desbridamento. A classificação inicial na emergência frequentemente subestima a gravidade da lesão.',
  pitfall: 'Tipo IIIA vs IIIB pode mudar após desbridamento inicial. Reavaliar sempre após limpeza cirúrgica completa.',
  references: [
    {
      authors: 'Gustilo RB, Anderson JT',
      title: 'Prevention of infection in the treatment of one thousand and twenty-five open fractures of long bones',
      journal: 'J Bone Joint Surg Am',
      year: 1976
    },
    {
      authors: 'Gustilo RB, Mendoza RM, Williams DN',
      title: 'Problems in the management of type III (severe) open fractures: a new classification of type III open fractures',
      journal: 'J Trauma',
      year: 1984
    }
  ]
};
