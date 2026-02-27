import type { ClassificationData } from '@/types/classification';

export const denisClassificationSpine: ClassificationData = {
  id: 'denis-classification-spine',
  name: 'Classificação de Denis - 3 Colunas (Coluna Vertebral)',
  author: 'Denis',
  year: 1983,
  epidemiology: 'A classificação de Denis (1983) introduziu o conceito das 3 colunas vertebrais, baseada em análise de 412 fraturas toracolombares. Denis identificou que a coluna média (1/3 posterior do corpo + LLP) era o pivot de estabilidade — conceito revolucionário que substituiu o modelo de 2 colunas de Holdsworth. Fraturas por compressão: ~49% do total. Burst (colunas A+M): ~14% — déficit neurológico em 16–57% dependendo do grau de comprometimento do canal. Fratura-luxação (3 colunas): ~5% — déficit neurológico em 75% dos casos.',
  mechanism: 'Denis definiu 3 colunas para análise biomecânica: ANTERIOR = ligamento longitudinal anterior + 2/3 anteriores do corpo vertebral e ânulo fibroso. MÉDIA = 1/3 posterior do corpo + ânulo posterior + ligamento longitudinal posterior (LLP). POSTERIOR = complexo osteoligamentar posterior (pedículos, lâminas, facetas, ligamentos). Instabilidade de 1ª grau (mecânica): 2+ colunas. Instabilidade de 2ª grau (neurológica): burst com comprometimento do canal >50% ou cifose >20°. Instabilidade de 3ª grau (mecânica + neurológica): fratura-luxação com déficit neurológico.',
  grades: [
    {
      id: 'one-column',
      label: '1 Coluna Envolvida',
      description: 'Lesão estável - apenas uma coluna comprometida',
      criteria: [
        'Lesão isolada de uma das três colunas',
        '**Coluna Anterior:** ligamento longitudinal anterior + 2/3 anteriores do corpo vertebral e ânulo fibroso',
        '**Coluna Média:** 1/3 posterior do corpo vertebral + ligamento longitudinal posterior + ânulo fibroso posterior',
        '**Coluna Posterior:** elementos posteriores (pedículos, lâminas, facetas, processos espinhosos, ligamentos supraespinhoso, interespinhoso e amarelo)',
        'Exemplo: fratura compressão simples (coluna anterior isolada)'
      ],
      treatment: 'Tratamento conservador: órtese (colete) por 8-12 semanas; analgesia; fisioterapia precoce',
      prognosis: 'Bom prognóstico; estável; consolidação esperada com tratamento conservador',
      colorCode: 'safe'
    },
    {
      id: 'two-columns',
      label: '2 Colunas Envolvidas',
      description: 'Potencialmente instável - duas colunas comprometidas',
      criteria: [
        'Lesão envolvendo duas das três colunas',
        'Coluna média comprometida é o fator determinante de instabilidade',
        'Exemplo: fratura em explosão (burst) - colunas anterior e média',
        'Exemplo: fratura-luxação por flexão - colunas média e posterior'
      ],
      treatment: 'Avaliação individualizada: conservador com órtese rígida se sem déficit neurológico e sem deformidade significativa; cirúrgico se instabilidade, déficit neurológico ou deformidade progressiva',
      prognosis: 'Prognóstico variável; depende do envolvimento da coluna média e status neurológico',
      colorCode: 'caution'
    },
    {
      id: 'three-columns',
      label: '3 Colunas Envolvidas',
      description: 'Instável - todas as três colunas comprometidas',
      criteria: [
        'Lesão envolvendo todas as três colunas',
        'Instabilidade mecânica definida',
        'Alto risco de lesão neurológica',
        'Exemplo: fratura-luxação (translação/rotação)',
        'Exemplo: lesão por distração posterior com burst anterior'
      ],
      treatment: 'Tratamento cirúrgico: estabilização com instrumentação (parafusos pediculares, barras); descompressão se déficit neurológico',
      prognosis: 'Prognóstico reservado; necessita estabilização cirúrgica; risco neurológico significativo',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'A integridade da coluna média (1/3 posterior do corpo vertebral e ligamento longitudinal posterior) é o principal determinante de estabilidade na classificação de Denis',
  pitfall: 'Classificação de Denis tem limitações na avaliação de instabilidade - TLICS e AO Spine são mais utilizadas atualmente para guiar decisão terapêutica',
  references: [
    'Denis F. The three column spine and its significance in the classification of acute thoracolumbar spinal injuries. Spine. 1983;8(8):817-831.',
    'Denis F. Spinal instability as defined by the three-column spine concept in acute spinal trauma. Clin Orthop Relat Res. 1984;(189):65-76.'
  ]
};
