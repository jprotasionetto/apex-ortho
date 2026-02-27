import type { ClassificationData } from '@/types/classification.ts';

export const evansClassificationData: ClassificationData = {
  id: 'evans-classification',
  name: 'Classificação de Evans – Fraturas Intertrocantéricas',
  author: 'Evans',
  year: 1949,
  epidemiology: 'Fraturas intertrocantéricas representam ~49% de todas as fraturas do fêmur proximal — incidência ~75/100.000/ano em >80 anos. Segunda fratura mais comum no idoso após colo femoral. Distribuição F:M 3:1 em >75 anos; <50 anos = alta energia (acidentes, quedas de altura). Mortalidade em 1 ano: 15–20% (maior dependência da comorbidade do que do padrão de fratura). Distribuição de Evans: estável 50–55%, instável Tipo 1 35%, obliquidade reversa 10%. Tendência atual: CMN (haste cefalomedular) para todos os padrões intertrocantéricos pelos resultados funcionais superiores e menor falha mecânica em idosos osteoporóticos vs DHS. Evans IIA/obliquidade reversa (traço de superomedial para inferolateral): DHS CONTRAINDICADO — o parafuso desliza lateralmente → cut-out ou falha em varo. Consolidação em zona esponjosa vascular: pseudoartrose rara <2% (vs 5–15% no subtrocantérico). Fratura periprotética deve ser excluída em portadores de ATQ.',
  mechanism: 'Região intertrocantérica: zona extraperiosteal, vascularização esponjosa abundante — consolidação quase garantida. Força principal: baixa energia em idosos (queda da própria altura) → impacto sobre o grande trocânter → fragmentação ao longo da linha intertrocantérica (trocânter maior → trocânter menor). Forças deformantes pós-fratura: fragmento proximal (flexão + abdução + RE por iliopsoas/glúteos/rotadores curtos), fragmento distal (adução + encurtamento). Conceito de Evans: SUPORTE MEDIAL (calcar femoral + trocânter menor) = elemento decisivo para estabilidade mecânica pós-fixação. Fratura ESTÁVEL = cortical medial posterior redutível → "contact point" para o parafuso dinâmico distribuir carga. Fratura INSTÁVEL = cominuição posteromedial não redutível → carga transmite direto ao implante → colapso em varo. Obliquidade reversa (Evans instável Tipo 2): traço oblíquo reverso vai de superomedial para inferolateral → o fragmento distal migra lateralmente com carga → DHS "expulsa" o fragmento pelo parafuso → haste cefalomedular obrigatória.',
  grades: [
    {
      id: 'stable',
      label: 'Estável – Suporte Medial Intacto',
      description: 'Fratura com trocânter menor intacto e suporte medial preservado.',
      criteria: [
        'Trocânter menor intacto',
        'Cortex póstero-medial com suporte',
        'Traço de fratura simples (2 fragmentos)',
        'Redução anatômica possível e estável',
        'Sem cominução significativa',
      ],
      treatment: 'DHS (dynamic hip screw) com placa lateral: tratamento padrão. Haste cefalomedular (PFN, Gamma nail) como alternativa.',
      prognosis: 'Bom. Alta taxa de consolidação. Menor risco de falha de fixação. Deambulação precoce possível.',
      colorCode: 'safe',
    },
    {
      id: 'unstable-1',
      label: 'Instável Tipo 1 – Perda do Suporte Medial',
      description: 'Fratura com perda do apoio do cortex medial (trocânter menor destacado).',
      criteria: [
        'Trocânter menor destacado (perda do apoio medial)',
        'Cominução póstero-medial',
        'Redução anatômica possível mas instável',
        'Risco de medialização do eixo diafisário',
        'Possível fratura da parede lateral',
      ],
      treatment: 'Haste cefalomedular (PFN, Gamma nail, TFN) preferível ao DHS. DHS + parafuso trocantérico de suporte como alternativa. Carga parcial protegida.',
      prognosis: 'Moderado. Maior risco de cut-out, medialização e falha de fixação que padrão estável.',
      colorCode: 'caution',
    },
    {
      id: 'unstable-2',
      label: 'Instável Tipo 2 – Obliquidade Reversa',
      description: 'Fratura com traço de obliquidade reversa. Padrão mais instável.',
      criteria: [
        'Traço de fratura com obliquidade reversa (lateral para medial, proximal para distal)',
        'Tendência à medialização do fragmento distal',
        'Padrão mais instável',
        'DHS contraindicado (deslizamento lateral do fragmento)',
        'Associação com fratura subtrocantérica',
      ],
      treatment: 'Haste cefalomedular (obrigatório): PFN, Gamma nail, TFN. DHS CONTRAINDICADO neste padrão. Considerar placa condílea de 95° como alternativa.',
      prognosis: 'Reservado. Maior taxa de complicações mecânicas. Risco de não consolidação e falha do implante.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Estabilidade depende da integridade do cortex posteromedial',
  pitfall: 'Padroes instáveis: maior risco de falha de fixacao com DHS',
  references: [
    {
      authors: 'Evans EM',
      title: 'The treatment of trochanteric fractures of the femur',
      journal: 'J Bone Joint Surg Br',
      year: 1949,
    },
  ],
};
