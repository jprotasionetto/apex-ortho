import type { ClassificationData } from '@/types/tool';

export const transtrocantericaAOData: ClassificationData = {
  id: 'transtrocanterica-ao',
  name: 'Classificação AO — Fraturas Transtrocantéricas do Fêmur (31-A)',
  author: 'Müller / AO Foundation',
  year: 2018,
  epidemiology: 'Fraturas transtrocantéricas representam 50% de todas as fraturas proximais do fêmur; incidência: 120–200/100.000/ano em >80 anos. Mortalidade em 1 ano: 15–35% (comorbidades e imobilidade pós-fratura). Distribuição: AO 31-A1 estável: 40–50%; 31-A2 instável: 40–45%; 31-A3 (oblíqua reversa): 5–15%. Objetivo: cirurgia dentro de 48h → redução de mortalidade em 30 dias de ~30%. Complicação mais temida: cut-out do parafuso cefálico (TAD>25mm). Haste intramedular (PFNA, Gamma nail, TFN-A): implante de eleição para 31-A2 instável e 31-A3.',
  mechanism: 'Fraturas trocantéricas ocorrem FORA da cápsula articular → suprimento vascular da cabeça femoral preservado → sem risco de NAV (diferente do colo femoral). Mecanismo: queda com impacto lateral sobre trocânter em idoso osteoporótico → força axial + torção. Estabilidade de A1: parede posteromedial (spur de Ramadier) intacta → carga axial comprime os fragmentos. Instabilidade de A2: cominuição medial → perda do spur → colapso em varo com DHS. Oblíqua reversa (A3): traço de superomedial para inferolateral → fragmento distal puxado lateralmente pelos abdutores → DHS falha catastroficamente (parafuso deslizante não controla migração lateral); apenas haste intramedular controla. TAD de Baumgaertner: preditor de cut-out; TAD<25mm = risco<2%, TAD>45mm = risco>50%.',
  grades: [
    {
      id: 'ao-31a1',
      label: 'AO 31-A1 — Transtrocantérica Simples (Estável)',
      description: 'Fratura em 2 partes — traço único, parede posteromedial íntegra, geometria estável',
      criteria: [
        'AO 31-A1.1: fratura pertrocantérica simples — traço do grande trocânter até a cortical medial',
        'AO 31-A1.2: fratura pertrocantérica com pequeno trocânter — pequeno trocânter destacado mas parede medial intacta',
        'AO 31-A1.3: fratura intertrocantérica — traço mais medial, entre os trocânteres',
        'Parede posteromedial (spur posteromedial) ÍNTEGRA — estabilidade mecânica',
        'Classificação de Evans: Grupo I (estável) — traço de medial para lateral, oblíquo para cima',
        'Sem extensão subtrocantérica',
        'Padrão mais comum (40-50% das fraturas trocantéricas)'
      ],
      treatment: 'Cirúrgico: DHS (Dynamic Hip Screw) com placa de 4 furos — padrão ouro para A1. Haste trocantérica curta (proximal femoral nail anti-rotation — PFNA) também adequada. Carga progressiva no 1° dia pós-op. Meta: TAD (tip-apex distance) < 25 mm para posicionamento do parafuso cefálico.',
      prognosis: 'Excelente prognóstico. Consolidação em 8-12 semanas. Mortalidade hospitalar: 5-10% (comorbidades do idoso). Recuperação funcional em > 80% se cirurgia precoce (< 48h).',
      colorCode: 'safe'
    },
    {
      id: 'ao-31a2',
      label: 'AO 31-A2 — Transtrocantérica com Cominuição Posteromedial (Instável)',
      description: 'Fratura em 3 partes ou mais — cominuição da parede posteromedial, instabilidade aumentada',
      criteria: [
        'AO 31-A2.1: fratura com um fragmento intermediário medial',
        'AO 31-A2.2: fratura com dois fragmentos intermediários mediais',
        'AO 31-A2.3: fratura com mais de dois fragmentos intermediários (grande cominuição medial)',
        'Cominuição da cortical posteromedial — perda do spur posteromedial',
        'INSTÁVEL mecanicamente — risco de colapso em varo e falha do implante com DHS',
        'Extensão da fratura até o trocânter menor — fragmento destacado',
        'Evans Grupo I instável ou Grupo II parcial'
      ],
      treatment: 'Haste intramedular (PFNA, Gamma nail, TFN) preferida sobre DHS para A2 instável — suporte do spur medial pela haste endomedular. DHS pode ser usado em A2.1 selecionados com bom suporte medial. Reconstrução do spur medial não é necessária — haste intramedular compensa a instabilidade.',
      prognosis: 'Moderado. Maior risco de falha do implante se DHS usado em A2.2/A2.3. Com haste intramedular: resultados comparáveis ao A1. Consolidação em 10-14 semanas.',
      colorCode: 'caution'
    },
    {
      id: 'ao-31a3',
      label: 'AO 31-A3 — Oblíqua Reversa / Transversa (Muito Instável)',
      description: 'Fratura oblíqua reversa ou transversa — traço de lateral para medial, fragmento distal com tendência à migração lateral',
      criteria: [
        'AO 31-A3.1: fratura oblíqua reversa simples — traço oblíquo de superomedial para inferolateral',
        'AO 31-A3.2: fratura transversa simples — traço perpendicular ao eixo femoral',
        'AO 31-A3.3: fratura oblíqua reversa/transversa multifragmentária',
        'Traço oblíquo REVERSO ao padrão habitual — de medial-superior para lateral-inferior',
        'Fragmento distal sofre migração LATERAL pelo tensor da fáscia lata e abdutores',
        'DHS CONTRAINDICADO — colapso medial inevitável com DHS (sem suporte lateral)',
        'Evans Grupo II reverso — padrão de alta instabilidade',
        'Frequentemente confundida com fratura subtrocantérica'
      ],
      treatment: 'Haste intramedular LONGA OBRIGATÓRIA (femoral nail longo — comprimento suficiente para bypassar o istmo femoral). DHS está CONTRAINDICADO — alta taxa de falha por colapso medial e migração lateral. Redução fechada difícil — joystick no fragmento proximal, tração suave. Se irredutível fechado: redução aberta limitada + haste.',
      prognosis: 'Prognóstico mais reservado que A1 e A2. Maior taxa de falha de implante se não tratado com haste longa. Pseudartrose: 5-8% com tratamento inadequado. Com haste longa adequada: consolidação em 12-16 semanas.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'TAD (Tip-Apex Distance) de Baumgaertner: soma das distâncias entre a ponta do parafuso cefálico e o ápice da cabeça femoral nas incidências AP e lateral (corrigidas pela ampliação). TAD < 25 mm: taxa de cut-out < 2%. TAD > 45 mm: taxa de cut-out > 50%. Posicionamento ideal do parafuso: centro-centro na cabeça femoral (zona de Baumgaertner) — não inferior (risco de cut-out inferior) nem superior. Classificação de Evans: I (estável) = traço de medial para lateral, oblíquo para cima (como escrita). II (instável/reverso) = oblíquo reverso. O trocânter menor deve ser avaliado: destacado mas sem cominuição medial = A1.2 (estável com DHS); cominuição medial associada = A2 (instável — preferir haste).',
  pitfall: 'Armadilha clássica: fratura A3 (oblíqua reversa) tratada com DHS. O fragmento distal migra lateralmente puxado pelos abdutores, e o parafuso deslizante do DHS não tem como controlar esse padrão — resulta em falha catastrófica. SEMPRE classificar corretamente antes de escolher o implante. Em caso de dúvida entre A2 instável e A3: usar HASTE INTRAMEDULAR. Cirurgia < 48h: reduz mortalidade em 30 dias em idosos com fratura trocantérica. Anticoagulação: iniciar 12h após cirurgia (risco de TEP é alto nesta população).',
  references: [
    { authors: 'Baumgaertner MR, Curtin SL, Lindskog DM, Keggi JM', title: 'The value of the tip-apex distance in predicting failure of fixation of peritrochanteric fractures of the hip', journal: 'J Bone Joint Surg Am', year: 1995 },
    { authors: 'Parker MJ, Handoll HH', title: 'Gamma and other cephalocondylic intramedullary nails versus extramedullary implants for extracapsular hip fractures in adults', journal: 'Cochrane Database Syst Rev', year: 2010 }
  ]
};
