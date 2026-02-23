import { Alert } from '@/components/ui/Alert.tsx';

export default function MangledExtremityAlgorithmTool() {
  return (
    <div className="space-y-6">
      {/* Imagens do Manual de Trauma Ortopédico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Membro Gravemente Traumatizado — Manual SBOT (pp. 30, 83)</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: '/images/manual-trauma/page30_img1.png', caption: 'Algoritmo de conduta — lesão arterial e hemodinâmica' },
            { src: '/images/manual-trauma/page83_img1.png', caption: 'Avaliação de partes moles e isquemia vascular' },
          ].map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-28 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Avaliação Inicial</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">A avaliação do membro gravemente traumatizado deve ser sistemática e rápida:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Status vascular:</strong> Presença de pulsos distais, enchimento capilar, oximetria de pulso, Doppler portátil</li>
            <li><strong className="text-slate-100">Tempo de isquemia quente:</strong> Tempo desde a lesão vascular até reparo. Limite crítico: 6 horas</li>
            <li><strong className="text-slate-100">Contaminação:</strong> Grau de contaminação dos tecidos (solo agrícola, água de esgoto = alto risco)</li>
            <li><strong className="text-slate-100">Lesão nervosa:</strong> Avaliação motora e sensitiva distal (nervo tibial é o mais importante para função)</li>
            <li><strong className="text-slate-100">Lesão óssea:</strong> Grau de cominuição, perda óssea segmentar</li>
            <li><strong className="text-slate-100">Lesão de partes moles:</strong> Cobertura disponível, zona de lesão</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Sistemas de Pontuação</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">Diversos scores foram desenvolvidos para auxiliar na decisão entre salvamento e amputação:</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-100">MESS (Mangled Extremity Severity Score):</strong> O mais utilizado. Score {'>='}  7 prediz amputação com alta especificidade. Avalia: energia do trauma, isquemia, choque, idade.</li>
            <li><strong className="text-slate-100">LSI (Limb Salvage Index):</strong> Avalia 6 componentes: artéria, nervo, osso, pele, músculo, veias profundas. Score {'>='}  6: amputação.</li>
            <li><strong className="text-slate-100">PSI (Predictive Salvage Index):</strong> Similar ao LSI com pesos diferentes para cada componente.</li>
            <li><strong className="text-slate-100">NISSSA (Nerve Injury, Ischemia, Soft Tissue, Skeletal, Shock, Age):</strong> Score {'>='}  11: amputação.</li>
          </ul>
          <p className="text-sm text-slate-400 mt-2">O estudo LEAP (2002) demonstrou que nenhum score isolado é suficientemente sensível para indicar amputação de forma absoluta.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Algoritmo de Decisão</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">Fluxo de decisão para o membro gravemente traumatizado:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-100">Estabilização do paciente</strong> - ATLS, controle de hemorragia, ressuscitação volêmica</li>
            <li><strong className="text-slate-100">Avaliar viabilidade do membro</strong> - Pulsos, perfusão, sensibilidade, motricidade</li>
            <li><strong className="text-slate-100">Calcular MESS</strong> - Se {'>='}  7, discutir amputação com equipe e paciente/família</li>
            <li><strong className="text-slate-100">Se MESS {'<'} 7</strong> - Tentar salvamento: revascularização, fasciotomia, fixação externa, desbridamento</li>
            <li><strong className="text-slate-100">Reavaliar em 24-48h</strong> - Se membro não viável: amputação secundária</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Indicações Relativas de Amputação Primária</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li>Isquemia quente {'>'} 6 horas com lesão muscular extensa</li>
            <li>Lesão completa do nervo tibial posterior (perda da sensibilidade plantar)</li>
            <li>MESS {'>='}  7</li>
            <li>Politraumatizado instável (damage control - amputação salva vidas)</li>
            <li>Esmagamento extenso com contaminação maciça</li>
            <li>Lesão vascular multinível com perda segmentar</li>
            <li>Múltiplas comorbidades que comprometem cicatrização</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Pré-requisitos para Salvamento do Membro</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li>Paciente hemodinamicamente estável ou estabilizável</li>
            <li>Isquemia quente {'<'} 6 horas (ou reperfusão precoce possível)</li>
            <li>Pelo menos um vaso pérvio abaixo do joelho para reconstrução</li>
            <li>Cobertura de tecidos moles possível (retalho local ou livre)</li>
            <li>Potencial de sensibilidade plantar preservado</li>
            <li>Equipe multidisciplinar disponível (vascular, plástica, ortopedia)</li>
          </ul>
        </div>
      </section>

      <Alert type="info">O estudo LEAP demonstrou que, em 2 anos de seguimento, pacientes com amputação abaixo do joelho e reconstrução tiveram resultados funcionais semelhantes. A decisão deve ser individualizada e compartilhada com o paciente.</Alert>
    </div>
  );
}
