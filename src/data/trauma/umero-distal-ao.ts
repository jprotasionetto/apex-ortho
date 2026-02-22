import type { ClassificationData } from '@/types/tool';

export const umeroDistalAOData: ClassificationData = {
  id: 'umero-distal-ao',
  name: 'Classificação AO — Fratura do Úmero Distal (13)',
  author: 'Müller / AO Foundation',
  year: 2018,
  grades: [
    {
      id: 'ao-13a',
      label: 'AO 13-A — Extra-articular',
      description: 'Fratura do úmero distal sem envolvimento articular — metáfise e/ou epicôndilos',
      criteria: [
        'AO 13-A1: avulsão de epicôndilo — medial (mais comum) ou lateral',
        'AO 13-A2: fratura metafisária simples — traço único acima da superfície articular',
        'AO 13-A3: fratura metafisária multifragmentária — cominuição supracondilar',
        'Superfície articular íntegra — sem traço articular',
        'Frequente em crianças (Gartland para supracondilar) e adultos jovens',
        'Lesão do nervo ulnar: risco na avulsão do epicôndilo medial',
        'Lesão vascular: artéria braquial em fraturas supracondilares desviadas'
      ],
      treatment: 'Avulsão epicôndilo medial: conservador se < 5 mm desvio; cirúrgico (parafuso) se > 5 mm, atleta arremessador, instabilidade do cotovelo. Fratura metafisária: conservador se redutível e estável; ORIF com placa dupla (placas paralelas ou a 90°) se instável.',
      prognosis: 'Bom prognóstico com tratamento adequado. Avulsão epicondiliana: excelente se tratada precocemente. Risco de rigidez pós-traumática — mobilização precoce fundamental.',
      colorCode: 'safe'
    },
    {
      id: 'ao-13b',
      label: 'AO 13-B — Articular Parcial',
      description: 'Fratura articular parcial — apenas parte da superfície articular envolvida, ligação metáfiso-diafisária preservada',
      criteria: [
        'AO 13-B1: fratura do capítulo (lateral) — Hahn-Steinthal (capitulum + sulco trochlear) ou Kocher-Lorenz',
        'AO 13-B2: fratura da tróclea (medial) — rara, frequentemente associada à fratura do capítulo',
        'AO 13-B3: fratura do côndilo lateral ou medial — traço oblíquo',
        'Parte da superfície articular continua conectada à diáfise',
        'TC axial essencial para planejamento — capítulo e tróclea melhor vistos em sagital',
        'Incidência radiológica: perfil e oblíqua interna (45°) — capítulo "em semiluna"',
        'Lesão osteocondral frequente — fragmento livre intra-articular'
      ],
      treatment: 'ORIF: parafusos de Herbert ou compressão ocultos (posterior ao anterior) para capítulo. Fixação com parafusos canulados para fraturas condilares. Artroscopia pode auxiliar na redução e fixação percutânea de fragmentos pequenos. Prótese de capitulum em fragmentos não reconstructíveis.',
      prognosis: 'Prognóstico variável — depende do tamanho do fragmento e qualidade da redução articular. Necrose avascular do capítulo: 15-25% se suprimento vascular comprometido. Rigidez pós-traumática: complicação frequente.',
      colorCode: 'caution'
    },
    {
      id: 'ao-13c',
      label: 'AO 13-C — Articular Completa',
      description: 'Fratura articular completa — superfície articular totalmente separada da diáfise (fratura intercondiliana em T ou Y)',
      criteria: [
        'AO 13-C1: articular simples, metafisária simples — T simples',
        'AO 13-C2: articular simples, metafisária multifragmentária — T com cominuição metafisária',
        'AO 13-C3: articular multifragmentária — Y com cominuição articular grave',
        'Ambos os côndilos (capítulo + tróclea) separados da diáfise E entre si',
        'Fratura de alta energia em adultos jovens / fratura osteoporótica em idosos',
        'TC 3D obrigatória para planejamento pré-operatório',
        'Lesão do nervo ulnar: presente em 25% — identificar e transpor anteriormente'
      ],
      treatment: 'Cirúrgico: ORIF com dupla placa a 90° (placa medial + placa póstero-lateral) OU dupla placa paralela (190° — técnica AO atual preferida em C3). Osteotomia de olécrano tipo chevron (ápice distal) para exposição articular completa. Transposição anterior do nervo ulnar obrigatória. Tourniquet: máximo 90 min. Artroplastia total do cotovelo (ATC): alternativa em C3 com osteoporose grave / idoso > 70 anos.',
      prognosis: 'Resultado frequentemente comprometido pela gravidade da lesão. 20-30% desenvolvem rigidez significativa. Infecção: 3-5%. Pseudartrose: 2-5%. Ossificação heterotópica: 5-10%. Neuroapraxia do nervo ulnar: maioria recupera. Mobilização ativa precoce (24-48h pós-op) é fundamental para resultado funcional.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Abordagem posterior para úmero distal: paciente em decúbito lateral ou prono. Dissecção entre porções medial e lateral do tríceps (acesso paratricipital — preserva aparelho extensor) para fraturas A e B. Osteotomia de olécrano tipo chevron (ápice distal, com fio de pré-tensão) para exposição completa das fraturas C — permite reconstrução articular visual direta. Limite do torniquete: 90 min — planejar tempo cirúrgico. Nervo ulnar: sempre identificar no sulco cubital medial, libertar e transpor anteriormente no final da cirurgia.',
  pitfall: 'Fratura intercondiliana (13-C) em IDOSO: não tente ORIF impossível em osso osteoporótico gravemente cominutivo. Artroplastia total do cotovelo (prótese de Coonrad-Morrey ou similar) oferece resultado funcional superior e recuperação mais rápida em pacientes > 70 anos com 13-C3 osteoporótica. A taxa de complicações da ORIF em osso osteoporótico é inaceitavelmente alta. Ossificação heterotópica: AINE profilático (indometacina 25 mg 3x/dia × 6 semanas) em pacientes de alto risco (TCE, queimados, reoperação).',
  references: [
    { authors: 'McKee MD, Veillette CJ, Hall JA, et al', title: 'A multicenter, prospective, randomized, controlled trial of open reduction—internal fixation versus total elbow arthroplasty for displaced intra-articular distal humeral fractures in elderly patients', journal: 'J Shoulder Elbow Surg', year: 2009 }
  ]
};
