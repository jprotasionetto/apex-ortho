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

export default function TilePelvicSVG({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const palette = colorScheme === 'clinical' ? CLINICAL_COLORS : GRAYSCALE;

  const grades: GradeConfig[] = [
    { id: 'type-a', label: 'Type A - Stable', shortLabel: 'A', subtitle: 'Stable', color: palette.safe, cx: 110 },
    { id: 'type-b', label: 'Type B - Rotationally Unstable', shortLabel: 'B', subtitle: 'Rot. Unstable', color: palette.caution, cx: 300 },
    { id: 'type-c', label: 'Type C - Completely Unstable', shortLabel: 'C', subtitle: 'Vert. Unstable', color: palette.danger, cx: 490 },
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

  // Pelvis drawing centered at (cx, cy), scaled
  const renderPelvis = (cx: number, cy: number, grade: GradeConfig) => {
    const s = 0.85; // scale factor
    const active = isActive(grade.id);

    // Pelvis AP view: butterfly shape
    // Right iliac wing
    const rightWing = `M ${cx + 5 * s} ${cy - 45 * s}
      C ${cx + 25 * s} ${cy - 65 * s}, ${cx + 55 * s} ${cy - 70 * s}, ${cx + 72 * s} ${cy - 55 * s}
      C ${cx + 82 * s} ${cy - 42 * s}, ${cx + 78 * s} ${cy - 20 * s}, ${cx + 65 * s} ${cy - 5 * s}
      C ${cx + 55 * s} ${cy + 5 * s}, ${cx + 45 * s} ${cy + 12 * s}, ${cx + 35 * s} ${cy + 15 * s}`;

    // Left iliac wing
    const leftWing = `M ${cx - 5 * s} ${cy - 45 * s}
      C ${cx - 25 * s} ${cy - 65 * s}, ${cx - 55 * s} ${cy - 70 * s}, ${cx - 72 * s} ${cy - 55 * s}
      C ${cx - 82 * s} ${cy - 42 * s}, ${cx - 78 * s} ${cy - 20 * s}, ${cx - 65 * s} ${cy - 5 * s}
      C ${cx - 55 * s} ${cy + 5 * s}, ${cx - 45 * s} ${cy + 12 * s}, ${cx - 35 * s} ${cy + 15 * s}`;

    // Obturator foramina (right)
    const rightForamen = `M ${cx + 20 * s} ${cy + 15 * s}
      C ${cx + 35 * s} ${cy + 10 * s}, ${cx + 50 * s} ${cy + 20 * s}, ${cx + 48 * s} ${cy + 40 * s}
      C ${cx + 45 * s} ${cy + 55 * s}, ${cx + 30 * s} ${cy + 60 * s}, ${cx + 18 * s} ${cy + 55 * s}
      C ${cx + 8 * s} ${cy + 48 * s}, ${cx + 5 * s} ${cy + 30 * s}, ${cx + 20 * s} ${cy + 15 * s}`;

    // Obturator foramina (left)
    const leftForamen = `M ${cx - 20 * s} ${cy + 15 * s}
      C ${cx - 35 * s} ${cy + 10 * s}, ${cx - 50 * s} ${cy + 20 * s}, ${cx - 48 * s} ${cy + 40 * s}
      C ${cx - 45 * s} ${cy + 55 * s}, ${cx - 30 * s} ${cy + 60 * s}, ${cx - 18 * s} ${cy + 55 * s}
      C ${cx - 8 * s} ${cy + 48 * s}, ${cx - 5 * s} ${cy + 30 * s}, ${cx - 20 * s} ${cy + 15 * s}`;

    // Pubic symphysis
    const symphysis = `M ${cx - 6 * s} ${cy + 55 * s}
      L ${cx + 6 * s} ${cy + 55 * s}`;

    // Inferior pubic rami
    const rightRamus = `M ${cx + 18 * s} ${cy + 55 * s}
      C ${cx + 25 * s} ${cy + 65 * s}, ${cx + 35 * s} ${cy + 70 * s}, ${cx + 48 * s} ${cy + 60 * s}`;

    const leftRamus = `M ${cx - 18 * s} ${cy + 55 * s}
      C ${cx - 25 * s} ${cy + 65 * s}, ${cx - 35 * s} ${cy + 70 * s}, ${cx - 48 * s} ${cy + 60 * s}`;

    // Superior pubic rami
    const rightSupRamus = `M ${cx + 6 * s} ${cy + 53 * s}
      C ${cx + 15 * s} ${cy + 40 * s}, ${cx + 28 * s} ${cy + 25 * s}, ${cx + 35 * s} ${cy + 15 * s}`;

    const leftSupRamus = `M ${cx - 6 * s} ${cy + 53 * s}
      C ${cx - 15 * s} ${cy + 40 * s}, ${cx - 28 * s} ${cy + 25 * s}, ${cx - 35 * s} ${cy + 15 * s}`;

    // Sacrum
    const sacrum = `M ${cx - 12 * s} ${cy - 45 * s}
      L ${cx + 12 * s} ${cy - 45 * s}
      L ${cx + 10 * s} ${cy - 15 * s}
      C ${cx + 8 * s} ${cy - 5 * s}, ${cx - 8 * s} ${cy - 5 * s}, ${cx - 10 * s} ${cy - 15 * s}
      Z`;

    // SI joints
    const rightSI = `M ${cx + 12 * s} ${cy - 45 * s} L ${cx + 14 * s} ${cy - 15 * s}`;
    const leftSI = `M ${cx - 12 * s} ${cy - 45 * s} L ${cx - 14 * s} ${cy - 15 * s}`;

    return (
      <g>
        {/* Right iliac wing */}
        <path d={rightWing} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.8} fillOpacity={0.9} />
        {/* Left iliac wing */}
        <path d={leftWing} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.8} fillOpacity={0.9} />

        {/* Sacrum */}
        <path d={sacrum} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={1.5} />

        {/* SI joints */}
        <path d={rightSI} fill="none" stroke={BONE_OUTLINE} strokeWidth={2.5} strokeLinecap="round" opacity={0.7} />
        <path d={leftSI} fill="none" stroke={BONE_OUTLINE} strokeWidth={2.5} strokeLinecap="round" opacity={0.7} />

        {/* Superior pubic rami */}
        <path d={rightSupRamus} fill="none" stroke={BONE_OUTLINE} strokeWidth={1.8} />
        <path d={leftSupRamus} fill="none" stroke={BONE_OUTLINE} strokeWidth={1.8} />

        {/* Obturator foramina */}
        <path d={rightForamen} fill={DARK_BG} stroke={BONE_OUTLINE} strokeWidth={1.2} opacity={0.6} />
        <path d={leftForamen} fill={DARK_BG} stroke={BONE_OUTLINE} strokeWidth={1.2} opacity={0.6} />

        {/* Inferior pubic rami */}
        <path d={rightRamus} fill="none" stroke={BONE_OUTLINE} strokeWidth={1.5} />
        <path d={leftRamus} fill="none" stroke={BONE_OUTLINE} strokeWidth={1.5} />

        {/* Pubic symphysis */}
        <path d={symphysis} fill="none" stroke={BONE_OUTLINE} strokeWidth={3} strokeLinecap="round" />

        {/* Grade-specific injury patterns */}
        {renderInjury(cx, cy, s, grade)}

        {/* Joint labels on active */}
        {active && (
          <g opacity={0.4}>
            <text x={cx} y={cy + 62 * s} fill="#94A3B8" fontSize={6} fontFamily="system-ui" textAnchor="middle">symphysis</text>
            <text x={cx + 18 * s} y={cy - 30 * s} fill="#94A3B8" fontSize={6} fontFamily="system-ui" textAnchor="middle">SI joint</text>
            <text x={cx} y={cy - 52 * s} fill="#94A3B8" fontSize={6} fontFamily="system-ui" textAnchor="middle">sacrum</text>
          </g>
        )}
      </g>
    );
  };

  const renderInjury = (cx: number, cy: number, s: number, grade: GradeConfig) => {
    const { color } = grade;

    switch (grade.id) {
      case 'type-a':
        return (
          <g>
            {/* Avulsion fracture on right iliac wing - does NOT disrupt ring */}
            <line
              x1={cx + 60 * s}
              y1={cy - 50 * s}
              x2={cx + 72 * s}
              y2={cy - 40 * s}
              stroke={color}
              strokeWidth={2.5}
              strokeLinecap="round"
            />
            {/* Small avulsed fragment */}
            <circle cx={cx + 75 * s} cy={cy - 52 * s} r={4} fill={color} opacity={0.3} stroke={color} strokeWidth={1} />
            {/* Arrow showing avulsion direction */}
            <line x1={cx + 68 * s} y1={cy - 48 * s} x2={cx + 74 * s} y2={cy - 54 * s} stroke={color} strokeWidth={1.5} markerEnd="url(#tile-arr-a)" />
            {/* Intact ring indicator */}
            <text x={cx} y={cy + 80 * s} fill={color} fontSize={8} fontFamily="system-ui" textAnchor="middle" opacity={0.7}>Ring intact</text>
          </g>
        );

      case 'type-b':
        return (
          <g>
            {/* Open-book injury: symphysis disruption */}
            {/* Symphysis diastasis */}
            <line x1={cx - 10 * s} y1={cy + 53 * s} x2={cx + 10 * s} y2={cy + 53 * s} stroke={color} strokeWidth={3} strokeLinecap="round" strokeDasharray="4 3" />
            {/* Gap at symphysis */}
            <rect x={cx - 4 * s} y={cy + 48 * s} width={8 * s} height={12 * s} fill={DARK_BG} stroke={color} strokeWidth={1.5} rx={1} />
            {/* Rotation arrows - external rotation of hemipelves */}
            <path
              d={`M ${cx + 30 * s} ${cy + 45 * s} C ${cx + 40 * s} ${cy + 35 * s}, ${cx + 45 * s} ${cy + 25 * s}, ${cx + 40 * s} ${cy + 15 * s}`}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              markerEnd="url(#tile-arr-b)"
              opacity={0.7}
            />
            <path
              d={`M ${cx - 30 * s} ${cy + 45 * s} C ${cx - 40 * s} ${cy + 35 * s}, ${cx - 45 * s} ${cy + 25 * s}, ${cx - 40 * s} ${cy + 15 * s}`}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              markerEnd="url(#tile-arr-b)"
              opacity={0.7}
            />
            {/* SI joint - anterior ligament torn, posterior intact */}
            <line x1={cx + 13 * s} y1={cy - 38 * s} x2={cx + 15 * s} y2={cy - 20 * s} stroke={color} strokeWidth={2} opacity={0.6} strokeDasharray="3 2" />
            {/* Posterior intact indicator */}
            <circle cx={cx + 13 * s} cy={cy - 42 * s} r={3} fill="none" stroke={palette.safe} strokeWidth={1.5} opacity={0.5} />
            <text x={cx} y={cy + 80 * s} fill={color} fontSize={8} fontFamily="system-ui" textAnchor="middle" opacity={0.7}>Partial ring disruption</text>
          </g>
        );

      case 'type-c':
        return (
          <g>
            {/* Complete disruption: symphysis + SI joint */}
            {/* Symphysis complete disruption */}
            <rect x={cx - 6 * s} y={cy + 46 * s} width={12 * s} height={16 * s} fill={DARK_BG} stroke={color} strokeWidth={2} rx={1} />
            <line x1={cx - 8 * s} y1={cy + 54 * s} x2={cx + 8 * s} y2={cy + 54 * s} stroke={color} strokeWidth={2} strokeDasharray="4 3" />
            {/* SI joint complete disruption */}
            <line x1={cx + 12 * s} y1={cy - 45 * s} x2={cx + 16 * s} y2={cy - 12 * s} stroke={color} strokeWidth={3} strokeDasharray="4 3" opacity={0.8} />
            {/* Fracture through sacrum */}
            <line x1={cx + 8 * s} y1={cy - 45 * s} x2={cx + 5 * s} y2={cy - 10 * s} stroke={color} strokeWidth={2} opacity={0.6} />
            {/* Vertical shear - right hemipelvis displaced superiorly */}
            <path
              d={`M ${cx + 50 * s} ${cy - 60 * s} L ${cx + 50 * s} ${cy - 75 * s}`}
              fill="none"
              stroke={color}
              strokeWidth={2}
              markerEnd="url(#tile-arr-c)"
            />
            <path
              d={`M ${cx + 55 * s} ${cy - 60 * s} L ${cx + 55 * s} ${cy - 75 * s}`}
              fill="none"
              stroke={color}
              strokeWidth={2}
              markerEnd="url(#tile-arr-c)"
            />
            {/* Ramus fractures */}
            <line x1={cx + 12 * s} y1={cy + 42 * s} x2={cx + 22 * s} y2={cy + 36 * s} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={cx + 30 * s} y1={cy + 62 * s} x2={cx + 38 * s} y2={cy + 56 * s} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
            {/* Hemipelvis shift indicator */}
            <rect
              x={cx + 10 * s}
              y={cy - 72 * s}
              width={65 * s}
              height={135 * s}
              fill={color}
              rx={4}
              stroke={color}
              strokeWidth={0.5}
              strokeDasharray="6 3"
              opacity={0.15}
            />
            <text x={cx} y={cy + 80 * s} fill={color} fontSize={8} fontFamily="system-ui" textAnchor="middle" opacity={0.7}>Complete disruption</text>
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
      aria-label="Tile classification of pelvic ring fractures: interactive diagram showing Type A stable, Type B rotationally unstable, and Type C completely unstable pelvic injuries"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="400" fill={DARK_BG} rx={8} />

      {/* Title */}
      <text x={300} y={32} fill="#E2E8F0" fontSize={16} fontWeight={600} fontFamily="system-ui" textAnchor="middle">
        Tile Classification
      </text>
      <text x={300} y={50} fill="#64748B" fontSize={11} fontFamily="system-ui" textAnchor="middle">
        Pelvic Ring Fractures &mdash; Stability Assessment (AP View)
      </text>

      {/* Arrow markers */}
      <defs>
        <marker id="tile-arr-a" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M 0 0 L 6 2.5 L 0 5 Z" fill={palette.safe} />
        </marker>
        <marker id="tile-arr-b" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M 0 0 L 6 2.5 L 0 5 Z" fill={palette.caution} />
        </marker>
        <marker id="tile-arr-c" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M 0 0 L 6 2.5 L 0 5 Z" fill={palette.danger} />
        </marker>
      </defs>

      {/* Severity line */}
      <defs>
        <linearGradient id="tile-sev" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.safe} stopOpacity={0.6} />
          <stop offset="50%" stopColor={palette.caution} stopOpacity={0.6} />
          <stop offset="100%" stopColor={palette.danger} stopOpacity={0.6} />
        </linearGradient>
        <marker id="tile-sev-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M 0 0 L 8 3 L 0 6 Z" fill={palette.danger} opacity={0.6} />
        </marker>
      </defs>
      <line x1={60} y1={65} x2={545} y2={65} stroke="url(#tile-sev)" strokeWidth={2} markerEnd="url(#tile-sev-arr)" />
      <text x={60} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">Stable</text>
      <text x={510} y={75} fill="#64748B" fontSize={8} fontFamily="system-ui">Unstable</text>

      {/* Stability indicators */}
      <g>
        <text x={110} y={88} fill={palette.safe} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>Rot: Stable</text>
        <text x={110} y={97} fill={palette.safe} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>Vert: Stable</text>

        <text x={300} y={88} fill={palette.caution} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>Rot: Unstable</text>
        <text x={300} y={97} fill={palette.caution} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>Vert: Stable</text>

        <text x={490} y={88} fill={palette.danger} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>Rot: Unstable</text>
        <text x={490} y={97} fill={palette.danger} fontSize={7} fontFamily="system-ui" textAnchor="middle" opacity={0.6}>Vert: Unstable</text>
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

            {/* Panel highlight */}
            <rect
              x={grade.cx - 85}
              y={100}
              width={170}
              height={275}
              rx={6}
              fill={active ? `${grade.color}08` : 'transparent'}
              stroke={active ? grade.color : 'transparent'}
              strokeWidth={active ? 1.5 : 0}
              strokeOpacity={0.4}
            />

            {renderPelvis(grade.cx, 215, grade)}

            {/* Label */}
            {showLabels && (
              <g>
                <rect
                  x={grade.cx - 40}
                  y={345}
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
                  y={360}
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
              <circle cx={grade.cx} cy={376} r={3} fill={grade.color}>
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* Bottom info */}
      <text x={300} y={392} fill="#475569" fontSize={9} fontFamily="system-ui" textAnchor="middle">
        A: Avulsion/no ring disruption | B: Open-book/LC (partial) | C: Vertical shear (complete)
      </text>
    </svg>
  );
}
