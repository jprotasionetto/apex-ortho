import { Alert } from '@/components/ui/Alert.tsx';
import { hoffaFractureGuide } from '@/data/knee/hoffa-fracture-guide.ts';

export default function HoffaFractureGuideTool() {
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Fratura de Hoffa — Fratura Condilar Coronal do Fêmur</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Fratura no plano coronal do côndilo femoral (medial ou lateral), também chamada de fratura unicondilar coronal. Tipo B3 da classificação AO. Frequentemente subtil em RX — visível em TC.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Trauma de alta energia no joelho. RX lateral com suspeita de fragmento condilar. TC obrigatória para caracterizar a fratura. Cirurgia indicada em praticamente todos os casos deslocados.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tratamento cirúrgico: parafusos antero-posterior em compressão (dentro-para-fora). Abordagem lateral para côndilo lateral, medial para medial. Complicações: artrose precoce, rigidez, NAV condilar. Resultado funcional depende da restauração articular.</p>
          </div>
        </div>
      </div>
      {hoffaFractureGuide.sections.map((section: { title: string; content: string[] }, idx: number) => (
        <section key={idx}>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">{section.title}</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
            {section.content.map((line: string, i: number) => (
              <p key={i} className={`text-sm ${line.startsWith('**') ? 'text-slate-100 font-semibold mt-2' : line.startsWith('-') || line.startsWith('  -') ? 'text-slate-300 pl-4' : 'text-slate-300'}`}>{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>
      ))}
      {hoffaFractureGuide.clinicalPearl && <Alert type="info">{hoffaFractureGuide.clinicalPearl}</Alert>}
      {hoffaFractureGuide.pitfall && <Alert type="caution">{hoffaFractureGuide.pitfall}</Alert>}
    </div>
  );
}
