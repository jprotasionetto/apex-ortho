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
  group: string;
}

const grades: GradeInfo[] = [
  { id: 'a1', label: 'A1', description: 'Tuberosity fracture', color: CLINICAL_COLORS.safe, group: 'A - Stable' },
  { id: 'a2', label: 'A2', description: 'Incomplete waist fracture', color: CLINICAL_COLORS.safe, group: 'A - Stable' },
  { id: 'b1', label: 'B1', description: 'Distal oblique', color: CLINICAL_COLORS.caution, group: 'B - Unstable' },
  { id: 'b2', label: 'B2', description: 'Complete waist', color: CLINICAL_COLORS.caution, group: 'B - Unstable' },
  { id: 'b3', label: 'B3', description: 'Proximal pole', color: CLINICAL_COLORS.danger, group: 'B - Unstable' },
  { id: 'b4', label: 'B4', description: 'Trans-scaphoid perilunate', color: CLINICAL_COLORS.danger, group: 'B - Unstable' },
  { id: 'b5', label: 'B5', description: 'Comminuted', color: CLINICAL_COLORS.danger, group: 'B - Unstable' },
];

/** Base scaphoid outline in palmar view - parameterized for reuse */
function ScaphoidBase({ stroke }: { stroke: string }) {
  return (
    <path
      d="M20,55 Q15,40 20,25 Q25,12 38,8 Q50,5 58,15 Q65,25 62,45 Q60,58 52,65 Q42,72 30,68 Q22,65 20,55Z"
      fill={BONE_FILL}
      stroke={stroke}
      strokeWidth="1.5"
    />
  );
}

function ScaphoidA1({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <ScaphoidBase stroke={BONE_OUTLINE} />
      {/* Tuberosity region highlighted */}
      <path d="M22,55 Q20,62 28,68 Q34,70 40,68 Q35,60 30,56Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      {/* Fracture line at tuberosity */}
      <line x1="24" y1="55" x2="38" y2="64" stroke={color} strokeWidth="2" />
      {/* Waist reference line */}
      <line x1="18" y1="38" x2="64" y2="38" stroke="#475569" strokeWidth="0.5" strokeDasharray="2,3" />
      <text x="40" y="90" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">A1</text>
      <text x="40" y="100" textAnchor="middle" fill="#94A3B8" fontSize="6">Tuberosity</text>
    </g>
  );
}

function ScaphoidA2({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <ScaphoidBase stroke={BONE_OUTLINE} />
      {/* Incomplete waist fracture - line does not traverse full bone */}
      <line x1="22" y1="42" x2="48" y2="34" stroke={color} strokeWidth="2" strokeDasharray="4,2" />
      {/* Incomplete indicator - gap on far side */}
      <circle cx="48" cy="34" r="2" fill={BG_COLOR} stroke={color} strokeWidth="1" />
      {/* Waist region highlight */}
      <rect x="18" y="32" width="46" height="12" rx="3" fill={color} fillOpacity="0.08" stroke="none" />
      <text x="40" y="90" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">A2</text>
      <text x="40" y="100" textAnchor="middle" fill="#94A3B8" fontSize="6">Incomplete waist</text>
    </g>
  );
}

function ScaphoidB1({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <ScaphoidBase stroke={BONE_OUTLINE} />
      {/* Distal oblique fracture line */}
      <line x1="26" y1="52" x2="55" y2="58" stroke={color} strokeWidth="2" />
      {/* Angle indicator */}
      <path d="M30,52 Q35,48 38,52" fill="none" stroke={color} strokeWidth="0.8" />
      {/* Distal fragment slightly highlighted */}
      <path d="M26,52 Q22,60 28,68 Q36,72 44,68 Q52,64 55,58Z" fill={color} fillOpacity="0.1" stroke="none" />
      <text x="40" y="90" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">B1</text>
      <text x="40" y="100" textAnchor="middle" fill="#94A3B8" fontSize="6">Distal oblique</text>
    </g>
  );
}

function ScaphoidB2({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <ScaphoidBase stroke={BONE_OUTLINE} />
      {/* Complete waist fracture */}
      <line x1="20" y1="40" x2="62" y2="36" stroke={color} strokeWidth="2.5" />
      {/* Slight displacement */}
      <path d="M20,41 L62,37" stroke={color} strokeWidth="0.5" strokeDasharray="2,2" />
      {/* Waist region */}
      <rect x="18" y="34" width="46" height="8" rx="2" fill={color} fillOpacity="0.12" stroke="none" />
      <text x="40" y="90" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">B2</text>
      <text x="40" y="100" textAnchor="middle" fill="#94A3B8" fontSize="6">Complete waist</text>
    </g>
  );
}

function ScaphoidB3({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <ScaphoidBase stroke={BONE_OUTLINE} />
      {/* Proximal pole fracture */}
      <line x1="30" y1="22" x2="58" y2="18" stroke={color} strokeWidth="2.5" />
      {/* Proximal pole highlighted (AVN risk) */}
      <path d="M30,22 Q25,12 38,8 Q50,5 58,15 L58,18Z" fill={color} fillOpacity="0.15" stroke="none" />
      {/* AVN risk indicator */}
      <circle cx="45" cy="12" r="4" fill="none" stroke={color} strokeWidth="1" strokeDasharray="2,1" />
      <text x="45" y="14" textAnchor="middle" fill={color} fontSize="4" fontWeight="600">AVN</text>
      <text x="40" y="90" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">B3</text>
      <text x="40" y="100" textAnchor="middle" fill="#94A3B8" fontSize="6">Proximal pole</text>
    </g>
  );
}

function ScaphoidB4({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      <ScaphoidBase stroke={BONE_OUTLINE} />
      {/* Trans-scaphoid fracture line */}
      <line x1="20" y1="40" x2="62" y2="36" stroke={color} strokeWidth="2.5" />
      {/* Perilunate context - lunate outline */}
      <path d="M0,20 Q-5,10 5,5 Q15,0 22,8 Q25,12 20,25 Q15,30 5,28 Q-2,26 0,20Z"
        fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3,2" />
      <text x="8" y="18" fill="#475569" fontSize="5">Lunate</text>
      {/* Dislocation arrow */}
      <path d="M10,30 L10,42" stroke={color} strokeWidth="1" markerEnd="url(#arrowHerbert)" />
      <text x="40" y="90" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">B4</text>
      <text x="40" y="100" textAnchor="middle" fill="#94A3B8" fontSize="6">Trans-scaphoid</text>
    </g>
  );
}

function ScaphoidB5({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Comminuted scaphoid - multiple fragments */}
      <path d="M20,55 Q15,40 20,38 L40,36 L30,55Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M20,38 Q22,28 28,20 L42,22 L40,36Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M28,20 Q34,12 45,10 L50,22 L42,22Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M45,10 Q55,8 58,15 Q62,25 60,38 L50,34 L50,22Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M40,36 L60,38 Q60,52 52,60 L40,55Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <path d="M30,55 L40,55 L52,60 Q42,68 30,66 Q22,62 20,55Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      <text x="40" y="90" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">B5</text>
      <text x="40" y="100" textAnchor="middle" fill="#94A3B8" fontSize="6">Comminuted</text>
    </g>
  );
}

export default function HerbertSVG({
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

  const stableTypes = [
    { id: 'a1', Component: ScaphoidA1, xOffset: 0 },
    { id: 'a2', Component: ScaphoidA2, xOffset: 85 },
  ];

  const unstableTypes = [
    { id: 'b1', Component: ScaphoidB1, xOffset: 0 },
    { id: 'b2', Component: ScaphoidB2, xOffset: 85 },
    { id: 'b3', Component: ScaphoidB3, xOffset: 170 },
    { id: 'b4', Component: ScaphoidB4, xOffset: 255 },
    { id: 'b5', Component: ScaphoidB5, xOffset: 340 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Herbert classification of scaphoid fractures - Palmar view showing types A1, A2, B1 through B5"
    >
      <defs>
        <marker id="arrowHerbert" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={CLINICAL_COLORS.danger} />
        </marker>
      </defs>

      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="22" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Herbert Classification - Scaphoid Fractures
        </text>
      )}

      {/* Row A - Stable */}
      {showLabels && (
        <g transform="translate(20, 46)">
          <rect x="0" y="-4" width="170" height="14" rx="3" fill={CLINICAL_COLORS.safe} fillOpacity="0.1" />
          <text x="5" y="6" fill={CLINICAL_COLORS.safe} fontSize="9" fontWeight="600">A - Stable Fractures</text>
        </g>
      )}

      {stableTypes.map(({ id, Component, xOffset }) => {
        const grade = grades.find((g) => g.id === id)!;
        return (
          <g
            key={id}
            transform={`translate(${30 + xOffset}, 60)`}
            onClick={() => handleClick(id)}
            onMouseEnter={() => interactive && setHoveredGrade(id)}
            onMouseLeave={() => setHoveredGrade(null)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <title>{`${grade.label}: ${grade.description}`}</title>
            <rect x="-5" y="-5" width="80" height="115" fill="transparent" />
            {activeGrade === id && (
              <rect x="-5" y="-5" width="80" height="115" rx="6" fill={getColor(grade)} fillOpacity="0.06" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <Component color={getColor(grade)} muted={isMuted(id)} />
          </g>
        );
      })}

      {/* Row B - Unstable */}
      {showLabels && (
        <g transform="translate(20, 192)">
          <rect x="0" y="-4" width="170" height="14" rx="3" fill={CLINICAL_COLORS.danger} fillOpacity="0.1" />
          <text x="5" y="6" fill={CLINICAL_COLORS.danger} fontSize="9" fontWeight="600">B - Unstable Fractures</text>
        </g>
      )}

      {unstableTypes.map(({ id, Component, xOffset }) => {
        const grade = grades.find((g) => g.id === id)!;
        return (
          <g
            key={id}
            transform={`translate(${30 + xOffset}, 210)`}
            onClick={() => handleClick(id)}
            onMouseEnter={() => interactive && setHoveredGrade(id)}
            onMouseLeave={() => setHoveredGrade(null)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <title>{`${grade.label}: ${grade.description}`}</title>
            <rect x="-5" y="-5" width="80" height="115" fill="transparent" />
            {activeGrade === id && (
              <rect x="-5" y="-5" width="80" height="115" rx="6" fill={getColor(grade)} fillOpacity="0.06" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <Component color={getColor(grade)} muted={isMuted(id)} />
          </g>
        );
      })}

      {/* Blood supply note */}
      {showLabels && (
        <g transform="translate(430, 60)">
          <rect x="0" y="0" width="150" height="80" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="1" />
          <text x="10" y="18" fill="#E2E8F0" fontSize="8" fontWeight="600">Blood Supply</text>
          <text x="10" y="32" fill="#94A3B8" fontSize="6.5">Dorsal branch of radial artery</text>
          <text x="10" y="42" fill="#94A3B8" fontSize="6.5">enters at distal dorsal ridge</text>
          <text x="10" y="56" fill={CLINICAL_COLORS.danger} fontSize="6.5" fontWeight="600">Proximal pole fractures (B3):</text>
          <text x="10" y="66" fill="#94A3B8" fontSize="6.5">Highest AVN risk (up to 30%)</text>
        </g>
      )}

      {/* Legend */}
      {showLabels && (
        <g transform="translate(20, 350)">
          <rect x="0" y="0" width="8" height="8" rx="2" fill={CLINICAL_COLORS.safe} />
          <text x="12" y="8" fill="#CBD5E1" fontSize="7.5">Stable (A) - Usually conservative management</text>

          <rect x="280" y="0" width="8" height="8" rx="2" fill={CLINICAL_COLORS.danger} />
          <text x="292" y="8" fill="#CBD5E1" fontSize="7.5">Unstable (B) - Surgical fixation often required</text>
        </g>
      )}

      {/* Scaphoid anatomy label */}
      {showLabels && (
        <g transform="translate(20, 375)">
          <text x="0" y="8" fill="#475569" fontSize="7">Palmar view | Proximal = top, Distal = bottom | Waist line shown as dashed reference</text>
        </g>
      )}
    </svg>
  );
}
