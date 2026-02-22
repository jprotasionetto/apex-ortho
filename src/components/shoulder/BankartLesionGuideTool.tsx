import { Alert } from '@/components/ui/Alert.tsx';

export default function BankartLesionGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Definição</h3>
        <p className="text-sm text-slate-300">
          A lesão de Bankart é a avulsão do labrum anteroinferior da glenoide, tipicamente resultante de luxação anterior do ombro.
          É a lesão patológica mais comum associada à instabilidade anterior recorrente do ombro.
        </p>
        <p className="text-sm text-slate-300">
          A lesão ocorre quando a cabeça umeral luxa anteriormente, destacando o complexo labro-ligamentar inferior da glenoide anteroinferior (posição 3-6 horas na glenoide direita).
        </p>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Variantes</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Bankart Clássica (Soft Bankart):</span> Avulsão do labrum com periósteo intacto ou minimamente lesado. Sem perda óssea significativa.</li>
          <li><span className="font-medium text-slate-100">Bankart Óssea (Bony Bankart):</span> Avulsão labral com fragmento ósseo da glenoide anteroinferior. Perda óssea significativa altera o tratamento.</li>
          <li><span className="font-medium text-slate-100">ALPSA (Anterior Labroligamentous Periosteal Sleeve Avulsion):</span> Labrum avulsionado medializa e cicatriza medialmente no colo da glenoide. Periósteo medializado mas intacto.</li>
          <li><span className="font-medium text-slate-100">GLAD (Glenolabral Articular Disruption):</span> Lesão superficial do labrum com defeito condral da glenoide adjacente. Sem instabilidade significativa.</li>
          <li><span className="font-medium text-slate-100">Perthes:</span> Lesão labral com periósteo intacto mas destacado. Labrum parece normal na artroscopia, mas é instável à palpação.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Diagnóstico</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Artro-RM (MR arthrography) é o gold standard para diagnóstico</li>
          <li>Sensibilidade da artro-RM: 89-100% vs RM convencional: 66-88%</li>
          <li>TC com reconstrução 3D para avaliar perda óssea glenoidal (en-face view)</li>
          <li>Exame clínico: testes de apreensão, relocation e anterior drawer</li>
          <li>Avaliar sempre a presença de Hill-Sachs associada</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Reparação Artroscópica de Bankart:</span> Standard para lesões sem perda óssea significativa (&lt;20%). Âncoras de sutura no bordo glenoidal (posição 3-6 horas). Mínimo 3 âncoras.</li>
          <li><span className="font-medium text-slate-100">Latarjet (Bristow-Latarjet):</span> Indicado se perda óssea glenoidal &gt;20% (ou &gt;13.5% segundo ISIS). Transferência da coracóide com tendão conjunto para a glenoide anterior. Triplo efeito: aumento ósseo, efeito sling, reparação capsular.</li>
          <li><span className="font-medium text-slate-100">Remplissage:</span> Complemento à reparação de Bankart se Hill-Sachs off-track. Capsulotenodese do infraespinhoso no defeito de Hill-Sachs.</li>
          <li><span className="font-medium text-slate-100">Enxerto Ósseo (Eden-Hybinette/DTA):</span> Alternativa ao Latarjet. Enxerto da crista ilíaca ou aloenxerto de tíbia distal.</li>
        </ul>
      </section>

      <Alert type="info">O conceito de glenoid track é essencial: calcular se o Hill-Sachs é on-track ou off-track para determinar o risco de engaging e a necessidade de remplissage ou Latarjet.</Alert>
      <Alert type="caution">A lesão ALPSA pode ser subdiagnosticada na artroscopia. O labrum parece cicatrizado mas está medializado. Sempre palpar o labrum para verificar a sua posição e estabilidade.</Alert>

      {/* Manual SBOT — Imagens de Referência */}
      <div className="mt-6 pt-6 border-t border-[rgba(212,175,55,0.15)]">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Manual SBOT — Imagens de Referência</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { src: '/images/manual-trauma/page72_img1.png', alt: 'Reparo do lábio glenoidal — técnica de Bankart' },
            { src: '/images/manual-trauma/page74_img1.png', alt: 'Instabilidade glenoumeral — padrões' },
            { src: '/images/manual-trauma/page74_img2.png', alt: 'Instabilidade glenoumeral (2)' },
            { src: '/images/manual-trauma/page74_img3.png', alt: 'Instabilidade glenoumeral (3)' },
            { src: '/images/manual-trauma/page74_img4.png', alt: 'Instabilidade glenoumeral (4)' },
          ].map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]">
              <img src={img.src} alt={img.alt} className="w-full h-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display='none'; }} />
              <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
