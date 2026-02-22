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
  { id: 'stage-0', label: 'Stage 0', color: CLINICAL_COLORS.safe, desc: 'Normal muscle, no fat' },
  { id: 'stage-1', label: 'Stage 1', color: CLINICAL_COLORS.safe, desc: 'Some fatty streaks' },
  { id: 'stage-2', label: 'Stage 2', color: CLINICAL_COLORS.info, desc: 'Less fat than muscle' },
  { id: 'stage-3', label: 'Stage 3', color: CLINICAL_COLORS.caution, desc: 'Equal fat and muscle' },
  { id: 'stage-4', label: 'Stage 4', color: CLINICAL_COLORS.danger, desc: 'More fat than muscle' },
] as const;

/**
 * Goutallier Classification of Fatty Infiltration of the Rotator Cuff
 *
 * Axial CT/MRI cuts of the supraspinatus fossa with progressive
 * fatty infiltration. 5 diagrams in a row.
 */
const GoutallierSVG: FC<SVGDiagramProps> = ({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}) => {
  const boneOutline = colorScheme === 'grayscale' ? '#9CA3AF' : '#94A3B8';
  const boneFill = colorScheme === 'grayscale' ? '#374151' : '#1E293B';
  const bgColor = '#0F172A';
  const muscleFill = colorScheme === 'grayscale' ? '#6B7280' : '#7C3AED';
  const fatFill = colorScheme === 'grayscale' ? '#D1D5DB' : '#FDE68A';

  const getColor = (grade: typeof GRADES[number]) =>
    colorScheme === 'grayscale' ? '#9CA3AF' : grade.color;

  const getOpacity = (gradeId: string) => {
    if (!activeGrade) return 1;
    return activeGrade === gradeId ? 1 : 0.3;
  };

  const handleClick = (gradeId: string) => {
    if (interactive && onGradeSelect) {
      onGradeSelect(gradeId);
    }
  };

  // 5 columns across 600px viewBox
  const getColumnX = (index: number): number => 8 + index * 118;

  /**
   * Renders one supraspinatus fossa cross-section.
   * fatRatio: 0.0 (no fat) to 1.0 (all fat)
   * streaks: number of fatty streak lines within muscle
   */
  const renderFossa = (
    index: number,
    grade: typeof GRADES[number],
    config: {
      fatRatio: number;
      streaks: number;
    },
  ) => {
    const ox = getColumnX(index);
    const oy = 55;
    const color = getColor(grade);
    const isActive = activeGrade === grade.id;
    const strokeW = isActive ? 2 : 1.5;

    // Fossa dimensions
    const fossaW = 100;
    const fossaH = 240;
    const cx = ox + fossaW / 2;
    const cy = oy + fossaH / 2;

    // The supraspinatus fossa is like a crescent shape
    // Outer bone wall (scapular spine above, scapular body below)
    // Muscle belly fills the concavity

    // Fat infiltration: we show it as lighter fill replacing muscle from the periphery inward
    const muscleArea = 1 - config.fatRatio;

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
        <title>{`Goutallier ${grade.label}: ${grade.desc}`}</title>

        {/* Active highlight */}
        {isActive && (
          <rect
            x={ox - 3}
            y={oy - 15}
            width={fossaW + 6}
            height={fossaH + 65}
            rx={10}
            fill={color}
            fillOpacity={0.07}
            stroke={color}
            strokeWidth={1.5}
            strokeOpacity={0.25}
          />
        )}

        {/* === Scapular Spine (upper bone border) === */}
        <path
          d={`M ${ox + 8} ${oy + 20}
              Q ${cx} ${oy + 5}, ${ox + fossaW - 8} ${oy + 20}
              L ${ox + fossaW - 5} ${oy + 30}
              Q ${cx} ${oy + 18}, ${ox + 5} ${oy + 30}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={strokeW}
        />

        {/* === Scapular Body (lower bone border) === */}
        <path
          d={`M ${ox + 10} ${oy + fossaH - 30}
              Q ${cx} ${oy + fossaH - 15}, ${ox + fossaW - 10} ${oy + fossaH - 30}
              L ${ox + fossaW - 8} ${oy + fossaH - 20}
              Q ${cx} ${oy + fossaH - 5}, ${ox + 8} ${oy + fossaH - 20}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={strokeW}
        />

        {/* === Fossa cavity (background) === */}
        <path
          d={`M ${ox + 8} ${oy + 32}
              Q ${ox + 2} ${cy}, ${ox + 8} ${oy + fossaH - 32}
              Q ${cx} ${oy + fossaH - 22}, ${ox + fossaW - 8} ${oy + fossaH - 32}
              Q ${ox + fossaW - 2} ${cy}, ${ox + fossaW - 8} ${oy + 32}
              Q ${cx} ${oy + 22}, ${ox + 8} ${oy + 32}
              Z`}
          fill={bgColor}
          stroke="none"
        />

        {/* === Fat Layer (peripheral, replacing muscle) === */}
        {config.fatRatio > 0 && (
          <path
            d={`M ${ox + 8} ${oy + 32}
                Q ${ox + 2} ${cy}, ${ox + 8} ${oy + fossaH - 32}
                Q ${cx} ${oy + fossaH - 22}, ${ox + fossaW - 8} ${oy + fossaH - 32}
                Q ${ox + fossaW - 2} ${cy}, ${ox + fossaW - 8} ${oy + 32}
                Q ${cx} ${oy + 22}, ${ox + 8} ${oy + 32}
                Z`}
            fill={fatFill}
            fillOpacity={0.3 + config.fatRatio * 0.5}
            stroke="none"
          />
        )}

        {/* === Muscle Belly (shrinks as fat increases) === */}
        {muscleArea > 0 && (
          <path
            d={`M ${ox + 8 + (1 - muscleArea) * 20} ${oy + 32 + (1 - muscleArea) * 30}
                Q ${ox + 2 + (1 - muscleArea) * 22} ${cy}, ${ox + 8 + (1 - muscleArea) * 20} ${oy + fossaH - 32 - (1 - muscleArea) * 30}
                Q ${cx} ${oy + fossaH - 22 - (1 - muscleArea) * 25}, ${ox + fossaW - 8 - (1 - muscleArea) * 20} ${oy + fossaH - 32 - (1 - muscleArea) * 30}
                Q ${ox + fossaW - 2 - (1 - muscleArea) * 22} ${cy}, ${ox + fossaW - 8 - (1 - muscleArea) * 20} ${oy + 32 + (1 - muscleArea) * 30}
                Q ${cx} ${oy + 22 + (1 - muscleArea) * 25}, ${ox + 8 + (1 - muscleArea) * 20} ${oy + 32 + (1 - muscleArea) * 30}
                Z`}
            fill={muscleFill}
            fillOpacity={0.5 + muscleArea * 0.3}
            stroke={muscleFill}
            strokeWidth={0.8}
            strokeOpacity={0.4}
          />
        )}

        {/* === Fatty streaks within muscle === */}
        {config.streaks > 0 && muscleArea > 0 && (
          <g opacity={0.5}>
            {Array.from({ length: config.streaks }).map((_, si) => {
              const spreadY = (fossaH - 100) / (config.streaks + 1);
              const sy = oy + 55 + spreadY * (si + 1);
              const sw = 20 + ((si * 7 + 3) % 15);
              const sx = cx - sw / 2 + (si % 2 === 0 ? -5 : 5);
              return (
                <line
                  key={si}
                  x1={sx}
                  y1={sy}
                  x2={sx + sw}
                  y2={sy + (si % 2 === 0 ? 2 : -2)}
                  stroke={fatFill}
                  strokeWidth={2}
                  strokeLinecap="round"
                  opacity={0.6}
                />
              );
            })}
          </g>
        )}

        {/* === Fossa outline border === */}
        <path
          d={`M ${ox + 8} ${oy + 32}
              Q ${ox + 2} ${cy}, ${ox + 8} ${oy + fossaH - 32}
              Q ${cx} ${oy + fossaH - 22}, ${ox + fossaW - 8} ${oy + fossaH - 32}
              Q ${ox + fossaW - 2} ${cy}, ${ox + fossaW - 8} ${oy + 32}
              Q ${cx} ${oy + 22}, ${ox + 8} ${oy + 32}
              Z`}
          fill="none"
          stroke={boneOutline}
          strokeWidth={strokeW}
        />

        {/* === Percentage bar indicator === */}
        <g>
          <rect
            x={ox + 15}
            y={oy + fossaH + 8}
            width={fossaW - 30}
            height={8}
            rx={4}
            fill={boneFill}
            stroke={boneOutline}
            strokeWidth={0.8}
          />
          {/* Muscle portion */}
          {muscleArea > 0 && (
            <rect
              x={ox + 15}
              y={oy + fossaH + 8}
              width={(fossaW - 30) * muscleArea}
              height={8}
              rx={muscleArea === 1 ? 4 : 0}
              fill={muscleFill}
              fillOpacity={0.7}
            />
          )}
          {/* Fat portion */}
          {config.fatRatio > 0 && (
            <rect
              x={ox + 15 + (fossaW - 30) * muscleArea}
              y={oy + fossaH + 8}
              width={(fossaW - 30) * config.fatRatio}
              height={8}
              rx={config.fatRatio === 1 ? 4 : 0}
              fill={fatFill}
              fillOpacity={0.7}
            />
          )}
        </g>

        {/* Labels */}
        {showLabels && (
          <g>
            <text
              x={cx}
              y={oy - 2}
              textAnchor="middle"
              fill={isActive ? color : '#CBD5E1'}
              fontSize={12}
              fontWeight={isActive ? 700 : 600}
            >
              {grade.label}
            </text>
            <text
              x={cx}
              y={oy + fossaH + 32}
              textAnchor="middle"
              fill={isActive ? color : '#64748B'}
              fontSize={7.5}
            >
              {grade.desc}
            </text>
          </g>
        )}
      </g>
    );
  };

  const configs = [
    { fatRatio: 0, streaks: 0 },
    { fatRatio: 0.05, streaks: 3 },
    { fatRatio: 0.3, streaks: 5 },
    { fatRatio: 0.5, streaks: 0 },
    { fatRatio: 0.8, streaks: 0 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Goutallier Classification of Fatty Infiltration: 5 diagrams showing Stage 0 through Stage 4 progressive fatty infiltration of the supraspinatus"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={600} height={400} fill={bgColor} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={26}
          textAnchor="middle"
          fill="#E2E8F0"
          fontSize={14}
          fontWeight={700}
          letterSpacing={0.5}
        >
          Goutallier Classification &mdash; Fatty Infiltration
        </text>
      )}

      {/* Legend */}
      {showLabels && (
        <g>
          <rect x={180} y={386} width={10} height={10} rx={2} fill={muscleFill} fillOpacity={0.7} />
          <text x={194} y={395} fill="#64748B" fontSize={8}>Muscle</text>
          <rect x={240} y={386} width={10} height={10} rx={2} fill={fatFill} fillOpacity={0.7} />
          <text x={254} y={395} fill="#64748B" fontSize={8}>Fat</text>
          <text x={300} y={395} fill="#475569" fontSize={7} opacity={0.5}>
            | Axial CT/MRI - Supraspinatus Fossa
          </text>
        </g>
      )}

      {/* Render 5 diagrams in a row */}
      {GRADES.map((grade, i) => renderFossa(i, grade, configs[i]))}
    </svg>
  );
};

export default GoutallierSVG;
