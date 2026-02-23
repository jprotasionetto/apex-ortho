import { Alert } from '@/components/ui/Alert.tsx';
import { aclInjuryGuide } from '@/data/knee/acl-injury-guide.ts';

export default function AclInjuryGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Lesões do LCA — Ligamento Cruzado Anterior</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Lesão do ligamento cruzado anterior é a lesão ligamentar mais comum do joelho em esportistas. Diagnóstico clínico (Lachman, pivot shift) confirmado por RM. Tratamento baseado em demanda funcional.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Instabilidade de joelho após entorse com pop e derrame. Lachman &gt;3mm, pivot shift positivo. RM confirma com ~95% sensibilidade. Indica reconstrução em pacientes ativos ou com falha conservadora.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Conservador: idosos, baixa demanda, lesão parcial. Cirurgia: jovens, esportistas, instabilidade funcional — reconstrução com enxerto (HTH, semitendíneo/grácil, aloenxerto). Retorno ao esporte 9-12 meses. IKDC/Lysholm como outcomes.</p>
          </div>
        </div>
      </div>
      {aclInjuryGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {aclInjuryGuide.clinicalPearl && <Alert type="info">{aclInjuryGuide.clinicalPearl}</Alert>}
      {aclInjuryGuide.pitfall && <Alert type="caution">{aclInjuryGuide.pitfall}</Alert>}
    </div>
  );
}
