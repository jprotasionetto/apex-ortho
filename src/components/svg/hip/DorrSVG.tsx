import { useState } from 'react';

interface SVGDiagramProps {
  activeGrade?: string;
  onGradeSelect?: (gradeId: string) => void;
  interactive?: boolean;
  showLabels?: boolean;
  colorScheme?: 'clinical' | 'grayscale';
}

const CLINICAL_COLORS = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

const BONE_OUTLINE = '#94A3B8';
const BONE_FILL = '#1E293B';
const BG_COLOR = '#0F172A';

interface GradeInfo {
  id: string;
  label: string;
  name: string;
  description: string;
  canalShape: string;
  cortex: string;
  color: string;
}

const grades: GradeInfo[] = [
  {
    id: 'type-a',
    label: 'Type A',
    name: 'Champagne Flute',
    description: 'Narrow canal, thick cortex',
    canalShape: 'Narrow isthmus with significant metaphyseal flare',
    cortex: 'Thick cortical walls',
    color: CLINICAL_COLORS.safe,
  },
  {
    id: 'type-b',
    label: 'Type B',
    name: 'Normal / Intermediate',
    description: 'Moderate canal, normal cortex',
    canalShape: 'Moderate widening with some flare',
    cortex: 'Normal cortical thickness',
    color: CLINICAL_COLORS.caution,
  },
  {
    id: 'type-c',
    label: 'Type C',
    name: 'Stovepipe',
    description: 'Wide canal, thin cortex',
    canalShape: 'Wide canal with minimal flare',
    cortex: 'Thin cortical walls (osteoporotic)',
    color: CLINICAL_COLORS.danger,
  },
];

function FemurTypeA({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Femoral head */}
      <circle cx="60" cy="30" r="24" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Greater trochanter */}
      <path d="M90,50 Q110,38 115,55 Q116,68 110,80 L105,90" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Outer cortex - THICK (Type A characteristic) */}
      <path d="M50,55 Q40,70 35,100 Q30,140 32,180 Q33,220 36,260 L38,280"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="2" />
      <path d="M105,90 Q112,120 110,160 Q108,200 106,240 L104,280"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="2" />
      {/* Femoral neck */}
      <path d="M72,48 L90,80 Q92,85 96,87" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M46,52 L65,80 Q68,85 72,87" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M72,48 L90,80 Q92,85 96,87 L72,87 Q68,85 65,80 L46,52 Q55,55 72,48Z" fill={BONE_FILL} stroke="none" />
      {/* Bone fill between cortices */}
      <path d="M50,55 Q40,70 35,100 Q30,140 32,180 Q33,220 36,260 L38,280 L104,280 L106,240 Q108,200 110,160 Q112,120 105,90 Q100,75 90,55Z"
        fill={BONE_FILL} stroke="none" />
      {/* Outer cortex on top */}
      <path d="M50,55 Q40,70 35,100 Q30,140 32,180 Q33,220 36,260 L38,280" fill="none" stroke={BONE_OUTLINE} strokeWidth="2" />
      <path d="M105,90 Q112,120 110,160 Q108,200 106,240 L104,280" fill="none" stroke={BONE_OUTLINE} strokeWidth="2" />
      {/* Endosteal canal - NARROW (champagne flute) */}
      <path d="M60,90 Q52,120 50,160 Q49,200 50,240 L51,270"
        fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      <path d="M90,95 Q96,120 94,160 Q92,200 91,240 L90,270"
        fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      {/* Canal fill - narrow */}
      <path d="M60,90 Q52,120 50,160 Q49,200 50,240 L51,270 L90,270 L91,240 Q92,200 94,160 Q96,120 90,95Z"
        fill={color} fillOpacity="0.08" stroke="none" />
      {/* Cortex thickness indicators */}
      <line x1="35" y1="180" x2="50" y2="180" stroke={color} strokeWidth="1" />
      <line x1="93" y1="180" x2="110" y2="180" stroke={color} strokeWidth="1" />
      <text x="28" y="183" fill={color} fontSize="5" fontWeight="600">Thick</text>
      <text x="112" y="183" fill={color} fontSize="5" fontWeight="600">Thick</text>
      {/* Flare indicator */}
      <path d="M56,100 L65,85" stroke={color} strokeWidth="0.8" opacity="0.6" />
      <path d="M88,100 L82,85" stroke={color} strokeWidth="0.8" opacity="0.6" />
      {/* Canal width marker at isthmus */}
      <line x1="50" y1="220" x2="93" y2="220" stroke={color} strokeWidth="0.8" />
      <circle cx="50" cy="220" r="1.5" fill={color} />
      <circle cx="93" cy="220" r="1.5" fill={color} />
      <text x="70" y="216" textAnchor="middle" fill={color} fontSize="5">Narrow</text>
    </g>
  );
}

function FemurTypeB({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Femoral head */}
      <circle cx="60" cy="30" r="24" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Greater trochanter */}
      <path d="M90,50 Q110,38 115,55 Q116,68 110,80 L105,90" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Outer cortex - NORMAL */}
      <path d="M50,55 Q38,75 34,110 Q30,150 32,190 Q34,230 37,260 L39,280"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="1.8" />
      <path d="M105,90 Q114,125 112,165 Q110,205 108,245 L106,280"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="1.8" />
      {/* Femoral neck */}
      <path d="M72,48 L90,80 Q92,85 96,87" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M46,52 L65,80 Q68,85 72,87" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M72,48 L90,80 Q92,85 96,87 L72,87 Q68,85 65,80 L46,52 Q55,55 72,48Z" fill={BONE_FILL} stroke="none" />
      {/* Bone fill */}
      <path d="M50,55 Q38,75 34,110 Q30,150 32,190 Q34,230 37,260 L39,280 L106,280 L108,245 Q110,205 112,165 Q114,125 105,90 Q100,75 90,55Z"
        fill={BONE_FILL} stroke="none" />
      <path d="M50,55 Q38,75 34,110 Q30,150 32,190 Q34,230 37,260 L39,280" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.8" />
      <path d="M105,90 Q114,125 112,165 Q110,205 108,245 L106,280" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.8" />
      {/* Endosteal canal - MODERATE */}
      <path d="M55,90 Q46,125 44,165 Q43,205 44,245 L45,270"
        fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      <path d="M95,95 Q102,125 100,165 Q98,205 97,245 L96,270"
        fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      {/* Canal fill */}
      <path d="M55,90 Q46,125 44,165 Q43,205 44,245 L45,270 L96,270 L97,245 Q98,205 100,165 Q102,125 95,95Z"
        fill={color} fillOpacity="0.08" stroke="none" />
      {/* Cortex markers */}
      <line x1="34" y1="180" x2="44" y2="180" stroke={color} strokeWidth="1" />
      <line x1="100" y1="180" x2="112" y2="180" stroke={color} strokeWidth="1" />
      <text x="22" y="183" fill={color} fontSize="5">Normal</text>
      <text x="114" y="183" fill={color} fontSize="5">Normal</text>
      {/* Canal width */}
      <line x1="44" y1="220" x2="100" y2="220" stroke={color} strokeWidth="0.8" />
      <circle cx="44" cy="220" r="1.5" fill={color} />
      <circle cx="100" cy="220" r="1.5" fill={color} />
      <text x="72" y="216" textAnchor="middle" fill={color} fontSize="5">Moderate</text>
    </g>
  );
}

function FemurTypeC({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Femoral head */}
      <circle cx="60" cy="30" r="24" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Greater trochanter */}
      <path d="M90,50 Q110,38 115,55 Q116,68 110,80 L105,90" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Outer cortex - THIN (Type C stovepipe) */}
      <path d="M50,55 Q36,78 32,115 Q28,155 30,195 Q32,235 35,260 L37,280"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="1.2" />
      <path d="M105,90 Q116,128 114,170 Q112,210 110,250 L108,280"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* Femoral neck */}
      <path d="M72,48 L90,80 Q92,85 96,87" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M46,52 L65,80 Q68,85 72,87" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M72,48 L90,80 Q92,85 96,87 L72,87 Q68,85 65,80 L46,52 Q55,55 72,48Z" fill={BONE_FILL} stroke="none" />
      {/* Bone fill */}
      <path d="M50,55 Q36,78 32,115 Q28,155 30,195 Q32,235 35,260 L37,280 L108,280 L110,250 Q112,210 114,170 Q116,128 105,90 Q100,75 90,55Z"
        fill={BONE_FILL} stroke="none" />
      <path d="M50,55 Q36,78 32,115 Q28,155 30,195 Q32,235 35,260 L37,280" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.2" />
      <path d="M105,90 Q116,128 114,170 Q112,210 110,250 L108,280" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* Endosteal canal - WIDE (stovepipe, minimal flare) */}
      <path d="M48,90 Q38,125 36,165 Q35,205 36,245 L37,270"
        fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      <path d="M100,95 Q110,125 108,165 Q106,205 105,245 L104,270"
        fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      {/* Canal fill - wide */}
      <path d="M48,90 Q38,125 36,165 Q35,205 36,245 L37,270 L104,270 L105,245 Q106,205 108,165 Q110,125 100,95Z"
        fill={color} fillOpacity="0.1" stroke="none" />
      {/* Thin cortex indicators */}
      <line x1="32" y1="180" x2="36" y2="180" stroke={color} strokeWidth="1" />
      <line x1="108" y1="180" x2="114" y2="180" stroke={color} strokeWidth="1" />
      <text x="18" y="183" fill={color} fontSize="5" fontWeight="600">Thin</text>
      <text x="116" y="183" fill={color} fontSize="5" fontWeight="600">Thin</text>
      {/* Wide canal marker */}
      <line x1="36" y1="220" x2="108" y2="220" stroke={color} strokeWidth="0.8" />
      <circle cx="36" cy="220" r="1.5" fill={color} />
      <circle cx="108" cy="220" r="1.5" fill={color} />
      <text x="72" y="216" textAnchor="middle" fill={color} fontSize="5" fontWeight="600">Wide</text>
      {/* Osteoporosis pattern - stippling in cortex */}
      {[
        { y: 140, lx: 34, rx: 113 },
        { y: 160, lx: 35, rx: 114 },
        { y: 180, lx: 33, rx: 112 },
        { y: 200, lx: 35, rx: 113 },
        { y: 220, lx: 34, rx: 114 },
        { y: 240, lx: 33, rx: 113 },
      ].map(({ y, lx, rx }) => (
        <g key={y}>
          <circle cx={lx} cy={y} r="0.8" fill="#475569" opacity="0.4" />
          <circle cx={rx} cy={y} r="0.8" fill="#475569" opacity="0.4" />
        </g>
      ))}
    </g>
  );
}

export default function DorrSVG({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  const getColor = (grade: GradeInfo) => {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return grade.color;
  };

  const isMuted = (gradeId: string) => {
    if (!activeGrade && !hoveredGrade) return false;
    if (hoveredGrade) return hoveredGrade !== gradeId;
    return activeGrade !== gradeId;
  };

  const handleClick = (gradeId: string) => {
    if (interactive && onGradeSelect) {
      onGradeSelect(gradeId);
    }
  };

  const diagramComponents = [
    { id: 'type-a', Component: FemurTypeA, xOffset: 0 },
    { id: 'type-b', Component: FemurTypeB, xOffset: 200 },
    { id: 'type-c', Component: FemurTypeC, xOffset: 400 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Dorr classification of femoral canal morphology - AP view showing Types A (champagne flute), B (normal), and C (stovepipe)"
    >
      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="22" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Dorr Classification - Femoral Canal Morphology
        </text>
      )}
      {showLabels && (
        <text x="300" y="37" textAnchor="middle" fill="#64748B" fontSize="10">
          AP View - Proximal Femur Canal Shape
        </text>
      )}

      {diagramComponents.map(({ id, Component, xOffset }) => {
        const grade = grades.find((g) => g.id === id)!;
        return (
          <g
            key={id}
            transform={`translate(${xOffset}, 42)`}
            onClick={() => handleClick(id)}
            onMouseEnter={() => interactive && setHoveredGrade(id)}
            onMouseLeave={() => setHoveredGrade(null)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <title>{`${grade.label} (${grade.name}): ${grade.description}`}</title>
            <rect x="5" y="0" width="185" height="295" fill="transparent" />
            {activeGrade === id && (
              <rect x="5" y="0" width="185" height="295" rx="8" fill={getColor(grade)} fillOpacity="0.05" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <Component color={getColor(grade)} muted={isMuted(id)} />
            {/* Label */}
            {showLabels && (
              <>
                <text x="72" y="292" textAnchor="middle" fill={getColor(grade)} fontSize="11" fontWeight="700" opacity={isMuted(id) ? 0.3 : 1} style={{ transition: 'opacity 0.3s ease' }}>
                  {grade.label}: {grade.name}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Properties table */}
      {showLabels && (
        <g transform="translate(15, 345)">
          <rect x="0" y="0" width="570" height="45" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
          {grades.map((g, i) => (
            <g key={g.id} transform={`translate(${i * 190}, 0)`}>
              <rect x="5" y="3" width="3" height="38" rx="1.5" fill={getColor(g)} />
              <text x="14" y="14" fill={getColor(g)} fontSize="7.5" fontWeight="600">{g.label}: {g.name}</text>
              <text x="14" y="25" fill="#94A3B8" fontSize="6.5">{g.canalShape}</text>
              <text x="14" y="36" fill="#64748B" fontSize="6.5">{g.cortex}</text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
