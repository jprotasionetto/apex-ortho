export const herniatedDiscGuide = {
  id: 'herniated-disc-guide',
  name: 'Guia de Hérnia Discal',
  category: 'guide',
  sections: [
    {
      title: 'Classificação Morfológica',
      content: [
        '**Abaulamento (Bulging):**',
        '- Extensão circunferencial (>50% da circunferência) do disco além das margens vertebrais',
        '- Geralmente difuso e simétrico',
        '- Frequentemente achado normal do envelhecimento',
        '- Geralmente assintomático',
        '',
        '**Protrusão:**',
        '- Extensão focal (<50% da circunferência) do disco',
        '- Base mais larga que o ápice (na imagem axial)',
        '- Ânulo fibroso contém parcialmente o núcleo',
        '- Pode comprimir raiz nervosa',
        '',
        '**Extrusão:**',
        '- Material discal se estende além do espaço discal',
        '- Base mais estreita que o ápice (em qualquer plano)',
        '- Material pode migrar cranial ou caudalmente',
        '- Frequentemente mais sintomática',
        '- Potencial de reabsorção espontânea maior',
        '',
        '**Sequestro:**',
        '- Fragmento discal completamente separado do disco de origem',
        '- Fragmento livre no canal vertebral',
        '- Pode migrar cranial ou caudalmente',
        '- Maior potencial de reabsorção espontânea entre todos os tipos'
      ]
    },
    {
      title: 'Localização',
      content: [
        '**Central (Mediana):**',
        '- Linha média posterior',
        '- Pode causar compressão medular (cervical/torácica) ou cauda equina (lombar)',
        '- Pode ser bilateral',
        '',
        '**Paracentral (Posterolateral):**',
        '- Localização mais comum',
        '- Comprime a raiz nervosa transeunte (que está descendo)',
        '- Lombar: comprime raiz do nível ABAIXO (ex: L4-L5 paracentral comprime raiz L5)',
        '',
        '**Foraminal (Lateral):**',
        '- No forame de conjugação',
        '- Comprime a raiz nervosa do MESMO nível (exiting root)',
        '- Lombar: L4-L5 foraminal comprime raiz L4',
        '- Pode ser facilmente perdida na RM se cortes grossos',
        '',
        '**Extraforaminal (Far Lateral):**',
        '- Além do forame de conjugação',
        '- Comprime raiz do MESMO nível',
        '- Menos comum (~10%)',
        '- Pode necessitar abordagem cirúrgica diferente (Wiltse paramediana)'
      ]
    },
    {
      title: 'História Natural',
      content: [
        '**Resolução Espontânea:**',
        '- 80% dos pacientes melhoram com tratamento conservador em 6-8 semanas',
        '- Hérnias extrusas e sequestradas têm MAIOR taxa de reabsorção',
        '- Reabsorção mediada por resposta inflamatória e neovascularização',
        '',
        '**Tratamento Conservador:**',
        '- Analgesia (AINE, neuromoduladores)',
        '- Fisioterapia (McKenzie, estabilização segmentar)',
        '- Atividade física adaptada (evitar repouso prolongado)',
        '- Infiltração epidural de corticosteroide (alívio temporário)',
        '- Educação do paciente sobre benignidade e curso natural'
      ]
    },
    {
      title: 'Indicações Cirúrgicas',
      content: [
        '**Indicações Absolutas/Urgentes:**',
        '- Síndrome da cauda equina (retenção urinária, incontinência, anestesia em sela) - URGÊNCIA CIRÚRGICA',
        '- Déficit motor progressivo (foot drop, perda de força progressiva)',
        '',
        '**Indicações Relativas:**',
        '- Falha do tratamento conservador por 6-8 semanas',
        '- Dor radicular incapacitante e refratária',
        '- Déficit motor estabelecido e estável',
        '',
        '**Técnicas Cirúrgicas:**',
        '- Microdiscectomia (padrão-ouro): abordagem posterior, laminotomia, remoção do fragmento',
        '- Discectomia endoscópica: menor invasão, recuperação mais rápida',
        '- Discectomia cervical anterior e fusão (ACDF): para hérnia cervical',
        '',
        '**Resultados:**',
        '- 85-95% de alívio da ciatalgia com microdiscectomia',
        '- Taxa de recorrência: 5-15%',
        '- Resultados a longo prazo (5 anos): cirúrgico e conservador se equivalem em muitos estudos'
      ]
    }
  ],
  clinicalPearl: 'Hérnias extrusas e sequestradas têm o maior potencial de reabsorção espontânea. 80% dos pacientes melhoram com tratamento conservador em 6-8 semanas. Hérnia paracentral comprime a raiz do nível ABAIXO; foraminal comprime do MESMO nível.',
  pitfall: 'Síndrome da cauda equina (retenção urinária, anestesia em sela) é URGÊNCIA CIRÚRGICA - não postergar. Hérnias foraminais podem ser facilmente perdidas na RM com cortes grossos.',
  references: [
    'Fardon DF, et al. Lumbar disc nomenclature: version 2.0. Spine J. 2014;14(11):2525-2545.',
    'Weinstein JN, et al. Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT). JAMA. 2006;296(20):2441-2450.',
    'Chiu CC, et al. The probability of spontaneous regression of lumbar herniated disc: a systematic review. Clin Rehabil. 2015;29(2):184-195.'
  ]
};
