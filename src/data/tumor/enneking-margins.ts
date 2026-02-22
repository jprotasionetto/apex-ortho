import type { ClassificationData } from '@/types/classification.ts';

export const ennekingMarginsData: ClassificationData = {
  id: 'enneking-margins',
  name: 'Margens Cirurgicas de Enneking',
  author: 'Enneking',
  year: 1980,
  grades: [
    {
      id: 'intralesional',
      label: 'Intralesional',
      description: 'Plano de disseccao atraves do tumor',
      criteria: [
        'Disseccao passa pelo interior da lesao tumoral',
        'Tumor residual macroscopico ou microscopico no leito cirurgico',
        'Corresponde a curetagem ou debulking',
        'Contaminacao do campo cirurgico com celulas tumorais',
        'Adequada apenas para tumores benignos Estagio 1-2 com adjuvantes'
      ],
      treatment: 'Aceitavel para tumores benignos (curetagem + adjuvantes locais). INADEQUADA para tumores malignos isoladamente. Pode ser usada como parte de protocolo para baixo grau com radioterapia em situacoes excepcionais.',
      prognosis: 'Recidiva local elevada para malignos (>80%); aceitavel para benignos com adjuvantes',
      colorCode: 'danger'
    },
    {
      id: 'marginal',
      label: 'Marginal',
      description: 'Plano de disseccao pela zona reativa/pseudocapsula',
      criteria: [
        'Disseccao na zona reativa perilesional (pseudocapsula)',
        'Resseccao en bloc com pseudocapsula',
        'Podem existir ninhos de celulas tumorais na zona reativa (satelites)',
        'Margem macroscopicamente livre mas microscopicamente incerta',
        'Corresponde a excisao marginal ou excisao reativa'
      ],
      treatment: 'Aceitavel para tumores benignos ativos (Estagio 2) e agressivos selecionados. Para malignos: INADEQUADA - associar radioterapia se for a melhor margem possivel.',
      prognosis: 'Recidiva de 30-50% para malignos de alto grau; adequada para muitos benignos',
      colorCode: 'caution'
    },
    {
      id: 'wide',
      label: 'Ampla (Wide)',
      description: 'Plano de disseccao no tecido normal dentro do compartimento',
      criteria: [
        'Resseccao en bloc com manguito de tecido normal ao redor do tumor',
        'Toda a zona reativa incluida na peca',
        'Margem microscopica de tecido saudavel em todas as direcoes',
        'Geralmente 2-3cm de margem em tecido mole, 3-5cm em osso',
        'Permanece dentro do mesmo compartimento'
      ],
      treatment: 'Margem MINIMA aceitavel para sarcomas. Padrao para tumores malignos. Cirurgia de salvamento de membro com reconstrucao (endoprotese, enxerto biologico).',
      prognosis: 'Recidiva local 5-10% para malignos; prognostico determinado pelo estadio e histologia',
      colorCode: 'safe'
    },
    {
      id: 'radical',
      label: 'Radical',
      description: 'Resseccao de todo o compartimento',
      criteria: [
        'Resseccao de todo o compartimento anatomico envolvido',
        'Inclui todas as estruturas dentro do compartimento (osso, musculos, fascia)',
        'Amputacao e o exemplo classico de margem radical',
        'Menor taxa de recidiva local possivel',
        'Reservada para tumores com extensao intracompartimental extensa'
      ],
      treatment: 'Amputacao ou resseccao compartimental. Indicada quando margem ampla e impossivel de obter com cirurgia de salvamento. Raramente necessaria com quimioterapia neoadjuvante moderna.',
      prognosis: 'Menor recidiva local (<5%); nao altera sobrevida em relacao a margem ampla se margens adequadas',
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'Margem ampla e o objetivo minimo para sarcomas. A qualidade da margem cirurgica e o fator local mais importante para controle da doenca. Margens inferiores a ampla aumentam significativamente a recidiva.',
  pitfall: 'Contamination from poorly planned biopsy can compromise margins. O trajeto da biopsia DEVE ser ressecado en bloc com a peca cirurgica definitiva. Discutir com o cirurgiao oncologico ANTES da biopsia.',
  references: [
    'Enneking WF, Spanier SS, Goodman MA. A system for the surgical staging of musculoskeletal sarcoma. Clin Orthop Relat Res. 1980;(153):106-120.',
    'Kawaguchi N, Ahmed AR, Matsumoto S, et al. The concept of curative margin in surgery for bone and soft tissue sarcoma. Clin Orthop Relat Res. 2004;(419):165-172.'
  ]
};
