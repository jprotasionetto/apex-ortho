import { Alert } from '@/components/ui/Alert.tsx';

const images = [
  { src: '/images/manual-trauma/page265_img1.png', caption: 'Profilaxia antitetânica — tabela de indicações conforme história vacinal (Parte 1)' },
  { src: '/images/manual-trauma/page265_img2.png', caption: 'Profilaxia antitetânica — classificação da ferida e conduta (Parte 2)' },
  { src: '/images/manual-trauma/page266_img1.png', caption: 'Esquema de vacinação antitetânica — doses e intervalos' },
  { src: '/images/manual-trauma/page266_img2.png', caption: 'Imunoglobulina antitetânica humana (IGHAT) — indicações e doses' },
];

export default function VacinaTetanoTool() {
  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Profilaxia Antitetânica — Manual SBOT (pp. 265–266)</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          {images.map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-32 object-contain bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Classificação das Feridas</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.05)]">
              <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Ferida Limpa</p>
              <ul className="space-y-1">
                {['Ferida limpa, superficial, < 6h', 'Sem contaminação por terra ou fezes', 'Borda regular (cortante)', 'Sem lesão de partes moles', 'Sem desvitalização tecidual'].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-300"><span className="text-green-400 flex-shrink-0">•</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)]">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Ferida Suja / Tetanogênica</p>
              <ul className="space-y-1">
                {['Ferida contaminada com terra, fezes, saliva', '> 6h de evolução', 'Borda irregular (esmagamento, perfuração)', 'Desvitalização tecidual / necrose', 'Ferida por projétil de arma de fogo', 'Congelamento, queimadura, avulsão'].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-300"><span className="text-red-400 flex-shrink-0">•</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Conduta por História Vacinal</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)]">
                <th className="p-3 text-left text-[#D4AF37] font-semibold">História Vacinal</th>
                <th className="p-3 text-center text-green-400 font-semibold">Ferida Limpa<br/><span className="text-gray-500 font-normal">Toxóide / IGHAT</span></th>
                <th className="p-3 text-center text-red-400 font-semibold">Ferida Suja<br/><span className="text-gray-500 font-normal">Toxóide / IGHAT</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(255,255,255,0.04)]">
              {[
                { hist: 'Desconhecida ou < 3 doses', limpo_t: 'Sim', limpo_ig: 'Não', suja_t: 'Sim', suja_ig: 'Sim' },
                { hist: '3 ou mais doses (última há < 5 anos)', limpo_t: 'Não', limpo_ig: 'Não', suja_t: 'Não', suja_ig: 'Não' },
                { hist: '3 ou mais doses (última há 5–10 anos)', limpo_t: 'Não', limpo_ig: 'Não', suja_t: 'Sim', suja_ig: 'Não' },
                { hist: '3 ou mais doses (última há > 10 anos)', limpo_t: 'Sim', limpo_ig: 'Não', suja_t: 'Sim', suja_ig: 'Não' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(255,255,255,0.02)]">
                  <td className="p-3 text-gray-300">{row.hist}</td>
                  <td className="p-3 text-center">
                    <span className={row.limpo_t === 'Sim' ? 'text-green-400 font-medium' : 'text-gray-500'}>{row.limpo_t}</span>
                    {' / '}
                    <span className={row.limpo_ig === 'Sim' ? 'text-amber-400 font-medium' : 'text-gray-500'}>{row.limpo_ig}</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={row.suja_t === 'Sim' ? 'text-green-400 font-medium' : 'text-gray-500'}>{row.suja_t}</span>
                    {' / '}
                    <span className={row.suja_ig === 'Sim' ? 'text-amber-400 font-medium' : 'text-gray-500'}>{row.suja_ig}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2 px-1">IGHAT = Imunoglobulina Antitetânica Humana. Toxóide = vacina antitetânica (dT ou dTpa).</p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Doses e Vias de Administração</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-3">
          <div className="space-y-2">
            {[
              { label: 'Toxóide tetânico (dT/dTpa)', desc: '0,5 mL IM — deltoide. Série primária: 3 doses (0, 2, 4 meses). Reforço a cada 10 anos.' },
              { label: 'IGHAT (Imunoglobulina Antitetânica Humana)', desc: '250 UI IM — glúteo contralateral ao toxóide. Se > 24h ou ferida grave: 500 UI. Aplicar em local diferente do toxóide.' },
              { label: 'Soro Antitetânico (SAT) — equino', desc: '3.000–5.000 UI IM — usar apenas se IGHAT indisponível. Teste de sensibilidade obrigatório. Risco de doença do soro.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
                <p className="text-xs font-semibold text-white mb-1">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold text-[#D4AF37] mb-3">Populações Especiais</h2>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2">
          {[
            { label: 'Gestantes', desc: 'Toxóide: seguro em qualquer trimestre — usar dTpa preferencialmente (proteção do recém-nascido). IGHAT: seguro.' },
            { label: 'Imunossuprimidos / HIV', desc: 'Sempre usar IGHAT em feridas sujas, independente da história vacinal. Resposta vacinal pode ser subótima.' },
            { label: 'Crianças < 7 anos', desc: 'Esquema DTP (tríplice bacteriana). Profilaxia igual ao adulto conforme história vacinal.' },
            { label: 'Idosos (> 60 anos)', desc: 'Frequentemente sem vacinação completa — assumir esquema incompleto se história duvidosa e tratar como tal.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <span className="text-[#D4AF37] flex-shrink-0 font-semibold">{item.label}:</span>
              <span className="text-gray-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <Alert type="info">Tétano é prevenível — nunca omitir a profilaxia em fraturas expostas, feridas contaminadas ou lesões com desvitalização tecidual. Na dúvida sobre história vacinal, tratar como vacinação incompleta (dar toxóide + IGHAT para feridas sujas). A imunoglobulina (IGHAT) deve ser aplicada em local diferente do toxóide.</Alert>
      <Alert type="caution">SAT (soro equino): risco de reação anafilática — sempre fazer teste de sensibilidade (0,1 mL ID e aguardar 15 min) antes da dose plena. Ter epinefrina disponível. Preferir IGHAT humana sempre que disponível — sem risco de anafilaxia e meia-vida mais longa (25 dias vs 5 dias do SAT).</Alert>
    </div>
  );
}
