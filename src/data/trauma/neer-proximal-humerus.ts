import type { ClassificationData } from '@/types/tool';

export const neerProximalHumerusData: ClassificationData = {
  id: 'neer-proximal-humerus',
  name: 'Classificação de Neer',
  author: 'Neer',
  year: 1970,
  grades: [
    {
      id: '1-part',
      label: '1 Parte - Minimamente Deslocada',
      description: 'Nenhum fragmento deslocado significativamente',
      criteria: [
        'Nenhum segmento deslocado > 1 cm',
        'Nenhum segmento angulado > 45 graus',
        'Pode envolver qualquer número de linhas de fratura',
        'Fragmentos mantidos por periósteo, cápsula ou manguito rotador',
        'Inclui fraturas impactadas em valgo'
      ],
      treatment: 'Tratamento conservador com tipoia por 2-3 semanas, seguido de reabilitação precoce com exercícios pendulares. Fisioterapia progressiva a partir da 3ª semana.',
      prognosis: 'Excelente prognóstico. Representa 80% das fraturas do úmero proximal. Consolidação esperada em 6-8 semanas.',
      colorCode: 'safe'
    },
    {
      id: '2-part',
      label: '2 Partes - Um Fragmento Deslocado',
      description: 'Um fragmento deslocado > 1 cm ou angulado > 45°',
      criteria: [
        'Um fragmento deslocado > 1 cm ou angulado > 45 graus',
        'Pode ser: tubérculo maior, tubérculo menor, colo cirúrgico ou colo anatômico',
        '2 partes tubérculo maior: desvio > 5 mm é indicação cirúrgica (lesão do manguito)',
        '2 partes colo cirúrgico: desvio > 1 cm com angulação',
        '2 partes colo anatômico: raro, alto risco de NAV'
      ],
      treatment: 'Frequentemente cirúrgico. Tubérculo maior: redução aberta e fixação com parafusos ou âncoras. Colo cirúrgico: placa bloqueada ou haste intramedular. Colo anatômico: fixação vs artroplastia.',
      prognosis: 'Bom prognóstico com tratamento adequado. Tubérculo maior deslocado sem tratamento pode causar impingement subacromial significativo.',
      colorCode: 'caution'
    },
    {
      id: '3-part',
      label: '3 Partes - Dois Fragmentos Deslocados',
      description: 'Dois fragmentos deslocados significativamente',
      criteria: [
        'Dois fragmentos deslocados > 1 cm ou > 45 graus',
        'Geralmente cabeça + um tubérculo vs diáfise + outro tubérculo',
        'Cabeça rotada pelo manguito rotador inserido no tubérculo não deslocado',
        '3 partes com tubérculo maior: cabeça em rotação interna (subescapular)',
        '3 partes com tubérculo menor: cabeça em rotação externa (infraespinal)'
      ],
      treatment: 'Tratamento cirúrgico. Pacientes jovens: redução aberta e fixação com placa bloqueada. Pacientes idosos com osso osteoporótico: considerar hemiartroplastia ou artroplastia reversa.',
      prognosis: 'Prognóstico moderado. Taxa de NAV 15-25%. Risco de falha de fixação em osso osteoporótico. Artroplastia reversa tem resultados mais previsíveis em idosos.',
      colorCode: 'danger'
    },
    {
      id: '4-part',
      label: '4 Partes - Todos os Fragmentos Deslocados',
      description: 'Cabeça, ambos tubérculos e diáfise deslocados',
      criteria: [
        'Todos os 4 segmentos deslocados',
        'Cabeça articular isolada (sem inserções de manguito)',
        'Ambos tubérculos deslocados da cabeça',
        'Diáfise deslocada',
        'Inclui variante fratura-luxação em 4 partes'
      ],
      treatment: 'Artroplastia na maioria dos casos. Pacientes idosos: artroplastia reversa de ombro (melhores resultados funcionais). Pacientes jovens: tentar RAFI com placa bloqueada se padrão favorável (impactada em valgo).',
      prognosis: 'Prognóstico reservado. Taxa de NAV > 90% (cabeça desvascularizada). Hemiartroplastia tem resultados variáveis. Artroplastia reversa tem resultados mais previsíveis.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Deslocamento > 1 cm ou angulação > 45 graus define fragmento deslocado. Fraturas em 4 partes impactadas em valgo são uma variante com melhor vascularização da cabeça - considerar fixação mesmo em idosos.',
  pitfall: 'Cabeça em 4 partes tem alto risco de necrose avascular. TC com reconstrução 3D é fundamental para planejamento cirúrgico e contagem correta dos fragmentos.',
  references: [
    {
      authors: 'Neer CS 2nd',
      title: 'Displaced proximal humeral fractures. I. Classification and evaluation',
      journal: 'J Bone Joint Surg Am',
      year: 1970
    },
    {
      authors: 'Neer CS 2nd',
      title: 'Displaced proximal humeral fractures. II. Treatment of three-part and four-part displacement',
      journal: 'J Bone Joint Surg Am',
      year: 1970
    }
  ]
};
