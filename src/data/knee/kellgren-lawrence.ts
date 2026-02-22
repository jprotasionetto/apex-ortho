import type { ClassificationData } from '@/types/classification';

export const kellgrenLawrenceClassification: ClassificationData = {
  id: 'kellgren-lawrence',
  name: 'Classificação de Kellgren-Lawrence (Artrose)',
  author: 'Kellgren/Lawrence',
  year: 1957,
  grades: [
    {
      id: 'grade-0',
      label: 'Grau 0',
      description: 'Normal',
      criteria: [
        'Sem alterações radiográficas',
        'Espaço articular preservado',
        'Sem osteófitos'
      ],
      treatment: 'Nenhum tratamento específico necessário; orientações de prevenção',
      prognosis: 'Normal',
      colorCode: 'safe'
    },
    {
      id: 'grade-1',
      label: 'Grau 1',
      description: 'Duvidoso',
      criteria: [
        'Estreitamento articular duvidoso',
        'Possíveis osteófitos incipientes',
        'Significância clínica questionável'
      ],
      treatment: 'Modificação de atividade, fortalecimento muscular, perda de peso se necessário',
      prognosis: 'Pode ou não progredir; monitorização',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau 2',
      description: 'Leve',
      criteria: [
        'Osteófitos definidos',
        'Possível estreitamento do espaço articular',
        'Sem esclerose subcondral significativa'
      ],
      treatment: 'Fisioterapia, anti-inflamatórios, perda de peso, viscossuplementação',
      prognosis: 'Progressão lenta esperada; bom prognóstico com medidas conservadoras',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau 3',
      description: 'Moderado',
      criteria: [
        'Osteófitos moderados múltiplos',
        'Estreitamento articular definido',
        'Alguma esclerose subcondral',
        'Possível deformidade dos contornos ósseos'
      ],
      treatment: 'Tratamento conservador otimizado; considerar osteotomia ou artroplastia unicompartimental em pacientes selecionados',
      prognosis: 'Progressão provável; pode necessitar intervenção cirúrgica',
      colorCode: 'danger'
    },
    {
      id: 'grade-4',
      label: 'Grau 4',
      description: 'Severo',
      criteria: [
        'Osteófitos grandes',
        'Estreitamento articular marcado',
        'Esclerose subcondral severa',
        'Deformidade definida dos contornos ósseos'
      ],
      treatment: 'Artroplastia total do joelho',
      prognosis: 'Indicação cirúrgica na maioria dos pacientes sintomáticos',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sistema de classificação mais amplamente utilizado mundialmente para artrose; essencial radiografia em carga para avaliação precisa',
  pitfall: 'Baixa correlação entre achados radiográficos e sintomas clínicos - tratar o paciente, não o raio-X',
  references: [
    'Kellgren JH, Lawrence JS. Radiological assessment of osteo-arthrosis. Ann Rheum Dis. 1957;16(4):494-502.'
  ]
};
