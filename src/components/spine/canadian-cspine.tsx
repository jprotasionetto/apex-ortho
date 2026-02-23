import { Alert } from '@/components/ui/Alert.tsx';
import { canadianCspineGuide } from '@/data/spine/canadian-cspine.ts';

export default function CanadianCspineTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Regra Canadense de Coluna Cervical (CCR)</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Regra de decisão clínica que define quando solicitar radiografia em trauma cervical. Mais específica que o critério NEXUS, especialmente em centros de urgência. Valida em adultos alertas, estáveis hemodinamicamente.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Adulto consciente com trauma cervical para determinar necessidade de imagem. Não aplicável: &gt;65 anos com mecanismo perigoso, parestesias em extremidades, instabilidade hemodinâmica.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Fator de alto risco (qualquer um): imagem obrigatória. Fator de baixo risco (algum) + capaz de rotar 45°: dispensa imagem. Sensibilidade 99.4% para lesões clinicamente importantes. Supera NEXUS em especificidade.</p>
          </div>
        </div>
      </div>

      {canadianCspineGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {canadianCspineGuide.clinicalPearl && <Alert type="info">{canadianCspineGuide.clinicalPearl}</Alert>}
      {canadianCspineGuide.pitfall && <Alert type="caution">{canadianCspineGuide.pitfall}</Alert>}
    </div>
  );
}
