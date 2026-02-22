import type { ClassificationData } from '@/types/tool';

export const weberClassificationData: ClassificationData = {
  id: 'weber-classification',
  name: 'Classificação de Weber — Fraturas do Tornozelo',
  author: 'Weber',
  year: 1972,
  grades: [
    {
      id: 'weber-a',
      label: 'Weber A — Infrassindesmal (AO/OTA 44A / 4F1A)',
      description: 'Fratura da fíbula abaixo da sindesmose — sindesmose intacta',
      criteria: [
        'Fratura da fíbula ABAIXO do nível da sindesmose tibiofibular',
        'Sindesmose e membrana interóssea intactas',
        'Geralmente fratura transversa ou avulsão da ponta do maléolo lateral',
        'Articulação tibiofibular distal estável',
        'Equivale ao mecanismo SAD (Supinação-Adução) de Lauge-Hansen',
        'Pode ter fratura vertical do maléolo medial associada (SAD estágio 2)',
        'AO/OTA 2018: a fíbula é classificada separadamente com prefixo "4F"'
      ],
      treatment: 'Tratamento conservador com bota gessada ou imobilizador removível por 4–6 semanas se isolada e estável. Cirúrgico se desvio significativo do maléolo lateral ou se fratura bimaleolar (+ maléolo medial vertical).',
      prognosis: 'Excelente prognóstico. Sindesmose estável. Consolidação em 6 semanas.',
      colorCode: 'safe'
    },
    {
      id: 'weber-b',
      label: 'Weber B — Transsindesmal (AO/OTA 44B / 4F1B)',
      description: 'Fratura da fíbula ao nível da sindesmose — sindesmose pode ou não estar lesada',
      criteria: [
        'Fratura da fíbula AO NÍVEL da sindesmose tibiofibular',
        'Traço geralmente espiral ou oblíquo começando na sindesmose e propagando proximal-posterior',
        'Sindesmose pode ou não estar lesada (50% de lesão)',
        'Corresponde ao mecanismo SER (Supinação-Rotação Externa) de Lauge-Hansen',
        'TIPO MAIS COMUM de fratura do tornozelo',
        'Estabilidade depende do componente medial: deltóide íntegro = estável; deltóide lesado = instável',
        'AO/OTA 2018: tíbia distal (44) é classificada separadamente da fíbula (4F1)'
      ],
      treatment: 'ESTÁVEL (sem lesão medial, sem alargamento da mortise): conservador com bota por 6 semanas. INSTÁVEL (lesão deltóide ou fratura medial): RAFI da fíbula + fixação medial. Stress test intraoperatório (rotação externa sob fluoroscopia) para sindesmose — fixar se positivo.',
      prognosis: 'Bom prognóstico se redução anatômica da mortise e sindesmose competente. A congruência da mortise tibiotalar é o principal determinante do resultado.',
      colorCode: 'caution'
    },
    {
      id: 'weber-c',
      label: 'Weber C — Suprassindesmal (AO/OTA 44C / 4F1C)',
      description: 'Fratura da fíbula acima da sindesmose — sindesmose SEMPRE lesada',
      criteria: [
        'Fratura da fíbula ACIMA do nível da sindesmose',
        'Sindesmose SEMPRE lesada (por definição)',
        'Membrana interóssea lesada até o nível da fratura',
        'Lesão obrigatória do ligamento deltóide OU fratura do maléolo medial',
        'Articulação tibiofibular distal instável',
        'INCLUI fratura de Maisonneuve (fratura da fíbula proximal + lesão completa da membrana interóssea + lesão da sindesmose)',
        'Corresponde ao mecanismo PER (Pronação-Rotação Externa) de Lauge-Hansen'
      ],
      treatment: 'SEMPRE cirúrgico. RAFI da fíbula (exceto Maisonneuve — não fixar fíbula proximal), fixação medial, reparo OBRIGATÓRIO da sindesmose (parafuso tricorical/quadricortical ou suture-button). Na Maisonneuve: fixar apenas sindesmose + medial.',
      prognosis: 'Prognóstico reservado pela lesão sindesmosal obrigatória. Instabilidade sindesmosal residual é a principal causa de artrose precoce do tornozelo. A qualidade da redução sindesmosal correlaciona diretamente com o resultado funcional.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'AO/OTA 2018: tíbia distal e fíbula são classificadas SEPARADAMENTE — 44 (maléolar tibial) e 4F1 (fíbula distal). Weber integra o sistema AO/OTA da fíbula. SEMPRE palpar TODA a extensão da fíbula — dor na fíbula proximal sugere Maisonneuve (Weber C alto). O segmento maléolar (44) substitui a antiga numeração 4.4.',
  pitfall: 'Weber B é a "zona cinzenta" — pode ter sindesmose íntegra ou lesada. A decisão cirúrgica depende da ESTABILIDADE (avaliar componente medial e stress test) mais que da classificação isolada. Rx com stress em rotação externa (gravity stress ou manual) ajuda na decisão conservador vs cirúrgico em Weber B isoladas.',
  references: [
    {
      authors: 'Weber BG',
      title: 'Die Verletzungen des oberen Sprunggelenkes',
      journal: 'Aktuelle Probleme in der Chirurgie, Band 3',
      year: 1972
    },
    {
      authors: 'Daly PJ, Fitzgerald RH Jr, Melton LJ, Ilstrup DM',
      title: 'Epidemiology of ankle fractures in Rochester, Minnesota',
      journal: 'Acta Orthop Scand',
      year: 1987
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018 (Malleolar segment)',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
