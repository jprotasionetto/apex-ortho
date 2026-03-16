import type { ClassificationData } from '@/types/tool';

export const winquistHansenData: ClassificationData = {
  id: 'winquist-hansen',
  name: 'Classificação de Winquist-Hansen — Cominuição Diafisária do Fêmur',
  author: 'Winquist RA, Hansen ST Jr.',
  year: 1980,
  epidemiology: 'Fraturas diafisárias do fêmur: 10/100.000/ano. Bimodal: jovens (alta energia, acidentes de trânsito) e idosos >65a (queda simples em osso osteoporótico). A classificação de Winquist-Hansen avalia a porcentagem de contato cortical remanescente após a cominuição, o que determina a estabilidade rotacional e axial após a hastelização intramedular. Graus 0-II: contato cortical >50% → estabilidade após haste; Graus III-IV: contato cortical <50% ou inexistente → instabilidade rotacional e telescoping → bloqueio estático obrigatório.',
  referenceImages: [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Osteonecrosis_femur_1.jpg',
      caption: 'Fêmur — radiografia AP (referência anatômica)',
      source: 'Wikimedia Commons — CC BY-SA 3.0',
    },
  ],
  mechanism: 'A cominuição resulta de energia crescente: impacto de baixa energia → fratura simples (Grau 0); energia crescente → fragmento em borboleta pequeno (I), grande (II); alta energia → cominuição com perda de >50% do contato (III) ou cominuição segmentar/circunferencial com perda total de contato (IV). A estabilidade da montagem haste + osso depende diretamente do contato cortical remanescente. Winquist III-IV exigem bloqueio estático proximal e distal para prevenir rotação e encurtamento.',
  grades: [
    {
      id: 'grade-0',
      label: 'Grau 0 — Sem Cominuição',
      description: 'Fratura simples, sem fragmentos de cominuição',
      criteria: [
        'Traço de fratura simples (transverso, oblíquo ou espiral)',
        '100% de contato cortical após redução',
        'Sem fragmento intermediário (borboleta)',
      ],
      treatment: 'Haste intramedular bloqueada. Bloqueio dinâmico (apenas distal ou proximal) pode ser suficiente. Carga precoce permitida. Consolidação esperada em 12-16 semanas.',
      prognosis: 'Excelente. Taxa de consolidação >98%. Baixo risco de encurtamento ou malrotação.',
      colorCode: 'safe',
    },
    {
      id: 'grade-i',
      label: 'Grau I — Borboleta Pequena',
      description: 'Fragmento em borboleta (cunha) com <25% da circunferência cortical',
      criteria: [
        'Fragmento em borboleta (cunha) único e pequeno',
        'Perda de contato cortical <25% da circunferência',
        '>75% de contato cortical remanescente',
      ],
      treatment: 'Haste intramedular bloqueada. Bloqueio dinâmico geralmente suficiente. Estabilidade rotacional preservada pelo contato cortical amplo.',
      prognosis: 'Excelente. Similar ao Grau 0. Consolidação previsível sem complicações significativas.',
      colorCode: 'safe',
    },
    {
      id: 'grade-ii',
      label: 'Grau II — Borboleta Grande',
      description: 'Fragmento em borboleta com 25-50% da circunferência cortical',
      criteria: [
        'Fragmento em borboleta (cunha) maior',
        'Perda de contato cortical 25-50% da circunferência',
        '≥50% de contato cortical remanescente',
      ],
      treatment: 'Haste intramedular com bloqueio estático recomendado (proximal + distal). Carga parcial inicial por 4-6 semanas. Dinamização aos 3 meses se calo insuficiente.',
      prognosis: 'Bom. Risco moderado de atraso na consolidação. Monitorar sinais de pseudoartrose.',
      colorCode: 'caution',
    },
    {
      id: 'grade-iii',
      label: 'Grau III — Cominuição >50%',
      description: 'Cominuição com perda de >50% de contato cortical — contato mínimo remanescente',
      criteria: [
        'Múltiplos fragmentos de cominuição',
        'Perda de contato cortical >50% (mas algum contato existe)',
        'Instabilidade rotacional significativa',
        'Encurtamento tende a ocorrer sem bloqueio estático',
      ],
      treatment: 'Haste intramedular com bloqueio estático obrigatório (proximal + distal). NÃO comprimir foco — princípio de ponte biológica. Carga parcial prolongada. Considerar enxerto ósseo se atraso na consolidação.',
      prognosis: 'Reservado. Risco significativo de pseudoartrose (5-10%), consolidação viciosa rotacional e encurtamento. Tempo de consolidação: 16-24 semanas.',
      colorCode: 'danger',
    },
    {
      id: 'grade-iv',
      label: 'Grau IV — Cominuição Segmentar / Perda Total',
      description: 'Cominuição circunferencial com perda total de contato entre fragmentos principais',
      criteria: [
        'Cominuição segmentar ou circunferencial completa',
        'Nenhum contato cortical entre fragmentos principal proximal e distal',
        'Instabilidade rotacional e axial completa',
        'Corresponde ao AO tipo 32-C',
      ],
      treatment: 'Haste intramedular com bloqueio estático obrigatório. Ponte biológica — NÃO tentar redução aberta dos fragmentos. Em politrauma: DCO (fixador externo temporário) → conversão para haste quando paciente estável. Enxerto ósseo autólogo ou dinamização tardia se pseudoartrose.',
      prognosis: 'Reservado a mau. Taxa de pseudoartrose: 10-15%. Risco de infecção e falha do implante aumentado. Consolidação: 20-30+ semanas. Pode necessitar procedimentos secundários.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Regra prática: Winquist 0-II = bloqueio dinâmico pode bastar (estabilidade pelo contato cortical). Winquist III-IV = bloqueio estático OBRIGATÓRIO (sem contato cortical suficiente para estabilidade). A classificação é avaliada na radiografia pós-redução, não na pré-operatória. Correlação AO: Grau 0 = 32A, Grau I-II = 32B, Grau III-IV = 32C.',
  pitfall: 'Não confundir o grau de cominuição na radiografia inicial (com encurtamento e sobreposição) com a cominuição real — avaliar APÓS redução. Em fraturas expostas (Gustilo), o grau de cominuição frequentemente é subestimado na radiografia. Winquist III-IV com bloqueio dinâmico → encurtamento progressivo e malrotação.',
  references: [
    { authors: 'Winquist RA, Hansen ST Jr, Clawson DK', title: 'Closed intramedullary nailing of femoral fractures. A report of five hundred and twenty cases', journal: 'J Bone Joint Surg Am', year: 1984 },
  ],
};
