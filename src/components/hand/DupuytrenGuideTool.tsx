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
      'Estádio IV: contratura total &gt;135°',
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
      'Início precoce (&lt;50 anos)',
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
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Contratura de Dupuytren — Fibromatose da Fáscia Palmar</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Fibroproliferação progressiva da fáscia palmar formando cordões que causam contratura em flexão dos dedos. Afeta principalmente 4º e 5º dedos, mais comum em homens &gt;50 anos.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Quando a contratura da MCF ≥30° ou IFP ≥15°, interfere com função. Teste da mesa (não consegue apoiar palma plana) indica cirurgia. Tabletop test positivo = indicação cirúrgica.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tratamento: fasciectomia parcial (padrão-ouro), fasciotomia por agulha percutânea (menos invasivo) ou colagenase Clostridium histolyticum (injeção, disponível em alguns países). Alta recidiva (30-70%).</p>
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
      <Alert type="info">Tabletop test: se o paciente nao consegue apoiar a palma da mao plana na mesa, ha indicacao de tratamento.</Alert>
      <Alert type="caution">Contratura PIP tem pior prognostico e maior recidiva que contratura MCP isolada.</Alert>
    </div>
  );
}
