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
  description: string;
  color: string;
}

const grades: GradeInfo[] = [
  { id: 'stage-i', label: 'Stage I', description: 'Incomplete, valgus impacted', color: CLINICAL_COLORS.safe },
  { id: 'stage-ii', label: 'Stage II', description: 'Complete, non-displaced', color: CLINICAL_COLORS.caution },
  { id: 'stage-iii', label: 'Stage III', description: 'Complete, partially displaced', color: CLINICAL_COLORS.danger },
  { id: 'stage-iv', label: 'Stage IV', description: 'Complete, fully displaced', color: CLINICAL_COLORS.danger },
];

/** Proximal femur base - AP view */
function FemurBase({ stroke, fill }: { stroke: string; fill: string }) {
  return (
    <g>
      {/* Femoral head */}
      <circle cx="42" cy="35" r="22" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Femoral neck */}
      <path d="M55,50 L75,90 Q78,95 85,95 L85,95" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <path d="M32,52 L52,90 Q55,95 60,96" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Neck fill */}
      <path d="M55,50 L75,90 Q78,95 85,95 L60,96 Q55,95 52,90 L32,52 Q38,55 55,50Z" fill={fill} stroke="none" />
      {/* Greater trochanter */}
      <path d="M75,60 Q90,50 95,65 Q96,75 90,85 L85,95" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Shaft */}
      <path d="M60,96 L55,180 L90,180 L85,95" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Lesser trochanter */}
      <path d="M60,96 Q50,100 48,108 Q50,115 58,110" fill={fill} stroke={stroke} strokeWidth="1.2" />
    </g>
  );
}

function StageI({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <FemurBase stroke={BONE_OUTLINE} fill={BONE_FILL} />
      {/* Incomplete fracture line - valgus impaction */}
      <line x1="35" y1="50" x2="60" y2="68" stroke={color} strokeWidth="2" strokeDasharray="4,2" />
      {/* Valgus angle indicator */}
      <path d="M42,40 L42,28" stroke={color} strokeWidth="0.8" strokeDasharray="2,2" opacity="0.6" />
      <path d="M38,42 L34,36" stroke={color} strokeWidth="0.8" opacity="0.5" />
      {/* Trabeculae lines showing impaction */}
      <line x1="38" y1="55" x2="50" y2="62" stroke="#475569" strokeWidth="0.5" />
      <line x1="42" y1="58" x2="52" y2="65" stroke="#475569" strokeWidth="0.5" />
      {/* Impaction arrows */}
      <path d="M48,48 L52,54" stroke={color} strokeWidth="0.8" markerEnd="url(#arrowGarden)" />
      <text x="55" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Stage I</text>
    </g>
  );
}

function StageII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <FemurBase stroke={BONE_OUTLINE} fill={BONE_FILL} />
      {/* Complete fracture line - non-displaced */}
      <line x1="30" y1="48" x2="70" y2="72" stroke={color} strokeWidth="2.5" />
      {/* Trabecular alignment preserved */}
      <line x1="35" y1="30" x2="65" y2="80" stroke="#475569" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />
      <line x1="40" y1="28" x2="68" y2="78" stroke="#475569" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />
      {/* Non-displaced indicator - parallel lines */}
      <text x="55" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Stage II</text>
    </g>
  );
}

function StageIII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Shaft with greater trochanter */}
      <path d="M75,60 Q90,50 95,65 Q96,75 90,85 L85,95" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M60,96 L55,180 L90,180 L85,95" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M60,96 Q50,100 48,108 Q50,115 58,110" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* Neck fragment still connected */}
      <path d="M55,50 L72,85 Q74,88 78,88" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M32,52 L48,82 Q50,86 55,87" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M55,50 L72,85 Q74,88 78,88 L55,87 Q50,86 48,82 L32,52 Q38,55 55,50Z" fill={BONE_FILL} stroke="none" />
      {/* Femoral head - partially displaced (varus) */}
      <circle cx="38" cy="38" r="22" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Fracture line */}
      <line x1="28" y1="52" x2="68" y2="72" stroke={color} strokeWidth="2.5" />
      {/* Gap showing partial displacement */}
      <path d="M50,60 L60,66" stroke={BG_COLOR} strokeWidth="4" />
      {/* Varus angulation */}
      <path d="M38,42 L32,48" stroke={color} strokeWidth="1" markerEnd="url(#arrowGarden)" />
      {/* Displacement arrow */}
      <path d="M46,58 L52,54" stroke={color} strokeWidth="1.2" />
      {/* Retinacular vessels partially intact indicator */}
      <path d="M54,55 Q58,52 62,55" fill="none" stroke={CLINICAL_COLORS.caution} strokeWidth="0.8" strokeDasharray="2,1" />
      <text x="55" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Stage III</text>
    </g>
  );
}

function StageIV({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Shaft with greater trochanter */}
      <path d="M75,60 Q90,50 95,65 Q96,75 90,85 L85,95" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M60,96 L55,180 L90,180 L85,95" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M60,96 Q50,100 48,108 Q50,115 58,110" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* Neck remnant on shaft */}
      <path d="M75,65 L82,88" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M65,72 L72,90" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Femoral head - completely displaced and rotated */}
      <circle cx="32" cy="30" r="22" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Small neck fragment on head */}
      <path d="M48,42 L52,50 L46,52Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1" />
      {/* Fracture line on shaft side */}
      <line x1="62" y1="66" x2="82" y2="82" stroke={color} strokeWidth="2.5" />
      {/* Complete displacement - gap */}
      <rect x="48" y="52" width="20" height="16" fill={BG_COLOR} stroke="none" />
      {/* Displacement arrows */}
      <line x1="50" y1="50" x2="50" y2="60" stroke={color} strokeWidth="1" strokeDasharray="3,2" />
      <line x1="42" y1="52" x2="38" y2="58" stroke={color} strokeWidth="1" markerEnd="url(#arrowGarden)" />
      <line x1="62" y1="64" x2="66" y2="58" stroke={color} strokeWidth="1" markerEnd="url(#arrowGarden)" />
      {/* AVN risk indicator */}
      <circle cx="32" cy="30" r="6" fill="none" stroke={color} strokeWidth="1" strokeDasharray="2,1" />
      <text x="32" y="32" textAnchor="middle" fill={color} fontSize="5" fontWeight="600">AVN</text>
      <text x="55" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Stage IV</text>
    </g>
  );
}

export default function GardenSVG({
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
    { id: 'stage-i', Component: StageI, xOffset: 0 },
    { id: 'stage-ii', Component: StageII, xOffset: 150 },
    { id: 'stage-iii', Component: StageIII, xOffset: 300 },
    { id: 'stage-iv', Component: StageIV, xOffset: 450 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Garden classification of femoral neck fractures - AP view showing Stages I through IV"
    >
      <defs>
        <marker id="arrowGarden" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={CLINICAL_COLORS.danger} />
        </marker>
      </defs>

      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="25" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Garden Classification - Femoral Neck Fractures
        </text>
      )}
      {showLabels && (
        <text x="300" y="42" textAnchor="middle" fill="#64748B" fontSize="10">
          AP View of Proximal Femur
        </text>
      )}

      {diagramComponents.map(({ id, Component, xOffset }) => {
        const grade = grades.find((g) => g.id === id)!;
        return (
          <g
            key={id}
            transform={`translate(${xOffset}, 50)`}
            onClick={() => handleClick(id)}
            onMouseEnter={() => interactive && setHoveredGrade(id)}
            onMouseLeave={() => setHoveredGrade(null)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <title>{`${grade.label}: ${grade.description}`}</title>
            <rect x="5" y="0" width="135" height="210" fill="transparent" />
            {activeGrade === id && (
              <rect x="5" y="0" width="135" height="210" rx="8" fill={getColor(grade)} fillOpacity="0.06" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <Component color={getColor(grade)} muted={isMuted(id)} />
          </g>
        );
      })}

      {/* Legend */}
      {showLabels && (
        <g transform="translate(20, 300)">
          {grades.map((g, i) => (
            <g key={g.id} transform={`translate(${i * 145}, 0)`}>
              <rect x="0" y="0" width="8" height="8" rx="2" fill={getColor(g)} />
              <text x="12" y="8" fill="#CBD5E1" fontSize="8">{g.label}</text>
              <text x="12" y="20" fill="#64748B" fontSize="6.5">{g.description}</text>
            </g>
          ))}
        </g>
      )}

      {/* Treatment guidance */}
      {showLabels && (
        <g transform="translate(20, 340)">
          <rect x="0" y="0" width="560" height="24" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
          <text x="10" y="10" fill={CLINICAL_COLORS.safe} fontSize="7" fontWeight="600">I-II:</text>
          <text x="28" y="10" fill="#94A3B8" fontSize="7">Internal fixation (screws)</text>
          <text x="200" y="10" fill={CLINICAL_COLORS.danger} fontSize="7" fontWeight="600">III-IV:</text>
          <text x="225" y="10" fill="#94A3B8" fontSize="7">Arthroplasty (hemi or total, age-dependent)</text>
          <text x="10" y="20" fill={CLINICAL_COLORS.info} fontSize="6.5">AVN risk increases with displacement: I=minimal, IV=up to 100%</text>
        </g>
      )}

      {/* Severity bar */}
      {showLabels && (
        <g transform="translate(20, 380)">
          <text x="0" y="6" fill="#64748B" fontSize="6.5">Stable</text>
          <rect x="42" y="0" width="480" height="5" rx="2.5" fill="url(#gardenGradient)" />
          <text x="530" y="6" fill="#64748B" fontSize="6.5">Displaced</text>
        </g>
      )}

      <defs>
        <linearGradient id="gardenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={CLINICAL_COLORS.safe} />
          <stop offset="33%" stopColor={CLINICAL_COLORS.caution} />
          <stop offset="66%" stopColor={CLINICAL_COLORS.danger} />
          <stop offset="100%" stopColor={CLINICAL_COLORS.danger} />
        </linearGradient>
      </defs>
    </svg>
  );
}
