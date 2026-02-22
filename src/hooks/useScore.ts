import { useState, useMemo, useCallback } from 'react';
import type { ScoreDefinition } from '@/types/score.ts';

interface ScoreEntry { date: string; score: number; }

export function useScore(definition: ScoreDefinition) {
  // State for current input values
  const [values, setValues] = useState<Record<string, number>>({});

  // Calculate score from current values using definition.calculate
  const score = useMemo(() => definition.calculate(values), [definition, values]);

  // Find matching interpretation
  const interpretation = useMemo(() =>
    definition.interpretations.find(i => score >= i.range[0] && score <= i.range[1]) || null,
    [definition.interpretations, score]
  );

  // Check if all required items have been filled
  const isComplete = useMemo(() =>
    definition.items.every(item => values[item.id] !== undefined),
    [definition.items, values]
  );

  // Update a single value
  const setValue = useCallback((id: string, value: number) => {
    setValues(prev => ({ ...prev, [id]: value }));
  }, []);

  // Reset all values
  const reset = useCallback(() => setValues({}), []);

  // Score history management with localStorage
  const storageKey = `apex-ortho-scores-${definition.id}`;

  const getHistory = useCallback((): ScoreEntry[] => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  }, [storageKey]);

  const saveScore = useCallback(() => {
    if (!isComplete) return;
    const history = getHistory();
    const entry: ScoreEntry = { date: new Date().toISOString(), score };
    const updated = [entry, ...history].slice(0, 50); // Keep max 50 entries
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }, [isComplete, score, getHistory, storageKey]);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(storageKey);
  }, [storageKey]);

  return { values, score, interpretation, isComplete, setValue, reset, getHistory, saveScore, clearHistory };
}
