import type { ScoreDefinition } from '@/types/score';

export const vasPainScale: ScoreDefinition = {
  id: 'vas-pain-scale',
  name: 'Escala Visual Analógica de Dor (EVA/VAS)',
  items: [
    {
      id: 'pain_level',
      label: 'Nível de dor atual',
      description: 'Selecione o número que melhor representa sua dor neste momento',
      type: 'radio',
      section: 'Avaliação da Dor',
      options: [
        { value: 0, label: '0 - Sem dor' },
        { value: 1, label: '1 - Dor mínima' },
        { value: 2, label: '2 - Dor leve' },
        { value: 3, label: '3 - Dor leve a moderada' },
        { value: 4, label: '4 - Dor moderada' },
        { value: 5, label: '5 - Dor moderada' },
        { value: 6, label: '6 - Dor moderada a intensa' },
        { value: 7, label: '7 - Dor intensa' },
        { value: 8, label: '8 - Dor muito intensa' },
        { value: 9, label: '9 - Dor quase insuportável' },
        { value: 10, label: '10 - Pior dor imaginável' }
      ]
    }
  ],
  maxScore: 10,
  minScore: 0,
  interpretations: [
    {
      range: [0, 0],
      label: 'Sem Dor',
      description: 'Ausência de dor',
      color: 'safe'
    },
    {
      range: [1, 3],
      label: 'Dor Leve',
      description: 'Dor leve; geralmente tolerável e não interfere significativamente nas atividades',
      color: 'safe',
      recommendation: 'Analgesia simples (paracetamol, dipirona); medidas não farmacológicas (gelo, elevação)'
    },
    {
      range: [4, 6],
      label: 'Dor Moderada',
      description: 'Dor moderada; interfere parcialmente nas atividades e pode afetar o sono',
      color: 'caution',
      recommendation: 'Analgesia escalonada (AINE + analgésico simples); considerar opioides fracos (tramadol, codeína) se refratária'
    },
    {
      range: [7, 10],
      label: 'Dor Intensa',
      description: 'Dor intensa a insuportável; interfere significativamente nas atividades e no sono; requer tratamento imediato',
      color: 'danger',
      recommendation: 'Analgesia multimodal; opioides fortes podem ser necessários; investigar causa e tratar; considerar bloqueio/infiltração'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return values.pain_level || 0;
  },
  references: [
    'Hawker GA, et al. Measures of adult pain: Visual Analog Scale for Pain (VAS Pain), Numeric Rating Scale for Pain (NRS Pain), McGill Pain Questionnaire (MPQ), Short-Form McGill Pain Questionnaire (SF-MPQ), Chronic Pain Grade Scale (CPGS), Short Form-36 Bodily Pain Scale (SF-36 BPS), and Measure of Intermittent and Constant Osteoarthritis Pain (ICOAP). Arthritis Care Res. 2011;63(Suppl 11):S240-252.',
    'Jensen MP, Karoly P, Braver S. The measurement of clinical pain intensity: a comparison of six methods. Pain. 1986;27(1):117-126.'
  ]
};
