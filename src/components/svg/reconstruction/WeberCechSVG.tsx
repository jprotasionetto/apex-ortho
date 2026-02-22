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

interface NonunionType {
  id: string;
  label: string;
  subtype: string;
  description: string;
  viability: 'viable' | 'non-viable';
  color: string;
}

const TYPES: NonunionType[] = [
  {
    id: 'hypertrophic-elephant',
    label: 'Hypertrophic',
    subtype: 'Elephant Foot',
    description: 'Abundant callus formation, viable bone ends',
    viability: 'viable',
    color: CLINICAL_COLORS.safe,
  },
  {
    id: 'hypertrophic-horse',
    label: 'Hypertrophic',
    subtype: 'Horse Hoof',
    description: 'Moderate callus formation',
    viability: 'viable',
    color: CLINICAL_COLORS.safe,
  },
  {
    id: 'oligotrophic',
    label: 'Oligotrophic',
    subtype: '',
    description: 'Minimal callus but viable bone ends',
    viability: 'viable',
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'dystrophic',
    label: 'Dystrophic',
    subtype: '',
    description: 'Intermediate fragment between bone ends',
    viability: 'non-viable',
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'necrotic',
    label: 'Necrotic',
    subtype: '',
    description: 'Avascular bone ends, dead bone',
    viability: 'non-viable',
    color: CLINICAL_COLORS.danger,
  },
  {
    id: 'defect',
    label: 'Defect',
    subtype: '',
    description: 'Gap / bone loss between ends',
    viability: 'non-viable',
    color: CLINICAL_COLORS.danger,
  },
  {
    id: 'atrophic',
    label: 'Atrophic',
    subtype: '',
    description: 'Tapered/resorbed ends, no callus',
    viability: 'non-viable',
    color: CLINICAL_COLORS.danger,
  },
];

function BoneEnds({
  x,
  y,
  typeId,
  color,
  opacity,
}: {
  x: number;
  y: number;
  typeId: string;
  color: string;
  opacity: number;
}) {
  const boneW = 22;
  const boneH = 40;
  const gap = 12;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {typeId === 'hypertrophic-elephant' && (
        /* Elephant foot: large bulbous callus at both ends */
        <>
          {/* Upper bone shaft */}
          <rect x={boneW / 2 - 8} y={0} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
          {/* Upper elephant foot callus */}
          <path
            d={`M${boneW / 2 - 18} ${boneH - 5} Q${boneW / 2 - 20} ${boneH + 3} ${boneW / 2 - 15} ${boneH + 8}
               Q${boneW / 2 - 5} ${boneH + 14} ${boneW / 2} ${boneH + 12}
               Q${boneW / 2 + 5} ${boneH + 14} ${boneW / 2 + 15} ${boneH + 8}
               Q${boneW / 2 + 20} ${boneH + 3} ${boneW / 2 + 18} ${boneH - 5}`}
            fill={color}
            opacity={opacity * 0.3}
            stroke={color}
            strokeWidth={1.2}
          />
          {/* Callus texture */}
          <circle cx={boneW / 2 - 10} cy={boneH + 3} r={2} fill={color} opacity={opacity * 0.2} />
          <circle cx={boneW / 2 + 10} cy={boneH + 3} r={2} fill={color} opacity={opacity * 0.2} />
          <circle cx={boneW / 2} cy={boneH + 10} r={2.5} fill={color} opacity={opacity * 0.2} />

          {/* Gap / nonunion line */}
          <line x1={boneW / 2 - 16} y1={boneH + gap} x2={boneW / 2 + 16} y2={boneH + gap} stroke={color} strokeWidth={1} opacity={opacity * 0.4} strokeDasharray="2 2" />

          {/* Lower elephant foot callus */}
          <path
            d={`M${boneW / 2 - 18} ${boneH + gap + 15} Q${boneW / 2 - 20} ${boneH + gap + 7} ${boneW / 2 - 15} ${boneH + gap + 3}
               Q${boneW / 2 - 5} ${boneH + gap - 2} ${boneW / 2} ${boneH + gap}
               Q${boneW / 2 + 5} ${boneH + gap - 2} ${boneW / 2 + 15} ${boneH + gap + 3}
               Q${boneW / 2 + 20} ${boneH + gap + 7} ${boneW / 2 + 18} ${boneH + gap + 15}`}
            fill={color}
            opacity={opacity * 0.3}
            stroke={color}
            strokeWidth={1.2}
          />

          {/* Lower bone shaft */}
          <rect x={boneW / 2 - 8} y={boneH + gap + 12} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
        </>
      )}

      {typeId === 'hypertrophic-horse' && (
        /* Horse hoof: moderate callus, less exuberant */
        <>
          <rect x={boneW / 2 - 8} y={0} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
          {/* Upper moderate callus */}
          <path
            d={`M${boneW / 2 - 12} ${boneH - 3} Q${boneW / 2 - 14} ${boneH + 2} ${boneW / 2 - 10} ${boneH + 6}
               Q${boneW / 2} ${boneH + 10} ${boneW / 2 + 10} ${boneH + 6}
               Q${boneW / 2 + 14} ${boneH + 2} ${boneW / 2 + 12} ${boneH - 3}`}
            fill={color}
            opacity={opacity * 0.3}
            stroke={color}
            strokeWidth={1.2}
          />

          <line x1={boneW / 2 - 12} y1={boneH + gap} x2={boneW / 2 + 12} y2={boneH + gap} stroke={color} strokeWidth={1} opacity={opacity * 0.4} strokeDasharray="2 2" />

          {/* Lower moderate callus */}
          <path
            d={`M${boneW / 2 - 12} ${boneH + gap + 12} Q${boneW / 2 - 14} ${boneH + gap + 8} ${boneW / 2 - 10} ${boneH + gap + 4}
               Q${boneW / 2} ${boneH + gap} ${boneW / 2 + 10} ${boneH + gap + 4}
               Q${boneW / 2 + 14} ${boneH + gap + 8} ${boneW / 2 + 12} ${boneH + gap + 12}`}
            fill={color}
            opacity={opacity * 0.3}
            stroke={color}
            strokeWidth={1.2}
          />
          <rect x={boneW / 2 - 8} y={boneH + gap + 10} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
        </>
      )}

      {typeId === 'oligotrophic' && (
        /* Oligotrophic: no callus, rounded bone ends, viable */
        <>
          <rect x={boneW / 2 - 8} y={0} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
          {/* Rounded upper end - no callus */}
          <path
            d={`M${boneW / 2 - 8} ${boneH} Q${boneW / 2 - 8} ${boneH + 5} ${boneW / 2} ${boneH + 6} Q${boneW / 2 + 8} ${boneH + 5} ${boneW / 2 + 8} ${boneH}`}
            fill={BONE_FILL}
            stroke={BONE_OUTLINE}
            strokeWidth={1.2}
          />

          <line x1={boneW / 2 - 10} y1={boneH + gap + 2} x2={boneW / 2 + 10} y2={boneH + gap + 2} stroke={color} strokeWidth={1} opacity={opacity * 0.4} strokeDasharray="2 2" />

          {/* Rounded lower end */}
          <path
            d={`M${boneW / 2 - 8} ${boneH + gap + 8} Q${boneW / 2 - 8} ${boneH + gap + 3} ${boneW / 2} ${boneH + gap + 2} Q${boneW / 2 + 8} ${boneH + gap + 3} ${boneW / 2 + 8} ${boneH + gap + 8}`}
            fill={BONE_FILL}
            stroke={BONE_OUTLINE}
            strokeWidth={1.2}
          />
          <rect x={boneW / 2 - 8} y={boneH + gap + 8} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />

          {/* Viability dots */}
          <circle cx={boneW / 2} cy={boneH - 5} r={1.5} fill={CLINICAL_COLORS.safe} opacity={opacity * 0.4} />
          <circle cx={boneW / 2} cy={boneH + gap + 14} r={1.5} fill={CLINICAL_COLORS.safe} opacity={opacity * 0.4} />
        </>
      )}

      {typeId === 'dystrophic' && (
        /* Dystrophic: intermediate fragment wedged between ends */
        <>
          <rect x={boneW / 2 - 8} y={0} width={16} height={boneH - 5} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />

          {/* Upper fracture line (oblique) */}
          <path d={`M${boneW / 2 - 8} ${boneH - 5} L${boneW / 2 + 8} ${boneH + 2}`} fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />

          {/* Intermediate fragment */}
          <path
            d={`M${boneW / 2 - 5} ${boneH} L${boneW / 2 + 8} ${boneH + 2} L${boneW / 2 + 5} ${boneH + gap + 5} L${boneW / 2 - 8} ${boneH + gap + 2} Z`}
            fill={color}
            opacity={opacity * 0.25}
            stroke={color}
            strokeWidth={1.2}
          />

          {/* Lower fracture line */}
          <path d={`M${boneW / 2 - 8} ${boneH + gap + 2} L${boneW / 2 + 8} ${boneH + gap + 8}`} fill="none" stroke={color} strokeWidth={1.5} opacity={opacity} />

          <rect x={boneW / 2 - 8} y={boneH + gap + 6} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
        </>
      )}

      {typeId === 'necrotic' && (
        /* Necrotic: avascular/dead bone ends */
        <>
          <rect x={boneW / 2 - 8} y={0} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
          {/* Dead bone end (darkened, sclerotic) */}
          <rect x={boneW / 2 - 8} y={boneH - 10} width={16} height={10} fill={color} opacity={opacity * 0.3} stroke={color} strokeWidth={1} />
          {/* Necrosis pattern */}
          <line x1={boneW / 2 - 6} y1={boneH - 8} x2={boneW / 2 + 6} y2={boneH - 2} stroke={BG} strokeWidth={0.5} opacity={opacity * 0.3} />
          <line x1={boneW / 2 + 6} y1={boneH - 8} x2={boneW / 2 - 6} y2={boneH - 2} stroke={BG} strokeWidth={0.5} opacity={opacity * 0.3} />

          <line x1={boneW / 2 - 10} y1={boneH + gap / 2} x2={boneW / 2 + 10} y2={boneH + gap / 2} stroke={color} strokeWidth={1.5} opacity={opacity * 0.5} />

          {/* Dead bone end (lower) */}
          <rect x={boneW / 2 - 8} y={boneH + gap} width={16} height={10} fill={color} opacity={opacity * 0.3} stroke={color} strokeWidth={1} />
          <line x1={boneW / 2 - 6} y1={boneH + gap + 2} x2={boneW / 2 + 6} y2={boneH + gap + 8} stroke={BG} strokeWidth={0.5} opacity={opacity * 0.3} />
          <line x1={boneW / 2 + 6} y1={boneH + gap + 2} x2={boneW / 2 - 6} y2={boneH + gap + 8} stroke={BG} strokeWidth={0.5} opacity={opacity * 0.3} />

          <rect x={boneW / 2 - 8} y={boneH + gap + 8} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
        </>
      )}

      {typeId === 'defect' && (
        /* Defect: gap between bone ends */
        <>
          <rect x={boneW / 2 - 8} y={0} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />

          {/* Wide gap */}
          <rect x={boneW / 2 - 12} y={boneH + 2} width={24} height={gap + 12} rx={3} fill={BG} opacity={0.5} stroke={color} strokeWidth={1} strokeDasharray="3 3" />
          {/* Gap measurement lines */}
          <line x1={boneW / 2 - 14} y1={boneH + 2} x2={boneW / 2 - 14} y2={boneH + gap + 14} stroke={color} strokeWidth={0.8} opacity={opacity * 0.5} />
          <line x1={boneW / 2 - 17} y1={boneH + 2} x2={boneW / 2 - 11} y2={boneH + 2} stroke={color} strokeWidth={0.5} opacity={opacity * 0.5} />
          <line x1={boneW / 2 - 17} y1={boneH + gap + 14} x2={boneW / 2 - 11} y2={boneH + gap + 14} stroke={color} strokeWidth={0.5} opacity={opacity * 0.5} />

          <rect x={boneW / 2 - 8} y={boneH + gap + 12} width={16} height={boneH} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
        </>
      )}

      {typeId === 'atrophic' && (
        /* Atrophic: tapered/pencil-pointed ends, no callus */
        <>
          <rect x={boneW / 2 - 8} y={0} width={16} height={boneH - 10} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
          {/* Tapered upper end */}
          <path
            d={`M${boneW / 2 - 8} ${boneH - 10} L${boneW / 2 - 3} ${boneH + 4} Q${boneW / 2} ${boneH + 6} ${boneW / 2 + 3} ${boneH + 4} L${boneW / 2 + 8} ${boneH - 10}`}
            fill={BONE_FILL}
            stroke={BONE_OUTLINE}
            strokeWidth={1.2}
          />
          {/* Resorption line */}
          <line x1={boneW / 2 - 6} y1={boneH - 6} x2={boneW / 2 + 6} y2={boneH - 6} stroke={color} strokeWidth={0.8} opacity={opacity * 0.4} strokeDasharray="1 2" />

          {/* Gap */}
          <line x1={boneW / 2 - 5} y1={boneH + gap / 2 + 2} x2={boneW / 2 + 5} y2={boneH + gap / 2 + 2} stroke={color} strokeWidth={1} opacity={opacity * 0.3} />

          {/* Tapered lower end */}
          <path
            d={`M${boneW / 2 - 8} ${boneH + gap + 16} L${boneW / 2 - 3} ${boneH + gap + 4} Q${boneW / 2} ${boneH + gap + 2} ${boneW / 2 + 3} ${boneH + gap + 4} L${boneW / 2 + 8} ${boneH + gap + 16}`}
            fill={BONE_FILL}
            stroke={BONE_OUTLINE}
            strokeWidth={1.2}
          />
          <rect x={boneW / 2 - 8} y={boneH + gap + 14} width={16} height={boneH - 5} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.2} rx={2} />
        </>
      )}
    </g>
  );
}

export function WeberCechSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(type: NonunionType): string {
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

  const viableTypes = TYPES.filter((t) => t.viability === 'viable');
  const nonViableTypes = TYPES.filter((t) => t.viability === 'non-viable');

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Weber-Cech classification of nonunion showing viable and non-viable types"
    >
      <title>Weber-Cech Classification of Nonunion</title>
      <rect width="600" height="400" fill={BG} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={22}
          textAnchor="middle"
          fill={BONE_OUTLINE}
          fontSize={13}
          fontWeight={600}
          fontFamily="system-ui, sans-serif"
        >
          Weber-Cech Classification of Nonunion
        </text>
      )}

      {/* === Viable (Hypervascular) Row === */}
      {showLabels && (
        <text x={15} y={50} fill={CLINICAL_COLORS.safe} fontSize={10} fontWeight={500} fontFamily="system-ui, sans-serif">
          Viable (Hypervascular)
        </text>
      )}

      {viableTypes.map((type, idx) => {
        const cellW = 185;
        const cx = 15 + idx * cellW;
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
            aria-label={`${type.label}${type.subtype ? ' (' + type.subtype + ')' : ''}: ${type.description}`}
          >
            <rect
              x={cx}
              y={55}
              width={cellW - 10}
              height={135}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.1 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <BoneEnds
              x={cx + cellW / 2 - 16}
              y={60}
              typeId={type.id}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2 - 5}
                  y={162}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={10}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {type.label}
                </text>
                {type.subtype && (
                  <text
                    x={cx + cellW / 2 - 5}
                    y={175}
                    textAnchor="middle"
                    fill={color}
                    fontSize={9}
                    opacity={isActive ? 0.9 : 0.5}
                    fontFamily="system-ui, sans-serif"
                  >
                    ({type.subtype})
                  </text>
                )}
              </>
            )}
          </g>
        );
      })}

      {/* === Non-viable (Avascular) Row === */}
      {showLabels && (
        <text x={15} y={208} fill={CLINICAL_COLORS.danger} fontSize={10} fontWeight={500} fontFamily="system-ui, sans-serif">
          Non-viable (Avascular)
        </text>
      )}

      {nonViableTypes.map((type, idx) => {
        const cellW = 138;
        const cx = 15 + idx * cellW;
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
            aria-label={`${type.label}: ${type.description}`}
          >
            <rect
              x={cx}
              y={215}
              width={cellW - 10}
              height={130}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.1 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <BoneEnds
              x={cx + cellW / 2 - 16}
              y={222}
              typeId={type.id}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <text
                x={cx + cellW / 2 - 5}
                y={325}
                textAnchor="middle"
                fill={isActive ? color : BONE_OUTLINE}
                fontSize={10}
                fontWeight={isActive ? 600 : 400}
                fontFamily="system-ui, sans-serif"
                style={{ transition: 'fill 0.3s ease' }}
              >
                {type.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Detail panel */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={352} width={540} height={38} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const type = TYPES.find((t) => t.id === activeGrade);
            if (!type) return null;
            const color = getColor(type);
            return (
              <>
                <circle cx={48} cy={366} r={4} fill={color} opacity={0.6} />
                <text x={60} y={365} fill={color} fontSize={11} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {type.label}{type.subtype ? ` (${type.subtype})` : ''} - {type.viability === 'viable' ? 'Viable' : 'Non-viable'}
                </text>
                <text x={60} y={380} fill={BONE_OUTLINE} fontSize={9} opacity={0.6} fontFamily="system-ui, sans-serif">
                  {type.description}
                  {type.viability === 'viable' && '. Treatment: Stabilization (callus formation present, needs mechanical stability).'}
                  {type.viability === 'non-viable' && '. Treatment: Biological augmentation + stabilization (bone graft needed).'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
