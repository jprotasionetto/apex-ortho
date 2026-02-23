import { Alert } from '@/components/ui/Alert.tsx';
import { spinalStenosisGuide } from '@/data/spine/spinal-stenosis-guide.ts';

export default function SpinalStenosisGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Estenose do Canal Espinhal</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Estreitamento do canal vertebral por osteófitos, hipertrofia facetária, espessamento do ligamento amarelo ou protrusões discais. Causa compressão de raízes nervosas (lombar) ou medula (cervical/torácica).</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Dor em perna ou claudicação neurogênica que piora com extensão e melhora com flexão do tronco (diferente de vascular). RM é padrão diagnóstico. Correlacionar com clínica antes de indicar cirurgia.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Conservador: fisioterapia em flexão, infiltração epidural (sintomático). Cirúrgico: laminectomia descompressiva ± fusão se instabilidade (&gt; espondilolistese grau I, deformidade). Claudicação lombar 90% melhora com descompressão cirúrgica.</p>
          </div>
        </div>
      </div>

      {spinalStenosisGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {spinalStenosisGuide.clinicalPearl && <Alert type="info">{spinalStenosisGuide.clinicalPearl}</Alert>}
      {spinalStenosisGuide.pitfall && <Alert type="caution">{spinalStenosisGuide.pitfall}</Alert>}
    </div>
  );
}
