import type { ClassificationData } from '@/types/classification';

export const roussoulyClassification: ClassificationData = {
  id: 'roussouly-classification',
  name: 'Classificação de Roussouly — Morfologia Sagital da Coluna',
  author: 'Roussouly',
  year: 2005,
  epidemiology: 'A classificação de Roussouly descreve 4 morfotipos sagitais da coluna vertebral baseados na inclinação sacral (SS) e na forma da lordose lombar. Estudos em populações assintomáticas demonstram distribuição aproximada: Tipo 1 em ~15%, Tipo 2 em ~20%, Tipo 3 em ~40% e Tipo 4 em ~25%. A incidência pélvica (PI) é o parâmetro pélvico fixo que determina a morfologia individual — quanto maior o PI, maior a demanda por lordose lombar (LL ideal ≈ PI − 9° ± 9°). Desequilíbrio sagital (PI-LL > 10°) está associado a piores desfechos clínicos e funcionais após cirurgia de coluna.',
  mechanism: 'A incidência pélvica (PI) é um parâmetro morfológico fixo definido pelo ângulo entre a perpendicular ao platô sacral e a linha do centro dos eixos femorais. PI = SS + PT (inclinação pélvica). Indivíduos com PI baixo tendem a morfotipos planos (Tipos 1 e 2), enquanto PI alto predispõe lordose pronunciada (Tipo 4). A compensação sagital ocorre por retroversão pélvica (aumento do PT) e flexão dos joelhos. Perdas de lordose lombar por fusão ou degeneração levam a translação anterior do tronco, aumentando o SVA (Sagittal Vertical Axis).',
  surgicalBasis: 'O conhecimento do morfotipo de Roussouly é essencial no planejamento de artrodeses lombares. Restaurar a lordose segmentar nas regiões corretas evita o fenômeno de "junctional failure" (falha de junção proximal — PJK/PJF). Tipo 1: lordose curta L4-S1, risco de síndrome de disco adjacente superior. Tipo 4: lordose longa, implantes com maior curvatura. A fórmula de Schwab (LL = PI − 9°) e os parâmetros SRS-Schwab guiam a correção cirúrgica. Osteotomias (PSO, VCR) são reservadas para deformidades rígidas com PI-LL > 20°.',
  grades: [
    {
      id: 'tipo-1',
      label: 'Tipo 1 — Hipocifótico / Hiperlordótico Curto',
      description: 'Inclinação sacral baixa (<35°), lordose lombar curta limitada a L4-S1, hipercifose torácica compensatória',
      criteria: [
        'Inclinação sacral (SS) < 35°',
        'Incidência pélvica (PI) geralmente baixa (<45°)',
        'Lordose lombar curta: vértebra de inflexão em L4 ou L5',
        'Apenas 1-2 discos lordesados (L4-L5, L5-S1)',
        'Frequentemente associado a hipercifose torácica',
        'Alto estresse mecânico nos segmentos L4-L5 e L5-S1'
      ],
      treatment: 'Artrodeses devem ser curtas (L4-S1 ou L5-S1), preservando a lordose distal. Risco de síndrome do segmento adjacente proximal se fusão longa. Osteotomia de adição (TLIF/PLIF) para corrigir hiperlordose segmentar.',
      prognosis: 'Risco elevado de espondilólise e espondilolistese em L5-S1 por estresse concentrado. Fraturas de fadiga nos arcos neurais são mais comuns neste morfotipo.',
      colorCode: 'caution'
    },
    {
      id: 'tipo-2',
      label: 'Tipo 2 — Flat Back (Costas Planas)',
      description: 'Inclinação sacral baixa (<35°), lordose lombar longa e plana de T12/L1 a S1, sem inflexão clara',
      criteria: [
        'Inclinação sacral (SS) < 35°',
        'Incidência pélvica (PI) baixa (<45°)',
        'Lordose lombar longa e plana: vértebra de inflexão em T12 ou L1',
        'Ausência de hiperlordose concentrada — curva em "C"',
        'Cifose torácica geralmente normal ou diminuída',
        'Perfil sagital com aspecto reto na silhueta lateral',
        'Pelve retrovertida em compensação (PT elevado)'
      ],
      treatment: 'Morfotipo de alto risco para flat back pós-artrodese. Fusões longas devem restaurar lordose segmentar com cages lordóticos ou osteotomias. Evitar artrodese sem correção da lordose — resulta em desequilíbrio sagital progressivo.',
      prognosis: 'Pior morfotipo para resultados pós-artrodese sem correção. Associado a desequilíbrio sagital, dor lombar crônica e necessidade de revisão cirúrgica.',
      colorCode: 'danger'
    },
    {
      id: 'tipo-3',
      label: 'Tipo 3 — Morfotipo Normal (Harmônico)',
      description: 'Inclinação sacral intermediária (35–45°), lordose lombar equilibrada com inflexão em L4, distribuída harmonicamente',
      criteria: [
        'Inclinação sacral (SS) entre 35° e 45°',
        'Incidência pélvica (PI) intermediária (45–65°)',
        'Lordose lombar equilibrada: vértebra de inflexão em L4',
        'Lordose distribuída de L1 a S1 de forma harmônica',
        'Cifose torácica proporcional (25–45°)',
        'SVA < 5 cm (equilíbrio sagital global)',
        'Morfotipo mais comum na população assintomática (~40%)'
      ],
      treatment: 'Morfotipo ideal para artrodeses instrumentadas. Manter parâmetros sagitais dentro da normalidade. Fórmula de Schwab: LL alvo = PI − 9° (±9°). Cages lordóticos de 6–10° geralmente suficientes para correção segmentar.',
      prognosis: 'Melhores resultados pós-operatórios quando a morfologia é preservada. Menor taxa de falha de junção proximal e síndrome de segmento adjacente.',
      colorCode: 'safe'
    },
    {
      id: 'tipo-4',
      label: 'Tipo 4 — Hiperlordótico Longo / Alta Incidência Pélvica',
      description: 'Inclinação sacral alta (>45°), lordose lombar longa e acentuada de T12 a S1, hipercifose torácica associada',
      criteria: [
        'Inclinação sacral (SS) > 45°',
        'Incidência pélvica (PI) alta (>65°)',
        'Lordose lombar longa: vértebra de inflexão em T12 ou L1',
        'Hiperlordose acentuada — curva em "S" exagerada',
        'Hipercifose torácica proporcional',
        'Pelve antevertida (PT baixo)',
        'Alto estresse mecânico posterior (facetas, arcos)'
      ],
      treatment: 'Artrodeses requerem implantes com maior curvatura (cages >10° ou lordóticos customizados). Osteotomias de subtração (PSO) ou VCR para deformidades rígidas. Cuidado com hipercorreção — síndrome de flat back iatrogênico.',
      prognosis: 'Risco de artrose facetária acelerada por sobrecarga posterior. Espondilolistese degenerativa mais grave neste morfotipo. Resultados cirúrgicos bons quando a correção mantém LL proporcional ao PI.',
      colorCode: 'caution'
    }
  ],
  clinicalPearl: 'A fórmula de Schwab — LL alvo = PI − 9° (±9°) — é o guia mais prático para planejamento cirúrgico. Um PI-LL > 10° (déficit de lordose) é forte preditor de desequilíbrio sagital e piores desfechos funcionais (ODI, SRS-22).',
  pitfall: 'Não confundir o morfotipo de Roussouly com deformidade patológica adquirida. O Tipo 2 (flat back constitucional) pode ser assintomático — a indicação cirúrgica baseia-se em sintomas e falha do tratamento conservador, não no morfotipo isolado.',
  references: [
    { id: 'r1', text: 'Roussouly P, Pinheiro-Franco JL. Biomechanical analysis of the spino-pelvic organization and adaptation in pathology. Eur Spine J. 2011;20 Suppl 5:609-618.' },
    { id: 'r2', text: 'Schwab F, et al. Adult spinal deformity–postoperative standing imbalance: how much can you tolerate? Spine. 2010;35(25):2224-2231.' },
    { id: 'r3', text: 'Lafage V, et al. Standing balance and sagittal plane alignment: an analysis of spinopelvic and gravity line parameters. Spine. 2008;33(14):1572-1578.' }
  ]
};
