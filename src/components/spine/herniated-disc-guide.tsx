import { Alert } from '@/components/ui/Alert.tsx';
import { herniatedDiscGuide } from '@/data/spine/herniated-disc-guide.ts';

export default function HerniatedDiscGuideTool() {
  return (
    <div className="space-y-6">
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
