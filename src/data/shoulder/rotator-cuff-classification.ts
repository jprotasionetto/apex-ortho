import type { ClassificationData } from '@/types/classification.ts';

export const rotatorCuffClassificationData: ClassificationData = {
  id: 'rotator-cuff-classification',
  name: 'Classificação de Cofield – Roturas da Coifa dos Rotadores',
  author: 'Cofield',
  year: 1982,
  epidemiology: 'Roturas da coifa são extremamente prevalentes: 51% dos >80a assintomáticos têm rotura completa (Yamaguchi, JSES 2006). Incidência de roturas sintomáticas: 4–5/1.000/ano. Distribuição por tamanho: pequena 20%, média 30%, grande 30%, massiva 20%. Taxa de re-rotura após reparação: pequena <10%, média 15–25%, grande 25–40%, massiva 40–60%. Fatores de risco para re-rotura: tamanho da rotura, Goutallier ≥2, retração tendinosa Patte 3, qualidade óssea e compliance de fisioterapia.',
  mechanism: 'Zona hipovascular de Codman (área crítica): 1cm proximal à inserção do supraespinhoso na tuberosidade maior → microtrauma cumulativo → roturas parciais → progressão para completa. Footprint anatômica do supraespinhoso: 16mm AP × 11mm ML. Classificação de Cofield: mede dimensão ântero-posterior da rotura na superfície bursal. Reparação dupla-fila: restaura o footprint anatômica → maior área de cicatrização vs fila simples. Retração >5cm = mobilização tendinosa difícil (releases intervalares, coracoumeral). Roturas massivas de Cofield ≥2 tendões completos e >5cm.',
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
