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

const GRAYSCALE = {
  safe: '#A0AEC0',
  caution: '#CBD5E0',
  danger: '#718096',
  info: '#E2E8F0',
};

const BONE_OUTLINE = '#94A3B8';
const BONE_FILL = '#1E293B';
const DARK_BG = '#0F172A';

interface GradeConfig {
  id: string;
  label: string;
  shortLabel: string;
  subtitle: string;
  color: string;
  cx: number;
}

export default function AOClassificationSVG({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const palette = colorScheme === 'clinical' ? CLINICAL_COLORS : GRAYSCALE;

  const grades: GradeConfig[] = [
    { id: 'type-a', label: 'Type A - Simple', shortLabel: 'A', subtitle: 'Simple', color: palette.safe, cx: 110 },
    { id: 'type-b', label: 'Type B - Wedge', shortLabel: 'B', subtitle: 'Wedge', color: palette.caution, cx: 300 },
    { id: 'type-c', label: 'Type C - Complex', shortLabel: 'C', subtitle: 'Complex', color: palette.danger, cx: 490 },
  ];

  const isActive = (id: string) => activeGrade === id;
  const getOpacity = (id: string) => {
    if (!activeGrade) return 1;
    return isActive(id) ? 1 : 0.3;
  };

  const handleClick = (id: string) => {
    if (interactive && onGradeSelect) {
      onGradeSelect(id);
    }
  };

  // Generic long bone dimensions
  const TOP_Y = 80;
  const BOT_Y = 330;
  const FRAC_Y = 200;
  const BONE_W = 32; // half-width of diaphysis

  const renderLongBone = (cx: number, grade: GradeConfig) => {
    const bL = cx - BONE_W / 2;
    const bR = cx + BONE_W / 2;
    const epiphW = 24; // extra width at epiphyses

    return (
      <g>
        {/* Proximal epiphysis */}
        <ellipse
          cx={cx}
          cy={TOP_Y + 8}
          rx={BONE_W / 2 + epiphW}
          ry={14}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.8}
        />

        {/* Proximal metaphysis taper */}
        <path
          d={`M ${cx - BONE_W / 2 - epiphW} ${TOP_Y + 14}
              C ${cx - BONE_W / 2 - epiphW + 5} ${TOP_Y + 40}, ${bL + 2} ${TOP_Y + 55}, ${bL} ${TOP_Y + 65}
              L ${bL} ${FRAC_Y - 40}
              L ${bR} ${FRAC_Y - 40}
              L ${bR} ${TOP_Y + 65}
              C ${bR - 2} ${TOP_Y + 55}, ${cx + BONE_W / 2 + epiphW - 5} ${TOP_Y + 40}, ${cx + BONE_W / 2 + epiphW} ${TOP_Y + 14}
              Z`}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />

        {/* Diaphysis (shaft) */}
        <rect
          x={bL}
          y={FRAC_Y - 40}
          width={BONE_W}
          height={80}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />

        {/* Distal metaphysis taper */}
        <path
          d={`M ${bL} ${FRAC_Y + 40}
              L ${bL} ${BOT_Y - 60}
              C ${bL + 2} ${BOT_Y - 50}, ${cx - BONE_W / 2 - epiphW + 5} ${BOT_Y - 35}, ${cx - BONE_W / 2 - epiphW} ${BOT_Y - 18}
              L ${cx + BONE_W / 2 + epiphW} ${BOT_Y - 18}
              C ${cx + BONE_W / 2 + epiphW - 5} ${BOT_Y - 35}, ${bR - 2} ${BOT_Y - 50}, ${bR} ${BOT_Y - 60}
              L ${bR} ${FRAC_Y + 40}
              Z`}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />

        {/* Distal epiphysis */}
        <ellipse
          cx={cx}
          cy={BOT_Y - 10}
          rx={BONE_W / 2 + epiphW}
          ry={14}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.8}
        />

        {/* Medullary canal */}
        <rect
          x={bL + 6}
          y={TOP_Y + 50}
          width={BONE_W - 12}
          height={BOT_Y - TOP_Y - 90}
          fill={DARK_BG}
          opacity={0.4}
          rx={3}
        />

        {/* Cortical thickness hint */}
        <line x1={bL + 5} y1={TOP_Y + 55} x2={bL + 5} y2={BOT_Y - 55} stroke={BONE_OUTLINE} strokeWidth={0.3} opacity={0.3} />
        <line x1={bR - 5} y1={TOP_Y + 55} x2={bR - 5} y2={BOT_Y - 55} stroke={BONE_OUTLINE} strokeWidth={0.3} opacity={0.3} />

        {/* Fracture pattern */}
        {renderFracture(cx, grade)}
      </g>
    );
  };

  const renderFracture = (cx: number, grade: GradeConfig) => {
    const bL = cx - BONE_W / 2;
    const bR = cx + BONE_W / 2;
    const { color } = grade;

    switch (grade.id) {
      case 'type-a':
        return (
          <g>
            {/* Simple transverse fracture - single clean line */}
            <line
              x1={bL - 4}
              y1={FRAC_Y}
              x2={bR + 4}
              y2={FRAC_Y + 2}
              stroke={color}
              strokeWidth={2.5}
              strokeLinecap="round"
            />

            {/* Optional: show the 3 subtypes as small sketches */}
            {/* A1 spiral hint */}
            <path
              d={`M ${bL - 2} ${FRAC_Y - 4} Q ${cx} ${FRAC_Y + 4}, ${bR + 2} ${FRAC_Y}`}
              fill="none"
              stroke={color}
              strokeWidth={0.8}
              opacity={0.4}
              strokeDasharray="3 2"
            />

            {/* Displacement arrows (minimal) */}
            <line x1={cx + 22} y1={FRAC_Y - 8} x2={cx + 22} y2={FRAC_Y - 18} stroke={color} strokeWidth={1} opacity={0.5} markerEnd="url(#ao-arr-a)" />
            <line x1={cx + 22} y1={FRAC_Y + 10} x2={cx + 22} y2={FRAC_Y + 20} stroke={color} strokeWidth={1} opacity={0.5} markerEnd="url(#ao-arr-a)" />

            {/* Subtype labels */}
            <text x={cx} y={FRAC_Y + 55} fill={color} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>
              A1: spiral | A2: oblique | A3: transverse
            </text>
          </g>
        );

      case 'type-b':
        return (
          <g>
            {/* Wedge / butterfly fragment fracture */}
            {/* Main fracture lines forming butterfly fragment */}
            <line
              x1={bL - 3}
              y1={FRAC_Y - 15}
              x2={bR + 3}
              y2={FRAC_Y}
              stroke={color}
              strokeWidth={2.5}
              strokeLinecap="round"
            />
            <line
              x1={bL - 3}
              y1={FRAC_Y + 15}
              x2={bR + 3}
              y2={FRAC_Y}
              stroke={color}
              strokeWidth={2.5}
              strokeLinecap="round"
            />

            {/* Butterfly fragment (wedge shape) */}
            <path
              d={`M ${bL - 3} ${FRAC_Y - 15}
                  L ${bR + 3} ${FRAC_Y}
                  L ${bL - 3} ${FRAC_Y + 15}
                  Z`}
              fill={color}
              opacity={0.12}
              stroke={color}
              strokeWidth={1}
            />

            {/* Fragment slightly displaced outward */}
            <path
              d={`M ${bL - 6} ${FRAC_Y - 13}
                  L ${bL - 16} ${FRAC_Y}
                  L ${bL - 6} ${FRAC_Y + 13}
                  Z`}
              fill={color}
              opacity={0.2}
              stroke={color}
              strokeWidth={1.5}
              strokeDasharray="3 2"
            />

            {/* Displacement arrow for fragment */}
            <line x1={bL - 5} y1={FRAC_Y} x2={bL - 12} y2={FRAC_Y} stroke={color} strokeWidth={1} opacity={0.6} markerEnd="url(#ao-arr-b)" />

            {/* Cortex contact still present on opposite side */}
            <circle cx={bR + 1} cy={FRAC_Y} r={2.5} fill="none" stroke={color} strokeWidth={1} opacity={0.5} />

            <text x={cx} y={FRAC_Y + 55} fill={color} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>
              B1: spiral wedge | B2: bending | B3: fragmented wedge
            </text>
          </g>
        );

      case 'type-c':
        return (
          <g>
            {/* Complex / multifragmentary fracture */}
            {/* Multiple fracture lines */}
            <line x1={bL - 4} y1={FRAC_Y - 20} x2={bR + 4} y2={FRAC_Y - 12} stroke={color} strokeWidth={2.2} strokeLinecap="round" />
            <line x1={bL - 4} y1={FRAC_Y + 20} x2={bR + 4} y2={FRAC_Y + 14} stroke={color} strokeWidth={2.2} strokeLinecap="round" />
            <line x1={bL - 2} y1={FRAC_Y - 5} x2={bR + 2} y2={FRAC_Y + 5} stroke={color} strokeWidth={2} strokeLinecap="round" />
            {/* Diagonal connecting lines */}
            <line x1={bL + 2} y1={FRAC_Y - 18} x2={bL - 1} y2={FRAC_Y + 18} stroke={color} strokeWidth={1.5} opacity={0.7} />
            <line x1={bR - 2} y1={FRAC_Y - 14} x2={bR + 1} y2={FRAC_Y + 16} stroke={color} strokeWidth={1.5} opacity={0.7} />
            <line x1={cx - 4} y1={FRAC_Y - 16} x2={cx + 5} y2={FRAC_Y + 18} stroke={color} strokeWidth={1.2} opacity={0.5} />

            {/* Multiple fragments highlighted */}
            <path
              d={`M ${bL + 2} ${FRAC_Y - 15} L ${cx - 2} ${FRAC_Y - 4} L ${bL - 1} ${FRAC_Y + 5} Z`}
              fill={color}
              opacity={0.1}
              stroke={color}
              strokeWidth={0.8}
            />
            <path
              d={`M ${cx - 2} ${FRAC_Y - 4} L ${bR - 3} ${FRAC_Y - 12} L ${bR + 1} ${FRAC_Y + 3} L ${cx + 3} ${FRAC_Y + 6} Z`}
              fill={color}
              opacity={0.1}
              stroke={color}
              strokeWidth={0.8}
            />
            <path
              d={`M ${bL - 1} ${FRAC_Y + 5} L ${cx + 3} ${FRAC_Y + 6} L ${bR + 1} ${FRAC_Y + 16} L ${bL + 3} ${FRAC_Y + 18} Z`}
              fill={color}
              opacity={0.1}
              stroke={color}
              strokeWidth={0.8}
            />

            {/* No cortical contact indicator */}
            <line x1={bL - 8} y1={FRAC_Y - 22} x2={bL - 8} y2={FRAC_Y + 22} stroke={color} strokeWidth={1} strokeDasharray="2 2" opacity={0.4} />
            <line x1={bR + 8} y1={FRAC_Y - 22} x2={bR + 8} y2={FRAC_Y + 22} stroke={color} strokeWidth={1} strokeDasharray="2 2" opacity={0.4} />

            {/* Scatter displacement arrows */}
            <line x1={cx - 12} y1={FRAC_Y - 8} x2={cx - 20} y2={FRAC_Y - 14} stroke={color} strokeWidth={1} opacity={0.4} markerEnd="url(#ao-arr-c)" />
            <line x1={cx + 10} y1={FRAC_Y + 6} x2={cx + 18} y2={FRAC_Y + 12} stroke={color} strokeWidth={1} opacity={0.4} markerEnd="url(#ao-arr-c)" />

            <text x={cx} y={FRAC_Y + 55} fill={color} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>
              C1: spiral | C2: segmental | C3: irregular
            </text>
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="AO/OTA universal fracture classification: interactive diagram showing Type A simple, Type B wedge, and Type C complex fracture patterns on a generic long bone"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="400" fill={DARK_BG} rx={8} />

      {/* Title */}
      <text x={300} y={32} fill="#E2E8F0" fontSize={16} fontWeight={600} fontFamily="system-ui" textAnchor="middle">
        AO/OTA Fracture Classification
      </text>
      <text x={300} y={50} fill="#64748B" fontSize={11} fontFamily="system-ui" textAnchor="middle">
        Universal Long Bone Fracture Types (Diaphyseal)
      </text>

      {/* Arrow markers for each grade */}
      <defs>
        <marker id="ao-arr-a" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M 0 0 L 6 2.5 L 0 5 Z" fill={palette.safe} />
        </marker>
        <marker id="ao-arr-b" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M 0 0 L 6 2.5 L 0 5 Z" fill={palette.caution} />
        </marker>
        <marker id="ao-arr-c" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M 0 0 L 6 2.5 L 0 5 Z" fill={palette.danger} />
        </marker>
      </defs>

      {/* Severity gradient */}
      <defs>
        <linearGradient id="ao-sev" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.safe} stopOpacity={0.6} />
          <stop offset="50%" stopColor={palette.caution} stopOpacity={0.6} />
          <stop offset="100%" stopColor={palette.danger} stopOpacity={0.6} />
        </linearGradient>
        <marker id="ao-sev-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M 0 0 L 8 3 L 0 6 Z" fill={palette.danger} opacity={0.6} />
        </marker>
      </defs>
      <line x1={60} y1={65} x2={545} y2={65} stroke="url(#ao-sev)" strokeWidth={2} markerEnd="url(#ao-sev-arr)" />
      <text x={60} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">Simple</text>
      <text x={510} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">Complex</text>

      {/* Grade panels */}
      {grades.map((grade) => {
        const active = isActive(grade.id);
        const opacity = getOpacity(grade.id);

        return (
          <g
            key={grade.id}
            style={{ cursor: interactive ? 'pointer' : 'default', opacity, transition: 'opacity 0.3s ease' }}
            onClick={() => handleClick(grade.id)}
          >
            <title>{`${grade.label}: Click to view details`}</title>

            {/* Panel highlight */}
            <rect
              x={grade.cx - 85}
              y={72}
              width={170}
              height={305}
              rx={6}
              fill={active ? `${grade.color}08` : 'transparent'}
              stroke={active ? grade.color : 'transparent'}
              strokeWidth={active ? 1.5 : 0}
              strokeOpacity={0.4}
            />

            {renderLongBone(grade.cx, grade)}

            {/* Label */}
            {showLabels && (
              <g>
                <rect
                  x={grade.cx - 40}
                  y={355}
                  width={80}
                  height={22}
                  rx={4}
                  fill={active ? grade.color : BONE_FILL}
                  stroke={grade.color}
                  strokeWidth={active ? 1.5 : 1}
                  opacity={active ? 1 : 0.6}
                />
                <text
                  x={grade.cx}
                  y={370}
                  fill={active ? DARK_BG : grade.color}
                  fontSize={11}
                  fontWeight={active ? 700 : 500}
                  fontFamily="system-ui"
                  textAnchor="middle"
                >
                  {`${grade.shortLabel} - ${grade.subtitle}`}
                </text>
              </g>
            )}

            {/* Active pulse */}
            {active && (
              <circle cx={grade.cx} cy={385} r={3} fill={grade.color}>
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* Bottom info */}
      <text x={300} y={395} fill="#475569" fontSize={9} fontFamily="system-ui" textAnchor="middle">
        AO/OTA: Bone.Segment.Type.Group (e.g. 42-B1 = Tibia, Diaphysis, Wedge, Spiral)
      </text>
    </svg>
  );
}
