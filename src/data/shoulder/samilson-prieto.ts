import type { ClassificationData } from '@/types/classification.ts';

export const samilsonPrietoData: ClassificationData = {
  id: 'samilson-prieto',
  name: 'Classificação de Samilson-Prieto – Artrose Glenoumeral',
  author: 'Samilson/Prieto',
  year: 1983,
  grades: [
    {
      id: 'mild',
      label: 'Ligeira – Osteófito Inferior <3mm',
      description: 'Artrose ligeira com osteófito inferior da cabeça umeral ou glenoide inferior a 3mm.',
      criteria: [
        'Osteófito inferior <3mm',
        'Espaço articular preservado ou minimamente reduzido',
        'Sem esclerose significativa',
        'Sem deformidade articular',
      ],
      treatment: 'Tratamento conservador: fisioterapia, anti-inflamatórios, infiltração com corticoide ou ácido hialurónico.',
      prognosis: 'Bom com tratamento conservador. Progressão lenta.',
      colorCode: 'safe',
    },
    {
      id: 'moderate',
      label: 'Moderada – Osteófito 3-7mm + Ligeiro Estreitamento',
      description: 'Artrose moderada com osteófito entre 3 e 7mm e ligeiro estreitamento articular.',
      criteria: [
        'Osteófito inferior entre 3-7mm',
        'Ligeiro estreitamento do espaço articular',
        'Esclerose subcondral inicial',
        'Possível irregularidade da superfície articular',
      ],
      treatment: 'Tratamento conservador otimizado. Se falha, considerar artroscopia (desbridamento, capsular release) ou artroplastia.',
      prognosis: 'Moderado. Pode necessitar tratamento cirúrgico se sintomático.',
      colorCode: 'caution',
    },
    {
      id: 'severe',
      label: 'Severa – Osteófito >7mm + Estreitamento Significativo',
      description: 'Artrose severa com osteófito superior a 7mm, estreitamento articular e esclerose significativos.',
      criteria: [
        'Osteófito inferior >7mm',
        'Estreitamento significativo do espaço articular',
        'Esclerose subcondral marcada',
        'Possível deformidade articular',
        'Possíveis quistos subcondrais',
      ],
      treatment: 'Artroplastia total do ombro (anatómica se coifa intacta, invertida se coifa insuficiente). Considerar hemiarthroplasty em jovens.',
      prognosis: 'Resultados bons com artroplastia. Importante avaliar estado da coifa dos rotadores.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'A classificação de Samilson-Prieto é medida na radiografia AP verdadeira do ombro. A presença de osteófitos inferiores é o principal marcador, medidos na cabeça umeral ou na glenoide inferior.',
  pitfall: 'Avaliar sempre o estado da coifa dos rotadores (RM) antes de planear artroplastia. Artrose com coifa insuficiente requer prótese invertida, não anatómica.',
  references: [
    {
      authors: 'Samilson RL, Prieto V',
      title: 'Dislocation arthropathy of the shoulder',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 1983,
    },
  ],
};
