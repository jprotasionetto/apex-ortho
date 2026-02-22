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
  cx: number;
}

export default function TscherneSVG({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const palette = colorScheme === 'clinical' ? CLINICAL_COLORS : GRAYSCALE;

  const grades: GradeConfig[] = [
    { id: 'grade-0', label: 'Grade 0 (C0) - Minimal', shortLabel: 'C0', color: palette.safe, cx: 90 },
    { id: 'grade-1', label: 'Grade 1 (C1) - Mild', shortLabel: 'C1', color: palette.info, cx: 232 },
    { id: 'grade-2', label: 'Grade 2 (C2) - Moderate', shortLabel: 'C2', color: palette.caution, cx: 374 },
    { id: 'grade-3', label: 'Grade 3 (C3) - Severe', shortLabel: 'C3', color: palette.danger, cx: 516 },
  ];

  const CY = 195;
  const R_SKIN = 70;
  const R_SUBCUT = 58;
  const R_MUSCLE = 44;
  const R_BONE = 18;

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

  const renderCrossSection = (grade: GradeConfig) => {
    const { cx: gcx } = grade;
    const active = isActive(grade.id);

    return (
      <g>
        {/* Skin layer (outermost) */}
        <circle
          cx={gcx}
          cy={CY}
          r={R_SKIN}
          fill={BONE_FILL}
          stroke={active ? grade.color : BONE_OUTLINE}
          strokeWidth={active ? 2.5 : 2}
        />

        {/* Subcutaneous tissue */}
        <circle
          cx={gcx}
          cy={CY}
          r={R_SUBCUT}
          fill={`${BONE_FILL}`}
          stroke={BONE_OUTLINE}
          strokeWidth={1}
          strokeDasharray="4 2"
          opacity={0.6}
        />

        {/* Muscle compartment */}
        <circle
          cx={gcx}
          cy={CY}
          r={R_MUSCLE}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1}
          opacity={0.8}
        />

        {/* Compartment dividers (septa) */}
        <line x1={gcx} y1={CY - R_MUSCLE} x2={gcx} y2={CY + R_MUSCLE} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.3} />
        <line x1={gcx - R_MUSCLE} y1={CY} x2={gcx + R_MUSCLE} y2={CY} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.3} />

        {/* Bone (central) */}
        <circle
          cx={gcx}
          cy={CY}
          r={R_BONE}
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.8}
        />
        {/* Medullary canal */}
        <circle cx={gcx} cy={CY} r={8} fill={DARK_BG} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.5} />

        {/* Grade-specific damage overlay */}
        {renderDamage(grade)}

        {/* Layer labels (only on active or if showLabels and nothing selected) */}
        {active && (
          <g opacity={0.5}>
            <text x={gcx + R_SKIN - 5} y={CY - R_SKIN + 14} fill="#94A3B8" fontSize={6} fontFamily="system-ui" textAnchor="end">skin</text>
            <text x={gcx + R_SUBCUT - 3} y={CY - R_SUBCUT + 12} fill="#94A3B8" fontSize={6} fontFamily="system-ui" textAnchor="end">subcut.</text>
            <text x={gcx + R_MUSCLE - 3} y={CY - R_MUSCLE + 12} fill="#94A3B8" fontSize={6} fontFamily="system-ui" textAnchor="end">muscle</text>
            <text x={gcx} y={CY + R_BONE + 12} fill="#94A3B8" fontSize={6} fontFamily="system-ui" textAnchor="middle">bone</text>
          </g>
        )}
      </g>
    );
  };

  const renderDamage = (grade: GradeConfig) => {
    const { cx: gcx, color } = grade;

    switch (grade.id) {
      case 'grade-0':
        return (
          <g>
            {/* Simple fracture line through bone only */}
            <line
              x1={gcx - R_BONE - 3}
              y1={CY - 3}
              x2={gcx + R_BONE + 3}
              y2={CY + 3}
              stroke={color}
              strokeWidth={1.8}
              strokeLinecap="round"
            />
            {/* Minimal indicator - small green check-like mark */}
            <text x={gcx} y={CY + R_SKIN + 12} fill={color} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.7}>
              minimal injury
            </text>
          </g>
        );

      case 'grade-1':
        return (
          <g>
            {/* Moderate fracture line */}
            <line x1={gcx - R_BONE - 5} y1={CY - 5} x2={gcx + R_BONE + 5} y2={CY + 6} stroke={color} strokeWidth={2} strokeLinecap="round" />
            {/* Superficial abrasion on skin surface (arc) */}
            <path
              d={`M ${gcx - 30} ${CY - R_SKIN + 5}
                  A ${R_SKIN} ${R_SKIN} 0 0 1 ${gcx + 20} ${CY - R_SKIN + 10}`}
              fill="none"
              stroke={color}
              strokeWidth={3}
              strokeLinecap="round"
              opacity={0.7}
            />
            {/* Small contusion marks on skin */}
            <circle cx={gcx - 10} cy={CY - R_SKIN + 8} r={3} fill={color} opacity={0.3} />
            <circle cx={gcx + 5} cy={CY - R_SKIN + 6} r={2.5} fill={color} opacity={0.25} />
            {/* Mild edema - slight outer glow */}
            <circle cx={gcx} cy={CY} r={R_SKIN + 4} fill="none" stroke={color} strokeWidth={1} opacity={0.15} strokeDasharray="6 3" />
            <text x={gcx} y={CY + R_SKIN + 12} fill={color} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.7}>
              superficial abrasion
            </text>
          </g>
        );

      case 'grade-2':
        return (
          <g>
            {/* Comminuted fracture */}
            <line x1={gcx - R_BONE - 6} y1={CY - 6} x2={gcx + R_BONE + 6} y2={CY + 7} stroke={color} strokeWidth={2.2} />
            <line x1={gcx - R_BONE} y1={CY + 3} x2={gcx + R_BONE} y2={CY - 5} stroke={color} strokeWidth={1.5} opacity={0.7} />
            {/* Deep contaminated abrasion across skin */}
            <path
              d={`M ${gcx - 40} ${CY - R_SKIN + 3}
                  A ${R_SKIN} ${R_SKIN} 0 0 1 ${gcx + 35} ${CY - R_SKIN + 8}`}
              fill="none"
              stroke={color}
              strokeWidth={4}
              strokeLinecap="round"
              opacity={0.6}
            />
            {/* Deep contusion extending into subcutaneous tissue */}
            <path
              d={`M ${gcx - 20} ${CY - R_SKIN + 8}
                  C ${gcx - 15} ${CY - R_SUBCUT}, ${gcx + 10} ${CY - R_SUBCUT + 5}, ${gcx + 15} ${CY - R_SKIN + 12}`}
              fill={color}
              stroke={color}
              strokeWidth={1}
              opacity={0.25}
            />
            {/* Contamination marks */}
            <circle cx={gcx - 15} cy={CY - R_SKIN + 5} r={2} fill={color} opacity={0.4} />
            <circle cx={gcx} cy={CY - R_SKIN + 4} r={2.5} fill={color} opacity={0.35} />
            <circle cx={gcx + 15} cy={CY - R_SKIN + 7} r={1.8} fill={color} opacity={0.4} />
            {/* Compartment pressure - swelling indicator (pulsing ring) */}
            <circle cx={gcx} cy={CY} r={R_MUSCLE + 3} fill="none" stroke={color} strokeWidth={2} opacity={0.3} strokeDasharray="4 2">
              <animate attributeName="r" values={`${R_MUSCLE + 2};${R_MUSCLE + 6};${R_MUSCLE + 2}`} dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Edema ring */}
            <circle cx={gcx} cy={CY} r={R_SKIN + 6} fill="none" stroke={color} strokeWidth={1.5} opacity={0.2} strokeDasharray="3 3" />
            <text x={gcx} y={CY + R_SKIN + 12} fill={color} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.7}>
              compartment risk
            </text>
          </g>
        );

      case 'grade-3':
        return (
          <g>
            {/* Severe comminuted fracture */}
            <line x1={gcx - R_BONE - 8} y1={CY - 8} x2={gcx + R_BONE + 8} y2={CY + 8} stroke={color} strokeWidth={2.5} />
            <line x1={gcx - R_BONE - 3} y1={CY + 5} x2={gcx + R_BONE + 3} y2={CY - 7} stroke={color} strokeWidth={2} />
            <line x1={gcx - 5} y1={CY - R_BONE} x2={gcx + 3} y2={CY + R_BONE} stroke={color} strokeWidth={1.5} opacity={0.6} />
            {/* Extensive skin crush - large area of damage */}
            <path
              d={`M ${gcx - 50} ${CY - R_SKIN + 2}
                  A ${R_SKIN} ${R_SKIN} 0 0 1 ${gcx + 50} ${CY - R_SKIN + 2}`}
              fill="none"
              stroke={color}
              strokeWidth={5}
              strokeLinecap="round"
              opacity={0.5}
            />
            {/* Deep tissue destruction extending through all layers */}
            <path
              d={`M ${gcx - 25} ${CY - R_SKIN + 5}
                  L ${gcx - 20} ${CY - R_MUSCLE + 5}
                  L ${gcx + 15} ${CY - R_MUSCLE + 8}
                  L ${gcx + 25} ${CY - R_SKIN + 8}
                  Z`}
              fill={color}
              opacity={0.2}
              stroke={color}
              strokeWidth={1}
            />
            {/* Muscle destruction */}
            <path
              d={`M ${gcx + R_MUSCLE - 5} ${CY - 15}
                  C ${gcx + R_SUBCUT} ${CY - 10}, ${gcx + R_SUBCUT} ${CY + 10}, ${gcx + R_MUSCLE - 5} ${CY + 15}`}
              fill={color}
              stroke={color}
              strokeWidth={1}
              opacity={0.25}
            />
            {/* Vascular injury indicator */}
            <line x1={gcx - R_MUSCLE + 10} y1={CY - 20} x2={gcx - R_MUSCLE + 10} y2={CY + 20} stroke="#EF4444" strokeWidth={2} opacity={0.6} />
            <line x1={gcx - R_MUSCLE + 10} y1={CY - 5} x2={gcx - R_MUSCLE + 10} y2={CY + 5} stroke="#EF4444" strokeWidth={2} strokeDasharray="3 2" opacity={0.8} />
            {/* X on vessel */}
            <line x1={gcx - R_MUSCLE + 6} y1={CY - 4} x2={gcx - R_MUSCLE + 14} y2={CY + 4} stroke="#EF4444" strokeWidth={1.5} />
            <line x1={gcx - R_MUSCLE + 14} y1={CY - 4} x2={gcx - R_MUSCLE + 6} y2={CY + 4} stroke="#EF4444" strokeWidth={1.5} />
            {/* Severe edema / compartment established */}
            <circle cx={gcx} cy={CY} r={R_SKIN + 8} fill="none" stroke={color} strokeWidth={2} opacity={0.25} strokeDasharray="5 3" />
            <circle cx={gcx} cy={CY} r={R_SKIN + 12} fill="none" stroke={color} strokeWidth={1} opacity={0.12} strokeDasharray="3 3" />
            <text x={gcx} y={CY + R_SKIN + 12} fill={color} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.7}>
              crush / vascular injury
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
      aria-label="Tscherne classification of soft tissue injury in closed fractures: interactive diagram showing 4 grades from C0 minimal to C3 severe crush injury"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="400" fill={DARK_BG} rx={8} />

      {/* Title */}
      <text x={300} y={32} fill="#E2E8F0" fontSize={16} fontWeight={600} fontFamily="system-ui" textAnchor="middle">
        Tscherne Classification
      </text>
      <text x={300} y={50} fill="#64748B" fontSize={11} fontFamily="system-ui" textAnchor="middle">
        Closed Fracture Soft Tissue Injury &mdash; Cross-Sectional View
      </text>

      {/* Severity gradient arrow */}
      <defs>
        <linearGradient id="ts-sev" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.safe} stopOpacity={0.6} />
          <stop offset="30%" stopColor={palette.info} stopOpacity={0.6} />
          <stop offset="60%" stopColor={palette.caution} stopOpacity={0.6} />
          <stop offset="100%" stopColor={palette.danger} stopOpacity={0.6} />
        </linearGradient>
        <marker id="ts-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M 0 0 L 8 3 L 0 6 Z" fill={palette.danger} opacity={0.6} />
        </marker>
      </defs>
      <line x1={60} y1={65} x2={545} y2={65} stroke="url(#ts-sev)" strokeWidth={2} markerEnd="url(#ts-arr)" />
      <text x={60} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">Minimal</text>
      <text x={515} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">Severe</text>

      {/* Legend - layer identification */}
      <g opacity={0.5}>
        <circle cx={160} cy={65} r={4} fill="none" stroke={BONE_OUTLINE} strokeWidth={1.5} />
        <text x={168} y={68} fill="#64748B" fontSize={7} fontFamily="system-ui">Skin</text>
        <circle cx={200} cy={65} r={4} fill="none" stroke={BONE_OUTLINE} strokeWidth={1} strokeDasharray="2 1" />
        <text x={208} y={68} fill="#64748B" fontSize={7} fontFamily="system-ui">Subcut.</text>
        <circle cx={255} cy={65} r={4} fill="none" stroke={BONE_OUTLINE} strokeWidth={1} />
        <text x={263} y={68} fill="#64748B" fontSize={7} fontFamily="system-ui">Muscle</text>
        <circle cx={305} cy={65} r={4} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.5} />
        <text x={313} y={68} fill="#64748B" fontSize={7} fontFamily="system-ui">Bone</text>
      </g>

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

            {/* Background highlight */}
            <rect
              x={grade.cx - 66}
              y={80}
              width={132}
              height={295}
              rx={6}
              fill={active ? `${grade.color}08` : 'transparent'}
              stroke={active ? grade.color : 'transparent'}
              strokeWidth={active ? 1.5 : 0}
              strokeOpacity={0.4}
            />

            {renderCrossSection(grade)}

            {/* Label */}
            {showLabels && (
              <g>
                <rect
                  x={grade.cx - 28}
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
                  x={grade.cx}
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

            {/* Active pulse */}
            {active && (
              <circle cx={grade.cx} cy={370} r={3} fill={grade.color}>
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* Bottom annotation */}
      <text x={300} y={392} fill="#475569" fontSize={9} fontFamily="system-ui" textAnchor="middle">
        C0: Simple fracture | C1: Contusion from fragment | C2: Compartment risk | C3: Crush + vascular injury
      </text>
    </svg>
  );
}
