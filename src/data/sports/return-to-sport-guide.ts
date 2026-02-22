import type { GuideData } from '@/types/guide';

export const returnToSportGuide: GuideData = {
  id: 'return-to-sport-guide',
  name: 'Guia de Retorno ao Esporte',
  description: 'Critérios baseados em evidência para retorno seguro ao esporte após lesão musculoesquelética',
  sections: [
    {
      id: 'criteria-based-approach',
      title: 'Abordagem Baseada em Critérios',
      content: [
        'Retorno ao esporte deve ser baseado em critérios objetivos, NÃO em tempo decorrido',
        'Tempo mínimo é necessário para cicatrização biológica, mas não é suficiente isoladamente',
        'Decisão deve ser compartilhada entre médico, fisioterapeuta, atleta e treinador',
        'Avaliação contínua e progressiva ao longo da reabilitação'
      ],
      keyPoints: [
        'Critérios objetivos > tempo pós-operatório isolado',
        'Individualizar para cada atleta e tipo de lesão',
        'Considerar fatores biológicos, funcionais e psicológicos'
      ],
      colorCode: 'info'
    },
    {
      id: 'physical-tests',
      title: 'Testes Físicos Objetivos',
      content: [
        'Single Leg Hop for Distance: LSI (Limb Symmetry Index) > 90%',
        'Triple Hop for Distance: LSI > 90%',
        'Crossover Hop for Distance: LSI > 90%',
        'Y-Balance Test: assimetria < 4cm entre membros',
        'Força isocinética (quadríceps e isquiotibiais): LSI > 90%',
        'Razão isquiotibiais/quadríceps (H/Q) > 60-70%',
        'Testes de salto e aterrissagem com análise qualitativa do movimento'
      ],
      keyPoints: [
        'LSI > 90% em todos os testes de hop',
        'Força isocinética LSI > 90%',
        'Y-Balance com assimetria < 4cm'
      ],
      colorCode: 'safe'
    },
    {
      id: 'psychological-readiness',
      title: 'Prontidão Psicológica',
      content: [
        'ACL-RSI (ACL Return to Sport after Injury) score: avaliação padronizada',
        'Score > 56 pontos associado a maior probabilidade de retorno ao esporte',
        'Avaliar medo de re-lesão (cinesiofobia)',
        'Escala Tampa de Cinesiofobia pode ser utilizada',
        'Confiança no membro operado durante atividades esportivas',
        'Motivação e expectativas realistas'
      ],
      keyPoints: [
        'ACL-RSI > 56 pontos como referência',
        'Medo de re-lesão é barreira principal',
        'Suporte psicológico quando necessário'
      ],
      colorCode: 'caution'
    },
    {
      id: 'sport-specific-testing',
      title: 'Testes Esporte-Específicos',
      content: [
        'Agilidade: T-test, Illinois agility test',
        'Mudança de direção (cutting): capacidade de corte a 45° e 90°',
        'Simulação esportiva: drills específicos do esporte praticado',
        'Análise biomecânica do movimento: valgo dinâmico, padrão de aterrissagem',
        'Teste de fadiga: manutenção da qualidade de movimento após esforço'
      ],
      keyPoints: [
        'Testes devem simular demandas reais do esporte',
        'Avaliar qualidade do movimento, não apenas resultado quantitativo',
        'Testar sob condições de fadiga'
      ],
      colorCode: 'safe'
    },
    {
      id: 'progressive-return',
      title: 'Retorno Progressivo',
      content: [
        'Fase 1: Treino individual sem contato - drills técnicos',
        'Fase 2: Treino coletivo com contato limitado/controlado',
        'Fase 3: Participação parcial em jogo (minutos limitados)',
        'Fase 4: Jogo completo sem restrições',
        'Cada fase: mínimo 1-2 semanas sem sintomas ou perda de desempenho',
        'Regressão para fase anterior se sintomas surgirem'
      ],
      keyPoints: [
        'Progressão gradual: treino individual → coletivo → jogo parcial → jogo completo',
        'Mínimo 1-2 semanas em cada fase',
        'Regredir se houver sintomas'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'Retorno precoce baseado apenas em tempo é o principal fator de risco para re-lesão; critérios objetivos são essenciais',
  pitfall: 'LSI pode ser enganoso se o membro contralateral também descondicionou durante reabilitação - usar valores normativos quando disponíveis',
  references: [
    'Grindem H, et al. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction. Br J Sports Med. 2016;50(13):804-808.',
    'Ardern CL, et al. 2016 Consensus statement on return to sport from the First World Congress in Sports Physical Therapy, Bern. Br J Sports Med. 2016;50(14):853-864.',
    'Webster KE, Hewett TE. What is the Evidence for and Validity of Return-to-Sport Testing after Anterior Cruciate Ligament Reconstruction Surgery? A Systematic Review and Meta-Analysis. Sports Med. 2019;49(6):917-929.'
  ]
};
