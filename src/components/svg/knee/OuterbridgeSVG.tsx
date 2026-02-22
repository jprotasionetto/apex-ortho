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

interface OuterbridgeGrade {
  id: string;
  label: string;
  description: string;
  color: string;
}

const GRADES: OuterbridgeGrade[] = [
  { id: 'grade-0', label: 'Grade 0', description: 'Normal cartilage', color: CLINICAL_COLORS.safe },
  { id: 'grade-i', label: 'Grade I', description: 'Softening / swelling', color: CLINICAL_COLORS.safe },
  { id: 'grade-ii', label: 'Grade II', description: 'Fragmentation < 1.5 cm', color: CLINICAL_COLORS.caution },
  { id: 'grade-iii', label: 'Grade III', description: 'Fragmentation > 1.5 cm to subchondral bone', color: CLINICAL_COLORS.caution },
  { id: 'grade-iv', label: 'Grade IV', description: 'Exposed subchondral bone', color: CLINICAL_COLORS.danger },
];

const CARTILAGE_COLOR = '#60A5FA';
const SUBCHONDRAL_COLOR = '#F8FAFC';

function CartilageSection({
  x,
  y,
  grade,
  color,
  opacity,
}: {
  x: number;
  y: number;
  grade: number;
  color: string;
  opacity: number;
}) {
  const w = 80;
  const boneH = 50;
  const cartH = 30;
  const scBoneH = 8;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Subchondral bone layer */}
      <rect
        x={0}
        y={cartH}
        width={w}
        height={scBoneH}
        fill={SUBCHONDRAL_COLOR}
        opacity={0.15}
        stroke={BONE_OUTLINE}
        strokeWidth={0.5}
      />

      {/* Cancellous bone below */}
      <rect
        x={0}
        y={cartH + scBoneH}
        width={w}
        height={boneH}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1}
        rx={2}
      />
      {/* Bone trabecular pattern */}
      <line x1={15} y1={cartH + scBoneH + 10} x2={25} y2={cartH + scBoneH + 25} stroke={BONE_OUTLINE} strokeWidth={0.4} opacity={0.3} />
      <line x1={40} y1={cartH + scBoneH + 8} x2={50} y2={cartH + scBoneH + 22} stroke={BONE_OUTLINE} strokeWidth={0.4} opacity={0.3} />
      <line x1={60} y1={cartH + scBoneH + 12} x2={70} y2={cartH + scBoneH + 28} stroke={BONE_OUTLINE} strokeWidth={0.4} opacity={0.3} />

      {/* Grade-specific cartilage rendering */}
      {grade === 0 && (
        /* Normal cartilage - smooth, uniform */
        <rect
          x={0}
          y={0}
          width={w}
          height={cartH}
          fill={CARTILAGE_COLOR}
          opacity={opacity * 0.6}
          stroke={color}
          strokeWidth={activeStroke(opacity)}
          rx={2}
        />
      )}

      {grade === 1 && (
        /* Softening/swelling - slightly bulging, wavy surface */
        <>
          <path
            d={`M0 ${cartH} L0 5 Q10 -2 20 3 Q30 8 40 2 Q50 -2 60 4 Q70 8 ${w} 2 L${w} ${cartH} Z`}
            fill={CARTILAGE_COLOR}
            opacity={opacity * 0.5}
            stroke={color}
            strokeWidth={activeStroke(opacity)}
          />
          {/* Swelling indicator dots */}
          <circle cx={20} cy={12} r={3} fill={color} opacity={opacity * 0.3} />
          <circle cx={45} cy={10} r={4} fill={color} opacity={opacity * 0.25} />
          <circle cx={65} cy={14} r={3} fill={color} opacity={opacity * 0.3} />
        </>
      )}

      {grade === 2 && (
        /* Fragmentation < 1.5cm - small fissures, partial thickness */
        <>
          <rect x={0} y={0} width={w} height={cartH} fill={CARTILAGE_COLOR} opacity={opacity * 0.4} rx={2} />
          {/* Small fissure */}
          <path
            d={`M25 0 L28 ${cartH * 0.5} L22 ${cartH * 0.6}`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Small fragment */}
          <path
            d="M22 0 L28 0 L28 8 L22 10 Z"
            fill={color}
            opacity={opacity * 0.4}
          />
          {/* Dimension line showing < 1.5cm */}
          <line x1={18} y1={-8} x2={32} y2={-8} stroke={color} strokeWidth={0.8} opacity={opacity * 0.6} />
          <text x={25} y={-12} textAnchor="middle" fill={color} fontSize={7} opacity={opacity * 0.7} fontFamily="system-ui, sans-serif">
            &lt;1.5cm
          </text>
        </>
      )}

      {grade === 3 && (
        /* Fragmentation > 1.5cm reaching subchondral bone */
        <>
          <rect x={0} y={0} width={w} height={cartH} fill={CARTILAGE_COLOR} opacity={opacity * 0.3} rx={2} />
          {/* Large defect area */}
          <path
            d={`M15 0 L55 0 L55 ${cartH} L15 ${cartH} Z`}
            fill={BG}
            opacity={opacity * 0.5}
            stroke={color}
            strokeWidth={1.5}
          />
          {/* Fissure lines */}
          <path d={`M15 0 L18 ${cartH}`} fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          <path d={`M55 0 L52 ${cartH}`} fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />
          {/* Fragments */}
          <path d="M20 5 L30 3 L28 14 L18 12 Z" fill={CARTILAGE_COLOR} opacity={opacity * 0.5} stroke={color} strokeWidth={0.5} />
          <path d="M35 4 L48 2 L50 12 L38 15 Z" fill={CARTILAGE_COLOR} opacity={opacity * 0.5} stroke={color} strokeWidth={0.5} />
          {/* Dimension */}
          <line x1={12} y1={-8} x2={58} y2={-8} stroke={color} strokeWidth={0.8} opacity={opacity * 0.6} />
          <text x={35} y={-12} textAnchor="middle" fill={color} fontSize={7} opacity={opacity * 0.7} fontFamily="system-ui, sans-serif">
            &gt;1.5cm
          </text>
        </>
      )}

      {grade === 4 && (
        /* Exposed subchondral bone - complete cartilage loss */
        <>
          {/* Remaining cartilage edges */}
          <path
            d={`M0 0 L0 ${cartH} L12 ${cartH} L10 8 L0 0 Z`}
            fill={CARTILAGE_COLOR}
            opacity={opacity * 0.35}
          />
          <path
            d={`M${w} 0 L${w} ${cartH} L${w - 12} ${cartH} L${w - 10} 8 L${w} 0 Z`}
            fill={CARTILAGE_COLOR}
            opacity={opacity * 0.35}
          />
          {/* Exposed bone area */}
          <rect
            x={10}
            y={0}
            width={w - 20}
            height={cartH}
            fill={SUBCHONDRAL_COLOR}
            opacity={opacity * 0.2}
            stroke={color}
            strokeWidth={2}
          />
          {/* Bone surface texture */}
          <circle cx={25} cy={15} r={2} fill={color} opacity={opacity * 0.3} />
          <circle cx={40} cy={12} r={2.5} fill={color} opacity={opacity * 0.25} />
          <circle cx={55} cy={18} r={2} fill={color} opacity={opacity * 0.3} />
          {/* Erosion marks */}
          <path d="M30 cartH L32 26 L28 24" fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.5} />
        </>
      )}
    </g>
  );
}

function activeStroke(opacity: number): number {
  return opacity > 0.7 ? 2 : 1;
}

export function OuterbridgeSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(grade: OuterbridgeGrade): string {
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

  const cellW = 110;
  const startX = 15;
  const sectionY = 80;

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Outerbridge classification of chondral lesions - Grades 0 through IV"
    >
      <title>Outerbridge Classification of Chondral Lesions</title>
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
          Outerbridge Classification
        </text>
      )}

      {/* Layer labels */}
      {showLabels && (
        <g>
          <text x={8} y={sectionY + 15} fill={CARTILAGE_COLOR} fontSize={8} opacity={0.6} fontFamily="system-ui, sans-serif" transform={`rotate(-90, 8, ${sectionY + 15})`}>
            Cartilage
          </text>
          <text x={8} y={sectionY + 50} fill={SUBCHONDRAL_COLOR} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif" transform={`rotate(-90, 8, ${sectionY + 50})`}>
            Subchondral
          </text>
          <text x={8} y={sectionY + 80} fill={BONE_OUTLINE} fontSize={8} opacity={0.5} fontFamily="system-ui, sans-serif" transform={`rotate(-90, 8, ${sectionY + 80})`}>
            Bone
          </text>
        </g>
      )}

      {/* Arrow from normal to severe */}
      <line x1={startX + 40} y1={55} x2={startX + cellW * 5 - 30} y2={55} stroke={BONE_OUTLINE} strokeWidth={0.8} opacity={0.3} />
      <polygon points={`${startX + cellW * 5 - 30},52 ${startX + cellW * 5 - 20},55 ${startX + cellW * 5 - 30},58`} fill={BONE_OUTLINE} opacity={0.3} />
      {showLabels && (
        <>
          <text x={startX + 40} y={50} fill={CLINICAL_COLORS.safe} fontSize={8} opacity={0.5} fontFamily="system-ui, sans-serif">Normal</text>
          <text x={startX + cellW * 5 - 60} y={50} fill={CLINICAL_COLORS.danger} fontSize={8} opacity={0.5} textAnchor="end" fontFamily="system-ui, sans-serif">Severe</text>
        </>
      )}

      {GRADES.map((grade, idx) => {
        const cx = startX + idx * cellW + 15;
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
            aria-label={`${grade.label}: ${grade.description}`}
          >
            {/* Background highlight */}
            <rect
              x={cx - 5}
              y={sectionY - 25}
              width={cellW - 20}
              height={140}
              rx={6}
              fill={isActive ? color : 'transparent'}
              opacity={isActive ? 0.06 : 0}
              stroke={isActive ? color : 'transparent'}
              strokeWidth={1}
              style={{ transition: 'all 0.3s ease' }}
            />

            <CartilageSection
              x={cx}
              y={sectionY}
              grade={idx}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                <text
                  x={cx + 40}
                  y={sectionY + 108}
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
                  x={cx + 40}
                  y={sectionY + 122}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={8}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {grade.description.split(' / ')[0]}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Detailed description box for active grade */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={290} width={540} height={90} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.8} />
          {(() => {
            const active = GRADES.find((g) => g.id === activeGrade);
            if (!active) return null;
            const color = getColor(active);
            return (
              <>
                <circle cx={50} cy={320} r={6} fill={color} opacity={0.6} />
                <text x={65} y={324} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {active.label}
                </text>
                <text x={65} y={345} fill={BONE_OUTLINE} fontSize={11} fontFamily="system-ui, sans-serif">
                  {active.description}
                </text>
                <text x={65} y={365} fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
                  {active.id === 'grade-0' && 'Smooth, firm, white articular surface. No abnormality.'}
                  {active.id === 'grade-i' && 'Cartilage is soft and swollen, but intact surface.'}
                  {active.id === 'grade-ii' && 'Partial-thickness defect with fissures, diameter less than 1.5 cm.'}
                  {active.id === 'grade-iii' && 'Fissuring reaching subchondral bone, diameter greater than 1.5 cm.'}
                  {active.id === 'grade-iv' && 'Full-thickness cartilage loss with exposed subchondral bone.'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
