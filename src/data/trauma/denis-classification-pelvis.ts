import type { ClassificationData } from '@/types/tool';

export const denisClassificationPelvisData: ClassificationData = {
  id: 'denis-classification-pelvis',
  name: 'Classificação de Denis - Zonas Sacrais',
  author: 'Denis',
  year: 1988,
  epidemiology: 'Fraturas sacrais ocorrem em 5% de todas as fraturas pélvicas e em 17–45% das fraturas pélvicas instáveis. Incidência: 1–5/100.000/ano. Zona I (alar): ~50% das fraturas sacrais; déficit neurológico em apenas 5–6%. Zona II (foraminal): ~35%; déficit neurológico em 25–30% (raízes L5, S1). Zona III (canal central): ~15%; déficit neurológico (cauda equina) em 50–60%; risco de disfunção vesical, intestinal e sexual. Fraturas em U ou H ("suicidal jumper fracture" de Roy-Camille): padrão de alta energia com dissociação espinopélvica grave — necessitam fixação lombopélvica.',
  mechanism: 'Denis (1988) classificou fraturas sacrais em 3 zonas anatômicas com correlação neurológica crescente. Zona I (lateral aos forames): geralmente por compressão lateral do anel pélvico → fratura da asa sacral sem estruturas neurais → baixo risco. Zona II (através dos forames sacrais): traço vertical ou oblíquo envolve os forames → compressão/laceração de raízes sacrais (L5 = queda do pé; S1 = perda reflexo aquileu; S2–S4 = bexiga/esfíncter/função sexual). Zona III (medial aos forames = canal sacral): compressão da cauda equina → síndrome neurológica grave com anestesia em sela, retenção urinária, perda de tônus do esfíncter anal. Fraturas transversas (U/H) = alta energia = dissociação espinopélvica = instabilidade extrema.',
  grades: [
    {
      id: 'zone-i',
      label: 'Zona I - Alar / Lateral',
      description: 'Fratura lateral ao forame sacral (região alar)',
      criteria: [
        'Fratura lateral aos forames sacrais',
        'Região alar do sacro',
        'Não envolve forames neurais',
        'Não envolve canal central',
        'Geralmente associada a fraturas do anel pélvico (LC)',
        'Pode ser por compressão lateral ou avulsão'
      ],
      treatment: 'Depende da estabilidade do anel pélvico. Se estável: conservador. Se instável (associada a lesão do anel): fixação com parafuso iliosacro percutâneo.',
      prognosis: 'Bom prognóstico neurológico. Déficit neurológico em apenas 5-6% dos casos. Risco de dor sacroilíaca residual.',
      colorCode: 'safe'
    },
    {
      id: 'zone-ii',
      label: 'Zona II - Foraminal',
      description: 'Fratura através dos forames sacrais',
      criteria: [
        'Fratura através dos forames sacrais',
        'Risco de lesão das raízes nervosas sacrais (L5, S1, S2)',
        'Pode haver compressão foraminal',
        'Geralmente vertical ou oblíqua',
        'Associada a instabilidade posterior do anel pélvico'
      ],
      treatment: 'Fixação cirúrgica na maioria dos casos (parafuso iliosacro, placa sacroilíaca). Descompressão foraminal se déficit neurológico progressivo. Monitorizar função vesical.',
      prognosis: 'Prognóstico moderado. Déficit neurológico em 25-30% dos casos. Lesão de L5 (pé caído) e S1 (perda do reflexo aquileu) mais comuns.',
      colorCode: 'caution'
    },
    {
      id: 'zone-iii',
      label: 'Zona III - Central / Canal',
      description: 'Fratura medial aos forames, envolvendo o canal sacral',
      criteria: [
        'Fratura medial aos forames sacrais',
        'Envolvimento do canal sacral central',
        'Risco de lesão da cauda equina',
        'Fraturas transversas do sacro (mais comuns nesta zona)',
        'Podem incluir fraturas em U ou H',
        'Alta energia'
      ],
      treatment: 'Descompressão cirúrgica urgente se déficit neurológico (cauda equina). Fixação lombopélvica ou espinopélvica. Laminectomia sacral para descompressão do canal.',
      prognosis: 'Prognóstico reservado. Déficit neurológico em 50-60% dos casos. Risco de disfunção vesical, intestinal e sexual (síndrome da cauda equina sacral).',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Zona III tem alto risco de déficit neurológico (cauda equina). Sempre avaliar função vesical (retenção urinária), sensibilidade perineal (anestesia em sela) e tônus do esfíncter anal.',
  pitfall: 'Fraturas sacrais podem ser ocultas em radiografias simples. TC é essencial para diagnóstico. Fraturas transversas do sacro (em U ou H) são frequentemente perdidas e têm alto risco de instabilidade espinopélvica.',
  references: [
    {
      authors: 'Denis F, Davis S, Comfort T',
      title: 'Sacral fractures: an important problem. Retrospective analysis of 236 cases',
      journal: 'Clin Orthop Relat Res',
      year: 1988
    },
    {
      authors: 'Roy-Camille R, Saillant G, Gagna G, Mazel C',
      title: 'Transverse fracture of the upper sacrum: suicidal jumper\'s fracture',
      journal: 'Spine',
      year: 1985
    }
  ]
};
