import { Alert } from '@/components/ui/Alert.tsx';

export default function CharcotFootGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Classificacao de Eichenholtz</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li>
            <span className="font-medium text-slate-100">Estagio 0 - Prodromal:</span>
            <p className="mt-1">Pe quente, edemaciado, eritematoso. Radiografia normal ou minimas alteracoes. Cintilografia e RM positivas. Frequentemente confundido com celulite ou TVP.</p>
          </li>
          <li>
            <span className="font-medium text-slate-100">Estagio 1 - Desenvolvimento/Fragmentacao:</span>
            <p className="mt-1">Fragmentacao ossea, subluxacao articular, debris articular visivel na radiografia. Pe quente e edemaciado. Fase de destruicao ativa. Maior risco de deformidade progressiva.</p>
          </li>
          <li>
            <span className="font-medium text-slate-100">Estagio 2 - Coalescencia:</span>
            <p className="mt-1">Absorcao de debris osseo, neoformacao ossea inicial, esclerose. Diminuicao do edema e da temperatura. Inicio da estabilizacao.</p>
          </li>
          <li>
            <span className="font-medium text-slate-100">Estagio 3 - Reconstrutivo/Consolidacao:</span>
            <p className="mt-1">Remodelacao ossea, fusao articular, deformidade residual. Pe estavel com temperatura normal. Possivel deformidade de rocker-bottom.</p>
          </li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Diagnostico</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Suspeita clinica:</span> paciente diabetico com pe quente, edemaciado e eritematoso, geralmente indolor ou pouco doloroso</li>
          <li>Diferenca de temperatura &gt;2 graus C entre os pes (termometria infravermelha)</li>
          <li>Radiografia: pode ser normal no estagio 0; fragmentacao e subluxacao nos estagios avancados</li>
          <li><span className="font-medium text-slate-100">RM:</span> edema osseo difuso, diferencia de infeccao (Charcot: padrao difuso; osteomielite: focal com abscesso)</li>
          <li>Cintilografia com leucocitos marcados: ajuda diferenciar Charcot de infeccao</li>
          <li>Laboratorio: PCR, VHS, leucocitos (podem estar normais no Charcot sem infeccao)</li>
          <li>Localizacao mais comum: articulacao tarsometatarsica (60%), seguida de mediopé</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Fase Aguda (Estagios 0-1):</span> Gesso de contato total (TCC) ou bota pneumatica. Descarga completa ou parcial. Trocas a cada 1-2 semanas. Duracao: ate resolucao do edema e normalizacao da temperatura (media 3-6 meses). Bifosfonatos: evidencia limitada mas utilizados em alguns centros.</li>
          <li><span className="font-medium text-slate-100">Fase de Coalescencia (Estagio 2):</span> Transicao gradual para bota removivel e calcado acomodativo. Monitorar temperatura e edema. Orteses sob medida.</li>
          <li><span className="font-medium text-slate-100">Fase Cronica/Deformidade (Estagio 3):</span> Calcados terapeuticos moldados, palmilhas de redistribuicao de pressao. Reconstrucao cirurgica se deformidade nao acomodavel em calcado, ulceracao recorrente ou instabilidade.</li>
          <li><span className="font-medium text-slate-100">Cirurgia Reconstrutiva:</span> Artrodese com fixacao interna (placa, parafusos, hastes intramedulares). Exostectomia para prominencias osseas. Super-construtos de fixacao para osso comprometido. Taxa de amputacao reduzida com reconstrucao adequada.</li>
        </ul>
      </section>

      <Alert type="info">A chave para o tratamento e o diagnostico precoce. Todo paciente diabetico com pe quente e edemaciado unilateral deve ser tratado como Charcot ate prova em contrario.</Alert>
      <Alert type="caution">A diferenciacao entre Charcot e infeccao pode ser extremamente dificil. Quando em duvida, tratar ambas as condicoes simultaneamente. Biopsia ossea pode ser necessaria.</Alert>
    </div>
  );
}
