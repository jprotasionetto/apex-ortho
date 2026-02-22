import type { GuideData } from '@/types/guide';

export const radiographReadingGuide: GuideData = {
  id: 'radiograph-reading-guide',
  name: 'Guia de Leitura Sistemática de Radiografias',
  description: 'Abordagem sistemática ABCDES para leitura de radiografias ortopédicas',
  sections: [
    {
      id: 'abcdes-method',
      title: 'Método ABCDES',
      content: [
        'A - Alignment (Alinhamento): eixo mecânico, eixo anatômico, subluxações, luxações, desvios angulares (varo/valgo, antecurvo/recurvo), desvio translacional, encurtamento, rotação',
        'B - Bones (Ossos): traço de fratura, qualidade óssea (osteopenia, osteoporose), lesões líticas ou blásticas, reação periosteal, esclerose, cistos subcondrais, osteófitos',
        'C - Cartilage/Joints (Cartilagem/Articulações): espaço articular (simétrico vs assimétrico), congruência articular, erosões, calcificações intra-articulares, corpos livres',
        'D - Distribution (Distribuição): padrão de acometimento (simétrico vs assimétrico, monoarticular vs poliarticular, axial vs periférico)',
        'E - Envelope (Partes moles): edema de partes moles, sinal de derrame articular (fat pad sign no cotovelo), calcificações ectópicas, gás subcutâneo, corpo estranho, massa de partes moles',
        'S - Special (Especial): dispositivos de fixação (posição, soltura, quebra), medições específicas, comparação com exames anteriores'
      ],
      keyPoints: [
        'Seguir SEMPRE a mesma sequência sistemática',
        'Não focar apenas na lesão óbvia - revisar TODO o filme',
        'Procurar ativamente a "segunda lesão"'
      ],
      colorCode: 'info'
    },
    {
      id: 'key-measurements',
      title: 'Medições Radiográficas Importantes',
      content: [
        'Ângulo de Böhler (calcâneo): 25-40° normal; diminuído em fraturas do calcâneo',
        'Ângulo AP tálus-1º metatarso (Méary): 0° normal; divergência indica pé plano ou cavo',
        'Eixo mecânico do membro inferior: linha do centro da cabeça femoral ao centro do tornozelo; deve passar pelo joelho',
        'Ângulo colo-diáfise do fêmur: 125-135° normal; coxo vara (< 120°) ou valgo (> 140°)',
        'Índice acetabular (pediatria): < 30° normal; aumentado na displasia',
        'Ângulo de Cobb (coluna): medição da escoliose; > 10° define escoliose',
        'Instabilidade da coluna cervical: translação > 3.5mm ou angulação > 11° em flexão-extensão',
        'Espaço atlantodental anterior (AADI): < 3mm adultos, < 5mm crianças'
      ],
      keyPoints: [
        'Böhler < 25° = suspeitar fratura de calcâneo',
        'Eixo mecânico: avaliar em TODA radiografia panorâmica de MMII',
        'Cobb > 10° = escoliose'
      ],
      colorCode: 'safe'
    },
    {
      id: 'comparison-views',
      title: 'Incidências de Comparação',
      content: [
        'SEMPRE comparar com o lado contralateral quando disponível',
        'Especialmente importante em pediatria (núcleos de ossificação)',
        'Comparar com exames prévios para avaliar progressão',
        'Solicitar incidências adicionais quando a radiografia padrão é insuficiente:',
        '  - Escafoide: incidência com desvio ulnar e extensão',
        '  - Patela: axial de patela em flexão',
        '  - Sacroilíaca: Ferguson (AP com inclinação cefálica 30°)',
        '  - Calcâneo: Harris (axial do calcâneo)',
        '  - Ombro: axilar verdadeira ou Y de escápula'
      ],
      keyPoints: [
        'Contralateral para comparação é regra em pediatria',
        'Exame prévio para avaliar progressão/consolidação',
        'Incidências especiais para áreas de difícil visualização'
      ],
      colorCode: 'safe'
    },
    {
      id: 'red-flags',
      title: 'Red Flags Radiográficos',
      content: [
        'Reação periosteal agressiva: raios de sol (sunburst), casca de cebola (onion skin), triângulo de Codman = suspeitar neoplasia',
        'Lesão lítica com destruição cortical e massa de partes moles = neoplasia agressiva até prova em contrário',
        'Fratura patológica: fratura em osso anormal (lesão lítica/blástica subjacente)',
        'Osteopenia difusa em jovem: investigar causa metabólica ou neoplásica',
        'Calcificação de partes moles: miosite ossificante (periférica → matura), vs osteossarcoma de partes moles (central)',
        'Ar subcutâneo/subfascial: infecção por anaeróbio (fasciíte necrosante) ou pós-trauma/cirurgia recente',
        'Alargamento da sínfise púbica ou articulação sacroilíaca: instabilidade pélvica'
      ],
      keyPoints: [
        'Reação periosteal agressiva = biópsia antes de qualquer intervenção',
        'NUNCA operar lesão lítica sem diagnóstico histológico',
        'Fratura patológica: investigar neoplasia primária ou metastática'
      ],
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'A regra da "segunda lesão": quando encontrar uma lesão, procure ativamente por outra. Em trauma, lesões associadas são comuns (ex: fratura de Monteggia = fratura de ulna + luxação da cabeça do rádio)',
  pitfall: 'Viés de satisfação diagnóstica (satisfaction of search): encontrar uma lesão óbvia e parar de procurar - sempre completar a revisão sistemática',
  references: [
    'Greenspan A. Orthopedic Imaging: A Practical Approach. 6th ed. Lippincott Williams & Wilkins; 2014.',
    'Helms CA. Fundamentals of Skeletal Radiology. 4th ed. Saunders; 2013.',
    'Buckwalter KA. Radiographic evaluation of orthopedic trauma. In: Rockwood and Green\'s Fractures in Adults. 9th ed. 2019.'
  ]
};
