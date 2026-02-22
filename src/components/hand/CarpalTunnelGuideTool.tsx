import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'clinical',
    title: 'Clínica',
    content: [
      'Compressão do nervo mediano no túnel do carpo',
      'Sintomas: parestesias/dormência no território do mediano (polegar, indicador, médio, metade radial do anelar)',
      'Sintomas noturnos característicos (acroparestesias noturnas)',
      'Teste de Phalen: flexão máxima do punho por 60s → reproduz sintomas (sensibilidade 70%)',
      'Sinal de Tinel: percussão sobre o túnel do carpo → parestesias distais (sensibilidade 50%)',
      'Teste de Durkan: compressão direta sobre o túnel do carpo por 30s (mais sensível que Tinel)',
      'Atrofia tenar (eminência tenar) em casos avançados',
      'Fraqueza da oponência e abdução do polegar em casos severos',
    ],
  },
  {
    id: 'electrodiagnosis',
    title: 'Eletrodiagnóstico',
    content: [
      'Estudo de condução nervosa (NCS): gold standard para confirmação',
      'Latência sensitiva distal do mediano >3.5ms (anormal)',
      'Latência motora distal do mediano >4.2ms (anormal)',
      'Diferença de latência sensitiva mediano-ulnar >0.4ms',
      'EMG: sinais de denervação na musculatura tenar em casos severos',
      'Classificação eletrofisiológica: leve (sensitivo), moderada (sensitivo + motor), severa (ausência de resposta sensitiva + denervação)',
      'Ecografia: área de secção transversal do mediano >10mm² no inlet do túnel',
    ],
  },
  {
    id: 'conservative',
    title: 'Tratamento Conservador',
    content: [
      'Imobilização noturna com tala em posição neutra do punho (0-5° extensão)',
      'Duração: 4-6 semanas de uso noturno contínuo',
      'Infiltração de corticosteroide (metilprednisolona/triancinolona) no túnel do carpo',
      'Técnica: inserção ulnar ao palmar longo, proximal à prega do punho, 30-45°',
      'Eficácia da infiltração: alívio em 70-80%, recidiva em 50% em 1 ano',
      'AINE: benefício limitado',
      'Modificação ergonômica das atividades',
      'Indicado para: sintomas leves-moderados, gestantes, recusa cirúrgica',
    ],
  },
  {
    id: 'surgical',
    title: 'Tratamento Cirúrgico',
    content: [
      'Indicação: falha do conservador, atrofia tenar, denervação na EMG, sintomas severos/constantes',
      'Release aberto: incisão longitudinal alinhada com borda radial do 4º dedo',
      'Secção completa do retináculo dos flexores (ligamento transverso do carpo)',
      'Release endoscópico: 1 ou 2 portais, visibilização endoscópica',
      'Resultados equivalentes entre aberto e endoscópico a longo prazo',
      'Endoscópico: retorno mais rápido ao trabalho, menor dor na cicatriz',
      'Aberto: menor risco de lesão nervosa inadvertida',
      'Pillar pain: dor nas eminências tenar/hipotenar, comum nos primeiros 3 meses',
      'Retorno ao trabalho: 2-6 semanas dependendo da atividade laboral',
    ],
  },
];

export default function CarpalTunnelGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('clinical');

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
      <Alert type="info">Pillar pain pos-operatorio e comum e auto-limitado - avisar o paciente previamente.</Alert>
      <Alert type="caution">Atrofia tenar e indicacao de cirurgia urgente - recuperacao motora pode ser incompleta se tardia.</Alert>
    </div>
  );
}
