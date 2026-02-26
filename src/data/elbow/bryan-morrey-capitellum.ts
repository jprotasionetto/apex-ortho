import type { ClassificationData } from '@/types/classification.ts';

export const bryanMorreyCapitellumData: ClassificationData = {
  id: 'bryan-morrey-capitellum',
  name: 'Classificação de Bryan e Morrey – Fraturas do Capítulo (Côndilo Lateral)',
  author: 'Bryan e Morrey',
  year: 1985,
  epidemiology:
    'Rara: <1% de todas as fraturas, 6% das fraturas do úmero distal. Predomínio em mulheres jovens (trauma de alta energia) e idosos com osteoporose. Associação com fratura da cabeça do rádio em ~25% dos casos.',
  mechanism:
    'Queda sobre a mão espalmada (FOOSH) com o cotovelo em extensão: força axial transmitida pela cabeça do rádio contra o capitelo. O fragmento desloca-se anteriormente e superiormente. Pode ocorrer também em trauma direto.',
  theory:
    'O capitelo e o sulco trochlear lateral constituem a articulação lateral do cotovelo. A falha do osso subcondral (plano de fratura coronal) gera fragmentos de espessura variável, que determinam o tratamento. A classificação de Bryan-Morrey (1985) foi a primeira sistematização clínica amplamente adotada.',
  surgicalBasis:
    'Acesso anterolateral (Kaplan ou Kocher) permite visualização direta do capitelo. Fixação com parafusos sem cabeça (Herbert, Acutrak) inseridos de posterior para anterior. Tipos I e IV: RAFI. Tipo II: excisão (osso subcondral insuficiente para fixação estável). Tipo III: excisão ou artroplastia total do cotovelo em idosos.',
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I — Hahn-Steinthal',
      description:
        'Fragmento hemiesférico espesso envolvendo a maior parte do capitelo, com quantidade adequada de osso subcondral.',
      criteria: [
        'Fragmento grande e hemisférico do capitelo',
        'Boa reserva de osso subcondral (≥1 cm de espessura)',
        'Fragmento deslocado anterior e superiormente',
        'Corresponde a AO/OTA 13-B2',
        'Fratura mais comum do capitelo (~75% dos casos)',
      ],
      treatment:
        'RAFI via acesso anterolateral. Parafusos sem cabeça (Herbert/Acutrak) inseridos de posterior para anterior, afundados abaixo da cartilagem. Imobilização pós-operatória breve (1–2 semanas), seguida de mobilização ativa precoce.',
      prognosis:
        'Bom a excelente quando a fixação é estável e a mobilização é iniciada precocemente. Risco de necrose avascular (~15%) por lesão vascular durante o trauma ou acesso cirúrgico.',
      colorCode: 'safe',
    },
    {
      id: 'type-ii',
      label: 'Tipo II — Kocher-Lorenz',
      description:
        'Fino wafer osteocondral do capitelo, com cartilagem articular intacta mas osso subcondral insuficiente para fixação.',
      criteria: [
        'Fragmento fino ("casca") predominantemente cartilaginoso',
        'Osso subcondral escasso ou ausente',
        'Dificulta ou impossibilita fixação estável com parafusos',
        'Corresponde a AO/OTA 13-B2 fino',
        'Menos comum (~10% dos casos)',
      ],
      treatment:
        'Excisão do fragmento: osso subcondral insuficiente impede fixação estável. Artroscopia pode ser usada para excisão em casos selecionados. Em pacientes jovens com fragmento grande, pode-se tentar fixação com micro-parafusos bioabsorvíveis.',
      prognosis:
        'Geralmente bom após excisão, com manutenção da função do cotovelo. Risco de artrose precoce a longo prazo por perda da superfície articular.',
      colorCode: 'caution',
    },
    {
      id: 'type-iii',
      label: 'Tipo III — Cominutiva / Impactada',
      description:
        'Fratura cominutiva do capitelo ou com impactação articular. Múltiplos fragmentos, geralmente não reconstrutíveis.',
      criteria: [
        'Cominuição marcada do capitelo',
        'Impactação da superfície articular',
        'Múltiplos fragmentos sem fixação viável',
        'Frequente em idosos com osteoporose',
        'Pode envolver o côndilo lateral distalmente',
      ],
      treatment:
        'Excisão dos fragmentos cominutivos em pacientes jovens/ativos com função razoável esperada. Artroplastia total do cotovelo (ATC) em idosos com boa demanda funcional baixa ou em casos com destruição articular extensa.',
      prognosis:
        'Reservado. Risco de rigidez, artrose e instabilidade lateral. ATC em idosos oferece bons resultados funcionais com restrições de carga.',
      colorCode: 'danger',
    },
    {
      id: 'type-iv',
      label: 'Tipo IV — McKee (Extensão Troclear)',
      description:
        'Fratura em cisalhamento coronal estendendo-se do capitelo para a tróclea lateral. Modificação de McKee (1996). TIPO MAIS IMPORTANTE para o planejamento cirúrgico.',
      criteria: [
        'Fratura coronal do capitelo + tróclea lateral',
        'Fragmento articular anterior de grande dimensão',
        'Corresponde a AO/OTA 13-B3',
        'Possível instabilidade lateral do cotovelo',
        'Frequentemente subestimado nas radiografias simples — TC obrigatória',
        'Pode ser parte da classificação de Dubberley tipo 2 ou 3',
      ],
      treatment:
        'RAFI obrigatória: parafusos sem cabeça de posterior para anterior. Acesso anterolateral ampliado (Kaplan estendido ou Kocher). Avaliar e reparar o ligamento colateral lateral (LCL) se instabilidade presente. TC pré-operatória essencial para mapear a extensão troclear.',
      prognosis:
        'Bom quando fixação adequada e LCL íntegro. Maior risco de rigidez, pseudartrose e artrose que o Tipo I isolado. Seguimento criterioso necessário.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'O Tipo IV (McKee) é frequentemente subestimado nas radiografias simples. Toda fratura do capitelo deve ter TC pré-operatória para avaliar extensão troclear e cominuição posterior — isso muda a abordagem cirúrgica e o acesso.',
  pitfall:
    'Não confundir o Tipo II (wafer fino) com Tipo I: a aparência radiográfica pode ser similar, mas a espessura do fragmento no TC determina se a fixação é viável. A excisão de um fragmento Tipo I (grande) é um erro técnico com consequências funcionais graves.',
  references: [
    {
      authors: 'Bryan RS, Morrey BF',
      title: 'Fractures of the distal humerus',
      journal: 'The Elbow and Its Disorders. WB Saunders',
      year: 1985,
    },
    {
      authors: 'McKee MD, Jupiter JB, Bamberger HB',
      title: 'Coronal shear fractures of the distal end of the humerus',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 1996,
    },
  ],
};
