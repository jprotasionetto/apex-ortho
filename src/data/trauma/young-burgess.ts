import type { ClassificationData } from '@/types/tool';

export const youngBurgessData: ClassificationData = {
  id: 'young-burgess',
  name: 'Classificação de Young-Burgess',
  author: 'Young & Burgess',
  year: 1986,
  grades: [
    {
      id: 'lc-i',
      label: 'LC-I - Compressão Lateral I',
      description: 'Compressão lateral com fratura sacral por impacção',
      criteria: [
        'Fratura transversa do ramo púbico (ipsilateral)',
        'Fratura sacral por compressão/impacção ipsilateral',
        'Sem rotação do hemipelve',
        'Ligamentos sacroilíacos posteriores intactos',
        'Mecanismo: força lateral direta'
      ],
      treatment: 'Geralmente conservador. Carga conforme tolerado. Monitorizar lesões associadas (lesão de órgãos abdominais por compressão).',
      prognosis: 'Bom prognóstico. Lesão estável. Menor necessidade transfusional entre os tipos.',
      colorCode: 'caution'
    },
    {
      id: 'lc-ii',
      label: 'LC-II - Compressão Lateral II',
      description: 'Compressão lateral com rotação interna do hemipelve',
      criteria: [
        'Fratura dos ramos púbicos (ipsilateral)',
        'Fratura em crescente ilíaco (fratura-luxação sacroilíaca posterior)',
        'Rotação interna do hemipelve',
        'Ligamentos sacroilíacos posteriores parcialmente intactos',
        'Força lateral aplicada mais posteriormente'
      ],
      treatment: 'Frequentemente cirúrgico. Fixação da lesão posterior (parafuso iliosacro) e anterior se necessário. Avaliação de instabilidade rotacional.',
      prognosis: 'Prognóstico moderado. Pode ter instabilidade rotacional significativa.',
      colorCode: 'caution'
    },
    {
      id: 'lc-iii',
      label: 'LC-III - Compressão Lateral III',
      description: 'Compressão lateral ipsilateral + abertura contralateral (windswept pelvis)',
      criteria: [
        'LC-I ou LC-II ipsilateral',
        'Lesão em livro aberto (APC) contralateral',
        'Windswept pelvis (hemipelve em rotação interna + contralateral em rotação externa)',
        'Lesão bilateral do anel pélvico',
        'Alta energia'
      ],
      treatment: 'Tratamento cirúrgico. Fixação bilateral: posterior (parafusos iliosacros) e anterior (placa sinfisária). Pode necessitar damage control inicial.',
      prognosis: 'Prognóstico reservado. Alta taxa de lesões associadas, necessidade transfusional elevada.',
      colorCode: 'danger'
    },
    {
      id: 'apc-i',
      label: 'APC-I - Compressão Anteroposterior I',
      description: 'Diástase da sínfise < 2.5 cm',
      criteria: [
        'Diástase da sínfise púbica < 2.5 cm',
        'Ligamentos sacroilíacos anteriores estirados mas intactos',
        'Ligamentos sacroilíacos posteriores intactos',
        'Membrana do assoalho pélvico intacta',
        'Sem rotação externa significativa do hemipelve'
      ],
      treatment: 'Tratamento conservador na maioria. Carga com apoio parcial. Monitorizar se diástase não progride.',
      prognosis: 'Bom prognóstico. Lesão estável.',
      colorCode: 'caution'
    },
    {
      id: 'apc-ii',
      label: 'APC-II - Compressão Anteroposterior II',
      description: 'Diástase da sínfise > 2.5 cm com abertura anterior',
      criteria: [
        'Diástase da sínfise púbica > 2.5 cm',
        'Lesão dos ligamentos sacroilíacos anteriores',
        'Lesão do ligamento sacroespinhoso e sacrotuberoso',
        'Ligamentos sacroilíacos posteriores intactos',
        'Rotação externa do hemipelve (livro aberto parcial)'
      ],
      treatment: 'Tratamento cirúrgico. Fixação anterior com placa sinfisária. Fixação posterior geralmente não necessária se ligamentos posteriores intactos. Teste de estabilidade intraoperatório.',
      prognosis: 'Prognóstico moderado. Necessidade transfusional moderada a alta. Risco de lesões venosas.',
      colorCode: 'danger'
    },
    {
      id: 'apc-iii',
      label: 'APC-III - Compressão Anteroposterior III (Livro Aberto)',
      description: 'Disrupção completa com lesão de todos os ligamentos',
      criteria: [
        'Diástase completa da sínfise púbica',
        'Lesão completa de todos os ligamentos sacroilíacos (anteriores E posteriores)',
        'Lesão dos ligamentos sacroespinhoso e sacrotuberoso',
        'Instabilidade rotacional E vertical completa',
        'Pelve completamente instável (livro aberto completo)',
        'Hemorragia retroperitoneal significativa'
      ],
      treatment: 'Emergência: lençol pélvico circunferencial ou clamp pélvico. Embolização se instabilidade hemodinâmica. Fixação cirúrgica anterior E posterior. Damage control com fixador externo.',
      prognosis: 'Prognóstico grave. Maior necessidade transfusional. Alto risco de hemorragia fatal. Mortalidade elevada.',
      colorCode: 'danger'
    },
    {
      id: 'vs',
      label: 'VS - Cisalhamento Vertical',
      description: 'Deslocamento vertical do hemipelve',
      criteria: [
        'Deslocamento vertical/cranial do hemipelve',
        'Fraturas dos ramos púbicos (verticais)',
        'Disrupção posterior completa (sacroilíaca ou sacral)',
        'Todos os ligamentos posteriores rompidos',
        'Mecanismo: queda de altura com impacto em membro inferior',
        'Instabilidade rotacional E vertical completa'
      ],
      treatment: 'Tratamento cirúrgico. Tração esquelética inicial para redução. Fixação anterior E posterior. Pode necessitar fixação espinopélvica. Damage control se politraumatizado.',
      prognosis: 'Prognóstico grave. Alta mortalidade e morbidade. Risco elevado de lesão neurológica (plexo lombossacral).',
      colorCode: 'danger'
    },
    {
      id: 'cm',
      label: 'CM - Mecanismo Combinado',
      description: 'Combinação de mecanismos de lesão',
      criteria: [
        'Combinação de dois ou mais mecanismos',
        'Padrão de lesão não se encaixa em categoria única',
        'Frequentemente LC + VS ou APC + VS',
        'Alta energia',
        'Lesões complexas bilaterais',
        'Padrão de fratura atípico'
      ],
      treatment: 'Tratamento individualizado conforme padrão de lesão. Geralmente requer fixação anterior e posterior. Damage control inicial frequente.',
      prognosis: 'Prognóstico variável, geralmente reservado. Depende da combinação específica de lesões.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'LC é o mecanismo mais comum (60-70%). APC-III = livro aberto completo com hemorragia potencialmente fatal. O lençol pélvico circunferencial é a medida de emergência mais importante.',
  pitfall: 'Hemorragia retroperitoneal pode ser fatal em APC e VS. Não palpar a sínfise repetidamente - um único exame é suficiente. Aplicar lençol pélvico imediatamente se suspeita de instabilidade.',
  references: [
    {
      authors: 'Young JW, Burgess AR, Brumback RJ, Poka A',
      title: 'Pelvic fractures: value of plain radiography in early assessment and management',
      journal: 'Radiology',
      year: 1986
    },
    {
      authors: 'Burgess AR, Eastridge BJ, Young JW, et al',
      title: 'Pelvic ring disruptions: effective classification system and treatment protocols',
      journal: 'J Trauma',
      year: 1990
    }
  ]
};
