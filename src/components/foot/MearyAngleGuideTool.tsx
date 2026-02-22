import { Alert } from '@/components/ui/Alert.tsx';

export default function MearyAngleGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Definicao</h3>
        <p className="text-sm text-slate-300">
          O angulo de Meary (angulo talo-1o metatarsico) e formado pela interseccao dos eixos longitudinais do talo e do 1o metatarso na radiografia lateral do pe em carga. E o principal parametro radiografico para avaliacao do alinhamento sagital do pe.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Medido na incidencia lateral do pe com carga</li>
          <li>Eixo do talo: linha passando pelo centro do talo</li>
          <li>Eixo do 1o MT: linha passando pelo centro da diafise do 1o metatarso</li>
          <li>Angulo formado pela interseccao dessas duas linhas</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Normal</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Angulo de Meary = 0 graus (eixos paralelos/colineares)</li>
          <li>Os eixos do talo e 1o MT formam uma linha reta na lateral em carga</li>
          <li>Indica alinhamento sagital normal do mediopé</li>
          <li>Arco longitudinal medial preservado</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Pes Planus (Pe Plano)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Angulo de Meary convexo para baixo (angulo negativo/plantar)</li>
          <li>O apice do angulo aponta para o chao (convexidade inferior)</li>
          <li>Classificacao de gravidade:</li>
          <li className="ml-4">Leve: 4-15 graus</li>
          <li className="ml-4">Moderado: 15-30 graus</li>
          <li className="ml-4">Severo: &gt;30 graus</li>
          <li>Associado a colapso do arco longitudinal medial</li>
          <li>Causas: disfuncao do tibial posterior, coalizao tarsal, artropatia de Charcot</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Pes Cavus (Pe Cavo)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Angulo de Meary convexo para cima (angulo positivo/dorsal)</li>
          <li>O apice do angulo aponta para cima (convexidade superior)</li>
          <li>Classificacao de gravidade:</li>
          <li className="ml-4">Leve: 5-15 graus</li>
          <li className="ml-4">Moderado: 15-25 graus</li>
          <li className="ml-4">Severo: &gt;25 graus</li>
          <li>Arco longitudinal excessivamente elevado</li>
          <li>Causas: Charcot-Marie-Tooth, sequela de AVC, pe cavo idiopatico, poliomielite</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Significado Clinico</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Avaliacao da gravidade do pe plano adquirido do adulto (disfuncao do tibial posterior)</li>
          <li>Planejamento cirurgico: angulos &gt;15 graus podem indicar necessidade de artrodese vs osteotomia isolada</li>
          <li>Monitoramento da progressao da deformidade</li>
          <li>Avaliacao pos-operatoria de correcao do pe plano</li>
          <li>Complementar com outros parametros: cobertura talonavicular (AP), angulo de pitch do calcaneo, angulo talocalcaneo</li>
          <li>Sempre medir em radiografia com carga - sem carga subestima deformidade</li>
        </ul>
      </section>

      <Alert type="info">O angulo de Meary e o parametro mais confiavel para avaliacao do alinhamento sagital do pe. Deve sempre ser medido em radiografia lateral com carga bilateral para comparacao.</Alert>
      <Alert type="caution">A medicao sem carga pode subestimar significativamente o grau de deformidade. Pe plano flexivel pode parecer normal sem carga.</Alert>
    </div>
  );
}
