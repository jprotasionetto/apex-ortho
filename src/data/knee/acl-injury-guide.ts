export const aclInjuryGuide = {
  id: 'acl-injury-guide',
  name: 'Guia de Lesão do LCA (Ligamento Cruzado Anterior)',
  category: 'guide',
  sections: [
    {
      title: 'Diagnóstico',
      content: [
        '**Exame Físico:**',
        '- Teste de Lachman: mais sensível (85-95%), realizado com joelho em 20-30° de flexão',
        '- Gaveta Anterior: joelho em 90° de flexão, menos sensível na fase aguda devido espasmo muscular',
        '- Pivot Shift: mais específico, melhor avaliado sob anestesia; avalia instabilidade rotacional',
        '- Hemartrose aguda: 70% das hemartroses traumáticas do joelho são lesões do LCA',
        '',
        '**Lesões Associadas:**',
        '- Lesão meniscal (50-65% dos casos)',
        '- Lesão condral',
        '- Lesão do ligamento colateral medial (tríade infeliz)',
        '- Bone bruises (contusões ósseas) no côndilo femoral lateral e platô tibial posterior'
      ]
    },
    {
      title: 'Imagem',
      content: [
        '**Radiografia:**',
        '- Fratura de Segond (avulsão da cápsula anterolateral tibial) - patognomônica de lesão do LCA',
        '- Fratura da eminência tibial (equivalente em crianças/adolescentes)',
        '',
        '**Ressonância Magnética (RM):**',
        '- Descontinuidade das fibras do LCA',
        '- Orientação anormal do ligamento',
        '- Bone bruises: padrão kissing lesion (côndilo femoral lateral + platô tibial posterolateral)',
        '- Avaliação de lesões meniscais e condrais associadas',
        '- Sinal da gaveta anterior na RM (translação tibial anterior)'
      ]
    },
    {
      title: 'Tratamento Não Operatório',
      content: [
        '**Indicações:**',
        '- Pacientes idosos com baixa demanda funcional',
        '- Sem episódios de instabilidade',
        '- Dispostos a modificar atividades (evitar pivotamento)',
        '',
        '**Protocolo:**',
        '- Órtese funcional (brace)',
        '- Fisioterapia intensiva: fortalecimento de quadríceps e isquiotibiais',
        '- Propriocepção e equilíbrio',
        '- Modificação de atividades (evitar esportes de contato e pivotamento)',
        '- Monitorização: se episódios de instabilidade recorrentes, reconsiderar cirurgia'
      ]
    },
    {
      title: 'Tratamento Cirúrgico',
      content: [
        '**Indicações:**',
        '- Pacientes jovens e ativos',
        '- Episódios de instabilidade recorrentes',
        '- Lesões associadas que requerem cirurgia (menisco reparável)',
        '- Atletas que desejam retornar ao esporte',
        '',
        '**Enxertos (Autólogo - Preferidos):**',
        '- Tendão patelar (BTB - Bone-Tendon-Bone): padrão-ouro, fixação osso-osso',
        '- Isquiotibiais (semitendinoso ± grácil): menor morbidade do sítio doador',
        '- Tendão quadricipital: crescendo em popularidade',
        '',
        '**Enxerto Alógeno:**',
        '- Indicado em revisões, reconstruções multiligamentares',
        '- Maior taxa de falha em pacientes jovens e ativos',
        '',
        '**Técnica:**',
        '- Reconstrução artroscópica anatômica',
        '- Posicionamento dos túneis: footprint anatômico',
        '- Fixação: parafusos de interferência, botões corticais (suspensory)'
      ]
    },
    {
      title: 'Retorno ao Esporte',
      content: [
        '**Cronograma:**',
        '- Retorno ao esporte: 9-12 meses no mínimo',
        '- Critérios baseados em função, não apenas tempo',
        '',
        '**Critérios para Retorno:**',
        '- Limb Symmetry Index (LSI) >90% para força do quadríceps e isquiotibiais',
        '- Testes funcionais de salto (hop tests) com LSI >90%',
        '- Sem derrame articular',
        '- ADM completa',
        '- Confiança psicológica (ACL-RSI score)',
        '- Completar programa de prevenção de re-lesão',
        '',
        '**Taxa de Re-ruptura:**',
        '- 6-25% em atletas jovens (<20 anos)',
        '- Risco de lesão contralateral similar à re-ruptura'
      ]
    }
  ],
  clinicalPearl: 'O teste de Lachman é o exame clínico mais sensível para lesão do LCA (85-95%). Hemartrose aguda pós-trauma no joelho = lesão do LCA até prova em contrário (70% dos casos).',
  pitfall: 'Não basear decisão cirúrgica apenas no exame de imagem. A indicação depende da instabilidade funcional, nível de atividade e lesões associadas (menisco reparável).',
  references: [
    'Duthon VB, et al. Anatomy of the anterior cruciate ligament. Knee Surg Sports Traumatol Arthrosc. 2006;14(3):204-213.',
    'Filbay SR, Grindem H. Evidence-based recommendations for the management of anterior cruciate ligament (ACL) rupture. Best Pract Res Clin Rheumatol. 2019;33(1):33-47.',
    'Grindem H, et al. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction. Br J Sports Med. 2016;50(13):804-808.'
  ]
};
