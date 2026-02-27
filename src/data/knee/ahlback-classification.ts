import type { ClassificationData } from '@/types/classification';

export const ahlbackClassification: ClassificationData = {
  id: 'ahlback-classification',
  name: 'Classificação de Ahlback (Artrose do Joelho)',
  author: 'Ahlback',
  year: 1968,
  epidemiology: 'Ahlback (1968) descreve a progressão radiográfica da gonartrose baseada no compartimento tibioFemoral. Utilizado mais na Europa e nos países escandinavos; concorre com Kellgren-Lawrence (mais global) e OARSI para pesquisa. Artrose do joelho: prevalência radiográfica 30% em >45 anos, 60% em >65 anos — o mesmo contexto epidemiológico do K-L. Ahlback foca na perda óssea vertical = parâmetro de severidade operatória mais relevante (planificação de cunhas metálicas, aumento do platô tibial). Distinção prática: Grau I–II = sem perda óssea (conservador/osteotomia); Grau III–V = perda óssea progressiva (ATJ com substituição óssea). Correlação com K-L: Grau I ≈ K-L 3, Grau II ≈ K-L 4, Grau III–V: além do escopo do K-L (K-L 4 cobre todo o espectro com "estreitamento marcado"). Osteotomia tibial alta (HTO): indicada em Ahlback I–II + varo + <55 anos + compartimento medial isolado.',
  mechanism: 'Mesma fisiopatologia da gonartrose degenerativa (ver Kellgren-Lawrence). Especificidade de Ahlback: foca na perda PROGRESSIVA DE SUBSTÂNCIA ÓSSEA — estádio tardio da artrose quando K-L 4 já não discrimina. Grau I: estreitamento >50% sem contato ósseo — cartilagem residual presente. Grau II: espaço obliterado → contato osso-osso (eburnação completa) → sem cartilagem. Graus III–V: perda real de substância óssea (subchondral bone loss) medida verticalmente — osso subcondral se desgasta progressivamente: <5mm (III), 5–10mm (IV), >10mm com subluxação (V). Subluxação em Grau V: perda óssea assimétrica + colapso → migração lateral do plateau tibial → instabilidade ligamentar secundária por relaxamento (medial) e tensão (lateral). Planificação cirúrgica da ATJ: a quantidade de perda óssea (Ahlback III–V) determina a necessidade de cunhas metálicas tibiais, bloco de aumento ou hastes de fixação.',
  grades: [
    {
      id: 'grade-1',
      label: 'Grau I',
      description: 'Redução do espaço articular (>50% de estreitamento)',
      criteria: [
        'Estreitamento do espaço articular superior a 50%',
        'Sem obliteração completa',
        'Esclerose subcondral leve'
      ],
      treatment: 'Tratamento conservador: perda de peso, fisioterapia, anti-inflamatórios, viscossuplementação',
      prognosis: 'Progressão lenta com medidas conservadoras adequadas',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau II',
      description: 'Obliteração do espaço articular',
      criteria: [
        'Espaço articular completamente obliterado',
        'Contato osso-osso aparente',
        'Esclerose subcondral moderada'
      ],
      treatment: 'Tratamento conservador otimizado; considerar osteotomia em pacientes jovens e ativos com deformidade unicompartimental',
      prognosis: 'Progressão moderada; pode necessitar intervenção cirúrgica',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau III',
      description: 'Atricão óssea menor (<5mm)',
      criteria: [
        'Desgaste ósseo menor que 5mm',
        'Esclerose subcondral significativa',
        'Osteófitos evidentes'
      ],
      treatment: 'Osteotomia (pacientes jovens selecionados) ou artroplastia unicompartimental/total',
      prognosis: 'Progressão esperada sem intervenção cirúrgica',
      colorCode: 'danger'
    },
    {
      id: 'grade-4',
      label: 'Grau IV',
      description: 'Atricão óssea moderada (5-10mm)',
      criteria: [
        'Desgaste ósseo entre 5 e 10mm',
        'Deformidade angular evidente',
        'Possível subluxação leve'
      ],
      treatment: 'Artroplastia total do joelho',
      prognosis: 'Indicação cirúrgica na maioria dos casos',
      colorCode: 'danger'
    },
    {
      id: 'grade-5',
      label: 'Grau V',
      description: 'Atricão óssea severa (>10mm) com subluxação',
      criteria: [
        'Desgaste ósseo superior a 10mm',
        'Subluxação tibial evidente',
        'Deformidade angular severa',
        'Instabilidade ligamentar secundária'
      ],
      treatment: 'Artroplastia total do joelho; pode necessitar implantes com maior constrição ou cunhas metálicas',
      prognosis: 'Necessidade de intervenção cirúrgica; reconstrução mais complexa',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Classificação mais utilizada na Europa; radiografia em carga (AP em apoio monopodálico) é essencial para estadiamento preciso',
  pitfall: 'Radiografia sem carga pode subestimar significativamente o grau de artrose',
  references: [
    'Ahlback S. Osteoarthrosis of the knee. A radiographic investigation. Acta Radiol Diagn. 1968;Suppl 277:7-72.'
  ]
};
