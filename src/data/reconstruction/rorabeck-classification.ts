import type { ClassificationData } from '@/types/tool';

export const rorabeckClassificationData: ClassificationData = {
  id: 'rorabeck-classification',
  name: 'Classificação de Rorabeck (Lewis-Rorabeck) — Fraturas Periprotésicas do Fêmur Distal (ATJ)',
  author: 'Rorabeck CH, Taylor JW',
  year: 1999,
  epidemiology: 'Fraturas periprotésicas supracondilianas do fêmur após artroplastia total do joelho (ATJ): incidência 0,3-2,5% das ATJs primárias, até 4% das revisões. Incidência crescente com envelhecimento populacional e aumento do número de ATJs. Fatores de risco: osteoporose, notching anterior da cortical femoral, revisão de ATJ, artrite reumatóide, corticoterapia crónica. A maioria ocorre após queda de baixa energia em pacientes idosos.',
  mechanism: 'Classificação baseada em 2 variáveis: (1) DESVIO da fratura e (2) ESTABILIDADE do componente femoral da prótese. Tipo I: não deslocada, prótese estável — menor energia. Tipo II: deslocada, prótese estável — energia moderada. Tipo III: qualquer fratura com prótese instável (solta) — independentemente do desvio, a prótese precisa ser revisada. A distinção B1 vs B2 (do tipo II) nem sempre é clara e pode necessitar TC ou fluoroscopia intraoperatória.',
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I — Não Deslocada, Prótese Estável',
      description: 'Fratura sem desvio significativo com componente femoral bem fixo',
      criteria: [
        'Fratura supracondiliana ou intercondiliana sem desvio significativo',
        'Componente femoral estável (sem sinais de afrouxamento)',
        'Linhas radiolucentes <2mm, sem migração do componente',
        'Alinhamento do membro preservado',
      ],
      treatment: 'Tratamento conservador possível: brace articulado ou gesso funcional por 6-8 semanas com carga parcial progressiva. Monitorar com radiografias semanais para detectar desvio secundário. RAFI com placa periprotésica (LISS) se desvio secundário.',
      prognosis: 'Bom. Consolidação esperada em 8-12 semanas. Risco de rigidez pela imobilização — fisioterapia precoce essencial.',
      colorCode: 'safe',
    },
    {
      id: 'type-ii',
      label: 'Tipo II — Deslocada, Prótese Estável',
      description: 'Fratura com desvio significativo mas componente femoral bem fixo',
      criteria: [
        'Fratura supracondiliana com desvio >5mm ou angulação >5°',
        'Componente femoral estável (sem sinais de afrouxamento)',
        'Encurtamento do membro frequente',
        'Fragmento distal tende a deslocar em extensão (tração do gastrocnêmio)',
      ],
      treatment: 'RAFI obrigatória. Placa bloqueada periprotésica (LISS/LCP distal femur) por abordagem lateral. Parafusos unicorticais no segmento protésico + bicorticais acima. Alternativa: haste retrógrada femoral se design protésico permite (box aberto). Enxerto se defeito ósseo.',
      prognosis: 'Moderado a bom se redução adequada. Taxa de consolidação: 85-90%. Risco de malunion, rigidez e perda de amplitude.',
      colorCode: 'caution',
    },
    {
      id: 'type-iii',
      label: 'Tipo III — Prótese Instável (Solta)',
      description: 'Fratura periprotésica com componente femoral solto — qualquer grau de desvio',
      criteria: [
        'Sinais radiográficos de afrouxamento do componente femoral:',
        '- Linhas radiolucentes progressivas >2mm',
        '- Migração/subsidência do componente',
        '- Alteração do alinhamento protésico',
        'Pode ser com ou sem desvio da fratura',
        'Dor pré-existente no joelho frequente (afrouxamento crónico)',
      ],
      treatment: 'Revisão obrigatória da ATJ com haste longa cimentada ou press-fit que bypassa a fratura + RAFI da fratura. Artroplastia de revisão com componente femoral de revisão (haste intramedular distal). Enxerto ósseo estrutural se perda óssea significativa. Mega-prótese (tumor prosthesis) em casos extremos com perda óssea maciça.',
      prognosis: 'Reservado. Cirurgia de alta complexidade e morbidade. Taxa de complicações: 25-40%. Re-revisão: 10-20% em 5 anos. Mortalidade perioperatória: 3-5% (população idosa).',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Regra prática: Tipo I (estável, sem desvio) → pode ser conservador. Tipo II (estável, com desvio) → RAFI com placa. Tipo III (prótese solta) → revisão da ATJ obrigatória. O notching anterior da cortical femoral durante a preparação do componente femoral é fator de risco importante — reduzir o tamanho do componente ou usar guia de corte específico. TAC pode ser necessária para avaliar afrouxamento questionável.',
  pitfall: 'Não confundir Tipo II com Tipo III — sinais subtis de afrouxamento podem ser difíceis de identificar nas radiografias. Solicitar TC se dúvida. Em Tipo III, NÃO realizar apenas RAFI sem revisão da prótese — fixar a fratura sem trocar a prótese solta leva a falha precoce. Avaliar sempre a qualidade óssea (Dorr tipo C = alto risco de falha).',
  references: [
    { authors: 'Rorabeck CH, Taylor JW', title: 'Periprosthetic fractures of the femur complicating total knee arthroplasty', journal: 'Orthop Clin North Am', year: 1999 },
    { authors: 'Kim KI, Egol KA, Hozack WJ, Parvizi J', title: 'Periprosthetic fractures after total knee arthroplasties', journal: 'Clin Orthop Relat Res', year: 2006 },
  ],
};
