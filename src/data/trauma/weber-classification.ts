import type { ClassificationData } from '@/types/tool';

export const weberClassificationData: ClassificationData = {
  id: 'weber-classification',
  name: 'Classificação de Weber — Fraturas do Tornozelo',
  author: 'Weber',
  year: 1972,
  epidemiology: 'Fraturas do tornozelo são as fraturas articulares mais comuns dos membros inferiores: incidência de ~187/100.000 pessoa-ano (dados americanos), representando ~9% de todas as fraturas. Pico bimodal: homens jovens (20–30 anos, trauma esportivo/alta energia) e mulheres idosas (> 65 anos, queda de baixa energia + osteoporose). Relação mulher:homem de 1,2:1 geral; inverte-se para 2,5:1 acima de 65 anos. Distribuição de Weber: A (~25%), B (~55–60%, tipo mais comum), C (~15–20%). Fraturas bimaleolares (maléolo medial + Weber B/C) em ~25% dos casos; trimaleolares (+ maléolo posterior de Volkmann) em ~7%. Taxa de lesão sindesmosal: Weber B ~10–50% (depende do componente medial), Weber C 100%. Fratura de Maisonneuve (~5% das fraturas do tornozelo): Weber C com fratura da fíbula proximal — frequentemente subdiagnosticada se o Rx não incluir toda a fíbula.',
  mechanism: 'Weber baseia-se na localização anatômica da fratura fibular em relação à sindesmose tibiofibular distal. Weber A (infrassindesmal) → força de inversão com pé em supinação (Lauge-Hansen SAD): avulsão transversa do maléolo lateral por tensão ou compressão direta — sindesmose intacta por estar acima da fratura. Weber B (transsindesmal) → rotação externa com supinação (Lauge-Hansen SER): tálus rotaciona sob a tíbia → cisalhamento espiral/oblíquo da fíbula ao nível da sindesmose — sindesmose pode ou não ser lesada dependendo da magnitude da rotação (50% lesão). Weber C (suprassindesmal) → pronação com rotação externa ou abdução (Lauge-Hansen PER ou PAB): primeiro lesão medial, depois sindesmose, depois fíbula proximal — TODA a membrana interóssea entre a articulação e a fratura está lesada, sindesmose 100% instável. Princípio de Lauge-Hansen: lesão sequencial das estruturas (menor para maior energia), explicando por que o estágio da lesão prediz as estruturas comprometidas.',
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
