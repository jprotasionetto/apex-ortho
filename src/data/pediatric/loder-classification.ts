import type { ClassificationData } from '@/types/classification.ts';

export const loderClassificationData: ClassificationData = {
  id: 'loder-classification',
  name: 'Classificação de Loder (ECFE – Estabilidade)',
  author: 'Loder',
  year: 1993,
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
