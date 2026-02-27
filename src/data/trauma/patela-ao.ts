import type { ClassificationData } from '@/types/tool';

export const patelaAOData: ClassificationData = {
  id: 'patela-ao',
  name: 'Classificação AO — Fraturas da Patela (34)',
  author: 'Müller / AO Foundation',
  year: 2018,
  epidemiology: 'Fraturas da patela representam 1–1,5% de todas as fraturas; incidência: 10–15/100.000/ano; pico 20–50 anos. AO 34-B (transversa completa): 50–80% dos casos; 34-A (polo): 10–30%; 34-C (cominutiva): 10–20%. Mecanismo direto (trauma sobre joelho fletido) é mais comum. Taxa de reoperação por proeminência de material após banda de tensão de arame (TBW): 20–50%. Artrose patelofemoral a longo prazo: 20–50% mesmo com redução anatômica. Critério cirúrgico funcional: incapacidade de extensão ativa do joelho contra a gravidade (Straight Leg Raise negativo) = indicação independente do desvio.',
  mechanism: 'A patela é um osso sesamoide que aumenta o braço de alavanca do quadríceps em 30–50% e distribui compressão femoropatelar. Mecanismo direto: trauma focal sobre o polo ou corpo → fratura transversa (34-B) ou cominutiva (34-C) — retináculo pode estar íntegro se trauma focal pequeno. Mecanismo indireto (avulsão): contração excêntrica violenta do quadríceps sobre joelho semifletido → avulsão polar inferior (34-A2) ou superior (34-A1) — retináculo frequentemente rompido → perda de extensão ativa. Princípio da banda de tensão AO: 2 fios K paralelos longitudinais + arame figura-8 converte força de tração do quadríceps em compressão articular posterior com a flexão = indicado APENAS para fraturas transversas simples. Cominuição (34-C): banda de tensão falha — placa mini-fragmento ou patelectomia parcial.',
  grades: [
    {
      id: 'ao-34a',
      label: 'AO 34-A — Avulsão / Periférica (Polo)',
      description: 'Fratura de avulsão periférica — polo superior ou inferior, margem lateral ou medial',
      criteria: [
        'AO 34-A1: avulsão do polo superior — arrancamento do tendão do quadríceps',
        'AO 34-A2: avulsão do polo inferior — arrancamento do tendão patelar',
        'AO 34-A3: fratura periférica lateral ou medial',
        'Mecanismo de avulsão indireta — contração muscular violenta (queda com joelho semifletido)',
        'Mecanismo de avulsão direta — trauma direto sobre o polo',
        'Mecanismo extensor PODE estar íntegro se fratura pequena e retináculo intacto',
        'Teste clínico fundamental: capacidade de extensão ativa com elevação do membro estendido'
      ],
      treatment: 'Conservador: fragmento < 2 mm, mecanismo extensor íntegro — imobilização em extensão 4-6 semanas + fisioterapia. Cirúrgico: fragmento > 2 mm OU mecanismo extensor comprometido — excisão do fragmento polar + reinserção tendínea com âncoras ou transósseo (polo inferior: McLaughlin ou técnica com fios) / sutura transóssea (polo superior). Fragmentos grandes: fixação com parafusos + banda de tensão.',
      prognosis: 'Bom prognóstico com tratamento adequado. Polo inferior (fratura de Sinding-Larsen-Johansson em adolescentes): excelente resultado com conservador. Rigidez pós-operatória: risco se imobilização prolongada.',
      colorCode: 'safe'
    },
    {
      id: 'ao-34b',
      label: 'AO 34-B — Fratura Completa Transversa ou Longitudinal',
      description: 'Fratura completa da patela — traço único que divide a patela em 2 fragmentos principais',
      criteria: [
        'AO 34-B1: fratura transversa — polo superior + polo inferior, traço horizontal (mais comum: 50-80%)',
        'AO 34-B2: fratura longitudinal (sagital) — divide patela em metade medial e lateral',
        'AO 34-B3: fratura oblíqua — traço oblíquo entre transverso e longitudinal',
        'Mecanismo mais comum: trauma direto + força de tração do quadríceps simultâneos',
        'Desvio > 3 mm = mecanismo extensor comprometido (retináculo rompido)',
        'Sinal de sulco patelar palpável quando > 3-4 mm de desvio',
        'Desvio < 2 mm + extensão ativa preservada = conservador'
      ],
      treatment: 'Conservador: desvio < 2 mm E extensão ativa preservada — imobilização em extensão por 4-6 semanas. Cirúrgico: desvio > 3 mm OU perda da extensão ativa — ORIF com banda de tensão AO (fios de Kirschner longitudinais + arame em "8") — técnica padrão ouro para fratura transversa. Parafusos canulados com banda de tensão: alternativa com menos proeminência do implante.',
      prognosis: 'Bom com redução anatômica e fixação estável. Mobilização ativa precoce (24-48h) após fixação estável. Complicação: proeminência do implante (comum com fios K) — retirada eletiva em 12-18 meses. Artrose patelofemoral: 20-30% a longo prazo.',
      colorCode: 'caution'
    },
    {
      id: 'ao-34c',
      label: 'AO 34-C — Cominutiva',
      description: 'Fratura patelar cominutiva — múltiplos fragmentos, reconstrução anatômica frequentemente impossível',
      criteria: [
        'AO 34-C1: cominuição leve com 3 fragmentos principais reconstructíveis',
        'AO 34-C2: cominuição moderada — 4-5 fragmentos, reconstrução parcialmente possível',
        'AO 34-C3: cominuição grave — fragmentação extensa, reconstrução impossível',
        'Mecanismo de alta energia — trauma direto violento (acidente automobilístico, queda de altura)',
        'Lesão de partes moles associada frequente — ferida contusa, abrasão',
        'TC pode ser necessária para planejar reconstrução',
        'Superfície articular gravemente comprometida — risco alto de artrose patelofemoral'
      ],
      treatment: 'C1/C2: ORIF tentada — fixação com cerclagem, parafusos mini-fragmento + banda de tensão modificada. Patelectomia parcial (ressecção do polo menor) + reinserção tendínea: se polo irreparável. Patelectomia total: último recurso em C3 irreparável — perda de 30% da força extensora — resultados inferiores ao longo prazo. Evitar patelectomia total sempre que possível.',
      prognosis: 'Reservado. Alta taxa de artrose patelofemoral (> 50% em longo prazo). Rigidez pós-traumática frequente. Infecção: risco aumentado nas fraturas abertas associadas. Patelectomia total: menor força extensora, dor anterior crônica.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Teste clínico FUNDAMENTAL: capacidade de extensão ativa do joelho contra gravidade com elevação do membro inferior estendido (Straight Leg Raise). SE POSITIVO (consegue elevar): retináculo intacto + mecanismo extensor funcionante → conduta conservadora possível se desvio < 2-3 mm. SE NEGATIVO (não consegue): retináculo rompido + mecanismo extensor comprometido → cirurgia INDEPENDENTE do desvio. Técnica de banda de tensão AO: 2 fios K paralelos longitudinais + arame 1.0mm em "figura de 8" anterior. Princípio: converte tensão de tração em compressão articular com flexão do joelho. DOBRAR as pontas dos fios K para dentro para minimizar irritação de partes moles.',
  pitfall: 'Fratura longitudinal (34-B2) é facilmente PERDIDA na radiografia AP — a patela parece normal. Sempre solicitar incidência tangencial (skyline/merchant view) e lateral. Sinal de Insall-Salvati alterado pode indicar ruptura do polo inferior com ascensão da patela (patela alta). Não confundir BIPARTITE patelar (variante anatômica — polo superolateral, bordas corticalizadas, bilateral em 50%, assintomático) com fratura aguda.',
  references: [
    { authors: 'Gwinner C, Märdian S, Schwabe P, et al', title: 'Current concepts review: Fractures of the patella', journal: 'GMS Interdiscip Plast Reconstr Surg DGPRÄC', year: 2016 }
  ]
};
