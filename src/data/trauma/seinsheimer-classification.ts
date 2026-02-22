import type { ClassificationData } from '@/types/tool';

export const seinshheimerClassificationData: ClassificationData = {
  id: 'seinsheimer-classification',
  name: 'Classificação de Seinsheimer — Fraturas Subtrocantéricas do Fêmur',
  author: 'Seinsheimer',
  year: 1978,
  revision: 'Russell-Taylor (1992) — com base em fossa piriforme e trocânter menor',
  grades: [
    {
      id: 'seinsheimer-i',
      label: 'Seinsheimer Tipo I — Não Deslocada (< 2 mm)',
      description: 'Fratura subtrocantérica sem desvio significativo dos fragmentos (< 2 mm)',
      criteria: [
        'Fratura na região subtrocantérica (zona entre trocânter menor e 5 cm distais)',
        'Desvio dos fragmentos < 2 mm',
        'Qualquer padrão de fratura sem desvio',
        'Rara — geralmente fratura por insuficiência (osteoporose, bifosfonatos)',
        'Avaliar fratura atípica subtrocantérica (bisfofonatos): transversa, cortical lateral espessada, cortical medial com "beak"',
        'RX AP e lateral: fratura sem desvio ou minimamente deslocada'
      ],
      treatment: 'Cirurgia profilática para fraturas por insuficiência e fraturas atípicas de bifosfonatos. Fixação com haste cefalomedular (CMN) ou placa DHS com extensão. Conservador apenas em pacientes não cirúrgicos com fratura sem desvio em leito.',
      prognosis: 'Bom prognóstico com fixação profilática adequada. Fraturas atípicas de bifosfonatos têm taxa de consolidação reduzida — descontinuar bifosfonato, suplementar vitamina D e teriparatida pode acelerar consolidação.',
      colorCode: 'safe'
    },
    {
      id: 'seinsheimer-iia',
      label: 'Seinsheimer Tipo IIA — 2 Fragmentos, Transversa',
      description: 'Fratura subtrocantérica em 2 fragmentos com traço transverso',
      criteria: [
        'Fratura em 2 fragmentos principais',
        'Traço de fratura transverso (perpendicular ao eixo do fêmur)',
        'Desvio dos fragmentos ≥ 2 mm',
        'Trocânter menor pode estar no fragmento proximal ou distal',
        'Padrão deformante: fragmento proximal em FLEXÃO (iliopsoas) + ABDUÇÃO (glúteos) + ROTAÇÃO EXTERNA (rotadores curtos)',
        'Fragmento distal desviado em adução e encurtamento pelo quadríceps e isquiotibiais'
      ],
      treatment: 'Cirurgia: haste intramedular cefalomedular longa (Long CMN) é o padrão-ouro para a maioria das fraturas subtrocantéricas. Controle das forças deformantes durante a inserção da haste (mesa de tração ou posicionamento lateral). Placa-lâmina 95° ou DCS como alternativa.',
      prognosis: 'Bom prognóstico com fixação adequada por haste IM. Consolidação em 3–6 meses. Carga progressiva a partir de 6–8 semanas.',
      colorCode: 'caution'
    },
    {
      id: 'seinsheimer-iib',
      label: 'Seinsheimer Tipo IIB — 2 Fragmentos, Espiral com Trocânter Menor Aderido',
      description: 'Fratura subtrocantérica espiral em 2 fragmentos — trocânter menor permanece no fragmento proximal',
      criteria: [
        'Fratura em 2 fragmentos com traço espiral',
        'Trocânter menor permanece ADERIDO ao fragmento proximal',
        'Linha de fratura começa na região subtrocantérica e espirala pelo fêmur',
        'Inserção do iliopsoas (trocânter menor) no fragmento proximal — aumenta a força de flexão proximal',
        'Fragmento proximal: flexão + abdução + RE (mais acentuada que IIA pela força extra do iliopsoas)',
        'Biomecânica: padrão espiral transmite cargas de torção'
      ],
      treatment: 'Cirurgia: haste cefalomedular longa. Maior dificuldade de redução pela força de flexão aumentada do iliopsoas no fragmento proximal. Técnica de "in-out-in" na haste se necessário para controle do fragmento proximal.',
      prognosis: 'Bom com fixação adequada. Traço espiral facilita contato interfragmentário — consolidação potencialmente mais previsível que traço transverso se redução adequada.',
      colorCode: 'caution'
    },
    {
      id: 'seinsheimer-iic',
      label: 'Seinsheimer Tipo IIC — 2 Fragmentos, Espiral com Trocânter Menor Livre',
      description: 'Fratura subtrocantérica espiral em 2 fragmentos — trocânter menor está separado (fragmento livre)',
      criteria: [
        'Fratura em 2 fragmentos principais com traço espiral',
        'Trocânter menor SEPARADO como fragmento livre (3º fragmento funcional)',
        'Inserção do iliopsoas perde ancoragem ao fragmento proximal',
        'Redução mais complexa pela instabilidade adicional do trocânter menor',
        'Fragmento proximal: flexão + abdução + RE (sem componente de tração do iliopsoas)',
        'Linha de fratura espiral + avulsão do trocânter menor pelo iliopsoas'
      ],
      treatment: 'Cirurgia: haste cefalomedular longa. Trocânter menor geralmente não fixado separadamente se haste proporciona estabilidade adequada. Cerclagem do trocânter em casos de instabilidade residual significativa.',
      prognosis: 'Moderado a bom. A perda do trocânter menor pode comprometer a força de flexão do quadril a longo prazo se não consolidar na posição adequada.',
      colorCode: 'caution'
    },
    {
      id: 'seinsheimer-iiia',
      label: 'Seinsheimer Tipo IIIA — 3 Fragmentos, Espiral com Fragmento Posterolateral',
      description: 'Fratura subtrocantérica em 3 fragmentos — traço espiral com fragmento cortical posterolateral separado',
      criteria: [
        'Fratura em 3 fragmentos: proximal + distal + fragmento cortical posterolateral',
        'Traço espiral com cominuição localizada',
        'Fragmento cortical posterolateral (segmento da cortical posterior e lateral)',
        'Trocânter menor pode estar no fragmento proximal',
        'Maior instabilidade rotacional pela perda da cortical posterolateral',
        'Mecanismo de torção de alta energia'
      ],
      treatment: 'Cirurgia: haste cefalomedular longa. Cerclagem do fragmento posterolateral antes da inserção da haste pode facilitar redução e restaurar estabilidade cortical. Alternativa: placa 95° com fixação do fragmento cortical.',
      prognosis: 'Moderado. Cominuição posterolateral reduz estabilidade pós-operatória. Risco de varo e falha de implante se suporte cortical medial inadequado.',
      colorCode: 'danger'
    },
    {
      id: 'seinsheimer-iiib',
      label: 'Seinsheimer Tipo IIIB — 3 Fragmentos, Espiral com Trocânter Menor',
      description: 'Fratura subtrocantérica em 3 fragmentos — traço espiral com trocânter menor como fragmento separado',
      criteria: [
        'Fratura em 3 fragmentos: proximal + distal + trocânter menor (livre)',
        'Traço espiral principal + avulsão do trocânter menor',
        'Inserção do iliopsoas no fragmento separado do trocânter menor',
        'Maior instabilidade mecânica por ausência do suporte do trocânter menor',
        'Forças deformantes complexas sobre o fragmento proximal',
        'AO/OTA: 31A3 (fratura subtrocantérica, padrão complexo)'
      ],
      treatment: 'Cirurgia: haste cefalomedular longa. Trocânter menor geralmente não fixado separadamente — haste proporciona estabilidade suficiente. Considerar fixação adicional do trocânter menor se desvio > 1 cm afeta tensionamento do iliopsoas.',
      prognosis: 'Moderado. Fraqueza de flexão do quadril possível se trocânter menor não consolidar. Resultados geralmente satisfatórios com haste cefalomedular.',
      colorCode: 'danger'
    },
    {
      id: 'seinsheimer-iv',
      label: 'Seinsheimer Tipo IV — Cominutiva (4+ Fragmentos)',
      description: 'Fratura subtrocantérica altamente cominutiva com 4 ou mais fragmentos',
      criteria: [
        'Fratura com 4 ou mais fragmentos principais',
        'Cominuição extensa da região subtrocantérica',
        'Frequentemente associada a mecanismo de alta energia (quedas de altura, acidentes)',
        'Suporte cortical medial completamente perdido = risco máximo de varo em valgum',
        'Sem suporte medial = carga total transferida ao implante = falha de implante iminente sem consolidação precoce',
        'AO/OTA 31A3.3 (subtrocantérica, altamente cominutiva)',
        'Avaliar lesões associadas em politraumatizado'
      ],
      treatment: 'Cirurgia: haste cefalomedular longa com bloqueio estático proximal e distal. Enxerto ósseo intraoperatório pode ser considerado. Evitar fixação com placa isolada em cominuição grave — alto risco de falha mecânica. Carga progressiva com proteção até evidência de calo ósseo.',
      prognosis: 'Moderado a reservado. Alta taxa de complicações: perda de fixação, consolidação viciosa em varo, pseudoartrose (5–15%). Cuidado especial com a "perda do suporte medial" — principal causa de falha de implante.',
      colorCode: 'danger'
    },
    {
      id: 'seinsheimer-v',
      label: 'Seinsheimer Tipo V — Subtrocantérica + Intertrocantérica',
      description: 'Fratura combinada subtrocantérica com extensão ao traço intertrocantérico — padrão subtrocantérico + intertrocantérico simultâneos',
      criteria: [
        'Fratura com componente subtrocantérico + componente intertrocantérico simultâneos',
        'Traço de fratura se estende proximalmente para a região intertrocantérica',
        'Compromete a estabilidade do calcar femoral + região subtrocantérica',
        'Padrão de alta instabilidade com forças deformantes máximas',
        'Trocânter maior pode ser fragmento separado',
        'Equivalente clínico à "fratura subtrocantérico-intertrocantérica"',
        'Biomecânica: combinação das forças de fratura intertrocantérica + subtrocantérica'
      ],
      treatment: 'Cirurgia: haste cefalomedular longa com parafuso helicoidal ou DHS proximais que controlem simultaneamente o fragmento cefálico e o trocânter maior. Reconstrução do calcar essencial. Alta complexidade técnica.',
      prognosis: 'Reservado. Padrão de maior complexidade e instabilidade. Alto risco de complicações mecânicas. Consolidação em 4–6 meses esperada com fixação adequada.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Classificação de Russell-Taylor (1992) para escolha do implante baseada em 2 parâmetros: (1) Envolvimento da fossa piriforme (ponto de entrada da haste convencional): Grupo I = fossa piriforme intacta (haste padrão), Grupo II = fossa piriforme comprometida (haste retrógrada ou entrada trocantérica); (2) Envolvimento do trocânter menor: Subgrupo A = trocânter menor intacto ou aderido ao proximal (construção de haste + parafuso cefalomedular adequada), Subgrupo B = trocânter menor fraturado e separado (instabilidade aumentada, considerar placa). Russell-Taylor IA: haste padrão entrada piriforme. Russell-Taylor IB: haste + cerclagem ou haste cefalomedular. Russell-Taylor IIA: haste cefalomedular (entrada trocantérica). Russell-Taylor IIB: placa-lâmina 95° ou DCS (haste cefalomedular pode ser insuficiente). Fratura atípica por bifosfonato (AFF): transversa/oblíqua curta na região subtrocantérica/diáfise lateral, cortical lateral espessada ("cortical flaring"), "beak" ou "dreaded black line" na cortical medial — risco de fratura completa com mínimo trauma.',
  pitfall: 'O principal erro biomecânico na fratura subtrocantérica é SUBESTIMAR as forças deformantes: fragmento proximal em flexão + abdução + RE = posição fixa que DEVE ser compensada durante a redução antes de inserir a haste. Não corrigir esta deformidade resulta em mau alinhamento e falha. "Fratura intertrocantérica com linha oblíqua reversa" (AO/OTA 31A3.1): comporta-se biomecanicamente como fratura subtrocantérica mesmo estando "ao nível do trocânter" — DHS simples é INADEQUADO (força de cisalhamento no parafuso). Usar haste cefalomedular ou placa-lâmina 95°. Não usar DHS convencional em padrão de obliquidade reversa — falha inevitável pelo padrão de carga.',
  references: [
    {
      authors: 'Seinsheimer F',
      title: 'Subtrochanteric fractures of the femur',
      journal: 'J Bone Joint Surg Am',
      year: 1978
    },
    {
      authors: 'Russell TA, Taylor JC',
      title: 'Subtrochanteric fractures of the femur',
      journal: 'Skeletal Trauma',
      year: 1992
    },
    {
      authors: 'Loizou CL, McNamara I, Ahmed K, Pryor GA, Parker MJ',
      title: 'Classification of subtrochanteric femoral fractures',
      journal: 'Injury',
      year: 2010
    },
    {
      authors: 'Shane E, Burr D, Abrahamsen B, et al',
      title: 'Atypical subtrochanteric and diaphyseal femoral fractures: second report of a task force of the American Society for Bone and Mineral Research',
      journal: 'J Bone Miner Res',
      year: 2014
    }
  ]
};
