import type { ClassificationData } from '@/types/tool';

export const royCamilleClassificationData: ClassificationData = {
  id: 'roy-camille-classification',
  name: 'Classificação de Roy-Camille — Fraturas Transversas do Sacro',
  author: 'Roy-Camille R, Saillant G, Gagna G, Mazel C',
  year: 1985,
  epidemiology: 'Fraturas do sacro: presentes em 30-45% das fraturas do anel pélvico de alta energia. Frequentemente subdiagnosticadas (até 50% não identificadas na radiografia inicial). A classificação de Roy-Camille (1985) é específica para fraturas TRANSVERSAS do sacro (padrão horizontal/transverso), complementando as zonas de Denis (1988) que descrevem fraturas VERTICAIS. Fraturas transversas do sacro: mais comuns nas zonas II-III de Denis. Associação com déficit neurológico: 25-50% (raízes sacrais, cauda equina). Incidência real subestimada pela dificuldade diagnóstica.',
  referenceImages: [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Gray241.png',
      caption: 'Anatomia do sacro — vista anterior (Gray\'s Anatomy)',
      source: 'Wikimedia Commons — Domínio Público (Gray\'s Anatomy)',
    },
  ],
  mechanism: 'Fraturas transversas do sacro resultam de carga axial direta sobre o sacro (queda de altura sentado, acidente de motocicleta) ou mecanismo de flexão-compressão. Roy-Camille classifica em 3 tipos pela angulação e deslocamento do fragmento distal (cóccix + sacro distal) em relação ao proximal: Tipo 1: sem angulação (flexão pura), Tipo 2: com angulação posterior (flexão + deslocamento), Tipo 3: com deslocamento anterior completo do fragmento distal (máxima instabilidade). Tipos mais altos correlacionam com maior taxa de déficit neurológico. Strange-Vognsen & Lebech (1991) adicionaram Tipo 4: complicada com fragmento de corpo vertebral no canal.',
  grades: [
    {
      id: 'type-1',
      label: 'Tipo 1 — Flexão sem Angulação',
      description: 'Fratura transversa com deslocamento anterior do fragmento distal, sem angulação',
      criteria: [
        'Fratura transversa do sacro (abaixo de S2 geralmente)',
        'Fragmento distal deslocado anteriormente em relação ao proximal',
        'Sem angulação significativa entre os fragmentos',
        'Cifose sacral mantida ou minimamente alterada',
      ],
      treatment: 'Conservador se neurologicamente intacto e deslocamento mínimo: repouso no leito 4-6 semanas, carga progressiva. Cirurgia se déficit neurológico ou deslocamento >1cm: descompressão + fixação lumbopélvica (parafusos ilíacos + barra conectando à coluna lombar).',
      prognosis: 'Bom se neurologicamente intacto. Déficit neurológico parcial: recuperação em 60-80% com descompressão precoce.',
      colorCode: 'safe',
    },
    {
      id: 'type-2',
      label: 'Tipo 2 — Flexão com Angulação Posterior',
      description: 'Fragmento distal angulado posteriormente (cifose acentuada do sacro distal)',
      criteria: [
        'Fratura transversa com angulação posterior do fragmento distal',
        'Fragmento distal flexionado em relação ao proximal (cifose sacral aumentada)',
        'Compressão das raízes sacrais na superfície anterior do fragmento angulado',
        'Déficit neurológico mais frequente que Tipo 1',
      ],
      treatment: 'Redução + fixação na maioria. Descompressão posterior (laminectomia sacral) se déficit neurológico. Fixação lumbopélvica: parafusos pediculares L4-L5 + parafusos ilíacos bilaterais + barras longitudinais. Objetivo: restaurar o alinhamento sacral e descomprimir raízes.',
      prognosis: 'Moderado. Déficit neurológico presente em 30-50%. Recuperação neurológica incompleta frequente (disfunção vesical, sexual e intestinal). Dor crónica sacrococcígea em 20-30%.',
      colorCode: 'caution',
    },
    {
      id: 'type-3',
      label: 'Tipo 3 — Deslocamento Anterior Completo',
      description: 'Fragmento distal completamente deslocado anteriormente para dentro da pelve',
      criteria: [
        'Deslocamento anterior completo do fragmento distal',
        'Perda total de contato entre fragmentos',
        'Fragmento distal projetado para dentro da cavidade pélvica',
        'Lesão neurológica quase universal (raízes sacrais / cauda equina)',
        'Lesão da fáscia presacral e estruturas pélvicas possível',
      ],
      treatment: 'Cirurgia urgente obrigatória. Descompressão + redução + fixação lumbopélvica robusta. Abordagem posterior (mais comum) ou combinada posterior + transretal em casos extremos. Fixação: parafusos pediculares L4-S1 + parafusos ilíacos bilaterais. Derivação urinária frequentemente necessária.',
      prognosis: 'Reservado a mau. Déficit neurológico em >90%. Recuperação neurológica completa rara. Disfunção vesical, intestinal e sexual permanente frequente. Dor crónica significativa.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Complementar com as Zonas de Denis para fraturas VERTICAIS do sacro: Zona I (alar) = déficit raro; Zona II (foraminal) = déficit em 25-30%; Zona III (central/canal) = déficit em 50-60%. Roy-Camille é específico para fraturas TRANSVERSAS. O perfil lateral ou TC sagital do sacro é essencial para classificar — a radiografia AP frequentemente não demonstra a angulação. RM para avaliar raízes sacrais e cauda equina.',
  pitfall: 'Fraturas transversas do sacro são frequentemente NÃO DIAGNOSTICADAS na avaliação inicial (radiografia AP insuficiente). Solicitar TC com reconstrução sagital em todo paciente com dor sacral após trauma de alta energia. NÃO confundir com fraturas por insuficiência (idosos/osteoporose), que são tipicamente na zona I de Denis e horizontais — tratamento diferente (conservador). Exame neurológico perianal e esfincteriano é OBRIGATÓRIO.',
  references: [
    { authors: 'Roy-Camille R, Saillant G, Gagna G, Mazel C', title: 'Transverse fracture of the upper sacrum. Suicidal jumpers fracture', journal: 'Spine', year: 1985 },
    { authors: 'Denis F, Davis S, Comfort T', title: 'Sacral fractures: an important problem. Retrospective analysis of 236 cases', journal: 'Clin Orthop Relat Res', year: 1988 },
  ],
};
