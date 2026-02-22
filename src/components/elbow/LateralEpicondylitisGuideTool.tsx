import { Alert } from '@/components/ui/Alert.tsx';

export default function LateralEpicondylitisGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Patoanatomia</h3>
        <p className="text-sm text-slate-300">
          A epicondilite lateral (cotovelo de tenista) é uma tendinopatia degenerativa da origem do extensor radial curto
          do carpo (ECRB) no epicôndilo lateral. O termo mais correto é tendinose angiofibroblástica, pois o processo
          é degenerativo e não inflamatório.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300 mt-2">
          <li>Tendão mais afetado: ECRB (extensor carpi radialis brevis)</li>
          <li>Histologia: degeneração angiofibroblástica (não inflamação)</li>
          <li>Hiperplasia vascular e fibrose sem células inflamatórias</li>
          <li>Incidência: 1-3% da população, pico 35-50 anos</li>
          <li>Lado dominante mais afetado</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Diagnóstico</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Teste de Cozen:</span> Dor no epicôndilo lateral com extensão resistida do punho com cotovelo estendido e antebraço pronado. Teste mais sensível.</li>
          <li><span className="font-medium text-slate-100">Teste de Mill:</span> Dor com extensão passiva do cotovelo com punho e dedos em flexão. Coloca o ECRB em alongamento máximo.</li>
          <li><span className="font-medium text-slate-100">Teste da cadeira:</span> Dor ao levantar uma cadeira com o membro superior em extensão e pronação.</li>
          <li><span className="font-medium text-slate-100">Ecografia:</span> Espessamento tendinoso, hipoecogenicidade, neovascularização ao Doppler. Útil para guiar infiltrações.</li>
          <li><span className="font-medium text-slate-100">RM:</span> Sinal aumentado em T2 na origem do ECRB. Reservada para casos atípicos ou pré-operatório.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Conservador</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Exercícios excêntricos:</span> Programa de Tyler (FlexBar). Evidência nível I. Extensão excêntrica do punho com carga progressiva.</li>
          <li><span className="font-medium text-slate-100">Fisioterapia:</span> Alongamentos, fortalecimento progressivo, mobilização articular</li>
          <li><span className="font-medium text-slate-100">Banda epicondiliana (counterforce brace):</span> Reduz a carga na origem do ECRB</li>
          <li><span className="font-medium text-slate-100">Anti-inflamatórios:</span> Alívio sintomático a curto prazo. Sem efeito na história natural.</li>
          <li><span className="font-medium text-slate-100">Infiltração com corticoide:</span> Alívio a curto prazo (6 semanas) mas piores resultados a longo prazo. Usar criteriosamente.</li>
          <li><span className="font-medium text-slate-100">PRP (Plasma Rico em Plaquetas):</span> Resultados promissores. Superior ao corticoide a 6-12 meses. Leucocyte-rich PRP pode ser superior.</li>
          <li><span className="font-medium text-slate-100">Ondas de choque:</span> Alguma evidência de benefício. Opção em casos refratários.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Opções Cirúrgicas</h3>
        <p className="text-sm text-slate-300 mb-2">Indicada após falha do tratamento conservador por 6-12 meses (5-10% dos casos).</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Desbridamento artroscópico:</span> Remoção do tecido degenerativo do ECRB. Permite inspeção articular (30-40% têm patologia intra-articular associada).</li>
          <li><span className="font-medium text-slate-100">Cirurgia aberta (Nirschl):</span> Excisão do tecido angiofibroblástico + decorticação do epicôndilo lateral. Taxa de sucesso 85-90%.</li>
          <li><span className="font-medium text-slate-100">Tenotomia percutânea:</span> Minimamente invasiva. Pode ser guiada por ecografia.</li>
        </ul>
      </section>

      <Alert type="info">90% dos doentes melhoram com tratamento conservador em 12 meses. Os exercícios excêntricos com FlexBar (protocolo de Tyler) têm a melhor evidência como tratamento de primeira linha.</Alert>
      <Alert type="caution">A infiltração com corticosteroide proporciona alívio a curto prazo mas está associada a piores resultados a 6-12 meses comparada com wait-and-see ou fisioterapia. Usar com critério.</Alert>
    </div>
  );
}
