import { Alert } from '@/components/ui/Alert.tsx';

export default function CompartmentSyndromeGuideTool() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Definição e Fisiopatologia</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">A síndrome compartimental aguda é uma emergência ortopédica causada pelo aumento da pressão dentro de um compartimento osteofascial fechado, resultando em comprometimento da perfusão tecidual.</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Fisiopatologia:</strong> Edema/hemorragia no compartimento → aumento de pressão → compressão venosa → aumento de pressão capilar → mais edema (ciclo vicioso)</li>
            <li><strong className="text-slate-100">Pressão crítica:</strong> Quando a pressão compartimental se aproxima da pressão diastólica, a perfusão muscular cessa</li>
            <li><strong className="text-slate-100">Tempo:</strong> Lesão muscular irreversível após 4-6 horas de isquemia. Lesão nervosa após 2-4 horas</li>
            <li><strong className="text-slate-100">Consequência tardia:</strong> Contratura isquêmica de Volkmann (membro superior) ou deformidade em garra (membro inferior)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Sinais Clínicos - Os 6 Ps</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">Os sinais clínicos clássicos (6 Ps) em ordem de aparecimento:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-100">Pain (Dor):</strong> Dor desproporcional à lesão, não responsiva a analgesia convencional. DOR AO ESTIRAMENTO PASSIVO dos músculos do compartimento = sinal mais precoce e sensível.</li>
            <li><strong className="text-slate-100">Pressure (Pressão):</strong> Compartimento tenso e firme à palpação. Edema importante.</li>
            <li><strong className="text-slate-100">Paresthesia (Parestesia):</strong> Alteração da sensibilidade no território dos nervos que atravessam o compartimento.</li>
            <li><strong className="text-slate-100">Paralysis (Paralisia):</strong> Perda da função motora. Sinal tardio - indica lesão já estabelecida.</li>
            <li><strong className="text-slate-100">Pallor (Palidez):</strong> Sinal tardio e inconsistente na síndrome compartimental.</li>
            <li><strong className="text-slate-100">Pulselessness (Ausência de pulso):</strong> Sinal MUITO tardio. A pressão compartimental raramente excede a pressão arterial sistólica. Presença de pulsos NÃO exclui síndrome compartimental.</li>
          </ol>
          <p className="text-sm text-red-400 mt-2 font-semibold">ATENÇÃO: Esperar por todos os 6 Ps resulta em diagnóstico tardio e sequelas irreversíveis. Os 2 primeiros Ps (Pain + Pressure) são suficientes para indicar fasciotomia.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Diagnóstico</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">O diagnóstico é primariamente clínico, mas a medida de pressão compartimental é útil em pacientes incapazes de colaborar:</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-100">Diagnóstico clínico:</strong> Dor desproporcional + dor ao estiramento passivo + compartimento tenso = fasciotomia</li>
            <li><strong className="text-slate-100">Medida de pressão (delta pressure):</strong> ΔP = Pressão Diastólica - Pressão Compartimental</li>
            <li><strong className="text-slate-100">Critério de Stryker/Whitesides:</strong> ΔP ≤ 30 mmHg = indicação de fasciotomia</li>
            <li><strong className="text-slate-100">Pressão absoluta:</strong> {'>'} 30 mmHg é preocupante, mas o delta pressure é mais confiável</li>
            <li><strong className="text-slate-100">Indicações de medida objetiva:</strong> Pacientes sedados/intubados, TCE com rebaixamento, crianças não cooperativas, bloqueio nervoso regional</li>
          </ul>
          <p className="text-sm text-slate-400 mt-2">A medida deve ser feita no ponto de maior tensão (geralmente próximo ao foco de fratura) e em TODOS os compartimentos em risco.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Tratamento - Fasciotomia de Emergência</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300 font-semibold">A fasciotomia é uma EMERGÊNCIA CIRÚRGICA. Tempo é músculo.</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-100">Medidas imediatas (pré-cirúrgicas):</strong> Remover TODAS as bandagens/talas circunferenciais, membro ao nível do coração (não elevar excessivamente), evitar hipotensão</li>
            <li><strong className="text-slate-100">Perna (4 compartimentos):</strong> Dupla incisão (anterolateral e posteromedial). Abrir TODOS os 4 compartimentos: anterior, lateral, posterior superficial, posterior profundo</li>
            <li><strong className="text-slate-100">Antebraço (3 compartimentos):</strong> Incisão volar curvilínea do cotovelo ao punho. Descompressão do túnel do carpo associada</li>
            <li><strong className="text-slate-100">Coxa (3 compartimentos):</strong> Incisão lateral. Anterior, posterior e medial</li>
            <li><strong className="text-slate-100">Mão (10 compartimentos):</strong> Incisões dorsais (2) entre 2º-3º e 4º-5º metacarpos + incisão tenar + incisão hipotenar</li>
            <li><strong className="text-slate-100">Pé (9 compartimentos):</strong> Dupla incisão dorsal + incisão medial</li>
          </ul>
          <p className="text-sm text-slate-400 mt-2">Deixar as feridas ABERTAS. Fechamento secundário ou enxerto de pele em 48-72 horas quando edema regredir. Não fechar sob tensão.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Localizações Mais Comuns</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Perna:</strong> Localização MAIS COMUM. Fraturas da tíbia, especialmente diafisárias. O compartimento anterior é o mais frequentemente afetado.</li>
            <li><strong className="text-slate-100">Antebraço:</strong> Fraturas de ambos os ossos, fraturas supracondilares do úmero em crianças (Volkmann)</li>
            <li><strong className="text-slate-100">Coxa:</strong> Menos comum, mas possível após fraturas femorais e lesões vasculares</li>
            <li><strong className="text-slate-100">Pé:</strong> Lesões por esmagamento (Lisfranc), fraturas do calcâneo</li>
            <li><strong className="text-slate-100">Mão:</strong> Lesões por esmagamento, queimaduras, mordeduras de cobra</li>
            <li><strong className="text-slate-100">Glúteo:</strong> Pacientes em coma prolongado (overdose, pós-operatório prolongado)</li>
          </ul>
        </div>
      </section>

      <Alert type="info">A síndrome compartimental é um diagnóstico CLÍNICO. Na dúvida, fazer fasciotomia. Uma fasciotomia desnecessária tem morbidade infinitamente menor que uma síndrome compartimental não tratada (contratura de Volkmann, amputação, rabdomiólise, insuficiência renal, morte).</Alert>
    </div>
  );
}
