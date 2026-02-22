import type { ClassificationData } from '@/types/tool';

export const laugeHansenData: ClassificationData = {
  id: 'lauge-hansen',
  name: 'Classificação de Lauge-Hansen',
  author: 'Lauge-Hansen',
  year: 1950,
  grades: [
    {
      id: 'sad',
      label: 'SAD - Supinação-Adução',
      description: 'Pé em supinação com força em adução (inversão)',
      criteria: [
        'Estágio 1: Fratura transversa do maléolo lateral abaixo da sindesmose OU lesão ligamentar lateral',
        'Estágio 2: Fratura vertical/oblíqua do maléolo medial (linha de fratura vertical)',
        'Fibula fraturada abaixo do nível da sindesmose (equivalente Weber A)',
        'Mecanismo de inversão forçada',
        'Sindesmose geralmente intacta'
      ],
      treatment: 'Estágio 1 isolado: imobilização funcional se estável. Estágio 2: RAFI com fixação de ambos os maléolos. Fragmento vertical medial pode necessitar placa antiglide ou parafusos.',
      prognosis: 'Bom prognóstico se redução anatômica. Sindesmose geralmente intacta, o que favorece estabilidade.',
      colorCode: 'caution'
    },
    {
      id: 'ser',
      label: 'SER - Supinação-Rotação Externa',
      description: 'Pé em supinação com rotação externa da tíbia sobre o tálus',
      criteria: [
        'Estágio 1: Lesão do ligamento tibiofibular anterior (LTFA)',
        'Estágio 2: Fratura espiral/oblíqua da fíbula ao nível da sindesmose (Weber B)',
        'Estágio 3: Lesão do ligamento tibiofibular posterior OU fratura do maléolo posterior (Volkmann)',
        'Estágio 4: Fratura do maléolo medial OU lesão do ligamento deltóide',
        'Tipo mais comum (40-75% das fraturas do tornozelo)'
      ],
      treatment: 'Estágio 2 isolado estável: pode ser conservador com bota gessada. Estágio 3-4 ou instável: RAFI. Testar sindesmose intraoperatoriamente. Maléolo posterior > 25% da superfície articular: fixar.',
      prognosis: 'Bom prognóstico se redução anatômica. A estabilidade da sindesmose é o fator mais importante.',
      colorCode: 'caution'
    },
    {
      id: 'pab',
      label: 'PAB - Pronação-Abdução',
      description: 'Pé em pronação com força em abdução (eversão)',
      criteria: [
        'Estágio 1: Fratura transversa do maléolo medial OU lesão do deltóide',
        'Estágio 2: Lesão dos ligamentos tibiofibulares (sindesmose) anterior e/ou posterior',
        'Estágio 3: Fratura cominutiva da fíbula ao nível da sindesmose ou acima',
        'Traço da fíbula tipicamente oblíquo curto/cominutivo',
        'Frequente impacção da superfície articular lateral do plafond tibial (die-punch)'
      ],
      treatment: 'Tratamento cirúrgico na maioria dos casos. RAFI com placa na fíbula, fixação do maléolo medial, reparo/fixação da sindesmose. Avaliar impacção articular com TC.',
      prognosis: 'Prognóstico moderado. A cominuição fibular e a impacção do plafond podem dificultar a redução anatômica.',
      colorCode: 'danger'
    },
    {
      id: 'per',
      label: 'PER - Pronação-Rotação Externa',
      description: 'Pé em pronação com rotação externa',
      criteria: [
        'Estágio 1: Fratura transversa do maléolo medial OU lesão do deltóide',
        'Estágio 2: Lesão do ligamento tibiofibular anterior',
        'Estágio 3: Fratura espiral/oblíqua da fíbula acima da sindesmose (Weber C)',
        'Estágio 4: Lesão do ligamento tibiofibular posterior OU fratura do maléolo posterior',
        'Lesão obrigatória da sindesmose (instável)'
      ],
      treatment: 'Tratamento cirúrgico. RAFI com placa na fíbula, fixação medial, reparo da sindesmose (parafuso ou suture-button). Fixação da sindesmose é mandatória. Maléolo posterior: fixar se > 25% ou se instável.',
      prognosis: 'Prognóstico reservado pela lesão sindesmosal. Instabilidade residual da sindesmose é a principal causa de mau resultado.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Primeira palavra = posição do pé no momento do trauma, segunda = direção da força deformante. SER é o mecanismo mais comum (40-75%). Entender o mecanismo ajuda a prever as estruturas lesadas.',
  pitfall: 'Nem sempre correlaciona com o mecanismo real do trauma. A classificação deve ser usada como guia para entender o padrão lesional, não como descrição absoluta do mecanismo.',
  references: [
    {
      authors: 'Lauge-Hansen N',
      title: 'Fractures of the ankle. II. Combined experimental-surgical and experimental-roentgenologic investigations',
      journal: 'Arch Surg',
      year: 1950
    },
    {
      authors: 'Michelson JD',
      title: 'Ankle fractures resulting from rotational injuries',
      journal: 'J Am Acad Orthop Surg',
      year: 2003
    }
  ]
};
