import type { GuideData } from '@/types/guide';

export const tendinopathyGuide: GuideData = {
  id: 'tendinopathy-guide',
  name: 'Guia de Tendinopatias no Esporte',
  description: 'Fisiopatologia, diagnóstico e tratamento baseado em evidência das tendinopatias em atletas',
  sections: [
    {
      id: 'pathophysiology',
      title: 'Fisiopatologia - Modelo Contínuo',
      content: [
        'Fase 1 - Tendinopatia Reativa: resposta adaptativa a sobrecarga aguda; aumento de proteoglicanos e água; edema intratendíneo',
        'Fase 2 - Desreparo Tendíneo (Dysrepair): falha na cicatrização; desorganização do colágeno; aumento de vascularização e inervação',
        'Fase 3 - Tendinopatia Degenerativa: alteração estrutural irreversível; áreas de apoptose celular; perda de colágeno tipo I',
        'Progressão NÃO é inevitável: intervenção precoce pode reverter fases iniciais',
        'O modelo contínuo guia o tratamento: carga é o principal estímulo terapêutico'
      ],
      keyPoints: [
        'Reativa → Dysrepair → Degenerativa',
        'Fases iniciais são potencialmente reversíveis',
        'Carga mecânica é o estímulo fundamental para remodelação'
      ],
      colorCode: 'info'
    },
    {
      id: 'common-sites',
      title: 'Localizações Mais Comuns',
      content: [
        'Tendão de Aquiles: porção média (2-6cm da inserção) e inserção',
        'Tendão patelar: polo inferior da patela (jumper\'s knee)',
        'Manguito rotador: supraespinal na zona crítica de Codman',
        'Epicôndilo lateral: origem do ECRB (cotovelo de tenista)',
        'Tendões fibulares: tenossinovite e tendinopatia no maléolo lateral',
        'Tendão tibial posterior: tendinopatia e insuficiência em corredores'
      ],
      keyPoints: [
        'Aquiles e patelar: mais comuns em atletas de salto/corrida',
        'Manguito rotador: atletas de arremesso (overhead)',
        'Epicondilite lateral: racket sports e trabalho manual'
      ],
      colorCode: 'info'
    },
    {
      id: 'treatment',
      title: 'Tratamento Baseado em Carga',
      content: [
        'Exercícios isométricos: controle da dor imediato; contrações sustentadas por 30-45s, 4-5 repetições',
        'Exercícios excêntricos: protocolo de Alfredson (Aquiles) ou decline squat (patelar); 3x15 2x/dia por 12 semanas',
        'Heavy Slow Resistance (HSR): carga progressiva pesada; 3-4 séries de 6-8 repetições; 3x/semana',
        'Isométricos + excêntricos + HSR: abordagem combinada progressiva',
        'Evitar repouso absoluto: desuso piora a degeneração',
        'Gestão de carga: reduzir volume de treino, não eliminar atividade',
        'Anti-inflamatórios: evitar AINE cronicamente (inibe cicatrização); uso pontual para dor aguda',
        'Crioterapia: alívio sintomático na fase reativa'
      ],
      keyPoints: [
        'Isométricos para dor aguda (efeito analgésico)',
        'Excêntricos: padrão ouro com forte evidência',
        'HSR: alternativa com resultados comparáveis',
        'Evitar repouso prolongado'
      ],
      colorCode: 'safe'
    },
    {
      id: 'biologics',
      title: 'Terapias Biológicas',
      content: [
        'PRP (Plasma Rico em Plaquetas): evidência mista; melhores resultados em epicondilite lateral',
        'PRP em Aquiles: evidência insuficiente para recomendação rotineira',
        'PRP em patelar: resultados promissores mas heterogêneos',
        'Injeção de corticosteroide: alívio a curto prazo mas PIORA a longo prazo; evitar em tendões de carga',
        'Células-tronco: experimental; sem evidência suficiente para uso clínico rotineiro',
        'Proloterapia: evidência limitada'
      ],
      keyPoints: [
        'PRP: evidência mista - melhor em epicondilite lateral',
        'Corticosteroide: CONTRAINDICADO em tendões de carga',
        'Nenhum biológico substitui programa de carga'
      ],
      colorCode: 'caution'
    },
    {
      id: 'return-to-sport',
      title: 'Retorno ao Esporte',
      content: [
        'Progressão gradual de carga: isométricos → excêntricos → HSR → pliometria → esporte-específico',
        'Critérios de progressão: dor ≤ 3/10 VAS durante e até 24h após exercício',
        'Monitoring: regra do "dia seguinte" - se dor aumentou no dia seguinte, carga foi excessiva',
        'Retorno a treinos: quando tolerar carga esporte-específica sem exacerbação',
        'Retorno a competição: sem dor durante atividade máxima por mínimo 2 semanas',
        'Programa de manutenção: exercícios de carga contínuos mesmo após retorno (prevenção de recidiva)'
      ],
      keyPoints: [
        'Progressão baseada em sintomas, não em tempo',
        'Regra do dia seguinte para monitorar carga',
        'Manutenção do programa de carga após retorno'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'A dor matinal ao levantar e a dor no início da atividade (warm-up pain) que melhora durante o exercício são padrões clássicos de tendinopatia crônica',
  pitfall: 'Injeção de corticosteroide em tendão de Aquiles ou patelar pode causar ruptura; usar apenas em bursites peritendinosas se necessário',
  references: [
    'Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-416.',
    'Alfredson H, et al. Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. Am J Sports Med. 1998;26(3):360-366.',
    'Kongsgaard M, et al. Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy. Scand J Med Sci Sports. 2009;19(6):790-802.'
  ]
};
