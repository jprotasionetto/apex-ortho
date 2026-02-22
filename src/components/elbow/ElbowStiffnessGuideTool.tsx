import { Alert } from '@/components/ui/Alert.tsx';

export default function ElbowStiffnessGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Definição</h3>
        <p className="text-sm text-slate-300">
          A rigidez do cotovelo é definida como perda de amplitude de movimento funcional: flexão inferior a 130°
          ou perda de extensão superior a 30°. O arco funcional do cotovelo é 30-130° de flexão e 50° de
          prono-supinação em cada direção (Morrey, 1981).
        </p>
        <p className="text-sm text-slate-300">
          O cotovelo é particularmente suscetível a rigidez pós-traumática devido à congruência articular elevada,
          a cápsula articular fina que fibrose facilmente e a tendência para ossificação heterotópica.
        </p>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Etiologia</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Extrínseca (extra-articular):</span> Contractura capsular, aderências dos tecidos moles, ossificação heterotópica, fibrose muscular. Superfícies articulares intactas. Melhor prognóstico.</li>
          <li><span className="font-medium text-slate-100">Intrínseca (intra-articular):</span> Incongruência articular, osteófitos intra-articulares, corpos livres, artrofibrose, artrose, má consolidação. Prognóstico mais reservado.</li>
          <li><span className="font-medium text-slate-100">Mista:</span> Combinação de fatores extrínsecos e intrínsecos. Mais frequente após trauma complexo.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Não Operatório</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Talas dinâmicas/estáticas progressivas:</span> Eficazes nos primeiros 6 meses. Turnbuckle splint ou JAS (Joint Active System). Princípio de stress-relaxation.</li>
          <li><span className="font-medium text-slate-100">Fisioterapia:</span> Mobilização ativa e ativa-assistida. Evitar alongamento passivo forçado (risco de miosite ossificante).</li>
          <li><span className="font-medium text-slate-100">Indometacina:</span> Profilaxia de ossificação heterotópica (75mg/dia por 6 semanas pós-trauma). Alternativa: radioterapia de dose única.</li>
          <li><span className="font-medium text-slate-100">Manipulação sob anestesia:</span> Papel limitado. Risco de fratura e agravamento da rigidez.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Cirúrgico</h3>
        <p className="text-sm text-slate-300 mb-2">Indicado após falha do tratamento conservador por pelo menos 6 meses (idealmente 6-12 meses pós-trauma).</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Artroscópica (capsular release):</span> Indicada para contractura capsular extrínseca. Libertação capsular anterior e posterior. Remoção de osteófitos e corpos livres. Risco: nervo radial (anterior) e nervo ulnar (medial).</li>
          <li><span className="font-medium text-slate-100">Aberta (column procedure):</span> Para contracturas severas ou com componente intrínseco significativo. Abordagem medial e/ou lateral. Transposição do nervo ulnar frequentemente necessária.</li>
          <li><span className="font-medium text-slate-100">Excisão de ossificação heterotópica:</span> Aguardar maturação (6-12 meses, confirmada por TC ou cintigrafia). Profilaxia pós-operatória obrigatória (indometacina ou radioterapia).</li>
        </ul>
      </section>

      <Alert type="info">O timing é crucial: iniciar talas dinâmicas precocemente (3-6 semanas pós-trauma) para prevenir rigidez. Aguardar pelo menos 6 meses antes de considerar libertação cirúrgica para permitir maturação dos tecidos.</Alert>
      <Alert type="caution">Nunca forçar a extensão passiva do cotovelo. O alongamento passivo forçado pode precipitar miosite ossificante e agravar a rigidez. Preferir talas estáticas progressivas com princípio de stress-relaxation.</Alert>
    </div>
  );
}
