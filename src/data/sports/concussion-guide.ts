import type { GuideData } from '@/types/guide';

export const concussionGuide: GuideData = {
  id: 'concussion-guide',
  name: 'Guia de Concussão no Esporte',
  description: 'Protocolo de avaliação, manejo e retorno ao jogo após concussão esportiva',
  sections: [
    {
      id: 'sideline-assessment',
      title: 'Avaliação à Beira do Campo',
      content: [
        'SCAT6 (Sport Concussion Assessment Tool 6): ferramenta padronizada de avaliação',
        'Perguntas de Maddocks (orientação no jogo): local, tempo do jogo, último gol, time anterior, resultado',
        'Avaliação neurológica rápida: pupilas, equilíbrio, coordenação, marcha',
        'Escala de Sintomas de Concussão: cefaleia, tontura, confusão, amnésia, náusea',
        'Teste de equilíbrio: modified BESS (Balance Error Scoring System)',
        'Teste cognitivo rápido: dígitos reversos, meses ao contrário',
        'Qualquer suspeita = retirar do jogo IMEDIATAMENTE'
      ],
      keyPoints: [
        'SCAT6 é o padrão ouro à beira do campo',
        'Se em dúvida, retire o atleta do jogo',
        'Nunca retornar ao jogo no mesmo dia'
      ],
      colorCode: 'caution'
    },
    {
      id: 'red-flags',
      title: 'Sinais de Alerta (Red Flags)',
      content: [
        'Perda de consciência (qualquer duração)',
        'Convulsão ou atividade tônico-clônica',
        'Déficit neurológico focal (fraqueza, alteração sensorial)',
        'Piora progressiva dos sintomas',
        'Cefaleia intensa e crescente',
        'Vômitos repetidos',
        'Comportamento cada vez mais confuso ou agitado',
        'Sinais de fratura de base de crânio (olhos de guaxinim, Battle sign, otorreia/rinorreia)',
        'Qualquer red flag = encaminhamento URGENTE para emergência e TC de crânio'
      ],
      keyPoints: [
        'LOC, convulsão, déficit focal = emergência',
        'Piora progressiva = TC de crânio',
        'Glasgow < 15 persistente = avaliação neurocirúrgica'
      ],
      colorCode: 'danger'
    },
    {
      id: 'return-to-play',
      title: 'Protocolo de Retorno ao Jogo (6 Estágios)',
      content: [
        'Estágio 1: Atividade limitada por sintomas - repouso relativo, atividades diárias que não agravam sintomas',
        'Estágio 2: Exercício aeróbico leve - caminhada, bicicleta estacionária (< 70% FCmax)',
        'Estágio 3: Exercício esporte-específico - drills de corrida, movimentos específicos (sem contato)',
        'Estágio 4: Treino sem contato - exercícios de complexidade progressiva, pode iniciar treino de resistência',
        'Estágio 5: Treino com contato total - participação normal nos treinos após liberação médica',
        'Estágio 6: Retorno à competição - jogo/competição sem restrições',
        'Cada estágio: MÍNIMO 24 horas sem sintomas antes de progredir',
        'Se sintomas retornam em qualquer estágio: regredir para estágio anterior por 24h',
        'Crianças e adolescentes: protocolo mais conservador (48h entre estágios)'
      ],
      keyPoints: [
        'Mínimo 24h em cada estágio sem sintomas',
        'Mínimo 6 dias para completar o protocolo',
        'Regredir se sintomas surgirem',
        'Liberação médica obrigatória antes do estágio 5'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'O repouso absoluto prolongado (> 24-48h) é prejudicial; repouso relativo com atividade leve tolerada é o padrão atual de manejo',
  pitfall: 'Atleta assintomático em repouso pode se tornar sintomático com exercício - o protocolo graduado identifica isso antes do retorno ao jogo',
  references: [
    'Patricios J, et al. Consensus statement on concussion in sport: the 6th International Conference on Concussion in Sport, Amsterdam, 2022. Br J Sports Med. 2023;57(11):695-711.',
    'McCrory P, et al. Consensus statement on concussion in sport: the 5th international conference. Br J Sports Med. 2017;51(11):838-847.',
    'Echemendia RJ, et al. The Sport Concussion Assessment Tool 6 (SCAT6). Br J Sports Med. 2023;57(11):622-631.'
  ]
};
