import { Alert } from '@/components/ui/Alert.tsx';
import { herniatedDiscGuide } from '@/data/spine/herniated-disc-guide.ts';

export default function HerniatedDiscGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Hérnia de Disco — Radiculopatia</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Protrusão ou extrusão do disco intervertebral que comprime raízes nervosas causando radiculopatia (dor irradiada, parestesia, fraqueza). Cervical (C5-C6, C6-C7) e lombar (L4-L5, L5-S1) mais comuns.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Cervical: dor radicular em braço com dermátomo e miotoma correspondentes. Lombar: ciatalgia com Lasègue positivo. Imagem: RM para confirmar localização e extensão. Correlação clínico-radiológica é essencial.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Conservador 6-12 semanas: 90% melhora espontânea. Indicação cirúrgica: déficit neurológico progressivo, falha conservadora >6 semanas, síndrome da cauda equina (emergência). Cervical: ACDF ou artroplastia. Lombar: microdiscectomia (padrão-ouro).</p>
          </div>
        </div>
      </div>

      {herniatedDiscGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {herniatedDiscGuide.clinicalPearl && <Alert type="info">{herniatedDiscGuide.clinicalPearl}</Alert>}
      {herniatedDiscGuide.pitfall && <Alert type="caution">{herniatedDiscGuide.pitfall}</Alert>}
    </div>
  );
}
