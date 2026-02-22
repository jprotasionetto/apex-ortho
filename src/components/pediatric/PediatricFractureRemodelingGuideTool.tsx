import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'principles',
    title: 'Princípios',
    content: [
      'A remodelação depende de 3 fatores principais:',
      '1. Idade: quanto mais jovem, maior o potencial de remodelação',
      '2. Proximidade à fise: mais perto da fise = mais remodelação',
      '3. Plano da deformidade: deformidades no plano do movimento articular remodelam melhor',
      'Mecanismo: reabsorção óssea no lado côncavo + aposição no lado convexo (Lei de Wolff)',
      'Crescimento fisário assimétrico: a fise cresce mais no lado oprimido',
      'Remodelação ocorre nos 2-3 anos após a fratura',
      'Potencial diminui significativamente após os 10-12 anos de idade',
      'Remodelação é mais eficaz nas metáfises que nas diáfises',
    ],
  },
  {
    id: 'acceptable-angulation',
    title: 'Angulação Aceitável',
    content: [
      'ANTEBRAÇO DISTAL:',
      '  - <5 anos: até 20° (plano sagital), 15° (plano coronal)',
      '  - 5-10 anos: até 15° (sagital), 10° (coronal)',
      '  - >10 anos: até 10° (sagital), 5° (coronal)',
      'ANTEBRAÇO DIAFISÁRIO:',
      '  - <8 anos: até 10-15°',
      '  - >8 anos: até 10° (limitação da prono-supinação)',
      'FÉMUR:',
      '  - <2 anos: até 30° (sagital), 15° (varo)',
      '  - 2-10 anos: até 20° (sagital), 10° (varo)',
      '  - >10 anos: até 10-15° (sagital), 5° (varo)',
      'TÍBIA:',
      '  - <8 anos: até 10° (sagital)',
      '  - Varo: remodelação pobre — corrigir',
      '  - Valgo: pode remodelar melhor',
      'ÚMERO PROXIMAL:',
      '  - <10 anos: até 40-50° (próximo da fise mais fértil)',
      '  - >10 anos: até 20°',
    ],
  },
  {
    id: 'rotation',
    title: 'Deformidade Rotacional',
    content: [
      'Deformidade rotacional NÃO remodelada — corrigir SEMPRE',
      'Rotação é o único tipo de deformidade que não se corrige com crescimento',
      'Antebraço: rotação >30° limita prono-supinação permanentemente',
      'Fémur: rotação >10-15° pode causar problemas de marcha',
      'Tíbia: rotação >10° pode afetar o alinhamento do pé',
      'Avaliar rotação clinicamente (difícil no RX) e corrigir se necessário',
      'Em caso de dúvida: TC para quantificar rotação residual',
    ],
  },
  {
    id: 'overgrowth',
    title: 'Hipercrescimento',
    content: [
      'Fraturas diafisárias do fémur em crianças 2-10 anos: hipercrescimento esperado',
      'Hipercrescimento médio: 1-2 cm no fémur',
      'Aceitar 1-2 cm de encurtamento/sobreposição (bayonet apposition) no tratamento',
      'Encurtamento compensa pelo hipercrescimento subsequente',
      'Mecanismo: hiperémia pós-fratura estimula a fise',
      'Pico do hipercrescimento: nos primeiros 2 anos após a fratura',
      'Após 10 anos de idade: hipercrescimento é menos previsível',
      'Fémur é o osso com maior hipercrescimento, seguido da tíbia',
      'Monitorizar discrepância de membros até maturidade esquelética',
    ],
  },
];

export default function PediatricFractureRemodelingGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('principles');

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
      <Alert type="info">Tres fatores determinam a remodelacao: idade jovem, proximidade a fise e deformidade no plano do movimento articular. Quanto mais jovem e mais perto da fise, mais remodelacao.</Alert>
      <Alert type="caution">Deformidade rotacional NAO remodela — deve ser sempre corrigida. Aceitar 1-2cm de sobreposicao no femur de criancas 2-10 anos (hipercrescimento compensatorio).</Alert>
    </div>
  );
}
