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

interface HawkinsType {
  id: string;
  label: string;
  description: string;
  avnRisk: string;
  color: string;
}

const TYPES: HawkinsType[] = [
  {
    id: 'type-i',
    label: 'Type I',
    description: 'Non-displaced neck fracture',
    avnRisk: 'AVN risk: 0-13%',
    color: CLINICAL_COLORS.safe,
  },
  {
    id: 'type-ii',
    label: 'Type II',
    description: 'Displaced + subtalar subluxation/dislocation',
    avnRisk: 'AVN risk: 20-50%',
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'type-iii',
    label: 'Type III',
    description: 'Displaced + subtalar + tibiotalar dislocation',
    avnRisk: 'AVN risk: 20-100%',
    color: CLINICAL_COLORS.danger,
  },
  {
    id: 'type-iv',
    label: 'Type IV',
    description: '+ Talonavicular dislocation',
    avnRisk: 'AVN risk: ~100%',
    color: CLINICAL_COLORS.danger,
  },
];

function FootLateral({
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
  // Displacement offsets based on type
  const subtalarDisp = typeIndex >= 1 ? 8 : 0;
  const tibiotalarDisp = typeIndex >= 2 ? 10 : 0;
  const talonavDisp = typeIndex >= 3 ? 12 : 0;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* === Tibia (above) === */}
      <path
        d={`M25 0 L25 45 Q25 55 30 58 L55 60 Q60 58 60 50 L60 0`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
        transform={`translate(${tibiotalarDisp * 0.3}, 0)`}
      />
      <text
        x={42 + tibiotalarDisp * 0.3}
        y={20}
        textAnchor="middle"
        fill={BONE_OUTLINE}
        fontSize={7}
        opacity={0.4}
        fontFamily="system-ui, sans-serif"
      >
        Tibia
      </text>

      {/* === Talus === */}
      <g transform={`translate(${tibiotalarDisp}, ${subtalarDisp})`}>
        {/* Talar body */}
        <path
          d="M20 62 Q25 55 42 52 Q60 55 65 62 L68 75 Q65 85 50 88 Q30 85 20 78 Z"
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />
        {/* Talar dome (superior articular surface) */}
        <path
          d="M22 64 Q42 52 63 64"
          fill="none"
          stroke={BONE_OUTLINE}
          strokeWidth={1}
          opacity={0.6}
        />

        {/* Talar neck */}
        <path
          d={`M20 72 L8 68 Q2 65 0 62 Q-2 58 2 55 L15 58`}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.2}
          transform={`translate(${-talonavDisp * 0.5}, 0)`}
        />

        {/* Talar head */}
        <path
          d={`M2 55 Q-5 50 -8 45 Q-10 38 -5 33 Q0 28 8 30 Q15 32 15 40 L15 58 L2 55`}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.2}
          transform={`translate(${-talonavDisp}, 0)`}
        />

        {/* FRACTURE LINE through talar neck */}
        <path
          d={`M12 55 L18 72`}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          opacity={opacity}
          strokeLinecap="round"
        />
        {/* Fracture zone highlight */}
        <ellipse cx={15} cy={63} rx={8} ry={12} fill={color} opacity={opacity * 0.12} />
      </g>

      {/* === Calcaneus (below talus) === */}
      <path
        d="M15 90 Q25 85 45 84 Q65 85 75 90 L80 100 Q82 115 75 125 L20 128 Q10 125 8 115 Q5 105 10 95 Z"
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />
      <text x={45} y={115} textAnchor="middle" fill={BONE_OUTLINE} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif">
        Calcaneus
      </text>

      {/* === Navicular (anterior to talus) === */}
      <path
        d={`M-18 35 Q-22 28 -18 22 Q-12 18 -5 20 Q0 22 2 28 L0 40 Q-5 45 -12 42 Z`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1}
        transform={`translate(${tibiotalarDisp - talonavDisp}, ${subtalarDisp})`}
      />

      {/* === Joint disruption indicators === */}
      {/* Subtalar dislocation */}
      {typeIndex >= 1 && (
        <g>
          <path
            d={`M30 ${82 + subtalarDisp} Q42 ${78 + subtalarDisp} 58 ${82 + subtalarDisp}`}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            opacity={opacity * 0.6}
            strokeDasharray="3 2"
          />
          <text
            x={90}
            y={85 + subtalarDisp}
            fill={color}
            fontSize={7}
            opacity={opacity * 0.7}
            fontFamily="system-ui, sans-serif"
          >
            Subtalar
          </text>
        </g>
      )}

      {/* Tibiotalar dislocation */}
      {typeIndex >= 2 && (
        <g>
          <path
            d={`M${25 + tibiotalarDisp} 58 Q${42 + tibiotalarDisp * 0.5} 50 ${55 + tibiotalarDisp * 0.3} 56`}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            opacity={opacity * 0.6}
            strokeDasharray="3 2"
          />
          <text
            x={90}
            y={55}
            fill={color}
            fontSize={7}
            opacity={opacity * 0.7}
            fontFamily="system-ui, sans-serif"
          >
            Tibiotalar
          </text>
        </g>
      )}

      {/* Talonavicular dislocation */}
      {typeIndex >= 3 && (
        <g>
          <path
            d={`M${5 + tibiotalarDisp - talonavDisp} ${52 + subtalarDisp} L${-8 + tibiotalarDisp - talonavDisp} ${38 + subtalarDisp}`}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            opacity={opacity * 0.6}
            strokeDasharray="3 2"
          />
          <text
            x={-30 + tibiotalarDisp - talonavDisp}
            y={33 + subtalarDisp}
            fill={color}
            fontSize={7}
            opacity={opacity * 0.7}
            fontFamily="system-ui, sans-serif"
            textAnchor="end"
          >
            Talonavicular
          </text>
        </g>
      )}

      {/* Displacement arrows */}
      {typeIndex >= 1 && (
        <path
          d={`M75 ${70 + subtalarDisp} L85 ${65 + subtalarDisp}`}
          fill="none"
          stroke={color}
          strokeWidth={1}
          opacity={opacity * 0.5}
          markerEnd="url(#hawkArrow)"
        />
      )}
    </g>
  );
}

export function HawkinsSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(type: HawkinsType): string {
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
      aria-label="Hawkins classification of talar neck fractures showing Types I through IV with progressive joint disruption"
    >
      <title>Hawkins Classification of Talar Neck Fractures</title>
      <defs>
        <marker id="hawkArrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" fill={BONE_OUTLINE} />
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
          Hawkins Classification of Talar Neck Fractures (Lateral View)
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
            aria-label={`${type.label}: ${type.description}. ${type.avnRisk}`}
          >
            {/* Background card */}
            <rect
              x={cx + 5}
              y={40}
              width={cellW - 10}
              height={240}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.08 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <FootLateral
              x={cx + 50}
              y={55}
              typeIndex={idx}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2}
                  y={220}
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
                  x={cx + cellW / 2}
                  y={236}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={8}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.description.length > 30
                    ? type.description.substring(0, 28) + '...'
                    : type.description}
                </text>
                {/* AVN risk */}
                <text
                  x={cx + cellW / 2}
                  y={254}
                  textAnchor="middle"
                  fill={color}
                  fontSize={9}
                  fontWeight={500}
                  opacity={isActive ? 1 : 0.6}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'opacity 0.3s ease' }}
                >
                  {type.avnRisk}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Detail panel */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={300} width={540} height={80} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const type = TYPES.find((t) => t.id === activeGrade);
            if (!type) return null;
            const color = getColor(type);
            return (
              <>
                <circle cx={50} cy={325} r={6} fill={color} opacity={0.6} />
                <text x={65} y={329} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {type.label}: {type.description}
                </text>
                <text x={65} y={350} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  {type.avnRisk}
                </text>
                <text x={65} y={368} fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
                  {type.id === 'type-i' && 'No joint disruption. Blood supply partially preserved.'}
                  {type.id === 'type-ii' && 'Subtalar joint disrupted. Sinus tarsi vessels interrupted.'}
                  {type.id === 'type-iii' && 'Two joints disrupted. Significant vascular compromise to talar body.'}
                  {type.id === 'type-iv' && 'Three joints disrupted. Near-complete devascularization of talar body.'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
