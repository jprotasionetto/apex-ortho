import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'anatomy',
    title: 'Anatomia',
    content: [
      'Ligamento escafolunar (SL): conecta escafóide ao semilunar',
      'Três componentes: dorsal (mais forte e importante), membranoso (central), volar',
      'Componente dorsal: principal restritor da translação e rotação',
      'Ligamento dorsal: espessura 2-3mm, principal estabilizador',
      'Ruptura do componente dorsal = instabilidade clinicamente significativa',
    ],
  },
  {
    id: 'classification',
    title: 'Classificação (Garcia-Elias)',
    content: [
      'Pré-dinâmica: dor sem instabilidade demonstrável, ligamento parcialmente lesado',
      'Dinâmica: instabilidade demonstrada com stress (Watson test), RX estático normal',
      'Estática redutível: gap SL >3mm no RX estático, corrige com manipulação',
      'Estática irredutível: gap SL fixo, DISI estabelecido, sem artrose',
      'SLAC wrist: artrose degenerativa secundária (estágios I-III)',
    ],
  },
  {
    id: 'diagnosis',
    title: 'Diagnóstico',
    content: [
      'Watson shift test (scaphoid shift): subluxação dorsal do escafóide com pressão no tubérculo',
      'Gap escafolunar >3mm (sinal de Terry-Thomas) no RX AP com punho cerrado',
      'Padrão DISI: semilunar em extensão (ângulo SL >60°, normal 30-60°)',
      'Ângulo escafolunar >70° = dissociação SL',
      'RM ou artro-RM para lesões parciais/pré-dinâmicas',
      'Artroscopia: gold standard para estadiamento (classificação de Geissler)',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'Aguda (<6 semanas): reparação direta do ligamento + fixação com fios K por 8-12 semanas',
      'Subaguda (6 semanas - 6 meses): reparação + capsulodese dorsal (Blatt)',
      'Crônica redutível: reconstrução ligamentar (tenodese tipo Brunelli modificada)',
      'Crônica irredutível sem artrose: artrodese SL ou redução + reconstrução',
      'SLAC I: denervação + excisão da estilóide radial',
      'SLAC II: excisão do escafóide + artrodese 4-corner (capitato-lunato-hamato-piramidal)',
      'SLAC III: artrodese total do punho ou proximal row carpectomy',
    ],
  },
];

export default function ScapholunateGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('anatomy');

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
      <Alert type="info">Instabilidade SL nao tratada evolui para SLAC wrist (artrose degenerativa progressiva do punho).</Alert>
      <Alert type="caution">Watson test pode ser positivo bilateral em pacientes com hiperlaxidao - comparar com contralateral.</Alert>
    </div>
  );
}
