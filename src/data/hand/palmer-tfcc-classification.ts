import type { ClassificationData } from '@/types/classification';

export const palmerTfccClassificationData: ClassificationData = {
  id: 'palmer-tfcc-classification',
  name: 'Classificação de Palmer — Lesões do CFCT (Complexo Fibrocartilaginoso Triangular)',
  author: 'Palmer',
  year: 1989,
  epidemiology:
    'Lesões do CFCT (Complexo Fibrocartilaginoso Triangular) são a causa mais frequente de dor ulnar do punho, afetando ~10–15% de todos os pacientes com dor no punho. Incidência exata desconhecida pela subdiagnóstico — CFCT é lesado em ~78% das fraturas do rádio distal. Classe 1 (traumática) afeta principalmente adultos jovens/atletas (tênis, ginástica, golfe); Classe 2 (degenerativa) aumenta progressivamente com a idade — prevalência artroscópica da Classe 2A (afinamento) é de >50% após os 50 anos. Variante ulnar positiva (ulna mais comprida que rádio) predispõe à impactação ulnocarpal (Classe 2). A síndrome de impactação ulnocarpal é a progressão natural da Classe 2 não tratada: 2A → 2B → 2C → 2D → 2E, cada estágio adicionando um elemento anatômico destruído.',
  mechanism:
    'Mecanismo Classe 1 (traumática): (1A) Perfuração central — hiperpronação + carga axial ou queda; (1B) Avulsão ulnar — força de distração com desvio radial + pronação; (1C) Avulsão do assoalho (extensores carpoulnar/pisiforme) — queda com punho em dorsiflexão + desvio ulnar + pronação; (1D) Avulsão radial — fratura do processo estiloide do rádio + tração do disco. Mecanismo Classe 2 (degenerativa): variante ulnar positiva → a ulna mais comprida impacta contra o lado ulnar do carpo (lunato + triquetro) durante pronação + carga axial → desgaste progressivo do disco CFCT → condromalácia do lunato/cabeça ulnar → perfuração degenerativa → lesão da fibrocartilagem lunotriquetral. A distinção Classe 1 vs 2 tem implicação cirúrgica: Classe 1 = reparo do tecido lesado (sutura/reancoragem); Classe 2 = procedimentos de descarga ulnar (osteotomia de encurtamento ulnar) antes ou associado ao desbridamento.',
  surgicalBasis:
    'Algoritmo baseado em Classe (traumática vs degenerativa) e subestágio. Classe 1A: central, >2mm — desbridamento artroscópico; <2mm ou periférico: conservador 6 semanas. Classe 1B (avulsão ulnar): mais cirúrgica — reparo artroscópico ou aberto dos ligamentos radioulnares. Classe 1C (avulsão assoalho): reparo artroscópico dos ligamentos ulnocarpais. Classe 1D (avulsão radial): fixação da fratura do estiloide + reparo. Classe 2 A–B: osteotomia de encurtamento ulnar (reduz a carga na impactação). Classe 2C–D: desbridamento artroscópico + osteotomia de encurtamento. Classe 2E: pancarpal — artrodese radiolunotriquetral ou ATU conforme extensão.',
  grades: [
    {
      id: 'palmer-1a',
      label: 'Classe 1A — Perfuração Central',
      description: 'Perfuração ou laceração da porção avascular central do disco — a mais comum',
      criteria: [
        'Laceração horizontal da porção central do disco (avascular)',
        'Mais comum: perfuração circular ou oval central',
        'Sem comprometimento ligamentar periférico',
        'Artroscopia: falha tecidual no disco, positivo ao "trampoline test" (perda de elasticidade)',
        'Correlação RNM: sinal T2 elevado na porção central do disco',
        'Pode ser traumática ou degenerativa precoce — diferenciar pela história',
      ],
      treatment:
        'Conservador 6–12 semanas se < 2mm. Artroscopia + desbridamento com shaver se falha conservadora ou lesão > 2mm. Ressecar apenas tecido avascular instável. Não suturar tecido avascular (não cicatriza).',
      prognosis:
        'Bom com desbridamento artroscópico. 85–90% de satisfação. Retorno ao esporte em 6–8 semanas pós-artroscopia.',
      colorCode: 'caution',
    },
    {
      id: 'palmer-1b',
      label: 'Classe 1B — Avulsão Ulnar (com/sem fratura estiloide)',
      description: 'Avulsão periférica do CFCT da inserção ulnar — porção vascular, reparo possível',
      criteria: [
        'Laceração periférica da borda ulnar do disco',
        'Pode ou não associar fratura do estiloide ulnar (base = radioulnar instável; ponta = estável)',
        'Instabilidade radioulnar distal (DRUJ)',
        'Teste de compressão e rotação do DRUJ positivo',
        'Artroscopia: avulsão da borda ulnar com hemartrose, possivelmente instabilidade DRUJ',
        'Fratura do estiloide ulnar base + instabilidade DRUJ = indicação cirúrgica absoluta',
      ],
      treatment:
        'Conservador se estável (estiloide ponta sem instabilidade): tipoia com antebraço em supinação 6 semanas. Cirúrgico se instável: reparo artroscópico (inside-out, all-inside) ou aberto dos ligamentos radioulnares volar/dorsal.',
      prognosis:
        'Bom com reparo precoce (< 3 meses). Instabilidade DRUJ crônica não reparada resulta em artrose radioulnar e limitação de rotação do antebraço.',
      colorCode: 'caution',
    },
    {
      id: 'palmer-1c',
      label: 'Classe 1C — Avulsão do Assoalho Ulnocarpal',
      description:
        'Avulsão dos ligamentos ulnocarpais (ulnolunato + ulnotriquetro) — frequentemente subdiagnosticada',
      criteria: [
        'Laceração do assoalho do CFCT com os ligamentos ulnolunar e ulnotriquetral',
        'Dor ulnar com desvio ulnar forçado + pronação',
        'Frequentemente confundida com "entorse ulnar" — subdiagnosticada',
        'RNM: descontinuidade do assoalho ulnocarpal (requer MRI 3T ou artroRM)',
        'Artroscopia: visão do assoalho ausente ou descontínuo, instabilidade carpal',
        'Positivo no teste de desvio ulnar + carga',
      ],
      treatment:
        'Reparo artroscópico dos ligamentos ulnocarpais (reinserção ao pisiforme/triquetro). Tipoia em supinação 6 semanas pós-reparo. Fisioterapia progressiva 3–4 meses.',
      prognosis:
        'Moderado. Lesão frequentemente não diagnosticada agudamente. Reparo tardio tem pior resultado que agudo. Síndrome do desfiladeiro ulnar residual possível.',
      colorCode: 'caution',
    },
    {
      id: 'palmer-1d',
      label: 'Classe 1D — Avulsão Radial (estiloide do rádio)',
      description:
        'Avulsão da inserção radial do CFCT — frequentemente associada a fratura do processo estiloide',
      criteria: [
        'Laceração ou avulsão da inserção radial do CFCT (fóvea ulnar + estiloide do rádio)',
        'Frequentemente associada a fratura da borda radial do processo estiloide',
        'Instabilidade DRUJ de grau variável',
        'Artroscopia: visão direta da avulsão radial da fóvea',
        'TC: fratura do processo estiloide (pode ser pequeníssima)',
        'Mecanismo: tração pelo CFCT durante luxação do carpo ou fratura do rádio distal',
      ],
      treatment:
        'Fixação da fratura estiloide + reparo do CFCT à fóvea se instabilidade DRUJ. Artroscopia + âncora de sutura para reinserção na fóvea. Imobilização 6–8 semanas.',
      prognosis:
        'Bom com fixação adequada. Instabilidade residual se fratura não fixada ou CFCT não reparado.',
      colorCode: 'danger',
    },
    {
      id: 'palmer-2a',
      label: 'Classe 2A — Desgaste do Disco (Afinamento)',
      description:
        'Afinamento/desgaste da porção central do disco sem perfuração — estágio inicial da síndrome de impactação ulnocarpal',
      criteria: [
        'Afinamento do disco CFCT (não perfurado)',
        'Variante ulnar positiva ou "relativa" (biomecânica)',
        'Dor ulnar com carga axial em pronação',
        'RNM: sinal T2 aumentado na porção central do disco sem perfuração',
        'Sem lesão condral do lunato ou triquetro',
        'Sem lesão ligamentar lunotriquetral',
      ],
      treatment:
        'Conservador: splint de descarga, AINEs, restrição de atividades que sobrecarregam a coluna ulnar. Se falha conservadora: osteotomia de encurtamento ulnar (2–4mm) para redistribuir a carga.',
      prognosis: 'Bom. Progressão evitável com descarga ulnar precoce.',
      colorCode: 'safe',
    },
    {
      id: 'palmer-2b',
      label: 'Classe 2B — Desgaste + Condromalácia Lunato/Ulna',
      description:
        'Afinamento do disco + condromalácia do lunato proximal e/ou cabeça ulnar',
      criteria: [
        'Todos os critérios de 2A',
        'Condromalácia (amolecimento/fibrilação) da face ulnar proximal do lunato',
        'Possível condromalácia da cabeça ulnar',
        'Espaço radiolunar distal preservado radiograficamente',
        'Artroscopia: fibrilação condral grau I-II no lunato proximal ulnar',
      ],
      treatment:
        'Osteotomia de encurtamento ulnar + desbridamento artroscópico do disco e da cartilagem fibrilada. Wafer procedure artroscópico (ressecção da cabeça ulnar distal) como alternativa.',
      prognosis: 'Bom a moderado com osteotomia. Progressão possível se descarga inadequada.',
      colorCode: 'caution',
    },
    {
      id: 'palmer-2c',
      label: 'Classe 2C — Perfuração do Disco + Condromalácia',
      description: 'Perfuração degenerativa do disco + condromalácia lunato/ulna',
      criteria: [
        'Perfuração central degenerativa do disco CFCT',
        'Condromalácia do lunato proximal e/ou cabeça ulnar',
        'Espaço articular ainda mantido',
        'Artroscopia: perfuração irregular (borda plana, não cortante — diferente da 1A traumática que tem borda nítida)',
        'Sem lesão ligamentar lunotriquetral macroscópica',
      ],
      treatment:
        'Desbridamento artroscópico da perfuração + condroplastia + osteotomia de encurtamento ulnar. Wafer procedure se osteotomia contraindicada.',
      prognosis: 'Moderado. Descarga necessária para retardar progressão.',
      colorCode: 'caution',
    },
    {
      id: 'palmer-2d',
      label: 'Classe 2D — Perfuração + Ligamento LT Lesado',
      description:
        'Perfuração degenerativa + condromalácia + lesão do ligamento lunotriquetral (LT)',
      criteria: [
        'Todos os critérios de 2C',
        'Lesão parcial ou completa do ligamento lunotriquetral (LT)',
        'Instabilidade intercalada dissociativa possível (VISI)',
        'Artroscopia: lesão na face radial do ligamento LT, instabilidade LT ao gancho de sondagem',
        'Pode ter dissociação lunotriquetral no Rx dinâmico (desvio ulnar com carga)',
      ],
      treatment:
        'Desbridamento artroscópico + reparo/reforço do LT (se possível) + osteotomia de encurtamento ulnar. Artrodese lunotriquetral em casos com instabilidade grave crônica.',
      prognosis: 'Moderado a reservado. Instabilidade LT progressiva sem tratamento.',
      colorCode: 'danger',
    },
    {
      id: 'palmer-2e',
      label: 'Classe 2E — Artrose Radiocarpal/Pancarpal',
      description:
        'Artrose pancarpal avançada com destruição do CFCT + ligamento LT + superfícies condrais múltiplas',
      criteria: [
        'Todos os critérios de 2D',
        'Artrose radiolunar distal ou radiocarpal estabelecida',
        'Destruição condral avançada de múltiplas superfícies',
        'Osteófitos e estreitamento do espaço articular no Rx',
        'Sequela terminal da síndrome de impactação ulnocarpal não tratada',
      ],
      treatment:
        'Artrodese parcial (lunotriquetral, radiolunotriquetral) se localizada. Artrodese total do punho em casos avançados. Ressecção da cabeça ulnar (Darrach) ou hemirressecção (Bowers) se artrose DRUJ predominante.',
      prognosis: 'Reservado para conservação. Bom para controle da dor com artrodese.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'Distinguir Classe 1 (traumática) de Classe 2 (degenerativa) pela história: Classe 1 = evento traumático específico (queda, hiperpronação, distensão); Classe 2 = dor insidiosa, ulnar positivo, sobrecarga crônica. "Trampoline test" artroscópico: CFCT normal tem elasticidade (ressalto ao toque) — perfurado = sem ressalto. Artro-RNM (injeção de contraste) tem sensibilidade 90% para lesões Classe 1; RNM 3T sem contraste = 80–85%. Classe 1B com instabilidade DRUJ: SEMPRE verificar fratura da BASE do estiloide ulnar (não da ponta) — fratura da base = inserção dos ligamentos radioulnares comprometida = instabilidade DRUJ real.',
  pitfall:
    'Classe 1C (avulsão do assoalho ulnocarpal) é frequentemente diagnosticada como "entorse ulnar do punho" — a única forma confiável de diagnóstico é artro-RNM 3T ou artroscopia. Não tratar como entorse simples se dor ulnar persistir > 6 semanas após o trauma. Dor ulnar após fratura do rádio distal: 40–50% têm lesão do CFCT associada — avaliar CFCT sistematicamente. Perfuração central degenerativa (2C) e perfuração traumática (1A) têm aspectos artroscópicos diferentes: 2C = bordas irregulares/planas; 1A = bordas cortantes/agudas. O tratamento difere: 2C exige osteotomia de descarga.',
  references: [
    {
      id: 'r1',
      text: 'Palmer AK. Triangular fibrocartilage complex lesions: a classification. J Hand Surg Am. 1989;14(4):594-606.',
    },
    {
      id: 'r2',
      text: 'Nakamura T, et al. Palmer\'s classification of TFCC lesions: a revision. J Hand Surg Eur. 2011;36(7):538-544.',
    },
    {
      id: 'r3',
      text: 'Anderson ML, et al. Arthroscopy of the wrist and TFCC. Clin Orthop. 2003;(409):153-160.',
    },
  ],
};
