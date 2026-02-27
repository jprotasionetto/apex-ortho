import type { ClassificationData } from '@/types/tool';

export const coltonOlecranonData: ClassificationData = {
  id: 'colton-olecranon',
  name: 'Classificação de Colton / Mayo — Fraturas do Olécrano',
  author: 'Colton (1973) / Mayo–Morrey',
  year: 1973,
  epidemiology: 'Fraturas do olécrano representam 10% de todas as fraturas do cotovelo em adultos; incidência: 12/100.000/ano. Bimodal: adultos jovens (trauma direto, queda sobre cotovelo fletido) e idosos >65a (queda simples, osteoporose). Distribuição: Colton I (não deslocada): 5–10%; Colton IIB (transversa deslocada): 60–70%; IIC (cominutiva): 15–20%; IID (fratura-luxação): 5–10%. Taxa de reoperação por proeminência de material após banda de tensão de arame (TBW): 20–80% — principal causa de reintervenção. Placa dorsal LCP 3,5 mm: menor necessidade de retirada, superiores resultados em cominuição.',
  mechanism: 'O olécrano é o processo proximal da ulna que forma a articulação troclear com o úmero. O tríceps insere na face posterior → fraturas desviadas perdem a extensão ativa. Mecanismo direto: queda sobre cotovelo → compressão axial → fratura transversa ou cominutiva. Mecanismo indireto (avulsão): contração excêntrica violenta do tríceps = fratura-avulsão polar proximal (Colton IIA). Fratura-luxação (IID): alta energia → ruptura do aparato estabilizador → rádio e ulna deslocam-se anteriormente em bloco. Princípio da banda de tensão: 2 fios K paralelos + arame figura-8 convertem força de tração excêntrica do tríceps em compressão articular anterior durante a flexão = indicado APENAS para fraturas transversas simples sem cominuição.',
  revision: 'Mayo Classification — Morrey BF',
  grades: [
    {
      id: 'colton-i',
      label: 'Colton Tipo I / Mayo I — Não Deslocada e Estável',
      description: 'Fratura não deslocada (< 2 mm), estável, sem extensão ativa comprometida. Equivale ao Mayo Tipo I.',
      criteria: [
        'Desvio < 2 mm no RX lateral do cotovelo em 90° de flexão',
        'Extensão ativa do cotovelo preservada contra a gravidade',
        'Sem aumento do desvio com flexão passiva até 90°',
        'Aparato extensor íntegro',
        'RX: sem degrau articular significativo',
        'AO/OTA 21B1.1 — olécrano, não deslocada',
        'Não requer intervenção cirúrgica'
      ],
      treatment: 'Conservador: imobilização em flexão de 45–90° por 2–3 semanas, seguida de mobilização progressiva. Controle radiográfico semanal nas primeiras 3 semanas para detectar desvio secundário. Extensão ativa precoce após 3 semanas.',
      prognosis: 'Excelente prognóstico. Consolidação na grande maioria dos casos. Rigidez residual possível se imobilização prolongada > 3 semanas.',
      colorCode: 'safe'
    },
    {
      id: 'colton-iia',
      label: 'Colton Tipo IIA / Mayo IIA — Fratura-Avulsão Deslocada',
      description: 'Fratura por avulsão do polo proximal do olécrano com desvio — inserção do tríceps arranca pequeno fragmento. Mayo IIA: deslocada, articulação estável, sem cominuição.',
      criteria: [
        'Fragmento proximal pequeno por mecanismo de avulsão direta do tríceps',
        'Desvio ≥ 2 mm',
        'Articulação úmero-ulnar estável (sem luxação)',
        'Extensão ativa perdida ou comprometida',
        'RX: fragmento polar proximal separado do corpo do olécrano',
        'Mayo IIA: simples (sem cominuição), estável',
        'AO/OTA 21B1.2 — olécrano, avulsão'
      ],
      treatment: 'Cirurgia: fixação com parafuso axial canulado intramedular (técnica de Herbert ou parafuso esponjoso 6,5 mm) ± banda de tensão de arame (tension band wiring — TBW). Em idosos com osso osteoporótico e fragmento pequeno: excisão do fragmento + reinserção do tríceps é alternativa válida.',
      prognosis: 'Bom prognóstico com fixação adequada. A excisão de fragmento pequeno em idosos oferece resultados funcionais similares à fixação.',
      colorCode: 'caution'
    },
    {
      id: 'colton-iib',
      label: 'Colton Tipo IIB / Mayo IIA ou IIB — Fratura Transversa/Oblíqua Deslocada',
      description: 'Fratura transversa ou oblíqua do corpo do olécrano com desvio — padrão mais comum. Mayo IIA (sem cominuição) ou IIB (com cominuição), articulação estável.',
      criteria: [
        'Fratura transversa ou oblíqua na junção do terço proximal com o terço médio do olécrano',
        'Desvio ≥ 2 mm com perda de extensão ativa',
        'Articulação úmero-ulnar estável — sem luxação do cúbito',
        'Pode haver discreta cominuição (Mayo IIB)',
        'RX: linha de fratura transversa ou oblíqua < 30° da perpendicular',
        'Padrão ideal para banda de tensão (fratura transversa em carga excêntrica)',
        'AO/OTA 21B1.1 ou 21B1.2'
      ],
      treatment: 'Cirurgia: Banda de tensão de arame (TBW — tension band wiring) com 2 fios K paralelos + arame em figura de 8 = padrão-ouro para fraturas transversas simples. Indicação ideal: fratura transversa no ponto de maior torque (junção proximal-médio). Se oblíqua > 30°: placa dorsal com parafusos. Cominuição (Mayo IIB): placa de bloqueio dorsal preferível ao TBW.',
      prognosis: 'Bom prognóstico. TBW: excelentes resultados funcionais em fraturas simples transversas. Taxa de retirada de material de 20–80% por proeminência dos fios. Placas: menor necessidade de retirada, melhores resultados em cominuição.',
      colorCode: 'caution'
    },
    {
      id: 'colton-iic',
      label: 'Colton Tipo IIC / Mayo IIB — Fratura Multifragmentária Deslocada',
      description: 'Fratura cominutiva ou multifragmentária do olécrano com desvio — articulação estável. Mayo IIB: deslocada, estável, cominutiva.',
      criteria: [
        'Múltiplos fragmentos do olécrano com desvio',
        'Cominuição significativa — impossibilidade de redução por TBW simples',
        'Articulação úmero-ulnar estável (sem luxação)',
        'Extensão ativa perdida',
        'RX: múltiplas linhas de fratura ou cominuição',
        'Mayo IIB: cominutiva, estável',
        'AO/OTA 21B1.3 — olécrano cominutiva'
      ],
      treatment: 'Cirurgia: placa de bloqueio dorsal em 3,5 mm (LCP) ± parafusos de compressão interfragmentária. TBW contraindicado em cominuição. Em idosos com osso osteoporótico e baixa demanda: excisão do olécrano + reinserção do tríceps (até 50% do olécrano pode ser excisado sem instabilidade).',
      prognosis: 'Prognóstico moderado. Artrose úmero-ulnar possível com cominuição articular grave. Placas oferecem melhor manutenção da redução que TBW em cominuição.',
      colorCode: 'caution'
    },
    {
      id: 'colton-iid',
      label: 'Colton Tipo IID / Mayo III — Fratura-Luxação do Olécrano',
      description: 'Fratura do olécrano associada a luxação da articulação úmero-ulnar — articulação instável. Mayo Tipo III: instável (IIIA simples, IIIB cominutiva).',
      criteria: [
        'Fratura do olécrano com qualquer padrão + luxação ou subluxação úmero-ulnar',
        'Articulação úmero-ulnar INSTÁVEL — rádio e ulna deslocam-se anteriormente',
        'Frequentemente associado a lesão do coronoide e ligamentos colaterais',
        'Variantes: Monteggia equivalente, transolecranon fracture-dislocation',
        'Mayo IIIA: simples + luxação; Mayo IIIB: cominutiva + luxação',
        'AO/OTA 21B2 (olécrano + luxação) ou 21C (fratura-luxação complexa)',
        'Avaliar lesão de cabeça do rádio associada (tipo "terrible triad" do cotovelo)'
      ],
      treatment: 'Cirurgia: redução da luxação + fixação da fratura do olécrano com placa dorsal de bloqueio (LCP) + fixação de coronoide se necessário + reparo ligamentar. Sequência: 1) reduzir e fixar olécrano, 2) avaliar estabilidade, 3) fixar coronoide, 4) avaliar cabeça do rádio, 5) reparo/reconstrução ligamentar. Fixador externo articulado pode ser necessário em casos graves.',
      prognosis: 'Prognóstico reservado — lesão complexa do cotovelo. Rigidez residual, dor e perda de arco de movimento são frequentes. Resultados diretamente relacionados à restauração da estabilidade e congruência articular.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Regra do TBW (Banda de Tensão de Arame): indicado apenas para fraturas TRANSVERSAS SIMPLES na junção proximal-médio do olécrano, sem cominuição. O princípio biomecânico converte as forças de tração excêntrica do tríceps em forças de compressão na cortical articular anterior. Técnica correta: 2 fios K paralelos + arame em figura de 8 pelos fios K (NÃO pela crista do olécrano). Erro técnico clássico: arame pelo orifício posterior = perda de compressão + soltura precoce. Excisão do olécrano: até 50% pode ser excisado sem instabilidade úmero-ulnar clinicamente relevante — opção válida em idosos osteoporóticos com baixa demanda funcional e fragmento irreconstruível.',
  pitfall: 'Alta taxa de reoperação para retirada de material após TBW (20–80%) por migração dos fios K e proeminência do arame — informar o paciente no pré-operatório. TBW em fratura oblíqua ou cominutiva resulta em falha de fixação — usar placa. Não confundir fratura-luxação do olécrano (Colton IID/Mayo III) com luxação simples do cotovelo — o tratamento é completamente diferente. Sempre avaliar coronoide e cabeça do rádio na fratura-luxação (tríade terrível). Na fratura-luxação transolecraniana: o rádio e ulna se deslocam anteriormente EM BLOCO — diferente da luxação posterior clássica do cotovelo.',
  references: [
    {
      authors: 'Colton CL',
      title: 'Fractures of the olecranon in adults: classification and management',
      journal: 'Injury',
      year: 1973
    },
    {
      authors: 'Morrey BF',
      title: 'Current concepts in the treatment of fractures of the radial head, the olecranon, and the coronoid',
      journal: 'Instr Course Lect',
      year: 1995
    },
    {
      authors: 'Hak DJ, Golladay GJ',
      title: 'Olecranon fractures: treatment options',
      journal: 'J Am Acad Orthop Surg',
      year: 2000
    },
    {
      authors: 'Duckworth AD, Clement ND, Aitken SA, Court-Brown CM, McQueen MM',
      title: 'The epidemiology of fractures of the proximal ulna',
      journal: 'Injury',
      year: 2012
    }
  ]
};
