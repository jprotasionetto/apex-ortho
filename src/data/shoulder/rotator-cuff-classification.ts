import type { ClassificationData } from '@/types/classification.ts';

export const rotatorCuffClassificationData: ClassificationData = {
  id: 'rotator-cuff-classification',
  name: 'Classificação de Cofield – Roturas da Coifa dos Rotadores',
  author: 'Cofield',
  year: 1982,
  grades: [
    {
      id: 'small',
      label: 'Pequena (<1 cm)',
      description: 'Rotura pequena com menos de 1 cm de diâmetro.',
      criteria: [
        'Diâmetro da rotura inferior a 1 cm',
        'Geralmente envolvimento parcial do supraespinhoso',
        'Retração tendinosa mínima',
        'Qualidade muscular preservada',
      ],
      treatment: 'Reparação artroscópica com fila simples. Excelente potencial de cicatrização.',
      prognosis: 'Excelente. Taxa de cicatrização >95%.',
      colorCode: 'safe',
    },
    {
      id: 'medium',
      label: 'Média (1-3 cm)',
      description: 'Rotura média entre 1 e 3 cm de diâmetro.',
      criteria: [
        'Diâmetro entre 1-3 cm',
        'Geralmente rotura completa do supraespinhoso',
        'Retração tendinosa moderada',
        'Possível envolvimento do infraespinhoso anterior',
      ],
      treatment: 'Reparação artroscópica com dupla fila. Mobilização tendinosa pode ser necessária.',
      prognosis: 'Bom. Taxa de cicatrização 80-90%.',
      colorCode: 'caution',
    },
    {
      id: 'large',
      label: 'Grande (3-5 cm)',
      description: 'Rotura grande entre 3 e 5 cm de diâmetro.',
      criteria: [
        'Diâmetro entre 3-5 cm',
        'Envolve geralmente supraespinhoso e infraespinhoso',
        'Retração tendinosa significativa',
        'Possível infiltração gordurosa muscular',
      ],
      treatment: 'Reparação artroscópica com dupla fila. Considerar patch de aumento. Avaliar Goutallier e retração.',
      prognosis: 'Moderado. Taxa de cicatrização 60-80%. Risco de re-rotura.',
      colorCode: 'danger',
    },
    {
      id: 'massive',
      label: 'Massiva (>5 cm)',
      description: 'Rotura massiva com mais de 5 cm ou envolvendo 2+ tendões completos.',
      criteria: [
        'Diâmetro superior a 5 cm',
        'Envolvimento de 2 ou mais tendões',
        'Retração tendinosa severa',
        'Frequente infiltração gordurosa (Goutallier 3-4)',
        'Possível artropatia da coifa (Hamada)',
      ],
      treatment: 'Opções: reparação parcial, SCR (reconstrução capsular superior), transferência tendinosa (latissimus dorsi/lower trapezius), prótese invertida se artropatia.',
      prognosis: 'Reservado para reparação. Taxa de re-rotura 40-60%. Prótese invertida se artropatia.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'O tamanho da rotura por si só não determina o tratamento. Avaliar sempre: qualidade muscular (Goutallier), retração tendinosa, idade e nível funcional do doente.',
  pitfall: 'Roturas massivas com Goutallier ≥3 têm mau prognóstico para reparação. Considerar alternativas como SCR ou prótese invertida.',
  references: [
    {
      authors: 'Cofield RH',
      title: 'Subscapular muscle transposition for repair of chronic rotator cuff tears',
      journal: 'Surgery, Gynecology & Obstetrics',
      year: 1982,
    },
  ],
};
