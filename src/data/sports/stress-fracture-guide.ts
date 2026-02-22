import type { GuideData } from '@/types/guide';

export const stressFractureGuide: GuideData = {
  id: 'stress-fracture-guide',
  name: 'Guia de Fraturas de Estresse',
  description: 'Diagnóstico, classificação de risco e manejo de fraturas de estresse em atletas',
  sections: [
    {
      id: 'risk-factors',
      title: 'Fatores de Risco',
      content: [
        'Tríade da atleta feminina / RED-S (Relative Energy Deficiency in Sport): baixa disponibilidade energética, disfunção menstrual, baixa densidade óssea',
        'Aumento rápido do volume ou intensidade de treinamento (regra dos 10%/semana)',
        'Alterações biomecânicas: hiperpronação, discrepância de MMII, pé cavo rígido',
        'Deficiência de cálcio e vitamina D',
        'Uso de fluoroquinolonas e corticosteroides sistêmicos',
        'Baixa massa óssea (osteopenia/osteoporose)',
        'História prévia de fratura de estresse (risco 5x maior)',
        'Tabagismo e uso de álcool',
        'Superfície de treino inadequada (piso duro, terreno irregular)'
      ],
      keyPoints: [
        'RED-S/tríade da atleta: investigar em toda atleta com fratura de estresse',
        'Aumento rápido de carga é o fator modificável mais comum',
        'Avaliar vitamina D e cálcio em todos os pacientes'
      ],
      colorCode: 'caution'
    },
    {
      id: 'high-risk-sites',
      title: 'Localizações de ALTO Risco',
      content: [
        'Colo femoral (lado tensão/superior): risco de fratura completa e deslocamento; cirurgia frequente',
        'Tíbia anterior (cortical anterior): "dreaded black line"; consolidação lenta; pode necessitar fixação',
        'Navicular (corpo): consolidação pobre; frequentemente requer fixação com parafuso',
        '5º metatarso proximal (zona 2 - Jones): alto risco de pseudartrose; frequentemente cirúrgico',
        'Patela: rara mas com risco de fratura completa',
        'Sesamoides do hallux: consolidação lenta',
        'Maléolo medial: risco de propagação; pode necessitar fixação'
      ],
      keyPoints: [
        'Alto risco = tensão cortical, vascularização pobre, ou risco de deslocamento',
        'Frequentemente requerem tratamento cirúrgico',
        'Retorno ao esporte mais prolongado (3-6+ meses)'
      ],
      colorCode: 'danger'
    },
    {
      id: 'low-risk-sites',
      title: 'Localizações de BAIXO Risco',
      content: [
        'Tíbia posteromedial: mais comum de todas; consolidação previsível',
        'Fíbula distal: geralmente próximo ao maléolo lateral',
        'Diáfise dos metatarsos (2º e 3º): "fraturas de marcha"',
        'Colo femoral (lado compressão/inferior): melhor prognóstico que lado tensão',
        'Calcâneo: resposta a repouso relativo',
        'Pelve (ramo púbico, sacro): consolidação com repouso'
      ],
      keyPoints: [
        'Baixo risco = compressão cortical, boa vascularização',
        'Geralmente tratamento conservador eficaz',
        'Retorno ao esporte em 4-8 semanas'
      ],
      colorCode: 'safe'
    },
    {
      id: 'imaging',
      title: 'Imagem',
      content: [
        'Radiografia convencional: sensibilidade de apenas 10-50% nas primeiras 2-3 semanas',
        'RM: padrão ouro; sensibilidade > 95%; identifica edema ósseo precoce (graus de Fredericson)',
        'Cintilografia óssea: sensível (> 95%) mas pouco específica; raramente usada atualmente',
        'TC: complementar para avaliar linha de fratura, cortical anterior da tíbia, navicular',
        'Graus de Fredericson (RM): Grau 1 (periosteal edema), Grau 2 (marrow edema em T2), Grau 3 (marrow edema em T1 e T2), Grau 4 (linha de fratura visível)'
      ],
      keyPoints: [
        'RM é o exame de escolha (padrão ouro)',
        'Radiografia normal NÃO exclui fratura de estresse',
        'TC para planejamento cirúrgico em sítios de alto risco'
      ],
      colorCode: 'info'
    },
    {
      id: 'treatment',
      title: 'Tratamento',
      content: [
        'Alto risco: avaliação cirúrgica precoce; fixação profilática do colo femoral (lado tensão); parafuso para navicular e Jones',
        'Baixo risco: repouso relativo com descarga parcial conforme dor; cross-training (natação, bicicleta)',
        'Suplementação: cálcio 1000-1500mg/dia + vitamina D 1000-2000 UI/dia',
        'Correção de fatores de risco: disponibilidade energética, biomecânica, superfície de treino',
        'Retorno gradual: iniciar caminhada sem dor → corrida leve → progressão em 10%/semana',
        'Monitorar sintomas: qualquer retorno de dor = regredir atividade',
        'Considerar terapia com ondas de choque em pseudartrose de sítios de baixo risco'
      ],
      keyPoints: [
        'Alto risco: frequentemente cirúrgico',
        'Baixo risco: repouso relativo + cross-training',
        'Suplementar cálcio e vitamina D em todos'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'Toda atleta feminina com fratura de estresse deve ser investigada para RED-S: avaliar status menstrual, disponibilidade energética e densitometria óssea',
  pitfall: 'Fratura de estresse do colo femoral lado tensão (superior) pode progredir para fratura completa deslocada - é uma urgência ortopédica que requer fixação imediata',
  references: [
    'Fredericson M, et al. Stress fractures in athletes. Top Magn Reson Imaging. 2006;17(5):309-325.',
    'Nattiv A, et al. American College of Sports Medicine position stand. The female athlete triad. Med Sci Sports Exerc. 2007;39(10):1867-1882.',
    'Tenforde AS, et al. Evaluating the relationship of calcium and vitamin D in the prevention of stress fracture injuries in the young athlete: a review of the literature. PM R. 2010;2(10):945-949.'
  ]
};
