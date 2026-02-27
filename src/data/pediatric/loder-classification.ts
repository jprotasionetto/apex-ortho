import type { ClassificationData } from '@/types/classification.ts';

export const loderClassificationData: ClassificationData = {
  id: 'loder-classification',
  name: 'Classificação de Loder (ECFE – Estabilidade)',
  author: 'Loder',
  year: 1993,
  epidemiology: 'ECFE (Epifisiólise da Cabeça Femoral) afeta 2–13/100.000 adolescentes (10–16 anos); F:M 1:2,4; maior em afrodescendentes e obesos (IMC >85° percentil em 73% dos casos). Bilateral em 20–40%. Distribuição por estabilidade: estável 85%, instável 15%. Hipotireoidismo, GH exógeno e doença renal aumentam risco. Classificação de Wilson por grau de deslizamento: Grau I (<33%), II (33–50%), III (>50%). Taxa de NAV: estável <10%, instável 20–50%.',
  mechanism: 'Fise proximal femoral (zona hipertrófica) = zona de menor resistência mecânica durante surto de crescimento pubertário. Obesidade + obliquidade fisária aumentada + enfraquecimento hormonal → deslizamento posterior-inferior da epífise sobre a metáfise (RX AP: deslizamento medial; RX lateral: deslizamento posterior — "sorvete caindo da casquinha"). Instabilidade de Loder (clínica, não radiográfica): se não deambula = ruptura do periósteo → hematoma intra-articular → compressão das artérias retinaculares → risco de NAV. Urgência: capsulotomia para descompressão + fixação in situ sem redução.',
  grades: [
    {
      id: 'stable',
      label: 'Estável – Consegue Caminhar',
      description: 'Paciente consegue caminhar com ou sem auxiliares de marcha.',
      criteria: [
        'Paciente consegue deambular (com ou sem muletas)',
        'Sintomas há semanas a meses',
        'Dor inguinal ou referida ao joelho',
        'Marcha em rotação externa obrigatória',
        'Limitação da rotação interna e flexão do quadril',
      ],
      treatment: 'Fixação in situ com parafuso canulado (1 parafuso central na epífise). Sem tentativa de redução. Carga protegida pós-operatória.',
      prognosis: 'Bom. Taxa de necrose avascular <10%. Condrólise rara com fixação adequada.',
      colorCode: 'safe',
    },
    {
      id: 'unstable',
      label: 'Instável – Não Consegue Caminhar',
      description: 'Paciente incapaz de caminhar mesmo com auxiliares de marcha.',
      criteria: [
        'Incapaz de caminhar mesmo com muletas',
        'Início agudo com dor severa',
        'Espasmo muscular significativo',
        'Qualquer mobilização do quadril provoca dor intensa',
        'Quadro semelhante a fratura do colo femoral',
      ],
      treatment: 'Urgência cirúrgica. Redução gentil (controversa) e fixação com parafusos canulados. Capsulotomia para descompressão do hematoma intra-articular.',
      prognosis: 'Reservado. Taxa de necrose avascular 20-50%. Risco de condrólise.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'ECFE instável: taxa de necrose avascular de 20-50% independentemente do tratamento. A capsulotomia urgente pode reduzir a pressão intra-articular e potencialmente diminuir o risco de NAV.',
  pitfall: 'A classificação de estabilidade é CLÍNICA, não radiográfica. Não se baseia no grau de deslizamento no raio-X, mas sim na capacidade funcional do paciente deambular.',
  references: [
    {
      authors: 'Loder RT, Richards BS, Shapiro PS, Reznick LR, Aronson DD',
      title: 'Acute slipped capital femoral epiphysis: the importance of physeal stability',
      journal: 'Journal of Bone and Joint Surgery (Am)',
      year: 1993,
    },
  ],
};
