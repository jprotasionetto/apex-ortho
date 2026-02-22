import type { ClassificationData } from '@/types/classification';

export const clavienDindoClassification: ClassificationData = {
  id: 'clavien-dindo',
  name: 'Classificação de Clavien-Dindo (Complicações Cirúrgicas)',
  author: 'Clavien/Dindo',
  year: 2004,
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
