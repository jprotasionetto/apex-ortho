import { useState } from 'react';
import { rockwoodClassificationData } from '@/data/shoulder/rockwood-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const manualImages = [
  { src: '/images/manual-trauma/page61_img1.png', caption: 'Classificação de Rockwood — Articulação Acromioclavicular (1)' },
  { src: '/images/manual-trauma/page61_img2.png', caption: 'Classificação de Rockwood — AC joint, complicações e graus (2)' },
  { src: '/images/manual-trauma/page62_img1.png', caption: 'Figura 2 — Rockwood AC joint, graus de separação' },
];

export default function RockwoodClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? rockwoodClassificationData.grades.find((g) => g.id === selected) : null;

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação de Rockwood — Lesões da Articulação Acromioclavicular</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Classifica as lesões da articulação acromioclavicular (AC) em 6 tipos pela gravidade da separação e direção do deslocamento. É o sistema mais adotado mundialmente para lesões AC.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda separação acromioclavicular traumática. Avalia estabilidade ligamentar (CC e AC) e necessidade de intervenção cirúrgica vs conservadora.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tipos I-II: tratamento conservador (tipoia 2-3 semanas). Tipo III: controverso — conservador para maioria, cirurgia em atletas ou instabilidade horizontal. Tipos IV-VI: cirurgia obrigatória (reconstrução ligamentar).</p>
          </div>
        </div>
      </div>
      {/* Manual SBOT — Imagens de Referência */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Articulação Acromioclavicular — Manual SBOT (pp. 61–62)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {manualImages.map((img) => (
            <div key={img.caption} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]">
                <p className="text-xs text-gray-400 leading-tight">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        {rockwoodClassificationData.grades.map((g) => (
          <button key={g.id} onClick={() => setSelected(g.id)} className={`text-left p-4 rounded-xl border transition-all ${selected === g.id ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
            <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: g.colorCode === 'safe' ? '#22C55E' : g.colorCode === 'caution' ? '#F59E0B' : g.colorCode === 'danger' ? '#EF4444' : '#3B82F6' }} /><span className="font-medium text-slate-100">{g.label}</span></div>
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
      {rockwoodClassificationData.clinicalPearl && <Alert type="info">{rockwoodClassificationData.clinicalPearl}</Alert>}
      {rockwoodClassificationData.pitfall && <Alert type="caution">{rockwoodClassificationData.pitfall}</Alert>}
    </div>
  );
}
