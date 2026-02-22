import { Alert } from '@/components/ui/Alert.tsx';
import { osteochondralLesionGuide } from '@/data/sports/osteochondral-lesion-guide.ts';

export default function OsteochondralLesionGuideTool() {
  const colorMap: Record<string, string> = { safe: 'border-green-500/30 bg-green-500/5', caution: 'border-yellow-500/30 bg-yellow-500/5', danger: 'border-red-500/30 bg-red-500/5', info: 'border-blue-500/30 bg-blue-500/5' };
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Lesões Osteocondrais — OCD e OAT</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Lesões da cartilagem articular e osso subcondral causadas por trauma, necrose avascular ou osteocondrite dissecante (OCD). Afetam principalmente joelho (côndilo medial), tornozelo e cotovelo.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Dor articular refratária com bloqueio ou derrame sem causa aparente. RM classifica a lesão (tamanho, estabilidade, profundidade). Artroscopia diagnóstica e terapêutica na maioria dos casos.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Lesão estável <1cm² < 18 anos: tratamento conservador ou perfuração retrógrada. Instável ou adulto: OAT (mosaicoplastia) para <2-3cm². MACI/ACI para lesões grandes. Aloenxerto para lesões >3cm². Resultado inversamente proporcional ao tamanho da lesão.</p>
          </div>
        </div>
      </div>

      {osteochondralLesionGuide.sections.map((section) => (
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
      {osteochondralLesionGuide.clinicalPearl && <Alert type="info">{osteochondralLesionGuide.clinicalPearl}</Alert>}
      {osteochondralLesionGuide.pitfall && <Alert type="caution">{osteochondralLesionGuide.pitfall}</Alert>}
    </div>
  );
}
