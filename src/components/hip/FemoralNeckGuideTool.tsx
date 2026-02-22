import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'young-patient',
    title: 'Paciente Jovem (<60 anos)',
    content: [
      'Geralmente fratura de alta energia (acidente, queda de altura)',
      'PRIORIDADE: preservar a cabeça femoral',
      'Redução urgente: idealmente <6 horas para fraturas desviadas (reduz risco de NAV)',
      'Fixação: parafusos canulados (3 em triângulo invertido) ou DHS',
      'Pauwels III (vertical): considerar osteotomia valgizante ou placa angulada 130°',
      'Carga parcial protegida por 6-8 semanas',
      'Monitorização de NAV: RM aos 3, 6 e 12 meses',
      'Em jovens, SEMPRE tentar fixação antes de artroplastia',
    ],
  },
  {
    id: 'elderly-nondisplaced',
    title: 'Idoso - Sem Desvio (Garden I-II)',
    content: [
      'Fixação com parafusos canulados (3 parafusos): tratamento padrão',
      'Alternativa: DHS (dynamic hip screw) com parafuso anti-rotacional',
      'Hemiartoplastia: considerar em pacientes >80 anos com risco de falha de fixação',
      'Fatores de risco para falha: osteoporose severa, Pauwels III, Garden II com traço posterior',
      'Cirurgia idealmente <24-48h (reduz mortalidade e complicações)',
      'Carga parcial imediata se fixação estável',
      'Risco de desvio secundário: 8-15% (requer conversão para artroplastia)',
    ],
  },
  {
    id: 'elderly-displaced',
    title: 'Idoso - Com Desvio (Garden III-IV)',
    content: [
      'Hemiartoplastia: pacientes com baixa demanda funcional, >75-80 anos',
      'ATQ (artroplastia total): pacientes ativos, artrose pré-existente, >65 anos e independentes',
      'Hemiartoplastia bipolar vs unipolar: bipolar pode ter menor erosão acetabular',
      'ATQ vs hemiartoplastia: ATQ melhor função a longo prazo, maior risco de luxação',
      'Abordagem anterior ou anterolateral: menor risco de luxação que posterior para ATQ',
      'Via posterior + reparação capsular: reduz taxa de luxação',
      'Cimentação da haste: obrigatória em idosos (reduz risco de fratura periprotésica intra-op)',
    ],
  },
  {
    id: 'timing',
    title: 'Timing Cirúrgico',
    content: [
      'Fraturas desviadas em jovens: <6h (emergência relativa) - reduz risco de NAV',
      'Fraturas no idoso: <24-48h (reduz mortalidade em 30 dias)',
      'Atraso >48h: aumento de mortalidade, úlceras de pressão, TVP/TEP, infecção',
      'Otimização pré-operatória rápida: anticoagulação, anemia, desequilíbrio metabólico',
      'Não atrasar para eco cardíaco de rotina se paciente estável',
      'Protocolo de via rápida (fast-track): otimizar e operar dentro de 24-36h',
      'Bloqueio do nervo femoral/fascia ilíaca para analgesia pré-operatória',
    ],
  },
];

export default function FemoralNeckGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('young-patient');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Fraturas do Colo Femoral</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Consolidação das classificações para fraturas do colo do fêmur (Pauwels, Garden e AO/OTA) em um guia clínico integrado. Auxilia na escolha entre fixação interna e artroplastia.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura do colo femoral em adulto. A decisão terapêutica baseia-se na: idade, nível de atividade, grau de deslocamento (Garden) e ângulo de fratura (Pauwels).</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Garden I-II em jovem: fixação (parafusos canulados). Garden III-IV em idoso: artroplastia parcial (hemiartroplastia) ou total (ATQ) dependendo da demanda funcional. Em jovens: sempre tentar fixação para preservar cabeça femoral.</p>
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
      <Alert type="danger">Fratura do colo femoral desviada em jovem: URGENCIA - reducao em {'<'}6h para minimizar risco de necrose avascular.</Alert>
      <Alert type="caution">No idoso, atraso cirurgico {'>'}48h aumenta mortalidade - operar o mais brevemente possivel.</Alert>
    </div>
  );
}
