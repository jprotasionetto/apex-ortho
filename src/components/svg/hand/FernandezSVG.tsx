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
  mechanism: string;
  color: string;
}

const grades: GradeInfo[] = [
  { id: 'type-i', label: 'Type I', description: 'Bending (Colles/Smith)', mechanism: 'Metaphyseal bending failure', color: CLINICAL_COLORS.safe },
  { id: 'type-ii', label: 'Type II', description: 'Shearing (Barton\'s)', mechanism: 'Articular shearing', color: CLINICAL_COLORS.caution },
  { id: 'type-iii', label: 'Type III', description: 'Compression (die-punch)', mechanism: 'Axial compression', color: CLINICAL_COLORS.caution },
  { id: 'type-iv', label: 'Type IV', description: 'Avulsion (fracture-dislocation)', mechanism: 'Ligamentous avulsion', color: CLINICAL_COLORS.danger },
  { id: 'type-v', label: 'Type V', description: 'Combined (high energy)', mechanism: 'Combined mechanisms', color: CLINICAL_COLORS.danger },
];

/** Distal radius base shape - lateral view */
function RadiusBase({ stroke, fill }: { stroke: string; fill: string }) {
  return (
    <path
      d="M25,10 L25,90 Q22,100 20,110 L18,120 Q16,128 24,130 L60,130 Q68,128 66,120 L64,110 Q62,100 59,90 L59,10"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
    />
  );
}

function TypeI({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Radius shaft */}
      <RadiusBase stroke={BONE_OUTLINE} fill={BONE_FILL} />
      {/* Bending fracture - dorsal (Colles-type) angulation */}
      <line x1="18" y1="100" x2="66" y2="96" stroke={color} strokeWidth="2" />
      {/* Dorsal angulation arrow */}
      <path d="M42,95 Q48,85 55,88" fill="none" stroke={color} strokeWidth="1.2" markerEnd="url(#arrowFernandez)" />
      {/* Bending force arrow */}
      <path d="M42,140 L42,132" stroke={color} strokeWidth="1" markerEnd="url(#arrowFernandez)" />
      <text x="42" y="148" textAnchor="middle" fill={color} fontSize="5.5">Force</text>
      {/* Articular surface intact */}
      <line x1="20" y1="126" x2="64" y2="126" stroke={BONE_OUTLINE} strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5" />
      <text x="42" y="165" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type I</text>
      <text x="42" y="175" textAnchor="middle" fill="#94A3B8" fontSize="6">Bending</text>
    </g>
  );
}

function TypeII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Radius shaft */}
      <path d="M25,10 L25,90 Q22,100 20,110 L18,120 L59,90 L59,10" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Shearing fracture - articular fragment */}
      <path d="M18,120 Q16,128 24,130 L60,130 Q68,128 66,120 L64,110 L18,120Z"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Shear fracture line */}
      <line x1="18" y1="118" x2="66" y2="108" stroke={color} strokeWidth="2.5" />
      {/* Fragment displacement */}
      <path d="M40,116 L46,108" fill="none" stroke={color} strokeWidth="1" markerEnd="url(#arrowFernandez)" />
      {/* Articular surface (involved) */}
      <line x1="20" y1="126" x2="64" y2="126" stroke={color} strokeWidth="1" strokeDasharray="2,2" />
      {/* Shear direction */}
      <path d="M70,125 L60,115" fill="none" stroke={color} strokeWidth="1" markerEnd="url(#arrowFernandez)" />
      <text x="72" y="128" fill={color} fontSize="5">Shear</text>
      <text x="42" y="165" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type II</text>
      <text x="42" y="175" textAnchor="middle" fill="#94A3B8" fontSize="6">Shearing</text>
    </g>
  );
}

function TypeIII({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Radius shaft */}
      <RadiusBase stroke={BONE_OUTLINE} fill={BONE_FILL} />
      {/* Die-punch depression */}
      <path d="M30,118 L30,125 Q35,132 42,132 Q49,132 54,125 L54,118"
        fill={BG_COLOR} stroke={color} strokeWidth="1.5" />
      {/* Compressed articular fragment pushed down */}
      <path d="M32,125 Q38,130 42,130 Q46,130 52,125" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
      {/* Axial compression arrows */}
      <path d="M42,140 L42,132" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowFernandez)" />
      <path d="M35,140 L35,132" stroke={color} strokeWidth="1" markerEnd="url(#arrowFernandez)" />
      <line x1="49" y1="140" x2="49" y2="132" stroke={color} strokeWidth="1" markerEnd="url(#arrowFernandez)" />
      {/* Lunate impaction label */}
      <text x="42" y="148" textAnchor="middle" fill={color} fontSize="5">Axial load</text>
      {/* Joint surface depression */}
      <line x1="18" y1="118" x2="30" y2="118" stroke={BONE_OUTLINE} strokeWidth="0.8" />
      <line x1="54" y1="118" x2="66" y2="118" stroke={BONE_OUTLINE} strokeWidth="0.8" />
      <text x="42" y="165" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type III</text>
      <text x="42" y="175" textAnchor="middle" fill="#94A3B8" fontSize="6">Compression</text>
    </g>
  );
}

function TypeIV({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Radius shaft */}
      <path d="M25,10 L25,90 Q22,100 20,110 L20,118 L64,118 L64,110 Q62,100 59,90 L59,10"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Avulsed fragment with ligament */}
      <path d="M18,120 Q16,128 24,130 L34,130 L30,120Z" fill={BONE_FILL} stroke={color} strokeWidth="1.5" />
      {/* Radiocarpal ligament */}
      <line x1="26" y1="120" x2="26" y2="112" stroke={color} strokeWidth="1.5" strokeDasharray="3,1" />
      {/* Dislocation indicator */}
      <path d="M42,120 L50,130 L58,130 Q66,128 64,120Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* Displacement arrows */}
      <path d="M28,135 L28,142" stroke={color} strokeWidth="1.2" markerEnd="url(#arrowFernandez)" />
      <path d="M50,135 L55,142" stroke={color} strokeWidth="1.2" markerEnd="url(#arrowFernandez)" />
      {/* Fracture line */}
      <line x1="20" y1="118" x2="64" y2="118" stroke={color} strokeWidth="2" />
      {/* Carpal outline */}
      <rect x="16" y="134" width="52" height="12" rx="4" fill="none" stroke="#475569" strokeWidth="0.8" strokeDasharray="3,2" />
      <text x="42" y="152" fill="#475569" fontSize="5">Carpals</text>
      <text x="42" y="165" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type IV</text>
      <text x="42" y="175" textAnchor="middle" fill="#94A3B8" fontSize="6">Avulsion</text>
    </g>
  );
}

function TypeV({ color, muted }: { color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Radius shaft - comminuted */}
      <path d="M25,10 L25,90 Q22,100 20,105" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M59,10 L59,90 Q62,100 64,105" fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <rect x="20" y="10" width="39" height="80" fill={BONE_FILL} stroke="none" />
      {/* Multiple fracture lines */}
      <line x1="18" y1="100" x2="66" y2="96" stroke={color} strokeWidth="1.5" />
      <line x1="20" y1="108" x2="64" y2="112" stroke={color} strokeWidth="1.5" />
      <line x1="35" y1="95" x2="40" y2="118" stroke={color} strokeWidth="1.5" />
      <line x1="48" y1="92" x2="52" y2="115" stroke={color} strokeWidth="1.5" />
      {/* Multiple fragments */}
      <path d="M20,105 L35,108 L32,120 L18,118Z" fill={BONE_FILL} stroke={color} strokeWidth="1.2" />
      <path d="M35,96 L48,93 L52,108 L35,108Z" fill={BONE_FILL} stroke={color} strokeWidth="1.2" />
      <path d="M48,93 L66,96 L64,112 L52,108Z" fill={BONE_FILL} stroke={color} strokeWidth="1.2" />
      <path d="M32,120 L52,115 Q54,125 42,130 Q28,128 18,118Z" fill={BONE_FILL} stroke={color} strokeWidth="1.2" />
      <path d="M52,115 L64,112 Q66,122 60,130 Q54,132 42,130Z" fill={BONE_FILL} stroke={color} strokeWidth="1.2" />
      {/* High energy indicator */}
      <path d="M68,98 L74,92 L70,100 L76,94" stroke={color} strokeWidth="1.2" fill="none" />
      <text x="78" y="98" fill={color} fontSize="5">High</text>
      <text x="78" y="105" fill={color} fontSize="5">energy</text>
      <text x="42" y="165" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Type V</text>
      <text x="42" y="175" textAnchor="middle" fill="#94A3B8" fontSize="6">Combined</text>
    </g>
  );
}

export default function FernandezSVG({
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
    { id: 'type-i', Component: TypeI, xOffset: 0 },
    { id: 'type-ii', Component: TypeII, xOffset: 115 },
    { id: 'type-iii', Component: TypeIII, xOffset: 230 },
    { id: 'type-iv', Component: TypeIV, xOffset: 345 },
    { id: 'type-v', Component: TypeV, xOffset: 460 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Fernandez classification of distal radius fractures - Types I through V based on mechanism of injury"
    >
      <defs>
        <marker id="arrowFernandez" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={CLINICAL_COLORS.caution} />
        </marker>
      </defs>

      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="25" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Fernandez Classification - Distal Radius Fractures
        </text>
      )}
      {showLabels && (
        <text x="300" y="42" textAnchor="middle" fill="#64748B" fontSize="10">
          Based on Mechanism of Injury
        </text>
      )}

      {diagramComponents.map(({ id, Component, xOffset }) => {
        const grade = grades.find((g) => g.id === id)!;
        return (
          <g
            key={id}
            transform={`translate(${15 + xOffset}, 55)`}
            onClick={() => handleClick(id)}
            onMouseEnter={() => interactive && setHoveredGrade(id)}
            onMouseLeave={() => setHoveredGrade(null)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <title>{`${grade.label}: ${grade.description} - ${grade.mechanism}`}</title>
            <rect x="-5" y="-5" width="100" height="195" fill="transparent" />
            {activeGrade === id && (
              <rect x="-5" y="-5" width="100" height="195" rx="6" fill={getColor(grade)} fillOpacity="0.06" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <Component color={getColor(grade)} muted={isMuted(id)} />
          </g>
        );
      })}

      {/* Mechanism labels */}
      {showLabels && (
        <g transform="translate(15, 280)">
          {grades.map((g, i) => (
            <g key={g.id} transform={`translate(${i * 115}, 0)`}>
              <rect x="0" y="0" width="100" height="32" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
              <text x="50" y="13" textAnchor="middle" fill={getColor(g)} fontSize="7" fontWeight="600">{g.mechanism}</text>
              <text x="50" y="25" textAnchor="middle" fill="#94A3B8" fontSize="6">{g.description}</text>
            </g>
          ))}
        </g>
      )}

      {/* Legend */}
      {showLabels && (
        <g transform="translate(20, 335)">
          {[
            { color: CLINICAL_COLORS.safe, label: 'Low energy' },
            { color: CLINICAL_COLORS.caution, label: 'Moderate energy' },
            { color: CLINICAL_COLORS.danger, label: 'High energy' },
          ].map((item, i) => (
            <g key={i} transform={`translate(${i * 150}, 0)`}>
              <rect x="0" y="0" width="8" height="8" rx="2" fill={item.color} />
              <text x="12" y="8" fill="#CBD5E1" fontSize="8">{item.label}</text>
            </g>
          ))}
        </g>
      )}

      {/* Bottom note */}
      {showLabels && (
        <g transform="translate(20, 370)">
          <text x="0" y="8" fill="#475569" fontSize="7">
            Mechanism-based classification guides surgical approach | Types IV-V often require ORIF
          </text>
        </g>
      )}

      {/* Energy gradient */}
      {showLabels && (
        <g transform="translate(20, 385)">
          <text x="0" y="6" fill="#64748B" fontSize="6.5">Low energy</text>
          <rect x="70" y="0" width="440" height="5" rx="2.5" fill="url(#fernandezGradient)" />
          <text x="520" y="6" fill="#64748B" fontSize="6.5">High energy</text>
        </g>
      )}

      <defs>
        <linearGradient id="fernandezGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={CLINICAL_COLORS.safe} />
          <stop offset="40%" stopColor={CLINICAL_COLORS.caution} />
          <stop offset="100%" stopColor={CLINICAL_COLORS.danger} />
        </linearGradient>
      </defs>
    </svg>
  );
}
