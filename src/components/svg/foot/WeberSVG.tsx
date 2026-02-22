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

interface WeberType {
  id: string;
  label: string;
  description: string;
  level: string;
  color: string;
}

const TYPES: WeberType[] = [
  {
    id: 'type-a',
    label: 'Type A',
    description: 'Below syndesmosis',
    level: 'Infrasyndesmotic',
    color: CLINICAL_COLORS.safe,
  },
  {
    id: 'type-b',
    label: 'Type B',
    description: 'At level of syndesmosis',
    level: 'Transsyndesmotic',
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'type-c',
    label: 'Type C',
    description: 'Above syndesmosis',
    level: 'Suprasyndesmotic',
    color: CLINICAL_COLORS.danger,
  },
];

function AnkleMortise({
  x,
  y,
  fractureType,
  color,
  opacity,
}: {
  x: number;
  y: number;
  fractureType: number;
  color: string;
  opacity: number;
}) {
  // Syndesmosis level Y coordinate
  const syndY = 80;
  const fractureWidth = 3;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* === Tibia (medial) === */}
      {/* Tibial shaft */}
      <path
        d="M30 0 L30 100 Q30 115 35 120 Q42 130 55 132 L85 132 Q88 130 90 125 L90 100 L90 0"
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />
      {/* Medial malleolus */}
      <path
        d="M30 100 L25 115 Q22 125 25 135 Q28 142 35 145 Q40 147 45 145 L55 132"
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />

      {/* === Fibula (lateral) === */}
      {/* Fibular shaft */}
      <path
        d="M110 0 L108 50 L108 90 Q108 100 112 110 L115 120 Q118 130 120 135 Q122 142 120 148 Q118 155 112 158 Q108 160 105 158 L100 150 Q98 140 100 132 L102 125 L100 100 L98 50 L100 0"
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />

      {/* === Syndesmosis zone === */}
      {/* Syndesmosis ligament area */}
      <rect
        x={88}
        y={syndY - 8}
        width={15}
        height={16}
        rx={2}
        fill={CLINICAL_COLORS.info}
        opacity={0.15}
        stroke={CLINICAL_COLORS.info}
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      {/* Syndesmosis level line */}
      <line
        x1={85}
        y1={syndY}
        x2={125}
        y2={syndY}
        stroke={CLINICAL_COLORS.info}
        strokeWidth={1}
        strokeDasharray="4 3"
        opacity={0.6}
      />
      {/* Syndesmosis label */}
      <text x={130} y={syndY + 4} fill={CLINICAL_COLORS.info} fontSize={8} opacity={0.7} fontFamily="system-ui, sans-serif">
        Syndesmosis
      </text>

      {/* === Talus (dome) === */}
      <path
        d="M35 152 Q50 140 75 138 Q100 140 110 152 L115 165 Q100 175 75 178 Q50 175 40 165 Z"
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />
      <text x={75} y={165} textAnchor="middle" fill={BONE_OUTLINE} fontSize={8} opacity={0.4} fontFamily="system-ui, sans-serif">
        Talus
      </text>

      {/* === Fracture line based on type === */}
      {fractureType === 0 && (
        /* Type A: Below syndesmosis - infrasyndesmotic */
        <>
          <path
            d={`M100 ${syndY + 30} L108 ${syndY + 25} L115 ${syndY + 35}`}
            fill="none"
            stroke={color}
            strokeWidth={fractureWidth}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Fracture zone highlight */}
          <ellipse
            cx={108}
            cy={syndY + 30}
            rx={12}
            ry={10}
            fill={color}
            opacity={opacity * 0.15}
          />
        </>
      )}

      {fractureType === 1 && (
        /* Type B: At syndesmosis level - transsyndesmotic */
        <>
          <path
            d={`M98 ${syndY - 5} L106 ${syndY + 5} L115 ${syndY - 2}`}
            fill="none"
            stroke={color}
            strokeWidth={fractureWidth}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Fracture zone highlight */}
          <ellipse
            cx={106}
            cy={syndY}
            rx={12}
            ry={10}
            fill={color}
            opacity={opacity * 0.15}
          />
        </>
      )}

      {fractureType === 2 && (
        /* Type C: Above syndesmosis - suprasyndesmotic */
        <>
          <path
            d={`M98 ${syndY - 30} L105 ${syndY - 20} L112 ${syndY - 32}`}
            fill="none"
            stroke={color}
            strokeWidth={fractureWidth}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Fracture zone highlight */}
          <ellipse
            cx={105}
            cy={syndY - 25}
            rx={12}
            ry={10}
            fill={color}
            opacity={opacity * 0.15}
          />
          {/* Disrupted syndesmosis indicator */}
          <path
            d={`M90 ${syndY - 5} L95 ${syndY + 5}`}
            fill="none"
            stroke={CLINICAL_COLORS.danger}
            strokeWidth={1.5}
            opacity={opacity * 0.5}
            strokeDasharray="2 2"
          />
        </>
      )}

      {/* Level indicator arrow */}
      {fractureType === 0 && (
        <path d={`M130 ${syndY + 30} L130 ${syndY + 5}`} fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.5} markerEnd="url(#arrowUp)" />
      )}
      {fractureType === 1 && (
        <line x1={130} y1={syndY} x2={125} y2={syndY} stroke={color} strokeWidth={1.5} opacity={opacity * 0.5} />
      )}
      {fractureType === 2 && (
        <path d={`M130 ${syndY - 25} L130 ${syndY - 5}`} fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.5} markerEnd="url(#arrowDown)" />
      )}
    </g>
  );
}

export function WeberSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(type: WeberType): string {
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

  const cellW = 190;
  const startX = 10;

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Weber classification of ankle fractures - Types A, B, and C relative to the syndesmosis"
    >
      <title>Weber Classification of Ankle Fractures</title>
      <defs>
        <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
          <path d="M1 6 L3 0 L5 6" fill={BONE_OUTLINE} />
        </marker>
        <marker id="arrowDown" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
          <path d="M1 0 L3 6 L5 0" fill={BONE_OUTLINE} />
        </marker>
      </defs>

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
          Weber Classification of Ankle Fractures (AP View)
        </text>
      )}

      {TYPES.map((type, idx) => {
        const cx = startX + idx * cellW;
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
            aria-label={`${type.label}: ${type.description} (${type.level})`}
          >
            {/* Background card */}
            <rect
              x={cx + 5}
              y={40}
              width={cellW - 10}
              height={310}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.08 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <AnkleMortise
              x={cx + 25}
              y={55}
              fractureType={idx}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2}
                  y={280}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={14}
                  fontWeight={isActive ? 700 : 500}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {type.label}
                </text>
                <text
                  x={cx + cellW / 2}
                  y={298}
                  textAnchor="middle"
                  fill={color}
                  fontSize={10}
                  opacity={isActive ? 0.9 : 0.5}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.level}
                </text>
                <text
                  x={cx + cellW / 2}
                  y={314}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={9}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.description}
                </text>
                {/* Stability indicator */}
                <g transform={`translate(${cx + cellW / 2 - 30}, 325)`}>
                  <text
                    x={30}
                    y={12}
                    textAnchor="middle"
                    fill={color}
                    fontSize={8}
                    opacity={0.7}
                    fontFamily="system-ui, sans-serif"
                  >
                    {idx === 0 && 'Syndesmosis intact - Stable'}
                    {idx === 1 && 'Syndesmosis may be injured'}
                    {idx === 2 && 'Syndesmosis disrupted - Unstable'}
                  </text>
                </g>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
