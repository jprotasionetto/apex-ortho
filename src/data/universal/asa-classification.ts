import type { ClassificationData } from '@/types/classification';

export const asaClassification: ClassificationData = {
  id: 'asa-classification',
  name: 'Classificação ASA (Estado Físico)',
  author: 'ASA',
  year: 1963,
  grades: [
    {
      id: 'asa-1',
      label: 'ASA I',
      description: 'Paciente saudável',
      criteria: [
        'Sem doença orgânica, fisiológica ou psiquiátrica',
        'Não fumante',
        'Uso mínimo ou ausente de álcool',
        'IMC < 30'
      ],
      treatment: 'Sem restrições anestésicas; procedimento eletivo sem precauções especiais',
      prognosis: 'Mortalidade perioperatória muito baixa (< 0.1%)',
      colorCode: 'safe'
    },
    {
      id: 'asa-2',
      label: 'ASA II',
      description: 'Doença sistêmica leve',
      criteria: [
        'Doença leve sem limitação funcional',
        'Tabagista atual',
        'Etilista social',
        'IMC 30-40',
        'HAS ou DM controlados',
        'Doença pulmonar leve',
        'Gestante'
      ],
      treatment: 'Otimização pré-operatória quando possível; sem contraindicação a anestesia geral ou regional',
      prognosis: 'Mortalidade perioperatória baixa',
      colorCode: 'safe'
    },
    {
      id: 'asa-3',
      label: 'ASA III',
      description: 'Doença sistêmica severa',
      criteria: [
        'Limitação funcional substancial',
        'DM ou HAS mal controlados',
        'DPOC moderada-severa',
        'IMC > 40',
        'Hepatite ativa',
        'Dependência ou abuso de álcool',
        'Stent cardíaco recente (> 3 meses)',
        'História de IAM, AVC, AIT ou DAC',
        'Insuficiência renal crônica em diálise regular'
      ],
      treatment: 'Avaliação cardiológica e/ou pneumológica pré-operatória; otimizar comorbidades; considerar UTI pós-operatória',
      prognosis: 'Mortalidade perioperatória moderada (1-2%)',
      colorCode: 'caution'
    },
    {
      id: 'asa-4',
      label: 'ASA IV',
      description: 'Doença sistêmica severa com ameaça constante à vida',
      criteria: [
        'IAM recente (< 3 meses)',
        'AVC recente (< 3 meses)',
        'Stent cardíaco < 3 meses',
        'Isquemia cardíaca ativa',
        'Disfunção valvar severa',
        'FEVE severamente reduzida',
        'Sepse em tratamento',
        'CIVD',
        'Insuficiência renal aguda ou descompensada'
      ],
      treatment: 'Cirurgia apenas se absolutamente necessária; otimização máxima em UTI; equipe anestésica sênior; monitorização invasiva',
      prognosis: 'Mortalidade perioperatória alta (5-25%)',
      colorCode: 'danger'
    },
    {
      id: 'asa-5',
      label: 'ASA V',
      description: 'Paciente moribundo que não se espera sobreviver sem cirurgia',
      criteria: [
        'Não se espera sobrevida nas próximas 24h sem intervenção',
        'Aneurisma aórtico roto',
        'Trauma maciço',
        'Sangramento intracraniano com efeito de massa',
        'Isquemia mesentérica com disfunção multiorgânica'
      ],
      treatment: 'Cirurgia de emergência como última tentativa; ressuscitação agressiva simultânea',
      prognosis: 'Mortalidade perioperatória muito alta (> 50%)',
      colorCode: 'danger'
    },
    {
      id: 'asa-6',
      label: 'ASA VI',
      description: 'Paciente com morte cerebral declarada, doador de órgãos',
      criteria: [
        'Morte cerebral confirmada por protocolo',
        'Manutenção de órgãos para transplante',
        'Procedimento cirúrgico para captação de órgãos'
      ],
      treatment: 'Manutenção hemodinâmica para preservação de órgãos; equipe de transplante',
      colorCode: 'info'
    }
  ],
  clinicalPearl: 'E = modificador de emergência adicionado a qualquer classe (ex: ASA IIIE). Cirurgia de emergência aumenta significativamente o risco em qualquer classe',
  pitfall: 'Avaliação subjetiva - reprodutibilidade interobservador é moderada; diferentes anestesistas podem classificar o mesmo paciente de forma diferente',
  references: [
    'American Society of Anesthesiologists. ASA Physical Status Classification System. Last approved October 2019.',
    'Saklad M. Grading of patients for surgical procedures. Anesthesiology. 1941;2(3):281-284.'
  ]
};
