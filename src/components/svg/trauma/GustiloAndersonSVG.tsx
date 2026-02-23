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
  color: string;
  x: number;
}

export default function GustiloAndersonSVG({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const palette = colorScheme === 'clinical' ? CLINICAL_COLORS : GRAYSCALE;

  const grades: GradeConfig[] = [
    { id: 'type-i', label: 'Type I', shortLabel: 'I', color: palette.safe, x: 20 },
    { id: 'type-ii', label: 'Type II', shortLabel: 'II', color: palette.caution, x: 134 },
    { id: 'type-iiia', label: 'Type IIIA', shortLabel: 'IIIA', color: palette.danger, x: 248 },
    { id: 'type-iiib', label: 'Type IIIB', shortLabel: 'IIIB', color: palette.danger, x: 362 },
    { id: 'type-iiic', label: 'Type IIIC', shortLabel: 'IIIC', color: palette.danger, x: 476 },
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

  const PANEL_W = 104;
  const TOP_Y = 80;
  const BOT_Y = 320;
  const FRAC_Y = 185;

  const renderTibia = (cx: number, grade: GradeConfig) => {
    const bL = cx + 30;
    const bR = cx + 70;
    const bM = cx + 50;

    return (
      <g>
        {/* Soft tissue envelope */}
        <ellipse
          cx={bM}
          cy={200}
          rx={48}
          ry={125}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={0.5}
          strokeDasharray="4 3"
          opacity={0.4}
        />

        {/* Tibia shaft */}
        <path
          d={`M ${bL + 5} ${TOP_Y + 15}
              C ${bL + 5} ${TOP_Y + 15}, ${bL - 5} ${TOP_Y + 40}, ${bL + 2} ${FRAC_Y - 20}
              L ${bL + 2} ${FRAC_Y + 20}
              C ${bL - 5} ${FRAC_Y + 60}, ${bL - 2} ${BOT_Y - 40}, ${bL + 5} ${BOT_Y - 15}
              L ${bR - 5} ${BOT_Y - 15}
              C ${bR + 2} ${BOT_Y - 40}, ${bR + 5} ${FRAC_Y + 60}, ${bR - 2} ${FRAC_Y + 20}
              L ${bR - 2} ${FRAC_Y - 20}
              C ${bR + 5} ${TOP_Y + 40}, ${bR + 2} ${TOP_Y + 15}, ${bR - 5} ${TOP_Y + 15}
              Z`}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />

        {/* Proximal tibial plateau */}
        <ellipse cx={bM} cy={TOP_Y + 12} rx={25} ry={10} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.5} />

        {/* Distal plafond */}
        <ellipse cx={bM} cy={BOT_Y - 12} rx={22} ry={8} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.5} />

        {/* Medullary canal hint */}
        <line x1={bM} y1={TOP_Y + 30} x2={bM} y2={BOT_Y - 30} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.2} strokeDasharray="6 4" />

        {renderInjury(cx, grade)}
      </g>
    );
  };

  const renderInjury = (cx: number, grade: GradeConfig) => {
    const bL = cx + 30;
    const bR = cx + 70;
    const bM = cx + 50;

    switch (grade.id) {
      case 'type-i':
        return (
          <g>
            {/* Simple transverse fracture line */}
            <line x1={bL} y1={FRAC_Y} x2={bR} y2={FRAC_Y + 3} stroke={grade.color} strokeWidth={2} strokeLinecap="round" />
            {/* Small wound < 1 cm */}
            <line x1={bR + 2} y1={FRAC_Y - 3} x2={bR + 6} y2={FRAC_Y + 3} stroke={grade.color} strokeWidth={2.5} strokeLinecap="round" />
            <text x={bR + 10} y={FRAC_Y + 2} fill={grade.color} fontSize={8} fontFamily="system-ui" opacity={0.8}>{'&lt;1cm'}</text>
          </g>
        );

      case 'type-ii':
        return (
          <g>
            {/* Oblique fracture with mild comminution */}
            <line x1={bL - 2} y1={FRAC_Y - 8} x2={bR + 2} y2={FRAC_Y + 10} stroke={grade.color} strokeWidth={2} strokeLinecap="round" />
            <line x1={bM - 5} y1={FRAC_Y - 3} x2={bM + 8} y2={FRAC_Y + 8} stroke={grade.color} strokeWidth={1.5} opacity={0.7} />
            {/* Medium wound 1-10 cm */}
            <path d={`M ${bR + 2} ${FRAC_Y - 10} C ${bR + 14} ${FRAC_Y}, ${bR + 14} ${FRAC_Y + 2}, ${bR + 2} ${FRAC_Y + 12}`} fill="none" stroke={grade.color} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={bR + 5} y1={FRAC_Y - 5} x2={bR + 10} y2={FRAC_Y - 2} stroke={grade.color} strokeWidth={1} opacity={0.6} />
            <line x1={bR + 5} y1={FRAC_Y + 7} x2={bR + 10} y2={FRAC_Y + 4} stroke={grade.color} strokeWidth={1} opacity={0.6} />
            <text x={bR + 14} y={FRAC_Y + 2} fill={grade.color} fontSize={8} fontFamily="system-ui" opacity={0.8}>1-10cm</text>
          </g>
        );

      case 'type-iiia':
        return (
          <g>
            {/* Severe comminuted fracture */}
            <line x1={bL - 2} y1={FRAC_Y - 12} x2={bR + 2} y2={FRAC_Y + 5} stroke={grade.color} strokeWidth={2} />
            <line x1={bL + 5} y1={FRAC_Y + 2} x2={bR - 5} y2={FRAC_Y + 15} stroke={grade.color} strokeWidth={1.8} />
            <line x1={bM - 10} y1={FRAC_Y - 5} x2={bM + 5} y2={FRAC_Y + 12} stroke={grade.color} strokeWidth={1.5} opacity={0.7} />
            {/* Butterfly fragment */}
            <path d={`M ${bM - 3} ${FRAC_Y - 5} L ${bM + 10} ${FRAC_Y} L ${bM - 1} ${FRAC_Y + 8} Z`} fill={grade.color} opacity={0.25} stroke={grade.color} strokeWidth={1} />
            {/* Large wound - adequate soft tissue coverage */}
            <path d={`M ${bR + 2} ${FRAC_Y - 18} C ${bR + 22} ${FRAC_Y - 5}, ${bR + 22} ${FRAC_Y + 5}, ${bR + 2} ${FRAC_Y + 20}`} fill="none" stroke={grade.color} strokeWidth={2.5} strokeLinecap="round" />
            {/* Coverage lines (still present) */}
            <path d={`M ${bR + 5} ${FRAC_Y - 12} C ${bR + 15} ${FRAC_Y}, ${bR + 15} ${FRAC_Y}, ${bR + 5} ${FRAC_Y + 14}`} fill="none" stroke={grade.color} strokeWidth={1} strokeDasharray="3 2" opacity={0.5} />
            <text x={bR + 16} y={FRAC_Y + 2} fill={grade.color} fontSize={7} fontFamily="system-ui" opacity={0.8}>{'>10cm'}</text>
          </g>
        );

      case 'type-iiib':
        return (
          <g>
            {/* Severe comminution */}
            <line x1={bL - 3} y1={FRAC_Y - 15} x2={bR + 3} y2={FRAC_Y + 5} stroke={grade.color} strokeWidth={2} />
            <line x1={bL + 3} y1={FRAC_Y} x2={bR - 3} y2={FRAC_Y + 18} stroke={grade.color} strokeWidth={2} />
            <line x1={bM - 12} y1={FRAC_Y - 8} x2={bM + 12} y2={FRAC_Y + 10} stroke={grade.color} strokeWidth={1.5} />
            <line x1={bM} y1={FRAC_Y - 12} x2={bM - 8} y2={FRAC_Y + 15} stroke={grade.color} strokeWidth={1.5} opacity={0.7} />
            {/* Exposed bone highlight */}
            <rect x={bL + 5} y={FRAC_Y - 8} width={bR - bL - 10} height={20} fill={grade.color} opacity={0.15} rx={2} />
            {/* Periosteum stripped - pulled away from bone */}
            <path d={`M ${bR + 3} ${FRAC_Y - 20} C ${bR + 25} ${FRAC_Y - 12}, ${bR + 28} ${FRAC_Y + 12}, ${bR + 3} ${FRAC_Y + 22}`} fill="none" stroke={grade.color} strokeWidth={2.5} strokeLinecap="round" />
            {/* Flap needed indicator arrows */}
            <path d={`M ${bR + 10} ${FRAC_Y - 15} L ${bR + 18} ${FRAC_Y - 5} L ${bR + 10} ${FRAC_Y + 5}`} fill="none" stroke={grade.color} strokeWidth={1.5} strokeDasharray="2 2" opacity={0.6} />
            <text x={bM} y={FRAC_Y + 35} fill={grade.color} fontSize={7} fontFamily="system-ui" opacity={0.7} textAnchor="middle">exposed</text>
            <text x={bM} y={FRAC_Y + 43} fill={grade.color} fontSize={7} fontFamily="system-ui" opacity={0.7} textAnchor="middle">bone</text>
          </g>
        );

      case 'type-iiic':
        return (
          <g>
            {/* Severe comminution */}
            <line x1={bL - 3} y1={FRAC_Y - 15} x2={bR + 3} y2={FRAC_Y + 8} stroke={grade.color} strokeWidth={2} />
            <line x1={bL + 5} y1={FRAC_Y - 3} x2={bR - 5} y2={FRAC_Y + 18} stroke={grade.color} strokeWidth={2} />
            <line x1={bM - 10} y1={FRAC_Y - 10} x2={bM + 10} y2={FRAC_Y + 12} stroke={grade.color} strokeWidth={1.5} />
            <line x1={bM + 5} y1={FRAC_Y - 14} x2={bM - 10} y2={FRAC_Y + 8} stroke={grade.color} strokeWidth={1.5} opacity={0.7} />
            {/* Large wound */}
            <path d={`M ${bR + 3} ${FRAC_Y - 22} C ${bR + 28} ${FRAC_Y - 10}, ${bR + 28} ${FRAC_Y + 12}, ${bR + 3} ${FRAC_Y + 24}`} fill="none" stroke={grade.color} strokeWidth={2.5} />
            {/* Artery - intact proximal */}
            <path d={`M ${cx + 18} ${TOP_Y + 30} C ${cx + 15} ${FRAC_Y - 40}, ${cx + 17} ${FRAC_Y - 25}, ${cx + 18} ${FRAC_Y - 12}`} fill="none" stroke="#EF4444" strokeWidth={2.5} opacity={0.8} />
            {/* Artery - damaged zone */}
            <line x1={cx + 18} y1={FRAC_Y - 12} x2={cx + 14} y2={FRAC_Y + 5} stroke="#EF4444" strokeWidth={2.5} strokeDasharray="4 3" opacity={0.9} />
            {/* Artery - ischemic distal */}
            <path d={`M ${cx + 14} ${FRAC_Y + 5} C ${cx + 16} ${FRAC_Y + 25}, ${cx + 18} ${FRAC_Y + 50}, ${cx + 17} ${BOT_Y - 50}`} fill="none" stroke="#EF4444" strokeWidth={2} strokeDasharray="2 3" opacity={0.4} />
            {/* Vascular injury X mark */}
            <line x1={cx + 12} y1={FRAC_Y - 6} x2={cx + 22} y2={FRAC_Y + 4} stroke="#EF4444" strokeWidth={2.5} />
            <line x1={cx + 22} y1={FRAC_Y - 6} x2={cx + 12} y2={FRAC_Y + 4} stroke="#EF4444" strokeWidth={2.5} />
            <text x={cx + 17} y={FRAC_Y + 35} fill="#EF4444" fontSize={7} fontFamily="system-ui" opacity={0.8} textAnchor="middle">vascular</text>
            <text x={cx + 17} y={FRAC_Y + 43} fill="#EF4444" fontSize={7} fontFamily="system-ui" opacity={0.8} textAnchor="middle">injury</text>
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
      aria-label="Gustilo-Anderson classification of open fractures: interactive diagram showing 5 types of open fracture severity from Type I to Type IIIC"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="400" fill={DARK_BG} rx={8} />

      {/* Title */}
      <text x={300} y={32} fill="#E2E8F0" fontSize={16} fontWeight={600} fontFamily="system-ui" textAnchor="middle">
        Gustilo-Anderson Classification
      </text>
      <text x={300} y={50} fill="#64748B" fontSize={11} fontFamily="system-ui" textAnchor="middle">
        Open Fractures &mdash; Progressive Soft Tissue Injury Severity
      </text>

      {/* Severity gradient arrow */}
      <defs>
        <linearGradient id="ga-sev" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.safe} stopOpacity={0.6} />
          <stop offset="40%" stopColor={palette.caution} stopOpacity={0.6} />
          <stop offset="100%" stopColor={palette.danger} stopOpacity={0.6} />
        </linearGradient>
        <marker id="ga-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M 0 0 L 8 3 L 0 6 Z" fill={palette.danger} opacity={0.6} />
        </marker>
      </defs>
      <line x1={50} y1={65} x2={555} y2={65} stroke="url(#ga-sev)" strokeWidth={2} markerEnd="url(#ga-arr)" />
      <text x={50} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">Low energy</text>
      <text x={520} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">High energy</text>

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
              x={grade.x}
              y={70}
              width={PANEL_W}
              height={310}
              rx={6}
              fill={active ? `${grade.color}08` : 'transparent'}
              stroke={active ? grade.color : 'transparent'}
              strokeWidth={active ? 1.5 : 0}
              strokeOpacity={0.4}
            />

            {renderTibia(grade.x, grade)}

            {/* Label */}
            {showLabels && (
              <g>
                <rect
                  x={grade.x + PANEL_W / 2 - 28}
                  y={340}
                  width={56}
                  height={22}
                  rx={4}
                  fill={active ? grade.color : BONE_FILL}
                  stroke={grade.color}
                  strokeWidth={active ? 1.5 : 1}
                  opacity={active ? 1 : 0.6}
                />
                <text
                  x={grade.x + PANEL_W / 2}
                  y={355}
                  fill={active ? DARK_BG : grade.color}
                  fontSize={11}
                  fontWeight={active ? 700 : 500}
                  fontFamily="system-ui"
                  textAnchor="middle"
                >
                  {grade.shortLabel}
                </text>
              </g>
            )}

            {/* Active pulse dot */}
            {active && (
              <circle cx={grade.x + PANEL_W / 2} cy={370} r={3} fill={grade.color}>
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* Bottom info bar */}
      <text x={300} y={392} fill="#475569" fontSize={9} fontFamily="system-ui" textAnchor="middle">
        Infection rate: I (0-2%) | II (2-7%) | IIIA (7-10%) | IIIB (10-50%) | IIIC (25-50%)
      </text>
    </svg>
  );
}
