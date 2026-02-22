import { Alert } from '@/components/ui/Alert.tsx';

const images = [
  { src: '/images/manual-trauma/page24_img1.png', caption: 'Conceito da haste intramedular — conexão entre segmentos (p.24)' },
  { src: '/images/manual-trauma/page24_img2.png', caption: 'Haste intramedular no fêmur — visão geral' },
  { src: '/images/manual-trauma/page25_img1.png', caption: 'Princípios biomecânicos da haste IM (p.25)' },
  { src: '/images/manual-trauma/page25_img2.png', caption: 'Distribuição de carga — load sharing vs load bearing' },
  { src: '/images/manual-trauma/page25_img3.png', caption: 'Fresagem e haste intramedular — diâmetro e contato cortical' },
  { src: '/images/manual-trauma/page26_img1.png', caption: 'Local de inserção ântero-lateral do fêmur (p.26)' },
  { src: '/images/manual-trauma/page26_img2.png', caption: 'Ponto de entrada trocantérico e fossa piriforme' },
  { src: '/images/manual-trauma/page26_img3.png', caption: 'Técnica de introdução da haste — passos cirúrgicos' },
  { src: '/images/manual-trauma/page27_img1.png', caption: 'Angulação de 15° no plano sagital — alinhamento da haste (p.27)' },
];

export default function IntramedullaryNailGuideTool() {
  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Haste Intramedular — Princípios e Técnica — Manual SBOT (pp. 24–27)</p>
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
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Princípios Biomecânicos</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Load Sharing (compartilhamento de carga)', desc: 'Haste IM distribui carga entre implante e córtex — requer bom contato cortical. Menor risco de fadiga do implante. Padrão em fraturas estáveis com cominuição mínima' },
            { label: 'Load Bearing (sustentação total)', desc: 'Haste suporta toda a carga — necessário em cominuição extensa sem contato cortical. Maior risco de fadiga e quebra da haste se não houver consolidação' },
            { label: 'Vantagem do eixo central', desc: 'Implante intramedular é biomecânicamente superior à placa: braço de momento menor, cargas distribuídas ao longo do canal, menor estresse na interface osso-implante' },
            { label: 'Rigidez torsional', desc: 'Parafusos de bloqueio proximal e distal controlam rotação — essenciais na maioria das fraturas diafisárias' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Indicações por Segmento</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Fêmur diafisário', desc: 'Indicação de escolha para fraturas 32-A/B/C. Haste anterógrada é padrão. Zona de isthmus favorece estabilidade. Peso imediato possível com bloqueio estático' },
            { label: 'Tíbia diafisária', desc: 'Indicação principal em fraturas 42-A/B/C. Abordagem infrapatelar (tendão patelar transperfurado ou à beira do tendão). Alta taxa de dor anterior de joelho (25–40%)' },
            { label: 'Úmero diafisário', desc: 'Anterógrada (lesões proximais e médias) ou retrógrada (lesões distais, obesos, ombro comprometido). Maior cuidado com nervo radial. Alternativa: placa (menor risco de dor no ombro)' },
            { label: 'Fraturas periprotéticas', desc: 'Hastes de revisão ou longas podem ser usadas para proteger o segmento femoral periprotético' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Pontos de Entrada</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Fêmur — Fossa Piriforme', desc: 'Ponto de entrada clássico. Alinhado ao eixo do canal medular. Risco de necrose da cabeça femoral se violado o suprimento vascular' },
            { label: 'Fêmur — Trocantérico', desc: 'Ponto mais lateral, seguro em crianças e adultos. Hastes com curvatura proximal adaptada (offset valgo 6–10°). Padrão atual na maioria dos casos' },
            { label: 'Tíbia — Infrapatelar', desc: 'Através do tendão patelar ou paramedial. Joelho fletido 110–120°. Ponto: ápice da tuberosidade, ligeiramente medial ao sulco espinhal' },
            { label: 'Úmero — Anterógrada', desc: 'Ponto no sulco entre acrômio e grande tuberosidade (rotador superior). Angulação de 15° no plano sagital para entrada correta' },
            { label: 'Úmero — Retrógrada', desc: 'Fossa olecraniana, 2 cm proximal à superfície articular. Janela central de 1,5 cm no úmero distal' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Fresagem vs. Sem Fresagem</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Com fresagem (reamed)', desc: 'Permite haste de maior diâmetro — maior estabilidade, maior taxa de consolidação. Destroi endósteo e libera medula: risco de embolia gordurosa. Indicado na maioria dos casos eletivos' },
            { label: 'Sem fresagem (unreamed)', desc: 'Preserva suprimento endosteal. Preferível em fraturas expostas Gustilo III, pacientes com lesão pulmonar grave (SDRA, contusão pulmonar), politrauma instável. Diâmetro menor — maior risco de quebra da haste' },
            { label: 'Estudo SPRINT (tíbia)', desc: 'Fresagem associada a menor taxa de falha do implante e menor necessidade de procedimentos adicionais em fraturas fechadas e expostas grau I–II' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Bloqueio: Estático vs. Dinâmico</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Bloqueio estático', desc: 'Parafusos proximal e distal — controla comprimento, rotação e angulação. Indicado na grande maioria das fraturas. Padrão inicial em fraturas cominutivas e instáveis' },
            { label: 'Bloqueio dinâmico', desc: 'Somente bloqueio proximal (fêmur) ou distal (tíbia) — permite carga axial no foco. Para fraturas estáveis simples que precisam de compressão para consolidar' },
            { label: 'Dinamização', desc: 'Remoção do parafuso distal (fêmur) após 6–8 semanas para estimular consolidação em casos de retardo. Indicado quando há consolidação lenta sem infecção' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Complicações</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-1">
          {[
            { label: 'Malrotação', desc: 'Mais frequente no fêmur. Comparação intraoperatória com o lado contralateral (radioscopia de quadril). Verificar sinal do menor trocante e perfil clínico' },
            { label: 'Embolia gordurosa', desc: 'Risco aumentado com fresagem em fraturas femorais de alta energia. Sinais: hipoxemia, petéquias, rebaixamento do nível de consciência (critérios de Gurd)' },
            { label: 'Dor anterior de joelho', desc: 'Complicação mais frequente da haste tibial (25–40%). Relacionada à abordagem transpatelar e protrusão da haste' },
            { label: 'Quebra da haste', desc: 'Rara com hastes modernas fresadas. Risco maior com hastes sem fresagem, diâmetro inadequado, cominuição extensa sem consolidação' },
            { label: 'Infecção', desc: 'Taxa de 1–2% em fraturas fechadas. Fraturas expostas: maior risco. Remoção da haste obrigatória em infecção aguda com implante instável' },
            { label: 'Retardo de consolidação / Não-união', desc: 'Fatores de risco: tabagismo, diabetes, infecção, fresagem insuficiente. Manejo: dinamização, enxerto ósseo, troca de haste fresada' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <Alert type="info">A haste intramedular é o implante de escolha para fraturas diafisárias do fêmur e tíbia. O ponto de entrada correto, o alinhamento axial (15° de angulação sagital no úmero), o controle de rotação e o bloqueio adequado são os determinantes mais importantes do resultado cirúrgico.</Alert>
    </div>
  );
}
