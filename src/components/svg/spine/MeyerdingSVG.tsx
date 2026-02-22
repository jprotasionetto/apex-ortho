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

interface MeyerdingGrade {
  id: string;
  label: string;
  percentage: string;
  description: string;
  slipFraction: number; // 0 to 1.2 (>1 for spondyloptosis)
  color: string;
}

const GRADES: MeyerdingGrade[] = [
  { id: 'grade-i', label: 'Grade I', percentage: '0-25%', description: 'Mild slip', slipFraction: 0.2, color: CLINICAL_COLORS.safe },
  { id: 'grade-ii', label: 'Grade II', percentage: '25-50%', description: 'Moderate slip', slipFraction: 0.4, color: CLINICAL_COLORS.caution },
  { id: 'grade-iii', label: 'Grade III', percentage: '50-75%', description: 'Severe slip', slipFraction: 0.65, color: CLINICAL_COLORS.caution },
  { id: 'grade-iv', label: 'Grade IV', percentage: '75-100%', description: 'Complete slip', slipFraction: 0.9, color: CLINICAL_COLORS.danger },
  { id: 'grade-v', label: 'Grade V', percentage: '>100%', description: 'Spondyloptosis', slipFraction: 1.15, color: CLINICAL_COLORS.danger },
];

function VertebralSegment({
  x,
  y,
  slipFraction,
  color,
  opacity,
  showPercentageMarkers,
}: {
  x: number;
  y: number;
  slipFraction: number;
  color: string;
  opacity: number;
  showPercentageMarkers: boolean;
}) {
  const vbW = 70;
  const vbH = 30;
  const slipOffset = slipFraction * vbW;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* S1 (sacrum) - stationary lower vertebra */}
      <path
        d={`M0 ${vbH + 8} L${vbW} ${vbH + 8} L${vbW + 15} ${vbH + 45} Q${vbW + 10} ${vbH + 55} ${vbW} ${vbH + 55} L0 ${vbH + 55} Q-10 ${vbH + 55} -15 ${vbH + 45} Z`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />
      {/* S1 superior endplate */}
      <line x1={0} y1={vbH + 8} x2={vbW} y2={vbH + 8} stroke={BONE_OUTLINE} strokeWidth={1} opacity={0.6} />

      {/* Percentage marker lines on S1 */}
      {showPercentageMarkers && (
        <>
          <line x1={0} y1={vbH + 5} x2={0} y2={vbH + 12} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.4} />
          <line x1={vbW * 0.25} y1={vbH + 5} x2={vbW * 0.25} y2={vbH + 12} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.4} />
          <line x1={vbW * 0.5} y1={vbH + 5} x2={vbW * 0.5} y2={vbH + 12} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.4} />
          <line x1={vbW * 0.75} y1={vbH + 5} x2={vbW * 0.75} y2={vbH + 12} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.4} />
          <line x1={vbW} y1={vbH + 5} x2={vbW} y2={vbH + 12} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.4} />
          {/* Percentage labels */}
          <text x={0} y={vbH + 20} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">0%</text>
          <text x={vbW * 0.25} y={vbH + 20} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">25</text>
          <text x={vbW * 0.5} y={vbH + 20} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">50</text>
          <text x={vbW * 0.75} y={vbH + 20} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">75</text>
          <text x={vbW} y={vbH + 20} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">100</text>
        </>
      )}

      {/* L5 - displaced vertebra */}
      <g transform={`translate(${-slipOffset}, 0)`}>
        <rect
          x={0}
          y={0}
          width={vbW}
          height={vbH}
          rx={3}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />
        {/* Pedicle/posterior elements hint */}
        <path
          d={`M${vbW} ${5} L${vbW + 15} ${2} L${vbW + 18} ${8} L${vbW + 25} ${5} L${vbW + 30} ${10} L${vbW + 25} ${15} L${vbW + 18} ${12} L${vbW + 15} ${18} L${vbW} ${vbH - 5}`}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1}
        />
        {/* L5 label */}
        <text x={vbW / 2} y={vbH / 2 + 4} textAnchor="middle" fill={BONE_OUTLINE} fontSize={8} opacity={0.5} fontFamily="system-ui, sans-serif">L5</text>
      </g>

      {/* Slip distance indicator */}
      {slipOffset > 0 && (
        <>
          {/* Arrow showing slip direction */}
          <line
            x1={0}
            y1={vbH + 3}
            x2={-slipOffset}
            y2={vbH + 3}
            stroke={color}
            strokeWidth={1.5}
            opacity={opacity}
          />
          <polygon
            points={`${-slipOffset},${vbH} ${-slipOffset + 5},${vbH + 3} ${-slipOffset},${vbH + 6}`}
            fill={color}
            opacity={opacity}
          />
        </>
      )}

      {/* S1 label */}
      <text x={vbW / 2} y={vbH + 35} textAnchor="middle" fill={BONE_OUTLINE} fontSize={8} opacity={0.5} fontFamily="system-ui, sans-serif">S1</text>
    </g>
  );
}

export function MeyerdingSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(grade: MeyerdingGrade): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return grade.color;
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

  const cellW = 112;
  const startX = 15;
  const segY = 80;

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Meyerding classification of spondylolisthesis showing grades I through V with progressive anterior slippage"
    >
      <title>Meyerding Classification of Spondylolisthesis</title>
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
          Meyerding Classification (Lateral View L5-S1)
        </text>
      )}

      {/* Progression arrow */}
      <line x1={startX + 20} y1={55} x2={startX + cellW * 5 - 20} y2={55} stroke={BONE_OUTLINE} strokeWidth={0.8} opacity={0.3} />
      <polygon points={`${startX + cellW * 5 - 20},52 ${startX + cellW * 5 - 10},55 ${startX + cellW * 5 - 20},58`} fill={BONE_OUTLINE} opacity={0.3} />
      {showLabels && (
        <>
          <text x={startX + 20} y={50} fill={CLINICAL_COLORS.safe} fontSize={8} opacity={0.5} fontFamily="system-ui, sans-serif">Mild</text>
          <text x={startX + cellW * 5 - 50} y={50} fill={CLINICAL_COLORS.danger} fontSize={8} opacity={0.5} textAnchor="end" fontFamily="system-ui, sans-serif">Severe</text>
        </>
      )}

      {GRADES.map((grade, idx) => {
        const cx = startX + idx * cellW + 20;
        const color = getColor(grade);
        const opacity = getOpacity(grade.id);
        const isActive = activeGrade === grade.id;

        return (
          <g
            key={grade.id}
            style={{ transition: 'opacity 0.3s ease' }}
            cursor={interactive ? 'pointer' : 'default'}
            onClick={() => handleClick(grade.id)}
            onKeyDown={(e) => handleKeyDown(e, grade.id)}
            onMouseEnter={() => interactive && setHoveredGrade(grade.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            tabIndex={interactive ? 0 : undefined}
            role={interactive ? 'button' : undefined}
            aria-pressed={interactive ? isActive : undefined}
            aria-label={`${grade.label}: ${grade.percentage} slip - ${grade.description}`}
          >
            {/* Background highlight */}
            <rect
              x={cx - 12}
              y={segY - 15}
              width={cellW - 8}
              height={150}
              rx={6}
              fill={isActive ? color : 'transparent'}
              opacity={isActive ? 0.07 : 0}
              stroke={isActive ? color : 'transparent'}
              strokeWidth={1}
              style={{ transition: 'all 0.3s ease' }}
            />

            <VertebralSegment
              x={cx + 15}
              y={segY}
              slipFraction={grade.slipFraction}
              color={color}
              opacity={opacity}
              showPercentageMarkers={isActive}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2 - 10}
                  y={segY + 105}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={11}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {grade.label}
                </text>
                <text
                  x={cx + cellW / 2 - 10}
                  y={segY + 119}
                  textAnchor="middle"
                  fill={color}
                  fontSize={10}
                  fontWeight={500}
                  opacity={isActive ? 1 : 0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {grade.percentage}
                </text>
                <text
                  x={cx + cellW / 2 - 10}
                  y={segY + 133}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={8}
                  opacity={0.5}
                  fontFamily="system-ui, sans-serif"
                >
                  {grade.description}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Detail panel for active grade */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={310} width={540} height={70} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const grade = GRADES.find((g) => g.id === activeGrade);
            if (!grade) return null;
            const color = getColor(grade);
            return (
              <>
                <circle cx={50} cy={335} r={6} fill={color} opacity={0.6} />
                <text x={65} y={339} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {grade.label} ({grade.percentage})
                </text>
                <text x={65} y={358} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  {grade.description}
                  {grade.id === 'grade-v' && ' - L5 has completely slipped off S1 anteriorly'}
                  {grade.id === 'grade-iv' && ' - Near complete displacement of L5 on S1'}
                  {grade.id === 'grade-iii' && ' - Significant anterior displacement of L5'}
                  {grade.id === 'grade-ii' && ' - Moderate anterior displacement'}
                  {grade.id === 'grade-i' && ' - Minimal anterior displacement, often asymptomatic'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
