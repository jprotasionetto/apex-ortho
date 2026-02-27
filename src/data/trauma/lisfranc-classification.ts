import type { ClassificationData } from '@/types/tool';

export const lisfrancClassificationData: ClassificationData = {
  id: 'lisfranc-classification',
  name: 'Lesão de Lisfranc — Classificação de Quenú-Kuss / Myerson',
  author: 'Quenú e Kuss / Myerson',
  year: 1909,
  epidemiology: 'Lesões de Lisfranc representam 0,2% de todas as fraturas — incidência ~1–2/100.000/ano, com estimativa crescente pelo melhor diagnóstico. Subdiagnóstico histórico: 20–40% perdidos no Rx simples inicial — "fratura/luxação que escapa ao pronto-socorro". Distribuição: homens jovens 2:1, pico 20–40 anos. Mecanismo de alta energia (MVA, quedas) = lesões homolaterais (Tipo A) ou divergentes (Tipo B1); mecanismo de baixa energia (esporte, torção indireta) = lesões parciais ligamentares (Tipo B2/C) — mais sutis e mais frequentemente perdidas. Artrose tarsometatársica pós-traumática em 40–50% dos pacientes — correlaciona diretamente com desvio residual: cada mm de desvio adicional aumenta 10% o risco de artrose. Incapacidade funcional a longo prazo: dor ao suporte de peso em até 50% se tratamento inadequado. Lesão de Lisfranc "pura ligamentar" (sem fratura) = prognóstico pior que com fratura pela menor resposta à consolidação conservadora. Atletas: lesão subaguda negligenciada ("entorse do médio-pé") deve levantar suspeita — espasmo do músculo tibial anterior sobre a TMT = dor característica na dorsiflexão contra-resistida.',
  mechanism: 'Anatomia da articulação de Lisfranc: 5 articulações tarsometatársicas (TMT) — 1º MT com cuneiforme medial + 2º MT com cuneiforme médio (encaixe mais profundo = "keystone") + 3º MT com cuneiforme lateral + 4º e 5º MT com cubóide. AUSÊNCIA do ligamento intertarsal 1º–2º MT (o único intermetatarsal ausente): estabilidade dependente EXCLUSIVAMENTE do ligamento de Lisfranc (cuneiforme medial → base do 2º MT) e dos ligamentos plantares (mais fortes que dorsais). Dois mecanismos: (1) DIRETO (alta energia): impacto dorsal sobre o médio-pé em posição fixa → lesão em plantarflexão forçada. (2) INDIRETO — mais comum: carga axial sobre pé em equino (queda sobre pé plantarfletido, cavaleiro com pé preso no estribo = "horseback rider") → o ante-pé é impulsionado dorsal ou lateralmente em relação ao mediopé → ruptura dos ligamentos dorsais TMT (mais fracos) → desvio em direção à menor resistência. Sinal de Lisfranc no Rx: fleck sign = fragmento ósseo avulsionado da base do 2º MT ou cuneiforme medial pela tração do ligamento de Lisfranc = patognomônico. Peso parcial com Rx comparativo do pé CONTRALATERAL para avaliar diástase.',
  grades: [
    {
      id: 'lisfranc-a',
      label: 'Tipo A — Incongruidade Total (Homolateral)',
      description: 'Desvio de todas as 5 articulações tarsometatársicas na mesma direção — geralmente lateral',
      criteria: [
        'Deslocamento de todos os metatarsos (1º–5º MT) em relação aos cuneiformes/cubóide',
        'Desvio uniforme na mesma direção (geralmente lateral/plantar)',
        'Ruptura completa do ligamento de Lisfranc e dos ligamentos tarsometatársicos',
        'Diastase entre 1º e 2º MT > 2 mm (incidência AP em carga)',
        'Perda do alinhamento: borda medial 2º MT ≠ borda medial cuneiforme intermediário',
        'Padrão de alta energia — mecanismo axial com pé em equino ou esmagamento',
        'Sinal do Fleck patognomônico — avulsão entre bases do 1º e 2º MT',
        'Máxima instabilidade — todos os raios comprometidos'
      ],
      treatment: 'Cirúrgico — ORIF com redução anatômica obrigatória. Sequência: 2º MT primeiro (pedra angular estrutural), depois coluna medial (1º e 3º MT), depois coluna lateral (4º e 5º MT). Parafusos transarticulares do cuneiforme medial → base 2º MT (posição do ligamento de Lisfranc). Artrodese primária da coluna medial (1º–3º TMT) pode ser considerada em lesões ligamentares puras associadas.',
      prognosis: 'Reservado. Maior risco de artrose tarsometatársica e dor crônica. Redução anatômica (< 2 mm) é o principal fator prognóstico. Resultados funcionais significativamente piores que lesões parciais.',
      colorCode: 'danger'
    },
    {
      id: 'lisfranc-b1',
      label: 'Tipo B1 — Incongruidade Parcial: Coluna Medial',
      description: 'Desvio isolado da coluna medial — apenas o 1º MT se desloca medialmente',
      criteria: [
        'Deslocamento do 1º metatarso em relação ao cuneiforme medial — desvio medial',
        'Articulações do 2º ao 5º MT mantidas em posição anatômica',
        'Ruptura do ligamento de Lisfranc (cuneiforme medial → base 2º MT)',
        'Diastase entre 1º e 2º MT visível na incidência AP',
        'Pode ser acompanhado de fratura da base do 2º MT (avulsão do ligamento de Lisfranc)',
        'Mecanismo: rotação/abdução do antepé com pé fixo',
        'Padrão menos comum — coluna lateral estável'
      ],
      treatment: 'Cirúrgico se desvio > 2 mm: ORIF com parafuso transarticular cuneiforme medial → base 2º MT. Artrodese 1ª TMT em lesões puramente ligamentares (sem fragmento ósseo). Conservador apenas em lesões estáveis < 2 mm confirmadas em carga bilateral.',
      prognosis: 'Moderado a bom com redução anatômica. Melhor prognóstico que Tipo A por envolver apenas uma coluna.',
      colorCode: 'caution'
    },
    {
      id: 'lisfranc-b2',
      label: 'Tipo B2 — Incongruidade Parcial: Coluna Lateral',
      description: 'Desvio isolado da coluna lateral — 2º ao 5º MT deslocam-se lateralmente',
      criteria: [
        'Deslocamento do 2º ao 5º metatarso em relação ao cuneiforme intermediário/lateral e cubóide',
        '1º MT mantido em posição anatômica em relação ao cuneiforme medial',
        'Perda de alinhamento: borda medial 4º MT ≠ borda medial cubóide (incidência oblíqua)',
        'Diastase entre 2º e 3º MT pode estar presente',
        'Ruptura dos ligamentos tarsometatársicos centrais e laterais',
        'Mecanismo: esmagamento ou abducção forçada do antepé',
        'Coluna medial (1ª TMT) geralmente preservada'
      ],
      treatment: 'Cirúrgico se desvio > 2 mm: ORIF com redução sequencial — começar pelo 2º MT (âncora), depois 3º, 4º e 5º. Fixação com parafusos e/ou fios de Kirschner para colunas lateral (4º e 5º TMT não devem ser fundidas — preservar mobilidade).',
      prognosis: 'Moderado. A preservação da coluna medial facilita a recuperação funcional da marcha.',
      colorCode: 'caution'
    },
    {
      id: 'lisfranc-c',
      label: 'Tipo C — Divergente',
      description: 'Desvio em direções opostas — 1º MT para medial e 2º–5º MT para lateral',
      criteria: [
        '1º metatarso deslocado MEDIALMENTE em relação ao cuneiforme medial',
        '2º ao 5º metatarsos deslocados LATERALMENTE — padrão divergente',
        'Ruptura completa de todos os ligamentos tarsometatársicos',
        'Ruptura do ligamento de Lisfranc e ligamentos intercuneiformes',
        'Grande diastase entre 1º e 2º MT visível em todas as incidências',
        'Lesão vascular da artéria dorsal do pé — risco de isquemia do antepé',
        'Padrão de alta energia — frequentemente associado a lesões por esmagamento',
        'Maior risco de síndrome compartimental do pé'
      ],
      treatment: 'Emergência cirúrgica se lesão vascular. ORIF urgente com redução do 1º MT primeiro (medial), depois redução da coluna lateral. Atenção à artéria dorsal do pé (passa entre 1º e 2º MT) — verificar pulsos antes e após redução. Considerar fasciotomia do pé se síndrome compartimental.',
      prognosis: 'Reservado. Alta incidência de artrose secundária e dor crônica. Lesão vascular associada piora significativamente o prognóstico. Taxa de artrodese secundária elevada.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sinal do Fleck (fleck sign): pequeno fragmento ósseo entre as bases do 1º e 2º MT visível na radiografia simples — patognomônico da lesão do ligamento de Lisfranc (avulsão da inserção do ligamento). Presente mesmo em lesões sutis. Alinhamento normal (AP): borda medial do 2º MT = borda medial do cuneiforme intermediário. Alinhamento normal (oblíqua): borda medial do 4º MT = borda medial do cubóide. Desvio > 2 mm em qualquer incidência = indicação cirúrgica. SEMPRE solicitar radiografias em carga bilateral — lesões sutis só são vistas com carga. Incidência em carga simulada (apoio plantar) é essencial no diagnóstico.',
  pitfall: 'Até 20% das lesões de Lisfranc são perdidas no atendimento inicial. O pé politraumatizado, com edema e dor difusa, mascara a lesão. Lesões puramente ligamentares (sem componente ósseo = sem Sinal do Fleck) têm PIOR prognóstico que fratura-luxações — o osso consolida, o ligamento não. Para estas, a artrodese primária da coluna medial apresenta resultados superiores à ORIF isolada (nível I de evidência — Ly e Coetzee, JBJS 2006). Retirar parafusos transarticulares em 3–4 meses para restaurar a mobilidade residual — não retirar antes de 3 meses (risco de falha da fixação).',
  references: [
    {
      authors: 'Quenu E, Kuss G',
      title: 'Étude sur les luxations du métatarse',
      journal: 'Rev Chir',
      year: 1909
    },
    {
      authors: 'Myerson MS, Fisher RT, Burgess AR, Kenzora JE',
      title: 'Fracture dislocations of the tarsometatarsal joints: end results correlated with pathology and treatment',
      journal: 'Foot Ankle',
      year: 1986
    },
    {
      authors: 'Ly TV, Coetzee JC',
      title: 'Treatment of primarily ligamentous Lisfranc joint injuries: primary arthrodesis compared with open reduction and internal fixation',
      journal: 'J Bone Joint Surg Am',
      year: 2006
    },
    {
      authors: 'Hardcastle PH, Reschauer R, Kutscha-Lissberg E, Schoffmann W',
      title: 'Injuries to the tarsometatarsal joint. Incidence, classification and treatment',
      journal: 'J Bone Joint Surg Br',
      year: 1982
    }
  ]
};
