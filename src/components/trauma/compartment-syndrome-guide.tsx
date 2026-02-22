import { Alert } from '@/components/ui/Alert.tsx';

const images = [
  { src: '/images/manual-trauma/page270_img1.png', caption: 'Síndrome compartimental — compartimentos da perna e fasciotomia' },
  { src: '/images/manual-trauma/page270_img2.png', caption: 'Dupla incisão para fasciotomia da perna (anterolateral + posteromedial)' },
  { src: '/images/manual-trauma/page270_img3.png', caption: 'Fasciotomia do antebraço — incisão volar e descompressão do túnel do carpo' },
];

export default function CompartmentSyndromeGuideTool() {
  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Síndrome Compartimental — Manual SBOT (p. 270)</p>
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
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Definição e Fisiopatologia</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-3">
          <p className="text-sm text-gray-300">A síndrome compartimental aguda é uma emergência ortopédica causada pelo aumento da pressão dentro de um compartimento osteofascial fechado, resultando em comprometimento da perfusão tecidual.</p>
          <ul className="space-y-1">
            {[
              { label: 'Fisiopatologia', desc: 'Edema/hemorragia no compartimento → aumento de pressão → compressão venosa → aumento de pressão capilar → mais edema (ciclo vicioso)' },
              { label: 'Pressão crítica', desc: 'Quando a pressão compartimental se aproxima da pressão diastólica, a perfusão muscular cessa' },
              { label: 'Tempo', desc: 'Lesão muscular irreversível após 4-6 horas de isquemia. Lesão nervosa após 2-4 horas' },
              { label: 'Consequência tardia', desc: 'Contratura isquêmica de Volkmann (membro superior) ou deformidade em garra (membro inferior)' },
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Sinais Clínicos — Os 6 Ps</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { p: '1. Pain (Dor)', desc: 'Dor desproporcional à lesão, não responsiva a analgesia convencional. DOR AO ESTIRAMENTO PASSIVO dos músculos do compartimento = sinal mais precoce e sensível.' },
            { p: '2. Pressure (Pressão)', desc: 'Compartimento tenso e firme à palpação. Edema importante.' },
            { p: '3. Paresthesia (Parestesia)', desc: 'Alteração da sensibilidade no território dos nervos que atravessam o compartimento.' },
            { p: '4. Paralysis (Paralisia)', desc: 'Perda da função motora. Sinal tardio — indica lesão já estabelecida.' },
            { p: '5. Pallor (Palidez)', desc: 'Sinal tardio e inconsistente na síndrome compartimental.' },
            { p: '6. Pulselessness (Ausência de pulso)', desc: 'Sinal MUITO tardio. A pressão compartimental raramente excede a pressão arterial sistólica. Presença de pulsos NÃO exclui síndrome compartimental.' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
              <p className="text-xs font-semibold text-white mb-1">{item.p}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
          <p className="text-xs text-red-400 font-semibold mt-2">ATENÇÃO: Esperar por todos os 6 Ps resulta em diagnóstico tardio e sequelas irreversíveis. Os 2 primeiros Ps (Pain + Pressure) são suficientes para indicar fasciotomia.</p>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Diagnóstico</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Diagnóstico clínico', desc: 'Dor desproporcional + dor ao estiramento passivo + compartimento tenso = fasciotomia' },
            { label: 'Medida de pressão (delta pressure)', desc: 'ΔP = Pressão Diastólica − Pressão Compartimental' },
            { label: 'Critério de Stryker/Whitesides', desc: 'ΔP ≤ 30 mmHg = indicação de fasciotomia' },
            { label: 'Pressão absoluta', desc: '> 30 mmHg é preocupante, mas o delta pressure é mais confiável' },
            { label: 'Indicações de medida objetiva', desc: 'Pacientes sedados/intubados, TCE com rebaixamento, crianças não cooperativas, bloqueio nervoso regional' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
          <p className="text-xs text-gray-500 mt-2">A medida deve ser feita no ponto de maior tensão (geralmente próximo ao foco de fratura) e em TODOS os compartimentos em risco.</p>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Tratamento — Fasciotomia de Emergência</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          <p className="text-sm text-white font-semibold mb-2">A fasciotomia é uma EMERGÊNCIA CIRÚRGICA. Tempo é músculo.</p>
          {[
            { label: 'Medidas imediatas (pré-cirúrgicas)', desc: 'Remover TODAS as bandagens/talas circunferenciais, membro ao nível do coração (não elevar excessivamente), evitar hipotensão' },
            { label: 'Perna (4 compartimentos)', desc: 'Dupla incisão (anterolateral e posteromedial). Abrir TODOS os 4 compartimentos: anterior, lateral, posterior superficial, posterior profundo' },
            { label: 'Antebraço (3 compartimentos)', desc: 'Incisão volar curvilínea do cotovelo ao punho. Descompressão do túnel do carpo associada' },
            { label: 'Coxa (3 compartimentos)', desc: 'Incisão lateral. Anterior, posterior e medial' },
            { label: 'Mão (10 compartimentos)', desc: 'Incisões dorsais (2) entre 2º-3º e 4º-5º metacarpos + incisão tenar + incisão hipotenar' },
            { label: 'Pé (9 compartimentos)', desc: 'Dupla incisão dorsal + incisão medial' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
          <p className="text-xs text-gray-500 mt-2">Deixar as feridas ABERTAS. Fechamento secundário ou enxerto de pele em 48-72 horas quando edema regredir. Não fechar sob tensão.</p>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Localizações Mais Comuns</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-1">
          {[
            { label: 'Perna', desc: 'Localização MAIS COMUM. Fraturas da tíbia, especialmente diafisárias. O compartimento anterior é o mais frequentemente afetado.' },
            { label: 'Antebraço', desc: 'Fraturas de ambos os ossos, fraturas supracondilares do úmero em crianças (Volkmann)' },
            { label: 'Coxa', desc: 'Menos comum, mas possível após fraturas femorais e lesões vasculares' },
            { label: 'Pé', desc: 'Lesões por esmagamento (Lisfranc), fraturas do calcâneo' },
            { label: 'Mão', desc: 'Lesões por esmagamento, queimaduras, mordeduras de cobra' },
            { label: 'Glúteo', desc: 'Pacientes em coma prolongado (overdose, pós-operatório prolongado)' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <Alert type="info">A síndrome compartimental é um diagnóstico CLÍNICO. Na dúvida, fazer fasciotomia. Uma fasciotomia desnecessária tem morbidade infinitamente menor que uma síndrome compartimental não tratada (contratura de Volkmann, amputação, rabdomiólise, insuficiência renal, morte).</Alert>
    </div>
  );
}
