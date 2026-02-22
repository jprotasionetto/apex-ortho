import { Alert } from '@/components/ui/Alert.tsx';

export default function BiopsyPrinciplesGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Principios Gerais</h3>
        <p className="text-sm text-slate-300">
          A biopsia e o ultimo passo diagnostico e deve ser planejada meticulosamente. Uma biopsia mal executada pode contaminar compartimentos, comprometer margens cirurgicas e levar a amputacao desnecessaria.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Realizar APOS completar todo o estadiamento por imagem</li>
          <li>Incisao longitudinal, no trajeto da resseccao definitiva</li>
          <li>Atravessar o menor numero possivel de compartimentos</li>
          <li>Hemostasia meticulosa para evitar hematoma (dissemina celulas tumorais)</li>
          <li>Dreno de saida pela incisao ou proximo a ela (sera ressecado en bloc)</li>
          <li>Nao explorar planos adicionais - acesso direto ao tumor</li>
          <li>Amostras da periferia viavel (centro pode ser necrotico)</li>
          <li>Nao usar torniquete em lesoes de partes moles (risco de disseminacao venosa)</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tipos de Biopsia</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li>
            <span className="font-medium text-slate-100">Biopsia por Agulha Grossa (Core Needle - Preferida):</span>
            <p className="mt-1">Agulha Tru-Cut calibre 14-16G. Guiada por US ou TC. Minima contaminacao. Multiple cores (3-5 fragmentos). Acuracia diagnostica 93-99% em centros experientes. Primeira escolha atual.</p>
          </li>
          <li>
            <span className="font-medium text-slate-100">Biopsia Incisional:</span>
            <p className="mt-1">Reservada para quando core needle e insuficiente ou inconclusiva. Incisao longitudinal pequena (&lt;3cm). Amostra representativa com margem de tecido reativo. Hemostasia e fechamento em planos.</p>
          </li>
          <li>
            <span className="font-medium text-slate-100">Biopsia Excisional:</span>
            <p className="mt-1">APENAS para lesoes superficiais pequenas (&lt;3cm) com alta probabilidade de benignidade. Se resultado for maligno, necessita re-resseccao ampla do leito. Deve ser realizada com tecnica oncologica (margem de 1-2cm).</p>
          </li>
          <li>
            <span className="font-medium text-slate-100">PAAF (Aspiracao por Agulha Fina):</span>
            <p className="mt-1">Papel limitado em tumores musculoesqueleticos primarios (material insuficiente para subtipagem). Util para confirmar recidiva ou metastase em paciente com diagnostico conhecido.</p>
          </li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Estudo de Mankin</h3>
        <p className="text-sm text-slate-300">
          O estudo classico de Mankin et al. (1982, revisado em 1996) avaliou complicacoes de biopsias de tumores musculoesqueleticos e seus impactos no tratamento.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Erros diagnosticos em 18% das biopsias realizadas em centros nao-especializados</li>
          <li>Complicacoes da biopsia alteraram o tratamento em 18.2% dos casos</li>
          <li>Amputacoes desnecessarias em 4.5% dos casos com biopsia inadequada</li>
          <li>Centros de referencia tiveram taxa de erro 2-12x menor</li>
          <li>Principais erros: localizacao inadequada, contaminacao de compartimentos, hematoma, diagnostico incorreto</li>
          <li>Conclusao: biopsias devem ser realizadas no centro onde sera feito o tratamento definitivo</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Planejamento Pre-biopsia</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Discutir com o cirurgiao oncologico ANTES da biopsia</span> - mesmo que o paciente seja visto em outro servico</li>
          <li>Completar todo o estadiamento por imagem ANTES da biopsia (biopsia altera RM)</li>
          <li>Definir a via de acesso cirurgico definitiva para planejar o trajeto da biopsia</li>
          <li>Marcar o ponto de entrada com o cirurgiao que fara a resseccao</li>
          <li>Enviar material para anatomia patologica, citogenetica/molecular E microbiologia (excluir infeccao)</li>
          <li>Material fresco para banco de tumores se disponivel</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Complicacoes</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Contaminacao:</span> disseminacao de celulas tumorais para compartimentos adjacentes; pode inviabilizar salvamento do membro</li>
          <li><span className="font-medium text-slate-100">Fratura patologica:</span> biopsia cortical extensa enfraquece o osso; evitar janela cortical &gt;1/3 do diametro; janela oval/redonda (nao retangular)</li>
          <li><span className="font-medium text-slate-100">Hematoma:</span> dissemina celulas tumorais pelos planos tissulares; hemostasia rigorosa e compressao pos-biopsia essenciais</li>
          <li><span className="font-medium text-slate-100">Infeccao:</span> rara mas devastadora; pode atrasar tratamento oncologico</li>
        </ul>
      </section>

      <Alert type="info">A biopsia deve ser o ULTIMO exame antes do tratamento definitivo. Todo o estadiamento por imagem deve estar completo. A RM pos-biopsia tera artefatos que dificultam a interpretacao.</Alert>
      <Alert type="caution">Regra de ouro: a biopsia deve ser realizada pelo cirurgiao que fara a cirurgia definitiva, ou em coordenacao direta com ele. Nunca biopsiar sem consultar o centro de referencia oncologica.</Alert>
    </div>
  );
}
