export const pclInjuryGuide = {
  id: 'pcl-injury-guide',
  name: 'Guia de Lesão do LCP (Ligamento Cruzado Posterior)',
  category: 'guide',
  sections: [
    {
      title: 'Mecanismo de Lesão',
      content: [
        '**Dashboard Injury (mais comum):**',
        '- Trauma direto na tíbia proximal com joelho fletido (painel do carro)',
        '- Força aplicada posterior à tíbia',
        '',
        '**Outros mecanismos:**',
        '- Queda sobre joelho fletido com pé em flexão plantar',
        '- Hiperflexão forçada',
        '- Hiperextensão (pode associar lesão do LCA)',
        '- Trauma esportivo de contato',
        '',
        '**Lesões Associadas:**',
        '- Canto posterolateral (PLC) - combinação mais comum',
        '- Ligamento colateral medial',
        '- LCA (luxação do joelho)',
        '- Lesões meniscais e condrais'
      ]
    },
    {
      title: 'Classificação (Graus)',
      content: [
        '**Grau I (Leve):**',
        '- Translação posterior de 1-5mm',
        '- Platô tibial anterior ao côndilo femoral',
        '- Gaveta posterior parcialmente positiva',
        '',
        '**Grau II (Moderado):**',
        '- Translação posterior de 5-10mm',
        '- Platô tibial no nível do côndilo femoral',
        '- Gaveta posterior positiva',
        '',
        '**Grau III (Severo):**',
        '- Translação posterior >10mm',
        '- Platô tibial posterior ao côndilo femoral',
        '- Forte suspeita de lesão combinada (PLC, LCA)',
        '',
        '**Testes Clínicos:**',
        '- Gaveta posterior: joelho em 90° de flexão',
        '- Sag sign (sinal do degrau): observar perfil com joelho em 90°',
        '- Dial test: rotação externa aumentada sugere lesão do PLC associada',
        '- Reverse pivot shift'
      ]
    },
    {
      title: 'Tratamento Não Operatório',
      content: [
        '**Indicações:**',
        '- Lesão isolada do LCP Grau I e II',
        '- Sem lesões ligamentares associadas',
        '- Sem instabilidade funcional significativa',
        '',
        '**Protocolo:**',
        '- Ênfase em fortalecimento do quadríceps (antagonista da translação posterior)',
        '- Exercícios em cadeia cinética fechada',
        '- Evitar exercícios de isquiotibiais isolados inicialmente (aumentam translação posterior)',
        '- Brace com suporte posterior tibial',
        '- Retorno gradual às atividades em 3-6 meses'
      ]
    },
    {
      title: 'Tratamento Cirúrgico',
      content: [
        '**Indicações:**',
        '- Lesão combinada do LCP + outros ligamentos',
        '- Lesão isolada Grau III com instabilidade funcional',
        '- Instabilidade crônica sintomática',
        '- Avulsão óssea da inserção tibial (fixação direta)',
        '',
        '**Técnicas:**',
        '- Reconstrução com enxerto (autólogo ou alógeno)',
        '- Técnica transtibial ou inlay (tibial inlay tem vantagem biomecânica)',
        '- Single bundle vs double bundle',
        '- Avulsão óssea: fixação com parafuso ou sutura transóssea',
        '',
        '**Lesões Combinadas:**',
        '- LCP + PLC: reconstrução de ambos (estadiada ou simultânea)',
        '- LCP + LCA: reconstrução bicruzada',
        '- Priorizar reparação/reconstrução do PLC (não cicatriza bem sem tratamento)'
      ]
    }
  ],
  clinicalPearl: 'O sag sign (degrau posterior da tíbia com joelho em 90°) é patognomônico de lesão do LCP. Lesão isolada grau I-II geralmente responde bem ao fortalecimento intensivo do quadríceps.',
  pitfall: 'Lesão do LCP grau III quase sempre é combinada (PLC, LCA). Não tratar como lesão isolada sem avaliar cuidadosamente o canto posterolateral (dial test a 30° e 90°).',
  references: [
    'Pache S, et al. Posterior cruciate ligament: current concepts review. Arch Bone Jt Surg. 2018;6(1):8-18.',
    'Fanelli GC, Edson CJ. Posterior cruciate ligament injuries in trauma patients: Part II. Arthroscopy. 1995;11(5):526-529.',
    'LaPrade RF, et al. Current concepts in posterior cruciate ligament reconstruction. J Am Acad Orthop Surg. 2015;23(2):67-80.'
  ]
};
