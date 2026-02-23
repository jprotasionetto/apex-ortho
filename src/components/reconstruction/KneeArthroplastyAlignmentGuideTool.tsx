import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'mechanical',
    title: 'Alinhamento Mecânico',
    content: [
      'Filosofia tradicional dominante há décadas',
      'Objetivo: restaurar eixo mecânico neutro (0° de desvio)',
      'Corte femoral distal: 5-7° de valgo em relação ao eixo anatómico (≈3° valgo ao eixo mecânico)',
      'Corte tibial: perpendicular ao eixo mecânico da tíbia (0°)',
      'Slope tibial posterior: 3-5° (preservar cinemática)',
      'Resultado: eixo mecânico passando pelo centro do joelho',
      'Restaurar a joint line (linha articular) é fundamental',
      'Flexão femoral: 3-5° para evitar notching anterior',
      'Vantagens: reproductível, bem estudado, resultados a longo prazo',
      'Desvantagem: pode não respeitar a anatomia individual do paciente',
    ],
  },
  {
    id: 'kinematic',
    title: 'Alinhamento Cinemático',
    content: [
      'Filosofia: restaurar o alinhamento constitucional (pré-doença) do paciente',
      'Não força eixo mecânico neutro — respeita a anatomia individual',
      'Princípio: corrigir apenas a espessura de cartilagem e osso perdidos pela artrose',
      'Corte femoral distal: perpendicular ao eixo mecânico femoral (sem valgo fixo)',
      'Corte tibial: pode ter varo até 3° (respeitar anatomia original)',
      'Rotação femoral: definida pela anatomia original do fémur distal',
      'Vantagens: cinemática mais natural, possível melhor satisfação',
      'Desvantagens: menor evidência a longo prazo, risco de varo residual',
      'Contraindicação relativa: deformidades severas (&gt;15°)',
      'Restricted kinematic alignment: limitar desvios a uma zona segura',
    ],
  },
  {
    id: 'rotation',
    title: 'Rotação',
    content: [
      'Rotação femoral — referências:',
      '  - Eixo transepicondíleo (TEA): gold standard anatómico',
      '  - Linha de Whiteside (eixo AP): perpendicular ao TEA',
      '  - Rotação externa 3° à linha posterior dos côndilos (PCL)',
      '  - Balanceamento dos gaps em flexão (tension method)',
      'Rotação femoral incorreta → instabilidade em flexão, tracking patelar anormal',
      'Rotação tibial — referências:',
      '  - 1/3 medial da tuberosidade tibial anterior (TTA)',
      '  - Junção entre 1/3 medial e 2/3 laterais do planalto tibial',
      '  - Centro da pinça maleolar (orientação distal)',
      'Malrotação tibial interna: dor anterior, subluxação patelar',
      'Em revisão: a rotação é frequentemente a causa subestimada de dor',
    ],
  },
  {
    id: 'gap-balancing',
    title: 'Balanceamento dos Gaps',
    content: [
      'Objetivo: gaps de extensão e flexão simétricos e iguais',
      'Gap de extensão: determinado pelos cortes tibial e femoral distal + libertação de partes moles',
      'Gap de flexão: determinado pelo corte femoral posterior + tamanho femoral',
      'Gap retangular: tensão medial = tensão lateral (em extensão e flexão)',
      'Desequilíbrio medial-lateral em extensão: libertar ligamentos (medial ou lateral)',
      'Gap de flexão > extensão: componente femoral demasiado pequeno ou slope excessivo',
      'Gap de extensão > flexão: downsize femoral ou aumentar slope tibial',
      'Measured resection vs gap balancing: duas técnicas (podem ser combinadas)',
      'Measured resection: cortes ósseos baseados em landmarks, verificação dos gaps',
      'Gap balancing: ajustar cortes e partes moles para gaps iguais',
    ],
  },
  {
    id: 'modern',
    title: 'Tendências Modernas',
    content: [
      'Cirurgia assistida por robótica: MAKO, ROSA, CORI, Velys',
      '  - Planeamento 3D com TC pré-operatório',
      '  - Execução dos cortes com braço robótico (haptic feedback)',
      '  - Maior precisão na execução dos cortes vs técnica convencional',
      '  - Sem evidência clara de melhor resultado funcional a longo prazo (ainda)',
      'PSI (Patient-Specific Instrumentation): guias de corte personalizados',
      '  - Baseados em RM ou TC pré-operatórios',
      '  - Reduzem tempo cirúrgico, menos instrumentos',
      '  - Precisão similar à navegação computadorizada',
      'Navegação computadorizada: sem radiação, feedback em tempo real',
      'Restricted kinematic alignment: compromisso entre mecânico e cinemático',
      '  - Limites: ±3° de varo/valgo, ±3° de flexão/extensão',
      'Sensores intra-operatórios (ex: VERASENSE): pressão em tempo real para balanceamento',
      'Cementless TKA: crescente popularidade em pacientes jovens e ativos',
    ],
  },
];

export default function KneeArthroplastyAlignmentGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('mechanical');

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
      <Alert type="info">O eixo transepicondíleo (TEA) e o gold standard para rotacao femoral. Confirmar com a linha de Whiteside (perpendicular) e 3 graus de rotacao externa a linha posterior dos condilos.</Alert>
      <Alert type="caution">Malrotacao dos componentes e uma causa frequente e subestimada de dor pos-ATJ. Sempre avaliar rotacao com TC se dor anterior persistente ou instabilidade em flexao.</Alert>
    </div>
  );
}
