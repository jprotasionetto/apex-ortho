import { useState } from 'react';
import type { ClassificationData, ClassificationGrade } from '@/types/classification.ts';
import type { SVGDiagramProps } from '@/types/svg.ts';
import type { Reference } from '@/types/tool.ts';
import { Alert } from '@/components/ui/Alert.tsx';
import { Card } from '@/components/ui/Card.tsx';

const CLINICAL_COLORS: Record<ClassificationGrade['colorCode'], string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

interface ClassificationViewerProps {
  data: ClassificationData;
  svgComponent?: React.ComponentType<SVGDiagramProps>;
}

function formatReference(ref: Reference, index: number): React.ReactNode {
  if (typeof ref === 'string') {
    return (
      <li key={index} className="text-sm text-slate-400">
        {ref}
      </li>
    );
  }
  return (
    <li key={index} className="text-sm text-slate-400">
      {ref.authors}. {ref.title}. <em>{ref.journal}</em>, {ref.year}.
      {ref.doi && (
        <>
          {' '}
          <a
            href={`https://doi.org/${ref.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:underline"
          >
            {ref.doi}
          </a>
        </>
      )}
    </li>
  );
}

export function ClassificationViewer({ data, svgComponent: SvgComponent }: ClassificationViewerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activeGrade = selectedId ? data.grades.find((g) => g.id === selectedId) : null;

  const handleGradeSelect = (gradeId: string) => {
    setSelectedId((prev) => (prev === gradeId ? null : gradeId));
  };

  return (
    <div className="space-y-6">
      {/* Desktop: 2-column / Mobile: stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SVG Diagram (left on desktop, top on mobile) */}
        {SvgComponent && (
          <Card className="flex items-center justify-center min-h-[300px]">
            <SvgComponent
              activeGrade={selectedId ?? undefined}
              onGradeSelect={handleGradeSelect}
              interactive
              showLabels
              colorScheme="clinical"
            />
          </Card>
        )}

        {/* Grade selector (right on desktop, below on mobile) */}
        <div className={`grid gap-2 ${SvgComponent ? '' : 'lg:col-span-2'}`}>
          {data.grades.map((g) => (
            <button
              key={g.id}
              onClick={() => handleGradeSelect(g.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selectedId === g.id
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: CLINICAL_COLORS[g.colorCode] }}
                />
                <span className="font-medium text-slate-100">{g.label}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{g.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Selected grade detail panel */}
      {activeGrade && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-slate-100">{activeGrade.label}</h3>

          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-2">Criterios</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {activeGrade.criteria.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-1">Tratamento</h4>
            <p className="text-sm text-slate-300">{activeGrade.treatment}</p>
          </div>

          {activeGrade.prognosis && (
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">Prognostico</h4>
              <p className="text-sm text-slate-300">{activeGrade.prognosis}</p>
            </div>
          )}

          {activeGrade.imageNote && (
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">Nota de Imagem</h4>
              <p className="text-sm text-slate-400 italic">{activeGrade.imageNote}</p>
            </div>
          )}
        </div>
      )}

      {/* Clinical Pearl & Pitfall */}
      {data.clinicalPearl && (
        <Alert type="info">
          <span className="font-semibold">Perola Clinica:</span> {data.clinicalPearl}
        </Alert>
      )}
      {data.pitfall && (
        <Alert type="caution">
          <span className="font-semibold">Armadilha:</span> {data.pitfall}
        </Alert>
      )}

      {/* References */}
      {data.references && data.references.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-slate-400 mb-2">Referencias</h4>
          <ol className="list-decimal list-inside space-y-1">
            {data.references.map((ref, i) => formatReference(ref, i))}
          </ol>
        </div>
      )}
    </div>
  );
}
