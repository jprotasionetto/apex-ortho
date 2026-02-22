import { Alert } from '@/components/ui/Alert.tsx';

export default function LisfrancInjuryGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Anatomia</h3>
        <p className="text-sm text-slate-300">
          O complexo articular tarsometatarsico (articulacao de Lisfranc) compreende a articulacao entre os cuneiformes/cuboide e as bases dos metatarsos. O ligamento de Lisfranc e a estrutura chave - conecta o cuneiforme medial a base do 2o metatarso.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Ligamento de Lisfranc: cuneiforme medial para base do 2o MT (mais forte: plantar)</li>
          <li>Nao ha ligamento intermetatarsal entre 1o e 2o MT (ponto fraco)</li>
          <li>Coluna medial: 1o-3o MT com cuneiformes (menos movel)</li>
          <li>Coluna lateral: 4o-5o MT com cuboide (mais movel)</li>
          <li>A arteria dorsalis pedis passa entre 1o e 2o MT - risco na lesao</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Diagnostico</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Radiografia em carga (AP, lateral, obliqua) e essencial - sempre comparar com lado contralateral</li>
          <li><span className="font-medium text-slate-100">Sinal do Fleck:</span> fragmento osseo avulsionado entre 1o e 2o MT (patognomonico)</li>
          <li>Diastase &gt;2mm entre 1o e 2o MT na incidencia AP em carga</li>
          <li>Perda do alinhamento entre borda medial do 2o MT e borda medial do cuneiforme medio</li>
          <li>TC para lesoes sutis ou quando radiografia em carga e inconclusiva</li>
          <li>RM para lesoes puramente ligamentares</li>
          <li>Exame clinico: dor a compressao mediolateral do mediopé, teste de pronacao-abduccao</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Classificacao de Myerson</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Tipo A - Incongruidade Total:</span> Desvio de todas as 5 articulacoes TMT na mesma direcao (lateral)</li>
          <li><span className="font-medium text-slate-100">Tipo B - Incongruidade Parcial:</span> B1: desvio da coluna medial; B2: desvio da coluna lateral</li>
          <li><span className="font-medium text-slate-100">Tipo C - Divergente:</span> Desvio em direcoes opostas (1o MT medial, 2o-5o MT lateral)</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">ORIF Anatomica:</span> Reducao aberta e fixacao interna com parafusos ou placas. Parafuso transarticular do cuneiforme medial para base do 2o MT (posicao do ligamento de Lisfranc).</li>
          <li><span className="font-medium text-slate-100">Artrodese Primaria:</span> Preferida para lesoes puramente ligamentares (sem fragmento osseo). Estudos mostram melhores resultados que ORIF para lesoes ligamentares. Fusao da coluna medial (1o-3o TMT), preservar mobilidade lateral.</li>
          <li><span className="font-medium text-slate-100">Principios:</span> Reducao anatomica obrigatoria. Sequencia: 2o MT primeiro (pedra angular), depois medial, depois lateral. Sem carga por 6-8 semanas.</li>
        </ul>
      </section>

      <Alert type="info">Lesoes de Lisfranc sao frequentemente subdiagnosticadas. Sempre solicitar radiografia em carga bilateral quando ha suspeita clinica.</Alert>
      <Alert type="caution">Lesoes puramente ligamentares tem pior prognostico que fratura-luxacoes. Considerar artrodese primaria da coluna medial nestes casos.</Alert>
    </div>
  );
}
