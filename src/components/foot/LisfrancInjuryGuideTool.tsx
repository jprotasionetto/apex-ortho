import { Alert } from '@/components/ui/Alert.tsx';

const lisfrancImages = [
  { src: '/images/manual-trauma/page219_img1.png', caption: 'Arquitetura óssea do médio-pé — articulação de Lisfranc' },
  { src: '/images/manual-trauma/page219_img2.png', caption: 'Relações anatômicas tarsometatársicas' },
  { src: '/images/manual-trauma/page220_img1.png', caption: 'Mecanismo axial característico da lesão de Lisfranc' },
  { src: '/images/manual-trauma/page220_img2.png', caption: 'Padrão de lesão por carga axial com pé em equino' },
  { src: '/images/manual-trauma/page221_img1.png', caption: 'Classificação de Quenú-Kuss — radiografia AP comparativa' },
  { src: '/images/manual-trauma/page221_img2.png', caption: 'Perfil mostrando lesão de Lisfranc evidenciada no pé' },
];

export default function LisfrancInjuryGuideTool() {
  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Lesão de Lisfranc — Manual SBOT</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {lisfrancImages.map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-28 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1.5 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 space-y-3">
        <h3 className="text-base font-semibold text-white">Anatomia</h3>
        <p className="text-sm text-gray-300">O complexo articular tarsometatársico (articulação de Lisfranc) compreende a articulação entre os cuneiformes/cubóide e as bases dos metatarsos. O ligamento de Lisfranc é a estrutura-chave — conecta o cuneiforme medial à base do 2º metatarso.</p>
        <ul className="space-y-1">
          {['Ligamento de Lisfranc: cuneiforme medial → base do 2º MT (mais resistente na porção plantar)', 'Não há ligamento intermetatarsal entre 1º e 2º MT — ponto de menor resistência', 'Coluna medial: 1º–3º MT com cuneiformes (rígida, menor mobilidade)', 'Coluna lateral: 4º–5º MT com cubóide (mais móvel — ~20° de mobilidade plantar/dorsal)', 'A artéria dorsal do pé passa entre 1º e 2º MT — risco de lesão vascular na luxação divergente'].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300"><span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span><span>{item}</span></li>
          ))}
        </ul>
      </section>
      <section className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 space-y-3">
        <h3 className="text-base font-semibold text-white">Diagnóstico</h3>
        <ul className="space-y-2">
          {[
            { bold: 'Radiografia em carga:', rest: 'AP, lateral e oblíqua bilateral — essencial para detectar pequenos desvios. Desalinhamento >2 mm = indicação cirúrgica.' },
            { bold: 'Sinal do Fleck:', rest: 'fragmento ósseo avulsionado entre bases do 1º e 2º MT — patognomônico da lesão do ligamento de Lisfranc.' },
            { bold: 'Alinhamento normal (AP):', rest: 'borda medial do 2º MT alinhada com borda medial do cuneiforme intermediário.' },
            { bold: 'Alinhamento normal (oblíqua):', rest: 'borda medial do 4º MT alinhada com borda medial do cubóide.' },
            { bold: 'TC:', rest: 'identifica diastase entre 1º e 2º metatarsos e lesões ósseas sutis.' },
            { bold: 'RM:', rest: 'lesões puramente ligamentares (lesão de Turco) sem componente ósseo — permite visualizar diretamente o ligamento de Lisfranc.' },
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300"><span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span><span><span className="font-medium text-white">{item.bold}</span> {item.rest}</span></li>
          ))}
        </ul>
      </section>
      <section className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 space-y-3">
        <h3 className="text-base font-semibold text-white">Classificação de Quenú-Kuss / Myerson</h3>
        <div className="space-y-3">
          {[
            { type: 'Tipo A — Incongruidade Total (Homolateral)', desc: 'Desvio de todas as 5 articulações TMT na mesma direção (geralmente lateral). Máxima instabilidade.' },
            { type: 'Tipo B — Incongruidade Parcial (Isolada)', desc: 'B1: desvio da coluna medial (1º MT). B2: desvio da coluna lateral (2º–5º MT). Desvio parcial, estabilidade relativa da coluna preservada.' },
            { type: 'Tipo C — Divergente', desc: 'Desvio em direções opostas: 1º MT medial, 2º–5º MT lateral. Padrão menos comum — ruptura completa do ligamento de Lisfranc.' },
          ].map((item) => (
            <div key={item.type} className="rounded-lg bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.15)] p-4">
              <p className="font-semibold text-[#D4AF37] text-sm">{item.type}</p>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 space-y-3">
        <h3 className="text-base font-semibold text-white">Tratamento</h3>
        <ul className="space-y-2">
          {[
            { bold: 'Conservador:', rest: 'reservado a lesões puramente ligamentares sem desvio identificáveis apenas na RM. Imobilização 6–8 semanas com carga progressiva.' },
            { bold: 'Indicação cirúrgica:', rest: 'desvio >2 mm em qualquer incidência (AP, lateral ou oblíqua). Inclui lesões com Sinal do Fleck.' },
            { bold: 'ORIF:', rest: 'redução anatômica + fixação com parafusos transarticulares. Sequência: 2º MT primeiro (pedra angular), depois coluna medial, depois lateral.' },
            { bold: 'Artrodese Primária:', rest: 'preferida para lesões puramente ligamentares (sem fragmento ósseo). Fusão da coluna medial (1º–3º TMT) preservando a mobilidade da coluna lateral.' },
            { bold: 'Pós-operatório:', rest: 'sem carga por 6–8 semanas. Retirada dos parafusos transarticulares em 3–4 meses para restaurar mobilidade residual.' },
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300"><span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span><span><span className="font-medium text-white">{item.bold}</span> {item.rest}</span></li>
          ))}
        </ul>
      </section>
      <Alert type="info">Lesões de Lisfranc são frequentemente subdiagnosticadas (até 20% missed no atendimento inicial). SEMPRE solicitar radiografia em carga bilateral quando houver suspeita clínica. O Sinal do Fleck é patognomônico mesmo em lesões sutis.</Alert>
      <Alert type="caution">Lesões puramente ligamentares têm pior prognóstico que fratura-luxações. Considerar artrodese primária da coluna medial — estudos randomizados mostram superioridade da artrodese primária sobre ORIF para lesões ligamentares.</Alert>
    </div>
  );
}
