import type { ClassificationData } from '@/types/tool';

export const gustiloAndersonData: ClassificationData = {
  id: 'gustilo-anderson',
  name: 'Classificação de Gustilo-Anderson',
  author: 'Gustilo & Anderson',
  year: 1976,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I',
      description: 'Fratura exposta de baixa energia com ferida < 1 cm',
      criteria: [
        'Ferida < 1 cm',
        'Ferida limpa, geralmente de dentro para fora (inside-out)',
        'Fratura geralmente simples (transversa ou oblíqua curta)',
        'Mínima lesão de tecidos moles',
        'Sem esmagamento muscular'
      ],
      treatment: 'Cefalosporina de 1ª geração por 24h. Desbridamento e lavagem. Fixação da fratura. Pode considerar fechamento primário em feridas limpas.',
      prognosis: 'Bom prognóstico. Taxa de infecção 0–2%.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II',
      description: 'Ferida de 1 a 10 cm com contaminação moderada',
      criteria: [
        'Ferida entre 1 e 10 cm',
        'Contaminação moderada',
        'Lesão moderada de tecidos moles sem retalho ou avulsão extensa',
        'Cominuição moderada da fratura',
        'Energia moderada do trauma'
      ],
      treatment: 'Cefalosporina de 1ª geração + aminoglicosídeo por 24–72h. Desbridamento cirúrgico, lavagem copiosa (≥ 6L). Fixação da fratura. Fechamento primário tardio ou por segunda intenção.',
      prognosis: 'Prognóstico intermediário. Taxa de infecção 2–7%.',
      colorCode: 'caution'
    },
    {
      id: 'type-iiia',
      label: 'Tipo IIIA',
      description: 'Alta energia com cobertura adequada de tecidos moles sobre o osso',
      criteria: [
        'Ferida > 10 cm',
        'Alta energia (atropelamento, queda de altura, PAF)',
        'Contaminação importante',
        'Cominuição severa da fratura',
        'Cobertura adequada de tecidos moles sobre o osso APÓS desbridamento',
        'Inclui fraturas segmentares expostas e FAF (ferimento por arma de fogo)',
        'ATENÇÃO: ferida pequena (< 1 cm) em trauma de alta energia = mínimo IIIA, NÃO Tipo I'
      ],
      treatment: 'Cefalosporina + aminoglicosídeo ± penicilina (se contaminação de solo/fazenda). Desbridamentos seriados a cada 48–72h. Fixação externa temporária frequente. Fechamento tardio.',
      prognosis: 'Prognóstico reservado. Taxa de infecção 7–10%.',
      colorCode: 'danger'
    },
    {
      id: 'type-iiib',
      label: 'Tipo IIIB',
      description: 'Necessita cobertura com retalho para osso exposto',
      criteria: [
        'Perda extensa de tecidos moles com exposição óssea',
        'Desnudamento periosteal (bone stripping)',
        'Exposição óssea que REQUER retalho (local rotacional ou microcirúrgico livre)',
        'Contaminação maciça',
        'Alta energia — geralmente com cominuição severa'
      ],
      treatment: 'Desbridamentos seriados. Fixação externa temporária. Cobertura com retalho idealmente em até 72h (fasciocutâneo, muscular local ou retalho livre microcirúrgico). Antibioticoterapia prolongada.',
      prognosis: 'Prognóstico reservado. Taxa de infecção 10–50%. Risco elevado de pseudoartrose e osteomielite.',
      colorCode: 'danger'
    },
    {
      id: 'type-iiic',
      label: 'Tipo IIIC',
      description: 'Lesão vascular que necessita reparo para viabilidade do membro',
      criteria: [
        'Lesão arterial major que necessita reparo para viabilidade do membro',
        'Isquemia distal do membro',
        'Qualquer grau de lesão de tecidos moles associada',
        'Inclui qualquer fratura exposta com lesão vascular reparável',
        'Tempo de isquemia quente é crítico (< 6h ideal)'
      ],
      treatment: 'Reparo vascular urgente (shunt temporário se necessário). Fasciotomias profiláticas dos 4 compartimentos. Fixação externa. Desbridamento seriado. Avaliar MESS score — ≥ 7 sugere amputação primária.',
      prognosis: 'Prognóstico grave. Taxa de amputação significativa. Taxa de infecção 25–50%. Mortalidade associada elevada.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'A classificação DEFINITIVA é feita no INTRAOPERATÓRIO após desbridamento — a avaliação inicial na emergência frequentemente subestima a gravidade. A OTA-OFC (2010) é um complemento mais objetivo que avalia 5 parâmetros independentes: pele (1-3), músculo (1-3), artéria (1-3), contaminação (1-3) e perda óssea (1-3).',
  pitfall: 'Tipo IIIA vs IIIB muda após desbridamento — reavaliar após limpeza cirúrgica completa. Reprodutibilidade interobservador moderada. Ferida pequena com alta energia (ex: ferida puntiforme em fratura por alta energia) = mínimo IIIA.',
  references: [
    {
      authors: 'Gustilo RB, Anderson JT',
      title: 'Prevention of infection in the treatment of one thousand and twenty-five open fractures of long bones: retrospective and prospective analyses',
      journal: 'J Bone Joint Surg Am',
      year: 1976
    },
    {
      authors: 'Gustilo RB, Mendoza RM, Williams DN',
      title: 'Problems in the management of type III (severe) open fractures: a new classification of type III open fractures',
      journal: 'J Trauma',
      year: 1984
    },
    {
      authors: 'OTA Open Fracture Study Group (Evans AR, Agel J, et al.)',
      title: 'A new classification scheme for open fractures (OTA-OFC)',
      journal: 'J Orthop Trauma',
      year: 2010
    }
  ]
};
