import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'pathology',
    title: 'Patologia',
    content: [
      'Doença fibroproliferativa da fáscia palmar',
      'Formação de nódulos e cordas (contratura) na fáscia palmar e digital',
      'Progressão: nódulo → corda → contratura em flexão',
      'Acomete mais frequentemente: 4º dedo > 5º dedo > 3º dedo',
      'Prevalência: homens > mulheres (7:1), idade > 50 anos',
      'Componente genético forte (autossômico dominante com penetrância variável)',
    ],
  },
  {
    id: 'staging',
    title: 'Estadiamento (Tubiana)',
    content: [
      'Estádio 0: sem lesão',
      'Estádio N: nódulo palmar sem contratura',
      'Estádio I: contratura total (MCP + PIP + DIP) de 0-45°',
      'Estádio II: contratura total de 45-90°',
      'Estádio III: contratura total de 90-135°',
      'Estádio IV: contratura total >135°',
      'Nota: somar a contratura em flexão de todas as articulações do dedo afetado',
    ],
  },
  {
    id: 'risk-factors',
    title: 'Fatores de Risco / Diátese de Dupuytren',
    content: [
      'Diátese de Dupuytren = forma agressiva com maior recidiva',
      'Critérios de diátese: doença bilateral, história familiar positiva',
      'Doença ectópica: fibromatose plantar (Ledderhose), peniana (Peyronie), almofadas dorsais dos dedos (Garrod)',
      'Início precoce (<50 anos)',
      'Sexo masculino',
      'Descendência nórdica / europeia',
      'Associações: diabetes, epilepsia (fenitoína), alcoolismo, tabagismo',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'Indicação cirúrgica: contratura MCP ≥30° ou qualquer contratura PIP ≥20°',
      'Aponeurotomia percutânea com agulha: minimamente invasiva, recidiva mais frequente',
      'Colagenase (Xiaflex/Xiapex): injeção + manipulação no dia seguinte, bons resultados MCP',
      'Fasciectomia parcial: excisão das cordas, procedimento mais comum',
      'Fasciectomia total: maior morbidade, reservada para recidivas',
      'Dermofasciectomia: excisão da pele + fáscia com enxerto, para recidivas graves',
      'MCP: melhor prognóstico que PIP com qualquer tratamento',
      'PIP: resultados menos previsíveis, maior taxa de recidiva',
      'Reabilitação: ortótese de extensão noturna por 3-6 meses após cirurgia',
    ],
  },
];

export default function DupuytrenGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('pathology');

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
      <Alert type="info">Tabletop test: se o paciente nao consegue apoiar a palma da mao plana na mesa, ha indicacao de tratamento.</Alert>
      <Alert type="caution">Contratura PIP tem pior prognostico e maior recidiva que contratura MCP isolada.</Alert>
    </div>
  );
}
