import type { ClassificationData } from '@/types/classification';

export const pfirrmannClassification: ClassificationData = {
  id: 'pfirrmann-classification',
  name: 'Classificação de Pfirrmann (Degeneração Discal na RM)',
  author: 'Pfirrmann',
  year: 2001,
  epidemiology: 'A degeneração discal avaliada por Pfirrmann na RM é extremamente prevalente em assintomáticos: dados de Brinjikji 2015 (Spine): Grau III–V visível em 37% aos 20 anos, 52% aos 30 anos, 68% aos 40 anos, 80% aos 50 anos, 88% aos 60 anos. Confiabilidade: κ = 0,68 (inter-observador), κ = 0,82 (intra-observador). Grau modificado 8-pontos foi proposto para maior granularidade em ensaios clínicos. Correlação com dor lombar fraca isoladamente — necessário correlação clínica.',
  mechanism: 'O disco intervertebral normal contém núcleo pulposo com ~80% de água (proteoglicanos agrecano + colágeno tipo II). Degeneração: perda de proteoglicanos → desidratação → redução do sinal T2 (núcleo pulposo perde brilho característico). Grau I–II: discreta desidratação, distinção nítida núcleo/ânulo preservada. Grau III: transição — distinção núcleo/ânulo se torna imprecisa, T2 intermediário. Grau IV: desidratação marcada, sem distinção nítida, T2 escuro. Grau V: colapso total do disco, possível vacuum phenomenon (gás intradiscal = sinal de Knuttson — patognomônico de degeneração severa).',
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
