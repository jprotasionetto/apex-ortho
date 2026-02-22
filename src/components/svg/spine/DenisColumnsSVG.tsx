import { useState } from 'react';
import type { SVGDiagramProps } from '@/types/svg.ts';

const CLINICAL_COLORS = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
} as const;

const BONE_OUTLINE = '#94A3B8';
const BONE_FILL = '#1E293B';
const BG = '#0F172A';

interface DenisColumn {
  id: string;
  label: string;
  description: string;
  structures: string[];
  color: string;
}

const COLUMNS: DenisColumn[] = [
  {
    id: 'anterior',
    label: 'Anterior Column',
    description: 'Anterior 2/3 of vertebral body and disc',
    structures: ['Anterior longitudinal ligament (ALL)', 'Anterior 2/3 vertebral body', 'Anterior 2/3 annulus fibrosus'],
    color: CLINICAL_COLORS.safe,
  },
  {
    id: 'middle',
    label: 'Middle Column',
    description: 'Posterior 1/3 of vertebral body',
    structures: ['Posterior longitudinal ligament (PLL)', 'Posterior 1/3 vertebral body', 'Posterior 1/3 annulus fibrosus'],
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'posterior',
    label: 'Posterior Column',
    description: 'Posterior bony and ligamentous complex',
    structures: ['Pedicles', 'Laminae', 'Facet joints', 'Spinous process', 'Posterior ligament complex'],
    color: CLINICAL_COLORS.danger,
  },
];

export function DenisColumnsSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  function getColor(column: DenisColumn): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return column.color;
  }

  function getOpacity(id: string): number {
    if (activeGrade === id) return 0.7;
    if (hoveredColumn === id) return 0.5;
    return 0.2;
  }

  function handleClick(id: string) {
    if (interactive && onGradeSelect) {
      onGradeSelect(id);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, id: string) {
    if ((e.key === 'Enter' || e.key === ' ') && interactive && onGradeSelect) {
      e.preventDefault();
      onGradeSelect(id);
    }
  }

  // Vertebral body geometry (lateral view)
  const vbX = 120;
  const vbY = 60;
  const vbW = 180;
  const vbH = 100;
  const discH = 30;

  // Column division lines (anterior 2/3, posterior 1/3)
  const midColX = vbX + vbW * (2 / 3); // Where anterior ends and middle begins
  const postColX = vbX + vbW; // Where middle ends and posterior begins

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Denis three-column concept of the spine showing anterior, middle, and posterior columns"
    >
      <title>Denis Three-Column Concept of the Spine</title>
      <rect width="600" height="400" fill={BG} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={28}
          textAnchor="middle"
          fill={BONE_OUTLINE}
          fontSize={14}
          fontWeight={600}
          fontFamily="system-ui, sans-serif"
        >
          Denis 3-Column Concept (Lateral View)
        </text>
      )}

      {/* === Upper vertebral body === */}
      <rect x={vbX} y={vbY} width={vbW} height={vbH} rx={4} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.5} />

      {/* === Intervertebral disc === */}
      <rect x={vbX} y={vbY + vbH} width={vbW} height={discH} rx={2} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1} />
      {/* Nucleus pulposus */}
      <ellipse cx={vbX + vbW / 2} cy={vbY + vbH + discH / 2} rx={40} ry={8} fill={BONE_OUTLINE} opacity={0.1} />

      {/* === Lower vertebral body === */}
      <rect x={vbX} y={vbY + vbH + discH} width={vbW} height={vbH} rx={4} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.5} />

      {/* === Posterior elements === */}
      {/* Pedicles (upper) */}
      <path
        d={`M${postColX} ${vbY + 20} L${postColX + 30} ${vbY + 15} L${postColX + 40} ${vbY + 25} L${postColX + 40} ${vbY + 45} L${postColX + 30} ${vbY + 55} L${postColX} ${vbY + 50}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />
      {/* Lamina (upper) */}
      <path
        d={`M${postColX + 40} ${vbY + 25} L${postColX + 80} ${vbY + 10} L${postColX + 85} ${vbY + 20} L${postColX + 40} ${vbY + 45}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />
      {/* Spinous process (upper) */}
      <path
        d={`M${postColX + 80} ${vbY + 10} L${postColX + 130} ${vbY + 5} L${postColX + 135} ${vbY + 15} L${postColX + 85} ${vbY + 20}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />
      {/* Facet joint */}
      <ellipse cx={postColX + 42} cy={vbY + vbH + discH / 2} rx={8} ry={15} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1} />

      {/* Pedicles (lower) */}
      <path
        d={`M${postColX} ${vbY + vbH + discH + 20} L${postColX + 30} ${vbY + vbH + discH + 15} L${postColX + 40} ${vbY + vbH + discH + 25} L${postColX + 40} ${vbY + vbH + discH + 45} L${postColX + 30} ${vbY + vbH + discH + 55} L${postColX} ${vbY + vbH + discH + 50}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />
      {/* Lamina (lower) */}
      <path
        d={`M${postColX + 40} ${vbY + vbH + discH + 25} L${postColX + 80} ${vbY + vbH + discH + 10} L${postColX + 85} ${vbY + vbH + discH + 20} L${postColX + 40} ${vbY + vbH + discH + 45}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />
      {/* Spinous process (lower) */}
      <path
        d={`M${postColX + 80} ${vbY + vbH + discH + 10} L${postColX + 130} ${vbY + vbH + discH + 5} L${postColX + 135} ${vbY + vbH + discH + 15} L${postColX + 85} ${vbY + vbH + discH + 20}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />

      {/* === Ligaments === */}
      {/* ALL - Anterior longitudinal ligament */}
      <line x1={vbX - 5} y1={vbY - 5} x2={vbX - 5} y2={vbY + vbH * 2 + discH + 10} stroke={BONE_OUTLINE} strokeWidth={3} opacity={0.3} />
      {/* PLL - Posterior longitudinal ligament */}
      <line x1={postColX + 3} y1={vbY - 5} x2={postColX + 3} y2={vbY + vbH * 2 + discH + 10} stroke={BONE_OUTLINE} strokeWidth={2.5} opacity={0.3} />

      {/* === Column overlay zones (interactive) === */}
      {/* Anterior column */}
      <g
        style={{ transition: 'opacity 0.3s ease' }}
        cursor={interactive ? 'pointer' : 'default'}
        onClick={() => handleClick('anterior')}
        onKeyDown={(e) => handleKeyDown(e, 'anterior')}
        onMouseEnter={() => interactive && setHoveredColumn('anterior')}
        onMouseLeave={() => setHoveredColumn(null)}
        tabIndex={interactive ? 0 : undefined}
        role={interactive ? 'button' : undefined}
        aria-pressed={interactive ? activeGrade === 'anterior' : undefined}
        aria-label="Anterior Column: ALL, anterior 2/3 vertebral body and disc"
      >
        <title>Anterior Column: ALL + anterior 2/3 of vertebral body and disc</title>
        <rect
          x={vbX - 8}
          y={vbY - 8}
          width={midColX - vbX + 8}
          height={vbH * 2 + discH + 16}
          rx={4}
          fill={getColor(COLUMNS[0])}
          opacity={getOpacity('anterior')}
          stroke={activeGrade === 'anterior' ? getColor(COLUMNS[0]) : 'transparent'}
          strokeWidth={2}
          style={{ transition: 'opacity 0.3s ease' }}
        />
      </g>

      {/* Middle column */}
      <g
        style={{ transition: 'opacity 0.3s ease' }}
        cursor={interactive ? 'pointer' : 'default'}
        onClick={() => handleClick('middle')}
        onKeyDown={(e) => handleKeyDown(e, 'middle')}
        onMouseEnter={() => interactive && setHoveredColumn('middle')}
        onMouseLeave={() => setHoveredColumn(null)}
        tabIndex={interactive ? 0 : undefined}
        role={interactive ? 'button' : undefined}
        aria-pressed={interactive ? activeGrade === 'middle' : undefined}
        aria-label="Middle Column: PLL, posterior 1/3 vertebral body and disc"
      >
        <title>Middle Column: PLL + posterior 1/3 of vertebral body and disc</title>
        <rect
          x={midColX}
          y={vbY - 8}
          width={postColX - midColX + 6}
          height={vbH * 2 + discH + 16}
          rx={4}
          fill={getColor(COLUMNS[1])}
          opacity={getOpacity('middle')}
          stroke={activeGrade === 'middle' ? getColor(COLUMNS[1]) : 'transparent'}
          strokeWidth={2}
          style={{ transition: 'opacity 0.3s ease' }}
        />
      </g>

      {/* Posterior column */}
      <g
        style={{ transition: 'opacity 0.3s ease' }}
        cursor={interactive ? 'pointer' : 'default'}
        onClick={() => handleClick('posterior')}
        onKeyDown={(e) => handleKeyDown(e, 'posterior')}
        onMouseEnter={() => interactive && setHoveredColumn('posterior')}
        onMouseLeave={() => setHoveredColumn(null)}
        tabIndex={interactive ? 0 : undefined}
        role={interactive ? 'button' : undefined}
        aria-pressed={interactive ? activeGrade === 'posterior' : undefined}
        aria-label="Posterior Column: Pedicles, laminae, facets, spinous process, posterior ligament complex"
      >
        <title>Posterior Column: Pedicles, laminae, facets, spinous process, posterior ligament complex</title>
        <rect
          x={postColX + 6}
          y={vbY - 12}
          width={140}
          height={vbH * 2 + discH + 24}
          rx={4}
          fill={getColor(COLUMNS[2])}
          opacity={getOpacity('posterior')}
          stroke={activeGrade === 'posterior' ? getColor(COLUMNS[2]) : 'transparent'}
          strokeWidth={2}
          style={{ transition: 'opacity 0.3s ease' }}
        />
      </g>

      {/* Column division lines (dashed) */}
      <line
        x1={midColX}
        y1={vbY - 15}
        x2={midColX}
        y2={vbY + vbH * 2 + discH + 15}
        stroke={BONE_OUTLINE}
        strokeWidth={1}
        strokeDasharray="4 4"
        opacity={0.5}
      />
      <line
        x1={postColX + 3}
        y1={vbY - 15}
        x2={postColX + 3}
        y2={vbY + vbH * 2 + discH + 15}
        stroke={BONE_OUTLINE}
        strokeWidth={1}
        strokeDasharray="4 4"
        opacity={0.5}
      />

      {/* Column header labels */}
      {showLabels && (
        <>
          <text
            x={(vbX + midColX) / 2}
            y={vbY - 18}
            textAnchor="middle"
            fill={activeGrade === 'anterior' ? getColor(COLUMNS[0]) : BONE_OUTLINE}
            fontSize={10}
            fontWeight={activeGrade === 'anterior' ? 600 : 400}
            fontFamily="system-ui, sans-serif"
            style={{ transition: 'fill 0.3s ease' }}
          >
            Anterior
          </text>
          <text
            x={(midColX + postColX) / 2 + 3}
            y={vbY - 18}
            textAnchor="middle"
            fill={activeGrade === 'middle' ? getColor(COLUMNS[1]) : BONE_OUTLINE}
            fontSize={10}
            fontWeight={activeGrade === 'middle' ? 600 : 400}
            fontFamily="system-ui, sans-serif"
            style={{ transition: 'fill 0.3s ease' }}
          >
            Middle
          </text>
          <text
            x={postColX + 76}
            y={vbY - 18}
            textAnchor="middle"
            fill={activeGrade === 'posterior' ? getColor(COLUMNS[2]) : BONE_OUTLINE}
            fontSize={10}
            fontWeight={activeGrade === 'posterior' ? 600 : 400}
            fontFamily="system-ui, sans-serif"
            style={{ transition: 'fill 0.3s ease' }}
          >
            Posterior
          </text>
        </>
      )}

      {/* Structure labels on bone */}
      {showLabels && (
        <>
          {/* ALL label */}
          <text x={vbX - 12} y={vbY + vbH + discH / 2} textAnchor="end" fill={BONE_OUTLINE} fontSize={8} opacity={0.5} fontFamily="system-ui, sans-serif" transform={`rotate(-90, ${vbX - 12}, ${vbY + vbH + discH / 2})`}>
            ALL
          </text>
          {/* PLL label */}
          <text x={postColX + 12} y={vbY + vbH + discH / 2 - 30} textAnchor="start" fill={BONE_OUTLINE} fontSize={8} opacity={0.5} fontFamily="system-ui, sans-serif" transform={`rotate(-90, ${postColX + 12}, ${vbY + vbH + discH / 2 - 30})`}>
            PLL
          </text>
        </>
      )}

      {/* Detail panel */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={305} width={540} height={80} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const col = COLUMNS.find((c) => c.id === activeGrade);
            if (!col) return null;
            const color = getColor(col);
            return (
              <>
                <rect x={45} y={315} width={8} height={22} rx={2} fill={color} opacity={0.6} />
                <text x={62} y={328} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {col.label}
                </text>
                <text x={62} y={344} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  {col.description}
                </text>
                {col.structures.map((s, i) => (
                  <text
                    key={i}
                    x={62 + i * 180}
                    y={362}
                    fill={BONE_OUTLINE}
                    fontSize={8}
                    opacity={0.6}
                    fontFamily="system-ui, sans-serif"
                  >
                    {s}
                  </text>
                ))}
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
