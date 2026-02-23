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
      'Tipo IVc: fratura com envolvimento de &gt;50% da superfície articular + subluxação volar',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento',
    content: [
      'Mallet tendinoso (Tipo I): tala em extensão/hiperextensão da IFD por 6-8 semanas contínuas',
      'Após 6-8 semanas: desmame progressivo com tala noturna por mais 4 semanas',
      'NUNCA permitir flexão da IFD durante tratamento (reinicia contagem se flexionar)',
      'Mallet ósseo (&lt;30% articular, sem subluxação): tala em extensão 6-8 semanas',
      'Mallet ósseo (&gt;30% articular ou subluxação volar): cirurgia - fixação com extensão block pinning ou RAFI',
      'Tipo II (aberto): reparação do tendão + tala',
      'Tipo III: reconstrução tecidual + reparação tendinosa',
      'Mallet crônico (&gt;3 meses): tala pode ainda ser tentada; cirurgia (Fowler tenotomia) se refratário',
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
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Mallet Finger — Lesão do Extensor na Falange Distal</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Ruptura do tendão extensor na inserção na falange distal (zona I), geralmente por flexão forçada da IFD. Causa queda passiva da falange distal. Pode ter fragmento ósseo avulsionado.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda deformidade em flexão da IFD após trauma direto. Classificação de Doyle determina tratamento. Avulsões ósseas &gt;30% da superfície articular podem necessitar fixação.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tendão (Doyle I-III): tala extensão IFD 6-8 semanas ininterruptas — 1 segundo sem tala reinicia contagem. Avulsão óssea &lt;30% articular: tala. &gt;30% ou subluxação volar: fixação cirúrgica. Não imobilizar IFP.</p>
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
      <Alert type="info">Compliance do paciente com a tala e o fator mais importante para o sucesso do tratamento conservador.</Alert>
      <Alert type="caution">Se a IFD flexionar durante o tratamento com tala, reiniciar a contagem de 6-8 semanas do zero.</Alert>
    </div>
  );
}
