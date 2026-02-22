import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'types',
    title: 'Tipos de FAI',
    content: [
      'Cam (came): proeminência óssea na junção cabeça-colo femoral',
      'Cam: tipicamente homens jovens e atléticos',
      'Cam: lesão labral e condral anterossuperior por impactação',
      'Pincer (tenaz): sobrecobertura acetabular da cabeça femoral',
      'Pincer: tipicamente mulheres de meia-idade',
      'Pincer: lesão labral circunferencial, lesão condral contre-coup posterior',
      'Misto (Mixed): combinação de Cam e Pincer - tipo MAIS COMUM (>80%)',
    ],
  },
  {
    id: 'diagnosis',
    title: 'Diagnóstico',
    content: [
      'Ângulo alfa >55° (Cam): medido na RM ou radiografia (Dunn view)',
      'Cross-over sign (Pincer): sobrecobertura anterossuperior na AP pelve',
      'Posterior wall sign (Pincer): centro da cabeça lateral à parede posterior',
      'Teste de impingement anterior (FADIR): flexão + adução + rotação interna',
      'Teste positivo: reproduz dor inguinal profunda',
      'Ângulo centro-borda lateral (LCE) >40°: coxa profunda/protrusão',
      'Sinal do "8" ou ischial spine sign: retroversão acetabular',
    ],
  },
  {
    id: 'imaging',
    title: 'Imagiologia',
    content: [
      'RX AP pelve: cross-over sign, posterior wall sign, ângulo CE, Tönnis',
      'RX Dunn view (45° flexão, 20° abdução): melhor para visualizar Cam',
      'RX lateral (cross-table ou frog-leg): avaliar offset cabeça-colo',
      'RM com contraste intra-articular (artro-RM): gold standard para labrum e cartilagem',
      'Sequências radiais na RM: avaliar ângulo alfa em múltiplas posições',
      'TC 3D: planejamento pré-operatório para localizar exatamente a deformidade',
      'Classificação de Tönnis: avaliar grau de artrose antes de indicar artroscopia',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'Conservador: modificação de atividades, evitar posições de impingement',
      'Fisioterapia: fortalecimento de core, estabilização pélvica, flexibilidade',
      'AINE: controle sintomático',
      'Infiltração intra-articular diagnóstica e terapêutica',
      'Artroscopia do quadril: tratamento cirúrgico de escolha',
      'Cam: osteoplastia femoral (reshaping da junção cabeça-colo)',
      'Pincer: rim trimming acetabular + reinserção labral',
      'Reparação ou reconstrução labral (prefere-se reparação à ressecção)',
      'Contraindicações relativas à artroscopia: Tönnis ≥2, espaço articular <2mm',
      'Luxação cirúrgica aberta (Ganz): alternativa para deformidades complexas',
    ],
  },
];

export default function FemoroacetabularImpingementGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('types');

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
      <Alert type="info">FAI misto (Cam + Pincer) e o tipo mais comum - avaliar ambos componentes em cada paciente.</Alert>
      <Alert type="caution">Tonnis ≥2 ou espaco articular {'<'}2mm: artroscopia com resultados imprevisiveis - considerar artroplastia.</Alert>
    </div>
  );
}
