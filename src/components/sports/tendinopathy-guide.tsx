import { Alert } from '@/components/ui/Alert.tsx';
import { tendinopathyGuide } from '@/data/sports/tendinopathy-guide.ts';

export default function TendinopathyGuideTool() {
  const colorMap: Record<string, string> = { safe: 'border-green-500/30 bg-green-500/5', caution: 'border-yellow-500/30 bg-yellow-500/5', danger: 'border-red-500/30 bg-red-500/5', info: 'border-blue-500/30 bg-blue-500/5' };
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Tendinopatia — Diagnóstico e Tratamento</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Tendinopatia é degeneração do tendão por sobrecarga crônica (tendinose), distinta de tendinite (processo inflamatório agudo). Afeta principalmente Aquiles, patelar, supra-espinal e tendão comum extensor do cotovelo.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Dor e espessamento tendinoso insidioso relacionado a carga, sem trauma específico. US ou RM confirmam diagnóstico e excluem ruptura. Protocolo de tratamento baseado em fase (reativa, repair, degenerativa).</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Reativa (aguda): redução de carga, anti-inflamatório breve. Repair: exercícios excêntricos (Alfredson para Aquiles, protocolo Stanish). Degenerativa: PRP, ondas de choque extracorpórea. Cirurgia: falha conservadora >6-12 meses — desbridamento tendinoso artroscópico ou aberto.</p>
          </div>
        </div>
      </div>

      {tendinopathyGuide.sections.map((section) => (
        <section key={section.id}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className={`border rounded-xl p-4 space-y-2 ${section.colorCode ? colorMap[section.colorCode] : 'border-slate-700 bg-slate-800'}`}>
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
            {section.keyPoints && section.keyPoints.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-700/50">
                <p className="text-xs font-semibold text-slate-400 mb-1">Pontos-chave:</p>
                <ul className="list-disc list-inside space-y-1">{section.keyPoints.map((kp: string, i: number) => <li key={i} className="text-xs text-slate-400">{kp}</li>)}</ul>
              </div>
            )}
          </div>
        </section>
      ))}
      {tendinopathyGuide.clinicalPearl && <Alert type="info">{tendinopathyGuide.clinicalPearl}</Alert>}
      {tendinopathyGuide.pitfall && <Alert type="caution">{tendinopathyGuide.pitfall}</Alert>}
    </div>
  );
}
