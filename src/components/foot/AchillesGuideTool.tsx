import { Alert } from '@/components/ui/Alert.tsx';

export default function AchillesGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Diagnostico</h3>
        <p className="text-sm text-slate-300">
          A rotura aguda do tendao de Aquiles e uma lesao frequente, tipicamente em homens de 30-50 anos durante atividade esportiva. O diagnostico e principalmente clinico.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Teste de Thompson (Simmonds):</span> paciente em decubito ventral, compressao da panturrilha - ausencia de flexao plantar indica rotura</li>
          <li><span className="font-medium text-slate-100">Gap palpavel:</span> defeito palpavel no tendao, tipicamente 2-6cm proximal a insercao no calcaneo</li>
          <li>Diminuicao da forca de flexao plantar (pode ainda flexionar via tibial posterior e flexores dos dedos)</li>
          <li>Aumento da dorsiflexao passiva (teste de Matles)</li>
          <li><span className="font-medium text-slate-100">Ultrassonografia:</span> confirma diagnostico, avalia gap e aposicao dos cotos</li>
          <li>RM: reservada para casos cronicos ou quando diagnostico e duvidoso</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Agudo</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Reparo Cirurgico:</span> Preferido para pacientes jovens, ativos e atletas. Menor taxa de re-rotura (2-4% vs 8-12% conservador). Permite reabilitacao acelerada.</li>
          <li><span className="font-medium text-slate-100">Tratamento Funcional (Conservador):</span> Protocolos funcionais com brace e carga precoce. Resultados comparaveis ao cirurgico em estudos recentes. Indicado para pacientes de menor demanda, comorbidades cirurgicas.</li>
          <li><span className="font-medium text-slate-100">Indicacoes Cirurgicas Absolutas:</span> Roturas abertas, gap &gt;1cm na US com pe em equino, re-roturas, atletas de alta performance.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tecnica Cirurgica</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Sutura de Krackow:</span> tecnica de locking-loop padrao para tendoes; 2-3 loops em cada coto</li>
          <li>Abordagem aberta: incisao posteromedial (evita nervo sural lateralmente)</li>
          <li><span className="font-medium text-slate-100">Reparo minimamente invasivo:</span> incisoes percutaneas com guia (tecnica de Dresden/Achillon). Menor taxa de complicacoes de ferida.</li>
          <li>Fio nao absorvivel (FiberWire, Ethibond) para sutura core</li>
          <li>Epitenon suturado com fio absorvivel</li>
          <li>Tensao adequada: pe em ~20 graus de flexao plantar</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Reabilitacao</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Protocolos de carga precoce:</span> carga parcial em bota com cunhas a partir de 2 semanas</li>
          <li>Remocao progressiva de cunhas (reducao de 1-2cm a cada 2 semanas)</li>
          <li>Carga total em bota: 4-6 semanas</li>
          <li>Transicao para calcado normal: 8-12 semanas</li>
          <li>Fortalecimento excentrico: inicio apos 12 semanas</li>
          <li>Retorno ao esporte: 6-9 meses (depende da modalidade e nivel)</li>
          <li>Recuperacao completa da forca: pode levar 12-18 meses</li>
        </ul>
      </section>

      <Alert type="info">Protocolos de reabilitacao funcional acelerada com carga precoce mostram resultados superiores ao imobilizacao rigida prolongada, tanto no tratamento cirurgico quanto conservador.</Alert>
      <Alert type="caution">Diagnostico tardio (&gt;4 semanas) muda completamente a abordagem. Roturas cronicas podem necessitar de reconstrucao com enxerto (FHL transfer, V-Y advancement, aloenxerto).</Alert>
    </div>
  );
}
