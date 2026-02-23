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
  angle: string;
  description: string;
  prognosis: string;
  color: string;
}

const grades: GradeInfo[] = [
  { id: 'type-i', label: 'Type I', angle: '&lt;30\u00B0', description: 'Minimal shear forces', prognosis: 'Good prognosis', color: CLINICAL_COLORS.safe },
  { id: 'type-ii', label: 'Type II', angle: '30-50\u00B0', description: 'Intermediate shear', prognosis: 'Moderate prognosis', color: CLINICAL_COLORS.caution },
  { id: 'type-iii', label: 'Type III', angle: '>50\u00B0', description: 'High shear forces', prognosis: 'Poor prognosis', color: CLINICAL_COLORS.danger },
];

/** Proximal femur for Pauwels */
function ProximalFemur({ fracAngleDeg, color, muted, showProtractor }: {
  fracAngleDeg: number;
  color: string;
  muted: boolean;
  showProtractor: boolean;
}) {
  const opacity = muted ? 0.3 : 1;

  // Fracture line center at approximately the mid-neck
  const cx = 85;
  const cy = 80;
  const lineLen = 40;
  const rad = (fracAngleDeg * Math.PI) / 180;
  const x1 = cx - lineLen * Math.cos(rad);
  const y1 = cy + lineLen * Math.sin(rad);
  const x2 = cx + lineLen * Math.cos(rad);
  const y2 = cy - lineLen * Math.sin(rad);

  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Femoral head */}
      <circle cx="60" cy="48" r="30" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Femoral neck */}
      <path d="M78,68 L105,120 Q110,128 118,130 L118,130" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      <path d="M50,72 L75,120 Q80,128 85,130" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Neck fill */}
      <path d="M78,68 L105,120 Q110,128 118,130 L85,130 Q80,128 75,120 L50,72 Q60,76 78,68Z" fill={BONE_FILL} stroke="none" />
      {/* Greater trochanter */}
      <path d="M105,85 Q125,72 130,90 Q132,105 125,118 L118,130" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Shaft */}
      <path d="M85,130 L78,230 L122,230 L118,130" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Lesser trochanter */}
      <path d="M85,130 Q72,135 68,145 Q72,152 82,148" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />

      {/* Fracture line */}
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" />

      {/* Horizontal reference line */}
      <line x1={cx - 50} y1={cy} x2={cx + 50} y2={cy} stroke="#475569" strokeWidth="0.8" strokeDasharray="4,3" />

      {/* Angle arc - protractor-like */}
      {showProtractor && (
        <g>
          {/* Arc from horizontal to fracture line */}
          <path
            d={describeArc(cx, cy, 30, 0, -fracAngleDeg)}
            fill="none"
            stroke={color}
            strokeWidth="1.5"
          />
          {/* Angle label */}
          <text
            x={cx + 34 * Math.cos((fracAngleDeg / 2) * Math.PI / 180)}
            y={cy - 34 * Math.sin((fracAngleDeg / 2) * Math.PI / 180) + 3}
            fill={color}
            fontSize="10"
            fontWeight="700"
          >
            {fracAngleDeg}\u00B0
          </text>

          {/* Protractor ticks */}
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((tick) => {
            const tickRad = (tick * Math.PI) / 180;
            const inner = 26;
            const outer = tick % 30 === 0 ? 34 : 30;
            return (
              <line
                key={tick}
                x1={cx + inner * Math.cos(tickRad)}
                y1={cy - inner * Math.sin(tickRad)}
                x2={cx + outer * Math.cos(tickRad)}
                y2={cy - outer * Math.sin(tickRad)}
                stroke="#475569"
                strokeWidth={tick % 30 === 0 ? 1 : 0.5}
                opacity="0.5"
              />
            );
          })}
        </g>
      )}

      {/* Force vectors */}
      {/* Compression (perpendicular to fracture) */}
      <g transform={`translate(${cx}, ${cy})`}>
        <line
          x1={-20 * Math.sin(rad)}
          y1={-20 * Math.cos(rad)}
          x2={-30 * Math.sin(rad)}
          y2={-30 * Math.cos(rad)}
          stroke={CLINICAL_COLORS.info}
          strokeWidth="1"
          opacity="0.6"
        />
        <text x={-35 * Math.sin(rad)} y={-35 * Math.cos(rad)} fill={CLINICAL_COLORS.info} fontSize="5" opacity="0.6">C</text>
      </g>
      {/* Shear (parallel to fracture) */}
      <g transform={`translate(${cx}, ${cy})`}>
        <line
          x1={20 * Math.cos(rad)}
          y1={-20 * Math.sin(rad)}
          x2={30 * Math.cos(rad)}
          y2={-30 * Math.sin(rad)}
          stroke={color}
          strokeWidth="1"
          opacity="0.6"
          markerEnd="url(#arrowPauwels)"
        />
        <text x={35 * Math.cos(rad)} y={-32 * Math.sin(rad)} fill={color} fontSize="5" opacity="0.6">S</text>
      </g>
    </g>
  );
}

/** Describe an SVG arc path */
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy - r * Math.sin(startRad);
  const x2 = cx + r * Math.cos(endRad);
  const y2 = cy - r * Math.sin(endRad);
  const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  const sweep = endAngle > startAngle ? 0 : 1;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`;
}

export default function PauwelsSVG({
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

  const diagramTypes = [
    { id: 'type-i', angleDeg: 25, xOffset: 0 },
    { id: 'type-ii', angleDeg: 40, xOffset: 200 },
    { id: 'type-iii', angleDeg: 60, xOffset: 400 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Pauwels classification of femoral neck fractures - AP view showing angle of fracture line relative to horizontal"
    >
      <defs>
        <marker id="arrowPauwels" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={CLINICAL_COLORS.danger} />
        </marker>
      </defs>

      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="25" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Pauwels Classification - Femoral Neck Fracture Angle
        </text>
      )}
      {showLabels && (
        <text x="300" y="42" textAnchor="middle" fill="#64748B" fontSize="10">
          AP View - Angle from Horizontal
        </text>
      )}

      {diagramTypes.map(({ id, angleDeg, xOffset }) => {
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
            <title>{`${grade.label} (${grade.angle}): ${grade.description} - ${grade.prognosis}`}</title>
            <rect x="0" y="0" width="190" height="250" fill="transparent" />
            {activeGrade === id && (
              <rect x="0" y="0" width="190" height="250" rx="8" fill={getColor(grade)} fillOpacity="0.06" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.3" />
            )}
            <ProximalFemur
              fracAngleDeg={angleDeg}
              color={getColor(grade)}
              muted={isMuted(id)}
              showProtractor={true}
            />
            {/* Label below */}
            <text x="95" y="248" textAnchor="middle" fill={getColor(grade)} fontSize="11" fontWeight="600" opacity={isMuted(id) ? 0.3 : 1} style={{ transition: 'opacity 0.3s ease' }}>
              {grade.label} ({grade.angle})
            </text>
          </g>
        );
      })}

      {/* Force diagram legend */}
      {showLabels && (
        <g transform="translate(20, 310)">
          <rect x="0" y="0" width="560" height="36" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
          <text x="15" y="14" fill="#E2E8F0" fontSize="8" fontWeight="600">Biomechanics:</text>
          <text x="100" y="14" fill={CLINICAL_COLORS.info} fontSize="7.5">C = Compression (perpendicular)</text>
          <text x="280" y="14" fill="#94A3B8" fontSize="7.5">S = Shear (parallel to fracture)</text>
          <text x="15" y="28" fill="#94A3B8" fontSize="7">Higher angle = more shear force = higher nonunion risk | S = shear direction shown with colored arrow</text>
        </g>
      )}

      {/* Treatment / prognosis */}
      {showLabels && (
        <g transform="translate(20, 355)">
          {grades.map((g, i) => (
            <g key={g.id} transform={`translate(${i * 190}, 0)`}>
              <rect x="0" y="0" width="180" height="28" rx="4" fill="#1E293B" stroke={getColor(g)} strokeWidth="0.5" strokeOpacity="0.4" />
              <text x="10" y="12" fill={getColor(g)} fontSize="8" fontWeight="600">{g.label} ({g.angle})</text>
              <text x="10" y="23" fill="#94A3B8" fontSize="6.5">{g.prognosis} | {g.description}</text>
            </g>
          ))}
        </g>
      )}

      {/* Shear gradient */}
      {showLabels && (
        <g transform="translate(20, 390)">
          <text x="0" y="6" fill="#64748B" fontSize="6.5">Low shear</text>
          <rect x="60" y="0" width="450" height="5" rx="2.5" fill="url(#pauwelsGradient)" />
          <text x="520" y="6" fill="#64748B" fontSize="6.5">High shear</text>
        </g>
      )}

      <defs>
        <linearGradient id="pauwelsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={CLINICAL_COLORS.safe} />
          <stop offset="50%" stopColor={CLINICAL_COLORS.caution} />
          <stop offset="100%" stopColor={CLINICAL_COLORS.danger} />
        </linearGradient>
      </defs>
    </svg>
  );
}
