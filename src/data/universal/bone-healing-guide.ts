import type { GuideData } from '@/types/guide';

export const boneHealingGuide: GuideData = {
  id: 'bone-healing-guide',
  name: 'Guia de Consolidação Óssea',
  description: 'Fases da consolidação óssea, fatores que influenciam e manejo de complicações',
  sections: [
    {
      id: 'phases',
      title: 'Fases da Consolidação Óssea',
      content: [
        'Fase Inflamatória (0-2 semanas): hematoma fraturário, recrutamento de células inflamatórias, angiogênese inicial, formação de tecido de granulação',
        'Fase Reparativa (2-6 semanas): formação do calo mole (cartilaginoso); ossificação endocondral; formação do calo duro (ossificação); ponte de calo entre fragmentos',
        'Fase de Remodelação (6 semanas a anos): remodelação do calo por osteoclastos/osteoblastos; restauração da arquitetura cortical; resposta à lei de Wolff (carga mecânica direciona remodelação)',
        'Osso esponjoso consolida mais rápido que cortical',
        'Membro superior: 6-8 semanas; membro inferior: 12-16 semanas (tempo médio)'
      ],
      keyPoints: [
        'Inflamatória → Reparativa → Remodelação',
        'NSAIDs podem inibir a fase inflamatória',
        'Carga mecânica controlada estimula consolidação'
      ],
      colorCode: 'info'
    },
    {
      id: 'primary-vs-secondary',
      title: 'Consolidação Primária vs Secundária',
      content: [
        'Consolidação Primária (direta/osteonal): ocorre com fixação rígida e compressão interfragmentária; sem formação de calo visível; remodelação direta por cones de corte (cutting cones); processo lento',
        'Consolidação Secundária (indireta/endocondral): ocorre com relativa mobilidade no foco de fratura; formação de calo periosteal e endosteal; processo natural mais comum; mais rápida que primária',
        'Placa com compressão absoluta: consolidação primária',
        'Haste intramedular / fixador externo: consolidação secundária',
        'Placa em ponte: consolidação secundária'
      ],
      keyPoints: [
        'Primária: fixação rígida, sem calo, mais lenta',
        'Secundária: micromovimento permitido, calo visível, mais rápida',
        'A maioria das fixações modernas visa consolidação secundária'
      ],
      colorCode: 'safe'
    },
    {
      id: 'factors-affecting',
      title: 'Fatores que Afetam a Consolidação',
      content: [
        'Tabagismo: reduz fluxo sanguíneo ósseo e função osteoblástica; aumenta risco de pseudartrose em 2-4x',
        'AINEs (anti-inflamatórios não esteroidais): inibem a fase inflamatória; uso prolongado pode retardar consolidação',
        'Diabetes mellitus: microangiopatia e disfunção celular; controle glicêmico melhora desfechos',
        'Infecção: osteomielite impede consolidação; tratamento agressivo necessário',
        'Fixação inadequada: instabilidade excessiva leva a pseudartrose hipertrófica; rigidez excessiva leva a atrófica',
        'Déficit vascular: aporte sanguíneo comprometido (fixações circunferenciais, desperiostização excessiva)',
        'Deficiência nutricional: proteínas, cálcio, vitamina D, vitamina C',
        'Idade: crianças consolidam muito mais rápido; idosos mais lentamente',
        'Localização: metáfise > diáfise; membro superior > membro inferior'
      ],
      keyPoints: [
        'Tabagismo: principal fator de risco modificável',
        'NSAIDs: evitar uso prolongado em fraturas',
        'Fixação: estabilidade adequada (não excessiva nem insuficiente)'
      ],
      colorCode: 'caution'
    },
    {
      id: 'delayed-nonunion',
      title: 'Retardo de Consolidação e Pseudartrose',
      content: [
        'Retardo de consolidação: sem progressão radiográfica esperada aos 3 meses',
        'Pseudartrose: ausência de consolidação aos 6 meses sem expectativa de cura espontânea',
        'Pseudartrose hipertrófica (pata de elefante): biologia adequada, instabilidade mecânica; tratamento: melhorar estabilidade (revisão de fixação)',
        'Pseudartrose atrófica: biologia inadequada, sem calo; tratamento: melhorar biologia (enxerto ósseo) + fixação estável',
        'Pseudartrose oligotrófica: intermediária; estabilização + estímulo biológico',
        'Opções de tratamento: dinamização de haste, troca de haste, placa com compressão, enxerto ósseo autólogo (ilíaco), BMP-2, células-tronco',
        'Investigar: infecção oculta (PCR, VHS, cintilografia), endocrinopatia, deficiência nutricional'
      ],
      keyPoints: [
        'Retardo: sem progresso aos 3 meses',
        'Pseudartrose: sem cura aos 6 meses',
        'Hipertrófica = falta estabilidade; Atrófica = falta biologia',
        'Sempre excluir infecção'
      ],
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'A regra de Perren (strain theory): tecido ósseo tolera < 2% de strain; se strain > 2-10% forma fibrocartilagem; se > 10% forma tecido fibroso. Isso explica por que a fixação adequada é fundamental',
  pitfall: 'Ausência de calo radiográfico após fixação com placa de compressão NÃO significa pseudartrose - a consolidação primária ocorre sem calo visível',
  references: [
    'Einhorn TA, Gerstenfeld LC. Fracture healing: mechanisms and interventions. Nat Rev Rheumatol. 2015;11(1):45-54.',
    'Marsell R, Einhorn TA. The biology of fracture healing. Injury. 2011;42(6):551-555.',
    'Giannoudis PV, et al. Fracture healing: the diamond concept. Injury. 2007;38(Suppl 4):S3-S6.'
  ]
};
