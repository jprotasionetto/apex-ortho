import type { ClassificationData } from '@/types/classification';

export const icrsCartilageData: ClassificationData = {
  id: 'icrs-cartilage',
  name: 'Classificação ICRS – Lesão Condral (International Cartilage Repair Society)',
  author: 'International Cartilage Repair Society (ICRS)',
  year: 2003,
  epidemiology:
    'Lesões condrais são encontradas em 60-66% das artroscopias de joelho. Lesões focais grau III-IV representam ~5% de todas as artroscopias. A classificação ICRS foi desenvolvida para padronizar a graduação artroscópica das lesões condrais, substituindo progressivamente a classificação de Outerbridge. Correlaciona-se com a graduação OARSI (Osteoarthritis Research Society International) para estudos histológicos.',
  mechanism:
    'Lesões traumáticas (impacto direto, cisalhamento) ou degenerativas (sobrecarga crônica, mau alinhamento). A cartilagem articular é avascular e tem capacidade limitada de cicatrização. Lesões focais em pacientes jovens são distintas de artrose difusa. Localização mais comum: côndilo femoral medial (45%), patela (20%), côndilo lateral (15%), troclear (10%).',
  surgicalBasis:
    'Limiar de tratamento cirúrgico: lesões grau III-IV sintomáticas, especialmente em pacientes jovens e ativos. Microfratura (Steadman): indicada em lesões grau III-IV de até 2-4 cm² em pacientes <40 anos; resultados declinam após 2 anos. ACI/MACI (transplante de condrócitos autólogos): indicada em lesões >4 cm², falha de microfratura, pacientes jovens. OATS/Mosaicoplastia: lesões 1-4 cm², côndilos femorais. Correlação com Outerbridge: grau I=Outerbridge I, grau II=Outerbridge II, grau III=Outerbridge III, grau IV=Outerbridge IV. Correlação OARSI: OARSI 0-1 ~ ICRS 0-1; OARSI 2-3 ~ ICRS 2-3; OARSI 4-5 ~ ICRS 3-4; OARSI 6 ~ ICRS 4.',
  grades: [
    {
      id: 'grade-0',
      label: 'Grau 0 – Normal',
      description:
        'Cartilagem normal. Superfície articular íntegra, consistência firme, cor branco-perolada, sem alterações visíveis.',
      criteria: [
        'Superfície articular macroscopicamente normal',
        'Consistência firme ao toque (probe test)',
        'Cor branco-perolada uniforme',
        'Sem fibrilação, fissuras ou amolecimento',
        'Espessura normal da cartilagem',
      ],
      treatment:
        'Nenhuma intervenção necessária. Manutenção de peso adequado, atividade física regular, prevenção de sobrecarga articular.',
      prognosis: 'Excelente. Cartilagem saudável sem risco imediato de deterioração.',
      colorCode: 'safe',
    },
    {
      id: 'grade-1',
      label: 'Grau 1 – Quase Normal',
      description:
        'Cartilagem quase normal. Amolecimento superficial ao toque (probe) e/ou fissuras/rachaduras superficiais. Superfície articular visualmente intacta.',
      criteria: [
        'Amolecimento da cartilagem ao probe test (sem depressão visível)',
        'Fissuras superficiais e/ou rachaduras da superfície',
        'Superfície articular macroscopicamente conservada',
        'Sem perda de espessura visível',
        'Correlato: Outerbridge grau I; OARSI grau 0-1',
      ],
      treatment:
        'Conservador: modificação de atividade, fisioterapia, controle de peso, viscosuplementação intra-articular. Artroscopia com desbridamento suave em casos sintomáticos.',
      prognosis:
        'Bom prognóstico. Maioria dos casos não progride com medidas conservadoras. Monitorização semestral por RM.',
      colorCode: 'safe',
    },
    {
      id: 'grade-2',
      label: 'Grau 2 – Anormal',
      description:
        'Lesão anormal com extensão até menos de 50% da profundidade da cartilagem. Fissuras e fibrilação moderada.',
      criteria: [
        'Fissuras e/ou erosão até <50% da espessura da cartilagem',
        'Fibrilação moderada da superfície articular',
        'Sem exposição do osso subcondral',
        'Profundidade <50% da espessura total da cartilagem',
        'Correlato: Outerbridge grau II; OARSI grau 2-3',
      ],
      treatment:
        'Desbridamento artroscópico e condroplastia. Microfratura pode ser considerada em lesões maiores sintomáticas em pacientes jovens (<40 anos). Viscosuplementação e modificação de atividade.',
      prognosis:
        'Prognóstico moderado. Risco de progressão sem controle dos fatores mecânicos. Microfratura oferece alívio sintomático em 60-80% dos casos.',
      colorCode: 'caution',
    },
    {
      id: 'grade-3a',
      label: 'Grau 3a – Severamente Anormal (>50% profundidade)',
      description:
        'Lesão severamente anormal com extensão >50% da profundidade da cartilagem, mas sem atingir o osso subcondral. Subcategoria 3a: erosão >50% sem atingir camada calcificada.',
      criteria: [
        'Erosão ou fissura >50% da espessura da cartilagem',
        'Não atinge a camada calcificada',
        'Sem exposição do osso subcondral',
        'Lesão de espessura parcial profunda',
        'Correlato: Outerbridge grau III; OARSI grau 4',
      ],
      treatment:
        'Microfratura (Steadman) para lesões <4 cm² em pacientes jovens (<40 anos). Mosaicoplastia (OATS) para lesões 1-4 cm² em côndilos femorais. ACI/MACI se lesão >4 cm² ou falha prévia de microfratura. Alinhamento: corrigir mau alinhamento (osteotomia tibial se varo) para descarregar a área tratada.',
      prognosis:
        'Reservado sem intervenção. Com microfratura: 70-80% de satisfação em 2 anos; declínio após 5 anos. ACI/MACI: melhores resultados em longo prazo (>5 anos) para lesões grandes.',
      colorCode: 'danger',
    },
    {
      id: 'grade-3b',
      label: 'Grau 3b – Severamente Anormal (até camada calcificada)',
      description:
        'Lesão chegando à camada calcificada da cartilagem, mas sem penetrar o osso subcondral.',
      criteria: [
        'Erosão atingindo a camada calcificada (tidemark)',
        'Sem perfuração do osso subcondral',
        'Lesão de espessura quase total',
        'Calcified layer visível na base da lesão',
        'Correlato: Outerbridge grau III avançado; OARSI grau 5',
      ],
      treatment:
        'Mesmas indicações do grau 3a, porém com maior urgência de intervenção. Microfratura com perfuração da camada calcificada necessária para acesso à medula óssea. ACI/MACI preferencial em pacientes jovens com lesões >2 cm².',
      prognosis:
        'Reservado. Limiar crítico de progressão para grau 4. Necessita intervenção precoce para prevenção de progressão a lesão osteocondral.',
      colorCode: 'danger',
    },
    {
      id: 'grade-3c',
      label: 'Grau 3c – Severamente Anormal (até osso subcondral)',
      description:
        'Lesão chegando até o osso subcondral, mas sem perfurá-lo. Sem comunicação com a medula óssea.',
      criteria: [
        'Erosão chegando até o osso subcondral',
        'Sem perfuração do osso subcondral (sem sangramento espontâneo)',
        'Osso subcondral visível na base da lesão',
        'Cartilagem completamente destruída na área da lesão',
        'Correlato: Outerbridge grau III-IV transitório',
      ],
      treatment:
        'Microfratura obrigatoriamente com perfuração do osso subcondral. Transplante osteocondral autólogo (OATS) preferencial se lesão <4 cm². ACI/MACI + osso subcondral se lesão com defeito ósseo associado.',
      prognosis:
        'Reservado a ruim sem intervenção. Com tratamento adequado, melhora funcional possível. Risco de progressão a grau 4 sem tratamento.',
      colorCode: 'danger',
    },
    {
      id: 'grade-3d',
      label: 'Grau 3d – Severamente Anormal (bolhas/blistering)',
      description:
        'Bolhas ("blistering") da cartilagem: descolamento da cartilagem do osso subcondral com integridade superficial aparente. Achado insidioso que pode ser subdiagnosticado.',
      criteria: [
        'Bolhas (blisters) na superfície da cartilagem',
        'Descolamento da cartilagem do osso subcondral',
        'Superfície articular pode parecer intacta macroscopicamente',
        'Instabilidade ao probe test (cartilagem flutuante)',
        'Risco de evolução para lesão de espessura total',
      ],
      treatment:
        'Desbridamento da cartilagem instável. Avaliação da extensão por RM (sequências T2 e DGEMRIC). Se lesão subjacente significativa: microfratura ou ACI conforme tamanho e localização.',
      prognosis:
        'Variável. Bolhas pequenas podem estabilizar; grandes com descolamento extenso têm risco de progressão para grau 4. Monitorização por RM a cada 6-12 meses se tratamento conservador.',
      colorCode: 'danger',
    },
    {
      id: 'grade-4a',
      label: 'Grau 4a – Perfuração Subcondral (<10mm)',
      description:
        'Lesão com perfuração total através do osso subcondral, comunicando com a medula óssea. Diâmetro <10 mm.',
      criteria: [
        'Perfuração total da cartilagem e do osso subcondral',
        'Comunicação com a medula óssea (sangramento espontâneo)',
        'Diâmetro da lesão <10 mm',
        'Osso subcondral exposto e perfurado',
        'Correlato: Outerbridge grau IV; OARSI grau 6',
      ],
      treatment:
        'Microfratura (lesão <2 cm², paciente <40 anos). OATS/Mosaicoplastia para lesões 1-4 cm² em localizações de carga. ACI/MACI + enxerto ósseo se componente ósseo significativo. Transplante osteocondral alógeno para lesões grandes. Corrigir alinhamento se necessário.',
      prognosis:
        'Reservado. Microfratura em lesão <10mm: resultados razoáveis em curto prazo. Transplante osteocondral é gold standard para lesões focais em pacientes jovens.',
      colorCode: 'danger',
    },
    {
      id: 'grade-4b',
      label: 'Grau 4b – Perfuração Subcondral (>10mm)',
      description:
        'Lesão com perfuração total através do osso subcondral de diâmetro >10 mm. Lesões extensas com maior compromisso do osso subcondral.',
      criteria: [
        'Perfuração total da cartilagem e do osso subcondral',
        'Comunicação com a medula óssea',
        'Diâmetro da lesão >10 mm',
        'Frequentemente associado a defeito ósseo subcondral',
        'Correlato: Outerbridge grau IV extenso; OARSI grau 6',
      ],
      treatment:
        'Transplante osteocondral alógeno para lesões grandes (>4 cm²). ACI/MACI de segunda geração + enxerto ósseo subcondral (CAIS, BioCart). Em pacientes >50 anos com lesão extensa: considerar artroplastia unicompartimental ou total. TTO de alinhamento obrigatória se houver desvio associado.',
      prognosis:
        'Prognóstico ruim sem intervenção; evolução para artrose difusa. Com transplante alógeno ou artroplastia: melhora funcional substancial. Artroplastia total tem excelente resultado funcional em pacientes com indicação adequada.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'A classificação ICRS é artroscópica – correlacionar sempre com RM (sequências T2, dGEMRIC, T2-mapping) para planejamento pré-operatório. O probe test é fundamental: amolecimento sem depressão = Grau 1; depressão parcial = Grau 2; lesão profunda = Grau 3; osso exposto = Grau 4. Sempre documentar tamanho, localização e correspondência no osso oposto.',
  pitfall:
    'RM pode subestimar a profundidade real da lesão em 20-30% dos casos; a artroscopia é o padrão-ouro. Não indicar microfratura isolada em lesões >4 cm² ou em pacientes >45-50 anos: resultados inferiores. Bolhas (Grau 3d) podem ser subdiagnosticadas na artroscopia se não realizado probe test sistemático.',
  references: [
    {
      authors: 'Brittberg M, Winalski CS',
      title: 'Evaluation of cartilage injuries and repair. ICRS classification of cartilage lesions',
      journal: 'Journal of Bone and Joint Surgery America',
      year: 2003,
    },
    {
      authors: 'Outerbridge RE',
      title: 'The etiology of chondromalacia patellae',
      journal: 'Journal of Bone and Joint Surgery British',
      year: 1961,
    },
    {
      authors: 'Steadman JR, Rodkey WG, Singleton SB, Briggs KK',
      title: 'Microfracture technique for full-thickness chondral defects: technique and clinical results',
      journal: 'Operative Techniques in Orthopaedics',
      year: 1997,
    },
  ],
};
