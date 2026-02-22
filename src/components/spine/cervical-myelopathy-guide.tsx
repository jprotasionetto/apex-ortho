import { Alert } from '@/components/ui/Alert.tsx';
import { cervicalMyelopathyGuide } from '@/data/spine/cervical-myelopathy-guide.ts';

export default function CervicalMyelopathyGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Mielopatia Cervical Espondilótica</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Compressão crônica da medula espinhal por espondilose cervical (osteófitos, hipertrofia ligamentar, discos degenerados). Principal causa de disfunção medular em adultos >55 anos.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Paciente com marcha espasmódica, disfunção manual fina, sinais piramidais (Hoffmann, Babinski, hiperreflexia) e dor cervical. RM é o exame de escolha para confirmar compressão medular.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">mJOA <12 (mielopatia grave) ou progressão: indicação cirúrgica. Abordagem: anterior (ACDF, ACCF) vs posterior (laminoplastia, laminectomia + fusão) — depende da localização e curvatura. Sem tratamento: progressão em 20-60% dos casos.</p>
          </div>
        </div>
      </div>

      {cervicalMyelopathyGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {cervicalMyelopathyGuide.clinicalPearl && <Alert type="info">{cervicalMyelopathyGuide.clinicalPearl}</Alert>}
      {cervicalMyelopathyGuide.pitfall && <Alert type="caution">{cervicalMyelopathyGuide.pitfall}</Alert>}
    </div>
  );
}
