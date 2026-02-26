import { useState } from 'react';
import { halluxValgusClassificationData } from '@/data/foot/hallux-valgus-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

type GradeId = 'grade-1-mild' | 'grade-2-moderate' | 'grade-3-severe' | 'grade-4-arthritic';

const colorDot: Record<string, string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

const severityBar: Record<GradeId, { width: string; color: string; label: string }> = {
  'grade-1-mild':      { width: 'w-1/4',  color: 'bg-green-500',  label: 'Leve' },
  'grade-2-moderate':  { width: 'w-2/4',  color: 'bg-yellow-500', label: 'Moderado' },
  'grade-3-severe':    { width: 'w-3/4',  color: 'bg-orange-500', label: 'Severo' },
  'grade-4-arthritic': { width: 'w-full', color: 'bg-red-500',    label: 'Severo + Artrose' },
};

/** Derive grade from HVA + IMA inputs (returns null if out of all ranges) */
function deriveGrade(hva: number, ima: number): GradeId | null {
  if (hva < 15 && ima < 9) return null; // Normal
  if (hva <= 20 && ima < 12) return 'grade-1-mild';
  if (hva <= 40 && ima <= 16) return 'grade-2-moderate';
  return 'grade-3-severe';
}

export default function HalluxValgusClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hva, setHva] = useState<string>('');
  const [ima, setIma] = useState<string>('');
  const [arthrosis, setArthrosis] = useState(false);

  const hvaNum = parseFloat(hva);
  const imaNum = parseFloat(ima);
  const anglesValid = !isNaN(hvaNum) && !isNaN(imaNum) && hvaNum >= 0 && imaNum >= 0;

  let derivedId: string | null = null;
  if (anglesValid) {
    const base = deriveGrade(hvaNum, imaNum);
    if (arthrosis && (hvaNum > 40 || base === 'grade-3-severe')) {
      derivedId = 'grade-4-arthritic';
    } else {
      derivedId = base;
    }
  }

  const activeId = derivedId ?? selected;
  const active = activeId
    ? halluxValgusClassificationData.grades.find((g) => g.id === activeId)
    : null;
  const bar = activeId ? severityBar[activeId as GradeId] : null;

  return (
    <div className="space-y-6">
      {/* Epidemiology block */}
      {halluxValgusClassificationData.epidemiology && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-5 space-y-2">
          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            Epidemiologia
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {halluxValgusClassificationData.epidemiology}
          </p>
        </div>
      )}

      {/* Angle input section */}
      <div className="bg-[#111111] border border-slate-700 rounded-xl p-5 space-y-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Inserir Angulos Radiograficos (em carga)
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              HVA – Angulo Hallux Valgus (°)
              <span className="ml-1 text-slate-500">(normal &lt;15°)</span>
            </label>
            <input
              type="number"
              min={0}
              max={90}
              step={0.5}
              value={hva}
              onChange={(e) => { setHva(e.target.value); setSelected(null); }}
              placeholder="Ex: 28"
              className="w-full bg-[#0A0A0A] border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              IMA – Angulo Intermetatarsal (°)
              <span className="ml-1 text-slate-500">(normal &lt;9°)</span>
            </label>
            <input
              type="number"
              min={0}
              max={40}
              step={0.5}
              value={ima}
              onChange={(e) => { setIma(e.target.value); setSelected(null); }}
              placeholder="Ex: 14"
              className="w-full bg-[#0A0A0A] border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={arthrosis}
            onChange={(e) => setArthrosis(e.target.checked)}
            className="w-4 h-4 accent-[#D4AF37]"
          />
          <span className="text-sm text-slate-300">Artrose da 1a MTF presente</span>
        </label>

        {/* Derived result */}
        {anglesValid && derivedId === null && (
          <p className="text-sm text-green-400">Angulos dentro da normalidade (HVA &lt;15° e IMA &lt;9°). Sem indicacao cirurgica.</p>
        )}
        {anglesValid && derivedId && active && (
          <div className="pt-1">
            <p className="text-xs text-slate-400 mb-1">Classificacao derivada:</p>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: colorDot[active.colorCode] }}
              />
              <span className="font-semibold text-slate-100">{active.label}</span>
            </div>
          </div>
        )}
      </div>

      {/* Severity visual bar */}
      {bar && (
        <div className="space-y-1">
          <p className="text-xs text-slate-400 uppercase tracking-widest">Gravidade</p>
          <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${bar.width} ${bar.color}`} />
          </div>
          <p className="text-xs text-slate-400 text-right">{bar.label}</p>
        </div>
      )}

      {/* Manual grade selector (fallback / override) */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
          Ou selecione o grau manualmente
        </p>
        <div className="grid gap-2">
          {halluxValgusClassificationData.grades.map((g) => (
            <button
              key={g.id}
              onClick={() => { setSelected(selected === g.id ? null : g.id); setHva(''); setIma(''); }}
              className={`text-left p-4 rounded-xl border transition-all ${
                activeId === g.id
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
              Criterios Radiograficos
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {active.criteria.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">
              Orientacao de Tratamento
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

      {/* DASA reference table */}
      <div className="bg-[#111111] border border-slate-700 rounded-xl p-5 space-y-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Referencia de Angulos
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-2 pr-4 text-slate-400 font-medium">Angulo</th>
                <th className="text-center py-2 px-2 text-slate-400 font-medium">Normal</th>
                <th className="text-center py-2 px-2 text-green-400 font-medium">Leve</th>
                <th className="text-center py-2 px-2 text-yellow-400 font-medium">Moderado</th>
                <th className="text-center py-2 px-2 text-red-400 font-medium">Severo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4 font-medium text-slate-200">HVA</td>
                <td className="text-center py-2 px-2">&lt;15°</td>
                <td className="text-center py-2 px-2 text-green-400">15-20°</td>
                <td className="text-center py-2 px-2 text-yellow-400">20-40°</td>
                <td className="text-center py-2 px-2 text-red-400">&gt;40°</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4 font-medium text-slate-200">IMA</td>
                <td className="text-center py-2 px-2">&lt;9°</td>
                <td className="text-center py-2 px-2 text-green-400">9-12°</td>
                <td className="text-center py-2 px-2 text-yellow-400">12-16°</td>
                <td className="text-center py-2 px-2 text-red-400">&gt;16°</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-slate-200">DASA</td>
                <td className="text-center py-2 px-2">&lt;10°</td>
                <td colSpan={3} className="text-center py-2 px-2 text-slate-400">
                  &gt;10° = articulacao incongruente → considerar Akin
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {halluxValgusClassificationData.clinicalPearl && (
        <Alert type="info">{halluxValgusClassificationData.clinicalPearl}</Alert>
      )}
      {halluxValgusClassificationData.pitfall && (
        <Alert type="caution">{halluxValgusClassificationData.pitfall}</Alert>
      )}
    </div>
  );
}
