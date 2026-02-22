import type { ClassificationData } from '@/types/tool';

export const denisClassificationPelvisData: ClassificationData = {
  id: 'denis-classification-pelvis',
  name: 'Classificação de Denis - Zonas Sacrais',
  author: 'Denis',
  year: 1988,
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
