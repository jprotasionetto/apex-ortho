import type { ClassificationData } from '@/types/tool';

export const hawkinsClassificationData: ClassificationData = {
  id: 'hawkins-classification',
  name: 'Classificação de Hawkins — Fraturas do Colo do Tálus',
  author: 'Hawkins',
  year: 1970,
  revision: 'Canale & Kelly (1978) — Tipo IV',
  grades: [
    {
      id: 'hawkins-i',
      label: 'Hawkins I — Sem Desvio',
      description: 'Fratura não deslocada do colo do tálus sem dislocation subtalar ou tibiotalar (AO/OTA 81B1)',
      criteria: [
        'Fratura vertical do colo do tálus sem desvio dos fragmentos',
        'Articulação subtalar (talocalcânea) mantida',
        'Articulação tibiotalar (tornozelo) mantida',
        'Articulação talonavicular mantida',
        'Suprimento vascular do tálus relativamente preservado',
        'AO/OTA 81B1 — fratura do colo, não deslocada'
      ],
      treatment: 'Conservador: imobilização gessada sem carga por 8–12 semanas com monitorização radiográfica seriada. Cirurgia se houver desvio secundário ou incapacidade de manter redução.',
      prognosis: 'Taxa de Necrose Avascular (NAV): 0–13%. Excelente prognóstico se tratado precocemente e sem desvio secundário.',
      colorCode: 'safe'
    },
    {
      id: 'hawkins-ii',
      label: 'Hawkins II — Dislocation Subtalar',
      description: 'Fratura deslocada do colo do tálus com subluxação ou luxação da articulação subtalar (AO/OTA 81B2)',
      criteria: [
        'Fratura do colo do tálus com desvio',
        'Subluxação ou luxação da articulação subtalar (talocalcânea)',
        'Articulação tibiotalar mantida',
        'Articulação talonavicular mantida',
        'Vascularização parcialmente comprometida (ramos do canal do tarso e seio do tarso)',
        'AO/OTA 81B2 — fratura do colo, deslocada + subluxação subtalar'
      ],
      treatment: 'Cirurgia: redução anatômica urgente (< 6–8h) + fixação com parafusos canulados ou esponjosos 4,0–6,5 mm (anterior para posterior ou posterior para anterior). Abordagem dupla (anteromedial + anterolateral) para visualização adequada.',
      prognosis: 'Taxa de NAV: 20–50%. Prognóstico moderado, depende da qualidade da redução e do tempo até cirurgia. Artrose pós-traumática subtalar frequente.',
      colorCode: 'caution'
    },
    {
      id: 'hawkins-iii',
      label: 'Hawkins III — Dislocation Subtalar + Tornozelo',
      description: 'Fratura deslocada com luxação das articulações subtalar e tibiotalar (AO/OTA 81B3)',
      criteria: [
        'Fratura do colo do tálus com desvio',
        'Luxação da articulação subtalar (talocalcânea)',
        'Luxação da articulação tibiotalar (tornozelo)',
        'Articulação talonavicular mantida',
        'Corpo do tálus extrusado posteromedialmente',
        'Comprometimento grave do suprimento vascular — risco extremo de NAV',
        'AO/OTA 81B3 — fratura do colo + luxação subtalar + tibiotalar'
      ],
      treatment: 'Emergência ortopédica: redução fechada imediata (se possível) ou cirúrgica urgente. Fixação com parafusos duplos. Considerar talectomia primária apenas em casos irredutíveis ou contaminação grave. Monitorar pele por risco de necrose.',
      prognosis: 'Taxa de NAV: 70–100%. Prognóstico reservado. Artrose pantalar provável. Artrodese subtalar ou pantalar frequentemente necessária como procedimento de resgate.',
      colorCode: 'danger'
    },
    {
      id: 'hawkins-iv',
      label: 'Hawkins IV — Dislocation Subtalar + Tornozelo + Talonavicular (Canale)',
      description: 'Modificação de Canale & Kelly (1978): fratura do colo com luxação das três articulações do tálus — subtalar, tibiotalar e talonavicular',
      criteria: [
        'Fratura do colo do tálus com desvio grave',
        'Luxação da articulação subtalar (talocalcânea)',
        'Luxação da articulação tibiotalar (tornozelo)',
        'Luxação adicional da articulação talonavicular',
        'Corpo do tálus completamente extrusado — "tálus flutuante"',
        'Destruição completa do suprimento vascular do tálus',
        'Rara — representa a forma mais grave da classificação'
      ],
      treatment: 'Emergência absoluta. Redução e fixação cirúrgica imediata. Altíssimo risco de NAV e infecção. Talectomia primária ou artrodese tibiocalcânea pode ser necessária em lesões abertas graves ou NAV total confirmada.',
      prognosis: 'Taxa de NAV: aproximadamente 100%. Prognóstico extremamente reservado. Artrodese pantalar ou tibiocalcânea frequentemente o desfecho final. Amputação rara mas possível em lesões abertas graves.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sinal de Hawkins (Hawkins Sign): banda radiolucente subcondral na cúpula do tálus visível na incidência AP do tornozelo entre 6–8 semanas após a fratura. Indica reabsorção óssea subcondral = vascularização preservada = NAV improvável. A AUSÊNCIA do sinal de Hawkins sugere NAV em evolução, mas não é diagnóstica isoladamente. Solicitar RM para confirmar NAV se ausência do sinal. Incidência de Canale (15° pronação + tubo inclinado 75° cefálico): melhor visualização do colo do tálus para avaliação do desvio.',
  pitfall: 'Não confundir o Sinal de Hawkins com a Classificação de Hawkins — são conceitos distintos. A classificação determina o prognóstico vascular; o sinal radiográfico avalia a vitalidade óssea. Fraturas do processo lateral do tálus ("snowboarder fracture") não fazem parte desta classificação. Risco de desvio secundário em fraturas Hawkins I tratadas conservadoramente — radiografias seriadas obrigatórias. O colo do tálus é a região mais fraca, correspondendo à transição entre corpo e cabeça, e é examinado melhor na incidência oblíqua de Canale.',
  references: [
    {
      authors: 'Hawkins LG',
      title: 'Fractures of the neck of the talus',
      journal: 'J Bone Joint Surg Am',
      year: 1970
    },
    {
      authors: 'Canale ST, Kelly FB Jr',
      title: 'Fractures of the neck of the talus. Long-term evaluation of seventy-one cases',
      journal: 'J Bone Joint Surg Am',
      year: 1978
    },
    {
      authors: 'Vallier HA, Nork SE, Barei DP, Benirschke SK, Sangeorzan BJ',
      title: 'Talar neck fractures: results and outcomes',
      journal: 'J Bone Joint Surg Am',
      year: 2004
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
