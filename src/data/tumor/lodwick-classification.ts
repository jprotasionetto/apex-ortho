import type { ClassificationData } from '@/types/classification.ts';

export const lodwickClassificationData: ClassificationData = {
  id: 'lodwick-classification',
  name: 'Classificacao de Lodwick (Padrao Radiografico de Lesoes Osseas)',
  author: 'Lodwick',
  year: 1980,
  epidemiology: 'Classificação de Lodwick: escala radiográfica de agressividade mais usada em oncologia ortopédica. Tipo IA/IB: benigno na grande maioria → observação ou curetagem. Tipo II/III: maligno em 60–80% dos casos. Prevalência de lesões ósseas incidentais (Tipo IA): 2–5% das radiografias. Metástases ósseas (Tipo II): 100× mais comuns que tumores primários em pacientes >40a. Mieloma múltiplo: causa mais comum de lesão óssea em >40a (padrão II/III). Diagnóstico diferencial entre Tipo II e osteomielite: crítico e frequentemente requer biopsia.',
  mechanism: 'A zona de transição (interface lesão-osso normal) é o parâmetro fundamental: traduz velocidade de crescimento tumoral. Lesão lenta: osso tem tempo de criar borda esclerótica reativa (Tipo IA, <1mm). Lesão moderada: borda definida sem esclerose (Tipo IB). Lesão agressiva: osso não tem tempo de responder → zona de transição ampla (IC: parcialmente definida; II moth-eaten: destruição trabecular; III permeativo: destruição difusa). Reação periosteal agressiva (triângulo de Codman = interrupção cortical + levantamento periostal; "raios de sol" = tumor crescendo ao longo dos canais de Havers na cortical): sinais adicionais de malignidade de alto grau.',
  grades: [
    {
      id: 'type-ia',
      label: 'Tipo IA - Geografica com Margem Esclerótica',
      description: 'Lesao geografica com borda esclerótica bem definida',
      criteria: [
        'Lesao litica bem definida e circunscrita',
        'Margem esclerótica (borda de osso reativo denso)',
        'Zona de transicao estreita (<1mm)',
        'Crescimento lento indicado pela resposta ossea organizada',
        'Sugere lesao benigna inativa ou de crescimento muito lento'
      ],
      treatment: 'Frequentemente observacao; biopsia se sintomatica ou diagnostico incerto; curetagem se indicada',
      prognosis: 'Lesao benigna inativa na grande maioria dos casos',
      colorCode: 'safe'
    },
    {
      id: 'type-ib',
      label: 'Tipo IB - Geografica sem Margem Esclerótica',
      description: 'Lesao geografica com borda bem definida mas sem esclerose',
      criteria: [
        'Lesao litica bem definida',
        'Margem definida mas sem esclerose reativa',
        'Zona de transicao estreita mas sem borda esclerótica',
        'Crescimento mais rapido que IA mas ainda relativamente lento',
        'Sugere lesao benigna ativa'
      ],
      treatment: 'Investigacao adicional recomendada; biopsia frequentemente indicada; curetagem com adjuvantes',
      prognosis: 'Geralmente benigno ativo; pode representar malignidade de baixo grau',
      colorCode: 'caution'
    },
    {
      id: 'type-ic',
      label: 'Tipo IC - Geografica com Margem Mal Definida',
      description: 'Lesao geografica com borda mal definida/irregular',
      criteria: [
        'Lesao litica com margens parcialmente definidas',
        'Zona de transicao mais ampla e irregular',
        'Areas focais de destruicao cortical possivel',
        'Crescimento mais rapido que IB',
        'Sugere lesao agressiva: benigno agressivo ou maligno de baixo grau'
      ],
      treatment: 'Biopsia obrigatoria para diagnostico; estadiamento completo (RM local, TC torax)',
      prognosis: 'Pode ser benigno agressivo ou maligno; necessita confirmacao histologica',
      colorCode: 'danger'
    },
    {
      id: 'type-ii',
      label: 'Tipo II - Padrao Roido de Traca (Moth-eaten)',
      description: 'Areas irregulares de destruicao ossea com margens mal definidas',
      criteria: [
        'Multiplas areas de destruicao ossea de tamanho medio (2-5mm)',
        'Margens mal definidas e irregulares',
        'Zona de transicao ampla',
        'Destruicao cortical parcial frequente',
        'Crescimento rapido',
        'Sugere lesao maligna ou infeccao agressiva'
      ],
      treatment: 'Biopsia urgente; estadiamento completo (RM, TC torax, cintilografia); discutir em equipe multidisciplinar oncologica',
      prognosis: 'Muito provavelmente maligno; necessita diagnostico e tratamento rapidos',
      colorCode: 'danger'
    },
    {
      id: 'type-iii',
      label: 'Tipo III - Padrao Permeativo',
      description: 'Destruicao ossea difusa com margens imperceptiveis',
      criteria: [
        'Multiplas areas de destruicao ossea minusculas e confluentes',
        'Margens imperceptiveis/indistinguiveis',
        'Zona de transicao muito ampla',
        'Destruicao cortical extensa',
        'Frequente reacao periosteal agressiva (raios de sol, triangulo de Codman)',
        'Crescimento muito rapido e agressivo'
      ],
      treatment: 'Biopsia urgente com tecnica adequada; estadiamento completo; inicio rapido de quimioterapia neoadjuvante se sarcoma confirmado',
      prognosis: 'Alta probabilidade de malignidade agressiva; necessita tratamento oncologico urgente',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Tipo IA = lesao benigna inativa, Tipo III = lesao agressiva/maligna. A zona de transicao (interface entre lesao e osso normal) e o parametro mais importante para determinar a agressividade biologica da lesao.',
  pitfall: 'Mieloma multiplo pode mimetizar tipo II/III. Infeccao (osteomielite) tambem pode apresentar padrao tipo II. Sempre correlacionar com clinica, laboratorio e considerar diagnosticos nao-neoplasicos.',
  references: [
    'Lodwick GS, Wilson AJ, Farrell C, et al. Determining growth rates of focal lesions of bone from radiographs. Radiology. 1980;134(3):577-583.',
    'Madewell JE, Ragsdale BD, Sweet DE. Radiologic and pathologic analysis of solitary bone lesions. Part I: internal margins. Radiol Clin North Am. 1981;19(4):715-748.'
  ]
};
