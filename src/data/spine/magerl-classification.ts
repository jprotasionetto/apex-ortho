import type { ClassificationData } from '@/types/classification';

export const magerlClassification: ClassificationData = {
  id: 'magerl-classification',
  name: 'Classificação de Magerl / AO Spine (Fratura Toracolombar)',
  author: 'Magerl',
  year: 1994,
  epidemiology: 'Fraturas toracolombares são as mais comuns de toda a coluna vertebral — junção T11-L2 concentra ~50% de todas as fraturas espinhais. Distribuição: Tipo A 50–55%, Tipo B 30–35%, Tipo C 10–15%. TLICS ≥5 pontos = indicação cirúrgica; ≤3 = conservador; 4 = individualizado. AO Spine (2013/2016) adicionou modificadores neurológicos (N0–N4) e clínicos (M1 complexo ligamentar, M2 comorbidades).',
  mechanism: 'A junção toracolombar (T11-L2) é biomechanicamente vulnerável pela transição abrupta de rigidez entre a coluna torácica (imobilizada pelas costelas) e a lombar (mais móvel). Tipo A: carga axial pura ou com flexão → compressão do corpo anterior, coluna posterior intacta. Tipo B: fratura de Chance (B1) por mecanismo cinto de segurança → distração posterior em hiperflexão; B3: extensão-distração com rotura anterior. Tipo C: rotação-translação de alta energia → lesão das 3 colunas → instabilidade absoluta.',
  grades: [
    {
      id: 'type-a',
      label: 'Tipo A - Compressão',
      description: 'Fratura do corpo vertebral por compressão axial',
      criteria: [
        '**A0:** Fratura menor (processo transverso, espinhoso) - sem comprometimento do corpo',
        '**A1:** Fratura em cunha / compressão - parede posterior intacta',
        '**A2:** Fratura em split (separação) - no plano coronal ou sagital',
        '**A3:** Fratura em explosão (burst) incompleta - envolvimento parcial da parede posterior',
        '**A4:** Fratura em burst completa - envolvimento total da parede posterior',
        'Coluna posterior intacta',
        'Mecanismo: carga axial, flexão'
      ],
      treatment: 'A0-A1: conservador (colete TLSO). A2: conservador ou cirúrgico dependendo da estabilidade. A3-A4: considerar cirúrgico se comprometimento do canal >50%, cifose >20°, ou déficit neurológico',
      prognosis: 'A0-A1: excelente prognóstico. A3-A4: depende do grau de comprometimento do canal e status neurológico',
      colorCode: 'safe'
    },
    {
      id: 'type-b',
      label: 'Tipo B - Distração',
      description: 'Lesão por distração / tensão (banda de tensão posterior ou anterior)',
      criteria: [
        '**B1:** Lesão transóssea da banda de tensão posterior (fratura de Chance)',
        '**B2:** Lesão da banda de tensão posterior (ligamentar) com fratura do corpo',
        '**B3:** Lesão por hiperextensão (distração anterior)',
        'Falha da banda de tensão posterior (B1-B2) ou anterior (B3)',
        'Instabilidade no plano sagital',
        'Mecanismo: flexão-distração (cinto de segurança) ou hiperextensão'
      ],
      treatment: 'Maioria requer tratamento cirúrgico: instrumentação posterior com parafusos pediculares. B1 (fratura de Chance pura): pode ser conservador com hiperextensão se osso somente. B2-B3: cirúrgico',
      prognosis: 'B1 óssea pura: bom prognóstico. B2 ligamentar: instabilidade crônica sem cirurgia. B3: variável',
      colorCode: 'caution'
    },
    {
      id: 'type-c',
      label: 'Tipo C - Translação / Rotação',
      description: 'Deslocamento / translação em qualquer plano',
      criteria: [
        'Translação ou rotação em qualquer direção',
        'Desalinhamento dos corpos vertebrais',
        'Lesão de todas as três colunas',
        'Inclui fratura-luxação',
        'Mecanismo de alta energia',
        'Alto risco de lesão medular'
      ],
      treatment: 'Tratamento SEMPRE cirúrgico: redução e estabilização com instrumentação longa (parafusos pediculares + barras); descompressão se déficit neurológico',
      prognosis: 'Prognóstico reservado; alta taxa de lesão neurológica; necessidade de instrumentação extensa',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'AO Spine atualizada inclui score de gravidade que combina morfologia + status neurológico + modificadores clínicos para guiar decisão terapêutica',
  pitfall: 'Tipo C é sempre instável - indicação cirúrgica absoluta. Não subestimar lesões tipo B com componente ligamentar (podem parecer alinhadas em posição supina)',
  references: [
    'Magerl F, et al. A comprehensive classification of thoracic and lumbar injuries. Eur Spine J. 1994;3(4):184-201.',
    'Vaccaro AR, et al. AOSpine thoracolumbar spine injury classification system. Spine. 2013;38(23):2028-2037.'
  ]
};
