import type { ScoreDefinition } from '@/types/score';

export const subaxialClassification: ScoreDefinition = {
  id: 'subaxial-classification',
  name: 'SLIC - Subaxial Cervical Spine Injury Classification',
  items: [
    {
      id: 'morphology',
      label: 'Morfologia da Lesão',
      type: 'radio',
      section: 'Morfologia',
      options: [
        { value: 0, label: 'Sem anormalidade (0)' },
        { value: 1, label: 'Compressão (1)' },
        { value: 2, label: 'Burst (explosão) (2)' },
        { value: 3, label: 'Distração (facetas abertas, hiperextensão) (3)' },
        { value: 4, label: 'Rotação / Translação (luxação facetária, subluxação lateral) (4)' }
      ]
    },
    {
      id: 'dlc',
      label: 'Complexo Disco-Ligamentar (DLC)',
      type: 'radio',
      section: 'Disco-Ligamentar',
      options: [
        { value: 0, label: 'Intacto (0)' },
        { value: 1, label: 'Indeterminado (1)' },
        { value: 2, label: 'Lesado / rompido (2)' }
      ]
    },
    {
      id: 'neurological',
      label: 'Status Neurológico',
      type: 'radio',
      section: 'Neurológico',
      options: [
        { value: 0, label: 'Intacto (0)' },
        { value: 1, label: 'Radiculopatia (1)' },
        { value: 2, label: 'Lesão medular completa (2)' },
        { value: 3, label: 'Lesão medular incompleta (3)' }
      ]
    }
  ],
  maxScore: 9,
  minScore: 0,
  interpretations: [
    {
      range: [0, 3],
      label: 'Tratamento Não Operatório',
      description: 'Tratamento conservador indicado: colar cervical rígido, monitorização neurológica, reabilitação',
      color: 'safe'
    },
    {
      range: [4, 4],
      label: 'Preferência do Cirurgião',
      description: 'Zona cinzenta: decisão baseada na experiência do cirurgião e contexto clínico individual',
      color: 'caution'
    },
    {
      range: [5, 9],
      label: 'Tratamento Cirúrgico',
      description: 'Tratamento cirúrgico indicado: descompressão e estabilização da coluna cervical subaxial',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Vaccaro AR, et al. The subaxial cervical spine injury classification system: a novel approach to recognize the importance of morphology, neurology, and integrity of the disco-ligamentous complex. Spine. 2007;32(21):2365-2374.',
    'Dvorak MF, et al. Clinical outcomes of subaxial cervical spine injuries managed nonoperatively. Spine. 2007;32(21):2398-2403.'
  ]
};
