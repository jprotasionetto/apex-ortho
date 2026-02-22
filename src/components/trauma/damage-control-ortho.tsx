import { Alert } from '@/components/ui/Alert.tsx';

export default function DamageControlOrthoTool() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Princípios</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">O Damage Control Orthopedics (DCO) é uma estratégia de tratamento que prioriza a ressuscitação fisiológica do paciente politraumatizado antes da fixação definitiva das fraturas.</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Conceito:</strong> Estabilização temporária rápida das fraturas para permitir ressuscitação fisiológica</li>
            <li><strong className="text-slate-100">Objetivo:</strong> Evitar o "second hit" cirúrgico que pode precipitar falência orgânica</li>
            <li><strong className="text-slate-100">Filosofia:</strong> A vida antes do membro, a função antes da anatomia na fase aguda</li>
            <li><strong className="text-slate-100">Tríade letal:</strong> Hipotermia + Acidose + Coagulopatia = indicação absoluta de DCO</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Indicações</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">O DCO é indicado nas seguintes situações:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">ISS {'>'} 20</strong> com fratura de osso longo + lesão torácica</li>
            <li><strong className="text-slate-100">Politraumatizado</strong> com TCE associado (Glasgow {'<'} 8)</li>
            <li><strong className="text-slate-100">Hipotermia</strong> - Temperatura central {'<'} 35°C</li>
            <li><strong className="text-slate-100">Coagulopatia</strong> - INR {'>'} 1.5, plaquetas {'<'} 90.000, necessidade {'>'} 10U de concentrado de hemácias</li>
            <li><strong className="text-slate-100">Acidose</strong> - pH {'<'} 7.24, Lactato {'>'} 4 mmol/L, Base excess {'<'} -8</li>
            <li><strong className="text-slate-100">Instabilidade hemodinâmica</strong> persistente apesar de ressuscitação</li>
            <li><strong className="text-slate-100">Lesão vascular associada</strong> com tempo cirúrgico estimado {'>'} 6 horas para fixação definitiva</li>
            <li><strong className="text-slate-100">Fraturas bilaterais de fêmur</strong> em paciente borderline</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Técnica - Estabilização Temporária</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">Procedimentos rápidos na fase de damage control:</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-100">Fixador externo:</strong> Estabilização rápida de fraturas de fêmur, tíbia, pelve, úmero. Tempo: 20-30 min por segmento.</li>
            <li><strong className="text-slate-100">Clamp pélvico / Fixador anterior:</strong> Compressão circunferencial da pelve para controle hemorrágico.</li>
            <li><strong className="text-slate-100">Tração esquelética:</strong> Alternativa temporária para fraturas do fêmur (pino tibial proximal).</li>
            <li><strong className="text-slate-100">Desbridamento de fraturas expostas:</strong> Lavagem copiosa, remoção de contaminação grosseira. Sem reconstrução definitiva.</li>
            <li><strong className="text-slate-100">Fasciotomia:</strong> Se síndrome compartimental ou iminência.</li>
            <li><strong className="text-slate-100">Shunt vascular:</strong> Temporário se lesão vascular e paciente instável para reparo definitivo.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Conversão para Fixação Definitiva</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">A conversão para fixação definitiva deve ocorrer quando o paciente estiver fisiologicamente estável:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Timing ideal:</strong> 5-10 dias após o trauma (janela de oportunidade)</li>
            <li><strong className="text-slate-100">Critérios para conversão:</strong></li>
          </ul>
          <div className="ml-4 mt-2 space-y-1">
            <p className="text-sm text-slate-300">- Temperatura {'>'} 36°C</p>
            <p className="text-sm text-slate-300">- pH {'>'} 7.35, Lactato normalizado</p>
            <p className="text-sm text-slate-300">- Coagulação normalizada (INR {'<'} 1.3)</p>
            <p className="text-sm text-slate-300">- Plaquetas {'>'} 100.000</p>
            <p className="text-sm text-slate-300">- Não necessitar de vasopressores</p>
            <p className="text-sm text-slate-300">- IL-6 {'<'} 500 pg/mL (se disponível)</p>
            <p className="text-sm text-slate-300">- Sem sinais de SIRS ativa</p>
          </div>
          <p className="text-sm text-slate-400 mt-3">Evitar conversão entre dias 2-4 (fase pró-inflamatória máxima) e após 2-3 semanas (risco de infecção no trajeto dos pinos).</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Classificação do Paciente</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-100">Estável:</strong> Fixação definitiva precoce (Early Total Care - ETC). Haste intramedular, RAFI.</li>
            <li><strong className="text-slate-100">Borderline:</strong> Avaliação caso a caso. Pode iniciar com ETC se rápido, ou DCO se qualquer deterioração.</li>
            <li><strong className="text-slate-100">Instável:</strong> DCO obrigatório. Fixação externa temporária. Conversão quando estável.</li>
            <li><strong className="text-slate-100">In extremis:</strong> DCO mínimo. Apenas procedimentos para salvar a vida. Considerar amputação se membro é fonte de instabilidade.</li>
          </ul>
        </div>
      </section>

      <Alert type="info">A decisão entre ETC (Early Total Care) e DCO deve ser tomada na sala de emergência. Pacientes borderline requerem reavaliação contínua. Na dúvida, DCO é sempre a opção mais segura - é melhor converter tardiamente do que operar definitivamente um paciente instável.</Alert>
    </div>
  );
}
