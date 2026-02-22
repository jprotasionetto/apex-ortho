import { useState } from 'react';

const images = [
  { src: '/images/manual-trauma/page318_img1.png', caption: 'Fraturas na criança — dependência da idade' },
  { src: '/images/manual-trauma/page318_img2.png', caption: 'Fraturas pediátricas — classificação por tipo e faixa etária' },
  { src: '/images/manual-trauma/page340_img1.png', caption: 'Figura 2a — TC pélvica pediátrica' },
  { src: '/images/manual-trauma/page340_img2.png', caption: 'Figura 2b — Radiografia pélvica pediátrica' },
  { src: '/images/manual-trauma/page343_img1.png', caption: 'Figura 3 — Fixador externo em fraturas do acetábulo anterior' },
  { src: '/images/manual-trauma/page346_img1.png', caption: 'Complicações e seguimento pós-fratura pélvica pediátrica' },
];

const sections = [
  {
    id: 'anatomy',
    title: 'Anatomia Pélvica Pediátrica',
    content: [
      'CARTILAGEM TRIRRADIADA (triradiate cartilage):',
      '  — Une as 3 peças do acetábulo: ílio, ísquio e púbis',
      '  — Visível na RX até os 14-16 anos (fusão na puberdade)',
      '  — Lesão → risco de DISTÚRBIO DE CRESCIMENTO do acetábulo',
      '  — Salter-Harris pode ser aplicado: SH-I e SH-II mais comuns',
      'APÓFISES PÉLVICAS (surgem na puberdade):',
      '  — EIAS (crista ilíaca): surge 13-15 anos; funde 15-17 anos',
      '  — EIAI: surge 13-15 anos',
      '  — Tuberosidade isquiática: surge 13-15 anos; funde 18-25 anos',
      '  — Pequeno trocânter: surge 11-14 anos',
      'ESQUELETO PÉLVICO JOVEM: mais cartilaginoso, mais elástico',
      '  — Absorve mais energia sem fratura completa (distorção elástica)',
      '  — Lesões de partes moles e vísceras frequentes mesmo sem fratura óssea óbvia',
      'PELVE INFANTIL (< 8 anos): mais mole e elástica → fraturas por compressão lateral frequentes',
    ],
  },
  {
    id: 'avulsion',
    title: 'Avulsões Apofisárias',
    content: [
      'MECANISMO: contração muscular súbita em adolescente atleta (14-20 anos)',
      'EIAS (espinha ilíaca anterossuperior):',
      '  — Músculo: sartório e tensor da fáscia lata',
      '  — Mecanismo: sprint, salto — dor aguda na virilha',
      '  — Tratamento: repouso 4-6 semanas; cirurgia se deslocamento > 2 cm',
      'EIAI (espinha ilíaca anteroinferior):',
      '  — Músculo: reto femoral (cabeça direta)',
      '  — Mecanismo: chute ou sprint — dor inguinal',
      '  — Tratamento: conservador habitualmente',
      'TUBEROSIDADE ISQUIÁTICA:',
      '  — Músculos: isquiotibiais (semitendíneo, semimembranoso, bíceps femoral)',
      '  — Mecanismo: flexão do tronco com joelho estendido (dança, ginástica)',
      '  — Tratamento: conservador 6-8 semanas; cirurgia se deslocamento > 2 cm',
      'PEQUENO TROCÂNTER:',
      '  — Músculo: iliopsoas',
      '  — Mecanismo: flexão ativa forçada da coxa',
      '  — Tratamento: conservador; raro em adultos sugere lesão patológica',
      'DIAGNÓSTICO DIFERENCIAL: não confundir apófise normal em crescimento com avulsão',
    ],
  },
  {
    id: 'pelvic-fractures',
    title: 'Fraturas da Pelve Pediátrica',
    content: [
      'CLASSIFICAÇÃO (Tile/Young-Burgess adaptada para criança):',
      'TIPO A — Estável (mais comum em crianças):',
      '  — A1: avulsão apofisária',
      '  — A2: fratura isolada do ílio ou arco anterior',
      '  — A3: fratura do sacro/cóccix',
      'TIPO B — Instabilidade rotacional (anel pélvico parcialmente íntegro):',
      '  — B1: open book (compressão anteroposterior)',
      '  — B2: compressão lateral',
      '  — B3: bilateral',
      'TIPO C — Instabilidade completa (vertical e rotacional):',
      '  — C1: unilateral',
      '  — C2/C3: bilateral',
      'PARTICULARIDADES PEDIÁTRICAS:',
      '  — Fratura em galho verde do anel pélvico: pelve elástica absorve parte do impacto',
      '  — Fratura do sacro: mais frequente em adolescentes',
      '  — Diastase da sínfise pubiana isolada: em crianças pequenas após trauma',
      '  — Associação com lesão urológica: 4-6% (bexiga, uretra)',
    ],
  },
  {
    id: 'acetabulum',
    title: 'Acetábulo Pediátrico',
    content: [
      'ENVOLVIMENTO DA CARTILAGEM TRIRRADIADA:',
      '  — Salter-Harris I: separação pela cartilagem — difícil no RX, diagnosticar por RM',
      '  — Salter-Harris II: fragmento ilíaco ou isquiático',
      '  — Salter-Harris V: lesão por compressão — diagnóstico retrospectivo',
      'CLASSIFICAÇÃO DE TRIRADIATE:',
      '  — Tipo I: fratura isolada sem envolvimento da cartilagem',
      '  — Tipo II: fratura com envolvimento parcial da cartilagem',
      '  — Tipo III: fratura com envolvimento central da cartilagem',
      'CONSEQUÊNCIAS DO DANO À CARTILAGEM:',
      '  — Desenvolvimento acetabular comprometido → displasia secundária',
      '  — Acetábulo raso + instabilidade → osteoartrite precoce',
      '  — Monitorizar crescimento até maturidade esquelética',
      'TRATAMENTO:',
      '  — Deslocamento mínimo: conservador (tração + reabilitação)',
      '  — Deslocamento > 2-3 mm da parede posterior: redução cirúrgica',
      '  — Fixador externo (p.343): controle de hemorragia + estabilização provisória',
      '  — TC auxilia avaliação do acetábulo (pp.340)',
    ],
  },
  {
    id: 'hemorrhage',
    title: 'Controle de Hemorragia',
    content: [
      'DIFERENÇAS IMPORTANTES EM RELAÇÃO AO ADULTO:',
      '  — Hemorragia pélvica pediátrica é MENOS comum (pelve mais elástica)',
      '  — Mas quando ocorre, volume sanguíneo menor → choque mais rápido',
      '  — Volume sanguíneo criança: 70-80 mL/kg (adulto: 65-70 mL/kg)',
      'PROTOCOLO DE HEMORRAGIA:',
      '  — Cinto pélvico/compressão: indicado em fraturas do tipo B e C',
      '  — Posicionar na sínfise (não na crista ilíaca) para fechar o anel',
      '  — Ressuscitação: cristalóide → hemoderivados precocemente',
      '  — Ativação de protocolo de transfusão maciça em crianças: 1:1:1',
      'ESTABILIZAÇÃO CIRÚRGICA PRECOCE:',
      '  — Fixador externo (pp.343): indicado para controle de hemorragia e estabilização',
      '  — Packing pélvico extraperitoneal: em hemorragia venosa refratária',
      '  — Angioembolização: preferida em hemorragia arterial identificada na TC',
      '  — Artéria pudenda interna e ramos ilíacos internos são os mais comuns',
      'CIRURGIA DEFINITIVA: após estabilização — ORIF conforme tipo de fratura',
      'MONITORIZAR: função vesical/retal, neurológico (L4-S1), discrepância de membros',
    ],
  },
];

export default function PediatricPelvicFractureGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('anatomy');

  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Manual SBOT — Fraturas Pélvicas Pediátricas (pp. 318, 340–346)</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img) => (
            <div key={img.src} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <button key={s.id} onClick={() => setActiveSection(s.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === s.id ? 'bg-[#D4AF37] text-[#0A0A0A]' : 'bg-[#111111] text-gray-400 border border-[rgba(255,255,255,0.08)] hover:text-gray-200 hover:border-[rgba(212,175,55,0.3)]'}`}>{s.title}</button>
        ))}
      </div>
      {sections.filter((s) => s.id === activeSection).map((s) => (
        <div key={s.id} className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">{s.title}</h3>
          <ul className="space-y-2">
            {s.content.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300"><span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">Ponto-Chave</p>
        <p className="text-sm text-gray-300">A cartilagem trirradiada fecha entre 14-16 anos — lesão desta estrutura pode causar displasia acetabular secundária. Avulsões apofisárias são exclusivas de adolescentes atletas e respondem bem ao tratamento conservador. Em fraturas do anel pélvico pediátrico tipos B e C, cinto pélvico e fixador externo são ferramentas essenciais para controle inicial da hemorragia.</p>
      </div>
      <div className="bg-[#111111] border border-[rgba(239,68,68,0.2)] rounded-xl p-4">
        <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Atenção</p>
        <p className="text-sm text-gray-300">Volume sanguíneo da criança é menor — hemorragia pélvica pode causar choque rapidamente mesmo com aspecto clínico inicial enganoso. Monitorizar crescimento acetabular até maturidade esquelética após lesão da cartilagem trirradiada. Pequeno trocânter avulsionado em adulto pode indicar lesão metastática — diferente da criança.</p>
      </div>
    </div>
  );
}
