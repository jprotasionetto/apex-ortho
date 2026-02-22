import { Alert } from '@/components/ui/Alert.tsx';

export default function MetastaticBoneGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Sitios Primarios Mais Comuns</h3>
        <p className="text-sm text-slate-300">
          Metastases osseas sao as neoplasias osseas mais frequentes. Os cinco sitios primarios mais comuns sao lembrados pelo mnemonico: BPL-RT (Breast, Prostate, Lung, Renal, Thyroid).
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Mama:</span> Lesoes liticas ou mistas; mais comum em mulheres; sobrevida media longa; responde a hormonioterapia</li>
          <li><span className="font-medium text-slate-100">Prostata:</span> Lesoes blasticas (escleróticas); PSA elevado; sobrevida relativamente longa; responde a hormonioterapia</li>
          <li><span className="font-medium text-slate-100">Pulmao:</span> Lesoes liticas; pior prognostico entre os cinco; sobrevida media curta (6-12 meses)</li>
          <li><span className="font-medium text-slate-100">Rim:</span> Lesoes liticas expansivas e muito vascularizadas; metastase solitaria frequente; nefrectomia + metastasectomia pode ser curativa. Embolizacao pre-operatoria recomendada.</li>
          <li><span className="font-medium text-slate-100">Tireoide:</span> Lesoes liticas e vascularizadas; prognostico variavel conforme histologia; metastase solitaria pode ser ressecada</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Apresentacao Clinica</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Fratura patologica:</span> 8-30% dos pacientes com metastases osseas. Femur proximal e o local mais comum. Consolidacao improvavel com tratamento conservador.</li>
          <li><span className="font-medium text-slate-100">Fratura iminente:</span> Avaliar pelo Score de Mirels. Dor progressiva ao apoio e sinal de alarme. Fixacao profilatica previne morbidade significativa.</li>
          <li><span className="font-medium text-slate-100">Compressao medular:</span> Emergencia oncologica. Dor lombar progressiva, fraqueza em membros inferiores, disfuncao esfincteriana. RM urgente. Dexametasona + descompressao/radioterapia em &lt;48h.</li>
          <li><span className="font-medium text-slate-100">Hipercalcemia:</span> Confusao, nausea, poliuria, constipacao. Hidratacao + bifosfonatos IV.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Investigacao por Imagem</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Cintilografia ossea de corpo inteiro:</span> alta sensibilidade para lesoes blasticas; pode ser falso-negativo em lesoes puramente liticas (mieloma, renal)</li>
          <li><span className="font-medium text-slate-100">PET-CT (18F-FDG):</span> melhor para lesoes liticas e avaliacao de resposta terapeutica; maior sensibilidade global</li>
          <li>RM de corpo inteiro: alternativa crescente para estadiamento</li>
          <li>TC de torax, abdomen e pelve: estadiamento do primario</li>
          <li>Laboratorio: hemograma, calcio, fosfatase alcalina, PSA, eletroforese de proteinas, funcao renal e hepatica</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Score de Mirels:</span> ≤7 pontos: radioterapia + observacao; 8 pontos: decisao individualizada; ≥9 pontos: fixacao profilatica</li>
          <li><span className="font-medium text-slate-100">Fixacao cirurgica:</span> Haste intramedular (diafisaria), endoprotese (periarticular com destruicao extensa), placa + cimento (localizacoes especificas)</li>
          <li><span className="font-medium text-slate-100">Radioterapia:</span> Paliativa (30Gy/10 fracoes ou 8Gy dose unica); apos fixacao cirurgica; controle da dor em 70-80%</li>
          <li><span className="font-medium text-slate-100">Tratamento farmacologico:</span> Bifosfonatos (acido zoledronico 4mg IV mensal) ou denosumab (120mg SC mensal) para reduzir eventos esqueleticos</li>
          <li><span className="font-medium text-slate-100">Principio de fixacao:</span> Proteger todo o osso (haste longa); assumir que a lesao nao vai consolidar; fixacao que permita carga imediata</li>
        </ul>
      </section>

      <Alert type="info">Principio fundamental: a fixacao deve proteger todo o osso e permitir carga imediata. O paciente oncologico pode nao tolerar um segundo procedimento. Fazer a cirurgia definitiva na primeira intervenção.</Alert>
      <Alert type="caution">Nunca fixar uma lesao ossea solitaria sem biopsia (exceto se diagnostico primario ja confirmado). Uma lesao solitaria pode ser tumor primario (sarcoma) e a fixacao inadequada compromete o tratamento definitivo.</Alert>
    </div>
  );
}
