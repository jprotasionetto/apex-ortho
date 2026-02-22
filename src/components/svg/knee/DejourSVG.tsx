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

interface DejourType {
  id: string;
  label: string;
  description: string;
  sign: string;
  color: string;
}

const TYPES: DejourType[] = [
  { id: 'type-a', label: 'Type A', description: 'Shallow trochlea', sign: 'Crossing sign', color: CLINICAL_COLORS.safe },
  { id: 'type-b', label: 'Type B', description: 'Flat or convex trochlea', sign: 'Supratrochlear spur', color: CLINICAL_COLORS.caution },
  { id: 'type-c', label: 'Type C', description: 'Asymmetric facets', sign: 'Double contour sign', color: CLINICAL_COLORS.caution },
  { id: 'type-d', label: 'Type D', description: 'Combination B + C', sign: 'Cliff pattern', color: CLINICAL_COLORS.danger },
];

/**
 * Renders an axial view of the trochlear groove with dysplasia type.
 */
function TrochleaAxial({
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
  const h = 80;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Femoral condyle outline (axial cross-section) */}
      <ellipse
        cx={w / 2}
        cy={h / 2}
        rx={w / 2}
        ry={h / 2 - 5}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />

      {typeIndex === 0 && (
        /* Type A: Shallow trochlea - groove present but shallow */
        <>
          {/* Trochlear groove - shallow V */}
          <path
            d={`M15 20 Q25 18 35 22 Q${w / 2} 30 ${w - 35} 22 Q${w - 25} 18 ${w - 15} 20`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
          />
          {/* Normal depth line for comparison */}
          <path
            d={`M35 22 Q${w / 2} 42 ${w - 35} 22`}
            fill="none"
            stroke={BONE_OUTLINE}
            strokeWidth={0.8}
            strokeDasharray="3 3"
            opacity={0.3}
          />
          {/* Crossing sign indicator */}
          <line x1={w / 2 - 15} y1={15} x2={w / 2 + 15} y2={35} stroke={color} strokeWidth={1.2} opacity={opacity * 0.6} strokeDasharray="2 2" />
        </>
      )}

      {typeIndex === 1 && (
        /* Type B: Flat or convex - no groove, may have spur */
        <>
          {/* Flat/convex trochlear surface */}
          <path
            d={`M15 22 Q25 20 35 22 Q${w / 2} 18 ${w - 35} 22 Q${w - 25} 20 ${w - 15} 22`}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            opacity={opacity}
          />
          {/* Supratrochlear spur */}
          <path
            d={`M${w / 2 - 5} 18 L${w / 2} 10 L${w / 2 + 5} 18`}
            fill={color}
            opacity={opacity * 0.5}
            stroke={color}
            strokeWidth={1.5}
          />
          {/* Spur label arrow */}
          <line x1={w / 2} y1={8} x2={w / 2} y2={0} stroke={color} strokeWidth={0.8} opacity={opacity * 0.5} />
        </>
      )}

      {typeIndex === 2 && (
        /* Type C: Asymmetric facets - one facet much larger */
        <>
          {/* Asymmetric trochlear surface - lateral facet convex past medial */}
          <path
            d={`M15 22 Q25 28 40 30 Q${w / 2} 20 ${w / 2 + 5} 22`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
          />
          <path
            d={`M${w / 2 + 5} 22 Q${w - 30} 15 ${w - 15} 20`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
          />
          {/* Double contour visualization */}
          <path
            d={`M35 30 Q45 35 55 28`}
            fill="none"
            stroke={color}
            strokeWidth={1}
            opacity={opacity * 0.5}
            strokeDasharray="2 2"
          />
          {/* Highlight asymmetry */}
          <path
            d={`M15 22 Q25 28 40 30 Q${w / 2} 38 ${w / 2 + 5} 30 L${w / 2 + 5} 22 Q${w / 2} 20 40 30 Q25 28 15 22 Z`}
            fill={color}
            opacity={opacity * 0.15}
          />
        </>
      )}

      {typeIndex === 3 && (
        /* Type D: Combination B+C - cliff pattern, spur + asymmetry */
        <>
          {/* Flat surface with cliff drop-off */}
          <path
            d={`M15 30 Q25 32 35 33 L${w / 2 - 5} 33`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
          />
          {/* Cliff edge */}
          <path
            d={`M${w / 2 - 5} 33 L${w / 2} 18 Q${w / 2 + 5} 15 ${w / 2 + 10} 18`}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            opacity={opacity}
          />
          <path
            d={`M${w / 2 + 10} 18 Q${w - 25} 16 ${w - 15} 20`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
          />
          {/* Supratrochlear spur */}
          <path
            d={`M${w / 2 - 2} 18 L${w / 2 + 2} 8 L${w / 2 + 6} 16`}
            fill={color}
            opacity={opacity * 0.5}
            stroke={color}
            strokeWidth={1}
          />
          {/* Cliff zone highlight */}
          <rect x={w / 2 - 8} y={15} width={20} height={20} rx={3} fill={color} opacity={opacity * 0.1} />
        </>
      )}

      {/* Medial / Lateral labels */}
      <text x={8} y={h - 5} fill={BONE_OUTLINE} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif">M</text>
      <text x={w - 12} y={h - 5} fill={BONE_OUTLINE} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif">L</text>
    </g>
  );
}

/**
 * Renders a lateral X-ray view showing the trochlear line signs.
 */
function TrochleaLateral({
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
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Distal femur outline (lateral view) */}
      <path
        d={`M20 0 L20 50 Q20 70 30 80 Q40 90 55 88 Q70 86 78 75 Q85 60 80 40 L80 0`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />

      {typeIndex === 0 && (
        /* Type A: Crossing sign on lateral view */
        <>
          {/* Trochlear floor line */}
          <path d="M30 15 Q45 35 55 60 Q58 70 55 80" fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          {/* Condyle line crossing it */}
          <path d="M35 55 Q50 50 65 58 Q72 62 75 70" fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} strokeDasharray="3 2" />
          {/* Crossing point */}
          <circle cx={52} cy={55} r={4} fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
        </>
      )}

      {typeIndex === 1 && (
        /* Type B: Supratrochlear spur on lateral */
        <>
          <path d="M35 20 Q40 30 42 45 Q43 55 42 65" fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          {/* Spur bump */}
          <path d="M38 28 L35 18 L40 22" fill={color} opacity={opacity * 0.4} stroke={color} strokeWidth={1} />
          {/* Crossing sign + spur */}
          <path d="M40 50 Q55 48 68 55 Q74 60 76 68" fill="none" stroke={color} strokeWidth={1} opacity={opacity * 0.6} strokeDasharray="2 2" />
        </>
      )}

      {typeIndex === 2 && (
        /* Type C: Double contour sign on lateral */
        <>
          {/* Two separate lines representing double contour */}
          <path d="M30 20 Q38 40 42 55 Q44 65 42 78" fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          <path d="M38 25 Q46 42 50 58 Q52 68 50 80" fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          {/* Gap between = double contour */}
          <path d="M35 40 L44 43" fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.4} strokeDasharray="1 2" />
          <path d="M38 55 L48 57" fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.4} strokeDasharray="1 2" />
        </>
      )}

      {typeIndex === 3 && (
        /* Type D: Spur + double contour on lateral */
        <>
          {/* Double contour */}
          <path d="M30 22 Q38 40 42 55 Q44 65 42 78" fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          <path d="M38 28 Q46 44 50 58 Q52 68 50 80" fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          {/* Spur */}
          <path d="M28 24 L26 14 L34 20" fill={color} opacity={opacity * 0.4} stroke={color} strokeWidth={1} />
          {/* Crossing */}
          <path d="M40 50 Q55 48 68 55" fill="none" stroke={color} strokeWidth={1} opacity={opacity * 0.5} strokeDasharray="2 2" />
        </>
      )}
    </g>
  );
}

export function DejourSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(type: DejourType): string {
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
      aria-label="Dejour classification of trochlear dysplasia - Types A through D"
    >
      <title>Dejour Classification of Trochlear Dysplasia</title>
      <rect width="600" height="400" fill={BG} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={25}
          textAnchor="middle"
          fill={BONE_OUTLINE}
          fontSize={14}
          fontWeight={600}
          fontFamily="system-ui, sans-serif"
        >
          Dejour Classification of Trochlear Dysplasia
        </text>
      )}

      {/* View labels */}
      {showLabels && (
        <>
          <text x={15} y={60} fill={BONE_OUTLINE} fontSize={10} opacity={0.5} fontFamily="system-ui, sans-serif">Axial View</text>
          <text x={15} y={195} fill={BONE_OUTLINE} fontSize={10} opacity={0.5} fontFamily="system-ui, sans-serif">Lateral View</text>
        </>
      )}

      {TYPES.map((type, idx) => {
        const cx = startX + idx * cellW + 20;
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
            aria-label={`${type.label}: ${type.description} - ${type.sign}`}
          >
            {/* Background card */}
            <rect
              x={cx - 10}
              y={38}
              width={cellW - 20}
              height={310}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.08 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            {/* Axial view */}
            <TrochleaAxial x={cx} y={65} typeIndex={idx} color={color} opacity={opacity} />

            {/* Lateral view */}
            <TrochleaLateral x={cx} y={200} typeIndex={idx} color={color} opacity={opacity} />

            {showLabels && (
              <>
                {/* Type label */}
                <text
                  x={cx + 50}
                  y={310}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={13}
                  fontWeight={isActive ? 700 : 500}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {type.label}
                </text>
                {/* Description */}
                <text
                  x={cx + 50}
                  y={326}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={9}
                  opacity={0.7}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.description}
                </text>
                {/* Radiographic sign */}
                <text
                  x={cx + 50}
                  y={340}
                  textAnchor="middle"
                  fill={color}
                  fontSize={8}
                  opacity={isActive ? 0.9 : 0.5}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'opacity 0.3s ease' }}
                >
                  {type.sign}
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
