export const kneeOsteotomyGuide = {
  id: 'knee-osteotomy-guide',
  name: 'Guia de Osteotomia do Joelho',
  category: 'guide',
  sections: [
    {
      title: 'Indicações da Osteotomia Tibial Alta (HTO)',
      content: [
        '**Paciente Ideal:**',
        '- Paciente jovem e ativo (<60 anos)',
        '- Artrose unicompartimental medial',
        '- Deformidade em varo <15°',
        '- IMC <30 (relativa)',
        '- Arco de movimento >90° de flexão',
        '- Sem contratura em flexão >10°',
        '- Instabilidade ligamentar ausente ou corrigível',
        '',
        '**Indicações Específicas:**',
        '- Artrose medial unicompartimental (Ahlback I-II ou KL 2-3)',
        '- Lesão condral medial tratada com procedimento biológico (microfratura, OATS)',
        '- Lesão meniscal medial com eixo em varo (proteção do reparo/transplante meniscal)',
        '- Complemento à reconstrução do LCA em joelhos com varo constitucional (double varus)'
      ]
    },
    {
      title: 'Planejamento Cirúrgico',
      content: [
        '**Ponto de Fujisawa:**',
        '- Eixo mecânico corrigido para passar a 62% da largura do platô tibial (a partir do lado medial)',
        '- Corresponde a leve hipercorreção em valgo',
        '- Transfere carga para compartimento lateral (saudável)',
        '',
        '**Radiografias Necessárias:**',
        '- Panorâmica dos membros inferiores em carga (escanometria)',
        '- AP e perfil do joelho em carga',
        '- Incidência de Rosenberg (PA em 45° de flexão)',
        '- Avaliar: eixo mecânico, MPTA, LDFA, slope tibial posterior',
        '',
        '**Cálculo da Correção:**',
        '- Traçar eixo mecânico atual',
        '- Definir ponto de Fujisawa desejado',
        '- Calcular ângulo de correção necessário',
        '- 1mm de abertura da cunha ≈ 1° de correção (regra prática)',
        '',
        '**Slope Tibial Posterior:**',
        '- Osteotomia de abertura medial: tende a aumentar o slope',
        '- Osteotomia de fechamento lateral: tende a diminuir o slope',
        '- Considerar nos pacientes com lesão ligamentar (LCA: manter/reduzir slope; LCP: manter/aumentar slope)'
      ]
    },
    {
      title: 'Técnicas Cirúrgicas',
      content: [
        '**Osteotomia de Abertura Medial (mais comum):**',
        '- Via medial proximal à inserção da pata de ganso',
        '- Osteotomia biplanar (protege a cortical lateral - charneira)',
        '- Abertura gradual com cunhas calibradas',
        '- Fixação com placa bloqueada específica (Tomofix, Puddu)',
        '- Enxerto ósseo: não necessário se gap <10mm; considerar se >12mm',
        '- Vantagens: preserva articulação TF proximal, ajuste preciso, corrige MPTA',
        '',
        '**Osteotomia de Fechamento Lateral:**',
        '- Ressecção de cunha óssea lateral',
        '- Fixação com placa ou grampos',
        '- Vantagens: consolidação mais previsível, não necessita enxerto',
        '- Desvantagens: altera a anatomia da TF proximal, nervoso fibular em risco',
        '',
        '**Osteotomia Femoral Distal:**',
        '- Indicada para varo de origem femoral (LDFA aumentado)',
        '- Artrose medial com deformidade femoral',
        '- Menos comum que a tibial'
      ]
    },
    {
      title: 'Contraindicações',
      content: [
        '**Absolutas:**',
        '- Artrite inflamatória (AR, lúpus)',
        '- Artrose tricompartimental',
        '- Contratura em flexão >15°',
        '- Flexão <90°',
        '',
        '**Relativas:**',
        '- Lateral thrust (impulso lateral durante marcha) - indica instabilidade ligamentar',
        '- Deformidade em varo >15°',
        '- Obesidade (IMC >35)',
        '- Idade >65 anos',
        '- Tabagismo ativo (risco de pseudartrose)',
        '- Artrose patelo-femoral sintomática',
        '- Instabilidade ligamentar não corrigida',
        '',
        '**Complicações:**',
        '- Pseudartrose / retardo de consolidação',
        '- Fratura da charneira lateral',
        '- Hipercorreção ou hipocorreção',
        '- Lesão do nervo fibular (fechamento lateral)',
        '- Síndrome compartimental (rara)',
        '- Trombose venosa profunda'
      ]
    }
  ],
  clinicalPearl: 'O ponto de Fujisawa (62% da largura do platô tibial) é o alvo de correção para osteotomia tibial alta. Sempre avaliar o slope tibial posterior, especialmente em pacientes com lesão ligamentar associada.',
  pitfall: 'Hipercorreção em valgo pode levar a artrose do compartimento lateral. Não indicar osteotomia em pacientes com artrose tricompartimental, lateral thrust ou contratura em flexão >15°.',
  references: [
    'Fujisawa Y, et al. An experimental study on the pathogenesis of osteoarthritis of the knee joint. Bull Hosp Jt Dis. 1979;40(2):141-158.',
    'Coventry MB. Osteotomy of the upper portion of the tibia for degenerative arthritis of the knee. J Bone Joint Surg Am. 1965;47:984-990.',
    'Lobenhoffer P, Agneskirchner JD. Improvements in surgical technique of valgus high tibial osteotomy. Knee Surg Sports Traumatol Arthrosc. 2003;11(3):132-138.'
  ]
};
