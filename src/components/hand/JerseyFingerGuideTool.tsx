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
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Jersey Finger — Avulsão do Tendão Flexor Profundo</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Avulsão do tendão FDP (flexor digitorum profundus) na inserção na falange distal. Geralmente ocorre ao tentar segurar jersey de adversário no esporte. Principalmente 4º dedo.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda perda de flexão ativa da IFD após trauma em hiperextensão forçada do dedo. Diagnóstico clínico (posição de repouso em extensão, sem flexão ativa IFD) confirmado por US ou RM.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tipo I (retração palmar): reparo em até 10 dias. Tipo II (nível IFP): até 3 meses. Tipo III (fragmento ósseo): fixação com parafuso. Sem reparo → perda permanente flexão IFD. É urgência relativa cirúrgica.</p>
          </div>
        </div>
      </div>
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
