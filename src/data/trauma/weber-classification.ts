import type { ClassificationData } from '@/types/tool';

export const weberClassificationData: ClassificationData = {
  id: 'weber-classification',
  name: 'Classificação de Weber',
  author: 'Weber',
  year: 1972,
  grades: [
    {
      id: 'weber-a',
      label: 'Weber A - Infrassindesmal',
      description: 'Fratura da fíbula abaixo da sindesmose',
      criteria: [
        'Fratura da fíbula abaixo do nível da sindesmose tibiofibular',
        'Sindesmose intacta',
        'Membrana interóssea intacta',
        'Geralmente fratura transversa ou avulsão da ponta do maléolo',
        'Articulação tibiofibular estável',
        'Pode ter fratura vertical do maléolo medial associada (SAD tipo 2)'
      ],
      treatment: 'Geralmente tratamento conservador com bota gessada ou imobilizador por 4-6 semanas se fratura isolada e estável. Cirúrgico se desvio significativo ou maléolo medial associado.',
      prognosis: 'Excelente prognóstico. Articulação tibiofibular estável. Consolidação esperada em 6 semanas.',
      colorCode: 'safe'
    },
    {
      id: 'weber-b',
      label: 'Weber B - Transsindesmal',
      description: 'Fratura da fíbula ao nível da sindesmose',
      criteria: [
        'Fratura da fíbula ao nível da sindesmose tibiofibular',
        'Geralmente traço espiral ou oblíquo',
        'Sindesmose pode ou não estar lesada (50% de lesão)',
        'Membrana interóssea parcialmente intacta',
        'Corresponde ao mecanismo SER de Lauge-Hansen',
        'Tipo mais comum de fratura do tornozelo'
      ],
      treatment: 'Depende da estabilidade. Se estável (sem lesão medial, sem alargamento da mortise): conservador. Se instável (lesão deltóide/fratura medial): RAFI. Teste de stress intraoperatório para sindesmose.',
      prognosis: 'Bom prognóstico se redução anatômica e sindesmose estável. Resultado depende da restauração da congruência da mortise.',
      colorCode: 'caution'
    },
    {
      id: 'weber-c',
      label: 'Weber C - Suprassindesmal',
      description: 'Fratura da fíbula acima da sindesmose',
      criteria: [
        'Fratura da fíbula acima do nível da sindesmose',
        'Sindesmose lesada (sempre)',
        'Membrana interóssea lesada até o nível da fratura',
        'Lesão do ligamento deltóide ou fratura do maléolo medial',
        'Articulação tibiofibular instável',
        'Inclui fratura de Maisonneuve (fratura proximal da fíbula)'
      ],
      treatment: 'Tratamento cirúrgico. RAFI da fíbula, fixação medial, reparo obrigatório da sindesmose (parafuso sindesmal ou suture-button). Na fratura de Maisonneuve: não fixar fíbula proximal, apenas sindesmose.',
      prognosis: 'Prognóstico reservado pela lesão sindesmosal obrigatória. Instabilidade residual da sindesmose leva a artrose precoce do tornozelo.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Weber C implica lesão da sindesmose e instabilidade. Sempre palpar toda a extensão da fíbula - dor proximal sugere fratura de Maisonneuve (Weber C alto).',
  pitfall: 'Weber B pode ter sindesmose íntegra ou lesada - avaliar com stress test (rotação externa sob fluoroscopia). A decisão cirúrgica depende mais da estabilidade que da classificação isolada.',
  references: [
    {
      authors: 'Weber BG',
      title: 'Die Verletzungen des oberen Sprunggelenkes',
      journal: 'Aktuelle Probleme in der Chirurgie',
      year: 1972
    },
    {
      authors: 'Daly PJ, Fitzgerald RH Jr, Melton LJ, Ilstrup DM',
      title: 'Epidemiology of ankle fractures in Rochester, Minnesota',
      journal: 'Acta Orthop Scand',
      year: 1987
    }
  ]
};
