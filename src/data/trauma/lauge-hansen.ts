import type { ClassificationData } from '@/types/tool';

export const laugeHansenData: ClassificationData = {
  id: 'lauge-hansen',
  name: 'Classificação de Lauge-Hansen',
  author: 'Lauge-Hansen',
  year: 1950,
  epidemiology: 'A classificação de Lauge-Hansen é usada em ~60–70% dos serviços de trauma para descrever o mecanismo das fraturas do tornozelo, complementando Weber. Distribuição por mecanismo: SER (~60–70% das fraturas do tornozelo, mais comum), SAD (~10–15%), PAB (~5–10%), PER (~20–25%). O SER estágio 4 (bimaleolar completo) é o padrão mais cirúrgico comum. A reprodutibilidade interobservador da Lauge-Hansen é moderada (kappa 0,45–0,65) comparada à Weber (kappa 0,60–0,75) — sugere-se combinar ambas na comunicação clínica. As lesões sindesmoticais ocultas (Weber B / SER estágio 3 sem fratura medial visível) são subestimadas em ~15% pelo Rx simples — exige stress test ou RNM. A fratura de Maisonneuve (PER de alta energia) é perdida em até 30% dos casos se o Rx não incluir fíbula proximal.',
  mechanism: 'Lauge-Hansen (1950) baseou-se em cadáveres com o pé fixo e o corpo rotacionando. Primeira palavra = posição do pé no momento do impacto; segunda = vetor da força deformante. Princípio unificador: cada mecanismo lesiona estruturas de forma SEQUENCIAL (estágios progressivos). SAD: pé em supinação (ligamentos laterais tensionados) + força adutora → cisalhamento transverso da fíbula distal (estágio 1: abaixo da sindesmose = Weber A) → compressão do maléolo medial em adução extrema (estágio 2: fratura vertical = distingue do SER que tem traço oblíquo). SER: pé em supinação + rotação externa → tensão e ruptura sequencial do complexo ligamentar anterior-lateral-posterior-medial → fratura espiral da fíbula ao nível da sindesmose (Weber B). PAB: pé em pronação (deltóide tensionado) + abdução → avulsão medial (estágio 1) → lesão sindesmosal (estágio 2) → cominuição fibular ao nível ou acima da sindesmose (estágio 3). PER: pé em pronação + rotação externa → lesão sequencial medial-sindesmose-membrana interóssea → fratura espiral alta da fíbula (Weber C) — quanto mais alta, mais proximal o PER (Maisonneuve = PER máximo).',
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
