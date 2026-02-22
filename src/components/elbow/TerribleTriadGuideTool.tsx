import { Alert } from '@/components/ui/Alert.tsx';

export default function TerribleTriadGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Definição</h3>
        <p className="text-sm text-slate-300">
          A tríade terrível do cotovelo é a associação de luxação do cotovelo com fratura da cabeça do rádio e fratura
          do processo coronóide. Esta combinação resulta em instabilidade severa do cotovelo e é uma das lesões mais
          desafiantes em traumatologia do membro superior.
        </p>
        <p className="text-sm text-slate-300">
          O mecanismo é tipicamente uma queda sobre a mão com o cotovelo em extensão e o antebraço em supinação,
          resultando numa luxação posterolateral do cotovelo.
        </p>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Abordagem Cirúrgica Sequencial</h3>
        <p className="text-sm text-slate-300 mb-3">A reparação segue uma sequência inside-out (de profundo para superficial):</p>
        <ol className="list-decimal list-inside space-y-3 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">1. Coronóide (primeiro):</span> Fixação com âncoras de sutura, parafusos ou placa buttress conforme tamanho do fragmento. Mesmo fraturas tipo I de Regan-Morrey devem ser fixadas no contexto de tríade terrível. Abordagem pelo intervalo da fratura da cabeça do rádio ou abordagem medial.</li>
          <li><span className="font-medium text-slate-100">2. Cabeça do Rádio (segundo):</span> RAFI com mini-parafusos/placa se reconstruível (Mason II-III). Prótese metálica se não reconstruível. Nunca excisão simples na tríade terrível (perde estabilizador lateral).</li>
          <li><span className="font-medium text-slate-100">3. LCL - Ligamento Colateral Lateral (terceiro):</span> Reparação do complexo ligamentar lateral (LUCL) com âncoras de sutura ao epicôndilo lateral. Etapa essencial para restaurar a estabilidade rotatória.</li>
          <li><span className="font-medium text-slate-100">4. LCM - Ligamento Colateral Medial (se necessário):</span> Reparação apenas se cotovelo permanece instável após os 3 passos anteriores. A maioria dos casos não necessita.</li>
        </ol>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Protocolo de Estabilidade</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li>Testar estabilidade sob fluoroscopia após cada etapa de reparação</li>
          <li>Se instável após reparação do LCL: reparar LCM</li>
          <li>Se instável após reparação do LCM: fixador externo articulado</li>
          <li>O fixador externo articulado permite mobilização precoce protegida</li>
          <li>Arco de movimento seguro definido intraoperatoriamente sob fluoroscopia</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Reabilitação</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li>Mobilização ativa precoce dentro do arco seguro (tipicamente extensão limitada a 30-40°)</li>
          <li>Tala articulada ou fixador externo por 6 semanas</li>
          <li>Evitar extensão passiva e stress em valgo nas primeiras 6 semanas</li>
          <li>Prono-supinação ativa precoce é permitida e encorajada</li>
          <li>Fortalecimento progressivo após 8-12 semanas</li>
          <li>Retorno ao desporto após 4-6 meses</li>
        </ul>
      </section>

      <Alert type="info">A chave do sucesso na tríade terrível é a reparação sequencial completa de todos os estabilizadores: coronóide, cabeça do rádio e LCL. A omissão de qualquer componente aumenta significativamente o risco de instabilidade recorrente.</Alert>
      <Alert type="caution">Nunca excisir a cabeça do rádio sem prótese na tríade terrível. A perda do estabilizador lateral num cotovelo com coronóide e LCL lesados resulta em instabilidade grosseira.</Alert>
    </div>
  );
}
