import type { ClassificationData } from '@/types/classification.ts';

export const idebergScapulaClassificationData: ClassificationData = {
  id: 'ideberg-scapula-classification',
  name: 'Classificação de Ideberg/OTA — Fraturas da Escápula e Glenoide',
  author: 'Ideberg / Euler & Rüedi',
  year: 1987,
  revision: 'Euler & Rüedi modificação (1996) — Tipo VI adicionado',
  epidemiology:
    'Fraturas da escápula representam <1% de todas as fraturas e 3–5% das fraturas do cinto escapular. Incidência: ~2/100.000/ano. Associadas a trauma de ALTA ENERGIA: acidentes motociclísticos (40%), quedas de altura (30%), atropelamento (20%). Relação M:F 4–5:1. A escápula é protegida pela musculatura ao redor — sua fratura sinaliza energia EXTREMAMENTE ALTA e implica busca sistemática de lesões associadas. Lesões associadas em >90% dos casos: pneumotórax/hemotórax (55%), fratura de costelas (45%), fratura da clavícula (35%), lesão da articulação AC (25%), lesão do plexo braquial (13%), lesão vascular (10%). "Síndrome do ombro flutuante" (floating shoulder) = fratura escápula + fratura clavícula ipsilateral = instabilidade completa do cinto escapular. Fraturas glenoidianas específicas (Ideberg I–V): mais comuns após luxação de ombro (impacto do úmero contra a glenóide).',
  mechanism:
    'A escápula é protegida por músculos em todas as direções — sua fratura requer energia extrema. Tipos de fratura e mecanismos: Ideberg I (borda anterior/posterior): arrancamento ligamentar ou impacto durante luxação glenoumeral (o úmero "arranca" a borda da glenóide durante a redução ou luxação). Ideberg II (fratura inferior): compressão axial com abdução — úmero impacta a borda inferior da glenóide. Ideberg III (fratura superior): compressão axial com abdução + elevação — força pelo processo coracoide. Ideberg IV (horizontal): cisalhamento horizontal — forças complexas de alta energia. Ideberg V (combinação): mecanismos múltiplos combinados. Ideberg VI (cominuição): impacto direto ou cisalhamento extremo. Fraturas do corpo escapular: impacto direto na face posterior do ombro (mais comuns — ~50% das fraturas escapulares). "Floating shoulder": a interrupção simultânea da clavícula + escápula/glenoide remove todo o suporte ósseo do ombro → instabilidade completa do cinto escapular → indicação cirúrgica controversa.',
  surgicalBasis:
    'A maioria das fraturas escapulares (corpo, processos) é tratada CONSERVADORAMENTE pela excelente estabilidade muscular e consolidação confiável. Indicações cirúrgicas: (1) Fratura da glenoide articular (Ideberg I–VI) com desvio > 5mm ou envolvimento > 25% da superfície articular — risco de artrose glenoumeral e instabilidade. (2) Floating shoulder com cintilha livre instável — fixação da clavícula geralmente estabiliza o sistema. (3) Glenoide mediada > 25mm por fratura do colo escapular com angulação glenoidal patológica. (4) Síndrome do desfiladeiro torácico pós-traumática por calo exuberante. Via de acesso: abordagem posterior de Judet para fraturas do corpo/colo; abordagem deltopeitoral para fraturas anteriores da glenoide (Ideberg I/II/III).',
  grades: [
    {
      id: 'ideberg-i',
      label: 'Ideberg I — Fratura da Borda Glenoidal (Anterior ou Posterior)',
      description:
        'Fratura marginal da glenoide — Ia: borda anterior (mais comum após luxação anterior); Ib: borda posterior (após luxação posterior)',
      criteria: [
        'Ia: fratura da borda anterior da glenoide — associada a luxação glenoumeral anterior',
        'Ib: fratura da borda posterior da glenoide — associada a luxação glenoumeral posterior',
        'Fragmento marginal glenoidal isolado',
        'A borda fraturada compromete a contenção articular',
        'Ia é a mais comum das fraturas glenoidianas',
        'Na luxação anterior recorrente: "Bankart bony" = Ideberg Ia',
      ],
      treatment:
        'Ia com fragmento < 25% da superfície articular: conservador (tipoia 3 semanas + reabilitação). Ia com fragmento > 25% ou instabilidade recorrente: fixação artroscópica (sutura/âncoras) ou aberta (parafusos). Ib com instabilidade posterior: fixação posterior.',
      prognosis:
        'Bom com tratamento adequado. Risco de instabilidade glenoumeral recorrente se fragmento grande não fixado.',
      colorCode: 'caution',
    },
    {
      id: 'ideberg-ii',
      label: 'Ideberg II — Fratura Transversa da Glenóide Inferior',
      description:
        'Fratura transversa ou oblíqua da glenóide inferior — fragmento inferior livre',
      criteria: [
        'Linha de fratura transversa ou oblíqua atravessa a glenoide abaixo do centro',
        'Fragmento inferior da glenoide separado do corpo da escápula',
        'Pode incluir processo coracoide',
        'Mecanismo: compressão axial com membro em abdução',
        'Desvio do fragmento inferior pelo peso do úmero e tríceps',
        'AO/OTA 14A2',
      ],
      treatment:
        'Desvio < 5mm: conservador. Desvio > 5mm: RAFI via abordagem deltopeitoral inferior ou transdeltoide. Parafusos de esponjosa ou placa de reconstrução na glenoide.',
      prognosis:
        'Bom com redução anatômica. Artrose glenoumeral se incongruência residual.',
      colorCode: 'caution',
    },
    {
      id: 'ideberg-iii',
      label: 'Ideberg III — Fratura Superior da Glenoide + Coracoide',
      description:
        'Fratura superior da glenoide com extensão para o processo coracoide — pode incluir AC ou AC articulação',
      criteria: [
        'Fratura oblíqua superior da glenoide',
        'Extensão para o processo coracoide (e/ou AC)',
        'Pode comprometer a estabilidade do cinto escapular superior',
        'Associada frequentemente a fratura da clavícula → floating shoulder',
        'Lesão do plexo braquial superior possível',
        'AO/OTA 14A3',
      ],
      treatment:
        'Lesão isolada com desvio mínimo: conservador. Floating shoulder com instabilidade: fixação da clavícula geralmente restaura estabilidade. Fratura coracoide com desvio > 1cm: fixação.',
      prognosis: 'Moderado. Depende das lesões associadas (plexo braquial).',
      colorCode: 'caution',
    },
    {
      id: 'ideberg-iv',
      label: 'Ideberg IV — Fratura Horizontal Completa da Glenoide',
      description:
        'Fratura horizontal que atravessa toda a glenoide — fragmento articular separado do colo',
      criteria: [
        'Linha de fratura horizontal atravessando toda a glenoide',
        'Fragmento articular livre da glenoide separado do colo escapular',
        'Alta instabilidade da articulação glenoumeral',
        'Alta energia — lesões associadas frequentes',
        'A cabeça umeral pode subluxar inferiormente pelo peso do membro',
        'AO/OTA 14B2',
      ],
      treatment:
        'RAFI via abordagem posterior de Judet + deltopeitoral anterior. Parafusos de esponjosa atravessando a glenoide + suporte com mini-placa de reconstrução. Complexidade técnica alta.',
      prognosis:
        'Moderado a reservado. Alta energia implica lesões associadas. Rigidez residual frequente.',
      colorCode: 'danger',
    },
    {
      id: 'ideberg-v',
      label: 'Ideberg V — Fratura da Glenoide + Colo Escapular',
      description:
        'Fratura complexa combinando tipos anteriores — glenoide + colo da escápula',
      criteria: [
        'Combinação de fratura glenoidal (tipos I–IV) + fratura do colo da escápula',
        'Va: Ideberg II + fratura do colo escapular',
        'Vb: Ideberg III + fratura do colo escapular',
        'Vc: Ideberg II + III + colo (combinação completa)',
        'Instabilidade marcada do ombro',
        'Frequentemente parte de floating shoulder',
      ],
      treatment:
        'Altamente cirúrgico. RAFI da glenoide + colo + frequentemente clavícula. Abordagem combinada (Judet + deltopeitoral). Fixador externo temporário em casos politraumatizados graves.',
      prognosis:
        'Reservado. Alta complexidade. Resultado depende das lesões neurovasculares associadas.',
      colorCode: 'danger',
    },
    {
      id: 'ideberg-vi',
      label: 'Ideberg VI — Cominuição da Glenoide (Euler & Rüedi)',
      description:
        'Fratura cominutiva de toda a glenoide — não passível de reconstrução (adicionado por Euler & Rüedi 1996)',
      criteria: [
        'Cominuição de toda a glenoide articular',
        'Múltiplos fragmentos não reconstruíveis',
        'Impacto de extrema alta energia',
        'Lesões neurovasculares frequentemente associadas',
        'Superfície articular glenoidal destruída',
        'Raro — prognóstico pior de todos os tipos',
      ],
      treatment:
        'Conservador inicial se politraumatizado (dano control). Artroplastia total de ombro ou hemiartroplastia diferida em pacientes jovens ativos. Artrodese glenoumeral em casos de lesão neurológica grave.',
      prognosis:
        'Reservado. Artrose glenoumeral provável. Resultado depende do plexo braquial.',
      colorCode: 'danger',
    },
    {
      id: 'ideberg-extra',
      label: 'Fratura do Corpo / Processo Escapular (Extra-Articular)',
      description:
        'Fraturas do corpo, acrômio, coracoide ou colo sem envolvimento articular — tratamento geralmente conservador',
      criteria: [
        'Fratura do corpo escapular (mais comum — ~50% das fraturas escapulares)',
        'Fratura do processo acromial isolada',
        'Fratura do colo escapular sem desvio glenoidal',
        'Sem envolvimento da superfície articular',
        'Estabilidade muscular geralmente preservada',
        'Consolidação confiável mesmo com fragmentos deslocados',
      ],
      treatment:
        'Conservador: tipoia 3–6 semanas + fisioterapia precoce a partir de 2 semanas. Exceção: colo escapular com angulação > 40° ou mediação > 25mm — considerar RAFI.',
      prognosis:
        'Excelente. Consolidação em 4–8 semanas. Retorno funcional completo na maioria.',
      colorCode: 'safe',
    },
  ],
  clinicalPearl:
    '"A escápula nunca fratura sozinha" — sempre buscar lesões associadas sistematicamente: pneumotórax (RX tórax), lesões cardíacas (ECG + enzimas), lesão plexo braquial (exame neurológico detalhado) e vascular (pulso, Doppler). "Floating shoulder" = fratura escápula + clavícula ipsilateral: a cirurgia é controversa — fixação da clavícula GERALMENTE estabiliza o sistema (a escápula consolida com a clavícula como ancoragem). Fratura de borda anterior da glenoide > 25% da superfície articular = "bony Bankart" = instabilidade glenoumeral recorrente garantida sem fixação.',
  pitfall:
    'Não diagnosticar fraturas escapulares em politraumatizados pela sobreposição com costelas e coluna vertebral no RX de tórax. TC é mandatória para fraturas do colo e glenoide. Fratura do acrômio inferior crônica (unfused os acromiale) pode ser confundida com fratura aguda — procurar bordas corticalizadas. Floating shoulder: não fixar ambos os ossos rotineiramente — RAFI da clavícula frequentemente estabiliza todo o complexo sem necessidade de abordar a escápula.',
  references: [
    {
      authors: 'Ideberg R, et al.',
      title: 'Epidemiology of scapular fractures',
      journal: 'Acta Orthop Scand',
      year: 1995,
    },
    {
      authors: 'Euler E, Rüedi T.',
      title: 'Scapular fractures',
      journal: 'Fractures in Adults',
      year: 1996,
    },
    {
      authors: 'Cole PA.',
      title: 'Scapula fractures',
      journal: 'Orthop Clin North Am',
      year: 2002,
    },
  ],
};
