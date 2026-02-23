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
  { id: 'type-i', label: 'Type I', description: 'Marginal, non-displaced (&lt;2mm)', color: CLINICAL_COLORS.safe },
  { id: 'type-ii', label: 'Type II', description: 'Marginal, displaced (&gt;2mm, &gt;30%)', color: CLINICAL_COLORS.caution },
  { id: 'type-iii', label: 'Type III', description: 'Comminuted entire head', color: CLINICAL_COLORS.danger },
  { id: 'type-iv', label: 'Type IV', description: 'Fracture + dislocation', color: CLINICAL_COLORS.danger },
];

function RadialHeadTypeI({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humerus distal */}
      <path d="M55,20 L55,70 Q55,95 70,100 L80,100 Q95,95 95,70 L95,20" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Trochlea */}
      <ellipse cx="67" cy="100" rx="14" ry="10" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Capitellum */}
      <ellipse cx="88" cy="98" rx="10" ry="9" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Ulna proximal */}
      <path d="M50,108 L50,180 L65,180 L65,108 Q65,102 57,102 Q50,102 50,108Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Olecranon */}
      <path d="M50,108 Q48,95 55,88 Q62,82 65,95 L65,108" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Radial head - intact */}
      <ellipse cx="95" cy="112" rx="9" ry="7" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Radial neck */}
      <path d="M89,118 L89,180 L101,180 L101,118" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Small marginal fracture line - non-displaced */}
      <line x1="100" y1="107" x2="96" y2="115" stroke={color} strokeWidth="2" strokeDasharray="3,2" />
      {/* Label */}
      <text x="75" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type I</text>
    </g>
  );
}

function RadialHeadTypeII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humerus distal */}
      <path d="M55,20 L55,70 Q55,95 70,100 L80,100 Q95,95 95,70 L95,20" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <ellipse cx="67" cy="100" rx="14" ry="10" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <ellipse cx="88" cy="98" rx="10" ry="9" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Ulna */}
      <path d="M50,108 L50,180 L65,180 L65,108 Q65,102 57,102 Q50,102 50,108Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M50,108 Q48,95 55,88 Q62,82 65,95 L65,108" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Radial head with displaced fragment */}
      <path d="M86,112 Q86,105 95,105 Q100,105 100,112 Q100,119 95,119 Q86,119 86,112Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Displaced marginal fragment */}
      <path d="M101,107 L107,103 L108,110 L103,113Z" fill={BONE_FILL} stroke={color} strokeWidth="2" />
      {/* Fracture line */}
      <line x1="101" y1="107" x2="103" y2="113" stroke={color} strokeWidth="2" />
      {/* Displacement arrow */}
      <line x1="104" y1="108" x2="110" y2="105" stroke={color} strokeWidth="1" markerEnd="url(#arrowMason)" />
      {/* Radial neck */}
      <path d="M89,118 L89,180 L101,180 L101,118" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <text x="75" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type II</text>
    </g>
  );
}

function RadialHeadTypeIII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humerus distal */}
      <path d="M55,20 L55,70 Q55,95 70,100 L80,100 Q95,95 95,70 L95,20" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <ellipse cx="67" cy="100" rx="14" ry="10" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <ellipse cx="88" cy="98" rx="10" ry="9" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Ulna */}
      <path d="M50,108 L50,180 L65,180 L65,108 Q65,102 57,102 Q50,102 50,108Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M50,108 Q48,95 55,88 Q62,82 65,95 L65,108" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Comminuted radial head - multiple fragments */}
      <path d="M87,108 L91,105 L95,108 L92,112Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M95,108 L99,106 L102,110 L98,113Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M88,112 L92,112 L94,117 L88,117Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M94,112 L98,113 L100,118 L94,117Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M100,110 L105,108 L107,114 L102,115Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      {/* Radial neck */}
      <path d="M89,118 L89,180 L101,180 L101,118" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <text x="75" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type III</text>
    </g>
  );
}

function RadialHeadTypeIV({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Humerus distal - shifted to show dislocation */}
      <path d="M55,20 L55,70 Q55,95 70,100 L80,100 Q95,95 95,70 L95,20" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <ellipse cx="67" cy="100" rx="14" ry="10" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <ellipse cx="88" cy="98" rx="10" ry="9" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Ulna - displaced posteriorly */}
      <path d="M52,115 L52,180 L67,180 L67,115 Q67,109 60,109 Q52,109 52,115Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M52,115 Q50,100 57,92 Q64,86 67,100 L67,115" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Dislocation indicator */}
      <path d="M68,96 L73,92" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" />
      <path d="M68,100 L73,96" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" />
      {/* Radial head - fractured + displaced */}
      <path d="M92,116 Q92,110 98,109 L103,112 L101,118 Q95,120 92,116Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M103,112 L109,108 L110,115 L105,116Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      {/* Fracture line on radial head */}
      <line x1="101" y1="110" x2="103" y2="117" stroke={color} strokeWidth="2" />
      {/* Radial neck - displaced */}
      <path d="M93,120 L93,180 L105,180 L105,120" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Dislocation arrow */}
      <path d="M80,88 L80,80 L75,84 M80,80 L85,84" stroke={color} strokeWidth="1.5" fill="none" />
      <text x="75" y="195" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type IV</text>
    </g>
  );
}

export default function MasonSVG({
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
    { id: 'type-i', Component: RadialHeadTypeI, xOffset: 0 },
    { id: 'type-ii', Component: RadialHeadTypeII, xOffset: 150 },
    { id: 'type-iii', Component: RadialHeadTypeIII, xOffset: 300 },
    { id: 'type-iv', Component: RadialHeadTypeIV, xOffset: 450 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Mason classification of radial head fractures - AP view of elbow showing Types I through IV"
    >
      <defs>
        <marker id="arrowMason" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={CLINICAL_COLORS.caution} />
        </marker>
      </defs>

      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="25" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Mason Classification - Radial Head Fractures
        </text>
      )}

      {/* Subtitle */}
      {showLabels && (
        <text x="300" y="42" textAnchor="middle" fill="#64748B" fontSize="10">
          AP View of Elbow
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
            {/* Hit area */}
            <rect x="20" y="0" width="130" height="220" fill="transparent" />
            {/* Active highlight background */}
            {activeGrade === id && (
              <rect x="20" y="0" width="130" height="220" rx="8" fill={getColor(grade)} fillOpacity="0.06" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <Component color={getColor(grade)} muted={isMuted(id)} />
            {/* Description below */}
            {showLabels && (
              <text x="75" y="210" textAnchor="middle" fill="#94A3B8" fontSize="7" opacity={isMuted(id) ? 0.3 : 0.8}>
                {grade.description}
              </text>
            )}
          </g>
        );
      })}

      {/* Legend */}
      {showLabels && (
        <g transform="translate(20, 340)">
          {grades.map((g, i) => (
            <g key={g.id} transform={`translate(${i * 145}, 0)`}>
              <rect x="0" y="0" width="8" height="8" rx="2" fill={getColor(g)} />
              <text x="12" y="8" fill="#CBD5E1" fontSize="8">{g.label}</text>
              <text x="12" y="20" fill="#64748B" fontSize="6.5">{g.description}</text>
            </g>
          ))}
        </g>
      )}

      {/* Severity gradient indicator */}
      {showLabels && (
        <g transform="translate(20, 375)">
          <text x="0" y="8" fill="#64748B" fontSize="7">Low severity</text>
          <rect x="80" y="1" width="440" height="6" rx="3" fill="url(#masonGradient)" />
          <text x="530" y="8" fill="#64748B" fontSize="7">High severity</text>
        </g>
      )}

      <defs>
        <linearGradient id="masonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={CLINICAL_COLORS.safe} />
          <stop offset="33%" stopColor={CLINICAL_COLORS.caution} />
          <stop offset="66%" stopColor={CLINICAL_COLORS.danger} />
          <stop offset="100%" stopColor={CLINICAL_COLORS.danger} />
        </linearGradient>
      </defs>
    </svg>
  );
}
