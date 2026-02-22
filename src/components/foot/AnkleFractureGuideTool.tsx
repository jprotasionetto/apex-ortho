import { Alert } from '@/components/ui/Alert.tsx';

export default function AnkleFractureGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Avaliacao</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Regras de Ottawa:</span> radiografia indicada se dor maleolar + incapacidade de dar 4 passos OU dor a palpacao dos 6cm distais da fibula/tibia posterior OU dor na base do 5o MT/navicular</li>
          <li><span className="font-medium text-slate-100">Classificacao de Weber:</span> baseada no nivel da fratura fibular em relacao a sindesmose</li>
          <li>Weber A: abaixo da sindesmose (infrasindesmótico) - estavel</li>
          <li>Weber B: ao nivel da sindesmose (transsindesmótico) - potencialmente instavel</li>
          <li>Weber C: acima da sindesmose (suprasindesmótico) - instavel</li>
          <li><span className="font-medium text-slate-100">Stress views:</span> radiografia com estresse em rotacao externa para avaliar integridade da sindesmose e ligamento deltoide</li>
          <li>TC para avaliar fragmentos posteriores (Volkmann) e incongruencia articular</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Padroes Estaveis</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Weber A isolada:</span> fratura por avulsao infrasindesmótica. Tratamento conservador com bota e carga conforme tolerancia.</li>
          <li><span className="font-medium text-slate-100">Maleolo lateral isolado nao deslocado:</span> sem evidencia de lesao medial (sem dor a palpacao do deltoide, sem alargamento do espaco claro medial). Bota funcional com carga precoce.</li>
          <li>Controle radiografico em 1-2 semanas para confirmar estabilidade</li>
          <li>Consolidacao em 6-8 semanas</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Padroes Instaveis</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Bimaleolar:</span> fratura do maleolo lateral + medial. Indicacao cirurgica.</li>
          <li><span className="font-medium text-slate-100">Trimaleolar:</span> fratura bimaleolar + maleolo posterior (Volkmann). Fixar fragmento posterior se &gt;25% da superficie articular ou subluxacao persistente.</li>
          <li><span className="font-medium text-slate-100">Equivalente bimaleolar:</span> fratura lateral + lesao do ligamento deltoide (alargamento do espaco claro medial &gt;4mm)</li>
          <li><span className="font-medium text-slate-100">Lesao da sindesmose:</span> diastase tibiofibular. Weber B com stress test positivo ou Weber C. Necessita fixacao sindesmótica.</li>
          <li>Fraturas-luxacoes: reducao de urgencia antes da fixacao definitiva</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Principios de Fixacao</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Fibula:</span> restaurar comprimento, rotacao e translacao. Placa terco-tubular lateral ou posterior anti-glide. Placa bloqueada se osso osteoporotico.</li>
          <li><span className="font-medium text-slate-100">Maleolo medial:</span> parafusos de compressao parcialmente rosqueados (2 parafusos) ou banda de tensao com fios K.</li>
          <li><span className="font-medium text-slate-100">Maleolo posterior:</span> fixacao por via posterior (placa) ou anterior (parafusos AP) se &gt;25% da superficie articular ou subluxacao.</li>
          <li><span className="font-medium text-slate-100">Sindesmose:</span> parafuso sindesmótico tricortical ou suture-button (TightRope). Posicionar com pe em dorsiflexao maxima.</li>
          <li>Reducao anatomica da superficie articular e o fator mais importante para prognostico</li>
        </ul>
      </section>

      <Alert type="info">A radiografia com estresse em rotacao externa e fundamental para Weber B com suspeita de lesao do deltoide. 1mm de desvio lateral do talo reduz area de contato em 42%.</Alert>
      <Alert type="caution">Fraturas de tornozelo em diabeticos e pacientes obesos tem taxa de complicacoes significativamente maior. Considerar fixacao mais robusta e imobilizacao prolongada.</Alert>
    </div>
  );
}
