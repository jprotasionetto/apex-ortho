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

interface SchatzkerType {
  id: string;
  label: string;
  description: string;
  color: string;
}

const TYPES: SchatzkerType[] = [
  { id: 'type-i', label: 'Type I', description: 'Lateral split (wedge)', color: CLINICAL_COLORS.safe },
  { id: 'type-ii', label: 'Type II', description: 'Lateral split-depression', color: CLINICAL_COLORS.safe },
  { id: 'type-iii', label: 'Type III', description: 'Pure lateral depression', color: CLINICAL_COLORS.caution },
  { id: 'type-iv', label: 'Type IV', description: 'Medial plateau fracture', color: CLINICAL_COLORS.caution },
  { id: 'type-v', label: 'Type V', description: 'Bicondylar', color: CLINICAL_COLORS.danger },
  { id: 'type-vi', label: 'Type VI', description: 'Plateau + metaphyseal-diaphyseal dissociation', color: CLINICAL_COLORS.danger },
];

function TibiaBase({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Tibial plateau surface */}
      <path
        d="M10 40 Q15 20 30 15 Q50 8 70 8 Q90 8 110 15 Q125 20 130 40"
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />
      {/* Tibial shaft */}
      <path
        d="M10 40 L10 42 Q12 50 18 55 L22 130 Q25 140 35 145 L105 145 Q115 140 118 130 L122 55 Q128 50 130 42 L130 40"
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />
      {/* Articular surface line */}
      <line x1={18} y1={38} x2={122} y2={38} stroke={BONE_OUTLINE} strokeWidth={0.8} opacity={0.5} />
      {/* Medial/lateral eminence */}
      <path
        d="M55 38 Q60 28 70 25 Q80 28 85 38"
        fill="none"
        stroke={BONE_OUTLINE}
        strokeWidth={0.8}
        opacity={0.6}
      />
    </g>
  );
}

function TypeIFracture({ x, y, scale = 1, color, opacity }: { x: number; y: number; scale?: number; color: string; opacity: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Lateral split wedge fracture line */}
      <path
        d="M95 12 L88 55 L95 90"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeLinecap="round"
      />
      {/* Displaced wedge fragment */}
      <path
        d="M95 12 Q110 8 130 15 L130 40 L128 50 Q125 65 122 80 L118 90 L95 90 L88 55 Z"
        fill={color}
        opacity={opacity * 0.3}
      />
    </g>
  );
}

function TypeIIFracture({ x, y, scale = 1, color, opacity }: { x: number; y: number; scale?: number; color: string; opacity: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Split fracture line */}
      <path
        d="M92 12 L85 50 L92 85"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeLinecap="round"
      />
      {/* Depression area */}
      <path
        d="M92 20 Q100 18 115 22 L115 42 Q110 50 100 48 Q95 46 92 40 Z"
        fill={color}
        opacity={opacity * 0.4}
      />
      {/* Depression arrows */}
      <path d="M105 18 L105 35" stroke={color} strokeWidth={1.5} opacity={opacity} markerEnd="url(#arrowDown)" />
    </g>
  );
}

function TypeIIIFracture({ x, y, scale = 1, color, opacity }: { x: number; y: number; scale?: number; color: string; opacity: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Pure depression area in lateral plateau */}
      <path
        d="M85 25 Q90 22 100 22 Q115 22 120 25 L120 48 Q115 55 100 52 Q90 50 85 45 Z"
        fill={color}
        opacity={opacity * 0.4}
      />
      {/* Depression surface line */}
      <path
        d="M85 38 Q95 50 105 50 Q115 48 120 38"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeDasharray="3 2"
      />
      {/* Downward arrows */}
      <path d="M95 22 L95 42" stroke={color} strokeWidth={1.2} opacity={opacity} />
      <path d="M110 22 L110 42" stroke={color} strokeWidth={1.2} opacity={opacity} />
    </g>
  );
}

function TypeIVFracture({ x, y, scale = 1, color, opacity }: { x: number; y: number; scale?: number; color: string; opacity: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Medial plateau fracture line */}
      <path
        d="M45 12 L52 55 L45 90"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeLinecap="round"
      />
      {/* Medial displaced fragment */}
      <path
        d="M10 40 Q15 20 30 15 Q38 12 45 12 L52 55 L45 90 L22 90 L18 55 L10 40 Z"
        fill={color}
        opacity={opacity * 0.3}
      />
    </g>
  );
}

function TypeVFracture({ x, y, scale = 1, color, opacity }: { x: number; y: number; scale?: number; color: string; opacity: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Medial fracture line */}
      <path
        d="M45 15 L55 55 L48 90"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeLinecap="round"
      />
      {/* Lateral fracture line */}
      <path
        d="M95 15 L88 55 L95 90"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeLinecap="round"
      />
      {/* Both condyles highlighted */}
      <path
        d="M10 40 Q15 20 30 15 L45 15 L55 55 L48 90 L22 90 Z"
        fill={color}
        opacity={opacity * 0.25}
      />
      <path
        d="M95 15 Q110 10 130 15 L130 40 L122 90 L95 90 L88 55 Z"
        fill={color}
        opacity={opacity * 0.25}
      />
    </g>
  );
}

function TypeVIFracture({ x, y, scale = 1, color, opacity }: { x: number; y: number; scale?: number; color: string; opacity: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Bicondylar fracture lines */}
      <path
        d="M45 15 L55 55 L48 90"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeLinecap="round"
      />
      <path
        d="M95 15 L88 55 L95 90"
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
        strokeLinecap="round"
      />
      {/* Metaphyseal-diaphyseal transverse fracture */}
      <path
        d="M18 85 Q40 92 70 95 Q100 92 122 85"
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        opacity={opacity}
        strokeLinecap="round"
      />
      {/* Dissociation zone */}
      <rect x={15} y={80} width={110} height={18} rx={3} fill={color} opacity={opacity * 0.2} />
      {/* Separation indicator */}
      <path d="M70 95 L70 110" stroke={color} strokeWidth={1.5} opacity={opacity} strokeDasharray="2 2" />
    </g>
  );
}

export function SchatzkerSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  const cols = 3;
  const cellW = 180;
  const cellH = 185;
  const padX = 15;
  const padY = 30;

  function getOpacity(id: string): number {
    if (activeGrade === id) return 1;
    if (hoveredGrade === id) return 0.7;
    return 0.4;
  }

  function getColor(type: SchatzkerType): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return type.color;
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

  const fractures = [TypeIFracture, TypeIIFracture, TypeIIIFracture, TypeIVFracture, TypeVFracture, TypeVIFracture];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Schatzker classification of tibial plateau fractures - Types I through VI"
    >
      <title>Schatzker Classification of Tibial Plateau Fractures</title>
      <defs>
        <marker id="arrowDown" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
          <path d="M1 0 L3 6 L5 0" fill={CLINICAL_COLORS.safe} />
        </marker>
      </defs>

      <rect width="600" height="400" fill={BG} rx={8} />

      {TYPES.map((type, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const cx = padX + col * cellW + cellW / 2 - 55;
        const cy = padY + row * cellH + 10;
        const color = getColor(type);
        const opacity = getOpacity(type.id);
        const isActive = activeGrade === type.id;
        const FractureComponent = fractures[idx];

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
            aria-label={`${type.label}: ${type.description}`}
          >
            {/* Background highlight */}
            <rect
              x={padX + col * cellW + 5}
              y={padY + row * cellH}
              width={cellW - 10}
              height={cellH - 10}
              rx={6}
              fill={isActive ? color : 'transparent'}
              opacity={isActive ? 0.08 : 0}
              stroke={isActive ? color : 'transparent'}
              strokeWidth={1}
              style={{ transition: 'all 0.3s ease' }}
            />

            <TibiaBase x={cx} y={cy} scale={0.85} />
            <FractureComponent x={cx} y={cy} scale={0.85} color={color} opacity={opacity} />

            {showLabels && (
              <>
                <text
                  x={padX + col * cellW + cellW / 2}
                  y={padY + row * cellH + cellH - 28}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={12}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {type.label}
                </text>
                <text
                  x={padX + col * cellW + cellW / 2}
                  y={padY + row * cellH + cellH - 14}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={9}
                  opacity={0.7}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.description}
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
