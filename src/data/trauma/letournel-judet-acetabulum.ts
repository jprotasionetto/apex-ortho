import type { ClassificationData } from '@/types/tool';

export const letournelJudetAcetabulumData: ClassificationData = {
  id: 'letournel-judet-acetabulum',
  name: 'Classificação de Letournel-Judet — Fraturas do Acetábulo',
  author: 'Letournel & Judet',
  year: 1964,
  revision: 'Letournel E — Fractures of the Acetabulum (2ª ed., 1993)',
  epidemiology: 'Fraturas do acetábulo representam ~7–10% das fraturas da pelve — 4–5/100.000/ano. Distribuição bimodal: homens jovens 20–40 anos (alta energia: MVA, queda de altura — 75%) e idosos >65 anos (baixa energia — tendência crescente). Distribuição por padrão: parede posterior = tipo mais comum (24%), coluna posterior 18%, transversa 18%, T-shaped 12%, associada coluna posterior + parede posterior 20% — as 5 tipos elementares e 5 associadas de Letournel. 70–80% das fraturas acetabulares de alta energia têm lesões associadas: fraturas do fêmur ipsilateral (10–15%), fratura do joelho (15%), luxação do quadril (20–30% nas da parede posterior). Artrose pós-traumática em 20–30% mesmo com RAFI anatômica — reflexo da lesão condral irreversível no impacto. Luxação posterior do quadril associada aumenta risco de NAV da cabeça femoral: <6h de luxação → NAV ~5%; >6h → 25–40%. Infecção profunda após RAFI: 1–4% pelo acesso retroperitoneal de Stoppa / ilioinguinal. Heterotopic ossification (Brooker III–IV) em 3–10% após acesso de Kocher-Langenbeck — indicação profilática de indometacina 75mg/dia por 6 semanas ou RT periop.',
  mechanism: 'Conceito das duas colunas (Letournel): acetábulo = junta de dois "Y" invertidos — COLUNA ANTERIOR (pubis → asa do ilíaco → superfície anterior acetabular) e COLUNA POSTERIOR (ísquio → superfície posterior acetabular). O acetábulo é suspenso entre estas duas colunas — fratura das duas = fratura em T ou coluna + parede. Cinco fraturas ELEMENTARES: (1) Parede posterior — impacto axial com quadril fletido (dashboard) → luxação posterior → fragmento posterior arrancado; (2) Coluna posterior — fratura da coluna posterior isolada; (3) Parede anterior — rara, impacto direto anterior; (4) Coluna anterior — do arco anterior do ilíaco ao ramo púbico superior; (5) Transversa — o único elementar que fratura as DUAS colunas simultaneamente. Cinco fraturas ASSOCIADAS: coluna posterior + parede posterior (MAIS CIRÚRGICA — instabilidade máxima), transversa + parede posterior, coluna anterior + hemitransversa posterior, T-shaped, ambas as colunas (dissociação completa do acetábulo do ilíaco = "spur sign" na TC). RADIOGRAFIA de Judet: oblíqua ilíaca (40° para o lado fraturado) → mostra coluna POSTERIOR intacta/comprometida + parede ANTERIOR; oblíqua obturatriz (40° para o lado oposto) → mostra coluna ANTERIOR + parede POSTERIOR. TC com reconstrução 3D: padrão atual para planejamento cirúrgico.',
  grades: [
    {
      id: 'letournel-posterior-wall',
      label: 'Elementar 1 — Fratura da Parede Posterior',
      description: 'Fratura isolada da parede posterior do acetábulo — tipo mais comum de fratura acetabular (24% das fraturas acetabulares)',
      criteria: [
        'Fratura da parede posterior do acetábulo sem envolvimento da coluna posterior',
        'Mecanismo: impacto axial com quadril em flexão (dashboard injury) ou luxação posterior do quadril',
        'Incidência AP: fratura da linha da parede posterior — bordas do fragmento visíveis',
        'Incidência obturatriz: melhor visualização do fragmento posterior',
        'Incidência alar: coluna posterior intacta',
        'TC axial: fragmento(s) posterior(es) com cabeça femoral frequentemente luxada posteriormente',
        'AO/OTA 62A1 (parede posterior)',
        'Avaliar estabilidade: teste de exame sob anestesia — instabilidade com > 25–40% da parede perdida'
      ],
      treatment: 'Cirurgia (ORIF) via abordagem de Kocher-Langenbeck. Fixação com parafusos de posição ou placa de suporte posterior em mola (spring plate). Indicação de cirurgia: instabilidade da articulação coxofemoral (> 25–40% da parede), incarceramiento de fragmento intra-articular, fratura-luxação irredutível.',
      prognosis: 'Bom a moderado. Artrose pós-traumática em 20–30%. Risco de NAV da cabeça femoral (reduzir luxação em < 6h). Resultados correlacionados com qualidade da redução articular.',
      colorCode: 'caution'
    },
    {
      id: 'letournel-posterior-column',
      label: 'Elementar 2 — Fratura da Coluna Posterior',
      description: 'Fratura isolada da coluna posterior do acetábulo — separa a coluna posterior da pelve sem envolver a parede posterior',
      criteria: [
        'Fratura da coluna posterior (ilíaca posterior + ísquio) sem fragmento de parede posterior',
        'Linha ilioischial INTERROMPIDA no AP pélvico',
        'Linha iliopectínea intacta',
        'Incidência alar (45° para o lado da lesão): visualiza coluna posterior',
        'Incidência obturatriz: obturador foramen e coluna posterior',
        'TC: fratura da coluna posterior sem fragmento de parede adicional',
        'AO/OTA 62A2 (coluna posterior)',
        'A coluna posterior inclui: coluna isquiática, cúpula posterior, parte posterior da cúpula'
      ],
      treatment: 'Cirurgia: abordagem de Kocher-Langenbeck. Redução e fixação com placa de reconstrução da coluna posterior 3,5 mm. Parafuso de coluna percutâneo (retrograde ischial screw) em casos selecionados.',
      prognosis: 'Moderado. Artrose pós-traumática em 25–35%. Lesão do nervo ciático possível (20–30%) — avaliar pré-operatório e monitorar neurofisiologicamente intraoperatório.',
      colorCode: 'caution'
    },
    {
      id: 'letournel-anterior-wall',
      label: 'Elementar 3 — Fratura da Parede Anterior',
      description: 'Fratura isolada da parede anterior do acetábulo — rara, corresponde à parte ântero-medial da superfície articular',
      criteria: [
        'Fratura da parede anterior do acetábulo',
        'Linha iliopectínea pode estar alterada localmente',
        'Linha ilioischial intacta',
        'Incidência obturatriz (45° para o lado oposto): melhor visualização da parede anterior e coluna anterior',
        'TC: fragmento anterior do acetábulo',
        'Tipo raro — < 2% das fraturas acetabulares',
        'AO/OTA 62A (parede anterior)',
        'Frequentemente associada a luxação anterior do quadril'
      ],
      treatment: 'Cirurgia se instabilidade ou desvio > 2 mm: abordagem ilioinguinal ou modificação de Stoppa. Fixação com parafusos ou placa de suporte anterior.',
      prognosis: 'Bom com fixação adequada. Lesão do nervo femoral ou obturador possível.',
      colorCode: 'caution'
    },
    {
      id: 'letournel-anterior-column',
      label: 'Elementar 4 — Fratura da Coluna Anterior',
      description: 'Fratura isolada da coluna anterior do acetábulo — separa a coluna anterior da pelve (ilíaco anterior + pubis + parte anterior da cúpula)',
      criteria: [
        'Fratura da coluna anterior: ilíaco anterior + eminência iliopectínea + ramo púbico superior',
        'Linha iliopectínea INTERROMPIDA no AP pélvico',
        'Linha ilioischial intacta',
        'Incidência obturatriz: visualiza a extensão da fratura na coluna anterior',
        'TC: fratura da coluna anterior sem fragmento de parede',
        'Padrão variável: pode ser baixa (apenas pubis), média (até a cúpula) ou alta (até a crista ilíaca)',
        'AO/OTA 62A3 (coluna anterior)'
      ],
      treatment: 'Cirurgia: abordagem ilioinguinal (Letournel) ou modificação de Stoppa + janela ilíaca. Fixação com placa de reconstrução 3,5 mm ao longo da coluna anterior. Parafuso de coluna anterógrado percutâneo (anterior column screw) em casos selecionados.',
      prognosis: 'Moderado. Artrose em 20–30%. Risco de lesão neurovascular (vasos ilíacos, nervo femoral, obturador) na abordagem anterior.',
      colorCode: 'caution'
    },
    {
      id: 'letournel-transverse',
      label: 'Elementar 5 — Fratura Transversa',
      description: 'Fratura que divide o acetábulo em metade superior (ilíaca, unida ao sacro) e metade inferior (ísquio-púbica, com a cabeça femoral) — atravessa ambas as colunas',
      criteria: [
        'Traço horizontal que separa a hemipelve em 2 fragmentos: superior (ilíaco) e inferior (ísquio-púbico)',
        'Ambas as linhas iliopectínea E ilioischial INTERROMPIDAS no AP pélvico',
        'Atravessa a cavidade acetabular em plano horizontal',
        'Cabeça femoral permanece com o fragmento inferior (medializada)',
        'Incidência alar: interrupção da borda ilíaca posterior',
        'Incidência obturatriz: interrupção da borda anterior e forâmen obturador',
        'Subtipos por nível: transtectal (atravessa a cúpula), juxtatectal (abaixo da cúpula), infratectal (abaixo da cúpula — melhor prognóstico)',
        'AO/OTA 62B (transversa)'
      ],
      treatment: 'Conservador se não deslocada e estável. Cirurgia se desvio > 2–3 mm da cúpula ou instabilidade. Abordagem: Kocher-Langenbeck (maioria), ilioinguinal (se componente anterior maior), ou abordagem combinada simultanea/sequencial. Parafuso de coluna percutâneo (anterógrado e retrógrado) em casos selecionados.',
      prognosis: 'Moderado. Artrose em 30–40%. Prognóstico pior que as fraturas de parede isoladas pela extensão do dano articular.',
      colorCode: 'caution'
    },
    {
      id: 'letournel-t-shaped',
      label: 'Associada 1 — Fratura em T',
      description: 'Fratura transversa com ramo vertical adicional que desce pelo forâmen obturador — divide a hemipelve inferior em segmento anterior (pubis) e posterior (ísquio)',
      criteria: [
        'Componente transverso que divide o acetábulo + componente vertical que divide o ísquio-pubis',
        'Forma de "T" na imagem: braço horizontal + braço vertical descendente',
        'AP: interrupção de linhas iliopectínea + ilioischial + linha adicional vertical no obturador',
        'Fragmentos: superior (ilíaco), anteroinferior (ramo pubis) e posteroinferior (ísquio)',
        'Cabeça femoral com fragmento inferior medializada',
        'Alta energia — frequente em adultos jovens',
        'AO/OTA 62C (fratura em T = ambas colunas + traço adicional)',
        'Mais complexa que a fratura transversa simples'
      ],
      treatment: 'Cirurgia: abordagem combinada frequentemente necessária (Kocher-Langenbeck + ilioinguinal, ou abordagem de Stoppa + janela ilíaca + extensão de Kocher-Langenbeck). Alta complexidade técnica.',
      prognosis: 'Reservado. Artrose em 40–50%. Reconstrução complexa de 3 fragmentos. Lesão de vasos e nervos frequente pelo mecanismo de alta energia.',
      colorCode: 'danger'
    },
    {
      id: 'letournel-post-col-post-wall',
      label: 'Associada 2 — Coluna Posterior + Parede Posterior',
      description: 'Fratura da coluna posterior associada a fratura da parede posterior — combinação mais comum das fraturas associadas',
      criteria: [
        'Componente de fratura da coluna posterior + componente de fratura da parede posterior',
        'Linha ilioischial INTERROMPIDA no AP',
        'Fragmento adicional da parede posterior visível',
        'TC: fratura da coluna posterior com fragmento(s) de parede posterior separado(s)',
        'Cabeça femoral frequentemente luxada ou subluxada posteriormente',
        'Incidência alar: melhor visualização',
        'AO/OTA 62B2 (coluna posterior + parede posterior)',
        'Frequente com luxação posterior do quadril'
      ],
      treatment: 'Cirurgia: abordagem de Kocher-Langenbeck. Redução da coluna posterior + fixação da parede posterior (parafusos + spring plate). Reduzir e fixar a coluna primeiro, depois a parede.',
      prognosis: 'Moderado. Artrose em 30–40%. Lesão do nervo ciático em 20–35%. Resulta melhores que fratura em T ou ambas colunas pela menor extensão.',
      colorCode: 'danger'
    },
    {
      id: 'letournel-transverse-post-wall',
      label: 'Associada 3 — Transversa + Parede Posterior',
      description: 'Fratura transversa com componente adicional de fratura da parede posterior — padrão frequente em luxação posterior com fratura',
      criteria: [
        'Componente transverso + fragmento de parede posterior',
        'AP: interrupção de ambas as linhas iliopectínea + ilioischial + fragmento posterior',
        'Incidência alar: melhor visualização da transversa',
        'TC: fratura transversa + fragmento(s) de parede posterior',
        'Frequente associação com luxação posterior do quadril',
        'Cabeça femoral com fragmento ísquio-púbico inferior + luxação posterior',
        'AO/OTA 62B3 (transversa + parede posterior)'
      ],
      treatment: 'Cirurgia: abordagem de Kocher-Langenbeck (maioria). Se componente anterior significativo: abordagem combinada. Fixação da parede posterior + redução e fixação do componente transverso com parafusos de coluna.',
      prognosis: 'Moderado a reservado. Artrose em 35–45%. Resultados melhores com redução anatômica precoce.',
      colorCode: 'danger'
    },
    {
      id: 'letournel-ant-col-post-hemitransverse',
      label: 'Associada 4 — Coluna Anterior + Hemitransversa Posterior',
      description: 'Fratura da coluna anterior com componente hemitransverso posterior — divide o acetábulo em 3 fragmentos principais. Segunda associada mais comum.',
      criteria: [
        'Componente de coluna anterior + componente transverso posterior (hemitransverso)',
        'AP: interrupção da linha iliopectínea + componente posterior',
        'Linha ilioischial pode estar interrompida pelo componente hemitransverso',
        'TC: coluna anterior separada + fragmento posterior hemitransverso',
        'Cabeça femoral frequentemente mediada com coluna anterior',
        'Frequente em pacientes idosos (mecanismo de baixa energia — osteoporose)',
        'AO/OTA 62C2 (coluna anterior + hemitransversa posterior)',
        '"Associated both column" frequente confusão — verificar TC cuidadosamente'
      ],
      treatment: 'Cirurgia: abordagem ilioinguinal ou modificação de Stoppa (componente anterior). Parafuso de coluna posterior percutâneo (retrógrado) para componente hemitransverso se redutível por manobra fechada.',
      prognosis: 'Moderado. Artrose em 30–40%. Pacientes idosos têm maior risco de artroplastia primária simultânea.',
      colorCode: 'danger'
    },
    {
      id: 'letournel-both-column',
      label: 'Associada 5 — Ambas as Colunas (Floating Acetabulum)',
      description: 'TODA a superfície articular do acetábulo está separada do ilíaco e do sacro — nenhuma porção da cartilagem articular permanece conectada ao esqueleto axial. Tipo mais complexo (25% das fraturas acetabulares).',
      criteria: [
        'Toda a superfície articular do acetábulo está DESCONECTADA do esqueleto axial (ilíaco posterior intacto = sem conexão restante)',
        '"Sinal da espora" (spur sign): projeção óssea do ilíaco no AP pélvico — representa a borda posterior do ilíaco acima da fratura = fragmento ilíaco sem cartilagem',
        'AP: interrupção de ambas as linhas iliopectínea + ilioischial',
        'Alar: fratura da asa ilíaca + spur sign + fratura da coluna posterior',
        'Obturatriz: fratura da coluna anterior + obturador',
        'TC: colunas anterior e posterior completamente separadas da pelve axial',
        'Fragmento articular "flutua" — pode auto-reduzir pela cabeça femoral (secondary congruence)',
        'AO/OTA 62C3 (ambas as colunas)',
        'Congruência secundária: adaptação articular da cabeça femoral ao fragmento acetabular deslocado — pode resultar em resultado funcional aceitável sem cirurgia em idosos'
      ],
      treatment: 'Cirurgia (maioria): abordagem combinada ilioinguinal + Kocher-Langenbeck (simultânea ou sequencial). Abordagem de Stoppa + extensões. Fixação com placas de reconstrução nas colunas anterior e posterior. Em idosos com osteoporose severa e congruência secundária adequada: artroplastia total primária pode ser preferível.',
      prognosis: 'Reservado. Artrose em 50–60%. Apesar da complexidade, resultados melhores que esperado pela "congruência secundária" quando não operado em selecionados. Cirurgia em centro especializado essencial — curva de aprendizado longa.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'As 5 linhas radiográficas do acetábulo no AP pélvico: (1) Linha iliopectínea (iliopubic line) = coluna anterior; (2) Linha ilioischial (ilioischial line) = coluna posterior; (3) Teardrop (lacrimal figure) = parede medial + fossa acetabular; (4) Teto do acetábulo (sourcil) = cúpula articular em carga; (5) Parede anterior e parede posterior (bordas). Incidências de Judet: Alar (obturatriz para o lado são, alar para o lado da lesão — 45° rodada para o lado da lesão): visualiza asa ilíaca + coluna posterior + parede anterior. Obturatriz (alar para o lado são — 45° rodada para o lado oposto): visualiza forâmen obturador + coluna anterior + parede posterior. Regra mnemônica: "A alar vê a posterior, a obturatriz vê a anterior." Spur sign (sinal da espora) no AP = patognomônico de fratura de ambas as colunas — representa o fragmento ilíaco posterior sem cartilagem.',
  pitfall: 'As fraturas acetabulares são difíceis de classificar sem TC — RX + Judet + TC axial são obrigatórios. A correlação entre TC e incidências de Judet define o tipo. Não confundir fratura transversa com fratura de ambas as colunas: na transversa, o fragmento SUPERIOR permanece conectado ao sacro; em ambas as colunas, NENHUM fragmento articular tem conexão axial (spur sign). O "tempo cirúrgico ideal" é 3–7 dias após o trauma: edema reduzido, sem retrombose, hematoma ainda móvel. Após 10–14 dias: ossificação inicial torna a redução muito mais difícil. Após 21 dias: cirurgia tardia — taxa de artrose significativamente maior. Cirurgia acetabular deve ser realizada em centros com experiência — a morbimortalidade da primeira cirurgia é o principal determinante do resultado.',
  references: [
    {
      authors: 'Letournel E, Judet R',
      title: 'Fractures of the Acetabulum (2nd ed.)',
      journal: 'Springer-Verlag',
      year: 1993
    },
    {
      authors: 'Tile M, Helfet DL, Kellam JF',
      title: 'Fractures of the Pelvis and Acetabulum (3rd ed.)',
      journal: 'Lippincott Williams & Wilkins',
      year: 2003
    },
    {
      authors: 'Matta JM',
      title: 'Fractures of the acetabulum: accuracy of reduction and clinical results in patients managed operatively within three weeks after the injury',
      journal: 'J Bone Joint Surg Am',
      year: 1996
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018 (AO/OTA 62 — Acetabulum)',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
