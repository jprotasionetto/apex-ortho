import type { ClassificationData } from '@/types/classification';

export const spondylolisthesisMeyerding: ClassificationData = {
  id: 'spondylolisthesis-meyerding',
  name: 'Classificação de Meyerding (Espondilolistese)',
  author: 'Meyerding',
  year: 1932,
  epidemiology: 'Espondilolistese afeta 5–8% da população adulta ocidental; prevalência aumenta com a idade. Classificação etiológica de Wiltse-Newman: ístmica (pars fratura de fadiga, L5-S1 mais comum, atletas com hiperlordose) e degenerativa (artrose facetária, L4-L5 mais comum, mulheres >50a). 95% dos casos são Graus I–II; Grau III–V é raro (<1% da população geral). Prevalência 6–8% em indivíduos ativos (ginastas, jogadores de futebol americano).',
  mechanism: 'Espondilolistese ístmica: fratura de fadiga (espondilólise) no pars interarticularis → pedículo intacto permite deslizamento anterior do corpo vertebral sem englobar os elementos posteriores (diferente da degenerativa). Fórmula de Meyerding: % deslizamento = (deslocamento anterior / comprimento platô sacral ou vertebral caudal) × 100. Graus I–II: sintomas por compressão radicular e instabilidade dinâmica (>4mm de deslizamento em RX dinâmico = instabilidade). Graus III–V: deformidade sagital com cifoselordose lombossacral patológica.',
  grades: [
    {
      id: 'grade-1',
      label: 'Grau I',
      description: 'Deslizamento de 0-25%',
      criteria: [
        'Deslizamento anterior da vértebra de 0 a 25%',
        'Geralmente assintomática ou dor leve',
        'Achado frequente na população geral',
        'Mais comum em L5-S1 (ístmica) e L4-L5 (degenerativa)'
      ],
      treatment: 'Tratamento conservador: fisioterapia, fortalecimento de core e extensores, modificação de atividade. Cirúrgico se refratário por >6 meses',
      prognosis: 'Excelente prognóstico; baixo risco de progressão em adultos',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau II',
      description: 'Deslizamento de 25-50%',
      criteria: [
        'Deslizamento anterior de 25 a 50%',
        'Pode ser sintomática (lombalgia, ciatalgia)',
        'Risco de progressão em adolescentes',
        'Monitorização radiográfica necessária em pacientes em crescimento'
      ],
      treatment: 'Tratamento conservador inicialmente. Cirúrgico (artrodese in situ ou com redução parcial) se sintomático e refratário, ou progressão documentada',
      prognosis: 'Bom prognóstico com tratamento adequado; monitorizar progressão em jovens',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau III',
      description: 'Deslizamento de 50-75%',
      criteria: [
        'Deslizamento anterior de 50 a 75%',
        'Geralmente sintomática',
        'Deformidade sagital evidente',
        'Pode haver déficit neurológico',
        'Cifose lombossacral aumentada'
      ],
      treatment: 'Tratamento cirúrgico: artrodese com ou sem redução; instrumentação com parafusos pediculares; descompressão se déficit neurológico. Redução parcial pode ser tentada',
      prognosis: 'Prognóstico reservado sem tratamento; bons resultados com artrodese adequada',
      colorCode: 'danger'
    },
    {
      id: 'grade-4',
      label: 'Grau IV',
      description: 'Deslizamento de 75-100%',
      criteria: [
        'Deslizamento anterior de 75 a 100%',
        'Deformidade significativa',
        'Desequilíbrio sagital',
        'Déficit neurológico frequente',
        'Dor importante'
      ],
      treatment: 'Tratamento cirúrgico: artrodese circunferencial (anterior + posterior), possível redução parcial gradual. Cirurgia complexa; risco neurológico na redução',
      prognosis: 'Prognóstico reservado; cirurgia necessária mas com riscos significativos',
      colorCode: 'danger'
    },
    {
      id: 'grade-5',
      label: 'Grau V - Espondiloptose',
      description: 'Deslizamento >100%',
      criteria: [
        'Deslizamento anterior superior a 100%',
        'Vértebra completamente deslocada anteriormente (espondiloptose)',
        'Deformidade grave',
        'Desequilíbrio sagital severo',
        'Marcha anormal (waddling gait)',
        'Postura característica com flexão dos joelhos e quadris'
      ],
      treatment: 'Tratamento cirúrgico complexo: artrodese circunferencial, possível vertebrectomia parcial (Gaines procedure). Alta complexidade e risco neurológico',
      prognosis: 'Prognóstico funcional reservado; cirurgia de alta complexidade necessária',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Espondilolistese degenerativa (L4-L5 mais comum) raramente progride além de Grau II. Espondilolistese ístmica (L5-S1 mais comum) tem maior risco de progressão em adolescentes durante estirão de crescimento',
  pitfall: 'Percentual de deslizamento deve ser medido em radiografia lateral em pé (ortostatismo) - radiografia deitada subestima o deslizamento',
  references: [
    'Meyerding HW. Spondylolisthesis. Surg Gynecol Obstet. 1932;54:371-377.',
    'Wiltse LL, et al. Classification of spondylolysis and spondylolisthesis. Clin Orthop Relat Res. 1976;(117):23-29.'
  ]
};
