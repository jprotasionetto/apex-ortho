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

interface HerringGroup {
  id: string;
  label: string;
  description: string;
  pillarHeight: string;
  prognosis: string;
  color: string;
  heightFraction: number; // fraction of lateral pillar maintained
}

const GROUPS: HerringGroup[] = [
  {
    id: 'group-a',
    label: 'Group A',
    description: 'Lateral pillar full height maintained',
    pillarHeight: '100%',
    prognosis: 'Good prognosis',
    color: CLINICAL_COLORS.safe,
    heightFraction: 1.0,
  },
  {
    id: 'group-b',
    label: 'Group B',
    description: 'Lateral pillar &gt;50% height maintained',
    pillarHeight: '>50%',
    prognosis: 'Variable prognosis',
    color: CLINICAL_COLORS.caution,
    heightFraction: 0.7,
  },
  {
    id: 'group-b-c',
    label: 'Group B/C',
    description: 'Lateral pillar exactly 50% height',
    pillarHeight: '~50%',
    prognosis: 'Guarded prognosis',
    color: CLINICAL_COLORS.caution,
    heightFraction: 0.5,
  },
  {
    id: 'group-c',
    label: 'Group C',
    description: 'Lateral pillar &lt;50% height maintained',
    pillarHeight: '&lt;50%',
    prognosis: 'Poor prognosis',
    color: CLINICAL_COLORS.danger,
    heightFraction: 0.3,
  },
];

function FemoralHeadAP({
  x,
  y,
  group,
  color,
  opacity,
}: {
  x: number;
  y: number;
  group: HerringGroup;
  color: string;
  opacity: number;
}) {
  const headR = 40; // Femoral head radius
  const cx = headR + 5;
  const cy = headR + 5;
  // Pillar boundaries (lateral is the rightmost third)
  const lateralPillarX = cx + headR * 0.3;
  const centralPillarX = cx - headR * 0.3;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Acetabulum (socket outline) */}
      <path
        d={`M${cx - headR - 10} ${cy - 5} Q${cx - headR - 15} ${cy} ${cx - headR - 12} ${cy + headR + 10} L${cx + headR + 12} ${cy + headR + 10} Q${cx + headR + 15} ${cy} ${cx + headR + 10} ${cy - 5}`}
        fill="none"
        stroke={BONE_OUTLINE}
        strokeWidth={1}
        strokeDasharray="3 3"
        opacity={0.3}
      />

      {/* Normal femoral head outline */}
      <circle
        cx={cx}
        cy={cy}
        r={headR}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />

      {/* Reference height line (normal contralateral) */}
      <line
        x1={cx + headR + 15}
        y1={cy - headR}
        x2={cx + headR + 15}
        y2={cy + headR}
        stroke={BONE_OUTLINE}
        strokeWidth={0.5}
        strokeDasharray="2 3"
        opacity={0.3}
      />

      {/* Pillar division lines */}
      <line
        x1={centralPillarX}
        y1={cy - headR + 5}
        x2={centralPillarX}
        y2={cy + headR - 5}
        stroke={BONE_OUTLINE}
        strokeWidth={0.5}
        strokeDasharray="2 2"
        opacity={0.3}
      />
      <line
        x1={lateralPillarX}
        y1={cy - headR + 3}
        x2={lateralPillarX}
        y2={cy + headR - 3}
        stroke={BONE_OUTLINE}
        strokeWidth={0.5}
        strokeDasharray="2 2"
        opacity={0.3}
      />

      {/* Pillar labels at top */}
      <text x={cx - headR * 0.6} y={cy - headR - 6} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.4} fontFamily="system-ui, sans-serif">Med</text>
      <text x={cx} y={cy - headR - 6} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.4} fontFamily="system-ui, sans-serif">Central</text>
      <text x={cx + headR * 0.6} y={cy - headR - 6} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.4} fontFamily="system-ui, sans-serif">Lateral</text>

      {/* === Necrosis / collapse visualization === */}
      {/* Central pillar - always affected in Perthes */}
      <path
        d={`M${centralPillarX} ${cy - headR + 10} L${lateralPillarX} ${cy - headR + 10} L${lateralPillarX} ${cy + headR - 10} L${centralPillarX} ${cy + headR - 10} Z`}
        fill={BONE_OUTLINE}
        opacity={0.1}
      />

      {/* Medial pillar - affected but variable */}
      <path
        d={`M${cx - headR + 8} ${cy - headR + 12} L${centralPillarX} ${cy - headR + 10} L${centralPillarX} ${cy + headR - 10} L${cx - headR + 8} ${cy + headR - 12} Z`}
        fill={BONE_OUTLINE}
        opacity={0.08}
      />

      {/* Fragmentation in central zone */}
      <circle cx={cx - 5} cy={cy - 5} r={5} fill={BONE_OUTLINE} opacity={0.12} />
      <circle cx={cx + 3} cy={cy + 8} r={4} fill={BONE_OUTLINE} opacity={0.1} />
      <circle cx={cx - 8} cy={cy + 5} r={3} fill={BONE_OUTLINE} opacity={0.1} />

      {/* === Lateral pillar highlighting === */}
      {/* Full lateral pillar reference outline */}
      <path
        d={`M${lateralPillarX} ${cy - headR + 3}
           Q${cx + headR - 2} ${cy - headR + 5} ${cx + headR} ${cy}
           Q${cx + headR - 2} ${cy + headR - 5} ${lateralPillarX} ${cy + headR - 3} Z`}
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeDasharray="3 3"
        opacity={opacity * 0.3}
      />

      {/* Actual lateral pillar height */}
      {group.heightFraction < 1.0 ? (
        <>
          {/* Collapsed portion (darkened) */}
          <path
            d={`M${lateralPillarX} ${cy - headR * group.heightFraction + 3}
               Q${cx + headR * group.heightFraction - 2} ${cy - headR * group.heightFraction + 5} ${cx + headR * group.heightFraction} ${cy}
               Q${cx + headR * group.heightFraction - 2} ${cy + headR * group.heightFraction - 5} ${lateralPillarX} ${cy + headR * group.heightFraction - 3} Z`}
            fill={color}
            opacity={opacity * 0.3}
            stroke={color}
            strokeWidth={1.5}
          />
          {/* Lost height area */}
          <path
            d={`M${lateralPillarX} ${cy - headR + 3}
               Q${cx + headR - 2} ${cy - headR + 5} ${cx + headR} ${cy - headR * (1 - group.heightFraction)}
               L${cx + headR * group.heightFraction} ${cy - headR * (1 - group.heightFraction) + 5}
               Q${cx + headR * group.heightFraction - 5} ${cy - headR * group.heightFraction + 8} ${lateralPillarX} ${cy - headR * group.heightFraction + 3} Z`}
            fill={CLINICAL_COLORS.danger}
            opacity={opacity * 0.15}
          />
        </>
      ) : (
        /* Group A: Full height maintained */
        <path
          d={`M${lateralPillarX} ${cy - headR + 3}
             Q${cx + headR - 2} ${cy - headR + 5} ${cx + headR} ${cy}
             Q${cx + headR - 2} ${cy + headR - 5} ${lateralPillarX} ${cy + headR - 3} Z`}
          fill={color}
          opacity={opacity * 0.25}
          stroke={color}
          strokeWidth={1.5}
        />
      )}

      {/* Height percentage indicator */}
      <g transform={`translate(${cx + headR + 18}, ${cy - headR})`}>
        {/* Full height bracket */}
        <line x1={0} y1={0} x2={0} y2={headR * 2} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.3} />
        {/* Maintained height bracket */}
        <line
          x1={-3}
          y1={headR * (1 - group.heightFraction)}
          x2={3}
          y2={headR * (1 - group.heightFraction)}
          stroke={color}
          strokeWidth={1}
          opacity={opacity * 0.7}
        />
        <line
          x1={-3}
          y1={headR * (1 + group.heightFraction)}
          x2={3}
          y2={headR * (1 + group.heightFraction)}
          stroke={color}
          strokeWidth={1}
          opacity={opacity * 0.7}
        />
        <line
          x1={0}
          y1={headR * (1 - group.heightFraction)}
          x2={0}
          y2={headR * (1 + group.heightFraction)}
          stroke={color}
          strokeWidth={1.5}
          opacity={opacity * 0.6}
        />
        <text
          x={8}
          y={headR + 4}
          fill={color}
          fontSize={8}
          fontWeight={500}
          opacity={opacity * 0.8}
          fontFamily="system-ui, sans-serif"
        >
          {group.pillarHeight}
        </text>
      </g>

      {/* Femoral neck */}
      <path
        d={`M${cx - 12} ${cy + headR} L${cx - 20} ${cy + headR + 30} L${cx + 20} ${cy + headR + 30} L${cx + 12} ${cy + headR}`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1}
      />
    </g>
  );
}

export function HerringSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(group: HerringGroup): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return group.color;
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
      aria-label="Herring lateral pillar classification of Legg-Calve-Perthes disease showing Groups A, B, B/C, and C"
    >
      <title>Herring Lateral Pillar Classification (Legg-Calve-Perthes Disease)</title>
      <rect width="600" height="400" fill={BG} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={25}
          textAnchor="middle"
          fill={BONE_OUTLINE}
          fontSize={13}
          fontWeight={600}
          fontFamily="system-ui, sans-serif"
        >
          Herring Lateral Pillar Classification (Perthes Disease)
        </text>
      )}

      {GROUPS.map((group, idx) => {
        const cx = startX + idx * cellW;
        const color = getColor(group);
        const opacity = getOpacity(group.id);
        const isActive = activeGrade === group.id;

        return (
          <g
            key={group.id}
            style={{ transition: 'opacity 0.3s ease' }}
            cursor={interactive ? 'pointer' : 'default'}
            onClick={() => handleClick(group.id)}
            onKeyDown={(e) => handleKeyDown(e, group.id)}
            onMouseEnter={() => interactive && setHoveredGrade(group.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            tabIndex={interactive ? 0 : undefined}
            role={interactive ? 'button' : undefined}
            aria-pressed={interactive ? isActive : undefined}
            aria-label={`${group.label}: ${group.description}. ${group.prognosis}`}
          >
            {/* Background card */}
            <rect
              x={cx + 5}
              y={38}
              width={cellW - 10}
              height={245}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.08 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <FemoralHeadAP
              x={cx + 15}
              y={50}
              group={group}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2}
                  y={218}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={13}
                  fontWeight={isActive ? 700 : 500}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {group.label}
                </text>
                <text
                  x={cx + cellW / 2}
                  y={234}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={8}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  Lateral pillar: {group.pillarHeight}
                </text>
                <text
                  x={cx + cellW / 2}
                  y={250}
                  textAnchor="middle"
                  fill={color}
                  fontSize={9}
                  opacity={isActive ? 0.9 : 0.5}
                  fontWeight={500}
                  fontFamily="system-ui, sans-serif"
                >
                  {group.prognosis}
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
            const group = GROUPS.find((g) => g.id === activeGrade);
            if (!group) return null;
            const color = getColor(group);
            return (
              <>
                <circle cx={50} cy={325} r={6} fill={color} opacity={0.6} />
                <text x={65} y={329} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {group.label}: {group.description}
                </text>
                <text x={65} y={349} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  {group.prognosis}. Lateral pillar height maintained: {group.pillarHeight}.
                </text>
                <text x={65} y={367} fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
                  {group.id === 'group-a' && 'No lateral pillar involvement. Femoral head remains spherical. Best outcome regardless of age.'}
                  {group.id === 'group-b' && 'Some lateral pillar collapse but &gt;50% maintained. Outcome age-dependent (worse if &gt;8 years).'}
                  {group.id === 'group-b-c' && 'Borderline group. Lateral pillar at approximately 50%. Treat as Group C in older children.'}
                  {group.id === 'group-c' && 'Significant lateral pillar collapse (&lt;50%). High risk of femoral head deformity. Worst prognosis.'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
