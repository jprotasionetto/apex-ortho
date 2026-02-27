import type { ClassificationData } from '@/types/classification.ts';

export const sandersClassification: ClassificationData = {
  id: 'sanders-classification',
  name: 'Classificacao de Sanders (Fraturas do Calcaneo - TC)',
  author: 'Sanders',
  year: 1993,
  epidemiology: 'Fraturas do calcâneo representam 1–2% de todas as fraturas e 60–65% de todas as fraturas do tarso. Incidência: 10–15/100.000/ano; pico masculino 30–50 anos (queda de altura = principal mecanismo, frequentemente acidente de trabalho). 75% são intra-articulares (Sanders I–IV). Distribuição: Tipo I 10–20%, Tipo II 40–50%, Tipo III 25–35%, Tipo IV 10–15%. Lesão contralateral simultânea: 5–10% (bilateral). Lesão compressiva da coluna lombar (L1): associada em 10% dos casos — queda de altura. Complicação mais temida: infecção de ferida após ORIF extensile lateral — 5–25%, aumenta significativamente com tabagismo, DM, IMC>30 e edema excessivo. Critério para ORIF: edema resolvido com sinal de rugas (wrinkle test) na pele lateral — geralmente 7–14 dias após o trauma. Ângulo de Böhler (<20°): preditor de gravidade e prognóstico funcional pós-operatório.',
  mechanism: 'Mecanismo clássico: queda de altura (>1,5m) em pé → carga axial transmitida pelo processo posterior do tálus ao calcâneo → fratura primária oblíqua (de superomedial para inferolateral) criando fragmento anterolateral e posteromedial → linhas secundárias na faceta posterior determinam os subtipos. Anatomia crítica: faceta posterior (articulação talocalcaneana posterior) é o componente articular principal — sua reconstrução anatômica é o objetivo cirúrgico. Classificação de Sanders usa TC coronal no corte mais largo da faceta posterior: o número de linhas de fratura no corte = número de fragmentos − 1. 1 linha = 2 fragmentos (Tipo II), 2 linhas = 3 fragmentos (Tipo III, com fragmento central deprimido "die-punch"), 3+ linhas = 4+ fragmentos (Tipo IV = cominuição). Ângulo de Böhler: formado entre a linha do processo anterior calcâneo ao ponto mais alto da faceta posterior e da faceta posterior ao tubérculo posterior. Normal 20–40° — redução < 20° indica impactação grave da faceta. Ângulo de Gissane: ângulo crítico do calcâneo (normal 120–145°) — amplia com a impactação. Achado característico: "double density sign" na RX lateral = sobreposição de fragmentos da faceta posterior.',
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
