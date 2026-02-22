import { useState, useCallback, useMemo } from 'react';
import type { ScoreInterpretation } from '@/types/score.ts';

const CLINICAL_COLORS: Record<ScoreInterpretation['color'], string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

interface ScoreEntry {
  date: string;
  score: number;
}

interface ScoreHistoryProps {
  scoreId: string;
  scoreName: string;
  maxScore: number;
  interpretations: ScoreInterpretation[];
}

function getStorageKey(scoreId: string): string {
  return `apex-ortho-scores-${scoreId}`;
}

function readEntries(scoreId: string): ScoreEntry[] {
  try {
    const raw = localStorage.getItem(getStorageKey(scoreId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as ScoreEntry[];
  } catch {
    return [];
  }
}

function writeEntries(scoreId: string, entries: ScoreEntry[]): void {
  localStorage.setItem(getStorageKey(scoreId), JSON.stringify(entries));
}

function getInterpretation(
  score: number,
  interpretations: ScoreInterpretation[],
): ScoreInterpretation | undefined {
  return interpretations.find((i) => score >= i.range[0] && score <= i.range[1]);
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/** Mini SVG line chart for score trend */
function TrendChart({
  entries,
  maxScore,
  interpretations,
}: {
  entries: ScoreEntry[];
  maxScore: number;
  interpretations: ScoreInterpretation[];
}) {
  const width = 280;
  const height = 80;
  const paddingX = 8;
  const paddingY = 8;

  if (entries.length < 2) return null;

  const chartW = width - paddingX * 2;
  const chartH = height - paddingY * 2;

  const points = entries.map((e, i) => {
    const x = paddingX + (i / (entries.length - 1)) * chartW;
    const y = paddingY + chartH - (e.score / Math.max(maxScore, 1)) * chartH;
    return { x, y, score: e.score };
  });

  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <div className="bg-slate-800/50 rounded-lg p-3">
      <p className="text-xs text-slate-500 mb-2">Tendencia</p>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid lines */}
        <line x1={paddingX} y1={paddingY} x2={paddingX} y2={height - paddingY} stroke="#334155" strokeWidth={1} />
        <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#334155" strokeWidth={1} />

        {/* Line */}
        <polyline fill="none" stroke="#3B82F6" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" points={polyline} />

        {/* Points */}
        {points.map((p, i) => {
          const interp = getInterpretation(p.score, interpretations);
          const color = interp ? CLINICAL_COLORS[interp.color] : '#3B82F6';
          return <circle key={i} cx={p.x} cy={p.y} r={3.5} fill={color} stroke="#0F172A" strokeWidth={1.5} />;
        })}
      </svg>
    </div>
  );
}

export function ScoreHistory({ scoreId, scoreName, maxScore, interpretations }: ScoreHistoryProps) {
  const [entries, setEntries] = useState<ScoreEntry[]>(() => readEntries(scoreId));

  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [entries],
  );

  const handleDelete = useCallback(
    (index: number) => {
      const sorted = [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      sorted.splice(index, 1);
      writeEntries(scoreId, sorted);
      setEntries(sorted);
    },
    [entries, scoreId],
  );

  if (sortedEntries.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-sm text-slate-500">Sem historico</p>
        <p className="text-xs text-slate-600 mt-1">
          As pontuacoes do {scoreName} aparecerão aqui conforme forem registradas.
        </p>
      </div>
    );
  }

  // Chronological order for trend chart (oldest first)
  const chronological = [...sortedEntries].reverse();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-slate-300">
        Historico - {scoreName}
      </h3>

      {/* Trend chart */}
      {chronological.length >= 2 && (
        <TrendChart entries={chronological} maxScore={maxScore} interpretations={interpretations} />
      )}

      {/* Entry list */}
      <div className="space-y-2">
        {sortedEntries.map((entry, i) => {
          const interp = getInterpretation(entry.score, interpretations);
          const color = interp ? CLINICAL_COLORS[interp.color] : '#3B82F6';

          return (
            <div
              key={`${entry.date}-${i}`}
              className="flex items-center gap-3 p-3 bg-slate-800 border border-slate-700 rounded-lg"
            >
              {/* Color dot */}
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />

              {/* Date */}
              <span className="text-xs text-slate-500 min-w-[5.5rem]">{formatDate(entry.date)}</span>

              {/* Score */}
              <span className="text-sm font-mono text-slate-200">
                {entry.score}
                <span className="text-slate-500">/{maxScore}</span>
              </span>

              {/* Interpretation label */}
              {interp && (
                <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ backgroundColor: `${color}15`, color }}>
                  {interp.label}
                </span>
              )}

              {/* Delete button */}
              <button
                onClick={() => handleDelete(i)}
                className="text-slate-600 hover:text-red-400 transition-colors p-1 shrink-0"
                title="Remover entrada"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      {/* Count */}
      <p className="text-xs text-slate-600">
        {sortedEntries.length} registro{sortedEntries.length !== 1 ? 's' : ''}
      </p>
    </div>
  );
}
