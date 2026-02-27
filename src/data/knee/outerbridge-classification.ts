import type { ClassificationData } from '@/types/classification';

export const outerbridgeClassification: ClassificationData = {
  id: 'outerbridge-classification',
  name: 'Classificação de Outerbridge (Lesão Condral)',
  author: 'Outerbridge',
  year: 1961,
  epidemiology: 'Lesões condrais sintomáticas são encontradas em 60–70% das artroscopias do joelho. Prevalência na população geral: >30% de adultos >30 anos têm algum grau de lesão condral ao RNM. Grau IV (espessura total): incidência artroscópica de ~5% nas populações jovens e ativas. Lesões condrais focais sintomáticas (ICRS ≥ Grau 3–4) em joelhos não-artróticos: ~2/100.000/ano — o grupo que se beneficia de terapias de regeneração cartilaginosa. Outerbridge (1961) é o sistema mais utilizado clinicamente para lesões artroscópicas; ICRS (2000) é o padrão para pesquisa (4 graus com subclassificação). A diferença entre condropatia/condromalácia (Grau I–II isolado) e lesão condral focal (Grau III–IV) é fundamental para indicação cirúrgica. Microfratura: resultados excelentes em <2 cm² e <35 anos; deterioração em 2–3 anos em lesões maiores. ACI/MACI: indicado em lesões 2–10 cm², joelho alinhado, <45 anos. Alinhamento e frouxidão ligamentar devem ser corrigidos antes ou junto com o tratamento condral.',
  mechanism: 'Fisiopatologia da lesão condral: cartilagem hialina articular = tecido avascular + aneuronal + pouco celular → capacidade intrínseca de regeneração MÍNIMA (condrócitos não migram para o defeito). Mecanismo principal: (1) Trauma agudo = contusão condral por força de cisalhamento ou compressão (queda, torção) → dissipação de energia intra-tecido → dano ao colágeno tipo II e proteoglicanos → falha mecânica progressiva. (2) Crônico/degenerativo = microtraumas repetidos + envelhecimento → apoptose progressiva de condrócitos → desequilíbrio matriz. Grau I (amolecimento/edema): condrócitos ainda viáveis mas matriz comprometida → reversível com tratamento. Grau II–III (fissuras): fibrilação progressiva → sem auto-regeneração. Grau IV (osso exposto): osso subcondral exposto → sangramento → fibrocartilagem de reparo (tipo II → tipo I = inferior mecânica e biologicamente). Classificação artroscópica vs RNM: Outerbridge I–II podem ter RNM normal; Grau IV sempre visível em sequências ponderadas em T1 e T2.',
  grades: [
    {
      id: 'grade-1',
      label: 'Grau I',
      description: 'Amolecimento e edema da cartilagem',
      criteria: [
        'Cartilagem amolecida ao toque (probe)',
        'Edema e tumefação superficial',
        'Superfície articular intacta',
        'Sem fibrilação'
      ],
      treatment: 'Tratamento conservador: modificação de atividade, fisioterapia, condroprotetores',
      prognosis: 'Bom prognóstico; pode ser reversível com medidas adequadas',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau II',
      description: 'Fragmentação e fissura ≤1,5cm de diâmetro',
      criteria: [
        'Fragmentação ou fissura da cartilagem',
        'Diâmetro da lesão menor ou igual a 1,5cm',
        'Profundidade não atinge osso subcondral',
        'Fibrilação superficial'
      ],
      treatment: 'Desbridamento artroscópico, microfratura para lesões sintomáticas; fisioterapia',
      prognosis: 'Prognóstico moderado; responde bem a microfratura em pacientes jovens',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau III',
      description: 'Fragmentação e fissura >1,5cm de diâmetro',
      criteria: [
        'Fragmentação ou fissura da cartilagem',
        'Diâmetro da lesão maior que 1,5cm',
        'Profundidade pode se aproximar do osso subcondral',
        'Sem exposição do osso subcondral'
      ],
      treatment: 'Microfratura, OATS/mosaicoplastia, transplante de condrócitos autólogos (ACI/MACI)',
      prognosis: 'Prognóstico reservado; necessita intervenção para prevenir progressão',
      colorCode: 'danger'
    },
    {
      id: 'grade-4',
      label: 'Grau IV',
      description: 'Exposição do osso subcondral',
      criteria: [
        'Erosão completa da cartilagem',
        'Osso subcondral exposto',
        'Eburnação possível',
        'Lesão de espessura total'
      ],
      treatment: 'OATS/mosaicoplastia, ACI/MACI, transplante osteocondral alógeno; artroplastia se extensa',
      prognosis: 'Prognóstico reservado; lesões extensas podem necessitar artroplastia',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Classificação artroscópica - avaliação direta da cartilagem durante artroscopia é o padrão-ouro',
  pitfall: 'RM pode subestimar o grau da lesão condral; correlação com artroscopia é imperfeita',
  references: [
    'Outerbridge RE. The etiology of chondromalacia patellae. J Bone Joint Surg Br. 1961;43-B:752-757.'
  ]
};
