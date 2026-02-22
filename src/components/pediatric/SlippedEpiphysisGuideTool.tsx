import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'classification',
    title: 'Classificação',
    content: [
      'Loder (funcional): Estável (consegue caminhar) vs Instável (não consegue caminhar)',
      'Temporal: Agudo (<3 semanas), Crónico (>3 semanas), Agudo sobre crónico',
      'Gravidade (ângulo de deslizamento): Leve (<30°), Moderado (30-50°), Grave (>50°)',
      'A classificação de Loder é a mais importante para prognóstico: instável = 20-50% NAV',
      'A estabilidade é determinada CLINICAMENTE (capacidade de caminhar), não por imagem',
    ],
  },
  {
    id: 'presentation',
    title: 'Apresentação Clínica',
    content: [
      'Adolescente tipicamente obeso (IMC >95º percentil)',
      'Idade: 10-16 anos (raparigas 10-14, rapazes 12-16)',
      'Dor inguinal ou referida ao joelho (15-50% apresentam-se com gonalgia!)',
      'Claudicação progressiva (crónico) ou início agudo (instável)',
      'Rotação externa obrigatória à flexão do quadril (sinal de Drehmann)',
      'Limitação da rotação interna e flexão do quadril',
      'Membro inferior em rotação externa na marcha',
      'Bilateral em 20-40% dos casos (simultâneo ou sequencial)',
      'Associações: hipotiroidismo, hipogonadismo, insuficiência renal, radioterapia',
    ],
  },
  {
    id: 'imaging',
    title: 'Imagiologia',
    content: [
      'Radiografia AP da bacia + perfil de Lauenstein (frog lateral) bilateral',
      'Linha de Klein: linha ao longo do bordo superior do colo femoral deve intersetar a epífise (se não intersetar = ECFE)',
      'Sinal do crescente (crescent sign): duplo contorno metafisário no perfil',
      'Alargamento e irregularidade da fise',
      'Ângulo de deslizamento: medido no perfil de Lauenstein',
      'Sinal de Steel (AP): bordo metafisário visível lateralmente à epífise',
      'Osteopenia periarticular no ECFE crónico',
      'RM: útil em pré-deslizamento (edema fisário, alargamento da fise)',
      'TC: avaliar ângulo de deslizamento e planeamento cirúrgico em casos complexos',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'ECFE estável: fixação in situ com 1 parafuso canulado central na epífise',
      'NÃO tentar reduzir o ECFE estável (risco de NAV)',
      'Parafuso perpendicular à fise, centralmente na epífise (guiado por fluoroscopia)',
      'ECFE instável: urgência cirúrgica (idealmente <24h)',
      'ECFE instável: redução gentil (controversa) + fixação com parafusos canulados',
      'Capsulotomia anterior: descompressão do hematoma intra-articular (pode reduzir NAV)',
      'Fixação profilática contralateral: controversa (risco-benefício individual)',
      'Indicações para fixação profilática: endocrinopatia, idade óssea retardada, Risser 0',
      'Osteotomia (Dunn/Imhäuser): casos selecionados de deslizamento severo crónico, por centros especializados',
    ],
  },
];

export default function SlippedEpiphysisGuideTool() {
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
      <Alert type="info">Ate 50% dos ECFE apresentam-se com dor referida ao joelho. Sempre avaliar o quadril em adolescente obeso com gonalgia e claudicacao.</Alert>
      <Alert type="caution">Nunca tentar reduzir um ECFE estavel — a manipulacao aumenta o risco de necrose avascular. Fixacao in situ e o tratamento padrao.</Alert>
    </div>
  );
}
