import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'classification',
    title: 'Classificação de Leddy-Packer',
    content: [
      'Tipo I: tendão retraído até a palma. Vinculum rompido, sem irrigação.',
      'Tipo I: URGÊNCIA CIRÚRGICA - reparar em 7-10 dias (máximo)',
      'Tipo II: tendão retraído até a IFP. Vinculum longo intacto.',
      'Tipo II: reparar em até 2 semanas (alguma irrigação preservada)',
      'Tipo III: fragmento ósseo grande retido na polia A4. Tendão não retrai significativamente.',
      'Tipo III: menos urgente, pode reparar em até 6 semanas',
      'Tipo IV (Smith): fragmento ósseo avulsionado + avulsão tendão do fragmento (lesão dupla)',
      'Tipo V: avulsão com fragmento ósseo + fratura da falange distal',
    ],
  },
  {
    id: 'diagnosis',
    title: 'Diagnóstico',
    content: [
      'Mecanismo: flexão forçada do dedo contra resistência (agarrar jersey no rugby/futebol)',
      'Dedo mais comum: anelar (4º dedo) - 75% dos casos',
      'Perda da flexão ativa da IFD - teste isolado do FDP',
      'Técnica: estabilizar a falange média e pedir flexão da IFD',
      'Edema e equimose na face volar do dedo',
      'Palpar trajeto do tendão flexor para localizar nódulo de retração',
      'RX: pode mostrar fragmento ósseo avulsionado (Tipo III)',
      'Ecografia/RM: localizar nível de retração do tendão',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'TODO tratamento é CIRÚRGICO (não há tratamento conservador eficaz)',
      'Tipo I: reinserção do tendão na falange distal com âncora ou pull-out suture - URGENTE',
      'Tipo II: reinserção na falange distal, pode avançar tendão do nível da IFP',
      'Tipo III: fixação do fragmento ósseo com micro-parafuso ou pull-out + fio K',
      'Crônico (>6 semanas, Tipo I): reconstrução em estágio (hunter rod → enxerto tendinoso)',
      'Alternativas se reconstrução não possível: tenodese da IFD ou artrodese da IFD',
      'Pós-operatório: protocolo de mobilização precoce protegida (Duran modificado)',
    ],
  },
  {
    id: 'timing',
    title: 'Timing Cirúrgico',
    content: [
      'Tipo I: emergência cirúrgica relativa - operar em 7-10 dias',
      'Atraso no Tipo I: tendão edematoso não passa pelas polias, necessita reconstrução estagiada',
      'Tipo II: semi-urgente - operar em até 2 semanas',
      'Tipo III: menos urgente - fragmento ósseo impede retração, pode esperar até 6 semanas',
      'Diagnóstico precoce é essencial - frequentemente perdido na urgência',
      'Regra geral: quanto mais proximal a retração, mais urgente a cirurgia',
    ],
  },
];

export default function JerseyFingerGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('classification');

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <button key={s.id} onClick={() => setActiveSection(s.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === s.id ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}>{s.title}</button>
        ))}
      </div>
      {sections.filter((s) => s.id === activeSection).map((s) => (
        <div key={s.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-slate-100 mb-4">{s.title}</h3>
          <ul className="space-y-2">
            {s.content.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-300"><span className="text-primary-400 mt-0.5">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
      <Alert type="danger">Tipo I (retracao ate a palma) e URGENCIA CIRURGICA - reparar em 7-10 dias no maximo.</Alert>
      <Alert type="caution">Diagnostico frequentemente perdido na urgencia - testar SEMPRE flexao ativa isolada da IFD.</Alert>
    </div>
  );
}
