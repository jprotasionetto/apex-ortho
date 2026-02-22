import { Alert } from '@/components/ui/Alert.tsx';

const images = [
  { src: '/images/manual-trauma/page136_img1.png', caption: 'Anatomia do aparelho extensor — vista dorsal (p.136)' },
  { src: '/images/manual-trauma/page136_img2.png', caption: 'Bandas laterais e tendão terminal' },
  { src: '/images/manual-trauma/page136_img3.png', caption: 'Zonas do aparelho extensor — visão geral' },
  { src: '/images/manual-trauma/page137_img1.png', caption: 'Slip central e sistema retinacular (p.137)' },
  { src: '/images/manual-trauma/page137_img2.png', caption: 'Bloqueio extensor — técnica de bloqueio' },
  { src: '/images/manual-trauma/page137_img3.png', caption: 'Mecanismo de extensão digital integrado' },
  { src: '/images/manual-trauma/page138_img1.png', caption: 'Técnicas de sutura do aparelho extensor (p.138)' },
  { src: '/images/manual-trauma/page138_img2.png', caption: 'Splint de alumínio — tratamento conservador' },
  { src: '/images/manual-trauma/page138_img3.png', caption: 'Imobilização em extensão para lesões do aparelho extensor' },
];

export default function ExtensorTendonGuideTool() {
  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Aparelho Extensor da Mão — Manual SBOT (pp. 136–138)</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Anatomia do Aparelho Extensor</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Tendão extensor longo', desc: 'Origina-se no compartimento extensor, divide-se na falange proximal em slip central e duas bandas laterais' },
            { label: 'Slip central (banda central)', desc: 'Inserção no dorso da falange média — extensão da IFP. Lesão → deformidade em botoeira' },
            { label: 'Bandas laterais', desc: 'Convergem distalmente formando o tendão terminal, inserem-se na falange distal — extensão da IFD' },
            { label: 'Tendão terminal', desc: 'Fusão das bandas laterais na falange distal. Lesão → dedo em martelo (mallet finger)' },
            { label: 'Bandas sagitais', desc: 'Mantêm o tendão extensor centralizado sobre a articulação MCF. Lesão → subluxação ulnar do tendão' },
            { label: 'Ligamento retinacular oblíquo (Landsmeer)', desc: 'Conecta bainha flexora à banda lateral — sincroniza extensão de IFP e IFD' },
            { label: 'Músculos intrínsecos', desc: 'Lumbricais e interósseos contribuem para a extensão interfalângica via bandas laterais' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Zonas do Aparelho Extensor (I–VIII)</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { zona: 'Zona I', local: 'Sobre a IFD', lesao: 'Dedo em martelo (mallet finger) — avulsão do tendão terminal' },
            { zona: 'Zona II', local: 'Falange média', lesao: 'Laceração das bandas laterais — pode evoluir para deformidade' },
            { zona: 'Zona III', local: 'Sobre a IFP', lesao: 'Lesão do slip central → deformidade em botoeira (boutonnière)' },
            { zona: 'Zona IV', local: 'Falange proximal', lesao: 'Laceração do aparelho extensor sobre a falange proximal' },
            { zona: 'Zona V', local: 'Sobre a MCF', lesao: 'Lesão das bandas sagitais → subluxação do tendão extensor' },
            { zona: 'Zona VI', local: 'Dorso da mão (metacarpo)', lesao: 'Laceração do tendão extensor — reparação cirúrgica direta' },
            { zona: 'Zona VII', local: 'Retináculo extensor (punho)', lesao: 'Laceração sob o retináculo — risco de aderência, tenossinovite' },
            { zona: 'Zona VIII', local: 'Antebraço distal', lesao: 'Lacerações proximais ao retináculo — músculos extrínsecos' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
              <div className="flex gap-2 items-start">
                <span className="text-[#D4AF37] font-bold text-xs min-w-[60px]">{item.zona}</span>
                <div>
                  <p className="text-xs font-semibold text-white">{item.local}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.lesao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Tratamento por Zona</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-white mb-1">Conservador (Splint / Imobilização)</p>
            <ul className="space-y-1">
              {[
                { label: 'Zona I — Mallet finger', desc: 'Splint de alumínio em extensão total da IFD por 6–8 semanas (24h/dia). IFP livre. Cirurgia reservada para avulsão óssea com mais de 1/3 da superfície articular ou subluxação volar' },
                { label: 'Zona III — Boutonnière aguda', desc: 'Imobilização da IFP em extensão por 6 semanas + exercícios de IFD (forçam extensão do slip central por retensionamento das bandas laterais)' },
                { label: 'Zona V — Bandas sagitais', desc: 'Lesão aguda sem subluxação: órtese em extensão por 4–6 semanas com MCF em 0°' },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-300">
                  <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white mb-1">Cirúrgico (Sutura / Reparo)</p>
            <ul className="space-y-1">
              {[
                { label: 'Zonas II, IV, VI, VII, VIII', desc: 'Sutura primária direta com fio absorvível 4-0 ou 3-0. Técnica de Kessler modificado, sutura em colchonete ou sutura simples conforme espessura do tendão' },
                { label: 'Zona III — Boutonnière cirúrgico', desc: 'Reparo do slip central com sutura absorvível. Reinserção óssea (âncoras ou pull-through) quando avulsão na falange média' },
                { label: 'Zona I — Avulsão óssea grande', desc: 'Fixação com fio de Kirschner, parafuso canulado mini ou pull-through. Articulação IFD temporariamente fixada em extensão por 4 semanas' },
                { label: 'Zona V — Bandas sagitais crônicas', desc: 'Reconstrução com enxerto de tendão palmar ou retalho local de banda sagital contralateral' },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-300">
                  <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Deformidades Características</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Dedo em Martelo (Mallet)', desc: 'Flexão da IFD sem extensão ativa — lesão do tendão terminal (Zona I). Tratamento primário: splint' },
            { label: 'Deformidade em Botoeira (Boutonnière)', desc: 'Flexão da IFP + hiperextensão da IFD — lesão do slip central (Zona III). Migração volar das bandas laterais perpetua a deformidade' },
            { label: 'Deformidade em Pescoço de Cisne', desc: 'Hiperextensão da IFP + flexão da IFD — pode ser secundária a lesão intrínseca, ruptura do flexor superficial ou mallet crônico com retração' },
            { label: 'Subluxação do Extensor (Zona V)', desc: 'Tendão extensor desloca-se ulnarmente ao dobrar a MCF — lesão da banda sagital radial' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <Alert type="info">O aparelho extensor da mão é uma estrutura delicada e integrada. Lesões tratadas inadequadamente evoluem para deformidades fixas (boutonnière, mallet crônico, pescoço de cisne). O diagnóstico correto da zona e do mecanismo é essencial para definir conservador vs. cirúrgico.</Alert>
    </div>
  );
}
