import type { ClassificationData } from '@/types/classification.ts';

export const dubberleyCapitellumData: ClassificationData = {
  id: 'dubberley-capitellum',
  name: 'Classificação de Dubberley – Fraturas do Capitelo e Tróclea',
  author: 'Dubberley et al.',
  year: 2006,
  epidemiology:
    'Fraturas coronais do úmero distal: <1% de todas as fraturas, 6% das fraturas do úmero distal. Predominância em mulheres (osteoporose) e adultos jovens (trauma de alta energia). Associação com fratura da cabeça do rádio (~25%) e lesão do LCL (~15%).',
  mechanism:
    'Queda sobre a mão espalmada (FOOSH) com cotovelo em extensão: força axial transmitida pela cabeça do rádio comprime o capitelo (e eventualmente a tróclea) no plano coronal. A extensão medial do fragmento (envolvimento troclear) depende da magnitude do trauma e da direção da força.',
  theory:
    'A classificação de Dubberley (2006) amplia a de Bryan-Morrey ao estratificar explicitamente o envolvimento troclear e a presença de cominuição posterior, dois fatores que impactam diretamente a escolha do acesso cirúrgico e o prognóstico. O sistema A/B (sem/com cominuição) em cada tipo reflete a qualidade óssea e a complexidade da fixação.',
  surgicalBasis:
    'Acesso anterolateral (Kaplan ou Kocher) para exposição do capitelo e tróclea lateral. Tipos com envolvimento troclear completo (Tipo 3) podem requerer acesso lateral ampliado ou olecranização. Fixação com parafusos sem cabeça (Herbert, Acutrak 2) inseridos de posterior para anterior, afundados abaixo da cartilagem. Cominuição posterior (sufixo B) dificulta a fixação e piora o prognóstico.',
  grades: [
    {
      id: 'type-1a',
      label: 'Tipo 1A — Capitelo isolado, sem cominuição',
      description:
        'Fratura coronal envolvendo apenas o capitelo, fragmento único sem cominuição posterior.',
      criteria: [
        'Fragmento único do capitelo',
        'Sem envolvimento da tróclea',
        'Sem cominuição posterior do fragmento',
        'Equivale ao Tipo I (Hahn-Steinthal) de Bryan-Morrey',
        'Melhor prognóstico para RAFI',
      ],
      treatment:
        'RAFI via acesso anterolateral. Parafusos sem cabeça (Herbert/Acutrak) de posterior para anterior. Mobilização ativa precoce após 1–2 semanas.',
      prognosis:
        'Excelente. Melhor subgrupo da classificação de Dubberley. Taxa de consolidação >90% com técnica adequada.',
      colorCode: 'safe',
    },
    {
      id: 'type-1b',
      label: 'Tipo 1B — Capitelo isolado, com cominuição',
      description:
        'Fratura coronal do capitelo com fragmento principal único, mas com cominuição posterior adicional.',
      criteria: [
        'Fratura do capitelo (sem tróclea)',
        'Cominuição posterior presente',
        'Reduz superfície de contato para fixação',
        'TC essencial para mapear os fragmentos posteriores',
        'Sem envolvimento troclear',
      ],
      treatment:
        'RAFI se fragmentos viáveis para fixação. Parafusos sem cabeça complementados por mini-parafusos ou pinos para fragmentos menores. Se irreconstruível, excisão dos fragmentos cominutivos.',
      prognosis:
        'Bom a moderado. A cominuição posterior eleva o risco de pseudartrose e artrose em comparação ao Tipo 1A.',
      colorCode: 'caution',
    },
    {
      id: 'type-2a',
      label: 'Tipo 2A — Capitelo + tróclea lateral, sem cominuição',
      description:
        'Fratura coronal do capitelo com extensão para a tróclea lateral, fragmento único sem cominuição. Corresponde ao Tipo IV (McKee) de Bryan-Morrey.',
      criteria: [
        'Fratura do capitelo + tróclea lateral (sulco trochlear)',
        'Fragmento coronal único e coeso',
        'Sem cominuição posterior',
        'Fragmento articular anterior volumoso',
        'TC obrigatória: frequentemente subestimado nas radiografias',
      ],
      treatment:
        'RAFI obrigatória via acesso anterolateral ampliado (Kaplan estendido ou Kocher). Parafusos sem cabeça de posterior para anterior. Reparação do LCL se instabilidade lateral identificada.',
      prognosis:
        'Bom quando fixação estável obtida. Maior complexidade que Tipo 1; risco aumentado de rigidez se mobilização tardia.',
      colorCode: 'caution',
    },
    {
      id: 'type-2b',
      label: 'Tipo 2B — Capitelo + tróclea lateral, com cominuição',
      description:
        'Fratura coronal do capitelo com extensão troclear lateral e cominuição posterior adicional. Tipo de alta complexidade.',
      criteria: [
        'Fratura do capitelo + tróclea lateral',
        'Cominuição posterior presente',
        'Maior dificuldade técnica para fixação',
        'Risco de colapso posterior após fixação',
        'Possível instabilidade lateral do cotovelo',
      ],
      treatment:
        'RAFI com planejamento pré-operatório criterioso baseado em TC. Combinação de parafusos sem cabeça e placa lateral de apoio se necessário. Considerar artroplastia total do cotovelo em idosos com osso de má qualidade.',
      prognosis:
        'Moderado. Alta taxa de complicações: rigidez, necrose avascular, pseudartrose, artrose precoce.',
      colorCode: 'danger',
    },
    {
      id: 'type-3a',
      label: 'Tipo 3A — Capitelo + tróclea completa, sem cominuição',
      description:
        'Fratura coronal abrangendo todo o capítulo-trochlear (capitelo + tróclea inteira), fragmento único sem cominuição.',
      criteria: [
        'Fragmento coronal abrangendo capitelo + tróclea completa',
        'Sem cominuição posterior',
        'Fratura articular complexa — envolve toda a superfície distal lateral e medial',
        'Risco de necrose avascular por desvascularização extensa',
        'Requer acesso cirúrgico ampliado',
      ],
      treatment:
        'RAFI via acesso lateral ampliado ou olecranização (osteotomia do olécrano) para visibilização da tróclea medial. Parafusos sem cabeça múltiplos de posterior para anterior. Reconstrução ligamentar lateral e medial se necessário.',
      prognosis:
        'Reservado. Fragmento extenso eleva o risco de necrose avascular e falha de fixação. Requer centro de referência em cirurgia do cotovelo.',
      colorCode: 'danger',
    },
    {
      id: 'type-3b',
      label: 'Tipo 3B — Capitelo + tróclea completa, com cominuição',
      description:
        'Fratura coronal de toda a superfície articular distal do úmero com cominuição posterior. Tipo mais grave da classificação.',
      criteria: [
        'Fratura do capitelo + tróclea completa',
        'Cominuição posterior marcada',
        'Fragmento articular distal extenso e fragmentado',
        'Frequentemente irreconstruível em idosos',
        'Maior risco de colapso, pseudartrose e necrose avascular',
      ],
      treatment:
        'Artroplastia total do cotovelo (ATC) em idosos (>65 anos) com osteoporose: resultados funcionais superiores à tentativa de RAFI em osso cominu ído. RAFI em jovens/ativos com tentativa de preservação articular, aceitando maior risco de reoperação.',
      prognosis:
        'Reservado a ruim. Maior taxa de complicações da série. ATC oferece previsibilidade funcional em idosos; RAFI em jovens aceita prognóstico mais incerto em troca da preservação da articulação nativa.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'A presença de cominuição posterior (sufixo B) é o fator prognóstico mais importante da classificação de Dubberley: eleva o risco de pseudartrose, colapso e necrose avascular independentemente do tipo. TC pré-operatória com reconstrução 3D é obrigatória em todos os casos.',
  pitfall:
    'A extensão troclear é sistematicamente subestimada nas radiografias simples. O Tipo 2 (McKee/Dubberley 2A) pode ser confundido com Tipo 1 de Bryan-Morrey. Abordar um Tipo 2A como Tipo 1 resulta em fixação inadequada do fragmento troclear e instabilidade residual.',
  references: [
    {
      authors: 'Dubberley JH, Faber KJ, Macdermid JC, Patterson SD, King GJ',
      title: 'Outcome after open reduction and internal fixation of capitellar and trochlear fractures',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 2006,
    },
    {
      authors: 'McKee MD, Jupiter JB, Bamberger HB',
      title: 'Coronal shear fractures of the distal end of the humerus',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 1996,
    },
    {
      authors: 'Bryan RS, Morrey BF',
      title: 'Fractures of the distal humerus',
      journal: 'The Elbow and Its Disorders. WB Saunders',
      year: 1985,
    },
  ],
};
