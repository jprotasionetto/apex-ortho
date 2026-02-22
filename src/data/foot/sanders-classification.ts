import type { ClassificationData } from '@/types/classification.ts';

export const sandersClassification: ClassificationData = {
  id: 'sanders-classification',
  name: 'Classificacao de Sanders (Fraturas do Calcaneo - TC)',
  author: 'Sanders',
  year: 1993,
  grades: [
    {
      id: 'type-1',
      label: 'Tipo I',
      description: 'Nao deslocada (todos os fragmentos)',
      criteria: [
        'Fratura intra-articular sem desvio',
        'Desvio menor que 2mm em todos os fragmentos',
        'Independente do numero de linhas de fratura',
        'Faceta posterior intacta no corte coronal'
      ],
      treatment: 'Tratamento conservador: imobilizacao com bota gessada, carga progressiva apos 8-12 semanas',
      prognosis: 'Bom prognostico com tratamento conservador; retorno as atividades em 3-4 meses',
      colorCode: 'safe'
    },
    {
      id: 'type-2',
      label: 'Tipo II',
      description: 'Fratura em 2 partes da faceta posterior',
      criteria: [
        'Uma linha de fratura na faceta posterior',
        'Dois fragmentos articulares',
        'Subtipos: IIA (lateral), IIB (central), IIC (medial)',
        'Desvio maior que 2mm'
      ],
      treatment: 'ORIF com placa e parafusos por abordagem extensile lateral; reducao anatomica da faceta posterior',
      prognosis: 'Bons resultados com ORIF em 73-82% dos casos; melhor prognostico entre os tipos cirurgicos',
      colorCode: 'caution'
    },
    {
      id: 'type-3',
      label: 'Tipo III',
      description: 'Fratura em 3 partes da faceta posterior',
      criteria: [
        'Duas linhas de fratura na faceta posterior',
        'Tres fragmentos articulares',
        'Subtipos: IIIAB, IIIAC, IIIBC',
        'Cominuicao significativa da superficie articular'
      ],
      treatment: 'ORIF com placa e parafusos; reducao anatomica mais dificil; considerar artrodese subtalar primaria em pacientes selecionados',
      prognosis: 'Resultados moderados; taxa de artrodese secundaria de 15-20%',
      colorCode: 'danger'
    },
    {
      id: 'type-4',
      label: 'Tipo IV',
      description: 'Fratura em 4 ou mais partes (cominuida)',
      criteria: [
        'Tres ou mais linhas de fratura na faceta posterior',
        'Quatro ou mais fragmentos articulares',
        'Cominuicao severa da faceta posterior',
        'Frequentemente com depressao significativa do angulo de Bohler'
      ],
      treatment: 'Artrodese subtalar primaria recomendada; ORIF com maus resultados neste tipo; alternativa: tratamento conservador seguido de artrodese tardia',
      prognosis: 'Mau prognostico com ORIF; artrodese subtalar primaria pode ser preferivel',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'TC com cortes coronais e essencial para classificacao. Cortes perpendiculares a faceta posterior permitem contagem precisa dos fragmentos.',
  pitfall: 'Tipo IV: considerar artrodese primaria, ORIF tem mau resultado. A cominuicao impede reducao anatomica da superficie articular.',
  references: [
    'Sanders R, Fortin P, DiPasquale T, Walling A. Operative treatment in 120 displaced intraarticular calcaneal fractures. Results using a prognostic computed tomography scan classification. Clin Orthop Relat Res. 1993;(290):87-95.'
  ]
};
