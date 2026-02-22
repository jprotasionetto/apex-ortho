import type { ClassificationData } from '@/types/tool';

export const schatzkerClassificationData: ClassificationData = {
  id: 'schatzker-classification',
  name: 'Classificação de Schatzker — Planalto Tibial',
  author: 'Schatzker',
  year: 1979,
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I — Split Lateral Puro (AO/OTA 41B1.1)',
      description: 'Cisão (split) pura do platô lateral sem depressão articular',
      criteria: [
        'Fratura em cisão (split/cunha) do platô tibial lateral',
        'Sem depressão da superfície articular',
        'Osso de boa qualidade (pacientes jovens, < 40 anos)',
        'Mecanismo: força em valgo (ex: choque lateral do joelho)',
        'Frequente lesão associada do LCM e/ou menisco lateral',
        'AO/OTA: 41B1.1 (articular parcial, split, platô lateral)'
      ],
      treatment: 'Desvio < 2 mm: conservador com mobilidade precoce sem carga por 6–8 semanas. Desvio > 2 mm: RAFI com parafusos percutâneos ou placa de suporte lateral. Avaliar menisco e ligamentos com RM.',
      prognosis: 'Excelente prognóstico. Baixa taxa de artrose se redução anatômica.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II — Split-Depressão Lateral (AO/OTA 41B3.1)',
      description: 'Cisão lateral com depressão articular associada',
      criteria: [
        'Cunha lateral associada a depressão da superfície articular',
        'Depressão > 2–3 mm é significativa',
        'Mais comum em pacientes > 40 anos ou com osteoporose',
        'Tipo MAIS COMUM de fratura do platô tibial',
        'Pode haver impacção do osso subcondral',
        'AO/OTA: 41B3.1 (articular parcial, split-depressão, platô lateral)',
        'Qualificações AO/OTA de quadrante: (t) anterolateral, (u) posterolateral, (x) central'
      ],
      treatment: 'RAFI com elevação do fragmento deprimido, enxerto ósseo subcondral (autólogo ou substituto), placa de suporte lateral com parafusos subcondrais. Artroscopia pode auxiliar na avaliação da redução.',
      prognosis: 'Bom prognóstico se depressão residual < 2 mm. Risco de artrose aumenta com depressão articular residual.',
      colorCode: 'caution'
    },
    {
      id: 'type-iii',
      label: 'Tipo III — Depressão Lateral Pura (AO/OTA 41B2.1)',
      description: 'Depressão pura da superfície articular lateral sem componente de cisão',
      criteria: [
        'Depressão pura da superfície articular sem split lateral',
        'Osso subcondral impactado — cortical lateral intacta',
        'Comum em pacientes idosos ou osteoporóticos',
        'Pode ser difícil de visualizar em Rx simples — TC mandatória',
        'AO/OTA: 41B2.1 (articular parcial, depressão, platô lateral)',
        'Qualificações AO/OTA de quadrante: (t) anterolateral, (u) posterolateral, (x) central'
      ],
      treatment: 'Depressão > 2–3 mm: elevação articular percutânea (tamp/balão) ou aberta, enxerto ósseo ou substituto, placa de suporte. Alternativa: parafusos subcondrais (raft screws).',
      prognosis: 'Bom prognóstico se redução adequada. Risco de subsidência em osso osteoporótico.',
      colorCode: 'caution'
    },
    {
      id: 'type-iv',
      label: 'Tipo IV — Platô Medial (AO/OTA 41B1.2 / 41B2.2 / 41B3.2)',
      description: 'Fratura do platô tibial medial — alta energia',
      criteria: [
        'Fratura do côndilo medial (split e/ou depressão)',
        'Trauma de ALTA ENERGIA (diferente dos tipos laterais)',
        'Frequente associação com lesão do LCL e/ou nervo fibular comum',
        'Pode incluir fratura da eminência intercondilar',
        'Instabilidade em varo',
        'AO/OTA: 41B1.2 (split medial), 41B2.2 (depressão medial), 41B3.2 (split-depressão medial)',
        'Qualificações AO/OTA: (v) anteromedial, (w) posteromedial, (x) central'
      ],
      treatment: 'Tratamento cirúrgico. Placa de suporte medial (posteromedial se fragmento posterior — abordagem de Lobenhoffer). Avaliar lesões ligamentares e neurovasculares. Fragmento posteromedial: placa antiglide posterior.',
      prognosis: 'Prognóstico reservado. Maior taxa de complicações que tipos laterais. Risco de lesão neurovascular. O côndilo medial suporta 60% da carga — incongruência tem mais impacto clínico.',
      colorCode: 'danger'
    },
    {
      id: 'type-v',
      label: 'Tipo V — Bicondilar (AO/OTA 41C1)',
      description: 'Fratura de ambos os platôs com continuidade metafisária preservada',
      criteria: [
        'Envolvimento de ambos os côndilos (medial e lateral)',
        'Continuidade metáfise-diáfise MANTIDA (diferencia do Tipo VI)',
        'Componente de split em ambos os lados',
        'Alta energia — acidente automobilístico, queda de altura',
        'Frequente lesão ligamentar e de meniscos associada',
        'AO/OTA: 41C1 (articular completa, simples articular, simples metafisária)'
      ],
      treatment: 'RAFI com dupla placa (lateral + medial/posteromedial). Staged approach se tecidos moles comprometidos: fixador externo temporário por 7–14 dias → RAFI definitiva. Princípio das 3 colunas de Luo (lateral, medial, posterior).',
      prognosis: 'Prognóstico reservado. Alta taxa de rigidez e artrose pós-traumática. Complicações de tecidos moles frequentes se cirurgia precoce sem respeitar soft tissues.',
      colorCode: 'danger'
    },
    {
      id: 'type-vi',
      label: 'Tipo VI — Dissociação Metáfise-Diáfise (AO/OTA 41C2 / 41C3)',
      description: 'Fratura bicondilar com dissociação entre superfície articular e diáfise',
      criteria: [
        'Fratura bicondilar com separação metáfise-diáfise',
        'PERDA de continuidade entre superfície articular e diáfise (diferencia do Tipo V)',
        'Altíssima energia — pode haver extensão diafisária',
        'Frequente lesão severa de tecidos moles',
        'RISCO ELEVADO de síndrome compartimental — monitorar pressões',
        'AO/OTA: 41C2 (articular simples + metáfise cunha/multifragmentária) ou 41C3 (articular multifragmentária)'
      ],
      treatment: 'Damage control: fixador externo spanning temporário. Conversão para RAFI definitiva quando tecidos moles permitirem (wrinkle test, 7–14 dias). Dupla placa (lateral + posteromedial) ou fixador externo híbrido. Fasciotomia profilática se indicada.',
      prognosis: 'Prognóstico reservado a mau. Alto risco de: infecção, pseudoartrose, artrose, rigidez e síndrome compartimental. Staged approach reduziu complicações de 50% para 10–15%.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Tipos IV–VI = alta energia, prognóstico mais reservado. TC com reconstrução 3D é MANDATÓRIA. A classificação das 3 colunas de Luo (lateral/medial/posterior) complementa Schatzker no planejamento cirúrgico. AO/OTA 2018 usa qualificações de quadrante para a tíbia proximal: (t)=anterolateral, (u)=posterolateral, (v)=anteromedial, (w)=posteromedial, (x)=central.',
  pitfall: 'TC é essencial — Rx simples subestima depressão articular e cominuição em 30–50%. Sempre avaliar o compartimento POSTERIOR com cortes axiais e sagitais de TC. Fragmento posteromedial (Schatzker IV) é subestimado em Rx e muda o planejamento cirúrgico.',
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
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018 (Tibia proximal)',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
