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
  { id: 'a1', label: 'A1', color: CLINICAL_COLORS.safe, desc: 'Minor central erosion' },
  { id: 'a2', label: 'A2', color: CLINICAL_COLORS.info, desc: 'Major central erosion' },
  { id: 'b1', label: 'B1', color: CLINICAL_COLORS.info, desc: 'Post. sublux, no bone loss' },
  { id: 'b2', label: 'B2', color: CLINICAL_COLORS.caution, desc: 'Biconcave glenoid' },
  { id: 'b3', label: 'B3', color: CLINICAL_COLORS.danger, desc: 'Monoconcave &gt;15\u00B0 retro' },
  { id: 'c', label: 'C', color: CLINICAL_COLORS.caution, desc: 'Dysplasia &gt;25\u00B0 retro' },
  { id: 'd', label: 'D', color: CLINICAL_COLORS.info, desc: 'Anterior subluxation' },
] as const;

/**
 * Walch Classification of Glenoid Morphology in Glenohumeral OA
 *
 * Axial CT view showing glenoid vault, humeral head position,
 * and erosion patterns. 7 diagrams in a grid layout.
 */
const WalchSVG: FC<SVGDiagramProps> = ({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}) => {
  const boneOutline = colorScheme === 'grayscale' ? '#9CA3AF' : '#94A3B8';
  const boneFill = colorScheme === 'grayscale' ? '#374151' : '#1E293B';
  const bgColor = '#0F172A';

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

  // Grid layout: row 1 = 4 items, row 2 = 3 items (centered)
  const getCellOrigin = (index: number): [number, number] => {
    if (index < 4) {
      return [5 + index * 148, 36];
    }
    const col = index - 4;
    return [79 + col * 148, 218];
  };

  const renderGlenoidFacePath = (
    gx: number,
    gy: number,
    centralErosion: number,
    posteriorErosion: number,
  ): string => {
    const top = `M ${gx - 4} ${gy - 32} L ${gx + 8} ${gy - 30}`;
    const bottom = `L ${gx - 4} ${gy + 32} Z`;

    if (posteriorErosion >= 2) {
      // Biconcave or monoconcave: posterior bulge
      return `${top} Q ${gx + 12} ${gy - 15}, ${gx + 6} ${gy} Q ${gx + 12} ${gy + 15}, ${gx + 8} ${gy + 30} ${bottom}`;
    }
    if (centralErosion >= 2) {
      // Major central erosion: deep concavity
      return `${top} Q ${gx + 18} ${gy}, ${gx + 8} ${gy + 30} ${bottom}`;
    }
    if (centralErosion >= 1) {
      // Minor central erosion
      return `${top} Q ${gx + 13} ${gy}, ${gx + 8} ${gy + 30} ${bottom}`;
    }
    // Normal
    return `${top} Q ${gx + 10} ${gy}, ${gx + 8} ${gy + 30} ${bottom}`;
  };

  const renderGlenoid = (
    index: number,
    grade: typeof GRADES[number],
    config: {
      headDx: number;
      headDy: number;
      centralErosion: number;
      posteriorErosion: number;
      retroversion: number;
      dysplasia: boolean;
      anterior: boolean;
    },
  ) => {
    const [ox, oy] = getCellOrigin(index);
    const color = getColor(grade);
    const isActive = activeGrade === grade.id;
    const strokeW = isActive ? 2 : 1.5;

    const gx = ox + 48;
    const gy = oy + 88;

    const hx = ox + 106 + config.headDx;
    const hy = gy + config.headDy;
    const headR = 36;

    const tiltAngle = config.retroversion;

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
        <title>{`Walch ${grade.label}: ${grade.desc}`}</title>

        {/* Active highlight */}
        {isActive && (
          <rect
            x={ox}
            y={oy}
            width={143}
            height={176}
            rx={10}
            fill={color}
            fillOpacity={0.07}
            stroke={color}
            strokeWidth={1.5}
            strokeOpacity={0.25}
          />
        )}

        {/* === Scapula / Glenoid Vault === */}
        <path
          d={`M ${gx - 30} ${gy - 45}
              L ${gx - 38} ${gy}
              L ${gx - 30} ${gy + 45}
              L ${gx - 22} ${gy + 40}
              L ${gx - 28} ${gy}
              L ${gx - 22} ${gy - 40}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={1.2}
          opacity={0.6}
        />

        {/* Glenoid face with erosion pattern */}
        <g transform={`rotate(${tiltAngle}, ${gx}, ${gy})`}>
          <path
            d={renderGlenoidFacePath(gx, gy, config.centralErosion, config.posteriorErosion)}
            fill={boneFill}
            stroke={boneOutline}
            strokeWidth={strokeW}
          />

          {/* Central erosion contour lines */}
          {config.centralErosion >= 1 && (
            <path
              d={`M ${gx + 6} ${gy - 18} Q ${gx + (config.centralErosion >= 2 ? 16 : 11)} ${gy}, ${gx + 6} ${gy + 18}`}
              fill="none"
              stroke={color}
              strokeWidth={1.2}
              strokeDasharray="3,2"
              opacity={0.7}
            />
          )}
          {config.centralErosion >= 2 && (
            <path
              d={`M ${gx + 7} ${gy - 12} Q ${gx + 20} ${gy}, ${gx + 7} ${gy + 12}`}
              fill="none"
              stroke={color}
              strokeWidth={1}
              strokeDasharray="2,2"
              opacity={0.5}
            />
          )}

          {/* Posterior erosion: biconcave neoglenoid */}
          {config.posteriorErosion === 2 && (
            <g>
              <path
                d={`M ${gx + 8} ${gy + 5} Q ${gx + 15} ${gy + 18}, ${gx + 8} ${gy + 28}`}
                fill="none"
                stroke={color}
                strokeWidth={1.5}
                strokeDasharray="3,2"
                opacity={0.8}
              />
              {showLabels && (
                <text x={gx + 18} y={gy + 22} fill={color} fontSize={5} opacity={0.7}>
                  neo
                </text>
              )}
            </g>
          )}

          {/* Monoconcave posterior erosion */}
          {config.posteriorErosion === 3 && (
            <path
              d={`M ${gx + 6} ${gy - 24} Q ${gx + 18} ${gy}, ${gx + 6} ${gy + 24}`}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              opacity={0.8}
            />
          )}
        </g>

        {/* === Humeral Head === */}
        <circle
          cx={hx}
          cy={hy}
          r={headR}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={strokeW}
          fillOpacity={0.7}
        />
        {/* Articular surface arc */}
        <path
          d={`M ${hx - headR + 8} ${hy - 20} Q ${hx - headR - 2} ${hy}, ${hx - headR + 8} ${hy + 20}`}
          fill="none"
          stroke={boneOutline}
          strokeWidth={1}
          opacity={0.4}
        />
        {/* Center dot */}
        <circle cx={hx} cy={hy} r={2} fill={boneOutline} opacity={0.4} />

        {/* Subluxation arrow */}
        {(config.headDx !== 0 || config.headDy !== 0) && (
          <line
            x1={ox + 106}
            y1={gy}
            x2={hx - 2}
            y2={hy}
            stroke={color}
            strokeWidth={1.3}
            markerEnd="url(#arrowWalch)"
            opacity={0.6}
          />
        )}

        {/* Retroversion angle indicator */}
        {config.retroversion !== 0 && showLabels && (
          <text
            x={gx - 6}
            y={gy + 52}
            textAnchor="middle"
            fill={color}
            fontSize={7}
            opacity={0.7}
          >
            {config.retroversion > 0 ? `${config.retroversion}\u00B0 retro` : `${Math.abs(config.retroversion)}\u00B0 ante`}
          </text>
        )}

        {/* Labels */}
        {showLabels && (
          <g>
            <text
              x={ox + 72}
              y={oy + 16}
              textAnchor="middle"
              fill={isActive ? color : '#CBD5E1'}
              fontSize={12}
              fontWeight={isActive ? 700 : 600}
            >
              {grade.label}
            </text>
            <text
              x={ox + 72}
              y={oy + 168}
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
    { headDx: 0, headDy: 0, centralErosion: 1, posteriorErosion: 0, retroversion: 0, dysplasia: false, anterior: false },
    { headDx: 0, headDy: 0, centralErosion: 2, posteriorErosion: 0, retroversion: 0, dysplasia: false, anterior: false },
    { headDx: -6, headDy: 8, centralErosion: 0, posteriorErosion: 1, retroversion: 5, dysplasia: false, anterior: false },
    { headDx: -8, headDy: 10, centralErosion: 0, posteriorErosion: 2, retroversion: 10, dysplasia: false, anterior: false },
    { headDx: -10, headDy: 12, centralErosion: 0, posteriorErosion: 3, retroversion: 18, dysplasia: false, anterior: false },
    { headDx: -4, headDy: 4, centralErosion: 0, posteriorErosion: 0, retroversion: 28, dysplasia: true, anterior: false },
    { headDx: 8, headDy: -8, centralErosion: 0, posteriorErosion: 0, retroversion: -8, dysplasia: false, anterior: true },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Walch Classification of Glenoid Morphology: 7 diagrams showing types A1, A2, B1, B2, B3, C, and D glenoid patterns"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowWalch"
          markerWidth={7}
          markerHeight={5}
          refX={7}
          refY={2.5}
          orient="auto"
        >
          <path d="M0,0 L7,2.5 L0,5 Z" fill={CLINICAL_COLORS.info} />
        </marker>
      </defs>

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
          Walch Classification &mdash; Glenoid Morphology (Axial CT)
        </text>
      )}

      {/* Orientation labels */}
      {showLabels && (
        <text x={10} y={395} fill="#475569" fontSize={7} opacity={0.5}>
          A = Anterior | P = Posterior | Axial CT view
        </text>
      )}

      {/* Render 7 diagrams */}
      {GRADES.map((grade, i) => renderGlenoid(i, grade, configs[i]))}
    </svg>
  );
};

export default WalchSVG;
