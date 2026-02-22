import { Alert } from '@/components/ui/Alert.tsx';

export default function PlantarFasciitisGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Patologia</h3>
        <p className="text-sm text-slate-300">
          A fascite plantar e uma fasciopatia degenerativa (nao inflamatoria) da fascia plantar na sua origem no tuberculo medial do calcaneo. Afeta 10% da populacao ao longo da vida. O termo mais correto e fasciose plantar.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Histopatologia: degeneracao mixoide, necrose do colageno, hiperplasia angiofibroblastica (sem celulas inflamatorias)</li>
          <li>Espessamento da fascia plantar (&gt;4mm na US e diagnostico)</li>
          <li>Dor tipica ao primeiro passo pela manha (start-up pain)</li>
          <li>Piora com atividade prolongada em pe e melhora com repouso</li>
          <li>90% resolvem com tratamento conservador em 12 meses</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Fatores de Risco</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Obesidade:</span> IMC &gt;30 (fator de risco mais significativo)</li>
          <li><span className="font-medium text-slate-100">Pe plano (pes planus):</span> aumento da tensao na fascia plantar</li>
          <li><span className="font-medium text-slate-100">Pe cavo:</span> diminuicao da capacidade de absorcao de impacto</li>
          <li><span className="font-medium text-slate-100">Encurtamento do tendao de Aquiles:</span> dorsiflexao limitada (&lt;10 graus com joelho estendido)</li>
          <li>Atividade com impacto repetitivo (corrida, salto)</li>
          <li>Permanencia prolongada em pe (profissionais de saude, professores)</li>
          <li>Calcados inadequados</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Escada de Tratamento</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">1a Linha - Alongamento:</span> Alongamento especifico da fascia plantar (Digiovanni protocol), alongamento da panturrilha/Aquiles, massagem com rolo gelado. Evidencia nivel I.</li>
          <li><span className="font-medium text-slate-100">2a Linha - Orteses:</span> Palmilhas com suporte do arco, calcanheira de silicone, calcados com amortecimento adequado. Orteses sob medida se pe plano ou cavo.</li>
          <li><span className="font-medium text-slate-100">3a Linha - Tala noturna:</span> Splint noturno em dorsiflexao neutra (90 graus). Mantem fascia alongada durante o sono. Melhora start-up pain.</li>
          <li><span className="font-medium text-slate-100">4a Linha - Terapia por ondas de choque (ESWT):</span> Eficacia demonstrada em estudos randomizados. 3-5 sessoes semanais. Opcao para casos refratarios &gt;6 meses.</li>
          <li><span className="font-medium text-slate-100">5a Linha - PRP/Infiltracao:</span> PRP (plasma rico em plaquetas) com resultados promissores. Corticoide: alivio a curto prazo mas risco de rotura da fascia e atrofia do coxim gorduroso. Maximo 3 infiltracoes.</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Cirurgico</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Indicado em &lt;5% dos casos, apos falha de tratamento conservador por pelo menos 12 meses</li>
          <li><span className="font-medium text-slate-100">Fasciotomia plantar parcial:</span> liberacao do terco medial da fascia plantar (aberta ou endoscopica)</li>
          <li>Nao liberar mais que 40% da fascia (risco de colapso do arco e pe plano iatrogênico)</li>
          <li>Se gastrocnemio encurtado (teste de Silfverskjold positivo): liberacao proximal do gastrocnemio (Strayer ou Baumann)</li>
          <li>Remocao do esporao calcaneo: nao tem beneficio comprovado isoladamente</li>
          <li>Resultados cirurgicos: 70-90% de satisfacao</li>
        </ul>
      </section>

      <Alert type="info">O alongamento especifico da fascia plantar (cruzando o pe sobre o joelho e estendendo os dedos por 10 segundos, 10 repeticoes, 3x ao dia) e mais eficaz que o alongamento generico do Aquiles.</Alert>
      <Alert type="caution">Infiltracao com corticoide repetida pode causar rotura da fascia plantar e atrofia irreversivel do coxim gorduroso. Limitar a 2-3 infiltracoes com intervalo minimo de 3 meses.</Alert>
    </div>
  );
}
