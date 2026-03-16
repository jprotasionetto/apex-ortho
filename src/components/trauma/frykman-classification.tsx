import { useState } from 'react';
import { frykmanClassificationData } from '@/data/trauma/frykman-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function FrykmanClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? frykmanClassificationData.grades.find((g) => g.id === selected) : null;

  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação de Frykman — Fraturas do Rádio Distal</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Classificação clássica (1967) das fraturas do rádio distal em 8 tipos baseados no envolvimento articular (radiocarpal e/ou ARUD) e presença de fratura ulnar associada. Tipos ímpares = sem fratura ulnar; pares = com fratura ulnar.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura do rádio distal. Complementar com AO (23-A/B/C) e Fernandez (mecanismo I-V) para planejamento cirúrgico completo.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância</p>
            <p className="text-xs text-gray-300 leading-relaxed">Muito cobrada em provas: I-II (extra-articular), III-IV (radiocarpal), V-VI (ARUD), VII-VIII (ambas). Pares = com ulna = pior prognóstico.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Manual SBOT — Rádio Distal</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { src: '/images/manual-trauma/page102_img1.png', caption: 'Fratura do rádio distal — radiografia' },
            { src: '/images/manual-trauma/page104_img1.png', caption: 'Classificação — rádio distal' },
            { src: '/images/manual-trauma/page113_img1.png', caption: 'Fixação com placa volar' },
          ].map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {frykmanClassificationData.grades.map((g) => (
          <button key={g.id} onClick={() => setSelected(g.id)} className={`text-left p-4 rounded-xl border transition-all ${selected === g.id ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
            <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: g.colorCode === 'safe' ? '#22C55E' : g.colorCode === 'caution' ? '#F59E0B' : '#EF4444' }} /><span className="font-medium text-slate-100">{g.label}</span></div>
            <p className="text-sm text-slate-400 mt-1">{g.description}</p>
          </button>
        ))}
      </div>
      {active && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-slate-100">{active.label}</h3>
          <div><h4 className="text-sm font-medium text-slate-400 mb-2">Criterios</h4><ul className="list-disc list-inside space-y-1 text-sm text-slate-300">{active.criteria.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
          <div><h4 className="text-sm font-medium text-slate-400 mb-1">Tratamento</h4><p className="text-sm text-slate-300">{active.treatment}</p></div>
          {active.prognosis && <div><h4 className="text-sm font-medium text-slate-400 mb-1">Prognostico</h4><p className="text-sm text-slate-300">{active.prognosis}</p></div>}
        </div>
      )}
      {frykmanClassificationData.clinicalPearl && <Alert type="info">{frykmanClassificationData.clinicalPearl}</Alert>}
      {frykmanClassificationData.pitfall && <Alert type="caution">{frykmanClassificationData.pitfall}</Alert>}
    </div>
  );
}
