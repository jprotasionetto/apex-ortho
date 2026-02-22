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
  { id: 'type-i', label: 'Type I', description: 'Non-displaced, AHL through capitellum', color: CLINICAL_COLORS.safe },
  { id: 'type-ii', label: 'Type II', description: 'Displaced, intact posterior cortex', color: CLINICAL_COLORS.caution },
  { id: 'type-iii', label: 'Type III', description: 'Completely displaced', color: CLINICAL_COLORS.danger },
  { id: 'type-iv', label: 'Type IV', description: 'Multidirectional instability', color: CLINICAL_COLORS.danger },
];

function HumerusTypeI({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humeral shaft - lateral view */}
      <path d="M55,15 L55,100 Q50,120 45,130 L42,145 Q40,152 48,155 L65,155 Q72,152 70,145 L67,130 Q62,120 57,100 L57,15Z"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Capitellum (anterior) */}
      <ellipse cx="50" cy="150" rx="12" ry="8" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Olecranon fossa */}
      <path d="M52,125 Q56,118 60,125" fill="none" stroke={BONE_OUTLINE} strokeWidth="0.8" opacity="0.5" />
      {/* Anterior Humeral Line - passes through capitellum */}
      <line x1="55" y1="15" x2="48" y2="165" stroke={color} strokeWidth="1.2" strokeDasharray="4,3" opacity="0.8" />
      {/* AHL label */}
      <text x="36" y="80" fill={color} fontSize="6" opacity="0.7" transform="rotate(-5, 36, 80)">AHL</text>
      {/* Subtle fracture line - non-displaced */}
      <line x1="42" y1="128" x2="70" y2="124" stroke={color} strokeWidth="1.5" strokeDasharray="2,2" />
      {/* Capitellum center dot */}
      <circle cx="50" cy="150" r="2" fill={color} opacity="0.5" />
      <text x="56" y="185" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type I</text>
    </g>
  );
}

function HumerusTypeII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humeral shaft - lateral view */}
      <path d="M55,15 L55,100 Q50,120 45,125 L42,130"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M57,15 L57,100 Q62,120 67,125 L70,130"
        fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Proximal fragment fill */}
      <path d="M55,15 L55,100 Q50,120 45,125 L42,130 L70,130 L67,125 Q62,120 57,100 L57,15Z"
        fill={BONE_FILL} stroke="none" />
      <path d="M55,15 L55,100 Q50,120 45,125 L42,130" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M57,15 L57,100 Q62,120 67,125 L70,130" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Distal fragment - hinged posteriorly (intact posterior cortex) */}
      <path d="M42,132 L38,145 Q36,152 44,157 L62,157 Q70,152 68,145 L70,132"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Posterior cortex - intact (hinge) */}
      <line x1="70" y1="130" x2="70" y2="132" stroke={CLINICAL_COLORS.safe} strokeWidth="2" />
      {/* Fracture line with gap anteriorly */}
      <line x1="42" y1="128" x2="70" y2="130" stroke={color} strokeWidth="2" />
      {/* Extension angle indicator */}
      <path d="M36,130 Q34,138 38,145" fill="none" stroke={color} strokeWidth="1" strokeDasharray="2,2" />
      {/* Capitellum */}
      <ellipse cx="48" cy="152" rx="11" ry="7" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* AHL - misses capitellum */}
      <line x1="55" y1="15" x2="46" y2="165" stroke={color} strokeWidth="1.2" strokeDasharray="4,3" opacity="0.6" />
      {/* Posterior cortex label */}
      <text x="78" y="132" fill={CLINICAL_COLORS.safe} fontSize="5.5" opacity="0.7">Hinge</text>
      <text x="56" y="185" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type II</text>
    </g>
  );
}

function HumerusTypeIII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humeral shaft - proximal fragment */}
      <path d="M55,15 L55,100 Q50,120 45,125 L42,128 L70,126 L67,125 Q62,120 57,100 L57,15Z"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Distal fragment - completely displaced posteriorly */}
      <path d="M48,136 L44,148 Q42,155 50,158 L68,158 Q76,155 74,148 L76,136Z"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Fracture line */}
      <line x1="42" y1="128" x2="70" y2="126" stroke={color} strokeWidth="2" />
      {/* Displacement gap */}
      <rect x="42" y="128" width="30" height="8" fill={BG_COLOR} stroke="none" />
      {/* Displacement arrows */}
      <line x1="56" y1="130" x2="62" y2="138" stroke={color} strokeWidth="1.2" markerEnd="url(#arrowGartland)" />
      {/* Capitellum on distal fragment */}
      <ellipse cx="55" cy="153" rx="11" ry="7" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* No cortex contact */}
      <text x="78" y="138" fill={color} fontSize="5.5" opacity="0.7">No cortex</text>
      <text x="78" y="145" fill={color} fontSize="5.5" opacity="0.7">contact</text>
      <text x="56" y="185" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type III</text>
    </g>
  );
}

function HumerusTypeIV({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humeral shaft - proximal fragment */}
      <path d="M55,15 L55,100 Q50,120 45,125 L42,128 L70,126 L67,125 Q62,120 57,100 L57,15Z"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Distal fragment - multidirectional displacement */}
      <path d="M50,138 L46,150 Q44,157 52,160 L70,160 Q78,157 76,150 L78,138Z"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Fracture line */}
      <line x1="42" y1="128" x2="70" y2="126" stroke={color} strokeWidth="2" />
      {/* Gap showing complete periosteal disruption */}
      <rect x="42" y="128" width="36" height="10" fill={BG_COLOR} stroke="none" />
      {/* Multi-directional instability arrows */}
      <line x1="62" y1="132" x2="70" y2="140" stroke={color} strokeWidth="1" markerEnd="url(#arrowGartland)" />
      <line x1="54" y1="132" x2="46" y2="140" stroke={color} strokeWidth="1" markerEnd="url(#arrowGartland)" />
      <line x1="58" y1="132" x2="58" y2="140" stroke={color} strokeWidth="1" markerEnd="url(#arrowGartland)" />
      {/* Periosteal disruption markers */}
      <line x1="41" y1="126" x2="38" y2="130" stroke={color} strokeWidth="1.2" />
      <line x1="71" y1="126" x2="74" y2="130" stroke={color} strokeWidth="1.2" />
      {/* Capitellum */}
      <ellipse cx="58" cy="155" rx="11" ry="7" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* Label */}
      <text x="78" y="133" fill={color} fontSize="5.5" opacity="0.7">Periosteal</text>
      <text x="78" y="140" fill={color} fontSize="5.5" opacity="0.7">disruption</text>
      <text x="56" y="185" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type IV</text>
    </g>
  );
}

export default function GartlandSVG({
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
    { id: 'type-i', Component: HumerusTypeI, xOffset: 0 },
    { id: 'type-ii', Component: HumerusTypeII, xOffset: 150 },
    { id: 'type-iii', Component: HumerusTypeIII, xOffset: 300 },
    { id: 'type-iv', Component: HumerusTypeIV, xOffset: 450 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Gartland classification of supracondylar humerus fractures - Lateral view showing Types I through IV"
    >
      <defs>
        <marker id="arrowGartland" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={CLINICAL_COLORS.danger} />
        </marker>
      </defs>

      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="25" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Gartland Classification - Supracondylar Humerus Fractures
        </text>
      )}

      {showLabels && (
        <text x="300" y="42" textAnchor="middle" fill="#64748B" fontSize="10">
          Lateral View (Pediatric)
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
            <rect x="20" y="0" width="130" height="210" fill="transparent" />
            {activeGrade === id && (
              <rect x="20" y="0" width="130" height="210" rx="8" fill={getColor(grade)} fillOpacity="0.06" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <Component color={getColor(grade)} muted={isMuted(id)} />
          </g>
        );
      })}

      {/* Legend */}
      {showLabels && (
        <g transform="translate(20, 330)">
          {grades.map((g, i) => (
            <g key={g.id} transform={`translate(${i * 145}, 0)`}>
              <rect x="0" y="0" width="8" height="8" rx="2" fill={getColor(g)} />
              <text x="12" y="8" fill="#CBD5E1" fontSize="8">{g.label}</text>
              <text x="12" y="20" fill="#64748B" fontSize="6.5">{g.description}</text>
            </g>
          ))}
        </g>
      )}

      {/* Clinical note */}
      {showLabels && (
        <g transform="translate(20, 370)">
          <text x="0" y="8" fill="#64748B" fontSize="7">AHL = Anterior Humeral Line | Intact posterior cortex = hinge point in Type II</text>
        </g>
      )}

      {/* Severity bar */}
      {showLabels && (
        <g transform="translate(20, 385)">
          <text x="0" y="6" fill="#64748B" fontSize="6.5">Stable</text>
          <rect x="45" y="0" width="480" height="5" rx="2.5" fill="url(#gartlandGradient)" />
          <text x="535" y="6" fill="#64748B" fontSize="6.5">Unstable</text>
        </g>
      )}

      <defs>
        <linearGradient id="gartlandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={CLINICAL_COLORS.safe} />
          <stop offset="33%" stopColor={CLINICAL_COLORS.caution} />
          <stop offset="66%" stopColor={CLINICAL_COLORS.danger} />
          <stop offset="100%" stopColor={CLINICAL_COLORS.danger} />
        </linearGradient>
      </defs>
    </svg>
  );
}
