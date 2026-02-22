import type { ClassificationData } from '@/types/tool';

export const tileClassificationData: ClassificationData = {
  id: 'tile-classification',
  name: 'Classificação de Tile',
  author: 'Tile',
  year: 1988,
  grades: [
    {
      id: 'type-a',
      label: 'Tipo A - Estável',
      description: 'Anel pélvico estável rotacional e verticalmente',
      criteria: [
        'A1: Fraturas por avulsão (EIAS, EIAI, tuberosidade isquiática)',
        'A2: Fraturas do ilíaco ou do anel sem desvio',
        'A3: Fraturas transversas do sacro/cóccix',
        'Anel pélvico estável à rotação e verticalmente',
        'Ligamentos posteriores intactos',
        'Assoalho pélvico intacto'
      ],
      treatment: 'Tratamento conservador na maioria dos casos. Carga conforme tolerado. Repouso relativo com mobilização precoce. Analgesia adequada.',
      prognosis: 'Excelente prognóstico. Consolidação em 6-8 semanas. Retorno funcional completo esperado.',
      colorCode: 'safe'
    },
    {
      id: 'type-b',
      label: 'Tipo B - Rotacionalmente Instável / Verticalmente Estável',
      description: 'Instabilidade rotacional com estabilidade vertical',
      criteria: [
        'B1: Livro aberto (rotação externa) - diástase da sínfise < 2.5 cm',
        'B2: Compressão lateral ipsilateral',
        'B3: Compressão lateral contralateral (bucket-handle)',
        'Ligamentos sacroilíacos posteriores intactos (âncora vertical)',
        'Ligamentos sacroilíacos anteriores e/ou assoalho pélvico lesados',
        'Instabilidade rotacional parcial'
      ],
      treatment: 'B1 com diástase < 2.5 cm: pode ser conservador. B1 > 2.5 cm: fixação anterior (placa sinfisária). B2/B3: fixação anterior se instável. Fixação posterior geralmente não necessária.',
      prognosis: 'Bom prognóstico se estabilidade vertical preservada. Lesões urológicas e vasculares menos frequentes que tipo C.',
      colorCode: 'caution'
    },
    {
      id: 'type-c',
      label: 'Tipo C - Rotacional e Verticalmente Instável',
      description: 'Instabilidade rotacional e vertical completa',
      criteria: [
        'C1: Instabilidade completa unilateral',
        'C2: Bilateral (um lado B, outro C)',
        'C3: Bilateral C (ambos os lados completamente instáveis)',
        'Lesão completa dos ligamentos sacroilíacos posteriores',
        'Instabilidade vertical (ascensão do hemipelve)',
        'Lesão do assoalho pélvico',
        'Alta energia (queda de altura, acidente automobilístico)'
      ],
      treatment: 'Fixação cirúrgica anterior E posterior. Anterior: placa sinfisária. Posterior: parafusos iliosacros, placa sacroilíaca ou fixação espinopélvica. Damage control com fixador externo/clamp pélvico se instável.',
      prognosis: 'Prognóstico reservado. Alta mortalidade associada (hemorragia). Lesões associadas frequentes: urológicas, vasculares, neurológicas. Risco de dor crônica.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Tipo C indica instabilidade completa e geralmente requer fixação anterior e posterior. O clamp pélvico ou fixador externo são medidas de emergência para controle hemorrágico.',
  pitfall: 'Lesões associadas (urológicas, vasculares) são frequentes e podem ser letais. A radiografia AP da bacia na emergência é o exame inicial mais importante - inlet e outlet complementam.',
  references: [
    {
      authors: 'Tile M',
      title: 'Pelvic ring fractures: should they be fixed?',
      journal: 'J Bone Joint Surg Br',
      year: 1988
    },
    {
      authors: 'Tile M',
      title: 'Acute pelvic fractures: I. Causation and classification',
      journal: 'J Am Acad Orthop Surg',
      year: 1996
    }
  ]
};
