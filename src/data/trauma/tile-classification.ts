import type { ClassificationData } from '@/types/tool';

export const tileClassificationData: ClassificationData = {
  id: 'tile-classification',
  name: 'Classificação de Tile — Anel Pélvico',
  author: 'Tile',
  year: 1988,
  grades: [
    {
      id: 'type-a',
      label: 'Tipo A — Estável: Arco Posterior Intacto (AO/OTA 61A)',
      description: 'Anel pélvico estável — arco posterior completamente intacto',
      criteria: [
        'A1: Fraturas por avulsão (EIAS, EIAI, tuberosidade isquiática, crista ilíaca)',
        'A2: Fraturas do ilíaco (asa) ou fratura estável do anel anterior sem lesão posterior',
        'A3: Fraturas transversas do sacro abaixo da articulação SI / fraturas do cóccix',
        'Arco posterior (ligamentos SI posteriores) completamente intacto',
        'Estabilidade rotacional e vertical mantida',
        'AO/OTA 2018: 61A = "intact posterior arch" (arco posterior intacto)'
      ],
      treatment: 'Tratamento conservador na maioria dos casos. Carga conforme tolerado com auxílio de muletas. Repouso relativo com mobilização precoce. Analgesia multimodal. Avulsões em atletas jovens: RAFI se desvio > 2 cm.',
      prognosis: 'Excelente prognóstico. Consolidação em 6–8 semanas. Retorno funcional completo.',
      colorCode: 'safe'
    },
    {
      id: 'type-b',
      label: 'Tipo B — Rotacionalmente Instável / Verticalmente Estável (AO/OTA 61B)',
      description: 'Ruptura incompleta do arco posterior — instabilidade rotacional, estabilidade vertical',
      criteria: [
        'B1: Livro aberto (open-book/external rotation) — diástase sinfisária',
        'B2: Compressão lateral ipsilateral (LC) — impacção anterior do sacro',
        'B3: Compressão lateral contralateral (bucket-handle)',
        'Ligamentos sacroilíacos POSTERIORES intactos (âncora vertical preservada)',
        'Ligamentos sacroilíacos anteriores e/ou assoalho pélvico lesados',
        'AO/OTA 2018: 61B = "incomplete disruption of posterior arch"',
        'B1 com diástase > 2,5 cm = indica lesão do assoalho pélvico (Lesão de Morel-Lavallée possível)'
      ],
      treatment: 'B1 (diástase < 2,5 cm): conservador com cinta pélvica. B1 (diástase > 2,5 cm): fixação anterior — placa sinfisária. B2/B3: fixação anterior se instável. Fixação posterior geralmente não necessária pela integridade dos SI posteriores.',
      prognosis: 'Bom prognóstico se estabilidade vertical preservada. Hemorragia menos frequente que Tipo C. Lesões urológicas possíveis (B1).',
      colorCode: 'caution'
    },
    {
      id: 'type-c',
      label: 'Tipo C — Rotacional e Verticalmente Instável (AO/OTA 61C)',
      description: 'Ruptura COMPLETA do arco posterior — instabilidade rotacional e vertical',
      criteria: [
        'C1: Instabilidade completa unilateral (fratura SI ou luxação SI + lesão anterior)',
        'C2: Bilateral — um lado B + outro lado C',
        'C3: Bilateral C — ambos os hemipelves completamente instáveis',
        'Lesão COMPLETA dos ligamentos sacroilíacos posteriores',
        'Instabilidade vertical = ascensão do hemipelve (desvio cefálico > 1 cm)',
        'Lesão do assoalho pélvico e plexo venoso sacral (hemorragia massiva)',
        'AO/OTA 2018: 61C = "complete disruption of posterior arch"'
      ],
      treatment: 'EMERGÊNCIA: cinta pélvica → fixador externo ou C-clamp para controle hemorrágico → angioembolização se instabilidade hemodinâmica persistente. DEFINITIVO: fixação anterior (placa sinfisária) E posterior (parafusos iliosacros percutâneos, placa SI ou fixação lombopélvica/espinopélvica).',
      prognosis: 'Prognóstico reservado. Mortalidade 10–20% (hemorragia). Lesões associadas frequentes: urológicas (20%), vasculares (15%), neurológicas (30%). Risco de dor crônica sacroilíaca e dismetria de MMII.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'AO/OTA 2018 renomeou para terminologia do arco posterior: 61A = arco intacto, 61B = ruptura incompleta, 61C = ruptura completa. Conduta de emergência: cinta pélvica circunferencial a nível dos trocânteres — NUNCA no abdome. Rx AP da bacia é o exame inicial mais importante; inlet (rotação cranial 40°) e outlet (rotação caudal 40°) complementam.',
  pitfall: 'Lesões associadas são a principal causa de morte — não focar apenas na fratura. TC com reconstrução 3D é mandatória para planejamento definitivo. Tipo B pode evoluir para C se mobilização inadequada. Classificação de Denis do sacro (Zonas I–III) complementa Tile para lesões sacras com risco neurológico.',
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
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018 (Pelvic ring)',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
