import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'types',
    title: 'Tipos',
    content: [
      'Defeito de Formação: falha na formação vertebral completa',
      '  - Hemivértebra (mais comum): apenas metade do corpo vertebral formado',
      '  - Hemivértebra totalmente segmentada: maior potencial de progressão',
      '  - Hemivértebra semi-segmentada: progressão moderada',
      '  - Hemivértebra incarcada: menor risco de progressão',
      '  - Vértebra em cunha: deformidade tipicamente leve',
      'Defeito de Segmentação: falha na separação vertebral',
      '  - Barra unilateral: fusão de um lado, crescimento assimétrico',
      '  - Bloco vertebral: fusão bilateral, sem crescimento local',
      'Misto: combinação de defeitos de formação e segmentação',
    ],
  },
  {
    id: 'natural-history',
    title: 'História Natural',
    content: [
      'Progressão depende do tipo de anomalia e do potencial de crescimento remanescente',
      'Barra unilateral + hemivértebra contralateral: PIOR prognóstico (5-10°/ano)',
      'Barra unilateral isolada: progressão de 2-5°/ano',
      'Hemivértebra totalmente segmentada: progressão de 1-2°/ano',
      'Hemivértebra incarcada: geralmente não progride',
      'Bloco vertebral: não progride (sem potencial de crescimento local)',
      'Progressão mais rápida durante picos de crescimento (0-3 anos e puberdade)',
      'Avaliação obrigatória: anomalias renais (20-30%), cardíacas (10-15%), medulares (15-40%)',
      'Associação VACTERL: Vertebral, Anal, Cardíaca, Traqueo-Esofágica, Renal, Limbs',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'Observação: curvas equilibradas, hemivértebras incarcadas, blocos vertebrais',
      'Monitorização radiográfica cada 6 meses durante crescimento',
      'Ortótese: NÃO eficaz para escoliose congénita (anomalia estrutural)',
      'Hastes de crescimento (growing rods): curvas longas progressivas em crianças pequenas',
      'MAGEC rods: hastes magnéticas de distração (alongamento não-invasivo)',
      'Ressecção de hemivértebra: indicada para hemivértebras isoladas progressivas',
      'Hemiepifisiodese convexa: retardar crescimento no lado convexo',
      'Fusão in situ precoce: curtas curvas progressivas, artrodese anterior + posterior',
      'Osteotomia vertebral: deformidades rígidas em crianças maiores/adolescentes',
      'Prioridade: prevenir deformidade severa com intervenção precoce quando indicada',
    ],
  },
];

export default function CongenitalScoliosisGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('types');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Escoliose Congênita</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Escoliose causada por anomalias vertebrais congênitas de formação (hemivertebra, cunha vertebral) ou segmentação (barra unilateral, fusão de costelas). Diferente da escoliose idiopática pela causa estrutural.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Criança com diagnóstico de deformidade vertebral em imagem (US fetal, RX, TC). Classificação de Winter (tipo I: falha de formação, tipo II: falha de segmentação, tipo III: misto) orienta prognóstico e cirurgia.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Barra não segmentada + hemivertebra contralateral: pior prognóstico (até 10°/ano de progressão). Observação: curvas <40° sem progressão. Cirurgia precoce (hemivertebra): evitar deformidade severa. Hemiepifisiodese: para curvas leves em crescimento. Fusão espinhal definitiva após maturidade.</p>
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
      <Alert type="info">Barra unilateral + hemivertebra contralateral e a combinacao com pior prognostico (5-10 graus/ano). Intervencao precoce e recomendada.</Alert>
      <Alert type="caution">Sempre rastrear anomalias associadas: ecografia renal, ecocardiograma e RM da coluna total (anomalias medulares em ate 40% dos casos).</Alert>
    </div>
  );
}
