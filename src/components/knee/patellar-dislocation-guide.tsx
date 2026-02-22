import { Alert } from '@/components/ui/Alert.tsx';
import { patellarDislocationGuide } from '@/data/knee/patellar-dislocation-guide.ts';

export default function PatellarDislocationGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Luxação Patelar — Instabilidade da Patela</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Luxação patelar lateral é a lesão mais comum da patela em jovens. Lesão de MPFL (ligamento patelofemoral medial) é a principal causa de instabilidade. Avaliação inclui tróclea, TT-TG e Dejour.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Após episódio de luxação patelar com derrame e dor anterior de joelho. RM para avaliar lesão MPFL e cartilagem. TC para medir TT-TG e classificar displasia de tróclea (Dejour A-D).</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Primeiro episódio sem fatores de risco: conservador (fisioterapia VMMQ, órtese). ISI-score ≥4 ou recidiva: reconstrução de MPFL ± trocleoplastia ± anteromediação da tuberosidade tibial. TT-TG >20mm indica mediação da TAT.</p>
          </div>
        </div>
      </div>
      {patellarDislocationGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {patellarDislocationGuide.clinicalPearl && <Alert type="info">{patellarDislocationGuide.clinicalPearl}</Alert>}
      {patellarDislocationGuide.pitfall && <Alert type="caution">{patellarDislocationGuide.pitfall}</Alert>}
    </div>
  );
}
