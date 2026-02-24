import { useState } from 'react';
import { tibialPlateauFractureClassification } from '@/data/knee/tibial-plateau-fracture.ts';
import { Alert } from '@/components/ui/Alert.tsx';

export default function TibialPlateauFractureTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? tibialPlateauFractureClassification.grades.find((g) => g.id === selected) : null;
  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Classificação de Schatzker — Fraturas do Planalto Tibial</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Seis tipos de fratura do planalto tibial em ordem crescente de gravidade e energia de trauma. Correlaciona com o mecanismo, comprometimento articular e prognóstico funcional do joelho.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura do planalto tibial. Guia a abordagem cirúrgica, escolha do implante e planejamento de enxerto ósseo.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tipos I-III: unicondilares, energia moderada — fixação com parafusos ± enxerto ± placa lateral. Tipos IV-VI: alta energia, bicondilar — dupla placa, frequentemente com fixação externa provisória e ORIF em 2 tempos.</p>
          </div>
        </div>
      </div>
      {/* Manual Images */}
      <div className="pt-2 pb-4 border-b border-[rgba(212,175,55,0.15)]">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Manual SBOT — Imagens de Referência (pp. 180, 184)</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: '/images/manual-trauma/page180_img1.png', alt: 'Schatzker I–VI — tipos de fratura do planalto' },
            { src: '/images/manual-trauma/page184_img1.png', alt: 'Fixação cirúrgica do planalto tibial' },
          ].map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display='none'; }}
              />
              <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {tibialPlateauFractureClassification.grades.map((g) => (
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
      {tibialPlateauFractureClassification.clinicalPearl && <Alert type="info">{tibialPlateauFractureClassification.clinicalPearl}</Alert>}
      {tibialPlateauFractureClassification.pitfall && <Alert type="caution">{tibialPlateauFractureClassification.pitfall}</Alert>}
    </div>
  );
}
