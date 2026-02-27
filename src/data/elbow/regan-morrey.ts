import type { ClassificationData } from '@/types/classification.ts';

export const reganMorreyData: ClassificationData = {
  id: 'regan-morrey',
  name: 'Classificação de Regan-Morrey – Fraturas da Coronóide',
  author: 'Regan & Morrey',
  year: 1989,
  epidemiology: 'Fraturas da coronóide ocorrem em 2–15% das luxações do cotovelo. Tipo I isolada: 50% casos; como parte de padrão complexo (tríade terrível = luxação + coronóide + cabeça do rádio): 30–40%. Tríade terrível tem instabilidade persistente em 50% se não tratada adequadamente. Classificação de O\'Driscoll (2003) expandiu para 3 subtipos anatômicos (anterolateral, anteromedial, basal) com maior relevância cirúrgica. Fraturas anteromediais (O\'Driscoll subtipo II) comprometem o LCM anterior e a estabilidade varo-posteromedial.',
  mechanism: 'A coronóide é o principal estabilizador anterior do cotovelo contra translação posterior — contribui 70% da resistência. Tipo I: avulsão da ponta por luxação (inserção do braquial e cápsula anterior). Tipo II/III: impacção axial durante luxação com carga. Inserção do LCM (ligamento colateral medial, banda anterior): pilar anteromedial da coronóide — fraturas tipo II anteromedial de O\'Driscoll → instabilidade varo-posteromedial grave. Tríade terrível: mecanismo de queda com cotovelo extenso + pronação → luxação posterolateral → coronóide fratura → cabeça rádio fratura.',
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I – Ponta da Coronóide',
      description: 'Fratura da ponta (tip) do processo coronóide.',
      criteria: [
        'Fragmento pequeno da ponta da coronóide',
        'Geralmente <10% da altura da coronóide',
        'Estabilidade do cotovelo geralmente preservada',
        'Melhor avaliado na TC',
      ],
      treatment: 'Tratamento conservador se cotovelo estável. Se parte de tríade terrível, fixação (âncoras de sutura ou sutura transóssea).',
      prognosis: 'Bom se isolada. Prognostico depende de lesões associadas.',
      colorCode: 'safe',
    },
    {
      id: 'type-ii',
      label: 'Tipo II – <50% da Altura',
      description: 'Fratura envolvendo menos de 50% da altura do processo coronóide.',
      criteria: [
        'Fragmento envolve <50% da altura da coronóide',
        'Compromisso parcial da estabilidade',
        'Inserção do braquial pode estar envolvida',
        'Possível subluxação do cotovelo',
      ],
      treatment: 'Fixação cirúrgica recomendada: parafusos, placa ou sutura (lasso technique). Especialmente se instabilidade ou parte de padrão de lesão complexo.',
      prognosis: 'Moderado. Fixação adequada melhora a estabilidade e resultados funcionais.',
      colorCode: 'caution',
    },
    {
      id: 'type-iii',
      label: 'Tipo III – >50% da Altura',
      description: 'Fratura envolvendo mais de 50% da altura do processo coronóide.',
      criteria: [
        'Fragmento envolve >50% da altura da coronóide',
        'Instabilidade significativa do cotovelo',
        'Envolve inserção do ligamento colateral medial (banda anterior)',
        'Frequentemente associada a luxação',
      ],
      treatment: 'Fixação cirúrgica obrigatória: placa buttress ou parafusos. Reparação ligamentar associada. Pode necessitar fixador externo articulado.',
      prognosis: 'Reservado. Risco de instabilidade residual, rigidez e artrose pós-traumática.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'A classificação de O\'Driscoll (subtipos anteromedial, anterolateral e basal) complementa Regan-Morrey e tem maior relevância para o planeamento cirúrgico. Fraturas da faceta anteromedial são cruciais para a estabilidade em varo.',
  pitfall: 'Fraturas da coronóide tipo I podem parecer insignificantes na radiografia mas são críticas quando parte de uma tríade terrível. Nunca subestimar uma fratura da coronóide no contexto de luxação do cotovelo.',
  references: [
    {
      authors: 'Regan W, Morrey BF',
      title: 'Fractures of the coronoid process of the ulna',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 1989,
    },
  ],
};
