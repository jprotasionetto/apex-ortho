import type { ScoreDefinition } from '@/types/score';

export const tlicsScore: ScoreDefinition = {
  id: 'tlics-score',
  name: 'TLICS - Thoracolumbar Injury Classification and Severity Score',
  items: [
    {
      id: 'morphology',
      label: 'Morfologia da Fratura',
      type: 'radio',
      section: 'Morfologia',
      options: [
        { value: 0, label: 'Sem alteração / não aplicável (0)' },
        { value: 1, label: 'Compressão (cunha, fratura compressão) (1)' },
        { value: 2, label: 'Burst (explosão) (2)' },
        { value: 3, label: 'Translação / Rotação (3)' },
        { value: 4, label: 'Distração (4)' }
      ]
    },
    {
      id: 'neurological',
      label: 'Status Neurológico',
      type: 'radio',
      section: 'Neurológico',
      options: [
        { value: 0, label: 'Intacto (0)' },
        { value: 2, label: 'Lesão de raiz nervosa (2)' },
        { value: 2, label: 'Lesão medular completa (2)' },
        { value: 3, label: 'Lesão medular incompleta (3)' },
        { value: 3, label: 'Síndrome da cauda equina (3)' }
      ]
    },
    {
      id: 'plc',
      label: 'Integridade do Complexo Ligamentar Posterior (PLC)',
      type: 'radio',
      section: 'PLC',
      options: [
        { value: 0, label: 'Intacto (0)' },
        { value: 2, label: 'Indeterminado / suspeito (2)' },
        { value: 3, label: 'Lesado / rompido (3)' }
      ]
    }
  ],
  maxScore: 10,
  minScore: 0,
  interpretations: [
    {
      range: [0, 3],
      label: 'Tratamento Não Operatório',
      description: 'Tratamento conservador indicado: órtese toracolombar (TLSO), analgesia, fisioterapia progressiva',
      color: 'safe'
    },
    {
      range: [4, 4],
      label: 'Não Operatório ou Cirúrgico',
      description: 'Zona cinzenta: decisão individualizada baseada na experiência do cirurgião, preferência do paciente e contexto clínico',
      color: 'caution'
    },
    {
      range: [5, 10],
      label: 'Tratamento Cirúrgico',
      description: 'Tratamento cirúrgico indicado: estabilização com instrumentação, descompressão se déficit neurológico',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    return Object.values(values).reduce((sum, val) => sum + (val || 0), 0);
  },
  references: [
    'Vaccaro AR, et al. A new classification of thoracolumbar injuries: the importance of injury morphology, the integrity of the posterior ligamentous complex, and neurologic status. Spine. 2005;30(20):2325-2333.',
    'Patel AA, et al. Reliability and validity of the TLICS. Spine. 2007;32(20):E606-E612.'
  ]
};
