import { Alert } from '@/components/ui/Alert.tsx';
import { kneeOsteotomyGuide } from '@/data/knee/knee-osteotomy-guide.ts';

export default function KneeOsteotomyGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Osteotomia do Joelho</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Procedimento para corrigir deformidade em varo ou valgo do joelho redistribuindo a carga articular. HTO (osteotomia tibial alta) para varo, DFO (osteotomia femoral distal) para valgo. Preserva o joelho nativo.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">OA medial com deformidade em varo em paciente jovem (<60 anos), ativo, com compartimento lateral preservado, ligamentos íntegros e IMC <30. Alternativa à artroplastia para adiar prótese.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">HTO abertura lateral: mais comum, medializa eixo mecânico. Objetivo: correção de 3-5° além do neutro (valgização). Sobrevida de 10-15 anos em casos selecionados. Complicações: pseudartrose, perda de correção, progressão de artrose.</p>
          </div>
        </div>
      </div>
      {kneeOsteotomyGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {kneeOsteotomyGuide.clinicalPearl && <Alert type="info">{kneeOsteotomyGuide.clinicalPearl}</Alert>}
      {kneeOsteotomyGuide.pitfall && <Alert type="caution">{kneeOsteotomyGuide.pitfall}</Alert>}
    </div>
  );
}
