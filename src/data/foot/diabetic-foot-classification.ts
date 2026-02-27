import type { ClassificationData } from '@/types/classification.ts';

export const diabeticFootClassification: ClassificationData = {
  id: 'diabetic-foot-classification',
  name: 'Classificacao de Wagner (Ulceras do Pe Diabetico)',
  author: 'Wagner',
  year: 1981,
  epidemiology: 'Pé diabético é a maior causa de amputação não-traumática do membro inferior no mundo. Prevalência do DM no Brasil: ~15% da população adulta (>30M pessoas). Risco de úlcera do pé em diabético: 15–25% ao longo da vida. Incidência de amputação em diabéticos: 25–90× maior que na população geral. A cada 30 segundos é realizada uma amputação de membro inferior relacionada ao diabetes no mundo. Distribuição de Wagner: Grau 0 (pé em risco) 30–40%, Grau 1–2 (úlcera sem osteomielite) 45–50%, Grau 3 (osteomielite/abscesso) 10–15%, Grau 4–5 (gangrena) 5–10%. Neuropatia diabética presente em >60% dos pacientes com úlcera. Doença arterial periférica (DAP) em 30–40% — pior prognóstico cicatricial. Taxa de amputação: Grau 1: <5% com descarga; Grau 3: 30–40%; Grau 5: necessita amputação maior. Mortalidade em 5 anos após amputação maior: 50–70% (mortalidade cardiovascular). Probe-to-bone test positivo (sonda atinge osso): sensibilidade 66%, especificidade 85% para osteomielite — mais preciso que RX simples inicial.',
  mechanism: 'Triada patogênica do pé diabético: (1) NEUROPATIA SENSORIAL-MOTORA-AUTONÔMICA: sensitiva → anestesia protetora perdida → traumas repetitivos não percebidos → úlcera; motora → atrofia muscular intrínseca → dedos em garra + dedos em martelo → calosidades em proeminências → pressão focal; autonômica → anidrose + vasodilatação → pele seca + fissuras + veias dorsais ingurgitadas (sinal de microangiopatia com shunting AV). (2) DOENÇA ARTERIAL PERIFÉRICA (DAP): oclusão de artérias tibiais e peroneal (padrão infrapoplíteo) → isquemia de pequenos vasos → cicatrização comprometida → úlcera isquêmica (dorso/calcâneo). (3) INFECÇÃO: úlcera = porta de entrada → progressão para celulite → fasciíte necrotizante → osteomielite → abscesso plantar (espaços compartimentais do pé). ITB (índice tornozelo-braço) <0,9 = DAP; >1,3 = calcificação arterial (falso-negativo — pede arteriografia). TcPO2 <30 mmHg = comprometimento cicatricial grave → amputação sem revascularização prévia = falha inevitável. Artropatia de Charcot (pé de Charcot) = neurosartropatia progressiva por hipervascularização + RANKL elevado → colapso ósseo em arco (mediopé).',
  grades: [
    {
      id: 'grade-0',
      label: 'Grau 0',
      description: 'Pele intacta, deformidade ossea com risco de ulceracao',
      criteria: [
        'Pele intacta sem ulceracao',
        'Presenca de deformidades osseas (hallux valgus, dedos em garra)',
        'Calosidades em areas de pressao',
        'Neuropatia periferica presente',
        'Pe em risco'
      ],
      treatment: 'Prevencao: calcados adequados, palmilhas de redistribuicao de pressao, cuidados podiatricos regulares, controle glicemico',
      prognosis: 'Bom prognostico com medidas preventivas adequadas',
      colorCode: 'safe'
    },
    {
      id: 'grade-1',
      label: 'Grau 1',
      description: 'Ulcera superficial',
      criteria: [
        'Ulcera superficial limitada a pele',
        'Sem envolvimento de tecidos profundos',
        'Frequentemente em areas de pressao plantar',
        'Base da ulcera com tecido de granulacao ou fibrina'
      ],
      treatment: 'Desbridamento local, descarga de pressao (gesso de contato total ou bota removivel), curativos adequados, controle glicemico',
      prognosis: 'Boa cicatrizacao com descarga adequada e controle metabolico',
      colorCode: 'caution'
    },
    {
      id: 'grade-2',
      label: 'Grau 2',
      description: 'Ulcera profunda ate tendao ou capsula articular',
      criteria: [
        'Ulcera profunda penetrando alem da pele',
        'Exposicao de tendao, ligamento ou capsula articular',
        'Sem abscesso ou osteomielite',
        'Possivel infeccao local superficial'
      ],
      treatment: 'Desbridamento cirurgico, antibioticoterapia se infectada, descarga de pressao, avaliacao vascular (ITB, oximetria transcutanea)',
      prognosis: 'Prognostico moderado; depende do estado vascular e controle infeccioso',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau 3',
      description: 'Ulcera profunda com abscesso ou osteomielite',
      criteria: [
        'Ulcera profunda com infeccao grave',
        'Abscesso plantar ou dorsal',
        'Osteomielite subjacente',
        'Possivel artrite septica',
        'Sinais sistemicos de infeccao podem estar presentes'
      ],
      treatment: 'Internacao hospitalar, antibioticoterapia endovenosa, desbridamento cirurgico agressivo, drenagem de abscesso, resseccao de osso infectado',
      prognosis: 'Prognostico reservado; risco de amputacao se nao tratado adequadamente',
      colorCode: 'danger'
    },
    {
      id: 'grade-4',
      label: 'Grau 4',
      description: 'Gangrena localizada (antepé ou calcanhar)',
      criteria: [
        'Gangrena de dedos, antepé ou calcanhar',
        'Necrose tecidual localizada',
        'Doenca vascular periferica significativa',
        'Parte do pe ainda viavel'
      ],
      treatment: 'Avaliacao vascular urgente (angiotomografia ou arteriografia), revascularizacao se possivel, amputacao parcial (transmetatarsica ou Chopart) apos demarcacao',
      prognosis: 'Prognostico reservado; salvamento do membro depende de revascularizacao; risco de progressao',
      colorCode: 'danger'
    },
    {
      id: 'grade-5',
      label: 'Grau 5',
      description: 'Gangrena extensa de todo o pe',
      criteria: [
        'Gangrena extensa envolvendo todo o pe',
        'Necrose irreversivel',
        'Possivel sepse',
        'Isquemia critica do membro'
      ],
      treatment: 'Amputacao maior (infracondiliana ou supracondiliana); estabilizacao clinica e controle de sepse previamente; avaliacao multidisciplinar',
      prognosis: 'Prognostico grave; amputacao necessaria para salvamento da vida; alto risco de amputacao contralateral em 5 anos',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Avaliacao vascular (ITB, oximetria transcutanea) e fundamental em todos os graus. ITB <0.9 sugere DAP; TcPO2 <30mmHg indica comprometimento cicatricial.',
  pitfall: 'Neuropatia pode mascarar infeccao profunda. Pacientes diabeticos podem ter abscesso profundo ou osteomielite sem dor significativa. Sempre sondar a ulcera (probe-to-bone test positivo sugere osteomielite).',
  references: [
    'Wagner FW Jr. The dysvascular foot: a system for diagnosis and treatment. Foot Ankle. 1981;2(2):64-122.',
    'Lavery LA, Armstrong DG, Harkless LB. Classification of diabetic foot wounds. J Foot Ankle Surg. 1996;35(6):528-531.'
  ]
};
