import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

/* ───────── AO/OTA Bone Region Data ───────── */
interface AORegion {
  bone: number;
  label: string;
  segments: AOSegment[];
}
interface AOSegment {
  code: string;
  name: string;
  types: AOType[];
  exceptions?: string;
}
interface AOType {
  code: string;
  label: string;
  description: string;
  groups: string[];
  treatment: string;
  colorCode: 'safe' | 'caution' | 'danger';
}

const aoRegions: AORegion[] = [
  {
    bone: 1,
    label: 'Úmero',
    segments: [
      {
        code: '11',
        name: 'Úmero Proximal',
        exceptions: 'Integra Neer: 11A = unifocal (2 partes), 11B = bifocal (3 partes), 11C = articular (4 partes). Tipo B "articular parcial" NÃO existe para este segmento.',
        types: [
          { code: '11-A', label: 'Tipo A — Unifocal (Extra-articular)', description: '2 partes de Neer. Fratura com 1 linha de fratura e 2 fragmentos principais', groups: ['A1: Tuberosidade isolada (TM ou Tm)', 'A2: Impactada metafisária (valgização ou neutralização)', 'A3: Não-impactada — instável, desvio franco'], treatment: 'A1: conservador na maioria (tipoia, fisioterapia precoce). A2: conservador se impactação estável, cirurgia se >45° valgus. A3: RAFI com placa bloqueada ou haste.', colorCode: 'safe' },
          { code: '11-B', label: 'Tipo B — Bifocal (3 partes)', description: '3 partes de Neer. 2 linhas de fratura separando 3 fragmentos', groups: ['B1: Com luxação glenoumeral associada', 'B2: Sem luxação — tuberosidade maior + colo cirúrgico', 'B3: Sem luxação — tuberosidade menor + colo cirúrgico'], treatment: 'RAFI com placa bloqueada proximal. Hemiartroplastia em idosos com osteoporose grave. Artroplastia reversa em >70 anos com manguito deficiente.', colorCode: 'caution' },
          { code: '11-C', label: 'Tipo C — Articular (4 partes)', description: '4 partes de Neer. Fragmento articular completamente separado', groups: ['C1: Com leve desvio, vascularidade preservada', 'C2: Com desvio significativo e impactação', 'C3: Fratura-luxação, alto risco de NAV da cabeça'], treatment: 'RAFI com placa bloqueada se osso viável. Hemiartroplastia ou artroplastia reversa (RSA) em idosos. RSA preferida em >70a com manguito deficiente.', colorCode: 'danger' },
        ],
      },
      {
        code: '12',
        name: 'Úmero Diáfise',
        types: [
          { code: '12-A', label: 'Tipo A — Simples', description: 'Traço único, contato cortical completo após redução', groups: ['A1: Espiral', 'A2: Oblíqua (≥30°)', 'A3: Transversa (<30°)'], treatment: 'Brace funcional de Sarmiento (consolidação ~95% para A1/A2). Haste intramedular ou placa para falha conservadora ou politrauma.', colorCode: 'safe' },
          { code: '12-B', label: 'Tipo B — Cunha', description: 'Fragmento em cunha, contato parcial entre fragmentos principais', groups: ['B1: Cunha espiral', 'B2: Cunha em flexão (borboleta)', 'B3: Cunha fragmentada'], treatment: 'Fixação cirúrgica geralmente indicada. Placa com lag screw para cunha ou haste bloqueada.', colorCode: 'caution' },
          { code: '12-C', label: 'Tipo C — Multifragmentária', description: 'Sem contato entre fragmentos principais. Máxima instabilidade', groups: ['C1: Espiral com 3+ fragmentos intermediários', 'C2: Segmentar (2 níveis de fratura)', 'C3: Irregular (cominutiva extensa)'], treatment: 'Haste intramedular bloqueada ou placa em ponte. Nervo radial: 8-15% lesão (Holstein-Lewis no 1/3 distal). Exploração se paralisia pós-redução.', colorCode: 'danger' },
        ],
      },
      {
        code: '13',
        name: 'Úmero Distal',
        types: [
          { code: '13-A', label: 'Tipo A — Extra-articular', description: 'Fratura supracondiliana sem extensão à superfície articular', groups: ['A1: Avulsão (epicôndilo)', 'A2: Simples (transversa ou oblíqua)', 'A3: Multifragmentária metafisária'], treatment: 'A1: conservador (epicôndilo medial em crianças: cirurgia se desvio >5mm ou instabilidade). A2-A3: RAFI com placas duplas (medial + posterolateral).', colorCode: 'safe' },
          { code: '13-B', label: 'Tipo B — Articular Parcial', description: 'Parte da superfície articular fraturada, restante conectada à diáfise', groups: ['B1: Sagital lateral (capítulo — Kocher-Lorenz ou Hahn-Steinthal)', 'B2: Sagital medial (tróclea)', 'B3: Coronal (capítulo ± tróclea — Dubberley)'], treatment: 'RAFI com parafusos sem cabeça (Headless screws). Via de acesso lateral (Kocher) ou posterior (olecranon osteotomy). Redução anatômica obrigatória.', colorCode: 'caution' },
          { code: '13-C', label: 'Tipo C — Articular Completa', description: 'Articulação inteira separada da diáfise (intercondiliana)', groups: ['C1: Articular simples + metáfise simples (T ou Y)', 'C2: Articular simples + metáfise multifragmentária', 'C3: Articular multifragmentária + metáfise multifragmentária'], treatment: 'RAFI com placas duplas (90-90° ou paralelas). Olecranon osteotomy para acesso articular. Artroplastia total do cotovelo (TEA) em idosos >70a com C3 e osso osteoporótico.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 2,
    label: 'Rádio / Ulna',
    segments: [
      {
        code: '21',
        name: 'Rádio / Ulna Proximal',
        types: [
          { code: '21-A', label: 'Tipo A — Extra-articular (Ulna)', description: 'Fratura extra-articular da ulna proximal', groups: ['A1: Avulsão do olécrano', 'A2: Simples metafisária da ulna', 'A3: Multifragmentária metafisária da ulna'], treatment: 'Banda de tensão (A1). Placa pré-contornada para olécrano (A2-A3). Prótese de olécrano em idosos com cominutiva grave.', colorCode: 'safe' },
          { code: '21-B', label: 'Tipo B — Articular Parcial', description: 'Fratura envolvendo parte da articulação', groups: ['B1: Cabeça do rádio — fratura simples (Mason I-II)', 'B2: Cabeça do rádio — multifragmentária (Mason III)', 'B3: Olécrano — articular parcial'], treatment: 'B1: conservador (Mason I) ou RAFI com parafusos (Mason II). B2: RAFI com placa ou prótese da cabeça radial (Mason III cominutiva). B3: RAFI com placa + banda de tensão.', colorCode: 'caution' },
          { code: '21-C', label: 'Tipo C — Articular Completa', description: 'Articulação inteira separada (olécrano-coronóide)', groups: ['C1: Simples articular + metáfise simples', 'C2: Simples articular + metáfise multifragmentária', 'C3: Articular multifragmentária'], treatment: 'RAFI com placa. Terrible triad (luxação + coronóide + cabeça radial): protocolo específico. Fixação externa articulada se instabilidade persistente.', colorCode: 'danger' },
        ],
      },
      {
        code: '22',
        name: 'Rádio / Ulna Diáfise',
        types: [
          { code: '22-A', label: 'Tipo A — Simples', description: 'Fratura simples de um ou ambos ossos do antebraço', groups: ['A1: Ulna isolada (nightstick fracture)', 'A2: Rádio isolado', 'A3: Ambos os ossos (both-bone) — simples'], treatment: 'A1 isolada sem desvio: brace funcional. Demais: RAFI com placas de compressão (DCP/LC-DCP 3.5mm). Placa obrigatória para fraturas de ambos os ossos.', colorCode: 'safe' },
          { code: '22-B', label: 'Tipo B — Cunha', description: 'Fragmento em cunha em um ou ambos ossos', groups: ['B1: Ulna cunha + rádio intacto', 'B2: Rádio cunha + ulna intacta', 'B3: Cunha em ambos os ossos'], treatment: 'RAFI com placas. Parafuso interfragmentário para a cunha + placa de neutralização. Avaliar membrana interóssea (Essex-Lopresti).', colorCode: 'caution' },
          { code: '22-C', label: 'Tipo C — Multifragmentária', description: 'Cominutiva de um ou ambos ossos', groups: ['C1: Ulna multifragmentária + rádio simples ou intacto', 'C2: Rádio multifragmentário + ulna simples ou intacta', 'C3: Ambos os ossos multifragmentários'], treatment: 'RAFI com placas em ponte (bridging). Evitar exposição excessiva para preservar vascularização periosteal. Monteggia (ulna + luxação cabeça radial) e Galeazzi (rádio + subluxação ARUD).', colorCode: 'danger' },
        ],
      },
      {
        code: '23',
        name: 'Rádio Distal',
        types: [
          { code: '23-A', label: 'Tipo A — Extra-articular', description: 'Fratura do rádio distal sem extensão à superfície articular', groups: ['A1: Ulna distal isolada (estilóide)', 'A2: Rádio simples sem cominuição (Colles, Smith)', 'A3: Rádio multifragmentário metafisário'], treatment: 'A2 sem desvio: gesso antebraquiopalmar 4-6 semanas. A2 com desvio: redução + placa volar bloqueada (VLP). A3: VLP. Fernandez: I=flexão, II=compressão (die-punch), III=avulsão (Barton), IV=alta energia, V=luxação.', colorCode: 'safe' },
          { code: '23-B', label: 'Tipo B — Articular Parcial', description: 'Parte da superfície articular fraturada', groups: ['B1: Sagital lateral (Chauffeur / Hutchinson)', 'B2: Margem dorsal (Barton dorsal)', 'B3: Margem volar (Barton volar / Smith tipo II)'], treatment: 'RAFI: placa volar ou fragmento-específica. B3 (Barton volar): placa buttress volar obrigatória para prevenir subluxação do carpo. Redução anatômica articular mandatória.', colorCode: 'caution' },
          { code: '23-C', label: 'Tipo C — Articular Completa', description: 'Toda articulação separada da diáfise (metáfise + articular)', groups: ['C1: Articular simples + metáfise simples', 'C2: Articular simples + metáfise multifragmentária', 'C3: Articular multifragmentária'], treatment: 'RAFI com VLP ± placa dorsal. C3: pode necessitar fixação fragmento-específica + enxerto. TC pré-operatória obrigatória. Step-off articular >2mm = artrose.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 3,
    label: 'Fêmur',
    segments: [
      {
        code: '31',
        name: 'Fêmur Proximal',
        exceptions: 'Exceção AO 2018: 31A = trocantérica, 31B = colo femoral, 31C = cabeça femoral. NÃO segue o padrão A(extra-articular)/B(parcial)/C(completa).',
        types: [
          { code: '31-A', label: 'Tipo A — Trocantérica', description: 'Fraturas da região trocantérica (pertrocantérica e subtrocantérica)', groups: ['A1: Pertrocantérica simples (2 fragmentos, traço estável)', 'A2: Pertrocantérica multifragmentária (parede posteromedial instável)', 'A3: Intertrocantérica (traço oblíquo reverso)'], treatment: 'A1: DHS (Dynamic Hip Screw) ou haste cefalomedular curta. A2: haste cefalomedular (PFNA/Gamma) — DHS com parafuso de trocânter. A3: haste cefalomedular longa (padrão biomecânico reverso). TAD (tip-apex distance) <25mm.', colorCode: 'safe' },
          { code: '31-B', label: 'Tipo B — Colo Femoral', description: 'Fraturas intracapsulares do colo do fêmur', groups: ['B1: Subcapital, pouco deslocada (Garden I-II)', 'B2: Transcervical', 'B3: Subcapital, deslocada (Garden III-IV, não impactada)'], treatment: 'B1: fixação in situ com 3 parafusos canulados (jovens) ou DHS + parafuso anti-rotação. B3: <65a ativo → RAFI urgente (<6h). >65a → hemiartroplastia ou artroplastia total (ativos). Risco NAV: Garden III 15-35%, Garden IV >35%.', colorCode: 'caution' },
          { code: '31-C', label: 'Tipo C — Cabeça Femoral', description: 'Fraturas da cabeça do fêmur (Pipkin)', groups: ['C1: Cisão (split) — fragmento inferior ao ligamento redondo (Pipkin I)', 'C2: Cisão — fragmento superior ao ligamento redondo (Pipkin II)', 'C3: Com fratura do colo associada (Pipkin III)'], treatment: 'C1: excisão do fragmento se pequeno; RAFI com parafusos sem cabeça se grande. C2: RAFI obrigatória (zona de carga). C3: artroplastia total geralmente necessária (NAV quase certa). Urgência: redução da luxação <6h.', colorCode: 'danger' },
        ],
      },
      {
        code: '32',
        name: 'Fêmur Diáfise',
        types: [
          { code: '32-A', label: 'Tipo A — Simples', description: 'Fratura diafisária simples do fêmur — 2 fragmentos', groups: ['A1: Espiral', 'A2: Oblíqua (≥30°)', 'A3: Transversa (<30°)'], treatment: 'Haste intramedular anterógrada bloqueada (padrão-ouro). Ponto de entrada: fossa piriforme ou tip do trocânter maior. Fresagem (reamed) preferida para fraturas fechadas. Consolidação: 12-16 semanas.', colorCode: 'safe' },
          { code: '32-B', label: 'Tipo B — Cunha', description: 'Fragmento em cunha com contato entre principais', groups: ['B1: Cunha espiral', 'B2: Cunha em flexão', 'B3: Cunha fragmentada'], treatment: 'Haste IM bloqueada. Bloqueio estático (proximal + distal) obrigatório. Carga parcial 6-8 semanas. Dinamização aos 3 meses se calo insuficiente.', colorCode: 'caution' },
          { code: '32-C', label: 'Tipo C — Multifragmentária', description: 'Sem contato entre fragmentos. Máxima instabilidade', groups: ['C1: Espiral com fragmentos intermediários múltiplos', 'C2: Segmentar (2 níveis distintos de fratura)', 'C3: Irregular / cominutiva extensa'], treatment: 'Haste IM bloqueada longa. NÃO comprimir foco — ponte biológica. Em politrauma: DCO (damage control orthopaedics) → fixador externo temporário → conversão para haste. Winquist III-IV.', colorCode: 'danger' },
        ],
      },
      {
        code: '33',
        name: 'Fêmur Distal',
        types: [
          { code: '33-A', label: 'Tipo A — Extra-articular', description: 'Fratura supracondiliana sem extensão articular', groups: ['A1: Avulsão (epicôndilo)', 'A2: Simples metafisária', 'A3: Multifragmentária metafisária'], treatment: 'Placa bloqueada (LISS/LCP) lateral ou haste retrógrada. Haste retrógrada femoral se diáfise envolvida. A3: placa em ponte com princípio biológico.', colorCode: 'safe' },
          { code: '33-B', label: 'Tipo B — Articular Parcial', description: 'Parte da superfície articular fraturada — côndilos femorais', groups: ['B1: Sagital lateral (côndilo lateral)', 'B2: Sagital medial (côndilo medial)', 'B3: Coronal (Hoffa — plano coronal posterior do côndilo)'], treatment: 'RAFI com parafusos interfragmentários (lag screws) + placa de suporte. Hoffa (B3): parafusos AP percutâneos ou placa lateral. Redução anatômica articular obrigatória.', colorCode: 'caution' },
          { code: '33-C', label: 'Tipo C — Articular Completa', description: 'Superfície articular inteiramente separada da diáfise', groups: ['C1: Articular simples (T ou Y) + metáfise simples', 'C2: Articular simples + metáfise multifragmentária', 'C3: Articular multifragmentária + metáfise multifragmentária'], treatment: 'RAFI: 1° reconstruir articulação (parafusos lag), 2° fixar à diáfise (placa bloqueada lateral ± placa medial). C3: fixação externa temporária (staged). Prótese primária excepcionalmente em idosos.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 4,
    label: 'Tíbia / Fíbula',
    segments: [
      {
        code: '41',
        name: 'Tíbia Proximal (Platô Tibial)',
        types: [
          { code: '41-A', label: 'Tipo A — Extra-articular', description: 'Fratura metafisária proximal da tíbia sem extensão articular', groups: ['A1: Avulsão (eminência tibial, Segond, Gerdy)', 'A2: Simples metafisária', 'A3: Multifragmentária metafisária'], treatment: 'A1 (eminência tibial): RAFI artroscópica com pull-through suture. A2-A3: placa bloqueada medial ou lateral. Avaliar sempre lesão ligamentar associada.', colorCode: 'safe' },
          { code: '41-B', label: 'Tipo B — Articular Parcial (Schatzker I-III)', description: 'Parte do platô fraturada, restante conectada à diáfise', groups: ['B1: Split puro do côndilo lateral (Schatzker I)', 'B2: Depressão pura (Schatzker III)', 'B3: Split-depressão (Schatzker II)'], treatment: 'B1: RAFI com parafusos + placa lateral. B2: levantamento + enxerto + placa. B3: RAFI com levantamento, enxerto e placa bloqueada lateral. Depressão articular >2-3mm: cirurgia.', colorCode: 'caution' },
          { code: '41-C', label: 'Tipo C — Articular Completa (Schatzker IV-VI)', description: 'Toda superfície articular separada da diáfise', groups: ['C1: Articular simples, metáfise simples (Schatzker IV)', 'C2: Articular simples, metáfise multifragmentária (Schatzker V)', 'C3: Articular multifragmentária (Schatzker VI)'], treatment: 'Dupla placa (lateral + medial posteromedial). C3 alta energia: staged — fixador externo temporário → TC → RAFI definitiva 7-14 dias. Incisões separadas para evitar necrose.', colorCode: 'danger' },
        ],
      },
      {
        code: '42',
        name: 'Tíbia Diáfise',
        types: [
          { code: '42-A', label: 'Tipo A — Simples', description: 'Fratura diafisária simples da tíbia', groups: ['A1: Espiral', 'A2: Oblíqua', 'A3: Transversa'], treatment: 'A1-A2 estáveis: gesso funcional (Sarmiento). Instáveis ou desviadas: haste intramedular bloqueada (padrão-ouro). Critérios de instabilidade: cominuição, desvio >50%, encurtamento >1cm, angular >5°.', colorCode: 'safe' },
          { code: '42-B', label: 'Tipo B — Cunha', description: 'Fragmento em cunha, contato parcial', groups: ['B1: Cunha espiral', 'B2: Cunha em flexão', 'B3: Cunha fragmentada'], treatment: 'Haste IM bloqueada. Bloqueio estático proximal e distal. Fíbula: fixar se instabilidade rotacional ou fratura distal associada (sindesmose).', colorCode: 'caution' },
          { code: '42-C', label: 'Tipo C — Multifragmentária', description: 'Sem contato entre fragmentos principais', groups: ['C1: Multifragmentária com fragmentos intermediários', 'C2: Segmentar', 'C3: Cominutiva extensa / irregular'], treatment: 'Haste IM bloqueada. Fraturas expostas Gustilo IIIB/C: fixador externo temporário → conversão tardia. Síndrome compartimental: fasciotomia urgente. Avaliar sempre 4 compartimentos.', colorCode: 'danger' },
        ],
      },
      {
        code: '43',
        name: 'Tíbia Distal (Pilon Tibial)',
        types: [
          { code: '43-A', label: 'Tipo A — Extra-articular', description: 'Fratura metafisária distal da tíbia sem extensão ao plafond', groups: ['A1: Simples', 'A2: Cunha', 'A3: Multifragmentária'], treatment: 'Placa bloqueada medial (MIPO). Haste IM se extensão diafisária. A3 alta energia: fixador externo ± fios de Kirschner.', colorCode: 'safe' },
          { code: '43-B', label: 'Tipo B — Articular Parcial', description: 'Parte do plafond tibial fraturada', groups: ['B1: Split puro', 'B2: Split-depressão', 'B3: Multifragmentária parcial (Tillaux-Chaput)'], treatment: 'RAFI com parafusos + placa medial ou anterolateral. Articulação deve ter redução anatômica. TC pré-operatória obrigatória.', colorCode: 'caution' },
          { code: '43-C', label: 'Tipo C — Articular Completa (Pilon)', description: 'Plafond inteiramente separado da diáfise — Rüedi-Allgöwer', groups: ['C1: Articular simples + metáfise simples (Rüedi I)', 'C2: Articular simples + metáfise multifragmentária (Rüedi II)', 'C3: Articular multifragmentária (Rüedi III)'], treatment: 'Staged protocol: 1° fixador externo spanning + fíbula, 2° RAFI definitiva 10-21 dias (wrinkle test). Placa medial + anterolateral. C3: alto risco infecção e artrose.', colorCode: 'danger' },
        ],
      },
      {
        code: '44',
        name: 'Maléolos / Tornozelo',
        types: [
          { code: '44-A', label: 'Tipo A — Infrasindesmótica (Weber A)', description: 'Fratura abaixo da sindesmose — supinação', groups: ['A1: Maléolo lateral isolado (avulsão infrasindesmótica)', 'A2: Maléolo medial associado', 'A3: Posterior associado'], treatment: 'A1 estável sem desvio: bota gessada / walker. A2-A3: RAFI com parafusos + placa se desviada. Sindesmose intacta — estável por definição.', colorCode: 'safe' },
          { code: '44-B', label: 'Tipo B — Transindesmótica (Weber B)', description: 'Fratura ao nível da sindesmose', groups: ['B1: Maléolo lateral isolado (espiral ao nível da sindesmose)', 'B2: Com lesão medial (maléolo medial ou ligamento deltóide)', 'B3: Com fragmento posterior (Volkmann)'], treatment: 'B1 estável (sem lesão medial): pode ser conservador. B2-B3: RAFI (placa terço tubular lateral + parafuso medial). Stress test para sindesmose: se instável → parafuso sindesmótico ou suture-button.', colorCode: 'caution' },
          { code: '44-C', label: 'Tipo C — Suprasindesmótica (Weber C)', description: 'Fratura acima da sindesmose — lesão obrigatória da sindesmose', groups: ['C1: Fíbula simples, diafisária', 'C2: Fíbula multifragmentária, diafisária', 'C3: Fíbula proximal (Maisonneuve) — fratura alta com lesão membrana interóssea'], treatment: 'RAFI fíbula + reparação sindesmose obrigatória (parafuso ou suture-button). Maisonneuve (C3): NÃO fixar fíbula proximal — fixar apenas sindesmose + maléolo medial. Rx perna inteira para C3.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 5,
    label: 'Patela',
    segments: [
      {
        code: '34',
        name: 'Patela',
        types: [
          { code: '34-A', label: 'Tipo A — Extra-articular', description: 'Fraturas avulsivas dos pólos sem extensão articular significativa', groups: ['A1: Avulsão do pólo superior', 'A2: Avulsão do pólo inferior (sleeve fracture em crianças)', 'A3: Avulsão periférica / marginal'], treatment: 'Conservador se mecanismo extensor intacto e fragmento pequeno. Cirurgia: fixação com âncoras ou fio de cerclagem se mecanismo comprometido.', colorCode: 'safe' },
          { code: '34-B', label: 'Tipo B — Articular Parcial', description: 'Parte da superfície articular envolvida, continuidade parcial preservada', groups: ['B1: Transversa — pólo proximal', 'B2: Transversa — pólo distal', 'B3: Longitudinal / vertical'], treatment: 'Banda de tensão (tension band wiring) com fios K para transversas. Parafusos interfragmentários para longitudinais. Redução anatômica da superfície articular.', colorCode: 'caution' },
          { code: '34-C', label: 'Tipo C — Articular Completa (Cominutiva)', description: 'Fragmentação extensa com perda de superfície articular', groups: ['C1: Estrelar — com traço transverso principal', 'C2: Estrelar sem traço principal definido', 'C3: Cominutiva grave — reconstrução impossível'], treatment: 'C1-C2: cerclagem circular + banda de tensão + parafusos. C3: patelectomia parcial ou total (último recurso — déficit funcional significativo). Preservar máximo possível.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 6,
    label: 'Pelve / Acetábulo',
    segments: [
      {
        code: '61',
        name: 'Anel Pélvico',
        exceptions: 'AO pelve: 61-A = estável, 61-B = rotacionalmente instável, 61-C = rotacional + verticalmente instável. Correlação com Tile/Young-Burgess.',
        types: [
          { code: '61-A', label: 'Tipo A — Estável', description: 'Anel pélvico intacto do ponto de vista funcional', groups: ['A1: Avulsão (EIAS, EIPI, tuberosidade isquiática)', 'A2: Fratura asa ilíaca sem envolvimento do anel', 'A3: Fratura transversa do sacro (zona I Denis) / cóccix'], treatment: 'Conservador na maioria: repouso, carga parcial progressiva. Avulsões em adolescentes: conservador; RAFI se desvio >2cm.', colorCode: 'safe' },
          { code: '61-B', label: 'Tipo B — Rotacionalmente Instável', description: 'Instabilidade rotacional com estabilidade vertical preservada', groups: ['B1: Livro aberto (open book) — diástase sínfise (APC II)', 'B2: Compressão lateral ipsilateral — rotação interna (LC II)', 'B3: Compressão lateral contralateral (bucket handle)'], treatment: 'B1 (diástase >2.5cm): placa sinfisária ± parafuso SI. B2: fixação anterior se instável. Embolização angiográfica se hemorragia persistente. Protocolo ATLS.', colorCode: 'caution' },
          { code: '61-C', label: 'Tipo C — Instável Completa', description: 'Instabilidade rotacional E vertical — dissociação completa do hemipelve', groups: ['C1: Unilateral — disrução posterior completa', 'C2: Bilateral posterior', 'C3: Com fratura acetabular associada'], treatment: 'RAFI posterior obrigatória: parafusos SI percutâneos ou placa posterior. Fixação anterior (placa sinfisária ou fixador externo). Mortalidade: 5-20% (hemorragia).', colorCode: 'danger' },
        ],
      },
      {
        code: '62',
        name: 'Acetábulo',
        exceptions: 'Segue Letournel-Judet: 62-A = parcial articular (1 parede/coluna), 62-B = transversa ± componente adicional, 62-C = articular completa (ambas colunas).',
        types: [
          { code: '62-A', label: 'Tipo A — Parcial Articular (Elementar)', description: 'Envolvimento de 1 parede ou 1 coluna', groups: ['A1: Parede posterior', 'A2: Coluna posterior', 'A3: Parede anterior / coluna anterior'], treatment: 'A1 (parede posterior): RAFI via Kocher-Langenbeck. A2-A3: ilioinguinal ou Stoppa. Indicação: desvio >2mm, incongruência articular, instabilidade.', colorCode: 'safe' },
          { code: '62-B', label: 'Tipo B — Parcial Articular (Transversa)', description: 'Fratura transversa dividindo acetábulo em hemisfério superior e inferior', groups: ['B1: Transversa pura (± parede posterior)', 'B2: T-shaped — transversa + vertical até forame obturatório', 'B3: Coluna anterior + hemitransversa posterior'], treatment: 'Kocher-Langenbeck para B1. Ilioinguinal para B3. Dupla abordagem para B2 complexo. Tração pré-operatória útil.', colorCode: 'caution' },
          { code: '62-C', label: 'Tipo C — Articular Completa (Ambas Colunas)', description: 'Separação de ambas colunas — sinal do "esporão" (spur sign)', groups: ['C1: Coluna anterior alta + posterior baixa', 'C2: Coluna anterior baixa + posterior alta', 'C3: Extensão à sacroilíaca'], treatment: 'Ilioinguinal (Stoppa) + Kocher-Langenbeck. Congruência secundária pode permitir conservador em idosos. Prótese diferida se artrose.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 7,
    label: 'Mão',
    segments: [
      {
        code: '77',
        name: 'Metacarpos e Falanges',
        types: [
          { code: '77-A', label: 'Tipo A — Extra-articular', description: 'Fratura da diáfise ou metáfise sem extensão articular', groups: ['A1: Simples (transversa, oblíqua ou espiral)', 'A2: Cunha', 'A3: Multifragmentária / cominutiva'], treatment: 'A1 estável: buddy taping + mobilização precoce (metacarpos: gesso intrínseco-plus 3-4 semanas). Instáveis ou desvio rotacional: RAFI com miniplaca (1.5-2.0mm) ou fios K.', colorCode: 'safe' },
          { code: '77-B', label: 'Tipo B — Articular Parcial', description: 'Parte da superfície articular envolvida', groups: ['B1: Avulsão / arrancamento condiliano', 'B2: Split condiliano (unicondilar)', 'B3: Depressão com impactação articular'], treatment: 'RAFI com miniparafusos (1.0-1.5mm) ou fios K. Redução anatômica obrigatória. Bennett (1° metacarpo): parafuso lag + fio K.', colorCode: 'caution' },
          { code: '77-C', label: 'Tipo C — Articular Completa', description: 'Articulação inteiramente separada', groups: ['C1: Articular simples (T ou Y)', 'C2: Articular simples + cominutiva metafisária', 'C3: Articular cominutiva (pilon digital)'], treatment: 'RAFI com miniplacas + parafusos. C3 (pilon digital): tração dinâmica com fixador externo. Rolando (1° metacarpo C): RAFI com placa/parafusos.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 8,
    label: 'Pé',
    segments: [
      {
        code: '81',
        name: 'Tálus',
        types: [
          { code: '81-A', label: 'Tipo A — Extra-articular', description: 'Fratura de processo sem extensão articular principal', groups: ['A1: Processo lateral', 'A2: Processo posterior (Shepherd)', 'A3: Avulsão dorsal do colo'], treatment: 'Conservador se fragmento pequeno. Excisão se sintomático. RAFI se fragmento grande em zona de carga.', colorCode: 'safe' },
          { code: '81-B', label: 'Tipo B — Colo do Tálus (Hawkins)', description: 'Fratura do colo com extensão articular variável', groups: ['B1: Não deslocada (Hawkins I) — NAV 0-13%', 'B2: Com subluxação subtalar (Hawkins II) — NAV 20-50%', 'B3: Com luxação subtalar + tibiotalar (Hawkins III) — NAV 80-100%'], treatment: 'B1: gesso sem carga 8-12 semanas. B2-B3: RAFI urgente (<6-8h) com parafusos. Sinal de Hawkins (6-8 sem): reabsorção subcondral = vascularidade preservada.', colorCode: 'caution' },
          { code: '81-C', label: 'Tipo C — Corpo do Tálus', description: 'Fratura do corpo com separação articular completa', groups: ['C1: Coronal', 'C2: Sagital', 'C3: Cominutiva / extrusão'], treatment: 'RAFI com parafusos. Extrusão: reimplantação + fixação (NAV ~100% mas alternativa é talectomia). Artrodese tibiocalcaneana de salvamento.', colorCode: 'danger' },
        ],
      },
      {
        code: '82',
        name: 'Calcâneo',
        types: [
          { code: '82-A', label: 'Tipo A — Extra-articular', description: 'Sem extensão à faceta posterior', groups: ['A1: Tuberosidade (avulsão tendão de Aquiles)', 'A2: Processo anterior', 'A3: Corpo — traço não articular'], treatment: 'Conservador na maioria: bota sem carga 6-8 semanas. Avulsão com desvio: RAFI. Böhler e Gissane normais.', colorCode: 'safe' },
          { code: '82-B', label: 'Tipo B — Articular Parcial (Sanders II)', description: 'Envolvimento de parte da faceta posterior subtalar', groups: ['B1: 2 fragmentos — split lateral (Sanders IIA)', 'B2: 2 fragmentos — split central (Sanders IIB)', 'B3: 2 fragmentos — split medial (Sanders IIC)'], treatment: 'RAFI via extensile lateral ou sinus tarsi. Restaurar Böhler >20°, reduzir faceta posterior. Parafusos ± placa. TC coronal obrigatória.', colorCode: 'caution' },
          { code: '82-C', label: 'Tipo C — Articular Completa (Sanders III-IV)', description: '3+ fragmentos da faceta posterior', groups: ['C1: 3 fragmentos (Sanders III)', 'C2: 4+ fragmentos (Sanders IV)', 'C3: Cominutiva grave / perda óssea'], treatment: 'C1: RAFI se cirurgião experiente. C2 (Sanders IV): artrodese subtalar primária. Fixador externo se tecidos moles comprometidos. Infecção ferida: 10-25%.', colorCode: 'danger' },
        ],
      },
    ],
  },
  {
    bone: 9,
    label: 'Coluna',
    segments: [
      {
        code: '9',
        name: 'Coluna Toracolombar (AO Spine)',
        exceptions: 'AO Spine 2013 (Vaccaro): A=compressão, B=distração (banda de tensão), C=translação. Subtipos: A0-A4, B1-B3, C. Modificadores: M1=neurológico, M2=PLC indeterminado.',
        types: [
          { code: '9-A', label: 'Tipo A — Compressão', description: 'Falha do corpo vertebral sob carga axial', groups: ['A0: Fratura de processo (transverso, espinhoso)', 'A1: Impactação (wedge / crush) — uma placa terminal', 'A2: Split (cisão) sagital ou coronal', 'A3: Burst incompleta (uma placa terminal + parede posterior)', 'A4: Burst completa (ambas placas + parede posterior)'], treatment: 'A0-A1: conservador (TLSO 6-12 semanas). A2: geralmente conservador. A3-A4: cirurgia se cifose >15-20°, canal >50%, ou déficit. Fixação posterior curta (1+1).', colorCode: 'safe' },
          { code: '9-B', label: 'Tipo B — Distração (Banda de Tensão)', description: 'Falha do complexo ligamentar posterior e/ou anterior por distração', groups: ['B1: Lesão óssea da banda posterior (Chance óssea)', 'B2: Lesão ligamentar posterior (ruptura PLC)', 'B3: Lesão da banda anterior (hiperextensão — espondilite anquilosante)'], treatment: 'B1 (Chance óssea): fixação posterior curta ± conservador em crianças. B2: cirurgia obrigatória (PLC = instabilidade persistente). B3: fixação longa em espondilite anquilosante.', colorCode: 'caution' },
          { code: '9-C', label: 'Tipo C — Translação', description: 'Deslocamento translacional em qualquer plano — máxima instabilidade', groups: ['Deslocamento anteroposterior, lateral ou rotacional', 'Inclui fratura-luxação e separação completa', 'Frequentemente associado a déficit neurológico completo'], treatment: 'Cirurgia obrigatória e urgente. Fixação posterior longa (2+ acima e abaixo). Descompressão se déficit incompleto. RM urgente para disco e medula.', colorCode: 'danger' },
        ],
      },
    ],
  },
];

/* ───────── Color Helpers ───────── */
const colorMap = { safe: '#22C55E', caution: '#F59E0B', danger: '#EF4444' } as const;

/* ───────── Component ───────── */
export default function AoClassificationTool() {
  const [selectedBone, setSelectedBone] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const region = aoRegions[selectedBone];
  const segment = region.segments[selectedSegment];
  const activeType = selectedType ? segment.types.find((t) => t.code === selectedType) : null;

  const handleBoneChange = (idx: number) => {
    setSelectedBone(idx);
    setSelectedSegment(0);
    setSelectedType(null);
  };
  const handleSegmentChange = (idx: number) => {
    setSelectedSegment(idx);
    setSelectedType(null);
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação AO/OTA — Compêndio Completo 2018</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Sistema universal de classificação de fraturas da AO Foundation (Müller, 1990; Meinberg et al., 2018). Cobre todos os ossos longos, pelve, acetábulo, mão, pé e coluna. Codificação: <span className="text-white font-mono">Osso.Segmento.Tipo.Grupo.Subgrupo</span></p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Princípio Geral</p>
            <p className="text-xs text-gray-300 leading-relaxed">A {"<"} B {"<"} C = gravidade crescente. Diáfise: A(simples), B(cunha), C(multifragmentária). Articular: A(extra), B(parcial), C(completa).</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Codificação 2018</p>
            <p className="text-xs text-gray-300 leading-relaxed">Sem hífen (31A, não 31-A). "Multifragmentária" substitui "complexa". Qualificadores: (a) proximal, (b) médio, (c) distal.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Exceções 2018</p>
            <p className="text-xs text-gray-300 leading-relaxed">Úmero proximal integrou Neer. Fêmur proximal: A=trocantérica, B=colo, C=cabeça. Pelve: A/B/C = estabilidade.</p>
          </div>
        </div>
      </div>

      {/* Manual SBOT Images */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Classificação AO/OTA — Manual SBOT</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { src: '/images/manual-trauma/page25_img1.png', caption: 'AO — princípios de codificação (1)' },
            { src: '/images/manual-trauma/page25_img2.png', caption: 'AO — princípios de codificação (2)' },
            { src: '/images/manual-trauma/page25_img3.png', caption: 'AO — princípios de codificação (3)' },
            { src: '/images/manual-trauma/page79_img1.png', caption: 'AO — fratura diafisária do úmero' },
            { src: '/images/manual-trauma/page83_img1.png', caption: 'AO — fratura do úmero distal A/B/C' },
            { src: '/images/manual-trauma/page161_img1.png', caption: 'AO — orientação para o tratamento' },
          ].map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bone Region Tabs */}
      <div className="flex flex-wrap gap-1.5">
        {aoRegions.map((r, idx) => (
          <button key={r.bone} onClick={() => handleBoneChange(idx)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedBone === idx ? 'bg-[#D4AF37] text-black' : 'bg-[#1A1A1A] text-gray-400 hover:text-white hover:bg-[#222]'}`}>
            {r.bone}. {r.label}
          </button>
        ))}
      </div>

      {/* Segment Tabs (if >1) */}
      {region.segments.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {region.segments.map((seg, idx) => (
            <button key={seg.code} onClick={() => handleSegmentChange(idx)} className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${selectedSegment === idx ? 'bg-white/10 text-white border border-white/20' : 'bg-[#1A1A1A] text-gray-500 hover:text-gray-300'}`}>
              {seg.code} — {seg.name}
            </button>
          ))}
        </div>
      )}

      {/* Segment Header */}
      <div className="bg-[#0F0F0F] border border-slate-700/50 rounded-xl p-4">
        <p className="text-sm font-semibold text-white">{segment.code} — {segment.name}</p>
        {segment.exceptions && (
          <p className="text-xs text-yellow-400/80 mt-1.5 leading-relaxed">⚠ {segment.exceptions}</p>
        )}
      </div>

      {/* Types A / B / C */}
      <div className="grid gap-2">
        {segment.types.map((t) => (
          <button key={t.code} onClick={() => setSelectedType(t.code)} className={`text-left p-4 rounded-xl border transition-all ${selectedType === t.code ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colorMap[t.colorCode] }} />
              <span className="font-medium text-slate-100 text-sm">{t.label}</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">{t.description}</p>
          </button>
        ))}
      </div>

      {/* Detail Panel */}
      {activeType && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 space-y-4 animate-fade-in">
          <h3 className="text-base font-semibold text-slate-100">{activeType.label}</h3>
          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-2">Grupos / Subtipos</h4>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
              {activeType.groups.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-1">Tratamento</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{activeType.treatment}</p>
          </div>
        </div>
      )}

      {/* Clinical Pearls */}
      <Alert type="info">Codificação AO/OTA 2018: <strong>Osso(1-9) + Segmento(1-4) + Tipo(A/B/C) + Grupo(1-3).Subgrupo(.1-.3)(qualificação)[modificador]</strong>. Exemplo: 42B3(b) = tíbia(4), diáfise(2), cunha(B), fragmentada(3), terço médio(b). As exceções para úmero proximal (Neer integrado), fêmur proximal (trocantérica/colo/cabeça) e pelve (estabilidade) devem ser memorizadas.</Alert>
      <Alert type="caution">Classificar somente com informação completa: radiografias em 2 incidências + TC para fraturas articulares. A classificação definitiva pode mudar no intraoperatório. Para fraturas articulares, a redução anatômica (step-off {"<"}2mm) é o principal determinante do prognóstico funcional.</Alert>
    </div>
  );
}
