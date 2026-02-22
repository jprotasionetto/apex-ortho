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
  { id: 'type-i', label: 'Type I', color: CLINICAL_COLORS.safe, desc: 'AC sprain' },
  { id: 'type-ii', label: 'Type II', color: CLINICAL_COLORS.safe, desc: 'AC torn, CC sprain' },
  { id: 'type-iii', label: 'Type III', color: CLINICAL_COLORS.info, desc: 'AC+CC torn, <100%' },
  { id: 'type-iv', label: 'Type IV', color: CLINICAL_COLORS.caution, desc: 'Posterior displacement' },
  { id: 'type-v', label: 'Type V', color: CLINICAL_COLORS.danger, desc: 'AC+CC torn, >100%' },
  { id: 'type-vi', label: 'Type VI', color: CLINICAL_COLORS.danger, desc: 'Inferior displacement' },
] as const;

/**
 * Rockwood Classification of Acromioclavicular Joint Injuries
 *
 * AP view showing clavicle, acromion, coracoid, AC ligaments, and CC ligaments.
 * 6 diagrams in a 3x2 grid showing progressive injury.
 */
const RockwoodSVG: FC<SVGDiagramProps> = ({
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

  // 3x2 grid: each cell ~190x185
  const getCellOrigin = (index: number): [number, number] => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    return [5 + col * 198, 38 + row * 188];
  };

  /**
   * Renders one AC joint diagram.
   * Config:
   *  - acTorn: AC ligaments torn
   *  - ccTorn: CC ligaments torn
   *  - clavElevation: clavicle vertical displacement (px)
   *  - clavPosterior: posterior displacement (shown as horizontal shift or arrow)
   *  - clavInferior: inferior displacement (below coracoid)
   */
  const renderACJoint = (
    index: number,
    grade: typeof GRADES[number],
    config: {
      acTorn: boolean;
      ccTorn: boolean;
      acSprain: boolean;
      ccSprain: boolean;
      clavElevation: number;
      clavPosterior: boolean;
      clavInferior: boolean;
    },
  ) => {
    const [ox, oy] = getCellOrigin(index);
    const color = getColor(grade);
    const isActive = activeGrade === grade.id;
    const strokeW = isActive ? 2 : 1.5;

    // Clavicle displacement
    const clavDy = config.clavInferior ? 30 : -config.clavElevation;
    const clavDx = config.clavPosterior ? 6 : 0;

    // Reference points
    const acromionTip = { x: ox + 100, y: oy + 72 };
    const clavEnd = { x: ox + 105 + clavDx, y: oy + 68 + clavDy };
    const coracoidBase = { x: ox + 82, y: oy + 100 };
    const coracoidTip = { x: ox + 72, y: oy + 130 };

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
        <title>{`${grade.label}: ${grade.desc}`}</title>

        {/* Active highlight */}
        {isActive && (
          <rect
            x={ox}
            y={oy}
            width={193}
            height={183}
            rx={10}
            fill={color}
            fillOpacity={0.07}
            stroke={color}
            strokeWidth={1.5}
            strokeOpacity={0.25}
          />
        )}

        {/* === Acromion === */}
        <path
          d={`M ${ox + 40} ${oy + 65}
              L ${ox + 55} ${oy + 60}
              L ${acromionTip.x} ${acromionTip.y - 8}
              L ${acromionTip.x + 3} ${acromionTip.y}
              L ${acromionTip.x - 2} ${acromionTip.y + 5}
              L ${ox + 55} ${oy + 72}
              L ${ox + 40} ${oy + 78}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={strokeW}
        />

        {/* === Clavicle (distal end) === */}
        <path
          d={`M ${ox + 190} ${oy + 58 + clavDy}
              L ${clavEnd.x} ${clavEnd.y - 6}
              L ${clavEnd.x - 3} ${clavEnd.y}
              L ${clavEnd.x} ${clavEnd.y + 6}
              L ${ox + 190} ${oy + 74 + clavDy}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={strokeW}
        />

        {/* === Coracoid Process === */}
        <path
          d={`M ${coracoidBase.x - 6} ${coracoidBase.y}
              Q ${coracoidBase.x - 14} ${coracoidBase.y + 20}, ${coracoidTip.x} ${coracoidTip.y}
              Q ${coracoidTip.x + 6} ${coracoidTip.y + 4}, ${coracoidTip.x + 10} ${coracoidTip.y}
              Q ${coracoidBase.x + 2} ${coracoidBase.y + 15}, ${coracoidBase.x + 6} ${coracoidBase.y}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={strokeW}
        />

        {/* === Glenoid suggestion (partial) === */}
        <path
          d={`M ${ox + 35} ${oy + 55}
              Q ${ox + 28} ${oy + 80}, ${ox + 35} ${oy + 110}
              L ${ox + 40} ${oy + 110}
              Q ${ox + 34} ${oy + 80}, ${ox + 40} ${oy + 58}
              Z`}
          fill={boneFill}
          stroke={boneOutline}
          strokeWidth={1.2}
          opacity={0.5}
        />

        {/* === AC Ligaments === */}
        {/* Intact: solid line, Sprained: wavy, Torn: dashed/absent */}
        {!config.acTorn && (
          <g>
            <line
              x1={acromionTip.x + 2}
              y1={acromionTip.y - 5}
              x2={clavEnd.x - 2}
              y2={clavEnd.y - 4}
              stroke={config.acSprain ? color : '#60A5FA'}
              strokeWidth={config.acSprain ? 1.8 : 2}
              strokeDasharray={config.acSprain ? '3,2' : 'none'}
            />
            <line
              x1={acromionTip.x + 1}
              y1={acromionTip.y + 3}
              x2={clavEnd.x - 2}
              y2={clavEnd.y + 3}
              stroke={config.acSprain ? color : '#60A5FA'}
              strokeWidth={config.acSprain ? 1.8 : 2}
              strokeDasharray={config.acSprain ? '3,2' : 'none'}
            />
          </g>
        )}
        {config.acTorn && (
          <g opacity={0.5}>
            <line
              x1={acromionTip.x + 2}
              y1={acromionTip.y - 3}
              x2={acromionTip.x + 8}
              y2={acromionTip.y - 8}
              stroke={color}
              strokeWidth={1.5}
            />
            <line
              x1={clavEnd.x - 3}
              y1={clavEnd.y - 3}
              x2={clavEnd.x - 9}
              y2={clavEnd.y - 8}
              stroke={color}
              strokeWidth={1.5}
            />
            {/* Torn marker X */}
            <text
              x={(acromionTip.x + clavEnd.x) / 2}
              y={Math.min(acromionTip.y, clavEnd.y) - 8}
              textAnchor="middle"
              fill={color}
              fontSize={10}
              fontWeight={700}
              opacity={0.7}
            >
              x
            </text>
          </g>
        )}

        {/* === CC Ligaments (Conoid + Trapezoid) === */}
        {/* Conoid (medial) */}
        {!config.ccTorn && (
          <g>
            {/* Conoid ligament */}
            <line
              x1={coracoidTip.x + 4}
              y1={coracoidTip.y - 4}
              x2={ox + 130 + clavDx}
              y2={oy + 72 + clavDy}
              stroke={config.ccSprain ? color : '#818CF8'}
              strokeWidth={config.ccSprain ? 1.5 : 2}
              strokeDasharray={config.ccSprain ? '3,2' : 'none'}
            />
            {/* Trapezoid ligament */}
            <line
              x1={coracoidTip.x + 8}
              y1={coracoidTip.y - 6}
              x2={ox + 140 + clavDx}
              y2={oy + 72 + clavDy}
              stroke={config.ccSprain ? color : '#818CF8'}
              strokeWidth={config.ccSprain ? 1.5 : 2}
              strokeDasharray={config.ccSprain ? '3,2' : 'none'}
            />
          </g>
        )}
        {config.ccTorn && (
          <g opacity={0.45}>
            <line
              x1={coracoidTip.x + 4}
              y1={coracoidTip.y - 4}
              x2={coracoidTip.x + 4}
              y2={coracoidTip.y - 18}
              stroke={color}
              strokeWidth={1.5}
            />
            <line
              x1={ox + 132 + clavDx}
              y1={oy + 72 + clavDy}
              x2={ox + 132 + clavDx}
              y2={oy + 84 + clavDy}
              stroke={color}
              strokeWidth={1.5}
            />
            <text
              x={ox + 118}
              y={oy + 108}
              textAnchor="middle"
              fill={color}
              fontSize={10}
              fontWeight={700}
              opacity={0.6}
            >
              x
            </text>
          </g>
        )}

        {/* === Displacement arrow === */}
        {config.clavElevation > 0 && (
          <line
            x1={ox + 160}
            y1={oy + 66}
            x2={ox + 160}
            y2={oy + 66 + clavDy}
            stroke={color}
            strokeWidth={1.5}
            markerEnd="url(#arrowRockwood)"
            opacity={0.7}
          />
        )}
        {config.clavPosterior && (
          <g opacity={0.7}>
            <line
              x1={ox + 150}
              y1={oy + 50 + clavDy}
              x2={ox + 160}
              y2={oy + 50 + clavDy}
              stroke={color}
              strokeWidth={1.5}
              markerEnd="url(#arrowRockwood)"
            />
            <text
              x={ox + 165}
              y={oy + 48 + clavDy}
              fill={color}
              fontSize={7}
              opacity={0.8}
            >
              POST
            </text>
          </g>
        )}
        {config.clavInferior && (
          <line
            x1={ox + 160}
            y1={oy + 66}
            x2={ox + 160}
            y2={oy + 96}
            stroke={color}
            strokeWidth={1.5}
            markerEnd="url(#arrowRockwood)"
            opacity={0.7}
          />
        )}

        {/* Labels */}
        {showLabels && (
          <g>
            <text
              x={ox + 96}
              y={oy + 16}
              textAnchor="middle"
              fill={isActive ? color : '#CBD5E1'}
              fontSize={11}
              fontWeight={isActive ? 700 : 600}
            >
              {grade.label}
            </text>
            <text
              x={ox + 96}
              y={oy + 174}
              textAnchor="middle"
              fill={isActive ? color : '#64748B'}
              fontSize={8}
            >
              {grade.desc}
            </text>
          </g>
        )}

        {/* Ligament labels (small, only in first cell for reference) */}
        {index === 0 && showLabels && (
          <g opacity={0.5}>
            <text x={acromionTip.x + 6} y={acromionTip.y - 12} fill="#60A5FA" fontSize={6}>
              AC lig
            </text>
            <text x={ox + 120} y={oy + 106} fill="#818CF8" fontSize={6}>
              CC lig
            </text>
          </g>
        )}
      </g>
    );
  };

  const configs = [
    { acTorn: false, ccTorn: false, acSprain: true, ccSprain: false, clavElevation: 0, clavPosterior: false, clavInferior: false },
    { acTorn: true, ccTorn: false, acSprain: false, ccSprain: true, clavElevation: 4, clavPosterior: false, clavInferior: false },
    { acTorn: true, ccTorn: true, acSprain: false, ccSprain: false, clavElevation: 14, clavPosterior: false, clavInferior: false },
    { acTorn: true, ccTorn: true, acSprain: false, ccSprain: false, clavElevation: 14, clavPosterior: true, clavInferior: false },
    { acTorn: true, ccTorn: true, acSprain: false, ccSprain: false, clavElevation: 28, clavPosterior: false, clavInferior: false },
    { acTorn: true, ccTorn: true, acSprain: false, ccSprain: false, clavElevation: 0, clavPosterior: false, clavInferior: true },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Rockwood Classification of Acromioclavicular Joint Injuries: 6 diagrams showing Types I through VI"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowRockwood"
          markerWidth={8}
          markerHeight={6}
          refX={8}
          refY={3}
          orient="auto"
        >
          <path d="M0,0 L8,3 L0,6 Z" fill={CLINICAL_COLORS.caution} />
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
          Rockwood Classification &mdash; AC Joint Injuries
        </text>
      )}

      {/* Legend */}
      {showLabels && (
        <g>
          <line x1={420} y1={392} x2={430} y2={392} stroke="#60A5FA" strokeWidth={2} />
          <text x={433} y={395} fill="#64748B" fontSize={7}>AC lig</text>
          <line x1={470} y1={392} x2={480} y2={392} stroke="#818CF8" strokeWidth={2} />
          <text x={483} y={395} fill="#64748B" fontSize={7}>CC lig</text>
          <line x1={516} y1={392} x2={530} y2={392} stroke="#94A3B8" strokeWidth={1.5} strokeDasharray="3,2" />
          <text x={533} y={395} fill="#64748B" fontSize={7}>sprained</text>
          <text x={572} y={395} fill="#64748B" fontSize={7}>x=torn</text>
        </g>
      )}

      {/* Render 6 diagrams in 3x2 grid */}
      {GRADES.map((grade, i) => renderACJoint(i, grade, configs[i]))}
    </svg>
  );
};

export default RockwoodSVG;
