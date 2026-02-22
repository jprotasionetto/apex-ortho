import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'posterior',
    title: 'Via Posterior (Kocher-Langenbeck)',
    content: [
      'Via mais utilizada para artroplastia total do quadril',
      'Intervalo: entre glúteo médio (nervo glúteo superior) e rotadores externos curtos',
      'Posição: decúbito lateral',
      'Incisão: centrada no grande trocânter, curvilínea posterior',
      'Estruturas seccionadas: piriforme, obturadores, gêmeos (rotadores externos curtos)',
      'Nervo em risco: CIÁTICO (nervo isquiático) - proteger com rotação externa + flexão do joelho',
      'Risco de luxação posterior: 2-5% (maior que via anterior)',
      'Reparação capsular + rotadores externos: reduz risco de luxação para <1%',
      'Vantagens: excelente exposição, familiar para maioria dos cirurgiões',
      'Indicações: ATQ primária e revisão, fraturas acetabulares posteriores',
    ],
  },
  {
    id: 'lateral',
    title: 'Via Lateral (Hardinge)',
    content: [
      'Via lateral direta com split do glúteo médio',
      'Intervalo: split do terço anterior do glúteo médio (sem intervalo internervoso)',
      'Posição: decúbito lateral ou supino',
      'Estruturas divididas: glúteo médio (terço anterior) e vasto lateral',
      'Nervo em risco: GLÚTEO SUPERIOR - não estender a incisão >5cm proximal ao trocânter',
      'Risco de Trendelenburg: possível se lesão do nervo glúteo superior ou desinserção excessiva',
      'Menor risco de luxação que via posterior',
      'Vantagens: baixo risco de luxação, boa exposição acetabular',
      'Desvantagens: risco de claudicação (abdutor), ossificação heterotópica',
      'Variante: abordagem lateral modificada (Hardinge split limitado)',
    ],
  },
  {
    id: 'anterior',
    title: 'Via Anterior (Smith-Petersen / DAA)',
    content: [
      'Via anterior direta (Direct Anterior Approach - DAA)',
      'Intervalo INTERNERVOSO: entre sartório/reto femoral (n. femoral) e tensor da fáscia lata (n. glúteo superior)',
      'Posição: supino em mesa de tração ou mesa convencional',
      'Estruturas em risco: nervo cutâneo femoral lateral (meralgia parestésica 1-10%)',
      'Preservação muscular: não secciona musculatura (muscle-sparing)',
      'Menor risco de luxação: 0.5-1% (preservação da cápsula posterior)',
      'Vantagens: recuperação mais rápida, menor dor pós-op, menor risco luxação',
      'Desvantagens: curva de aprendizagem, risco de fratura femoral, exposição femoral limitada',
      'Fluoroscopia intra-operatória frequentemente utilizada',
      'Indicações crescentes: ATQ primária, especialmente em pacientes com risco de luxação',
    ],
  },
  {
    id: 'anterolateral',
    title: 'Via Anterolateral (Watson-Jones)',
    content: [
      'Intervalo: entre tensor da fáscia lata (n. glúteo superior) e glúteo médio (n. glúteo superior)',
      'Nota: NÃO é verdadeiramente internervosa (ambos inervados pelo n. glúteo superior)',
      'Posição: decúbito lateral ou supino',
      'Capsulotomia anterior entre glúteo mínimo e cápsula',
      'Nervo em risco: glúteo superior (evitar retração excessiva proximal)',
      'Risco de luxação: intermediário entre posterior e anterior',
      'Vantagens: boa exposição, preservação dos rotadores externos',
      'Desvantagens: exposição femoral moderada, risco de lesão abdutora',
      'Variação: via anterolateral minimamente invasiva (mini Watson-Jones)',
      'Utilizada para: ATQ primária, fixação de fraturas do colo femoral',
    ],
  },
];

export default function HipApproachGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('posterior');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Acessos Cirúrgicos ao Quadril</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Sistematização dos principais acessos cirúrgicos ao quadril: anterolateral (Watson-Jones), posterior (Moore/Southern), anterior direto (DAA/Hueter), lateral direto (Hardinge) e mini-incisão.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Planejamento de artroplastia total do quadril, fixação de fraturas acetabulares ou do colo femoral, artroscopia e cirurgia de revisão. Escolha depende da anatomia, implante e preferência do cirurgião.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">DAA: preserva músculo abdutor, menor luxação posterior, curva de aprendizado maior. Posterior: maior risco luxação, melhor exposição acetabular. Anterolateral: risco lesão nervo glúteo superior. Lateral: risco fraqueza abdutores.</p>
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
      <Alert type="info">Via anterior (DAA): unica via verdadeiramente internervosa e muscle-sparing para ATQ.</Alert>
      <Alert type="caution">Via posterior: SEMPRE reparar a capsula e rotadores externos para reduzir risco de luxacao.</Alert>
    </div>
  );
}
