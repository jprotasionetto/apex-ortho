import type { ClassificationData } from '@/types/tool';

export const aoClassificationData: ClassificationData = {
  id: 'ao-classification',
  name: 'Classificação AO/OTA',
  author: 'Muller',
  year: 1990,
  grades: [
    {
      id: 'type-a',
      label: 'Tipo A - Simples / Extra-articular',
      description: 'Fratura extra-articular simples',
      criteria: [
        'Fratura extra-articular',
        'A1: Espiral simples',
        'A2: Oblíqua simples (≥ 30°)',
        'A3: Transversa simples (< 30°)',
        'Sem extensão articular',
        'Traço único de fratura'
      ],
      treatment: 'Geralmente tratamento conservador ou fixação com placa/haste intramedular dependendo da localização. Bom potencial de redução anatômica.',
      prognosis: 'Excelente prognóstico. Consolidação esperada dentro do tempo normal para o osso afetado.',
      colorCode: 'safe'
    },
    {
      id: 'type-b',
      label: 'Tipo B - Cunha / Articular Parcial',
      description: 'Fratura em cunha ou articular parcial',
      criteria: [
        'B1: Cunha espiral (fragmento em cunha com traço espiral)',
        'B2: Cunha em flexão (fragmento borboleta)',
        'B3: Cunha fragmentada',
        'Em fraturas articulares: envolvimento parcial da superfície articular',
        'Parte da articulação permanece em continuidade com a diáfise'
      ],
      treatment: 'Frequentemente requer fixação cirúrgica. Fraturas articulares parciais necessitam redução anatômica da superfície articular. Placa de suporte ou parafusos interfragmentários.',
      prognosis: 'Prognóstico bom a moderado. Articulares parciais dependem da qualidade da redução articular.',
      colorCode: 'caution'
    },
    {
      id: 'type-c',
      label: 'Tipo C - Complexa / Articular Completa',
      description: 'Fratura complexa ou articular completa',
      criteria: [
        'C1: Articular completa, metáfise simples',
        'C2: Articular completa, metáfise multifragmentária',
        'C3: Articular completa, articular multifragmentária',
        'Separação completa da superfície articular da diáfise',
        'Em diafisárias: cominuição sem contato cortical após redução'
      ],
      treatment: 'Tratamento cirúrgico na maioria dos casos. Requer reconstrução articular anatômica seguida de fixação metafisária/diafisária. Pode necessitar abordagem em etapas (staged). Considerar fixação externa temporária.',
      prognosis: 'Prognóstico reservado. Maior risco de artrose pós-traumática, rigidez, pseudoartrose e infecção.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sistema alfanumérico universal: osso.segmento.tipo.grupo. Exemplo: 42-B1 = tíbia (4), diáfise (2), tipo B, grupo 1. Permite comunicação universal entre ortopedistas.',
  pitfall: 'Requer radiografias em 2 incidências no mínimo. Em fraturas articulares, TC é essencial para classificação adequada e planejamento cirúrgico.',
  references: [
    {
      authors: 'Müller ME, Nazarian S, Koch P, Schatzker J',
      title: 'The Comprehensive Classification of Fractures of Long Bones',
      journal: 'Springer-Verlag',
      year: 1990
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium - 2018',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
