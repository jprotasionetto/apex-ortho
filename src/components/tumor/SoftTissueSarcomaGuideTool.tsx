import { Alert } from '@/components/ui/Alert.tsx';

export default function SoftTissueSarcomaGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Epidemiologia</h3>
        <p className="text-sm text-slate-300">
          Sarcomas de partes moles representam menos de 1% de todas as neoplasias malignas em adultos. Existem mais de 50 subtipos histologicos. Podem ocorrer em qualquer localizacao, mas extremidades inferiores sao as mais comuns (40%).
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Incidencia: 3-4 casos por 100.000 habitantes/ano</li>
          <li>Pico de incidencia: 50-60 anos (varia por subtipo)</li>
          <li>Subtipos mais comuns: lipossarcoma, leiomiossarcoma, sarcoma pleomorfico indiferenciado, sarcoma sinovial</li>
          <li>Fatores de risco: radioterapia previa, linfedema cronico, neurofibromatose (MPNST), retinoblastoma familiar</li>
          <li>Regra clinica: massa de partes moles &gt;5cm, profunda a fascia, com crescimento rapido = sarcoma ate prova em contrario</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Investigacao (Workup)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">RM com contraste:</span> exame de eleicao para avaliacao local. Sequencias T1, T2 com supressao de gordura e pos-gadolinio. Avalia extensao, relacao com neurovasculares e compartimentalizacao.</li>
          <li><span className="font-medium text-slate-100">TC de torax:</span> estadiamento pulmonar obrigatorio (metastases pulmonares sao as mais comuns em sarcomas)</li>
          <li><span className="font-medium text-slate-100">PET-CT:</span> util para sarcomas de alto grau, avaliacao de resposta a quimioterapia neoadjuvante</li>
          <li><span className="font-medium text-slate-100">Biopsia:</span> core needle biopsy guiada por US/TC (preferida); incisional se core insuficiente. Trajeto no eixo longitudinal do membro.</li>
          <li>Biopsia excisional: APENAS para lesoes superficiais &lt;3cm com forte suspeita de benigno</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Estadiamento AJCC (8a edicao)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Grau histologico (G):</span> G1 (baixo), G2 (intermediario), G3 (alto) - sistema FNCLCC (diferenciacao, necrose, contagem mitotica)</li>
          <li><span className="font-medium text-slate-100">Tamanho (T):</span> T1 (≤5cm), T2 (5-10cm), T3 (10-15cm), T4 (&gt;15cm)</li>
          <li><span className="font-medium text-slate-100">Linfonodos (N):</span> N0 (sem metastase nodal), N1 (metastase nodal - raro, exceto sarcoma sinovial, epitelioide, rabdomiossarcoma)</li>
          <li><span className="font-medium text-slate-100">Metastases (M):</span> M0 (sem metastase), M1 (metastase a distancia)</li>
          <li>Profundidade ja incorporada no estadio (superficial vs profunda a fascia)</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Resseccao ampla:</span> Pilar do tratamento. Margem de tecido normal ao redor do tumor (1-2cm ou barreira fascial). Cirurgia de salvamento de membro em &gt;90% dos casos atualmente.</li>
          <li><span className="font-medium text-slate-100">Radioterapia:</span> Adjuvante para grau intermediario/alto e tumores &gt;5cm. Pre-operatoria (50Gy) vs pos-operatoria (60-66Gy). Pre-op: menor dose, campo menor, mas maior complicacao de ferida. Pos-op: melhor cicatrizacao mas doses maiores.</li>
          <li><span className="font-medium text-slate-100">Quimioterapia:</span> Papel limitado na maioria dos subtipos de adulto. Indicada para rabdomiossarcoma, sarcoma de Ewing extraosseo e sarcoma sinovial. Doxorrubicina + ifosfamida para doenca metastatica/localmente avancada.</li>
          <li><span className="font-medium text-slate-100">Terapias-alvo:</span> Imatinib para DFSP e GIST; pazopanib para sarcomas de partes moles avancados; trabectedina para lipossarcoma e leiomiossarcoma.</li>
        </ul>
      </section>

      <Alert type="info">Regra dos 5: massa &gt;5cm, profunda, em crescimento rapido, dolorosa e recorrente = alto risco de sarcoma. Encaminhar para centro de referencia ANTES de qualquer procedimento.</Alert>
      <Alert type="caution">Excisao marginal inadvertida ("whoops procedure") e o erro mais comum. Necessita re-resseccao ampla do leito cirurgico + radioterapia. Compromete significativamente o prognostico local.</Alert>
    </div>
  );
}
