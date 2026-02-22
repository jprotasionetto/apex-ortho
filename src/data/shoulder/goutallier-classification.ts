import type { ClassificationData } from '@/types/classification.ts';

export const goutallierClassificationData: ClassificationData = {
  id: 'goutallier-classification',
  name: 'Classificação de Goutallier – Infiltração Gordurosa',
  author: 'Goutallier',
  year: 1994,
  grades: [
    {
      id: 'stage-0',
      label: 'Estágio 0 – Normal',
      description: 'Músculo completamente normal sem infiltração gordurosa.',
      criteria: [
        'Sem infiltração gordurosa na TC/RM',
        'Músculo com aspeto normal',
        'Qualidade muscular preservada',
      ],
      treatment: 'Reparação da coifa indicada. Excelente potencial de cicatrização e recuperação funcional.',
      prognosis: 'Excelente resultado após reparação.',
      colorCode: 'safe',
    },
    {
      id: 'stage-1',
      label: 'Estágio 1 – Estrias Gordurosas',
      description: 'Algumas estrias gordurosas dentro do músculo.',
      criteria: [
        'Estrias gordurosas finas no ventre muscular',
        'Quantidade de gordura mínima',
        'Força muscular geralmente preservada',
      ],
      treatment: 'Reparação da coifa indicada. Bom potencial de cicatrização.',
      prognosis: 'Bom resultado após reparação.',
      colorCode: 'safe',
    },
    {
      id: 'stage-2',
      label: 'Estágio 2 – Gordura < Músculo',
      description: 'Infiltração gordurosa importante mas ainda com mais músculo que gordura.',
      criteria: [
        'Infiltração gordurosa evidente',
        'Proporção de gordura menor que músculo',
        'Possível défice de força',
        'Ponto de viragem para prognóstico',
      ],
      treatment: 'Reparação da coifa possível mas com resultados menos previsíveis. Avaliar cuidadosamente a retração tendinosa.',
      prognosis: 'Moderado. Este é o ponto de viragem. Risco aumentado de re-rotura.',
      colorCode: 'caution',
    },
    {
      id: 'stage-3',
      label: 'Estágio 3 – Gordura = Músculo',
      description: 'Quantidade igual de gordura e músculo.',
      criteria: [
        'Proporção igual de gordura e músculo',
        'Atrofia muscular significativa',
        'Défice de força marcado',
        'Retração tendinosa geralmente severa',
      ],
      treatment: 'Reparação com prognóstico reservado. Considerar alternativas: transferência tendinosa, SCR ou prótese invertida.',
      prognosis: 'Mau prognóstico para reparação. Processo irreversível mesmo após reparação.',
      colorCode: 'danger',
    },
    {
      id: 'stage-4',
      label: 'Estágio 4 – Gordura > Músculo',
      description: 'Mais gordura que músculo. Infiltração gordurosa severa.',
      criteria: [
        'Proporção de gordura superior ao músculo',
        'Atrofia muscular severa',
        'Força muscular muito reduzida ou ausente',
        'Geralmente associada a roturas massivas crónicas',
      ],
      treatment: 'Reparação contraindicada. Opções: transferência tendinosa (latissimus dorsi/lower trapezius), SCR ou prótese invertida.',
      prognosis: 'Mau. Infiltração gordurosa irreversível. Reparação com taxa de falência muito elevada.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'O estágio 2 de Goutallier é o ponto de viragem. Acima deste estágio, a infiltração gordurosa é considerada irreversível e os resultados da reparação são significativamente piores.',
  pitfall: 'A classificação original foi descrita em TC. A avaliação em RM pode sobrestimar o grau de infiltração. Usar cortes sagitais em Y para avaliação mais precisa.',
  references: [
    {
      authors: 'Goutallier D, Postel JM, Bernageau J, Lavau L, Voisin MC',
      title: 'Fatty muscle degeneration in cuff ruptures. Pre- and postoperative evaluation by CT scan',
      journal: 'Clinical Orthopaedics and Related Research',
      year: 1994,
    },
  ],
};
