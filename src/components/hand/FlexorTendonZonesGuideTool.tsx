import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'zones',
    title: 'Zonas de Verdan',
    content: [
      'Zona I: distal à inserção do FDS (apenas FDP presente)',
      'Zona II: "terra de ninguém" - da polia A1 até a inserção do FDS (FDP + FDS na bainha)',
      'Zona III: palma (entre bordo distal do túnel do carpo e polia A1)',
      'Zona IV: túnel do carpo (9 tendões flexores + nervo mediano no canal)',
      'Zona V: antebraço (proximal ao túnel do carpo)',
      'Polegar: T1 (distal à polia oblíqua), T2 (polia A1 à oblíqua), T3 (eminência tenar)',
    ],
  },
  {
    id: 'zone-ii',
    title: 'Princípios da Zona II',
    content: [
      'Zona mais desafiadora cirurgicamente (FDP + FDS na mesma bainha)',
      'Reparação primária dentro de 2 semanas (idealmente &lt;24h)',
      'Sutura core de 4 fios (4-strand): resistência adequada para mobilização precoce',
      'Técnicas comuns: Kessler modificada, Savage, Strickland, cruciate',
      'Sutura epitendinosa circunferencial: aumenta resistência em 10-50%',
      'Reparar ambos os tendões (FDP + FDS) quando possível',
      'Se necessário sacrificar um: manter FDP, pode exceder slip do FDS',
      'Preservar polias A2 e A4 (prevenir bowstringing)',
      'Gap &gt;3mm no foco de sutura = risco de falha',
    ],
  },
  {
    id: 'rehabilitation',
    title: 'Reabilitação',
    content: [
      'Mobilização ativa precoce: protocolo atual preferido (Manchester/Belfast)',
      'Place-and-hold: posicionar passivamente e manter ativamente',
      'Mobilização passiva (Duran/Kleinert): elástico com tração para flexão, extensão ativa',
      'Tala dorsal em flexão do punho (20-30°) + MCP flexão (60-70°) por 4 semanas',
      'Semanas 0-4: movimentos dentro da tala, sem extensão ativa dos dedos',
      'Semanas 4-6: retirada da tala, início da extensão ativa gradual',
      'Semanas 6-8: fortalecimento progressivo',
      'Semanas 8-12: retorno gradual às atividades',
    ],
  },
  {
    id: 'complications',
    title: 'Complicações',
    content: [
      'Aderências: complicação mais comum, especialmente Zona II',
      'Tenólise: indicada após 3-6 meses se mobilização passiva > ativa significativamente',
      'Re-ruptura: 4-8% com técnicas modernas, maior risco nas primeiras 6 semanas',
      'Contratura em flexão: por aderências ou excesso de tensão na reparação',
      'Bowstringing: perda de polias A2 ou A4 → cordão visível na flexão',
      'Quadriga: encurtamento do FDP de um dedo limita excursão dos outros (origem muscular comum)',
      'Lumbrical plus: FDP muito longo → extensão paradoxal da IFP na tentativa de flexão',
    ],
  },
];

export default function FlexorTendonZonesGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('zones');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Zonas de Verdan — Lesões do Tendão Flexor</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Divide as lesões dos tendões flexores em 5 zonas anatômicas (I-V) da ponta do dedo até o antebraço proximal. Cada zona tem particularidades cirúrgicas e prognóstico distinto.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda laceração com suspeita de lesão de tendão flexor. A zona determina a abordagem cirúrgica, tipo de reparo e protocolo de reabilitação pós-operatório.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Zona II ('Terra de Ninguém'): pior prognóstico — bainha sinovial estreita, ambos FDS e FDP juntos. Reparo primário em 72h, protocolo Kleinert ou Duran. Zonas I, III, IV, V: melhor prognóstico. Cirurgia sempre por mão especializada.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <button key={s.id} onClick={() => setActiveSection(s.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === s.id ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}>{s.title}</button>
        ))}
      </div>
      {sections.filter((s) => s.id === activeSection).map((s) => (
        <div key={s.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-slate-100 mb-4">{s.title}</h3>
          <ul className="space-y-2">
            {s.content.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-300"><span className="text-primary-400 mt-0.5">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
      <Alert type="info">Polias A2 e A4 sao criticas para a funcao do dedo - preservar sempre que possivel durante reparacao.</Alert>
      <Alert type="caution">Zona II ("terra de ninguem") tem os piores resultados historicos - tecnica meticulosa e reabilitacao precoce sao essenciais.</Alert>
      {/* Manual Images */}
      <div className="mt-6 pt-6 border-t border-[rgba(212,175,55,0.15)]">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Manual SBOT — Imagens de Referência</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: '/images/manual-trauma/page133_img1.png', alt: 'Divisão da mão em zonas flexoras' },
            { src: '/images/manual-trauma/page133_img2.png', alt: 'Divisão da mão em zonas flexoras (2)' },
            { src: '/images/manual-trauma/page134_img1.png', alt: 'Técnicas de sutura flexora' },
            { src: '/images/manual-trauma/page134_img2.png', alt: 'Técnicas de sutura (2)' },
            { src: '/images/manual-trauma/page135_img1.png', alt: 'Exemplos de suturas' },
            { src: '/images/manual-trauma/page135_img2.png', alt: 'Exemplos de suturas (2)' },
          ].map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display='none'; }}
              />
              <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
