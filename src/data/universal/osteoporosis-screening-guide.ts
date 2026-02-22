import type { GuideData } from '@/types/guide';

export const osteoporosisScreeningGuide: GuideData = {
  id: 'osteoporosis-screening-guide',
  name: 'Guia de Rastreamento de Osteoporose',
  description: 'Indicações de rastreamento, diagnóstico, tratamento e monitoramento da osteoporose em ortopedia',
  sections: [
    {
      id: 'indications',
      title: 'Indicações de Rastreamento',
      content: [
        'Todas as mulheres ≥ 65 anos',
        'Todos os homens ≥ 70 anos',
        'Mulheres pós-menopausa < 65 anos com fatores de risco:',
        '  - Baixo peso corporal (< 57kg / IMC < 20)',
        '  - Uso de corticosteroides (≥ 5mg prednisona/dia por ≥ 3 meses)',
        '  - História familiar de fratura de quadril',
        '  - Tabagismo ativo',
        '  - Etilismo (> 3 doses/dia)',
        'Fratura por fragilidade em QUALQUER idade (principal indicação em ortopedia)',
        'Pacientes em uso crônico de corticosteroides',
        'Doenças associadas: artrite reumatoide, hiperparatireoidismo, hipertireoidismo, doença celíaca, DII',
        'Homens < 70 anos com fatores de risco (hipogonadismo, uso de glicocorticoides)'
      ],
      keyPoints: [
        'Mulheres ≥ 65 e homens ≥ 70: rastreamento universal',
        'Fratura por fragilidade = densitometria obrigatória',
        'Corticoterapia crônica = rastreamento independente de idade'
      ],
      colorCode: 'info'
    },
    {
      id: 'diagnosis',
      title: 'Diagnóstico',
      content: [
        'Densitometria óssea (DXA): padrão ouro para diagnóstico',
        'Locais de medição: coluna lombar (L1-L4), fêmur proximal (colo e total), rádio distal 33%',
        'T-score (comparação com adulto jovem):',
        '  - T-score > -1.0: Normal',
        '  - T-score -1.0 a -2.5: Osteopenia',
        '  - T-score ≤ -2.5: Osteoporose',
        '  - T-score ≤ -2.5 com fratura por fragilidade: Osteoporose severa/estabelecida',
        'Usar o MENOR T-score entre os locais medidos',
        'Z-score: usar em mulheres pré-menopausa e homens < 50 anos (Z-score ≤ -2.0 = abaixo do esperado)',
        'Exames complementares: cálcio, fósforo, PTH, vitamina D 25-OH, função tireoidiana, proteínas totais, eletroforese de proteínas'
      ],
      keyPoints: [
        'T-score ≤ -2.5 = osteoporose',
        'Usar o menor T-score para diagnóstico',
        'Sempre solicitar vitamina D e cálcio sérico'
      ],
      colorCode: 'caution'
    },
    {
      id: 'frax',
      title: 'Ferramenta FRAX',
      content: [
        'FRAX (Fracture Risk Assessment Tool): calcula probabilidade de fratura em 10 anos',
        'Fatores incluídos: idade, sexo, IMC, fratura prévia, fratura de quadril nos pais, tabagismo, uso de glicocorticoides, artrite reumatoide, álcool, DMO (opcional)',
        'Resultado: probabilidade em 10 anos de fratura osteoporótica maior e de quadril',
        'Limiar de tratamento (Brasil/guidelines gerais):',
        '  - Fratura de quadril em 10 anos ≥ 3%',
        '  - Fratura osteoporótica maior em 10 anos ≥ 20%',
        'FRAX auxilia decisão de tratamento em pacientes com osteopenia (T-score entre -1.0 e -2.5)',
        'Limitações: não avalia quedas, dose de corticoide, número de fraturas prévias'
      ],
      keyPoints: [
        'FRAX ≥ 3% (quadril) ou ≥ 20% (maior): tratar',
        'Útil especialmente para decisão em osteopenia',
        'Disponível online: www.sheffield.ac.uk/FRAX'
      ],
      colorCode: 'safe'
    },
    {
      id: 'treatment',
      title: 'Tratamento',
      content: [
        'Medidas gerais: cálcio 1000-1200mg/dia (dieta + suplemento), vitamina D 1000-2000 UI/dia (manter 25-OH-D > 30ng/mL), exercício com impacto, prevenção de quedas',
        'Bisfosfonatos (primeira linha):',
        '  - Alendronato 70mg VO 1x/semana',
        '  - Risedronato 35mg VO 1x/semana ou 150mg 1x/mês',
        '  - Ácido zoledrônico 5mg IV 1x/ano',
        'Denosumabe 60mg SC a cada 6 meses: alternativa se intolerância ou IRC a bisfosfonatos',
        'Teriparatida 20mcg SC diário (PTH 1-34): osteoporose severa (T-score ≤ -3.0 ou múltiplas fraturas); anabólico; máximo 2 anos',
        'Romosozumabe 210mg SC mensal por 12 meses: novo anabólico (anti-esclerostina); seguido por antirreabsortivo',
        'TRH (terapia de reposição hormonal): não é primeira linha para osso; considerar se sintomas climatéricos'
      ],
      keyPoints: [
        'Bisfosfonatos: primeira linha na maioria dos casos',
        'Teriparatida/Romosozumabe: para osteoporose severa',
        'SEMPRE suplementar cálcio + vitamina D'
      ],
      colorCode: 'safe'
    },
    {
      id: 'monitoring',
      title: 'Monitoramento',
      content: [
        'Repetir DXA em 2 anos (mínimo) após início do tratamento',
        'Estabilização ou aumento do T-score: tratamento eficaz',
        'Perda > 5% de DMO apesar de tratamento: avaliar adesão, absorção, causas secundárias',
        'Marcadores de remodelação óssea: CTX sérico (reabsorção), P1NP (formação); úteis para monitorar adesão',
        'Drug holiday (pausa de bisfosfonatos): após 5 anos de uso oral ou 3 anos de IV em pacientes de baixo risco; manter vitamina D e cálcio',
        'Reavaliar risco a cada 2-3 anos durante drug holiday',
        'Denosumabe: NÃO fazer drug holiday (risco de efeito rebote com fraturas vertebrais); transicionar para bisfosfonato ao descontinuar',
        'Acompanhamento odontológico: risco de osteonecrose de mandíbula com antirreabsortivos (baixo mas real)'
      ],
      keyPoints: [
        'DXA de controle a cada 2 anos',
        'Drug holiday após 5 anos de bisfosfonato oral',
        'NUNCA parar denosumabe abruptamente - transicionar'
      ],
      colorCode: 'caution'
    }
  ],
  clinicalPearl: 'Todo paciente com fratura de fragilidade (queda da própria altura) atendido pelo ortopedista DEVE ser investigado para osteoporose - a "lacuna de tratamento" (treatment gap) é a principal falha no manejo',
  pitfall: 'Descontinuação abrupta de denosumabe causa efeito rebote com aumento rápido da reabsorção óssea e risco de fraturas vertebrais múltiplas - sempre transicionar para bisfosfonato',
  references: [
    'Kanis JA, et al. FRAX and the assessment of fracture probability in men and women from the UK. Osteoporos Int. 2008;19(4):385-397.',
    'Eastell R, et al. Pharmacological management of osteoporosis in postmenopausal women: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2019;104(5):1595-1622.',
    'Compston J, et al. UK clinical guideline for the prevention and treatment of osteoporosis. Arch Osteoporos. 2017;12(1):43.'
  ]
};
