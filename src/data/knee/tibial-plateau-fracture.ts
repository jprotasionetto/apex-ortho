import type { ClassificationData } from '@/types/classification';

export const tibialPlateauFractureClassification: ClassificationData = {
  id: 'tibial-plateau-fracture',
  name: 'Classificação de Kfuri-Schatzker (Fratura do Platô Tibial)',
  author: 'Kfuri & Schatzker',
  year: 2018,
  epidemiology: 'Fraturas do platô tibial representam 1% de todas as fraturas e 8% das fraturas em idosos. Incidência: 10–13/100.000/ano. Distribuição: Tipo II mais comum (~25%), Tipo VI mais grave. Bimodal: adultos jovens (alta energia: acidentes, quedas de altura) e idosos >60a (baixa-moderada energia, osso osteoporótico). Lesões ligamentares associadas em 20–50% (LCA, ligamentos colaterais). Lesão vascular em Tipo IV–VI: 5–10% (artéria poplítea). Síndrome compartimental em Tipo V–VI: 2–5%. Classificação original de Schatzker (1979) revisada por Kfuri (2018) incorporando conceito de 3 colunas identificadas na TC 3D.',
  mechanism: 'Mecanismo: carga axial + momento em varo/valgo sobre o joelho. Tipos I–III (coluna lateral): força em valgo → carga transmitida pelo côndilo femoral lateral ao platô tibial → cisalhamento puro (I, osso denso jovem), impactação + cisalhamento (II, mais comum), impactação pura (III, osso osteoporótico). Tipo IV (coluna medial): força em varo de alta energia → frequentemente arrasta fragmento posterior = coluna posterior. Tipos V–VI: alta energia biaxial ou axial → ambas colunas acometidas; Tipo VI = dissociação metáfiso-diafisária completa. Conceito de 3 colunas de Kfuri: TC axial identifica fragmento posterior ("coluna posterior") invisível no RX — presente em 30–40% das fraturas bicondilares → determina necessidade de abordagem posteromedial adicional.',
  revision: 'Atualização da classificação original de Schatzker (1979) com conceito de colunas (lateral, medial e posterior) para planejamento cirúrgico baseado em TC 3D.',
  grades: [
    {
      id: 'type-i',
      label: 'Tipo I',
      description: 'Cisalhamento lateral puro (cunha lateral)',
      criteria: [
        'Fratura em cunha do côndilo lateral',
        'Sem depressão articular associada',
        'Tipicamente em pacientes jovens com osso denso',
        'Mecanismo de baixa energia, força em valgo',
        'Coluna lateral acometida'
      ],
      treatment: 'RAFI se degrau articular >2mm ou alargamento condilar >5mm. Placa de suporte lateral ou parafusos de tração percutâneos em fraturas minimamente deslocadas.',
      prognosis: 'Bom prognóstico com redução anatômica.',
      colorCode: 'safe'
    },
    {
      id: 'type-ii',
      label: 'Tipo II',
      description: 'Cisalhamento lateral com depressão (combinada)',
      criteria: [
        'Cunha lateral com depressão central da superfície articular',
        'Tipo mais comum (~25% das fraturas do platô tibial)',
        'Energia moderada',
        'Coluna lateral acometida',
        'Avaliar envolvimento da coluna posterior na TC'
      ],
      treatment: 'RAFI com elevação do fragmento deprimido, enxerto ósseo ou substituto para depressão, placa de suporte lateral (buttress). Considerar artroscopia assistida para avaliar redução articular.',
      prognosis: 'Bom prognóstico, depende da restauração da superfície articular.',
      colorCode: 'caution'
    },
    {
      id: 'type-iii',
      label: 'Tipo III',
      description: 'Depressão lateral pura',
      criteria: [
        'Depressão central do platô lateral sem componente de cisalhamento (cunha)',
        'Pacientes mais idosos com osso osteoporótico',
        'Coluna lateral acometida',
        'Avaliar extensão da depressão na TC com cortes coronais e sagitais'
      ],
      treatment: 'Elevação do fragmento deprimido com enxerto ósseo, RAFI se depressão >2-3mm. Técnica de balão (tamp) pode ser utilizada. Placa de suporte ou parafusos subcondrais.',
      prognosis: 'Prognóstico razoável a bom. Atenção à qualidade óssea.',
      colorCode: 'caution'
    },
    {
      id: 'type-iv',
      label: 'Tipo IV',
      description: 'Fratura do côndilo medial',
      criteria: [
        'Fratura do côndilo medial (cisalhamento ou cisalhamento-depressão)',
        'Lesão de ALTA ENERGIA',
        'Risco de lesão do nervo fibular e lesão vascular (artéria poplítea)',
        'Instabilidade frequente com lesão ligamentar associada',
        'Coluna medial acometida; avaliar coluna posterior na TC'
      ],
      treatment: 'RAFI, frequentemente requer dupla placa (medial e lateral). Avaliação vascular obrigatória. Abordagem posteromedial pode ser necessária para fragmentos posteriores.',
      prognosis: 'Prognóstico mais reservado que tipos laterais. Alta taxa de complicações.',
      colorCode: 'danger'
    },
    {
      id: 'type-v',
      label: 'Tipo V',
      description: 'Fratura bicondiliana',
      criteria: [
        'Fraturas de ambos os côndilos medial e lateral',
        'Continuidade metáfiso-diafisária preservada',
        'Alta energia',
        'Frequente envolvimento das três colunas (lateral, medial e posterior)',
        'Lesões de partes moles significativas'
      ],
      treatment: 'Dupla placa (medial + lateral). Abordagem estadiada se comprometimento de partes moles (fixador externo temporário seguido de RAFI definitiva). Planejamento com TC 3D e conceito de 3 colunas para definir vias de acesso.',
      prognosis: 'Prognóstico reservado. Alto risco de rigidez e artrose pós-traumática.',
      colorCode: 'danger'
    },
    {
      id: 'type-vi',
      label: 'Tipo VI',
      description: 'Fratura do platô com dissociação metáfiso-diafisária',
      criteria: [
        'Fratura do platô tibial com separação completa da diáfise',
        'Maior energia, tipo mais grave',
        'Alto risco de síndrome compartimental',
        'Frequente lesão vascular e nervosa associada',
        'Dissociação das três colunas em relação à diáfise'
      ],
      treatment: 'Abordagem estadiada: fixador externo temporário seguido de RAFI definitiva quando partes moles permitirem. Frequentemente requer dupla placa + fixação metafisária. Monitorizar síndrome compartimental com fasciotomias profiláticas se necessário.',
      prognosis: 'Pior prognóstico. Alta taxa de complicações (infecção, síndrome compartimental, artrose, rigidez).',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Conceito de 3 colunas (Kfuri): coluna lateral, coluna medial e coluna posterior. O planejamento cirúrgico baseado em TC 3D com análise das 3 colunas é agora o padrão, permitindo definir as vias de acesso e o posicionamento das placas de forma individualizada para cada padrão de fratura.',
  pitfall: 'Fraturas da coluna posterior são frequentemente não visualizadas em radiografias simples (AP e perfil). A TC com reconstrução 3D é indispensável para identificar fragmentos posteriores que, se não tratados, levam a subluxação posterior e falha da fixação.',
  references: [
    'Schatzker J, McBroom R, Bruce D. The tibial plateau fracture. The Toronto experience 1968-1975. Clin Orthop Relat Res. 1979;(138):94-104.',
    'Kfuri M, Schatzker J. Revisiting the Schatzker classification of tibial plateau fractures. Injury. 2018;49(12):2252-2263.'
  ]
};
