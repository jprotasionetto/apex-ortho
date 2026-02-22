import { Alert } from '@/components/ui/Alert.tsx';

export default function BoneTumorApproachTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Idade do Paciente</h3>
        <p className="text-sm text-slate-300">
          A idade e o primeiro fator a considerar na avaliacao de um tumor osseo. A prevalencia dos tumores varia dramaticamente com a faixa etaria.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Pediatrico (0-20 anos):</span> Osteossarcoma, sarcoma de Ewing, cisto osseo simples, cisto osseo aneurismatico, granuloma eosinofilico, fibroma nao-ossificante</li>
          <li><span className="font-medium text-slate-100">Adulto jovem (20-40 anos):</span> Tumor de celulas gigantes, osteossarcoma (segundo pico), condrossarcoma, osteoblastoma, adamantinoma</li>
          <li><span className="font-medium text-slate-100">Adulto (&gt;40 anos):</span> Metastases (mais comum!), mieloma multiplo, condrossarcoma, linfoma osseo primario, doenca de Paget maligna</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Localizacao no Osso</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Epifisaria:</span> Condroblastoma, tumor de celulas gigantes (apos fechamento da fise), infeccao, artrite pigmentar vilonodular</li>
          <li><span className="font-medium text-slate-100">Metafisaria:</span> Osteossarcoma, condrossarcoma, fibroma nao-ossificante, cisto osseo simples, encondroma, osteocondroma</li>
          <li><span className="font-medium text-slate-100">Diafisaria:</span> Sarcoma de Ewing, linfoma, mieloma, histiocitose de celulas de Langerhans, displasia fibrosa, adamantinoma (tibia)</li>
          <li><span className="font-medium text-slate-100">Posterior vertebral:</span> Osteoblastoma, osteoma osteoide, cisto osseo aneurismatico</li>
          <li><span className="font-medium text-slate-100">Corpo vertebral:</span> Hemangioma, metastase, mieloma, cordoma (sacro)</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Caracteristicas Radiograficas</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Padrao de Lodwick:</span> IA (benigno inativo) a III (agressivo/maligno) - ver classificacao especifica</li>
          <li><span className="font-medium text-slate-100">Reacao periosteal:</span> Solida/lamelar (benigno/lento), em camadas (cebola - Ewing), espiculada/raios de sol (osteossarcoma), triangulo de Codman (agressivo)</li>
          <li><span className="font-medium text-slate-100">Matriz tumoral:</span> Osteoide (nuvem algodoada - osteossarcoma), condroide (arcos e aneis/pipoca - condrossarcoma), sem matriz (litico - metastase, mieloma, TGC)</li>
          <li><span className="font-medium text-slate-100">Massa de partes moles:</span> Presente = lesao agressiva; preservacao de planos gordurosos = lesao menos agressiva</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Estadiamento (Workup)</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">RM local:</span> Extensao intramedular, envolvimento de partes moles, relacao com feixes neurovasculares, skip metastases</li>
          <li><span className="font-medium text-slate-100">TC de torax:</span> Metastases pulmonares (mais comum para sarcomas)</li>
          <li><span className="font-medium text-slate-100">Cintilografia ossea:</span> Lesoes osseas multiplas, skip metastases. Nao capta mieloma/metastases liticas puras</li>
          <li><span className="font-medium text-slate-100">PET-CT:</span> Estadiamento, resposta a quimioterapia, deteccao de recidiva</li>
          <li>Laboratorio: hemograma, VHS, PCR, fosfatase alcalina, calcio, PSA, eletroforese de proteinas</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Principios de Biopsia</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Incisao longitudinal no trajeto da futura resseccao definitiva</li>
          <li>Minimo de contaminacao de compartimentos</li>
          <li>Hemostasia rigorosa (dreno no trajeto da incisao)</li>
          <li>Preferir biopsia por agulha grossa (core needle) guiada por imagem</li>
          <li>Biopsia incisional: quando core needle insuficiente</li>
          <li>NUNCA realizar biopsia excisional para lesoes suspeitas de malignidade &gt;3cm</li>
          <li>Discutir com cirurgiao oncologista ANTES da biopsia</li>
        </ul>
      </section>

      <Alert type="info">Regra de ouro: para paciente &gt;40 anos com lesao ossea litica solitaria, considerar metastase ate prova em contrario. Investigar mama, prostata, pulmao, rim e tireoide.</Alert>
      <Alert type="caution">Biopsia mal planejada e o erro mais comum e mais grave na abordagem de tumores osseos. Pode inviabilizar cirurgia de salvamento de membro e necessitar amputacao.</Alert>
    </div>
  );
}
