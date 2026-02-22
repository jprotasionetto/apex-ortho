import { Alert } from '@/components/ui/Alert.tsx';

export default function HalluxValgusGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Avaliacao Radiografica</h3>
        <p className="text-sm text-slate-300">
          A avaliacao radiografica deve ser feita com radiografias em carga (AP e lateral do pe com apoio). Os angulos principais sao:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Angulo de Hallux Valgus (HVA):</span> entre eixo do 1o MT e falange proximal. Normal &lt;15 graus</li>
          <li><span className="font-medium text-slate-100">Angulo Intermetatarsal (IMA):</span> entre eixos do 1o e 2o MT. Normal &lt;9 graus</li>
          <li><span className="font-medium text-slate-100">DMAA (Distal Metatarsal Articular Angle):</span> angulo da superficie articular distal do 1o MT. Normal &lt;10 graus</li>
          <li>Congruencia articular MTF: avaliar subluxacao dos sesamoides</li>
          <li>Artrose da 1a MTF (classificacao de Coughlin)</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Deformidade Leve (HVA 15-20, IMA &lt;13)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Osteotomia metatarsica distal: Chevron (Austin)</li>
          <li>Cunha de fechamento medial com translacao lateral da cabeca</li>
          <li>Permite correcao de HVA ate 20 graus e IMA ate 13 graus</li>
          <li>Procedimentos complementares: liberacao lateral, plicatura capsular medial</li>
          <li>Fixacao com parafuso ou fio K</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Deformidade Moderada (HVA 20-40, IMA 13-16)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Osteotomia Scarf:</span> osteotomia diafisaria em Z do 1o MT, permite translacao, rotacao e encurtamento</li>
          <li><span className="font-medium text-slate-100">Osteotomia Crescentica proximal:</span> osteotomia proximal curvilinea</li>
          <li><span className="font-medium text-slate-100">Osteotomia de base (opening/closing wedge):</span> cunha proximal</li>
          <li>Liberacao lateral obrigatoria (ligamento metatarso-sesamoide lateral, adutor do halux)</li>
          <li>Pode associar osteotomia de Akin da falange proximal se DMAA aumentado</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Deformidade Severa (HVA &gt;40, IMA &gt;16)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Artrodese de Lapidus:</span> fusao da articulacao TMT do 1o raio</li>
          <li>Indicada quando ha hipermobilidade do 1o raio</li>
          <li>Corrige o IMA diretamente na origem da deformidade</li>
          <li>Tecnica: preparacao articular, fixacao com placa + parafuso de compressao</li>
          <li>Sem carga por 6-8 semanas; consolidacao em 8-12 semanas</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Condicoes Associadas</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Hallux Rigidus:</span> artrose da 1a MTF - avaliar grau para cheilectomia vs artrodese vs artroplastia</li>
          <li><span className="font-medium text-slate-100">Deformidades dos dedos menores:</span> dedos em garra/martelo podem necessitar correcao simultanea</li>
          <li>Metatarsalgia de transferencia: pode ocorrer se 1o MT encurtado excessivamente</li>
          <li>Sesamoidite: avaliar posicao e integridade dos sesamoides</li>
        </ul>
      </section>

      <Alert type="info">A escolha da tecnica deve ser baseada nos angulos radiograficos, presenca de artrose e hipermobilidade do 1o raio.</Alert>
      <Alert type="caution">Encurtamento excessivo do 1o MT leva a metatarsalgia de transferencia. Manter o comprimento relativo do 1o raio.</Alert>
    </div>
  );
}
