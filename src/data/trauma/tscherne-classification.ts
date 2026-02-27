import type { ClassificationData } from '@/types/tool';

export const tscherneClassificationData: ClassificationData = {
  id: 'tscherne-classification',
  name: 'Classificação de Tscherne',
  author: 'Tscherne',
  year: 1984,
  epidemiology: 'Classificação de Tscherne (1982/1984) avalia lesão de tecidos moles em fraturas FECHADAS (C0–C3). Para fraturas abertas: classificação de Gustilo-Anderson (I, II, IIIA, IIIB, IIIC). Tscherne C0–C3 orienta o TIMING da fixação definitiva — crítico para prevenir complicações. Grau C2–C3: fixação externa temporária (damage control orthopedics — DCO) + RAFI diferida quando wrinkle test positivo (habitualmente 7–14 dias). Síndrome compartimental: 1–10% das fraturas fechadas da perna (emergência cirúrgica — fasciotomia <6h). Lesão de Morel-Lavallée (degloving fechado): associada a C3 → contaminação grave do hematoma = infecção pós-RAFI.',
  mechanism: 'Tscherne classifica a extensão do dano tecidual em 4 graus pela energia do trauma e comprometimento de pele, subcutâneo e músculo. C0: trauma indireto de baixa energia → tecidos moles normais → RAFI imediata segura. C1: abrasão/contusão superficial por pressão de fragmento → edema moderado → aguardar 24–48h idealmente. C2: contusão profunda, flictenas serosas, iminência compartimental → alto risco cirúrgico → fixador externo temporário; RAFI apenas com wrinkle test positivo. C3: esmagamento extenso, degloving, síndrome compartimental estabelecida, lesão vascular → damage control: fasciotomia + fixador externo + reparo vascular; RAFI definitiva adiada 5–14 dias. Princípio do wrinkle test: rugas na pele ao pinçar levemente = edema resolvido = momento seguro para RAFI definitiva.',
  grades: [
    {
      id: 'grade-0',
      label: 'Grau 0 - Lesão Mínima',
      description: 'Lesão mínima de tecidos moles',
      criteria: [
        'Energia mínima do trauma',
        'Lesão de tecidos moles negligenciável',
        'Fratura simples (indireta)',
        'Sem contusão significativa',
        'Sem edema importante'
      ],
      treatment: 'Tratamento conforme padrão da fratura. Sem preocupações especiais com tecidos moles. Fixação interna pode ser realizada em tempo habitual.',
      prognosis: 'Excelente prognóstico para tecidos moles. Consolidação sem complicações esperada.',
      colorCode: 'safe'
    },
    {
      id: 'grade-1',
      label: 'Grau 1 - Abrasão Superficial/Contusão',
      description: 'Abrasão superficial ou contusão por pressão do fragmento',
      criteria: [
        'Abrasão superficial ou escoriação',
        'Contusão por pressão interna dos fragmentos',
        'Fratura de gravidade leve a moderada',
        'Edema moderado',
        'Sem lesão de estruturas profundas'
      ],
      treatment: 'Fixação interna pode ser realizada, mas monitorizar tecidos moles. Elevação do membro. Crioterapia. Aguardar melhora do edema se necessário.',
      prognosis: 'Bom prognóstico. Risco baixo de complicações de tecidos moles.',
      colorCode: 'caution'
    },
    {
      id: 'grade-2',
      label: 'Grau 2 - Contusão Profunda/Iminência Compartimental',
      description: 'Contusão profunda contaminada com iminência de síndrome compartimental',
      criteria: [
        'Contusão profunda e contaminada da pele',
        'Abrasão com contaminação significativa',
        'Iminência de síndrome compartimental',
        'Fratura de alta energia (cominutiva)',
        'Edema importante e tenso',
        'Flictenas podem estar presentes'
      ],
      treatment: 'Fixação externa temporária se tecidos moles impedem cirurgia imediata. Elevação, monitorização de pressão compartimental. Fasciotomia se indicada. RAFI apenas quando wrinkle test positivo.',
      prognosis: 'Prognóstico reservado. Risco significativo de síndrome compartimental, infecção e problemas de cicatrização.',
      colorCode: 'danger'
    },
    {
      id: 'grade-3',
      label: 'Grau 3 - Esmagamento/Síndrome Compartimental',
      description: 'Esmagamento extenso com síndrome compartimental ou lesão vascular',
      criteria: [
        'Esmagamento extenso da pele e tecidos subcutâneos',
        'Destruição muscular significativa',
        'Síndrome compartimental estabelecida',
        'Lesão vascular principal pode estar presente',
        'Avulsão de pele/degloving (Morel-Lavallée)',
        'Fratura altamente cominutiva de alta energia'
      ],
      treatment: 'Fasciotomia de emergência se síndrome compartimental. Fixação externa temporária. Reparo vascular se necessário. Desbridamento seriado. RAFI definitiva apenas após recuperação dos tecidos moles.',
      prognosis: 'Prognóstico grave. Alto risco de complicações: necrose de tecidos moles, infecção profunda, pseudoartrose, amputação.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Complementa a classificação da fratura com avaliação de tecidos moles. O timing cirúrgico deve ser baseado nas condições dos tecidos moles, não apenas no padrão da fratura.',
  pitfall: 'Lesão de tecidos moles pode piorar nas primeiras 24-48h. Reavaliação seriada é essencial. O wrinkle test (aparecimento de rugas na pele) indica melhora do edema e momento adequado para cirurgia.',
  references: [
    {
      authors: 'Tscherne H, Oestern HJ',
      title: 'Die Klassifizierung des Weichteilschadens bei offenen und geschlossenen Frakturen',
      journal: 'Unfallheilkunde',
      year: 1982
    },
    {
      authors: 'Oestern HJ, Tscherne H',
      title: 'Pathophysiology and classification of soft tissue injuries associated with fractures',
      journal: 'Fractures with Soft Tissue Injuries. Springer',
      year: 1984
    }
  ]
};
