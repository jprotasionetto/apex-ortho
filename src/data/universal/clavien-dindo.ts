import type { ClassificationData } from '@/types/classification';

export const clavienDindoClassification: ClassificationData = {
  id: 'clavien-dindo',
  name: 'Classificação de Clavien-Dindo (Complicações Cirúrgicas)',
  author: 'Clavien/Dindo',
  year: 2004,
  epidemiology: 'Classificação de Clavien-Dindo (2004) é o sistema de graduação de complicações cirúrgicas mais utilizado no mundo — >100.000 citações. Proposta por Pierre-Alain Clavien (1992) e refinada por Dindo, Demartines e Clavien (2004) em coorte de 6.336 pacientes. Taxas de complicação em ortopedia: ATQ = 15–25% (maioria Grau I-II), ATJ = 10–20%, fixação de fratura exposta = 20–35% (Grau II-IIIb). Complicações requerendo reoperação (Grau IIIb ou mais): 2–5% em cirurgias eletivas, 10–20% em trauma de alta energia. Complicações mais comuns por módulo: infecção de sítio cirúrgico (Grau II-IIIb), hematoma (Grau I-IIIa), TVP/TEP (Grau II-IVa), soltura/falha de implante (Grau IIIb). Sufixo "d" (disability): adicionado quando complicação persiste com incapacidade residual na alta hospitalar — ex: "Grau IIIbd" para reoperação com sequela funcional persistente.',
  mechanism: 'A classificação Clavien-Dindo não descreve um mecanismo fisiopatológico, mas uma hierarquia de gravidade baseada no TRATAMENTO necessário para resolver a complicação. Princípio: o grau reflete a intervenção terapêutica mais invasiva necessária — quanto mais invasiva, maior o grau. Hierarquia: Graus I-II = tratamento não invasivo (medidas de suporte, medicamentos, transfusão); Grau IIIa-b = intervenção invasiva sem/com anestesia geral (radiologia intervencionista, endoscopia, reoperação); Grau IVa-b = risco de vida com suporte orgânico em UTI (disfunção de 1 vs múltiplos órgãos); Grau V = óbito. Vantagem sobre sistemas anteriores: padronização objetiva permite comparação de resultados entre centros, estudos multicêntricos e auditorias de qualidade cirúrgica. Limitação: subjetividade no limiar de indicação de intervenção pode gerar discordância entre observadores — ex: drenagem de hematoma sob anestesia local (Grau IIIa) vs sob anestesia geral (Grau IIIb). Regra: classificar pela complicação mais GRAVE quando múltiplas estiverem presentes.',
  grades: [
    {
      id: 'grade-1',
      label: 'Grau I',
      description: 'Desvio do curso pós-operatório normal sem necessidade de tratamento farmacológico, cirúrgico, endoscópico ou radiológico intervencionista',
      criteria: [
        'Complicação que não requer tratamento específico',
        'Permitido: antieméticos, antipiréticos, analgésicos, diuréticos, eletrólitos',
        'Fisioterapia e drenagem de infecção de ferida à beira do leito',
        'Sem necessidade de intervenção sob anestesia'
      ],
      treatment: 'Medidas de suporte à beira do leito; cuidados de enfermagem; medicações sintomáticas básicas',
      prognosis: 'Excelente; resolução esperada sem sequelas',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau II',
      description: 'Tratamento farmacológico com drogas além das permitidas no Grau I; transfusão sanguínea; nutrição parenteral total',
      criteria: [
        'Necessidade de tratamento farmacológico específico',
        'Antibióticos intravenosos',
        'Transfusão de hemoderivados',
        'Nutrição parenteral total (NPT)',
        'Exemplos: infecção de ferida com ATB IV, TVP com anticoagulação, anemia com transfusão'
      ],
      treatment: 'Farmacoterapia específica; monitorização clínica intensificada; investigação complementar',
      prognosis: 'Bom; resolução esperada com tratamento adequado',
      colorCode: 'caution'
    },
    {
      id: 'grade-3a',
      label: 'Grau IIIa',
      description: 'Intervenção cirúrgica, endoscópica ou radiológica SEM anestesia geral',
      criteria: [
        'Necessidade de intervenção invasiva',
        'Realizada sob anestesia local ou sedação',
        'Sem necessidade de anestesia geral',
        'Exemplos: drenagem de hematoma sob anestesia local, punção guiada por imagem'
      ],
      treatment: 'Procedimento intervencionista sob sedação/local; monitorização pós-procedimento',
      prognosis: 'Moderado; recuperação com intervenção adequada',
      colorCode: 'caution'
    },
    {
      id: 'grade-3b',
      label: 'Grau IIIb',
      description: 'Intervenção cirúrgica, endoscópica ou radiológica SOB anestesia geral',
      criteria: [
        'Necessidade de reintervenção sob anestesia geral',
        'Reoperação em centro cirúrgico',
        'Exemplos: lavagem articular por infecção, revisão de síntese, desbridamento sob AG'
      ],
      treatment: 'Reoperação sob anestesia geral; novo planejamento cirúrgico; cuidados pós-operatórios intensivos',
      prognosis: 'Variável; dependente da causa e extensão da reintervenção',
      colorCode: 'danger'
    },
    {
      id: 'grade-4a',
      label: 'Grau IVa',
      description: 'Disfunção de órgão único (incluindo diálise) com necessidade de UTI',
      criteria: [
        'Complicação com risco de vida',
        'Disfunção de um único órgão',
        'Necessidade de internação em UTI',
        'Exemplos: insuficiência renal aguda com diálise, embolia pulmonar com instabilidade, IAM pós-operatório'
      ],
      treatment: 'Cuidados intensivos em UTI; suporte orgânico específico; equipe multidisciplinar',
      prognosis: 'Reservado; mortalidade significativa dependente da disfunção',
      colorCode: 'danger'
    },
    {
      id: 'grade-4b',
      label: 'Grau IVb',
      description: 'Disfunção de múltiplos órgãos com necessidade de UTI',
      criteria: [
        'Complicação com risco de vida iminente',
        'Disfunção de dois ou mais órgãos',
        'Necessidade de suporte orgânico múltiplo em UTI',
        'Exemplos: sepse com disfunção multiorgânica, SDRA + IRA pós-operatória'
      ],
      treatment: 'Suporte multiorgânico intensivo em UTI; vasopressores; ventilação mecânica; diálise',
      prognosis: 'Grave; mortalidade elevada',
      colorCode: 'danger'
    },
    {
      id: 'grade-5',
      label: 'Grau V',
      description: 'Óbito',
      criteria: [
        'Morte do paciente como consequência de complicação cirúrgica'
      ],
      treatment: 'N/A',
      prognosis: 'Óbito',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Padroniza a comunicação de complicações cirúrgicas em publicações e auditorias; usar o sufixo "d" quando a complicação persiste com disability na alta',
  pitfall: 'Classificar pela complicação mais grave quando múltiplas estão presentes; não subdimensionar para melhorar estatísticas institucionais',
  references: [
    'Dindo D, Demartines N, Clavien PA. Classification of surgical complications: a new proposal with evaluation in a cohort of 6336 patients and results of a survey. Ann Surg. 2004;240(2):205-213.',
    'Clavien PA, et al. The Clavien-Dindo classification of surgical complications: five-year experience. Ann Surg. 2009;250(2):187-196.'
  ]
};
