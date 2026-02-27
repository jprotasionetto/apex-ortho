import type { ClassificationData } from '@/types/classification.ts';

export const hawkinsClassification: ClassificationData = {
  id: 'hawkins-classification',
  name: 'Classificacao de Hawkins (Fraturas do Colo do Talo)',
  author: 'Hawkins',
  year: 1970,
  epidemiology: 'Fraturas do colo do talo representam 50% das fraturas do talo e 0,1–0,85% de todas as fraturas. Incidência <1–3/100.000/ano; pico masculino 20–40 anos (acidentes de alta energia: queda de altura, acidentes automobilísticos); em idosos: quedas simples com crescente incidência. Distribuição: Tipo I 15–20%, Tipo II 40–50%, Tipo III 20–30%, Tipo IV <5% (adição de Canale-Kelly, 1978). Necrose avascular (NAV) é a complicação mais grave — correlação direta com o grau: I=0–13%, II=20–50%, III=80–100%, IV=~100%. Artrose subtalar pós-traumática: 50–80% a longo prazo, independente da NAV. Sinal prognóstico de Hawkins: radiolucência subcondral na cúpula talar às 6–8 semanas no RX AP = vascularização preservada → NAV ausente (valor preditivo negativo próximo a 100%). Ausência do sinal de Hawkins NÃO confirma NAV — TC ou RM necessárias para diagnóstico definitivo.',
  mechanism: 'O talo tem anatomia vascular extremamente vulnerável: 60% da superfície coberta por cartilagem sem inserção perióstica → suprimento vascular predominantemente extra-ósseo. Três fontes principais: (1) artéria tibial posterior → artéria do canal do tarso (colo e corpo inferior — mais importante); (2) artéria dorsal do pé/artéria tibial anterior → ramos do colo talar superior; (3) artéria peroneira → sinus tarsi (corpo lateral). Fratura do colo em flexão plantar forçada (queda de altura, pé preso no freio): quanto maior o deslocamento → mais vasos comprometidos → maior risco de NAV. Tipo I: vasos do sinus tarsi e canal do tarso íntegros → baixo risco. Tipo II: luxação subtalar rompe artéria do canal do tarso → suprimento principal comprometido → risco moderado. Tipo III: corpo do talo extrudido posterioridade → todos os vasos comprometidos → NAV quase universal. Tipo IV: + luxação talonavicular (adição de Canale-Kelly) → comprometimento total + risco de necrose cutânea anterior. Princípio da urgência cirúrgica: redução emergencial em <6h reduz tensão nos vasos remanescentes e minimiza risco de necrose cutânea.',
  grades: [
    {
      id: 'type-1',
      label: 'Tipo I',
      description: 'Fratura nao deslocada do colo do talo',
      criteria: [
        'Fratura vertical do colo do talo sem desvio',
        'Articulacoes subtalar e tibiotalar congruentes',
        'Sem subluxacao ou luxacao associada',
        'Suprimento vascular parcialmente mantido'
      ],
      treatment: 'Imobilizacao com bota gessada sem carga por 8-12 semanas; TC para confirmar ausencia de desvio',
      prognosis: 'Taxa de necrose avascular (NAV): 0-13%. Bom prognostico com tratamento conservador adequado.',
      colorCode: 'safe'
    },
    {
      id: 'type-2',
      label: 'Tipo II',
      description: 'Fratura do colo com subluxacao/luxacao subtalar',
      criteria: [
        'Fratura do colo do talo com desvio',
        'Subluxacao ou luxacao da articulacao subtalar',
        'Articulacao tibiotalar congruente ou com subluxacao minima',
        'Ruptura do suprimento vascular pela arteria do canal do tarso'
      ],
      treatment: 'Reducao urgente e ORIF com parafusos de compressao; abordagem anteromedial e/ou anterolateral; reducao anatomica essencial',
      prognosis: 'Taxa de NAV: 20-50%. Risco significativo de complicacoes; resultado depende da qualidade da reducao.',
      colorCode: 'caution'
    },
    {
      id: 'type-3',
      label: 'Tipo III',
      description: 'Fratura do colo com luxacao subtalar e tibiotalar',
      criteria: [
        'Fratura do colo do talo com desvio significativo',
        'Luxacao da articulacao subtalar',
        'Luxacao da articulacao tibiotalar',
        'Corpo do talo extrudido posteriormente',
        'Ruptura de grande parte do suprimento vascular'
      ],
      treatment: 'Reducao de urgencia (emergencia ortopedica); ORIF apos reducao; abordagens combinadas frequentemente necessarias; considerar fixacao temporaria com fios K',
      prognosis: 'Taxa de NAV: 80-100%. Prognostico reservado; alta incidencia de artrose pos-traumatica e necessidade de artrodese.',
      colorCode: 'danger'
    },
    {
      id: 'type-4',
      label: 'Tipo IV',
      description: 'Fratura do colo com luxacao subtalar, tibiotalar e talonavicular',
      criteria: [
        'Fratura do colo do talo com luxacao completa',
        'Luxacao subtalar',
        'Luxacao tibiotalar',
        'Luxacao talonavicular (adicao de Canale e Kelly)',
        'Perda completa do suprimento vascular'
      ],
      treatment: 'Reducao de emergencia imediata; ORIF complexa; risco elevado de perda cutanea e infeccao; considerar fixador externo temporario',
      prognosis: 'Taxa de NAV: ~100%. Prognostico muito reservado; frequentemente necessita de artrodese tibiotalo-calcaneana ou amputacao em casos graves.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sinal de Hawkins (radiolucencia subcondral as 6-8 semanas) indica revascularizacao e e um bom prognostico. A presenca deste sinal na cupula do talo confirma que NAV nao ocorreu.',
  pitfall: 'Taxa de NAV: I=0-13%, II=20-50%, III=80-100%, IV=~100%. A reducao urgente e fundamental para minimizar lesao vascular adicional e necrose cutanea.',
  references: [
    'Hawkins LG. Fractures of the neck of the talus. J Bone Joint Surg Am. 1970;52(5):991-1002.',
    'Canale ST, Kelly FB Jr. Fractures of the neck of the talus. Long-term evaluation of seventy-one cases. J Bone Joint Surg Am. 1978;60(2):143-156.'
  ]
};
