import type { ClassificationData } from '@/types/tool';

export const gardenClassificationData: ClassificationData = {
  id: 'garden-classification',
  name: 'Classificação de Garden',
  author: 'Garden',
  year: 1961,
  grades: [
    {
      id: 'garden-i',
      label: 'Garden I - Incompleta / Impactada em Valgo',
      description: 'Fratura incompleta ou impactada em valgo',
      criteria: [
        'Fratura incompleta do colo femoral',
        'Trabéculas impactadas em valgo',
        'Trabeculado da cabeça femoral em valgo em relação ao acetábulo',
        'Cortical lateral pode estar intacta',
        'Sem desvio significativo na incidência lateral'
      ],
      treatment: 'Fixação in situ com parafusos canulados (geralmente 3 parafusos em configuração triângulo invertido). Carga parcial protegida por 6-8 semanas.',
      prognosis: 'Bom prognóstico. Taxa de necrose avascular (NAV) 10-15%. Taxa de consolidação > 95%.',
      colorCode: 'safe'
    },
    {
      id: 'garden-ii',
      label: 'Garden II - Completa Sem Desvio',
      description: 'Fratura completa sem desvio',
      criteria: [
        'Fratura completa do colo femoral',
        'Sem desvio dos fragmentos',
        'Trabeculado da cabeça alinhado com o acetábulo',
        'Cortical medial e lateral interrompidas',
        'Padrão trabecular normal mantido'
      ],
      treatment: 'Fixação com parafusos canulados (3 parafusos). Cirurgia idealmente nas primeiras 24 horas para reduzir risco de desvio secundário e NAV.',
      prognosis: 'Bom prognóstico. Taxa de NAV 15-25%. Risco de desvio secundário se não fixada.',
      colorCode: 'caution'
    },
    {
      id: 'garden-iii',
      label: 'Garden III - Completa com Desvio Parcial',
      description: 'Fratura completa com desvio parcial',
      criteria: [
        'Fratura completa do colo femoral',
        'Desvio parcial (varo)',
        'Trabeculado da cabeça não alinhado com o acetábulo',
        'Retináculo posterior parcialmente intacto',
        'Cabeça em varo mas com algum contato dos fragmentos'
      ],
      treatment: 'Pacientes jovens (<60-65 anos): redução anatômica urgente + fixação com parafusos canulados. Pacientes idosos (>65 anos): artroplastia parcial (ativos: bipolar; baixa demanda: unipolar) ou total.',
      prognosis: 'Prognóstico moderado a reservado. Taxa de NAV 25-40%. Em jovens, resultado depende da qualidade da redução e timing cirúrgico.',
      colorCode: 'danger'
    },
    {
      id: 'garden-iv',
      label: 'Garden IV - Completa com Desvio Total',
      description: 'Fratura completa com desvio total',
      criteria: [
        'Fratura completa do colo femoral',
        'Desvio total dos fragmentos',
        'Trabeculado da cabeça realinhado com o acetábulo (paradoxo)',
        'Retináculo posterior rompido',
        'Sem contato entre os fragmentos'
      ],
      treatment: 'Pacientes jovens (<60-65 anos): redução urgente (<6h idealmente) + fixação com parafusos canulados. Pacientes idosos ativos: artroplastia total do quadril. Pacientes idosos baixa demanda: artroplastia parcial.',
      prognosis: 'Prognóstico reservado para fixação. Taxa de NAV 40-60%. Artroplastia oferece resultados funcionais mais previsíveis em idosos.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Garden I e II = preservação da cabeça com fixação, Garden III e IV = considerar artroplastia em idosos. Em jovens, sempre tentar preservar a cabeça femoral com redução urgente.',
  pitfall: 'Reprodutibilidade interobservador moderada. Na prática, muitos autores simplificam para "sem desvio" (I-II) e "com desvio" (III-IV) para guiar decisão terapêutica.',
  references: [
    {
      authors: 'Garden RS',
      title: 'Low-angle fixation in fractures of the femoral neck',
      journal: 'J Bone Joint Surg Br',
      year: 1961
    },
    {
      authors: 'Bartonícek J',
      title: 'Pauwels classification of femoral neck fractures: correct interpretation of the original',
      journal: 'J Orthop Trauma',
      year: 2001
    }
  ]
};
