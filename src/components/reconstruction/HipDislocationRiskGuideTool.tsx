import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'risk-factors',
    title: 'Fatores de Risco',
    content: [
      'Via posterior (posterolateral): risco maior de luxação posterior (2-5% vs 1-2% anterior)',
      'Cirurgia de revisão: risco 2-3x maior que artroplastia primária',
      'Doença neuromuscular: paralisia cerebral, Parkinson, demência',
      'Não adesão às precauções pós-operatórias',
      'Abuso de álcool ou substâncias',
      'Idade avançada com sarcopenia e déficit proprioceptivo',
      'Hiperlaxidão ligamentar ou Ehlers-Danlos',
      'IMC >30 (obesidade)',
      'Trauma prévio do quadril (fratura do acetábulo)',
      'Diagnóstico original: fratura do colo femoral (vs artrose) = maior risco',
      'Sexo feminino: ligeiro aumento do risco',
      'Insuficiência dos abdutores (Trendelenburg)',
    ],
  },
  {
    id: 'positioning',
    title: 'Posicionamento dos Componentes',
    content: [
      'Zona segura de Lewinnek (cotilo):',
      '  - Anteversão: 15° ± 10° (5-25°)',
      '  - Inclinação (abdução): 40° ± 10° (30-50°)',
      'Anteversão femoral: 10-15° (combinada com cotilo = anteversão total 25-35°)',
      'Conceito de anteversão combinada: anteversão acetabular + femoral = 25-35°',
      'Fórmula de Ranawat: anteversão acetabular + anteversão femoral × 0.7 ≈ 37°',
      'Inclinação excessiva (>55°): risco de desgaste acelerado e edge loading',
      'Inclinação insuficiente (<30°): risco de impingement e limitação de movimento',
      'Offset femoral: restaurar para tensão adequada dos abdutores',
      'Centro de rotação: lateralizar e não medializar (restaurar biomecânica)',
    ],
  },
  {
    id: 'bearing',
    title: 'Opções de Par Tribológico',
    content: [
      'Cabeças maiores = mais estabilidade (aumento do jump distance)',
      'Cabeça 28mm: relação head-neck limitada, maior risco de luxação',
      'Cabeça 32mm: compromisso standard adequado',
      'Cabeça 36mm: boa estabilidade, standard atual na maioria dos centros',
      'Cabeça 40mm: excelente estabilidade, limitada pelo tamanho do cotilo',
      'Insertos constrangidos (constrained liners): para alto risco de luxação',
      'Indicações de constrained liner: revisão por luxação recorrente, déficit neuromuscular severo',
      'Dual mobility (dupla mobilidade): excelente estabilidade, indicado em revisão e alto risco',
      'Dual mobility: cabeça interna (22/28mm) + cabeça externa (polietileno) que articula com metal-back',
      'Cerâmica-polietileno ou cerâmica-cerâmica: sem relação direta com luxação',
    ],
  },
  {
    id: 'precautions',
    title: 'Precauções Pós-operatórias',
    content: [
      'Via posterior — precauções clássicas:',
      '  - Evitar flexão >90°, adução além da linha média, rotação interna',
      '  - Não cruzar as pernas, não sentar em cadeiras baixas',
      '  - Elevar a sanita, usar almofada no carro',
      '  - Duração: 6-12 semanas (controverso)',
      'Via anterior — precauções:',
      '  - Evitar extensão + rotação externa excessiva',
      '  - Menor restrição funcional geralmente',
      'Tendência atual: fast-track sem precauções rígidas (controvérsia)',
      'Precauções prolongadas: sem evidência forte de redução de luxação vs sem precauções',
      'Exercícios de fortalecimento dos abdutores: essenciais a médio prazo',
      'Terapia ocupacional: treino de AVDs seguras',
    ],
  },
];

export default function HipDislocationRiskGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('risk-factors');

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
      <Alert type="info">Zona segura de Lewinnek: anteversao 15+/-10 graus, inclinacao 40+/-10 graus. Cabecas maiores (36mm+) e dual mobility aumentam significativamente a estabilidade.</Alert>
      <Alert type="caution">Componentes dentro da zona segura de Lewinnek nao eliminam completamente o risco de luxacao. Fatores do paciente (neuromuscular, compliance) podem ser mais determinantes.</Alert>
    </div>
  );
}
