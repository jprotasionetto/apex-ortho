import type { ClassificationData } from '@/types/tool';

export const pilonRuediAllgowerData: ClassificationData = {
  id: 'pilon-ruedi-allgower',
  name: 'Classificação de Rüedi-Allgöwer',
  author: 'Rüedi & Allgöwer',
  year: 1969,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I - Articular Sem Desvio',
      description: 'Fratura articular sem desvio significativo',
      criteria: [
        'Fratura do pilon tibial com traço articular',
        'Sem desvio significativo da superfície articular',
        'Cominuição mínima ou ausente',
        'Congruência articular mantida',
        'Fragmentos articulares com mínimo deslocamento'
      ],
      treatment: 'Pode ser conservador se verdadeiramente sem desvio (raro). RAFI com parafusos percutâneos ou placa de suporte se qualquer desvio articular. Mobilização precoce do tornozelo.',
      prognosis: 'Bom prognóstico. Baixa taxa de artrose pós-traumática se redução anatômica. Consolidação em 8-12 semanas.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II - Articular Deslocada com Mínima Cominuição',
      description: 'Fratura articular deslocada com cominuição mínima',
      criteria: [
        'Fratura articular com desvio da superfície',
        'Cominuição mínima da superfície articular',
        'Incongruência articular presente',
        'Fragmento articular principal pode ser reduzido anatomicamente',
        'Impacção metafisária moderada'
      ],
      treatment: 'RAFI. Redução articular anatômica, enxerto ósseo do defeito metafisário, placa de suporte (anterolateral ou medial). Abordagem em etapas se tecidos moles comprometidos.',
      prognosis: 'Prognóstico moderado. Resultado depende da qualidade da redução articular. Risco moderado de artrose pós-traumática.',
      colorCode: 'caution'
    },
    {
      id: 'type-iii',
      label: 'Tipo III - Articular Cominutiva com Impacção',
      description: 'Fratura articular cominutiva com impacção significativa',
      criteria: [
        'Cominuição significativa da superfície articular',
        'Impacção articular e metafisária',
        'Múltiplos fragmentos articulares',
        'Alta energia',
        'Frequente lesão severa de tecidos moles',
        'Defeito ósseo metafisário importante'
      ],
      treatment: 'Abordagem em etapas (staged): 1º fixação da fíbula + fixador externo spanning (2-3 semanas). 2º TC para planejamento. 3º RAFI definitiva quando tecidos moles permitirem (wrinkle test). Considerar artrodese primária em casos extremos.',
      prognosis: 'Prognóstico reservado. Alta taxa de artrose pós-traumática (até 50-70%). Risco elevado de complicações de tecidos moles, infecção e pseudoartrose.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Estratégia cirúrgica clássica: 1) Restaurar comprimento fibular, 2) Reconstruir superfície articular tibial, 3) Enxerto do defeito metafisário, 4) Placa de suporte na tíbia.',
  pitfall: 'Timing cirúrgico é crítico - a pele deve estar adequada (wrinkle test positivo) antes da cirurgia aberta. Cirurgia em tecidos moles edemaciados leva a complicações de ferida em até 40% dos casos.',
  references: [
    {
      authors: 'Rüedi TP, Allgöwer M',
      title: 'Fractures of the lower end of the tibia into the ankle joint',
      journal: 'Injury',
      year: 1969
    },
    {
      authors: 'Rüedi TP, Allgöwer M',
      title: 'The operative treatment of intra-articular fractures of the lower end of the tibia',
      journal: 'Clin Orthop Relat Res',
      year: 1979
    }
  ]
};
