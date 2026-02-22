import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'principles',
    title: 'Princípios',
    content: [
      'Manipulação seriada e gesso corretivo é o tratamento de primeira linha para pé torto congénito',
      'Baseado na compreensão da anatomia funcional: o calcâneo está bloqueado sob o tálus em equino, varo e rotação interna',
      'A correção segue uma sequência específica: cavus → adução → varo → equino (nunca pronação!)',
      'O fulcro da manipulação é a cabeça do tálus (palpada lateralmente)',
      'Abdução do antepé sobre o tálus estabilizado corrige simultaneamente o varo e a adução',
      'Taxa de sucesso >95% quando aplicado corretamente por profissional treinado',
    ],
  },
  {
    id: 'casting',
    title: 'Sequência de Gessos',
    content: [
      '1º gesso: corrigir o cavus (supinar o antepé para alinhar com o retropé)',
      '2º-5º gessos: abduzir o pé sobre a cabeça do tálus estabilizada com pressão do polegar',
      'Cada gesso mantém a correção obtida e progride gradualmente (10-15° por gesso)',
      'Gessos longos (acima do joelho) com joelho fletido a 90°',
      'Trocar gessos semanalmente (5-7 dias entre cada gesso)',
      'Média: 5-7 gessos para correção completa (exceto equino)',
      'O equino é o ÚLTIMO componente a ser corrigido (nunca forçar a dorsiflexão antes de corrigir a abdução)',
      'Após abdução completa (60-70° de abdução), avaliar dorsiflexão',
    ],
  },
  {
    id: 'tenotomy',
    title: 'Tenotomia de Aquiles',
    content: [
      'Necessária em ~85% dos casos para corrigir o equino residual',
      'Indicação: dorsiflexão <15° após correção da adução e do varo',
      'Tenotomia percutânea com lâmina de bisturi (técnica minimamente invasiva)',
      'Realizada em ambiente ambulatorial sob anestesia local',
      'Seccionar o tendão de Aquiles completamente (pop audível)',
      'Aplicar gesso final em máxima dorsiflexão e 60-70° de abdução',
      'Manter último gesso por 3 semanas (para cicatrização do tendão)',
      'O tendão regenera com comprimento adequado em 3-4 semanas',
    ],
  },
  {
    id: 'bracing',
    title: 'Ortótese de Abdução (Denis-Brown)',
    content: [
      'Iniciar ortótese de abdução (barra com sapatos) imediatamente após remoção do último gesso',
      'Uso 23 horas/dia durante os primeiros 3 meses',
      'Depois: uso noturno + sestas (12-14h/dia) até aos 4-5 anos de idade',
      'Pé afetado: 60-70° de rotação externa na barra',
      'Pé não afetado (bilateral): 40° de rotação externa',
      'Largura da barra = largura dos ombros da criança',
      'Adesão à ortótese é o fator mais importante para prevenir recidiva',
      'Taxa de recidiva SEM ortótese: ~80%. COM ortótese: ~15-20%',
    ],
  },
  {
    id: 'recurrence',
    title: 'Recidiva',
    content: [
      'Recidiva mais comum nos primeiros 2-3 anos de vida',
      'Sinais: reaparecimento de supinação dinâmica, varo do retropé, equino',
      'Causa mais comum: não adesão à ortótese',
      'Tratamento da recidiva leve: novo ciclo de gessos seriados (1-3 gessos)',
      'Recidiva com supinação dinâmica em >2.5 anos: transferência do tibial anterior',
      'Transferência do tibial anterior: do 1º cuneiforme para o 3º cuneiforme (corrige supinação)',
      'Recidiva tardia severa: pode necessitar osteotomia (cubóide lateral closing wedge ou cuneiforme medial opening wedge)',
      'Raramente: liberação cirúrgica extensa (reservada para falhas múltiplas)',
    ],
  },
];

export default function PonsetiMethodGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('principles');

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
      <Alert type="info">A sequencia de correcao e fundamental: primeiro o cavus, depois aducao/varo (simultaneamente com abducao), e por ultimo o equino. Nunca forcar dorsiflexao antes de corrigir a aducao.</Alert>
      <Alert type="caution">Adesao a ortotese e o fator prognostico mais importante. Educar os pais extensivamente sobre a importancia do uso continuo.</Alert>
    </div>
  );
}
