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

interface SandersType {
  id: string;
  label: string;
  description: string;
  parts: string;
  color: string;
}

const TYPES: SandersType[] = [
  {
    id: 'type-i',
    label: 'Type I',
    description: 'Non-displaced (<2mm)',
    parts: '1 part',
    color: CLINICAL_COLORS.safe,
  },
  {
    id: 'type-ii',
    label: 'Type II',
    description: '2-part fracture (1 fracture line)',
    parts: '2 parts (IIA, IIB, IIC)',
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'type-iii',
    label: 'Type III',
    description: '3-part fracture (2 fracture lines)',
    parts: '3 parts',
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'type-iv',
    label: 'Type IV',
    description: 'Comminuted (>3 parts)',
    parts: '4+ parts',
    color: CLINICAL_COLORS.danger,
  },
];

function CalcaneusCT({
  x,
  y,
  typeIndex,
  color,
  opacity,
}: {
  x: number;
  y: number;
  typeIndex: number;
  color: string;
  opacity: number;
}) {
  const w = 100;
  const h = 90;

  // Three reference lines (A, B, C) dividing the posterior facet
  const lineA = 30;
  const lineB = 55;
  const lineC = 78;
  const facetTop = 15;
  const facetBot = 45;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Calcaneus body - coronal CT cross-section */}
      <path
        d={`M10 ${facetTop + 5} Q15 ${facetTop - 5} 25 ${facetTop} L${w - 25} ${facetTop} Q${w - 15} ${facetTop - 5} ${w - 10} ${facetTop + 5} L${w - 5} ${h - 10} Q${w - 8} ${h} ${w / 2} ${h} Q8 ${h} 5 ${h - 10} Z`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />

      {/* Posterior facet articular surface */}
      <path
        d={`M20 ${facetTop} Q${w / 2} ${facetTop - 10} ${w - 20} ${facetTop}`}
        fill="none"
        stroke={BONE_OUTLINE}
        strokeWidth={2}
        opacity={0.7}
      />

      {/* Sustentaculum tali (medial) */}
      <path
        d={`M10 ${facetTop + 5} L2 ${facetTop + 2} Q0 ${facetTop + 8} 2 ${facetTop + 15} L10 ${facetTop + 18}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />

      {/* Reference division lines (dashed, showing A, B, C positions) */}
      <line x1={lineA} y1={facetTop - 15} x2={lineA} y2={facetTop - 8} stroke={BONE_OUTLINE} strokeWidth={0.5} strokeDasharray="1 2" opacity={0.3} />
      <line x1={lineB} y1={facetTop - 15} x2={lineB} y2={facetTop - 8} stroke={BONE_OUTLINE} strokeWidth={0.5} strokeDasharray="1 2" opacity={0.3} />
      <line x1={lineC} y1={facetTop - 15} x2={lineC} y2={facetTop - 8} stroke={BONE_OUTLINE} strokeWidth={0.5} strokeDasharray="1 2" opacity={0.3} />
      {/* Reference labels */}
      <text x={lineA} y={facetTop - 18} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">A</text>
      <text x={lineB} y={facetTop - 18} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">B</text>
      <text x={lineC} y={facetTop - 18} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">C</text>

      {/* Medial / Lateral labels */}
      <text x={3} y={h + 12} fill={BONE_OUTLINE} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif">Med</text>
      <text x={w - 15} y={h + 12} fill={BONE_OUTLINE} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif">Lat</text>

      {/* === Fracture patterns === */}
      {typeIndex === 0 && (
        /* Type I: Non-displaced - minimal line */
        <>
          <path
            d={`M${lineB} ${facetTop} L${lineB} ${facetBot}`}
            fill="none"
            stroke={color}
            strokeWidth={1}
            opacity={opacity * 0.5}
            strokeDasharray="3 3"
          />
          <text x={w / 2} y={h / 2 + 15} textAnchor="middle" fill={color} fontSize={8} opacity={opacity * 0.6} fontFamily="system-ui, sans-serif">
            &lt;2mm
          </text>
        </>
      )}

      {typeIndex === 1 && (
        /* Type II: One fracture line - can be at A, B, or C position */
        <>
          <path
            d={`M${lineB} ${facetTop - 3} L${lineB + 2} ${facetBot + 10} L${lineB - 3} ${h - 15}`}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Fragment displacement */}
          <path
            d={`M${lineB + 2} ${facetBot} L${lineB + 8} ${facetBot + 5}`}
            fill="none"
            stroke={color}
            strokeWidth={1}
            opacity={opacity * 0.5}
          />
          {/* Subtypes */}
          <text x={w / 2} y={h + 22} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.4} fontFamily="system-ui, sans-serif">
            IIA(lat) / IIB(cent) / IIC(med)
          </text>
        </>
      )}

      {typeIndex === 2 && (
        /* Type III: Two fracture lines */
        <>
          <path
            d={`M${lineA + 3} ${facetTop - 2} L${lineA + 5} ${facetBot + 8} L${lineA} ${h - 18}`}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            opacity={opacity}
            strokeLinecap="round"
          />
          <path
            d={`M${lineC - 2} ${facetTop - 2} L${lineC + 2} ${facetBot + 5} L${lineC - 5} ${h - 20}`}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Central depressed fragment */}
          <path
            d={`M${lineA + 5} ${facetBot - 5} Q${(lineA + lineC) / 2} ${facetBot + 5} ${lineC + 2} ${facetBot - 3}`}
            fill={color}
            opacity={opacity * 0.15}
          />
        </>
      )}

      {typeIndex === 3 && (
        /* Type IV: Comminuted - multiple fracture lines */
        <>
          <path d={`M${lineA} ${facetTop - 2} L${lineA + 4} ${facetBot + 6} L${lineA - 2} ${h - 15}`} fill="none" stroke={color} strokeWidth={2} opacity={opacity} strokeLinecap="round" />
          <path d={`M${lineB - 2} ${facetTop - 3} L${lineB + 3} ${facetBot + 8}`} fill="none" stroke={color} strokeWidth={2} opacity={opacity} strokeLinecap="round" />
          <path d={`M${lineC + 2} ${facetTop} L${lineC - 3} ${facetBot + 5} L${lineC + 4} ${h - 12}`} fill="none" stroke={color} strokeWidth={2} opacity={opacity} strokeLinecap="round" />
          {/* Additional comminution lines */}
          <path d={`M${lineA + 15} ${facetBot + 5} L${lineB - 5} ${h - 10}`} fill="none" stroke={color} strokeWidth={1.5} opacity={opacity * 0.7} strokeLinecap="round" />
          {/* Depression zone */}
          <path
            d={`M${lineA + 4} ${facetBot} Q${w / 2} ${facetBot + 12} ${lineC - 3} ${facetBot}`}
            fill={color}
            opacity={opacity * 0.15}
          />
        </>
      )}
    </g>
  );
}

export function SandersSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(type: SandersType): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return type.color;
  }

  function getOpacity(id: string): number {
    if (activeGrade === id) return 1;
    if (hoveredGrade === id) return 0.7;
    return 0.4;
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

  const cellW = 140;
  const startX = 10;

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Sanders classification of calcaneal fractures showing coronal CT view with Types I through IV"
    >
      <title>Sanders Classification of Calcaneal Fractures (Coronal CT)</title>
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
          Sanders Classification (Coronal CT)
        </text>
      )}

      {TYPES.map((type, idx) => {
        const cx = startX + idx * cellW + 15;
        const color = getColor(type);
        const opacity = getOpacity(type.id);
        const isActive = activeGrade === type.id;

        return (
          <g
            key={type.id}
            style={{ transition: 'opacity 0.3s ease' }}
            cursor={interactive ? 'pointer' : 'default'}
            onClick={() => handleClick(type.id)}
            onKeyDown={(e) => handleKeyDown(e, type.id)}
            onMouseEnter={() => interactive && setHoveredGrade(type.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            tabIndex={interactive ? 0 : undefined}
            role={interactive ? 'button' : undefined}
            aria-pressed={interactive ? isActive : undefined}
            aria-label={`${type.label}: ${type.description} - ${type.parts}`}
          >
            {/* Background card */}
            <rect
              x={cx - 8}
              y={42}
              width={cellW - 20}
              height={200}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.08 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <CalcaneusCT
              x={cx + 5}
              y={60}
              typeIndex={idx}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2 - 10}
                  y={195}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={13}
                  fontWeight={isActive ? 700 : 500}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {type.label}
                </text>
                <text
                  x={cx + cellW / 2 - 10}
                  y={211}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={9}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.description}
                </text>
                <text
                  x={cx + cellW / 2 - 10}
                  y={225}
                  textAnchor="middle"
                  fill={color}
                  fontSize={8}
                  opacity={isActive ? 0.8 : 0.5}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.parts}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Detail panel */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={280} width={540} height={100} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const type = TYPES.find((t) => t.id === activeGrade);
            if (!type) return null;
            const color = getColor(type);
            return (
              <>
                <circle cx={50} cy={305} r={6} fill={color} opacity={0.6} />
                <text x={65} y={309} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {type.label} - {type.description}
                </text>
                <text x={65} y={330} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  {type.id === 'type-i' && 'All fractures regardless of number of fracture lines. Non-displaced (<2mm displacement).'}
                  {type.id === 'type-ii' && 'Single fracture line through posterior facet. Subtypes A, B, C based on fracture line position.'}
                  {type.id === 'type-iii' && 'Two fracture lines creating 3 articular fragments of the posterior facet. Subtypes AB, AC, BC.'}
                  {type.id === 'type-iv' && 'Highly comminuted with 3+ fracture lines. Worst prognosis. Often requires primary arthrodesis.'}
                </text>
                <text x={65} y={355} fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
                  {type.id === 'type-i' && 'Treatment: Non-operative management'}
                  {type.id === 'type-ii' && 'Treatment: ORIF with good outcomes expected'}
                  {type.id === 'type-iii' && 'Treatment: ORIF, guarded prognosis'}
                  {type.id === 'type-iv' && 'Treatment: Primary subtalar arthrodesis may be considered'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
