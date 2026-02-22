import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'mechanism',
    title: 'Mecanismo',
    content: [
      'Ruptura da banda central (central slip) do extensor na base da falange média',
      'Mecanismo: flexão forçada da IFP, laceração dorsal, ou artrite reumatóide',
      'Bandas laterais migram volarmente ao eixo de rotação da IFP',
      'Resultado: flexão da IFP + hiperextensão da IFD',
      'Tríade: perda da extensão IFP + hiperextensão IFD + flexão MCP (tardia)',
      'Deformidade pode não ser aparente inicialmente (desenvolve-se em 1-3 semanas)',
    ],
  },
  {
    id: 'stages',
    title: 'Estágios',
    content: [
      'Aguda (0-3 semanas): articulações passivamente corrigíveis, tecidos moles edemaciados',
      'Subaguda (3-6 semanas): início de encurtamento dos ligamentos retinaculares oblíquos',
      'Crônica com articulação flexível: contratura presente mas passivamente corrigível',
      'Crônica com contratura fixa: IFP não extensível passivamente, artrose secundária possível',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'Aguda: tala em extensão da IFP (IFD livre para flexão ativa) por 6 semanas',
      'Manter IFD livre: exercícios de flexão da IFD para reposicionar bandas laterais dorsalmente',
      'Subaguda: tala em extensão IFP + exercícios de flexão IFD, por 6-8 semanas',
      'Crônica flexível: alongamento seriado + tala dinâmica, considerar tenotomia extensor terminal',
      'Crônica fixa: liberação cirúrgica estagiada (release capsular) seguida de reconstrução da banda central',
      'Técnicas de reconstrução: avanço da banda central, transferência de bandas laterais, tendon graft',
      'Artrite reumatóide: sinovectomia + reconstrução extensor precoce',
    ],
  },
  {
    id: 'elson-test',
    title: 'Teste de Elson',
    content: [
      'Teste clínico para integridade da banda central (central slip)',
      'Técnica: IFP fletida a 90° sobre borda da mesa, pedir extensão ativa contra resistência',
      'Positivo: IFP fraca na extensão + IFD rígida em extensão (bandas laterais compensando)',
      'Negativo (normal): IFP forte na extensão + IFD flexível (relaxada)',
      'Melhor teste clínico para diagnóstico agudo de lesão da banda central',
      'Sensibilidade e especificidade superiores ao teste de extensão ativa isolada',
    ],
  },
];

export default function BoutonniereGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('mechanism');

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
      <Alert type="info">Teste de Elson e o melhor exame clinico para diagnosticar lesao aguda da banda central do extensor.</Alert>
      <Alert type="caution">Deformidade em boutonniere pode nao ser evidente nas primeiras 1-3 semanas - manter alto indice de suspeicao.</Alert>
    </div>
  );
}
