import { Alert } from '@/components/ui/Alert.tsx';
import { concussionGuide } from '@/data/sports/concussion-guide.ts';

export default function ConcussionGuideTool() {
  const colorMap: Record<string, string> = { safe: 'border-green-500/30 bg-green-500/5', caution: 'border-yellow-500/30 bg-yellow-500/5', danger: 'border-red-500/30 bg-red-500/5', info: 'border-blue-500/30 bg-blue-500/5' };
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Concussão Cerebral no Esporte</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Lesão cerebral traumática leve causada por força biomecânica que resulta em disfunção neurológica transitória. Protocolo baseado nas diretrizes do Consenso de Concussão no Esporte (SCAT5, Berlim 2016).</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Atleta com trauma crânio-encefálico seguido de: confusão, amnésia, cefaleia, tontura, lentidão, alteração do sono ou emocional. Diagnóstico clínico — TC normal na maioria dos casos.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Retorno ao esporte: protocolo graduado em 6 etapas (mínimo 1 dia por etapa). Sintomas &gt; 10-14 dias: síndrome pós-concussão, encaminhar neurologia. Regra absoluta: "when in doubt, sit out". Nunca retornar no mesmo dia de concussão.</p>
          </div>
        </div>
      </div>

      {concussionGuide.sections.map((section) => (
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
      {concussionGuide.clinicalPearl && <Alert type="info">{concussionGuide.clinicalPearl}</Alert>}
      {concussionGuide.pitfall && <Alert type="caution">{concussionGuide.pitfall}</Alert>}
    </div>
  );
}
