import type { ClassificationData } from '@/types/tool';

export const schatzkerClassificationData: ClassificationData = {
  id: 'schatzker-classification',
  name: 'Classificação de Schatzker',
  author: 'Schatzker',
  year: 1979,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I - Split Lateral Puro',
      description: 'Cunha lateral pura sem depressão',
      criteria: [
        'Fratura em cunha do platô tibial lateral',
        'Sem depressão da superfície articular',
        'Osso de boa qualidade (pacientes jovens)',
        'Mecanismo: força em valgo',
        'Associada a lesão do LCM'
      ],
      treatment: 'Se desvio < 2 mm: tratamento conservador com mobilidade precoce sem carga. Se desvio > 2 mm: RAFI com parafusos percutâneos ou placa de suporte lateral.',
      prognosis: 'Excelente prognóstico. Baixa taxa de artrose se redução anatômica.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II - Split-Depressão Lateral',
      description: 'Cunha lateral com depressão articular associada',
      criteria: [
        'Cunha lateral associada a depressão da superfície articular',
        'Depressão > 2-3 mm é significativa',
        'Mais comum em pacientes com osteoporose',
        'Pode haver impacção do osso subcondral',
        'Tipo mais comum de fratura do platô tibial'
      ],
      treatment: 'RAFI com elevação do fragmento deprimido, enxerto ósseo subcondral, placa de suporte lateral com parafusos subcondrais. Artroscopia pode auxiliar na redução.',
      prognosis: 'Bom prognóstico se depressão residual < 2 mm. Risco de artrose aumenta com depressão articular residual.',
      colorCode: 'caution'
    },
    {
      id: 'type-iii',
      label: 'Tipo III - Depressão Lateral Pura',
      description: 'Depressão pura da superfície articular lateral',
      criteria: [
        'Depressão pura da superfície articular sem componente de cunha',
        'Osso subcondral impactado',
        'Comum em pacientes idosos / osteoporóticos',
        'Cortical lateral intacta',
        'Pode ser difícil de visualizar em RX simples'
      ],
      treatment: 'Se depressão > 2-3 mm: elevação articular percutânea ou aberta, enxerto ósseo ou substituto, placa de suporte. Tamp ou balão para elevação percutânea.',
      prognosis: 'Bom prognóstico se redução adequada. Risco de subsidência em osso osteoporótico.',
      colorCode: 'caution'
    },
    {
      id: 'type-iv',
      label: 'Tipo IV - Platô Medial',
      description: 'Fratura do platô tibial medial',
      criteria: [
        'Fratura do côndilo medial (split ou depressão)',
        'Alta energia',
        'Frequentemente associada a lesão do LCL e/ou nervo fibular',
        'Pode incluir eminência intercondilar',
        'Instabilidade em varo'
      ],
      treatment: 'Tratamento cirúrgico com placa de suporte medial (placa posteromedial se fragmento posterior). Avaliar lesões ligamentares e neurovasculares associadas.',
      prognosis: 'Prognóstico reservado. Maior taxa de complicações que tipos laterais. Risco de lesão neurovascular.',
      colorCode: 'danger'
    },
    {
      id: 'type-v',
      label: 'Tipo V - Bicondilar',
      description: 'Fratura de ambos os platôs com continuidade metafisária',
      criteria: [
        'Envolvimento de ambos os côndilos (medial e lateral)',
        'Mantém continuidade metáfise-diáfise',
        'Componente de split em ambos os lados',
        'Alta energia',
        'Frequente associação com lesões ligamentares'
      ],
      treatment: 'RAFI com dupla placa (lateral e medial/posteromedial). Pode necessitar abordagem em etapas. Fixação externa temporária se condições de tecidos moles desfavoráveis.',
      prognosis: 'Prognóstico reservado. Alta taxa de rigidez, artrose pós-traumática e complicações de tecidos moles.',
      colorCode: 'danger'
    },
    {
      id: 'type-vi',
      label: 'Tipo VI - Dissociação Metáfise-Diáfise',
      description: 'Fratura bicondilar com dissociação metafisária-diafisária',
      criteria: [
        'Fratura bicondilar com separação metáfise-diáfise',
        'Perda de continuidade entre superfície articular e diáfise',
        'Altíssima energia',
        'Frequente lesão de tecidos moles',
        'Risco de síndrome compartimental'
      ],
      treatment: 'Fixação externa temporária spanning (damage control). Conversão para RAFI definitiva quando tecidos moles permitirem (7-14 dias). Dupla placa, considerar fixador externo híbrido.',
      prognosis: 'Prognóstico reservado a mau. Alto risco de complicações: infecção, pseudoartrose, artrose, rigidez, síndrome compartimental.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Tipos IV-VI são fraturas de alta energia com prognóstico mais reservado. A TC com reconstrução 3D é mandatória para planejamento cirúrgico adequado.',
  pitfall: 'TC é essencial para planejamento - radiografia simples subestima a depressão articular e a cominuição. Sempre avaliar compartimento posterior com cortes axiais de TC.',
  references: [
    {
      authors: 'Schatzker J, McBroom R, Bruce D',
      title: 'The tibial plateau fracture. The Toronto experience 1968-1975',
      journal: 'Clin Orthop Relat Res',
      year: 1979
    },
    {
      authors: 'Luo CF, Sun H, Zhang B, Zeng BF',
      title: 'Three-column fixation for complex tibial plateau fractures',
      journal: 'J Orthop Trauma',
      year: 2010
    }
  ]
};
