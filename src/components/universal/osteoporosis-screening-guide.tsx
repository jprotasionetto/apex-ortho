import { Alert } from '@/components/ui/Alert.tsx';
import { osteoporosisScreeningGuide } from '@/data/universal/osteoporosis-screening-guide.ts';

export default function OsteoporosisScreeningGuideTool() {
  const colorMap: Record<string, string> = { safe: 'border-green-500/30 bg-green-500/5', caution: 'border-yellow-500/30 bg-yellow-500/5', danger: 'border-red-500/30 bg-red-500/5', info: 'border-blue-500/30 bg-blue-500/5' };
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Rastreamento de Osteoporose</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Protocolo de rastreamento, diagnóstico e tratamento de osteoporose baseado em densitometria (DXA), FRAX e fatores de risco. T-score ≤-2.5 = osteoporose; -2.5 a -1.0 = osteopenia.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Mulheres &gt;65 anos, homens &gt;70 anos, qualquer adulto com fratura por fragilidade (trauma de baixo impacto). FRAX calcula risco de fratura em 10 anos — indica tratamento mesmo com osteopenia.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tratamento: bisfosfonatos (alendronato, zoledronato) — 1ª linha. Denosumabe: 2ª linha ou baixo clearance renal. Teriparatida: osteoporose grave, múltiplas fraturas. FRAX ≥20% para fratura maior ou ≥3% para quadril: tratar mesmo com T-score na osteopenia.</p>
          </div>
        </div>
      </div>
      {osteoporosisScreeningGuide.sections.map((section) => (
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
      {osteoporosisScreeningGuide.clinicalPearl && <Alert type="info">{osteoporosisScreeningGuide.clinicalPearl}</Alert>}
      {osteoporosisScreeningGuide.pitfall && <Alert type="caution">{osteoporosisScreeningGuide.pitfall}</Alert>}
    </div>
  );
}
