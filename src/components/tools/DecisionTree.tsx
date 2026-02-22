import { useState, useCallback } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

interface DecisionOption {
  label: string;
  nextId?: string;
  result?: string;
  colorCode?: 'safe' | 'caution' | 'danger' | 'info';
}

interface DecisionNode {
  id: string;
  question: string;
  options: DecisionOption[];
}

interface DecisionTreeProps {
  title: string;
  nodes: DecisionNode[];
  startNodeId: string;
}

interface BreadcrumbEntry {
  nodeId: string;
  question: string;
  chosenLabel: string;
}

export function DecisionTree({ title, nodes, startNodeId }: DecisionTreeProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>(startNodeId);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbEntry[]>([]);
  const [finalResult, setFinalResult] = useState<{ text: string; color: DecisionOption['colorCode'] } | null>(null);

  const currentNode = nodes.find((n) => n.id === currentNodeId);

  const handleReset = useCallback(() => {
    setCurrentNodeId(startNodeId);
    setBreadcrumbs([]);
    setFinalResult(null);
  }, [startNodeId]);

  const handleOptionClick = useCallback(
    (option: DecisionOption) => {
      if (!currentNode) return;

      const crumb: BreadcrumbEntry = {
        nodeId: currentNode.id,
        question: currentNode.question,
        chosenLabel: option.label,
      };

      if (option.result) {
        setBreadcrumbs((prev) => [...prev, crumb]);
        setFinalResult({ text: option.result, color: option.colorCode });
      } else if (option.nextId) {
        setBreadcrumbs((prev) => [...prev, crumb]);
        setCurrentNodeId(option.nextId);
        setFinalResult(null);
      }
    },
    [currentNode],
  );

  const handleBreadcrumbClick = useCallback(
    (index: number) => {
      const targetCrumb = breadcrumbs[index];
      setCurrentNodeId(targetCrumb.nodeId);
      setBreadcrumbs((prev) => prev.slice(0, index));
      setFinalResult(null);
    },
    [breadcrumbs],
  );

  return (
    <div className="space-y-6">
      {/* Header with title and reset */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
        {(breadcrumbs.length > 0 || finalResult) && (
          <button
            onClick={handleReset}
            className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            Reiniciar
          </button>
        )}
      </div>

      {/* Breadcrumb trail */}
      {breadcrumbs.length > 0 && (
        <div className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-slate-600 mx-1">&rarr;</span>}
              <button
                onClick={() => handleBreadcrumbClick(i)}
                className="text-slate-400 hover:text-primary-400 transition-colors underline underline-offset-2"
              >
                {crumb.chosenLabel}
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Current question node */}
      {!finalResult && currentNode && (
        <div className="animate-slide-up">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <p className="text-base font-medium text-slate-100 mb-4">{currentNode.question}</p>
            <div className="grid gap-2">
              {currentNode.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(option)}
                  className="text-left p-4 rounded-xl border border-slate-700 hover:border-primary-500 hover:bg-primary-500/5 transition-all text-sm text-slate-300"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Final result */}
      {finalResult && (
        <div className="animate-slide-up">
          <Alert type={finalResult.color ?? 'info'}>
            <span className="font-semibold">Resultado:</span> {finalResult.text}
          </Alert>

          <button
            onClick={handleReset}
            className="mt-4 w-full p-3 rounded-xl border border-slate-700 hover:border-primary-500 text-sm text-slate-300 hover:text-primary-400 transition-all"
          >
            Reiniciar algoritmo
          </button>
        </div>
      )}
    </div>
  );
}
