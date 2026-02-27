import { useState } from 'react';
import { palmerTfccClassificationData } from '@/data/hand/palmer-tfcc-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const colorDot: Record<string, string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

const systemGroups = [
  {
    system: 'Palmer Classe 1 (Traumática)',
    year: '1989',
    ids: ['palmer-1a', 'palmer-1b', 'palmer-1c', 'palmer-1d'],
  },
  {
    system: 'Palmer Classe 2 (Degenerativa)',
    year: '1989',
    ids: ['palmer-2a', 'palmer-2b', 'palmer-2c', 'palmer-2d', 'palmer-2e'],
  },
];

export default function PalmerTfccClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected
    ? palmerTfccClassificationData.grades.find((g) => g.id === selected)
    : null;

  return (
    <div className="space-y-6">
      {palmerTfccClassificationData.epidemiology && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            Epidemiologia
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {palmerTfccClassificationData.epidemiology}
          </p>
        </div>
      )}

      {palmerTfccClassificationData.mechanism && (
        <div className="bg-[#111111] border border-slate-700 rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Mecanismo de Lesão
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {palmerTfccClassificationData.mechanism}
          </p>
        </div>
      )}

      {systemGroups.map((group) => {
        const gradesInGroup = palmerTfccClassificationData.grades.filter((g) =>
          group.ids.includes(g.id)
        );
        return (
          <div key={group.system}>
            <div className="flex items-baseline gap-2 mb-3">
              <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                {group.system}
              </p>
              <span className="text-xs text-slate-500">({group.year})</span>
            </div>
            <div className="grid gap-2">
              {gradesInGroup.map((g) => (
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
        );
      })}

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
              Critérios Diagnósticos
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
                Prognóstico
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{active.prognosis}</p>
            </div>
          )}
        </div>
      )}

      {palmerTfccClassificationData.surgicalBasis && (
        <div className="bg-[#111111] border border-emerald-900/40 rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Base Cirúrgica
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {palmerTfccClassificationData.surgicalBasis}
          </p>
        </div>
      )}

      {palmerTfccClassificationData.clinicalPearl && (
        <Alert type="info">{palmerTfccClassificationData.clinicalPearl}</Alert>
      )}
      {palmerTfccClassificationData.pitfall && (
        <Alert type="caution">{palmerTfccClassificationData.pitfall}</Alert>
      )}
    </div>
  );
}
