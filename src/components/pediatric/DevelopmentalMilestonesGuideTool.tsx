import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: '0-6months',
    title: '0-6 Meses',
    content: [
      '0-1 mês: movimentos reflexos, flexão fisiológica dos membros',
      '2 meses: controlo cefálico intermitente em prono, seguir objetos com os olhos',
      '3 meses: controlo cefálico sustentado em prono e sentado com suporte',
      '4 meses: suporte em antebraços em prono, agarra objetos voluntariamente',
      '5 meses: rola de prono para supino, suporte nos braços estendidos',
      '6 meses: senta-se com apoio, rola em ambas as direções',
      'Reflexos primitivos desaparecem: Moro (3-6m), preensão palmar (3-4m), tónico cervical assimétrico (4-6m)',
      'Persistência de reflexos primitivos além dos 6 meses: sinal de alerta neurológico',
    ],
  },
  {
    id: '6-12months',
    title: '6-12 Meses',
    content: [
      '7 meses: senta-se sem apoio, transfere objetos entre mãos',
      '8 meses: senta-se estável, reações de proteção laterais',
      '9 meses: gatinha (crawling), puxa para sentado',
      '10 meses: puxa-se para ficar de pé (pull to stand)',
      '11 meses: anda com apoio lateral (cruising), pinça inferior',
      '12 meses: pode dar os primeiros passos independentes, pinça fina',
      'Variação normal: gatinhar pode não ocorrer em todas as crianças (bottom shuffling é variante normal)',
      'Assimetria persistente na função dos membros: investigar',
    ],
  },
  {
    id: '12-18months',
    title: '12-18 Meses',
    content: [
      '12-15 meses: marcha independente (variação normal ampla)',
      '15 meses: anda bem sozinho, agacha e levanta',
      '18 meses: corre (base alargada), sobe escadas com apoio',
      '18 meses: chuta bola, empilha 3-4 cubos',
      'Marcha inicial: base alargada, braços em "guarda alta", passos curtos, cadência irregular',
      'Marcha madura: desenvolve-se gradualmente até aos 3-4 anos',
      'Geno varo fisiológico: máximo ao nascimento, corrige até 18-24 meses',
      'Limite de alerta: não caminhar aos 18 meses — investigar',
    ],
  },
  {
    id: 'concerning',
    title: 'Sinais de Alerta',
    content: [
      'Não caminhar independentemente aos 18 meses',
      'Marcha em pontas de pés persistente (>2 anos): descartar paralisia cerebral, encurtamento do Aquiles',
      'Assimetria persistente de movimentos ou força',
      'Hipotonia significativa ou espasticidade',
      'Regressão de marcos motores previamente adquiridos',
      'Persistência de reflexos primitivos além dos 6-8 meses',
      'Preferência manual antes dos 18 meses (sugere hemiparésia contralateral)',
      'Não senta sem apoio aos 9 meses',
      'Criança "muito quieta" ou "muito mole" — investigar hipotonia',
    ],
  },
  {
    id: 'ortho-implications',
    title: 'Implicações Ortopédicas',
    content: [
      'Geno varo fisiológico: normal até 18-24 meses, depois transição para valgo',
      'Geno valgo fisiológico: pico aos 3-4 anos, normaliza até 7-8 anos',
      'In-toeing: metatarso aduto (nascimento-2a), torção tibial interna (1-3a), anteversão femoral (3-8a)',
      'Pé plano flexível: normal até 6-8 anos, arco desenvolve-se gradualmente',
      'Pé plano rígido: sempre patológico — investigar coalizão tarsal, tálus vertical',
      'Geno varo patológico: doença de Blount, raquitismo — investigar se unilateral, progressivo ou >2 anos',
      'Discrepância de membros: monitorizar se >1cm, investigar etiologia',
      'Claudicação em criança: sempre patológica — investigar (sinovite transitória, Perthes, artrite séptica, tumor)',
    ],
  },
];

export default function DevelopmentalMilestonesGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('0-6months');

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
      <Alert type="info">Geno varo fisiologico e normal ate 18-24 meses. Geno valgo fisiologico atinge pico aos 3-4 anos. Pe plano flexivel e normal ate 6-8 anos. A maioria das variacoes posturais normaliza espontaneamente.</Alert>
      <Alert type="caution">Claudicacao em crianca e SEMPRE patologica e requer investigacao. Preferencia manual antes dos 18 meses sugere hemiparesia contralateral.</Alert>
    </div>
  );
}
