import { Alert } from '@/components/ui/Alert.tsx';
import { pclInjuryGuide } from '@/data/knee/pcl-injury-guide.ts';

export default function PclInjuryGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Lesões do LCP — Ligamento Cruzado Posterior</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">O LCP é o ligamento mais resistente do joelho. Lesão ocorre por trauma direto na tíbia com joelho fletido (dashboard injury). Isolada frequentemente tolerada; complexa requer cirurgia.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Trauma de dashboard, esporte ou queda com joelho fletido. Sag sign posterior, gaveta posterior positiva. RM confirma e gradua (parcial vs completa). Grau e combinação com outras lesões determinam conduta.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Grau I-II isolado: conservador (reabilitação extensores). Grau III ou lesão combinada (canto postero-lateral, LCA): reconstrução cirúrgica. Técnica: via inlay ou transtibial com enxerto tendão patelar ou semitendíneo dobrado.</p>
          </div>
        </div>
      </div>
      {pclInjuryGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {pclInjuryGuide.clinicalPearl && <Alert type="info">{pclInjuryGuide.clinicalPearl}</Alert>}
      {pclInjuryGuide.pitfall && <Alert type="caution">{pclInjuryGuide.pitfall}</Alert>}
    </div>
  );
}
