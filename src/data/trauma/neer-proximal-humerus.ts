import type { ClassificationData } from '@/types/tool';

export const neerProximalHumerusData: ClassificationData = {
  id: 'neer-proximal-humerus',
  name: 'Classificação de Neer — Úmero Proximal',
  author: 'Neer',
  year: 1970,
  grades: [
    {
      id: '1-part',
      label: '1 Parte — Minimamente Deslocada',
      description: 'Nenhum fragmento deslocado significativamente (AO/OTA: não especificado como tipo separado)',
      criteria: [
        'Nenhum segmento deslocado > 1 cm',
        'Nenhum segmento angulado > 45 graus',
        'Pode envolver qualquer número de linhas de fratura',
        'Fragmentos mantidos por periósteo, cápsula ou manguito rotador',
        'Inclui fraturas impactadas em valgo',
        'Representa ~80% das fraturas do úmero proximal'
      ],
      treatment: 'Tratamento conservador com tipoia por 2–3 semanas, seguido de exercícios pendulares (Codman). Fisioterapia progressiva a partir da 3ª semana com ADM passiva.',
      prognosis: 'Excelente prognóstico. Consolidação esperada em 6–8 semanas.',
      colorCode: 'safe'
    },
    {
      id: '2-part',
      label: '2 Partes — Unifocal (AO/OTA 11A)',
      description: 'Um fragmento deslocado > 1 cm ou angulado > 45° — corresponde a AO/OTA 11A',
      criteria: [
        'Um fragmento deslocado (> 1 cm de desvio ou > 45° de angulação)',
        '2 partes — tubérculo maior: desvio > 5 mm é indicação cirúrgica (sugere lesão do manguito)',
        '2 partes — tubérculo menor: avulsão pelo subescapular, bloqueia rotação externa',
        '2 partes — colo cirúrgico: desvio > 1 cm com angulação (mais comum)',
        'AO/OTA 2018: 11A1 = tubérculo, 11A2 = colo cirúrgico, 11A3 = vertical extraarticular'
      ],
      treatment: 'Tubérculo maior: RAFI com parafusos/âncoras (se > 5 mm desvio). Colo cirúrgico: placa bloqueada ou haste intramedular proximal. Colo anatômico (raro): fixação vs artroplastia pelo alto risco de NAV.',
      prognosis: 'Bom prognóstico com tratamento adequado. Tubérculo maior deslocado não tratado causa impingement subacromial. Taxa de NAV baixa exceto em fraturas do colo anatômico.',
      colorCode: 'caution'
    },
    {
      id: '3-part',
      label: '3 Partes — Bifocal (AO/OTA 11B)',
      description: 'Dois fragmentos deslocados — corresponde a AO/OTA 11B (bifocal)',
      criteria: [
        'Dois fragmentos deslocados > 1 cm ou > 45 graus',
        'Colo cirúrgico + um tubérculo deslocados',
        'Cabeça rotada pelo manguito do tubérculo NÃO deslocado',
        'Com tubérculo maior deslocado: cabeça em rotação interna (subescapular traciona)',
        'Com tubérculo menor deslocado: cabeça em rotação externa (infraespinal traciona)',
        'AO/OTA 2018: 11B1.1 = com tubérculo maior, 11B1.2 = com tubérculo menor'
      ],
      treatment: 'Cirúrgico. Jovens: RAFI com placa bloqueada + fixação dos tubérculos com suturas transósseas. Idosos com osso osteoporótico: artroplastia reversa (resultados mais previsíveis).',
      prognosis: 'Prognóstico moderado. Taxa de NAV 15–25%. Risco de falha de fixação em osso osteoporótico. Artroplastia reversa tem resultados mais previsíveis em idosos.',
      colorCode: 'danger'
    },
    {
      id: '4-part',
      label: '4 Partes — Articular (AO/OTA 11C)',
      description: 'Cabeça isolada com ambos tubérculos e diáfise deslocados — AO/OTA 11C',
      criteria: [
        'Todos os 4 segmentos deslocados (cabeça, tubérculo maior, tubérculo menor, diáfise)',
        'Cabeça articular isolada (sem inserções vasculares do manguito)',
        'AO/OTA 11C1 = fratura do colo anatômico (isolada ou impactada em valgo)',
        'AO/OTA 11C3 = fratura do colo anatômico com fratura metafisária + articular',
        'Inclui variante fratura-luxação em 4 partes (modificador universal [5a] anterior, [5b] posterior)',
        'Variante impactada em valgo (11C1.1) tem melhor prognóstico vascular'
      ],
      treatment: 'Artroplastia na maioria dos casos. Idosos: artroplastia reversa de ombro. Jovens: tentar RAFI se padrão favorável (impactada em valgo = 11C1.1) pela vascularização preservada.',
      prognosis: 'Prognóstico reservado. Taxa de NAV > 90% nas formas clássicas. Exceção: impactada em valgo com NAV menor. Artroplastia reversa tem resultados mais previsíveis.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'AO/OTA 2018 integrou Neer ao úmero proximal: 11A = unifocal (Neer 2-part), 11B = bifocal (Neer 3-part), 11C = articular (Neer 4-part). O tipo B articular parcial NÃO EXISTE no úmero proximal — esta é uma exceção importante do sistema AO. Deslocamento Neer: > 1 cm ou > 45°.',
  pitfall: 'TC com reconstrução 3D é mandatória para planejamento e contagem correta dos fragmentos. A classificação final pode mudar no intraoperatório. Fraturas em valgo impactado (11C1.1) têm melhor prognóstico — não indicar artroplastia automaticamente.',
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
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018 (Humerus proximal segment)',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
