import { useState } from 'react';
import { icrsCartilageData } from '@/data/knee/icrs-cartilage.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const colorDot: Record<string, string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

/** Visual cartilage depth diagram as text representation */
const depthDiagram: Record<string, { filled: number; total: number; label: string }> = {
  'grade-0':  { filled: 0, total: 4, label: 'Cartilagem intacta' },
  'grade-1':  { filled: 1, total: 4, label: 'Superficie comprometida' },
  'grade-2':  { filled: 2, total: 4, label: '<50% da espessura' },
  'grade-3a': { filled: 3, total: 4, label: '>50% sem camada calcificada' },
  'grade-3b': { filled: 3, total: 4, label: 'Ate camada calcificada' },
  'grade-3c': { filled: 4, total: 4, label: 'Ate osso subcondral' },
  'grade-3d': { filled: 2, total: 4, label: 'Blistering (descolamento)' },
  'grade-4a': { filled: 4, total: 4, label: 'Perfuracao subcondral <10mm' },
  'grade-4b': { filled: 4, total: 4, label: 'Perfuracao subcondral >10mm' },
};

const gradeGroups = [
  { label: 'Graus 0-2 (Normal a Anormal)', ids: ['grade-0', 'grade-1', 'grade-2'] },
  { label: 'Grau 3 (Severamente Anormal)', ids: ['grade-3a', 'grade-3b', 'grade-3c', 'grade-3d'] },
  { label: 'Grau 4 (Perfuracao Subcondral)', ids: ['grade-4a', 'grade-4b'] },
];

export default function IcrsCartilageTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? icrsCartilageData.grades.find((g) => g.id === selected) : null;
  const diagram = selected ? depthDiagram[selected] : null;

  return (
    <div className="space-y-6">
      {/* Context block */}
      {icrsCartilageData.epidemiology && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            Epidemiologia
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {icrsCartilageData.epidemiology}
          </p>
        </div>
      )}

      {/* Correlation table */}
      <div className="bg-[#111111] border border-slate-700 rounded-xl p-5 space-y-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Correlacao de Classificacoes
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-2 pr-3 text-slate-400 font-medium">ICRS</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Outerbridge</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">OARSI</th>
                <th className="text-left py-2 pl-3 text-slate-400 font-medium">Descricao</th>
              </tr>
            </thead>
            <tbody>
              {[
                { icrs: '0', outer: 'I', oarsi: '0-1', desc: 'Normal' },
                { icrs: '1', outer: 'I', oarsi: '0-1', desc: 'Quase normal' },
                { icrs: '2', outer: 'II', oarsi: '2-3', desc: 'Anormal (<50%)' },
                { icrs: '3a-3c', outer: 'III', oarsi: '4-5', desc: 'Severamente anormal (>50%)' },
                { icrs: '3d', outer: 'III', oarsi: '4', desc: 'Blistering' },
                { icrs: '4a', outer: 'IV', oarsi: '6', desc: 'Perfuracao <10mm' },
                { icrs: '4b', outer: 'IV', oarsi: '6', desc: 'Perfuracao >10mm' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-800 last:border-0">
                  <td className="py-1.5 pr-3 font-semibold text-[#D4AF37]">{row.icrs}</td>
                  <td className="py-1.5 px-3">{row.outer}</td>
                  <td className="py-1.5 px-3">{row.oarsi}</td>
                  <td className="py-1.5 pl-3 text-slate-400">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade selector grouped */}
      <div className="space-y-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Selecione o Grau
        </p>
        {gradeGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs text-slate-500 mb-2 pl-1">{group.label}</p>
            <div className="grid gap-2">
              {group.ids.map((id) => {
                const g = icrsCartilageData.grades.find((gr) => gr.id === id);
                if (!g) return null;
                return (
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
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      {active && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-5 animate-fade-in">
          <div className="flex items-start gap-4">
            {/* Depth diagram */}
            {diagram && (
              <div className="flex-shrink-0 flex flex-col items-center gap-0.5">
                <p className="text-[10px] text-slate-500 mb-1 text-center">Secao Condral</p>
                {/* Layers: surface → calcified → subchondral */}
                {['Sup.', 'Med.', 'Prof.', 'Calc.'].map((lyr, i) => (
                  <div
                    key={i}
                    className="w-10 h-4 rounded-sm border border-slate-600 flex items-center justify-center"
                    style={{
                      backgroundColor:
                        i < diagram.filled
                          ? active.colorCode === 'safe'
                            ? 'rgba(34,197,94,0.25)'
                            : active.colorCode === 'caution'
                            ? 'rgba(245,158,11,0.25)'
                            : 'rgba(239,68,68,0.30)'
                          : 'rgba(255,255,255,0.04)',
                    }}
                  >
                    <span className="text-[8px] text-slate-500">{lyr}</span>
                  </div>
                ))}
                <div className="w-10 h-4 rounded-sm bg-slate-600/50 flex items-center justify-center mt-0.5">
                  <span className="text-[8px] text-slate-400">Osso</span>
                </div>
                <p className="text-[9px] text-slate-500 mt-1 text-center leading-tight max-w-[44px]">
                  {diagram.label}
                </p>
              </div>
            )}

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: colorDot[active.colorCode] }}
                />
                <h3 className="text-lg font-semibold text-slate-100 leading-tight">{active.label}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{active.description}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">
              Criterios
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

      {/* Surgical basis */}
      {icrsCartilageData.surgicalBasis && (
        <div className="bg-[#111111] border border-slate-700 rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Indicacoes Cirurgicas
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {icrsCartilageData.surgicalBasis}
          </p>
        </div>
      )}

      {icrsCartilageData.clinicalPearl && (
        <Alert type="info">{icrsCartilageData.clinicalPearl}</Alert>
      )}
      {icrsCartilageData.pitfall && (
        <Alert type="caution">{icrsCartilageData.pitfall}</Alert>
      )}
    </div>
  );
}
