import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'types',
    title: 'Tipos',
    content: [
      'Mallet tendinoso: ruptura/avulsão do tendão extensor terminal na falange distal',
      'Mallet ósseo: avulsão de fragmento ósseo da base da falange distal com tendão',
      'Mecanismo: flexão forçada da IFD contra resistência (bola, tucking sheets)',
      'Resultado: perda da extensão ativa da IFD com extensão passiva preservada',
      'Dedo mais comum: dedo médio ou anelar',
    ],
  },
  {
    id: 'doyle',
    title: 'Classificação de Doyle',
    content: [
      'Tipo I: lesão tendinosa fechada (mais comum)',
      'Tipo II: laceração do tendão extensor na zona I (aberta)',
      'Tipo III: lesão aberta com perda de substância (pele + tendão)',
      'Tipo IVa: fratura de Salter-Harris I/II da falange distal (criança)',
      'Tipo IVb: fratura com envolvimento de 20-50% da superfície articular',
      'Tipo IVc: fratura com envolvimento de >50% da superfície articular + subluxação volar',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'Mallet tendinoso (Tipo I): tala em extensão/hiperextensão da IFD por 6-8 semanas contínuas',
      'Após 6-8 semanas: desmame progressivo com tala noturna por mais 4 semanas',
      'NUNCA permitir flexão da IFD durante tratamento (reinicia contagem se flexionar)',
      'Mallet ósseo (<30% articular, sem subluxação): tala em extensão 6-8 semanas',
      'Mallet ósseo (>30% articular ou subluxação volar): cirurgia - fixação com extensão block pinning ou RAFI',
      'Tipo II (aberto): reparação do tendão + tala',
      'Tipo III: reconstrução tecidual + reparação tendinosa',
      'Mallet crônico (>3 meses): tala pode ainda ser tentada; cirurgia (Fowler tenotomia) se refratário',
    ],
  },
  {
    id: 'complications',
    title: 'Complicações',
    content: [
      'Deformidade em pescoço de cisne (swan neck): se não tratado, desequilíbrio extensor',
      'Mecanismo: perda do extensor terminal → hiperextensão compensatória da IFP',
      'Extensão lag residual da IFD (até 10° aceitável)',
      'Maceração cutânea dorsal pela tala (cuidados com a pele)',
      'Não consolidação do fragmento ósseo (raro se bem tratado)',
      'Artrose da IFD a longo prazo em fraturas articulares',
    ],
  },
];

export default function MalletFingerGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('types');

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
      <Alert type="info">Compliance do paciente com a tala e o fator mais importante para o sucesso do tratamento conservador.</Alert>
      <Alert type="caution">Se a IFD flexionar durante o tratamento com tala, reiniciar a contagem de 6-8 semanas do zero.</Alert>
    </div>
  );
}
