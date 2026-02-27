import { useState } from 'react';
import { herbertScaphoidClassificationData } from '@/data/hand/herbert-scaphoid-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const colorDot: Record<string, string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

export default function HerbertScaphoidClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected
    ? herbertScaphoidClassificationData.grades.find((g) => g.id === selected)
    : null;

  return (
    <div className="space-y-6">
      {/* Epidemiology block */}
      {herbertScaphoidClassificationData.epidemiology && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            Epidemiologia
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {herbertScaphoidClassificationData.epidemiology}
          </p>
        </div>
      )}

      {/* Mechanism block */}
      {herbertScaphoidClassificationData.mechanism && (
        <div className="bg-[#111111] border border-slate-700 rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Mecanismo / Fisiopatologia
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {herbertScaphoidClassificationData.mechanism}
          </p>
        </div>
      )}

      {/* Grade selector */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
          Selecione o Tipo
        </p>
        <div className="grid gap-2">
          {herbertScaphoidClassificationData.grades.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelected(selected === g.id ? null : g.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selected === g.id
                  ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: colorDot[g.colorCode] }}
                />
                <span className="font-medium text-slate-100">{g.label}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1 pl-6">{g.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Detail expansion */}
      {active && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-5 animate-fade-in">
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: colorDot[active.colorCode] }}
            />
            <h3 className="text-lg font-semibold text-slate-100">{active.label}</h3>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">
              Criterios Diagnosticos
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {active.criteria.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">
              Tratamento
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{active.treatment}</p>
          </div>

          {active.prognosis && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                Prognostico
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{active.prognosis}</p>
            </div>
          )}
        </div>
      )}

      {/* Surgical basis block */}
      {herbertScaphoidClassificationData.surgicalBasis && (
        <div className="bg-[#111111] border border-emerald-800/40 rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Base Cirurgica
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {herbertScaphoidClassificationData.surgicalBasis}
          </p>
        </div>
      )}

      {herbertScaphoidClassificationData.clinicalPearl && (
        <Alert type="info">{herbertScaphoidClassificationData.clinicalPearl}</Alert>
      )}
      {herbertScaphoidClassificationData.pitfall && (
        <Alert type="caution">{herbertScaphoidClassificationData.pitfall}</Alert>
      )}
    </div>
  );
}
