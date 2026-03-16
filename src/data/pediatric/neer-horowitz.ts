import type { ClassificationData } from '@/types/tool';

export const neerHorowitzData: ClassificationData = {
  id: 'neer-horowitz',
  name: 'Classificação de Neer-Horowitz — Fraturas do Úmero Proximal Pediátrico',
  author: 'Neer CS II, Horowitz BS',
  year: 1965,
  epidemiology: 'Fraturas do úmero proximal em crianças e adolescentes: ~5% das fraturas pediátricas. Pico de incidência: 11-15 anos (durante o estirão de crescimento). Meninos > meninas (2:1). A fise proximal do úmero contribui com 80% do crescimento longitudinal do úmero — enorme potencial de remodelação. Mecanismo: queda sobre mão estendida ou trauma direto no ombro. Maioria são fraturas metafisárias (Salter-Harris tipo II) através da fise proximal.',
  mechanism: 'Classificação baseada no DESLOCAMENTO do fragmento distal em relação à largura da diáfise do úmero na radiografia AP. O potencial de remodelação é diretamente proporcional à quantidade de crescimento remanescente na fise proximal do úmero. Crianças <10 anos: até 40-50° de angulação e 50% de translação remodelam completamente. Adolescentes >12 anos: potencial de remodelação limitado — critérios mais rigorosos para aceitação.',
  grades: [
    {
      id: 'grade-i',
      label: 'Grau I — Deslocamento <5mm',
      description: 'Fratura com deslocamento mínimo, <1/3 da largura do eixo',
      criteria: [
        'Deslocamento do fragmento <5mm',
        'Menos de 1/3 da largura da diáfise',
        'Angulação <20°',
        'Sem encurtamento significativo',
      ],
      treatment: 'Conservador: tipoia simples por 2-3 semanas, seguida de mobilização progressiva. Sem necessidade de redução. Consolidação: 3-4 semanas.',
      prognosis: 'Excelente. Consolidação rápida e remodelação completa em todas as idades. Retorno pleno às atividades em 4-6 semanas.',
      colorCode: 'safe',
    },
    {
      id: 'grade-ii',
      label: 'Grau II — Deslocamento 1/3 da Largura',
      description: 'Deslocamento até 1/3 da largura da diáfise',
      criteria: [
        'Deslocamento entre 1/3 da largura da diáfise',
        'Angulação 20-40°',
        'Contato cortical >2/3 preservado',
      ],
      treatment: 'Conservador na maioria: tipoia e bandagem tipo Velpeau por 3-4 semanas. Em <10 anos: aceitar até 40° de angulação (remodelação). Em >12 anos: considerar redução incruenta se angulação >20-30°.',
      prognosis: 'Excelente a bom. Remodelação completa esperada em crianças jovens. Em adolescentes, pode haver leve perda de amplitude que raramente é funcional.',
      colorCode: 'safe',
    },
    {
      id: 'grade-iii',
      label: 'Grau III — Deslocamento 2/3 da Largura',
      description: 'Deslocamento de 2/3 da largura da diáfise',
      criteria: [
        'Deslocamento entre 1/3 e 2/3 da largura da diáfise',
        'Angulação 40-60°',
        'Contato cortical 1/3 preservado',
      ],
      treatment: 'Em <10 anos: conservador pode ser aceito (alta capacidade de remodelação). Em >12 anos: redução incruenta sob sedação + tipoia/Velpeau. Se redução instável: fios de Kirschner percutâneos ou fixação com hastes elásticas (ESIN/TEN). Evitar abordagem aberta.',
      prognosis: 'Bom. Crianças jovens: remodelação esperada. Adolescentes: resultado depende da qualidade da redução. Complicações raras: lesão do plexo braquial (<1%).',
      colorCode: 'caution',
    },
    {
      id: 'grade-iv',
      label: 'Grau IV — Deslocamento >2/3 (Completo)',
      description: 'Deslocamento completo ou >2/3 da largura da diáfise',
      criteria: [
        'Deslocamento >2/3 da largura da diáfise',
        'Pode haver perda completa de contato cortical',
        'Angulação >60° frequente',
        'Fragmento proximal em abdução e rotação externa (pela tração do manguito rotador)',
      ],
      treatment: 'Redução obrigatória. Redução incruenta sob anestesia geral: tração + adução + rotação interna. Se irredutível: redução aberta (interposição de tendão longo do bíceps ou periósteo). Fixação: fios K percutâneos, ESIN (hastes elásticas de titânio), ou parafusos canulados em adolescentes maduros.',
      prognosis: 'Moderado a bom se reduzido adequadamente. Em crianças <10 anos com crescimento residual: potencial de remodelação ainda significativo. Em adolescentes com fise quase fechada: menor remodelação — resultado mais dependente da redução cirúrgica.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Regra de ouro: a idade do paciente determina a tolerância ao desvio. <10 anos: aceitar até Grau III (remodelação pela fise proximal, que contribui 80% do crescimento do úmero). >12 anos: reduzir Grau III-IV. O fragmento proximal é desviado pelo manguito rotador (abdução + rotação externa) e o distal pelo peitoral maior (adução + rotação interna).',
  pitfall: 'NÃO confundir com a classificação de Neer adulta (que usa "partes" e não "graus"). Em adolescentes com fise quase fechada, a capacidade de remodelação é muito limitada — não aceitar desvios significativos esperando remodelação. Avaliar sempre lesão neurovascular (plexo braquial, artéria axilar) em fraturas de alta energia.',
  references: [
    { authors: 'Neer CS II, Horowitz BS', title: 'Fractures of the proximal humeral epiphyseal plate', journal: 'Clin Orthop Relat Res', year: 1965 },
    { authors: 'Beaty JH, Kasser JR', title: 'Rockwood and Wilkins Fractures in Children — Proximal Humerus', journal: 'Wolters Kluwer', year: 2020 },
  ],
};
