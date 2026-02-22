import { useState } from 'react';

const images = [
  { src: '/images/manual-trauma/page294_img1.png', caption: 'Anatomia do ombro pediátrico' },
  { src: '/images/manual-trauma/page297_img1.png', caption: 'Quadro 1 — Sequência de ossificação e fusão dos núcleos da escápula' },
  { src: '/images/manual-trauma/page299_img1.png', caption: 'Figura 3a — Diagnóstico diferencial' },
  { src: '/images/manual-trauma/page299_img2.png', caption: 'Figura 3b — Diagnóstico diferencial' },
  { src: '/images/manual-trauma/page299_img3.png', caption: 'Figura 3c — Diagnóstico diferencial' },
  { src: '/images/manual-trauma/page303_img1.png', caption: 'Tempo de imobilização — até 6 semanas conforme tipo de fratura e idade' },
  { src: '/images/manual-trauma/page304_img1.png', caption: 'Fraturas pediátricas — abordagem por tipo' },
  { src: '/images/manual-trauma/page304_img2.png', caption: 'Fraturas pediátricas — tratamento conservador' },
];

const sections = [
  {
    id: 'ossification',
    title: 'Ossificação da Escápula',
    content: [
      'A escápula possui múltiplos centros de ossificação secundários:',
      'Corpo: ossificado ao nascimento (membrana)',
      'Coracóide: 1º centro aparece entre 15-18 meses; fusão entre 14-16 anos',
      'Acrômio: 3 centros (pré-, meso- e meta-acrômio); surgem 14-16 anos; fusão aos 22-25 anos',
      'Glenoide (borda inferior): surge aos 10-11 anos; fusão 18-20 anos',
      'Borda medial: surge na puberdade; fusão 21-22 anos',
      'Os-acrômio: não fusão do pré-acrômio presente em 8-15% dos adultos (incidência axial)',
      'Sequência de ossificação (Quadro 1, p.297): crítica para não confundir com fratura',
      'Ossos wormianos e variantes anatômicas frequentes nas imagens pediátricas',
    ],
  },
  {
    id: 'shoulder-fractures',
    title: 'Fraturas do Ombro Pediátrico',
    content: [
      'CLAVÍCULA: fratura mais comum do ombro pediátrico (20-40% das fraturas pediátricas)',
      '  — Neonatal: mecanismo de parto, maioria diagnosticada tardiamente pelo calo',
      '  — Diafisária: tratamento conservador (tipoia 2-4 semanas)',
      '  — Medial: fechar fise medial 22-25 anos — risco de lesão vascular',
      '  — Lateral: equivalente de fratura de acrômio em adultos',
      'ÚMERO PROXIMAL (Fise): Salter-Harris II mais comum',
      '  — Mecanismo: queda sobre o braço estendido ou trauma direto',
      '  — <5 anos: períosteo espesso, fise cartilaginosa extensa',
      '  — 5-12 anos: SH-II típico, potencial de remodelação alto',
      '  — Adolescente: SH-I/II com deslocamento maior, menos remodelação',
      'ESCÁPULA: fraturas incomuns na criança — alto mecanismo necessário',
      '  — Associar pesquisa de lesões associadas (costelas, pulmão)',
      '  — Corpo: geralmente conservador; glenóide/colo: cirúrgico se deslocado',
    ],
  },
  {
    id: 'salter-harris',
    title: 'Salter-Harris no Úmero Proximal',
    content: [
      'TIPO I (0-5 anos): separação fisária pura, difícil diagnóstico radiológico',
      '  — Fise cartilaginosa ampla e invisível ao RX',
      '  — Diagnóstico por US ou RM; tratamento: tipoia 3-4 semanas',
      'TIPO II (5-12 anos): fragmento metafisário + separação fisária',
      '  — Mais frequente no úmero proximal',
      '  — Deslocamento < 50%: tratamento conservador, excelente prognóstico',
      '  — Deslocamento > 50%: redução + tipoia ou fixação percutânea',
      'TIPO III: separação epifisária, intra-articular — raramente no úmero proximal',
      'TIPO IV: linha de fratura atravessa metáfise + fise + epífise',
      'TIPO V (Crush): compressão axial da fise — diagnóstico retrospectivo',
      'RISCO DE DISTÚRBIO DE CRESCIMENTO: maior nos tipos III, IV e V',
      'Úmero proximal contribui com 80% do crescimento do úmero total',
    ],
  },
  {
    id: 'treatment-by-age',
    title: 'Tratamento por Idade',
    content: [
      'LACTENTE (0-2 anos):',
      '  — Reposição no saco glenoumeral + tipoia de corpo por 3 semanas',
      '  — Potencial de remodelação: excelente (aceitar > 70° de angulação)',
      '  — Imobilização: 3-4 semanas',
      'CRIANÇA (3-10 anos):',
      '  — < 50% deslocamento ou < 30° angulação: tipoia 4-5 semanas',
      '  — > 50% deslocamento: tentar redução fechada ± fixação percutânea',
      '  — Potencial de remodelação: bom (aceitar até 40-50°)',
      'ADOLESCENTE (11+ anos):',
      '  — Critérios mais rígidos: < 20° angulação, < 30% deslocamento',
      '  — Redução fechada + fixação percutânea com fios de Kirschner',
      '  — Casos graves: fixação com parafusos canulados ou placa',
      '  — Imobilização total: 4-6 semanas (pp.303)',
      'REGRA GERAL: quanto mais jovem, mais remodelação — tratar menos agressivamente',
    ],
  },
  {
    id: 'differential',
    title: 'Diagnóstico Diferencial',
    content: [
      'VARIANTE DE NORMALIDADE vs FRATURA:',
      '  — Centros de ossificação múltiplos: não confundir com fratura (ver p.297)',
      '  — Os-acrômio: bilateral, bordas arredondadas, assintomático habitualmente',
      '  — Fise distal da clavícula: irregular, normal até 22-25 anos',
      'PATOLÓGICO:',
      '  — Maus-tratos: suspeitar em < 3 anos sem mecanismo claro',
      '  — Osteomielite aguda hematogénica: febre, PCR elevada, sem mecanismo de trauma',
      '  — Displasia óssea: bilateralidade, osteopenia difusa, história familiar',
      '  — Tumor: lesão lítica, dor noturna, perda de peso (ver pp.299 — diagnóstico diferencial)',
      'PSEUDOSSUBLUXAÇÃO GLENOUMERAL:',
      '  — Normal em crianças pequenas: cabeça aparentemente descida',
      '  — Reduz com abdução — não é luxação real',
      'PARALISIA BRAQUIAL OBSTÉTRICA:',
      '  — Diferente de fratura de úmero: sem crepitação, sem edema agudo',
      '  — Lesão de C5-C6 (Erb) vs C8-T1 (Klumpke)',
    ],
  },
];

export default function PediatricShoulderGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('ossification');

  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Manual SBOT — Trauma Pediátrico do Ombro (pp. 294–304)</p>
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
        <p className="text-sm text-gray-300">O úmero proximal possui enorme potencial de remodelação — contribui com 80% do crescimento do úmero. Em crianças menores de 10 anos, aceitar angulações consideráveis. Reconhecer centros de ossificação normais evita sobretratamento. Imobilização de 4-6 semanas conforme tipo de fratura e idade (pp.303).</p>
      </div>
      <div className="bg-[#111111] border border-[rgba(239,68,68,0.2)] rounded-xl p-4">
        <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Atenção</p>
        <p className="text-sm text-gray-300">Salter-Harris III e IV exigem redução anatômica para evitar distúrbio de crescimento. Suspeitar de maus-tratos em crianças menores de 3 anos sem mecanismo claro de trauma. Fractura neonatal da clavícula frequentemente diagnosticada apenas pelo calo ósseo.</p>
      </div>
    </div>
  );
}
