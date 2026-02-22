import type { FC } from 'react';

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

const GRADES = [
  { id: 'one-part', label: '1-Part', color: CLINICAL_COLORS.safe, desc: 'Non-displaced' },
  { id: 'two-part', label: '2-Part', color: CLINICAL_COLORS.info, desc: '1 segment displaced' },
  { id: 'three-part', label: '3-Part', color: CLINICAL_COLORS.caution, desc: '2 segments displaced' },
  { id: 'four-part', label: '4-Part', color: CLINICAL_COLORS.danger, desc: 'All displaced' },
] as const;

/**
 * Neer Classification of Proximal Humerus Fractures
 *
 * AP view of proximal humerus with 4 key segments:
 * 1. Articular segment (humeral head)
 * 2. Greater tuberosity
 * 3. Lesser tuberosity
 * 4. Shaft
 *
 * 4 diagrams side-by-side showing progressive displacement.
 */
const NeerSVG: FC<SVGDiagramProps> = ({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}) => {
  const boneOutline = colorScheme === 'grayscale' ? '#9CA3AF' : '#94A3B8';
  const boneFill = colorScheme === 'grayscale' ? '#374151' : '#1E293B';
  const bgColor = '#0F172A';

  const getColor = (grade: typeof GRADES[number]) => {
    if (colorScheme === 'grayscale') return '#9CA3AF';
    return grade.color;
  };

  const getOpacity = (gradeId: string) => {
    if (!activeGrade) return 1;
    return activeGrade === gradeId ? 1 : 0.3;
  };

  const handleClick = (gradeId: string) => {
    if (interactive && onGradeSelect) {
      onGradeSelect(gradeId);
    }
  };

  // Each diagram column is ~140px wide in 600px viewBox
  const offsets = [10, 155, 300, 445];

  const renderHumerus = (
    ox: number,
    grade: typeof GRADES[number],
    displacementLevel: number,
  ) => {
    const color = getColor(grade);
    const isActive = activeGrade === grade.id;
    const strokeW = isActive ? 2.5 : 1.8;
    const fracStrokeW = isActive ? 2 : 1.4;

    // Displacement offsets per segment
    const headDx = displacementLevel >= 3 ? -8 : 0;
    const headDy = displacementLevel >= 3 ? -10 : 0;
    const gtDx = displacementLevel >= 2 ? 10 : 0;
    const gtDy = displacementLevel >= 2 ? -6 : 0;
    const ltDx = displacementLevel >= 1 ? -8 : 0;
    const ltDy = displacementLevel >= 1 ? 5 : 0;

    const cx = ox + 70;
    const baseY = 80;

    return (
      <g
        key={grade.id}
        style={{
          cursor: interactive ? 'pointer' : 'default',
          opacity: getOpacity(grade.id),
          transition: 'opacity 0.3s ease',
        }}
        onClick={() => handleClick(grade.id)}
        role="button"
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={(e) => {
          if (interactive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleClick(grade.id);
          }
        }}
        aria-label={`${grade.label}: ${grade.desc}`}
      >
        <title>{`${grade.label} fracture: ${grade.desc}`}</title>

        {/* Active highlight background */}
        {isActive && (
          <rect
            x={ox}
            y={45}
            width={140}
            height={315}
            rx={12}
            fill={color}
            fillOpacity={0.07}
            stroke={color}
            strokeWidth={1.5}
            strokeOpacity={0.25}
          />
        )}

        {/* === Humeral Head (Articular Segment) === */}
        <g transform={`translate(${headDx}, ${headDy})`}>
          <ellipse
            cx={cx}
            cy={baseY + 48}
            rx={28}
            ry={32}
            fill={boneFill}
            stroke={boneOutline}
            strokeWidth={strokeW}
          />
          {/* Articular cartilage arc */}
          <path
            d={`M ${cx - 20} ${baseY + 24} Q ${cx} ${baseY + 10}, ${cx + 20} ${baseY + 24}`}
            fill="none"
            stroke={boneOutline}
            strokeWidth={1}
            strokeDasharray="3,2"
            opacity={0.4}
          />
        </g>

        {/* === Greater Tuberosity (lateral) === */}
        <g transform={`translate(${gtDx}, ${gtDy})`}>
          <path
            d={`M ${cx + 18} ${baseY + 28}
                C ${cx + 32} ${baseY + 18}, ${cx + 38} ${baseY + 35}, ${cx + 36} ${baseY + 55}
                C ${cx + 34} ${baseY + 70}, ${cx + 26} ${baseY + 80}, ${cx + 18} ${baseY + 78}
                L ${cx + 16} ${baseY + 55}
                Z`}
            fill={boneFill}
            stroke={boneOutline}
            strokeWidth={strokeW}
          />
        </g>

        {/* === Lesser Tuberosity (medial) === */}
        <g transform={`translate(${ltDx}, ${ltDy})`}>
          <path
            d={`M ${cx - 18} ${baseY + 30}
                C ${cx - 32} ${baseY + 22}, ${cx - 36} ${baseY + 40}, ${cx - 34} ${baseY + 58}
                C ${cx - 32} ${baseY + 72}, ${cx - 24} ${baseY + 80}, ${cx - 18} ${baseY + 76}
                L ${cx - 16} ${baseY + 55}
                Z`}
            fill={boneFill}
            stroke={boneOutline}
            strokeWidth={strokeW}
          />
        </g>

        {/* === Shaft === */}
        <path
          d={`M ${cx - 16} ${baseY + 82}
              L ${cx - 14} ${baseY + 210}
              Q ${cx} ${baseY + 218}, ${cx + 14} ${baseY + 210}
              L ${cx + 16} ${baseY + 82}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={strokeW}
        />

        {/* === Fracture Lines === */}
        {/* Anatomical neck line (head vs tuberosities) */}
        <path
          d={`M ${cx + 16 + gtDx} ${baseY + 28 + gtDy}
              Q ${cx + headDx} ${baseY + 16 + headDy}, ${cx - 16 + ltDx} ${baseY + 30 + ltDy}`}
          fill="none"
          stroke={color}
          strokeWidth={fracStrokeW}
          strokeDasharray={displacementLevel === 0 ? '4,3' : 'none'}
          opacity={displacementLevel === 0 ? 0.5 : 0.85}
        />

        {/* Surgical neck line (tuberosities vs shaft) */}
        <path
          d={`M ${cx - 18} ${baseY + 80}
              Q ${cx} ${baseY + 90}, ${cx + 18} ${baseY + 80}`}
          fill="none"
          stroke={color}
          strokeWidth={fracStrokeW}
          strokeDasharray={displacementLevel === 0 ? '4,3' : 'none'}
          opacity={displacementLevel === 0 ? 0.5 : 0.85}
        />

        {/* Bicipital groove line (GT vs LT separation) */}
        {displacementLevel >= 2 && (
          <path
            d={`M ${cx + headDx} ${baseY + 16 + headDy}
                L ${cx} ${baseY + 86}`}
            fill="none"
            stroke={color}
            strokeWidth={fracStrokeW}
            opacity={0.65}
          />
        )}

        {/* AVN risk indicator for 4-part */}
        {displacementLevel === 3 && (
          <g>
            <circle
              cx={cx + headDx}
              cy={baseY + 48 + headDy}
              r={9}
              fill="none"
              stroke={CLINICAL_COLORS.danger}
              strokeWidth={1.5}
              strokeDasharray="2,2"
              opacity={0.85}
            />
            <text
              x={cx + headDx}
              y={baseY + 52 + headDy}
              textAnchor="middle"
              fill={CLINICAL_COLORS.danger}
              fontSize={7}
              fontWeight={700}
            >
              AVN
            </text>
          </g>
        )}

        {/* Labels */}
        {showLabels && (
          <g>
            <text
              x={cx}
              y={62}
              textAnchor="middle"
              fill={isActive ? color : '#CBD5E1'}
              fontSize={13}
              fontWeight={isActive ? 700 : 600}
            >
              {grade.label}
            </text>
            <text
              x={cx}
              y={baseY + 240}
              textAnchor="middle"
              fill={isActive ? color : '#64748B'}
              fontSize={9}
            >
              {grade.desc}
            </text>
          </g>
        )}
      </g>
    );
  };

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Neer Classification of Proximal Humerus Fractures: 4 diagrams showing 1-part through 4-part fracture patterns"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowNeer"
          markerWidth={8}
          markerHeight={6}
          refX={8}
          refY={3}
          orient="auto"
        >
          <path d="M0,0 L8,3 L0,6 Z" fill={CLINICAL_COLORS.danger} />
        </marker>
      </defs>

      {/* Background */}
      <rect width={600} height={400} fill={bgColor} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={28}
          textAnchor="middle"
          fill="#E2E8F0"
          fontSize={14}
          fontWeight={700}
          letterSpacing={0.5}
        >
          Neer Classification &mdash; Proximal Humerus Fractures
        </text>
      )}

      {/* Segment legend */}
      {showLabels && (
        <text x={300} y={394} textAnchor="middle" fill="#475569" fontSize={8}>
          Segments: Head | Greater Tuberosity | Lesser Tuberosity | Shaft
        </text>
      )}

      {/* Render 4 side-by-side diagrams */}
      {GRADES.map((grade, i) => renderHumerus(offsets[i], grade, i))}
    </svg>
  );
};

export default NeerSVG;
