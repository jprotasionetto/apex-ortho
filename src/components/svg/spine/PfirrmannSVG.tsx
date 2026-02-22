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

interface PfirrmannGrade {
  id: string;
  label: string;
  signalIntensity: string;
  structure: string;
  discHeight: string;
  color: string;
  discColor: string;
  nucleusVisible: boolean;
  heightFraction: number; // 0 to 1, how much disc height is preserved
}

const GRADES: PfirrmannGrade[] = [
  {
    id: 'grade-i',
    label: 'Grade I',
    signalIntensity: 'Bright white, homogeneous',
    structure: 'Homogeneous',
    discHeight: 'Normal',
    color: CLINICAL_COLORS.safe,
    discColor: '#F8FAFC',
    nucleusVisible: true,
    heightFraction: 1.0,
  },
  {
    id: 'grade-ii',
    label: 'Grade II',
    signalIntensity: 'White with horizontal bands',
    structure: 'Inhomogeneous with bands',
    discHeight: 'Normal',
    color: CLINICAL_COLORS.safe,
    discColor: '#E2E8F0',
    nucleusVisible: true,
    heightFraction: 1.0,
  },
  {
    id: 'grade-iii',
    label: 'Grade III',
    signalIntensity: 'Gray, intermediate',
    structure: 'Inhomogeneous, gray',
    discHeight: 'Normal to slightly decreased',
    color: CLINICAL_COLORS.caution,
    discColor: '#94A3B8',
    nucleusVisible: false,
    heightFraction: 0.85,
  },
  {
    id: 'grade-iv',
    label: 'Grade IV',
    signalIntensity: 'Dark gray to black',
    structure: 'Inhomogeneous, dark',
    discHeight: 'Moderately decreased',
    color: CLINICAL_COLORS.caution,
    discColor: '#475569',
    nucleusVisible: false,
    heightFraction: 0.6,
  },
  {
    id: 'grade-v',
    label: 'Grade V',
    signalIntensity: 'Black, no signal',
    structure: 'Inhomogeneous, collapsed',
    discHeight: 'Collapsed',
    color: CLINICAL_COLORS.danger,
    discColor: '#1E293B',
    nucleusVisible: false,
    heightFraction: 0.25,
  },
];

function DiscSegment({
  x,
  y,
  grade,
  color,
  opacity,
}: {
  x: number;
  y: number;
  grade: PfirrmannGrade;
  color: string;
  opacity: number;
}) {
  const vbW = 65;
  const vbH = 30;
  const maxDiscH = 22;
  const discH = maxDiscH * grade.heightFraction;
  // MRI-style appearance: dark background vertebral bodies, disc with signal
  const mriVertColor = '#CBD5E1'; // Vertebral body on T2 MRI

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Upper vertebral body (T2 MRI signal) */}
      <rect
        x={0}
        y={0}
        width={vbW}
        height={vbH}
        rx={2}
        fill={mriVertColor}
        opacity={0.15}
        stroke={BONE_OUTLINE}
        strokeWidth={1}
      />
      {/* Upper endplate */}
      <line x1={0} y1={vbH} x2={vbW} y2={vbH} stroke={BONE_OUTLINE} strokeWidth={1.2} opacity={0.6} />

      {/* Intervertebral disc */}
      <g transform={`translate(0, ${vbH + (maxDiscH - discH) / 2})`}>
        {/* Annulus fibrosus outline */}
        <rect
          x={0}
          y={0}
          width={vbW}
          height={discH}
          rx={2}
          fill={grade.discColor}
          opacity={opacity * 0.8}
          stroke={color}
          strokeWidth={opacity > 0.6 ? 1.5 : 0.8}
          style={{ transition: 'opacity 0.3s ease' }}
        />

        {/* Nucleus pulposus (visible in grades I & II) */}
        {grade.nucleusVisible && (
          <ellipse
            cx={vbW / 2}
            cy={discH / 2}
            rx={vbW * 0.35}
            ry={discH * 0.4}
            fill={grade.discColor}
            opacity={opacity}
            stroke={grade.discColor}
            strokeWidth={0.5}
          />
        )}

        {/* Horizontal bands for Grade II */}
        {grade.id === 'grade-ii' && (
          <>
            <line x1={8} y1={discH * 0.35} x2={vbW - 8} y2={discH * 0.35} stroke={BONE_OUTLINE} strokeWidth={0.6} opacity={opacity * 0.4} />
            <line x1={10} y1={discH * 0.65} x2={vbW - 10} y2={discH * 0.65} stroke={BONE_OUTLINE} strokeWidth={0.6} opacity={opacity * 0.4} />
          </>
        )}

        {/* Grade III: indistinct nucleus/annulus boundary */}
        {grade.id === 'grade-iii' && (
          <>
            <line x1={5} y1={discH * 0.3} x2={vbW - 5} y2={discH * 0.4} stroke={BONE_OUTLINE} strokeWidth={0.4} opacity={opacity * 0.3} />
            <line x1={8} y1={discH * 0.7} x2={vbW - 8} y2={discH * 0.6} stroke={BONE_OUTLINE} strokeWidth={0.4} opacity={opacity * 0.3} />
          </>
        )}

        {/* Grade IV: dark, fragmented appearance */}
        {grade.id === 'grade-iv' && (
          <>
            <line x1={3} y1={discH * 0.5} x2={vbW - 3} y2={discH * 0.5} stroke={BG} strokeWidth={1} opacity={opacity * 0.4} />
            <rect x={10} y={2} width={15} height={discH - 4} rx={1} fill={BG} opacity={opacity * 0.2} />
            <rect x={35} y={3} width={12} height={discH - 6} rx={1} fill={BG} opacity={opacity * 0.15} />
          </>
        )}

        {/* Grade V: collapsed, black, vacuum phenomenon */}
        {grade.id === 'grade-v' && (
          <>
            <line x1={2} y1={discH * 0.5} x2={vbW - 2} y2={discH * 0.5} stroke={BG} strokeWidth={2} opacity={opacity * 0.5} />
          </>
        )}
      </g>

      {/* Lower endplate */}
      <line x1={0} y1={vbH + maxDiscH} x2={vbW} y2={vbH + maxDiscH} stroke={BONE_OUTLINE} strokeWidth={1.2} opacity={0.6} />

      {/* Lower vertebral body */}
      <rect
        x={0}
        y={vbH + maxDiscH}
        width={vbW}
        height={vbH}
        rx={2}
        fill={mriVertColor}
        opacity={0.15}
        stroke={BONE_OUTLINE}
        strokeWidth={1}
      />

      {/* Disc height indicator bracket */}
      <line x1={vbW + 8} y1={vbH + (maxDiscH - discH) / 2} x2={vbW + 8} y2={vbH + (maxDiscH + discH) / 2} stroke={color} strokeWidth={1} opacity={opacity * 0.6} />
      <line x1={vbW + 5} y1={vbH + (maxDiscH - discH) / 2} x2={vbW + 11} y2={vbH + (maxDiscH - discH) / 2} stroke={color} strokeWidth={0.8} opacity={opacity * 0.6} />
      <line x1={vbW + 5} y1={vbH + (maxDiscH + discH) / 2} x2={vbW + 11} y2={vbH + (maxDiscH + discH) / 2} stroke={color} strokeWidth={0.8} opacity={opacity * 0.6} />
    </g>
  );
}

export function PfirrmannSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(grade: PfirrmannGrade): string {
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
  const segY = 75;

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Pfirrmann classification of disc degeneration on MRI T2 - Grades I through V"
    >
      <title>Pfirrmann Classification of Disc Degeneration (MRI T2)</title>
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
          Pfirrmann Classification (Sagittal T2 MRI)
        </text>
      )}

      {/* MRI style indicator */}
      {showLabels && (
        <text x={555} y={28} textAnchor="end" fill={BONE_OUTLINE} fontSize={9} opacity={0.4} fontFamily="system-ui, sans-serif">
          T2-weighted
        </text>
      )}

      {/* Signal intensity scale */}
      {showLabels && (
        <g transform="translate(30, 48)">
          <text x={0} y={0} fill={BONE_OUTLINE} fontSize={8} opacity={0.4} fontFamily="system-ui, sans-serif">Signal:</text>
          <rect x={45} y={-8} width={80} height={10} rx={2} fill="url(#t2Signal)" />
          <text x={48} y={10} fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">Bright</text>
          <text x={115} y={10} fill={BONE_OUTLINE} fontSize={6} opacity={0.3} textAnchor="end" fontFamily="system-ui, sans-serif">Dark</text>
        </g>
      )}

      <defs>
        <linearGradient id="t2Signal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="25%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="75%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>

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
            aria-label={`${grade.label}: ${grade.signalIntensity}, ${grade.discHeight} height`}
          >
            {/* Background card */}
            <rect
              x={cx - 8}
              y={segY - 10}
              width={cellW - 25}
              height={110}
              rx={6}
              fill={isActive ? color : 'transparent'}
              opacity={isActive ? 0.07 : 0}
              stroke={isActive ? color : 'transparent'}
              strokeWidth={1}
              style={{ transition: 'all 0.3s ease' }}
            />

            <DiscSegment
              x={cx}
              y={segY}
              grade={grade}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                {/* Grade label */}
                <text
                  x={cx + 32}
                  y={segY + 100}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={11}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {grade.label}
                </text>
                {/* Signal description */}
                <text
                  x={cx + 32}
                  y={segY + 114}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={8}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {grade.signalIntensity.split(',')[0]}
                </text>
                {/* Height */}
                <text
                  x={cx + 32}
                  y={segY + 126}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={7}
                  opacity={0.5}
                  fontFamily="system-ui, sans-serif"
                >
                  Height: {grade.discHeight.toLowerCase()}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Detail panel */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={290} width={540} height={95} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const grade = GRADES.find((g) => g.id === activeGrade);
            if (!grade) return null;
            const color = getColor(grade);
            return (
              <>
                {/* Disc color swatch */}
                <rect x={45} y={305} width={20} height={20} rx={4} fill={grade.discColor} stroke={BONE_OUTLINE} strokeWidth={0.5} />
                <text x={75} y={318} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {grade.label}
                </text>
                <text x={75} y={336} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  Signal: {grade.signalIntensity}
                </text>
                <text x={75} y={352} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  Structure: {grade.structure}
                </text>
                <text x={75} y={368} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  Disc Height: {grade.discHeight}
                </text>
                <text x={400} y={318} fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
                  Nucleus/Annulus: {grade.nucleusVisible ? 'Distinguishable' : 'Indistinguishable'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
