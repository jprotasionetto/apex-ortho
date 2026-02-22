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
  shortLabel: string;
  description: string;
  group: 'elementary' | 'associated';
  color: string;
}

const grades: GradeInfo[] = [
  // Elementary (5)
  { id: 'post-wall', label: 'Posterior Wall', shortLabel: 'Post Wall', description: 'Posterior wall fragment', group: 'elementary', color: '#3B82F6' },
  { id: 'post-column', label: 'Posterior Column', shortLabel: 'Post Col', description: 'Posterior column fracture', group: 'elementary', color: '#6366F1' },
  { id: 'ant-wall', label: 'Anterior Wall', shortLabel: 'Ant Wall', description: 'Anterior wall fragment', group: 'elementary', color: '#22C55E' },
  { id: 'ant-column', label: 'Anterior Column', shortLabel: 'Ant Col', description: 'Anterior column fracture', group: 'elementary', color: '#10B981' },
  { id: 'transverse', label: 'Transverse', shortLabel: 'Transverse', description: 'Transverse across acetabulum', group: 'elementary', color: '#F59E0B' },
  // Associated (5)
  { id: 'post-column-wall', label: 'Post Column + Wall', shortLabel: 'Post C+W', description: 'Posterior column + wall', group: 'associated', color: '#8B5CF6' },
  { id: 'transverse-post-wall', label: 'Transverse + Post Wall', shortLabel: 'Trans+PW', description: 'Transverse + posterior wall', group: 'associated', color: '#EC4899' },
  { id: 't-shaped', label: 'T-Shaped', shortLabel: 'T-Shaped', description: 'T-shaped fracture', group: 'associated', color: '#EF4444' },
  { id: 'ant-column-post-hemi', label: 'Ant Column + Post Hemi', shortLabel: 'AC+PH', description: 'Anterior column + posterior hemitransverse', group: 'associated', color: '#F97316' },
  { id: 'both-columns', label: 'Both Columns', shortLabel: 'Both Col', description: 'Both columns (floating acetabulum)', group: 'associated', color: '#DC2626' },
];

/** Mini acetabulum icon for each fracture pattern */
function AcetabulumIcon({ gradeId, color, muted }: { gradeId: string; color: string; muted: boolean }) {
  const opacity = muted ? 0.3 : 1;
  // Base acetabulum: circle (femoral head) within the cup
  const cx = 45;
  const cy = 40;
  const r = 22;

  return (
    <g opacity={opacity} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Pelvic bone outline */}
      <path d="M10,10 Q5,25 8,40 Q10,55 20,65 Q35,75 50,75 Q65,75 75,65 Q85,55 87,40 Q90,25 85,10 Z"
        fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
      {/* Acetabular cup */}
      <path d={`M${cx - r},${cy} A${r},${r} 0 0,0 ${cx + r},${cy}`}
        fill="none" stroke={BONE_OUTLINE} strokeWidth="1.5" />
      {/* Femoral head (circle) */}
      <circle cx={cx} cy={cy + 5} r={r - 4} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1" />

      {/* Fracture pattern specific to each type */}
      {gradeId === 'post-wall' && (
        <g>
          {/* Posterior wall fragment */}
          <path d="M60,25 L70,40 L65,55" stroke={color} strokeWidth="2.5" fill="none" />
          <path d="M65,25 Q75,35 72,50 L65,55 L60,25Z" fill={color} fillOpacity="0.2" />
        </g>
      )}

      {gradeId === 'post-column' && (
        <g>
          {/* Posterior column - line from ilium through ischium */}
          <line x1="55" y1="12" x2="68" y2="70" stroke={color} strokeWidth="2.5" />
        </g>
      )}

      {gradeId === 'ant-wall' && (
        <g>
          {/* Anterior wall fragment */}
          <path d="M30,25 L22,40 L28,55" stroke={color} strokeWidth="2.5" fill="none" />
          <path d="M25,25 Q18,35 20,50 L28,55 L30,25Z" fill={color} fillOpacity="0.2" />
        </g>
      )}

      {gradeId === 'ant-column' && (
        <g>
          {/* Anterior column - line from ilium through pubis */}
          <line x1="38" y1="12" x2="22" y2="70" stroke={color} strokeWidth="2.5" />
        </g>
      )}

      {gradeId === 'transverse' && (
        <g>
          {/* Transverse fracture across acetabulum */}
          <line x1="12" y1="38" x2="83" y2="38" stroke={color} strokeWidth="2.5" />
        </g>
      )}

      {gradeId === 'post-column-wall' && (
        <g>
          {/* Posterior column line */}
          <line x1="55" y1="12" x2="68" y2="70" stroke={color} strokeWidth="2" />
          {/* Posterior wall fragment */}
          <path d="M60,28 L70,38 L66,50" stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="3,1" />
          <path d="M63,28 Q72,35 70,48 L66,50 L60,28Z" fill={color} fillOpacity="0.15" />
        </g>
      )}

      {gradeId === 'transverse-post-wall' && (
        <g>
          {/* Transverse line */}
          <line x1="12" y1="38" x2="83" y2="38" stroke={color} strokeWidth="2" />
          {/* Posterior wall */}
          <path d="M62,28 L72,38 L68,48" stroke={color} strokeWidth="1.5" fill="none" />
          <path d="M65,28 Q74,35 72,46 L68,48 L62,28Z" fill={color} fillOpacity="0.15" />
        </g>
      )}

      {gradeId === 't-shaped' && (
        <g>
          {/* Transverse component */}
          <line x1="12" y1="38" x2="83" y2="38" stroke={color} strokeWidth="2" />
          {/* Vertical component (stem of T) */}
          <line x1="45" y1="38" x2="45" y2="72" stroke={color} strokeWidth="2" />
        </g>
      )}

      {gradeId === 'ant-column-post-hemi' && (
        <g>
          {/* Anterior column */}
          <line x1="38" y1="12" x2="22" y2="70" stroke={color} strokeWidth="2" />
          {/* Posterior hemitransverse */}
          <line x1="48" y1="40" x2="83" y2="40" stroke={color} strokeWidth="2" strokeDasharray="4,2" />
        </g>
      )}

      {gradeId === 'both-columns' && (
        <g>
          {/* Anterior column */}
          <line x1="38" y1="12" x2="22" y2="70" stroke={color} strokeWidth="2" />
          {/* Posterior column */}
          <line x1="55" y1="12" x2="68" y2="70" stroke={color} strokeWidth="2" />
          {/* Floating acetabulum indicator */}
          <circle cx={cx} cy={cy} r={r + 3} fill="none" stroke={color} strokeWidth="0.8" strokeDasharray="3,2" />
        </g>
      )}
    </g>
  );
}

export default function JudetLetournelSVG({
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

  const elementary = grades.filter((g) => g.group === 'elementary');
  const associated = grades.filter((g) => g.group === 'associated');

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Judet-Letournel classification of acetabular fractures - 10 types: 5 elementary and 5 associated patterns"
    >
      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="20" textAnchor="middle" fill="#E2E8F0" fontSize="13" fontWeight="700">
          Judet-Letournel Classification - Acetabular Fractures
        </text>
      )}

      {/* Row 1: Elementary (5 types) */}
      {showLabels && (
        <g transform="translate(15, 38)">
          <rect x="0" y="-2" width="120" height="14" rx="3" fill={CLINICAL_COLORS.info} fillOpacity="0.1" />
          <text x="5" y="8" fill={CLINICAL_COLORS.info} fontSize="9" fontWeight="600">Elementary (5)</text>
        </g>
      )}

      {elementary.map((grade, i) => {
        const xOffset = 15 + i * 116;
        return (
          <g
            key={grade.id}
            transform={`translate(${xOffset}, 55)`}
            onClick={() => handleClick(grade.id)}
            onMouseEnter={() => interactive && setHoveredGrade(grade.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <title>{`${grade.label}: ${grade.description}`}</title>
            <rect x="-3" y="-3" width="105" height="115" fill="transparent" />
            {activeGrade === grade.id && (
              <rect x="-3" y="-3" width="105" height="115" rx="6" fill={getColor(grade)} fillOpacity="0.08" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.4" />
            )}
            <AcetabulumIcon gradeId={grade.id} color={getColor(grade)} muted={isMuted(grade.id)} />
            {showLabels && (
              <>
                <text x="45" y="88" textAnchor="middle" fill={getColor(grade)} fontSize="8" fontWeight="600" opacity={isMuted(grade.id) ? 0.3 : 1} style={{ transition: 'opacity 0.3s ease' }}>
                  {grade.shortLabel}
                </text>
                <text x="45" y="100" textAnchor="middle" fill="#64748B" fontSize="6" opacity={isMuted(grade.id) ? 0.3 : 0.8} style={{ transition: 'opacity 0.3s ease' }}>
                  {grade.description}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Row 2: Associated (5 types) */}
      {showLabels && (
        <g transform="translate(15, 195)">
          <rect x="0" y="-2" width="120" height="14" rx="3" fill={CLINICAL_COLORS.danger} fillOpacity="0.1" />
          <text x="5" y="8" fill={CLINICAL_COLORS.danger} fontSize="9" fontWeight="600">Associated (5)</text>
        </g>
      )}

      {associated.map((grade, i) => {
        const xOffset = 15 + i * 116;
        return (
          <g
            key={grade.id}
            transform={`translate(${xOffset}, 215)`}
            onClick={() => handleClick(grade.id)}
            onMouseEnter={() => interactive && setHoveredGrade(grade.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <title>{`${grade.label}: ${grade.description}`}</title>
            <rect x="-3" y="-3" width="105" height="115" fill="transparent" />
            {activeGrade === grade.id && (
              <rect x="-3" y="-3" width="105" height="115" rx="6" fill={getColor(grade)} fillOpacity="0.08" stroke={getColor(grade)} strokeWidth="1" strokeOpacity="0.4" />
            )}
            <AcetabulumIcon gradeId={grade.id} color={getColor(grade)} muted={isMuted(grade.id)} />
            {showLabels && (
              <>
                <text x="45" y="88" textAnchor="middle" fill={getColor(grade)} fontSize="8" fontWeight="600" opacity={isMuted(grade.id) ? 0.3 : 1} style={{ transition: 'opacity 0.3s ease' }}>
                  {grade.shortLabel}
                </text>
                <text x="45" y="100" textAnchor="middle" fill="#64748B" fontSize="6" opacity={isMuted(grade.id) ? 0.3 : 0.8} style={{ transition: 'opacity 0.3s ease' }}>
                  {grade.description}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Anatomy key */}
      {showLabels && (
        <g transform="translate(15, 350)">
          <rect x="0" y="0" width="570" height="38" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
          <text x="10" y="14" fill="#E2E8F0" fontSize="7.5" fontWeight="600">Columns &amp; Walls:</text>
          <text x="110" y="14" fill="#94A3B8" fontSize="7">Anterior column = iliopubic | Posterior column = ilioischial</text>
          <text x="10" y="28" fill="#E2E8F0" fontSize="7.5" fontWeight="600">Clinical note:</text>
          <text x="90" y="28" fill="#94A3B8" fontSize="7">Both-columns = &quot;floating acetabulum&quot; (spur sign on obturator oblique) | CT essential for all types</text>
        </g>
      )}
    </svg>
  );
}
