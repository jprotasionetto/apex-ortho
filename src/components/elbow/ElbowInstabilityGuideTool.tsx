import { Alert } from '@/components/ui/Alert.tsx';

export default function ElbowInstabilityGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">PLRI – Instabilidade Rotatória Posterolateral</h3>
        <p className="text-sm text-slate-300">
          A PLRI é a forma mais comum de instabilidade recorrente do cotovelo. Resulta da insuficiência do complexo
          ligamentar lateral, especificamente do LUCL (ligamento colateral lateral ulnar).
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 mt-2">
          <li>Causa mais frequente: sequela de luxação do cotovelo ou iatrogénica (cirurgia lateral)</li>
          <li>Mecanismo: supinação do antebraço + valgo + carga axial</li>
          <li>Teste diagnóstico: pivot shift test do cotovelo (lateral pivot shift de O'Driscoll)</li>
          <li>Teste de gaveta posterolateral (tabletop relocation test)</li>
          <li>RM com stress ou artro-RM para confirmar lesão do LUCL</li>
        </ul>
        <p className="text-sm text-slate-300 mt-2">
          <span className="font-medium text-slate-100">Tratamento:</span> Reconstrução do LUCL com enxerto tendinoso (gracilis ou palmar longo).
          Técnica de docking ou interferência no epicôndilo lateral e túnel na ulna proximal (crista do supinador).
        </p>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Instabilidade em Valgo (LCM/UCL)</h3>
        <p className="text-sm text-slate-300">
          Insuficiência do ligamento colateral medial (LCM), especificamente a banda anterior do UCL.
          Tipicamente em atletas de lançamento (basebol, javelin, cricket).
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 mt-2">
          <li>Dor medial do cotovelo com lançamento (fase de aceleração tardia)</li>
          <li>Teste de stress em valgo a 30° de flexão (milking maneuver, moving valgus stress test)</li>
          <li>RM ou artro-RM para avaliar integridade do UCL</li>
          <li>Possível neuropatia ulnar associada</li>
        </ul>
        <p className="text-sm text-slate-300 mt-2">
          <span className="font-medium text-slate-100">Tratamento:</span> Conservador inicialmente (repouso, fisioterapia, modificação da técnica).
          Reconstrução do UCL (técnica de Tommy John - Jobe modificada) se falha conservadora em atletas.
          Reparação primária com internal brace (InternalBrace) como alternativa em lesões agudas.
        </p>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Instabilidade Rotatória Varo-Posteromedial</h3>
        <p className="text-sm text-slate-300">
          Padrão de instabilidade resultante da combinação de fratura da faceta anteromedial da coronóide
          com lesão do LCL. Descrita por O'Driscoll.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 mt-2">
          <li>Mecanismo: stress em varo posteromedial (queda com cotovelo em extensão e pronação)</li>
          <li>Lesão crítica: fratura da faceta anteromedial da coronóide (subtipos de O'Driscoll)</li>
          <li>Associação com insuficiência do LCL (nem sempre presente inicialmente)</li>
          <li>Sem luxação franca típica (subluxação transitória)</li>
          <li>TC com reconstrução 3D essencial para avaliar a faceta anteromedial</li>
        </ul>
        <p className="text-sm text-slate-300 mt-2">
          <span className="font-medium text-slate-100">Tratamento:</span> Fixação da faceta anteromedial da coronóide (placa buttress por abordagem medial)
          + reparação do LCL se insuficiente. A coronóide anteromedial é o estabilizador primário contra o stress em varo.
        </p>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Geral</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Reparação ligamentar:</span> Para lesões agudas (&lt;3 semanas). Sutura direta com âncoras + possível internal brace.</li>
          <li><span className="font-medium text-slate-100">Reconstrução ligamentar:</span> Para lesões crónicas ou reparações falhadas. Enxerto autólogo (gracilis, palmar longo) ou aloenxerto.</li>
          <li><span className="font-medium text-slate-100">Fixação óssea:</span> Essencial quando há fratura da coronóide associada.</li>
          <li><span className="font-medium text-slate-100">Reabilitação:</span> Tala articulada por 6 semanas, mobilização ativa precoce dentro do arco seguro, evitar stress no plano da instabilidade.</li>
        </ul>
      </section>

      <Alert type="info">O pivot shift test do cotovelo é o teste mais específico para PLRI mas difícil de realizar no doente acordado (defesa muscular). Realizar sob anestesia geral antes da cirurgia para confirmação.</Alert>
      <Alert type="caution">Na instabilidade varo-posteromedial, a fratura da faceta anteromedial da coronóide pode ser subtil na radiografia. Pedir sempre TC se suspeita clínica, especialmente após subluxação transitória do cotovelo.</Alert>
    </div>
  );
}
