import type { ClassificationData } from '@/types/classification.ts';

export const charnleyClassificationData: ClassificationData = {
  id: 'charnley-classification',
  name: 'Classificação de Charnley (Classe Funcional)',
  author: 'Charnley',
  year: 1972,
  epidemiology: 'Classificação de Charnley criada para estratificar resultados e comparar séries de artroplastia total do quadril (ATQ). ATQ: uma das cirurgias mais custo-efetivas da medicina — 90–95% satisfação a 10 anos. Incidência: >700.000/ano nos EUA. Classe C: resultados funcionais inferiores, mas alta satisfação subjetiva (alívio da dor persiste apesar de limitações sistêmicas). Indispensável para comparação de séries clínicas e ensaios randomizados de próteses.',
  mechanism: 'A classificação reconhece que o resultado funcional da ATQ é limitado por fatores além do quadril operado. Classe A: toda a melhoria funcional é atribuível ao quadril operado (avaliação ideal). Classe B: quadril contralateral compromete marcha mesmo após cirurgia — resultado global limitado pelo lado não operado. Classe C: comorbidades sistêmicas (artrite reumatoide poliarticular, neuropatia, insuficiência cardiovascular) determinam teto funcional — ATQ alivia dor mas não melhora capacidade de marcha. Importância: não comparar scores funcionais entre classes diferentes.',
  grades: [
    {
      id: 'class-a',
      label: 'Classe A – Doença Unilateral do Quadril',
      description: 'Artropatia de apenas um quadril, sem outras condições limitantes.',
      criteria: [
        'Doença de apenas um quadril',
        'Sem envolvimento do quadril contralateral',
        'Sem comorbidades que limitem a marcha',
        'Joelhos, tornozelos e coluna sem limitação significativa',
        'Capacidade cardiovascular preservada',
      ],
      treatment: 'Artroplastia total do quadril. Melhor prognóstico funcional. Reabilitação standard.',
      prognosis: 'Excelente resultado funcional esperado.',
      colorCode: 'safe',
    },
    {
      id: 'class-b',
      label: 'Classe B – Doença Bilateral dos Quadris',
      description: 'Artropatia de ambos os quadris.',
      criteria: [
        'Doença bilateral dos quadris',
        'Sem comorbidades sistémicas que limitem a marcha',
        'Outras articulações sem limitação significativa',
        'A anca contralateral pode limitar o resultado funcional',
      ],
      treatment: 'Artroplastia total do quadril. Considerar ATQ bilateral simultânea ou sequencial. O quadril mais sintomático primeiro.',
      prognosis: 'Bom. Resultado pode ser assimétrico entre os lados. O segundo quadril pode limitar o resultado global.',
      colorCode: 'caution',
    },
    {
      id: 'class-c',
      label: 'Classe C – Doença Poliarticular ou Comorbidade',
      description: 'Doença articular múltipla ou comorbidade médica que limita a marcha.',
      criteria: [
        'Envolvimento de múltiplas articulações (joelhos, tornozelos, coluna)',
        'OU comorbidade médica que limita a capacidade de marcha',
        'Exemplos: artrite reumatóide poliarticular, doença neuromuscular',
        'Insuficiência cardiopulmonar, obesidade mórbida',
        'O resultado funcional é limitado por fatores além do quadril',
      ],
      treatment: 'Artroplastia total do quadril com expectativas realistas. Reabilitação adaptada às limitações. Abordagem multidisciplinar.',
      prognosis: 'Resultado funcional limitado pelas comorbidades. Satisfação do paciente pode ser boa apesar de resultados funcionais inferiores.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'A classe C afeta diretamente o resultado funcional esperado da artroplastia. Fundamental para definir expectativas realistas com o paciente e para comparação de resultados entre séries.',
  pitfall: 'Classe B pode ter resultado assimétrico entre os dois lados. Não comparar scores funcionais entre classes diferentes — cada classe tem o seu teto de recuperação.',
  references: [
    {
      authors: 'Charnley J',
      title: 'The long-term results of low-friction arthroplasty of the hip performed as a primary intervention',
      journal: 'Journal of Bone and Joint Surgery (Br)',
      year: 1972,
    },
  ],
};
