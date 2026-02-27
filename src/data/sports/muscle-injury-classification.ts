import type { ClassificationData } from '@/types/classification';

export const muscleInjuryClassification: ClassificationData = {
  id: 'muscle-injury-classification',
  name: 'Classificação de Lesões Musculares (Munich/BA)',
  author: 'Mueller-Wohlfahrt',
  year: 2013,
  epidemiology: 'Lesões musculares representam 30–45% de todas as lesões esportivas no futebol (Munich Consensus, 2013). Isquiotibiais: 12–16% de todas as lesões no futebol; taxa de recidiva 12–34%; principal causa de dias perdidos. Quadríceps: 5–7%; adutores: 10–18%. Taxa de recidiva global: Tipo 3A 7–15%, Tipo 3B 14–30%, Tipo 4 5–10% após reparo cirúrgico. Ausência média: Tipo 3A 2–4 semanas, Tipo 3B 4–8 semanas, Tipo 4 3–6 meses. DOMS (Tipo 1B): afeta 95% dos atletas após treino excêntrico incomum.',
  mechanism: 'Classificação Munich distingue lesões FUNCIONAIS (Tipo 1–2: sem ruptura sarcomérica macroscópica = RM normal ou apenas edema difuso) de ESTRUTURAIS (Tipo 3–4: ruptura sarcomérica com edema focal e hematoma na RM). Tipo 1 (overload): acúmulo de metabólitos → sensibilização de nociceptores intramusculares; RM normal. Tipo 2 (neuromotor): tônus aumentado por reflexo espinhal (2A = origem espinal) ou desequilíbrio motor (2B = intramuscular); RM normal. Tipo 3A: <1 fascículo ou <5mm; Tipo 3B: >1 fascículo ou >5mm — escalonamento baseado em extensão da ruptura sarcomérica. Tipo 4: avulsão completa = ruptura de toda a unidade musculotendínea. Quanto maior a extensão, maior o hematoma e o tempo de retorno.',
  grades: [
    {
      id: 'type-1a',
      label: 'Tipo 1A',
      description: 'Distúrbio muscular funcional induzido por fadiga',
      criteria: [
        'Dor muscular relacionada ao esforço excessivo',
        'Sobrecarga aguda ou crônica',
        'Sem lesão estrutural identificável na imagem',
        'Aumento do tônus muscular doloroso'
      ],
      treatment: 'Repouso relativo, crioterapia, alongamento suave, retorno gradual à atividade em 3-7 dias',
      prognosis: 'Excelente; recuperação rápida em poucos dias',
      colorCode: 'safe'
    },
    {
      id: 'type-1b',
      label: 'Tipo 1B',
      description: 'Dor muscular de início tardio (DOMS)',
      criteria: [
        'Dor muscular 24-72h após exercício incomum ou excêntrico',
        'Rigidez e fraqueza muscular transitória',
        'Sem alteração estrutural na imagem',
        'Microlesões na junção actina-miosina'
      ],
      treatment: 'Repouso ativo, crioterapia, exercícios de baixa intensidade, retorno em 3-5 dias',
      prognosis: 'Excelente; autolimitada',
      colorCode: 'safe'
    },
    {
      id: 'type-2a',
      label: 'Tipo 2A',
      description: 'Distúrbio neuromuscular relacionado à coluna',
      criteria: [
        'Aumento do tônus muscular de origem neurogênica',
        'Relacionado a disfunção da coluna vertebral',
        'Sem lesão muscular estrutural',
        'Padrão de dor referida ou irradiada'
      ],
      treatment: 'Tratamento da causa espinal, fisioterapia, mobilização, retorno em 5-14 dias',
      prognosis: 'Bom, dependente do tratamento da causa base',
      colorCode: 'safe'
    },
    {
      id: 'type-2b',
      label: 'Tipo 2B',
      description: 'Distúrbio neuromuscular relacionado ao músculo',
      criteria: [
        'Aumento do tônus muscular de causa intrínseca',
        'Relacionado a desequilíbrio muscular ou alteração de ativação',
        'Sem lesão estrutural na imagem',
        'Contraturas musculares palpáveis'
      ],
      treatment: 'Fisioterapia direcionada, liberação miofascial, correção de desequilíbrios, retorno em 5-14 dias',
      prognosis: 'Bom, desde que corrigida a causa base',
      colorCode: 'safe'
    },
    {
      id: 'type-3a',
      label: 'Tipo 3A',
      description: 'Rotura parcial menor (tear parcial)',
      criteria: [
        'Rotura parcial envolvendo < 1 fascículo ou < 5mm de diâmetro',
        'Lesão estrutural visível na RM',
        'Dor aguda durante atividade com ponto de dor localizado',
        'Edema e hematoma local limitados'
      ],
      treatment: 'Repouso, crioterapia, compressão, AINE curto prazo, fisioterapia progressiva, retorno em 3-4 semanas',
      prognosis: 'Bom; baixa taxa de recidiva com reabilitação adequada',
      colorCode: 'caution'
    },
    {
      id: 'type-3b',
      label: 'Tipo 3B',
      description: 'Rotura parcial moderada/subtotal',
      criteria: [
        'Rotura parcial envolvendo > 1 fascículo ou > 5mm de diâmetro',
        'Dor intensa com incapacidade funcional imediata',
        'Hematoma significativo visível na RM',
        'Pode envolver junção miotendínea'
      ],
      treatment: 'Repouso, imobilização relativa, fisioterapia progressiva estruturada, retorno em 4-8 semanas, considerar PRP em casos selecionados',
      prognosis: 'Moderado a bom; risco de recidiva se retorno precoce',
      colorCode: 'danger'
    },
    {
      id: 'type-4',
      label: 'Tipo 4',
      description: 'Rotura completa / avulsão tendinosa',
      criteria: [
        'Ruptura completa do ventre muscular ou avulsão tendinosa',
        'Defeito palpável no músculo (gap)',
        'Incapacidade funcional total',
        'Retração muscular visível na RM',
        'Hematoma extenso'
      ],
      treatment: 'Avaliação cirúrgica mandatória; reparo cirúrgico frequentemente indicado; reabilitação prolongada 3-6 meses',
      prognosis: 'Reservado sem cirurgia; bom com reparo cirúrgico adequado e reabilitação',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Distinção entre funcional (1-2) e estrutural (3-4) é fundamental para prognóstico',
  pitfall: 'Imagem por RM nas primeiras 24-48h pode subestimar extensão',
  references: [
    'Mueller-Wohlfahrt HW, et al. Terminology and classification of muscle injuries in sport: the Munich consensus statement. Br J Sports Med. 2013;47(6):342-350.'
  ]
};
