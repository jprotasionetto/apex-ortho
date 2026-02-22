import { Alert } from '@/components/ui/Alert.tsx';

export default function HillSachsGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Definição</h3>
        <p className="text-sm text-slate-300">
          A lesão de Hill-Sachs é uma fratura por compressão/impactação da face posterosuperior da cabeça umeral,
          resultante do impacto contra o bordo anteroinferior da glenoide durante a luxação anterior do ombro.
        </p>
        <p className="text-sm text-slate-300">
          Presente em 65-70% das luxações anteriores primárias e em até 93% das luxações recorrentes.
          É uma lesão mirror da lesão de Bankart.
        </p>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Avaliação: Engaging vs Non-Engaging</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Non-Engaging (On-Track):</span> O defeito de Hill-Sachs não encaixa no bordo glenoidal durante o arco de movimento funcional. O ombro é estável com reparação de Bankart isolada.</li>
          <li><span className="font-medium text-slate-100">Engaging (Off-Track):</span> O defeito de Hill-Sachs encaixa no bordo glenoidal anterior em abdução e rotação externa. Causa instabilidade recorrente mesmo após reparação de Bankart. Necessita tratamento adicional.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Conceito de Glenoid Track</h3>
        <p className="text-sm text-slate-300 mb-3">
          O conceito de glenoid track (Yamamoto/Di Giacomo) é o método atual para determinar se um Hill-Sachs é clinicamente significativo.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Glenoid Track (GT):</span> GT = 0.83 x D (diâmetro glenoidal) - perda óssea glenoidal (mm)</li>
          <li><span className="font-medium text-slate-100">Hill-Sachs Interval (HSI):</span> Largura do defeito de Hill-Sachs medida em TC axial</li>
          <li><span className="font-medium text-slate-100">On-Track:</span> HSI &lt; GT - o defeito permanece dentro do track. Bankart isolado é suficiente.</li>
          <li><span className="font-medium text-slate-100">Off-Track:</span> HSI ≥ GT - o defeito excede o track. Necessita remplissage ou Latarjet.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Lesão Pequena, On-Track:</span> Reparação de Bankart artroscópica isolada. Não necessita tratamento direto do Hill-Sachs.</li>
          <li><span className="font-medium text-slate-100">Lesão Moderada, Off-Track:</span> Reparação de Bankart + Remplissage (capsulotenodese do infraespinhoso no defeito). Converte off-track em on-track.</li>
          <li><span className="font-medium text-slate-100">Lesão Grande com Perda Óssea Glenoidal:</span> Latarjet (aumenta o glenoid track). Pode combinar com remplissage se defeito muito grande.</li>
          <li><span className="font-medium text-slate-100">Lesão Muito Grande (&gt;40% da cabeça):</span> Enxerto ósseo do Hill-Sachs (aloenxerto ou autoenxerto da crista ilíaca). Considerar artroplastia parcial de superfície em casos selecionados.</li>
        </ul>
      </section>

      <Alert type="info">O remplissage reduz a rotação externa em aproximadamente 10-15 graus. Considerar o impacto funcional em atletas de lançamento antes de indicar.</Alert>
      <Alert type="caution">A radiografia AP em rotação interna (Stryker notch view) pode subestimar o tamanho da lesão. A TC com reconstrução 3D é o gold standard para medição precisa.</Alert>
    </div>
  );
}
