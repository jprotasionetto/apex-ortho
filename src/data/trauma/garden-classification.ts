import type { ClassificationData } from '@/types/tool';

export const gardenClassificationData: ClassificationData = {
  id: 'garden-classification',
  name: 'Classificação de Garden — Colo Femoral',
  author: 'Garden',
  year: 1961,
  grades: [
    {
      id: 'garden-i',
      label: 'Garden I — Incompleta / Impactada em Valgo',
      description: 'Fratura incompleta ou impactada em valgo (AO/OTA 31B1.1 = subcapital impactada em valgo)',
      criteria: [
        'Fratura incompleta do colo femoral',
        'Trabéculas impactadas em valgo',
        'Trabeculado da cabeça femoral em valgo em relação ao acetábulo',
        'Cortical lateral pode estar intacta',
        'Sem desvio significativo na incidência lateral',
        'Corresponde a AO/OTA 31B1.1 (subcapital, impactada em valgo)'
      ],
      treatment: 'Fixação in situ com parafusos canulados (3 parafusos em triângulo invertido). Carga parcial protegida por 6–8 semanas.',
      prognosis: 'Bom prognóstico. Taxa de NAV 10–15%. Taxa de consolidação > 95%.',
      colorCode: 'safe'
    },
    {
      id: 'garden-ii',
      label: 'Garden II — Completa Sem Desvio',
      description: 'Fratura completa sem desvio (AO/OTA 31B1.2 = subcapital não deslocada)',
      criteria: [
        'Fratura completa do colo femoral',
        'Sem desvio dos fragmentos',
        'Trabeculado da cabeça alinhado com o acetábulo',
        'Cortical medial e lateral interrompidas, mas sem desvio',
        'Risco de desvio secundário se não fixada',
        'Corresponde a AO/OTA 31B1.2 (subcapital, não deslocada)'
      ],
      treatment: 'Fixação com parafusos canulados (3 parafusos). Cirurgia idealmente nas primeiras 24 horas para reduzir risco de desvio secundário e NAV.',
      prognosis: 'Bom prognóstico. Taxa de NAV 15–25%. Risco de desvio secundário se não fixada precocemente.',
      colorCode: 'caution'
    },
    {
      id: 'garden-iii',
      label: 'Garden III — Completa com Desvio Parcial',
      description: 'Fratura completa com desvio parcial em varo (AO/OTA 31B1.3 = subcapital deslocada)',
      criteria: [
        'Fratura completa do colo femoral com desvio parcial',
        'Cabeça em varo — trabeculado não alinhado com o acetábulo',
        'Retináculo posterior parcialmente intacto',
        'Algum contato residual entre os fragmentos',
        'Corresponde a AO/OTA 31B1.3 (subcapital, deslocada)',
        'Na prática, Garden III e IV são agrupadas como "deslocadas" (displaced)'
      ],
      treatment: 'Jovens (< 60–65 anos): redução anatômica urgente + fixação com parafusos canulados (< 6h). Idosos ativos: artroplastia total. Idosos baixa demanda: artroplastia parcial (bipolar).',
      prognosis: 'Prognóstico moderado a reservado. Taxa de NAV 25–40%. Em jovens, resultado depende da qualidade da redução e timing cirúrgico (idealmente < 6h).',
      colorCode: 'danger'
    },
    {
      id: 'garden-iv',
      label: 'Garden IV — Completa com Desvio Total',
      description: 'Fratura completa com desvio total dos fragmentos (AO/OTA 31B1.3 = subcapital deslocada)',
      criteria: [
        'Fratura completa do colo femoral com desvio total',
        'Trabeculado da cabeça realinhado com o acetábulo (paradoxo de Garden)',
        'Retináculo posterior rompido — vascularização severamente comprometida',
        'Sem contato entre os fragmentos',
        'Corresponde a AO/OTA 31B1.3 (subcapital, deslocada) — mesmo código que Garden III',
        'AO/OTA 31B2 (transcervical) e 31B3 (basicervical) são fraturas do colo com qualificações de Pauwels: (p) < 30°, (q) 30–70°, (r) > 70°'
      ],
      treatment: 'Jovens (< 60–65 anos): redução urgente (< 6h) + fixação com parafusos canulados. Idosos ativos: artroplastia total do quadril. Idosos baixa demanda: artroplastia parcial.',
      prognosis: 'Prognóstico reservado para fixação. Taxa de NAV 40–60%. Artroplastia oferece resultados funcionais mais previsíveis em idosos.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Na prática: Garden I–II = "sem desvio" (fixação), Garden III–IV = "com desvio" (avaliar idade). AO/OTA 2018 fêmur proximal: 31A = trocantérica (parede lateral ≤ 20,5 mm = 31A2 incompetente), 31B = colo (subcapital/transcervical/basicervical com qualificações de Pauwels), 31C = cabeça femoral. Garden se aplica especificamente a fraturas subcapitais (31B1).',
  pitfall: 'Reprodutibilidade interobservador moderada — na prática simplificar para "sem desvio" vs "com desvio". AO/OTA 2018 integrou Pauwels como qualificação de 31B2: (p) < 30°, (q) 30–70°, (r) > 70°. Fraturas basicervicais (31B3) comportam-se biomecanicamente mais como trocantéricas.',
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
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018 (Femur proximal segment)',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
