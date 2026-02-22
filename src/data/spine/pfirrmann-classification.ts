import type { ClassificationData } from '@/types/classification';

export const pfirrmannClassification: ClassificationData = {
  id: 'pfirrmann-classification',
  name: 'Classificação de Pfirrmann (Degeneração Discal na RM)',
  author: 'Pfirrmann',
  year: 2001,
  grades: [
    {
      id: 'grade-1',
      label: 'Grau I',
      description: 'Disco normal',
      criteria: [
        'Estrutura homogênea',
        'Sinal branco brilhante em T2 (hiperintenso)',
        'Altura discal normal',
        'Distinção clara entre núcleo pulposo e ânulo fibroso',
        'Hidratação preservada'
      ],
      treatment: 'Nenhum tratamento necessário; disco normal',
      prognosis: 'Normal; sem significado patológico',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau II',
      description: 'Estrutura não homogênea, com ou sem bandas horizontais',
      criteria: [
        'Estrutura não homogênea',
        'Sinal branco em T2, com possíveis bandas horizontais',
        'Altura discal normal',
        'Distinção clara entre núcleo e ânulo',
        'Início de desidratação'
      ],
      treatment: 'Geralmente sem tratamento; monitorização se sintomático',
      prognosis: 'Alteração degenerativa inicial; frequente em assintomáticos',
      colorCode: 'safe'
    },
    {
      id: 'grade-3',
      label: 'Grau III',
      description: 'Estrutura não homogênea, sinal cinza intermediário',
      criteria: [
        'Estrutura não homogênea',
        'Sinal cinza intermediário em T2',
        'Altura discal normal a levemente diminuída',
        'Distinção imprecisa entre núcleo e ânulo',
        'Desidratação moderada'
      ],
      treatment: 'Tratamento conservador se sintomático: fisioterapia, fortalecimento core, analgesia',
      prognosis: 'Degeneração moderada; pode ou não ser sintomática; correlação clínica necessária',
      colorCode: 'caution'
    },
    {
      id: 'grade-4',
      label: 'Grau IV',
      description: 'Estrutura não homogênea, sinal escuro (hipointenso)',
      criteria: [
        'Estrutura não homogênea',
        'Sinal escuro/hipointenso em T2',
        'Altura discal moderadamente diminuída',
        'Sem distinção entre núcleo e ânulo',
        'Desidratação significativa'
      ],
      treatment: 'Tratamento conservador otimizado; considerar procedimentos invasivos se refratário (infiltração, discectomia, artrodese)',
      prognosis: 'Degeneração avançada; maior correlação com sintomas; pode necessitar intervenção',
      colorCode: 'danger'
    },
    {
      id: 'grade-5',
      label: 'Grau V',
      description: 'Disco colapsado, espaço discal obliterado',
      criteria: [
        'Estrutura não homogênea',
        'Sinal preto/hipointenso em T2',
        'Espaço discal colapsado',
        'Sem distinção entre núcleo e ânulo',
        'Desidratação completa',
        'Pode haver gás intradiscal (vacuum phenomenon)'
      ],
      treatment: 'Artrodese se sintomático e refratário ao tratamento conservador; prótese discal contraindicada neste grau',
      prognosis: 'Disco completamente degenerado; paradoxalmente pode ser menos sintomático (disco "estabilizado")',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Alterações degenerativas discais são muito comuns em assintomáticos (>50% após 40 anos) - sempre correlacionar com clínica',
  pitfall: 'Grau Pfirrmann isolado não é indicação de tratamento - a correlação clínico-radiológica é fundamental',
  references: [
    'Pfirrmann CW, et al. Magnetic resonance classification of lumbar intervertebral disc degeneration. Spine. 2001;26(17):1873-1878.'
  ]
};
