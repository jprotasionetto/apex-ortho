import { Alert } from '@/components/ui/Alert.tsx';

const images = [
  { src: '/images/manual-trauma/page261_img1.png', caption: 'Osteomielite — apresentação clínica e imagem (p.261)' },
  { src: '/images/manual-trauma/page274_img1.png', caption: 'Mortalidade se aproxima de 100% — osteomielite grave (p.274)' },
  { src: '/images/manual-trauma/page275_img1.png', caption: 'Tetraciclina — inibição da síntese de MMP (p.275)' },
  { src: '/images/manual-trauma/page277_img1.png', caption: 'Manejo cirúrgico da osteomielite crônica (p.277)' },
];

export default function OsteomyelitisGuideTool() {
  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Osteomielite e Infecção Óssea — Manual SBOT (pp. 261, 274–277)</p>
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
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Classificação de Waldvogel</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Hematogênica', desc: 'Disseminação hematogênica de foco a distância. Mais comum em crianças (metáfise distal fêmur, proximal tíbia). Em adultos: vértebras (espondilodiscite). Geralmente monomicrobiana (S. aureus)' },
            { label: 'Contígua — sem insuficiência vascular', desc: 'Infecção por contaminação direta (trauma, cirurgia). Mais comum em adultos. Polimicrobiana frequente. Exemplos: fratura exposta, pós-operatório de artroplastia ou fixação interna' },
            { label: 'Contígua — com insuficiência vascular', desc: 'Pé diabético, doença arterial periférica. Polimicrobiana. Tratamento integrado: ortopédico, vascular e endocrinológico. Risco aumentado de amputação' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
              <p className="text-xs font-semibold text-white mb-0.5">{item.label}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Classificação de Cierny-Mader</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-white mb-1">Tipo Anatômico</p>
            <div className="space-y-1">
              {[
                { t: 'Tipo 1 — Medular', desc: 'Infecção confinada ao canal medular (hematogênica ou por haste IM). Sem envolvimento cortical' },
                { t: 'Tipo 2 — Superficial', desc: 'Infecção do córtex periosteal e superficial. Ferida crônica com exposição óssea. Sem envolvimento medular' },
                { t: 'Tipo 3 — Localizado', desc: 'Córtex espesso e estável com infecção segmentar localizada. Ressecção possível sem comprometer estabilidade' },
                { t: 'Tipo 4 — Difuso', desc: 'Envolvimento de toda a circunferência óssea. Instabilidade mecânica presente ou resultante do desbridamento. Tipo de pior prognóstico' },
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-xs">
                  <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.t}:</span>
                  <span className="text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-white mb-1">Tipo Fisiológico (Hospedeiro)</p>
            <div className="space-y-1">
              {[
                { t: 'Hospedeiro A', desc: 'Imunidade normal, boa vascularização. Resposta imune e cicatrização preservadas. Melhor prognóstico' },
                { t: 'Hospedeiro B', desc: 'Comprometimento local (Bl: insuficiência vascular, cicatrizes) ou sistêmico (Bs: diabetes, imunossupressão, desnutrição, tabagismo, IRC). Prognóstico intermediário' },
                { t: 'Hospedeiro C', desc: 'Tratamento seria mais prejudicial que a doença. Pacientes terminais, idosos frágeis, alto risco cirúrgico. Tratamento paliativo (antibióticos supressores) em vez de curativo' },
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-xs">
                  <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.t}:</span>
                  <span className="text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Osteomielite Aguda vs. Crônica</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Aguda — apresentação', desc: 'Febre, dor local, eritema, edema e impotência funcional. VHS e PCR elevados. Bacteremia presente em até 50% dos casos hematogênicos' },
            { label: 'Aguda — diagnóstico por imagem', desc: 'Rx: alterações visíveis após 10–21 dias (reação periosteal, rarefação). RNM: exame de escolha — sensibilidade >90%, detecta precocemente edema medular e coleções' },
            { label: 'Crônica — características', desc: 'Sequestro ósseo necrótico (avascular, colonizado), involucro (neoformação óssea ao redor), fístula crônica com drenagem purulenta. VHS e PCR podem ser normais ou levemente elevados' },
            { label: 'Crônica — diagnóstico', desc: 'Biópsia óssea com cultura é o padrão-ouro. Swab de fístula tem baixa correlação com o agente causador (exceto S. aureus). RNM identifica sequestros e coleções' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Diagnóstico</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-1">
          {[
            { label: 'VHS (velocidade de hemossedimentação)', desc: 'Elevado na fase aguda. Lenta normalização — útil para monitorar resposta ao tratamento' },
            { label: 'PCR (proteína C reativa)', desc: 'Marcador mais sensível e de resposta mais rápida que o VHS. Normaliza em 1–2 semanas com tratamento adequado' },
            { label: 'Hemocultura', desc: 'Positiva em até 50% das osteomielites hematogênicas. Deve ser colhida antes de iniciar antibiótico' },
            { label: 'RNM (ressonância magnética)', desc: 'Padrão-ouro. Detecta osteomielite 1–2 dias após início. Melhor definição de extensão, coleções, sequestros e partes moles' },
            { label: 'Cintilografia óssea (Tc99)', desc: 'Alta sensibilidade, baixa especificidade. Útil em crianças, coluna, quando RNM contraindicada' },
            { label: 'Biópsia óssea com cultura', desc: 'Padrão-ouro microbiológico. Essencial antes de antibiótico quando o diagnóstico não está firmado. Mínimo 3–5 amostras de tecido profundo' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Princípios do Tratamento</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: '1. Desbridamento cirúrgico', desc: 'Ressecção de todo tecido necrótico, infectado e mal vascularizado. Remoção do sequestro. Margem de osso sangrante (sinal da páprica). Fundamento do tratamento cirúrgico' },
            { label: '2. Gerenciamento do espaço morto', desc: 'Após desbridamento: preencher com cimento de PMMA + antibiótico (gentamicina/vancomicina), hidroxiapatita, sulfato de cálcio ou enxerto ósseo em segundo tempo (técnica de Masquelet)' },
            { label: '3. Estabilização óssea', desc: 'Fraturas associadas ou instabilidade após ressecção: fixador externo (preferível ao implante intramedularn em osso infectado). Transporte ósseo por Ilizarov em defeitos maiores' },
            { label: '4. Cobertura de partes moles', desc: 'Retalho muscular local ou livre — essencial para vascularizar o leito e garantir cobertura sem tensão. Integração com cirurgia plástica em casos complexos' },
            { label: '5. Antibioticoterapia', desc: 'Guiada por cultura e antibiograma. Início após coleta de amostras. Duração: 4–6 semanas IV (aguda) ou 4–12 semanas conforme tipo e hospedeiro (crônica)' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Antibioticoterapia por Germe</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-1">
          {[
            { label: 'S. aureus sensível (MSSA)', desc: 'Oxacilina IV ou cefalotina IV. Transição oral: cefalexina ou sulfametoxazol-trimetoprim' },
            { label: 'S. aureus resistente (MRSA)', desc: 'Vancomicina IV (dose guiada por AUC/MIC). Alternativas: linezolida, daptomicina. Teicoplanina' },
            { label: 'Gram-negativos', desc: 'Cefalosporinas de 3ª geração, piperacilina-tazobactam, carbapenêmicos (conforme antibiograma). Pseudomonas: ceftazidima, cefepima, ciprofloxacino' },
            { label: 'Anaeróbios', desc: 'Metronidazol ou clindamicina — frequentes em infecções de partes moles e pé diabético' },
            { label: 'Tetraciclina / Doxiciclina', desc: 'Inibem síntese de metaloproteinases de matriz (MMP) além do efeito antibiótico — papel anti-inflamatório adicional. Úteis em osteomielite crônica por MRSA e Brucella' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <Alert type="warning">A osteomielite crônica não tratada pode evoluir para amiloidose secundária, carcinoma de células escamosas na fístula crônica (úlcera de Marjolin) e sepse de origem óssea com mortalidade elevada. O princípio fundamental é desbridar de forma radical e preencher o espaço morto adequadamente.</Alert>
    </div>
  );
}
