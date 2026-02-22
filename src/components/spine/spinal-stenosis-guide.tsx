import { Alert } from '@/components/ui/Alert.tsx';
import { spinalStenosisGuide } from '@/data/spine/spinal-stenosis-guide.ts';

export default function SpinalStenosisGuideTool() {
  return (
    <div className="space-y-6">
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
