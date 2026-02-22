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

interface ZoneInfo {
  id: string;
  label: string;
  name: string;
  description: string;
  color: string;
  tendons: string;
}

const zones: ZoneInfo[] = [
  { id: 'zone-i', label: 'Zone I', name: 'FDP only', description: 'Distal to FDS insertion', color: '#3B82F6', tendons: 'FDP only' },
  { id: 'zone-ii', label: 'Zone II', name: "No man's land", description: 'FDS insertion to A1 pulley', color: '#EF4444', tendons: 'FDP + FDS in sheath' },
  { id: 'zone-iii', label: 'Zone III', name: 'Palm', description: 'Lumbrical origin to carpal tunnel', color: '#F59E0B', tendons: 'Lumbricals origin' },
  { id: 'zone-iv', label: 'Zone IV', name: 'Carpal tunnel', description: 'Within carpal tunnel', color: '#22C55E', tendons: '9 tendons + median nerve' },
  { id: 'zone-v', label: 'Zone V', name: 'Forearm', description: 'Proximal to carpal tunnel', color: '#8B5CF6', tendons: 'Individual muscles' },
];

export default function FlexorZonesSVG({
  activeGrade,
  onGradeSelect,
  interactive = true,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  const getColor = (zone: ZoneInfo) => {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return zone.color;
  };

  const isMuted = (zoneId: string) => {
    if (!activeGrade && !hoveredGrade) return false;
    if (hoveredGrade) return hoveredGrade !== zoneId;
    return activeGrade !== zoneId;
  };

  const handleClick = (zoneId: string) => {
    if (interactive && onGradeSelect) {
      onGradeSelect(zoneId);
    }
  };

  const getOpacity = (zoneId: string) => isMuted(zoneId) ? 0.2 : 0.85;
  const isActive = (zoneId: string) => activeGrade === zoneId;

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Flexor tendon zones of the hand - Palmar view showing Zones I through V"
    >
      <rect width="600" height="400" fill={BG_COLOR} rx="8" />

      {/* Title */}
      {showLabels && (
        <text x="300" y="22" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontWeight="700">
          Flexor Tendon Zones (Verdan)
        </text>
      )}
      {showLabels && (
        <text x="300" y="37" textAnchor="middle" fill="#64748B" fontSize="10">
          Palmar View of Hand
        </text>
      )}

      {/* Hand outline - palmar view centered */}
      <g transform="translate(120, 42)">
        {/* Zone V - Forearm (bottom) */}
        <g
          onClick={() => handleClick('zone-v')}
          onMouseEnter={() => interactive && setHoveredGrade('zone-v')}
          onMouseLeave={() => setHoveredGrade(null)}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
        >
          <title>Zone V: Forearm - Proximal to carpal tunnel</title>
          <rect x="90" y="310" width="180" height="48" rx="4"
            fill={getColor(zones[4])} fillOpacity={getOpacity('zone-v') * 0.3}
            stroke={isActive('zone-v') ? getColor(zones[4]) : 'none'} strokeWidth="1.5"
            style={{ transition: 'opacity 0.3s ease' }} />
          {/* Forearm shape */}
          <path d="M110,310 L100,358 L260,358 L250,310Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" opacity={getOpacity('zone-v')} style={{ transition: 'opacity 0.3s ease' }} />
          {/* Zone band overlay */}
          <rect x="100" y="310" width="160" height="48" rx="0" fill={getColor(zones[4])} fillOpacity={getOpacity('zone-v') * 0.2} style={{ transition: 'opacity 0.3s ease' }} />
          {showLabels && (
            <text x="180" y="338" textAnchor="middle" fill={getColor(zones[4])} fontSize="10" fontWeight="600" opacity={getOpacity('zone-v')} style={{ transition: 'opacity 0.3s ease' }}>
              Zone V
            </text>
          )}
        </g>

        {/* Zone IV - Carpal Tunnel */}
        <g
          onClick={() => handleClick('zone-iv')}
          onMouseEnter={() => interactive && setHoveredGrade('zone-iv')}
          onMouseLeave={() => setHoveredGrade(null)}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
        >
          <title>Zone IV: Carpal Tunnel - 9 tendons + median nerve</title>
          {/* Wrist area */}
          <path d="M110,270 Q108,290 110,310 L250,310 Q252,290 250,270Z" fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" opacity={getOpacity('zone-iv')} style={{ transition: 'opacity 0.3s ease' }} />
          {/* Carpal tunnel band */}
          <rect x="110" y="270" width="140" height="40" rx="4" fill={getColor(zones[3])} fillOpacity={getOpacity('zone-iv') * 0.25}
            stroke={isActive('zone-iv') ? getColor(zones[3]) : 'none'} strokeWidth="1.5"
            style={{ transition: 'opacity 0.3s ease' }} />
          {/* Transverse carpal ligament indication */}
          <line x1="115" y1="275" x2="245" y2="275" stroke={getColor(zones[3])} strokeWidth="1" opacity={getOpacity('zone-iv') * 0.6} strokeDasharray="4,2" style={{ transition: 'opacity 0.3s ease' }} />
          <line x1="115" y1="305" x2="245" y2="305" stroke={getColor(zones[3])} strokeWidth="1" opacity={getOpacity('zone-iv') * 0.6} strokeDasharray="4,2" style={{ transition: 'opacity 0.3s ease' }} />
          {showLabels && (
            <text x="180" y="294" textAnchor="middle" fill={getColor(zones[3])} fontSize="10" fontWeight="600" opacity={getOpacity('zone-iv')} style={{ transition: 'opacity 0.3s ease' }}>
              Zone IV
            </text>
          )}
        </g>

        {/* Zone III - Palm */}
        <g
          onClick={() => handleClick('zone-iii')}
          onMouseEnter={() => interactive && setHoveredGrade('zone-iii')}
          onMouseLeave={() => setHoveredGrade(null)}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
        >
          <title>Zone III: Palm - Lumbrical origin to distal edge of carpal tunnel</title>
          {/* Palm area */}
          <path d="M80,200 Q70,230 80,260 Q95,272 110,270 L250,270 Q265,272 280,260 Q290,230 280,200Z"
            fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.5" opacity={getOpacity('zone-iii')} style={{ transition: 'opacity 0.3s ease' }} />
          {/* Zone band */}
          <path d="M85,200 Q75,230 85,260 Q100,270 110,268 L250,268 Q260,270 275,260 Q285,230 275,200Z"
            fill={getColor(zones[2])} fillOpacity={getOpacity('zone-iii') * 0.2}
            stroke={isActive('zone-iii') ? getColor(zones[2]) : 'none'} strokeWidth="1.5"
            style={{ transition: 'opacity 0.3s ease' }} />
          {showLabels && (
            <text x="180" y="242" textAnchor="middle" fill={getColor(zones[2])} fontSize="10" fontWeight="600" opacity={getOpacity('zone-iii')} style={{ transition: 'opacity 0.3s ease' }}>
              Zone III
            </text>
          )}
        </g>

        {/* Thumb (simplified) */}
        <g opacity={0.4}>
          <path d="M80,200 Q50,180 35,150 Q25,130 30,110 Q35,95 50,90 Q65,88 75,100 Q85,115 80,140 Q78,165 80,200"
            fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1.2" />
        </g>

        {/* Fingers - each with Zone I and Zone II bands */}
        {/* Index finger */}
        {renderFinger(95, 200, 50, 0, 'index')}
        {/* Middle finger */}
        {renderFinger(145, 190, 55, 0, 'middle')}
        {/* Ring finger */}
        {renderFinger(200, 195, 50, 2, 'ring')}
        {/* Little finger */}
        {renderFinger(248, 210, 42, 5, 'little')}
      </g>

      {/* Legend on the right side */}
      {showLabels && (
        <g transform="translate(410, 50)">
          {zones.map((z, i) => (
            <g
              key={z.id}
              transform={`translate(0, ${i * 60})`}
              onClick={() => handleClick(z.id)}
              onMouseEnter={() => interactive && setHoveredGrade(z.id)}
              onMouseLeave={() => setHoveredGrade(null)}
              style={{ cursor: interactive ? 'pointer' : 'default' }}
              opacity={isMuted(z.id) ? 0.3 : 1}
            >
              <rect x="0" y="0" width="175" height="50" rx="6" fill="#1E293B"
                stroke={isActive(z.id) ? getColor(z) : '#334155'} strokeWidth={isActive(z.id) ? 1.5 : 0.5}
                style={{ transition: 'all 0.3s ease' }} />
              <rect x="0" y="0" width="5" height="50" rx="2" fill={getColor(z)} />
              <text x="14" y="16" fill={getColor(z)} fontSize="10" fontWeight="700">{z.label}</text>
              <text x="60" y="16" fill="#E2E8F0" fontSize="8" fontWeight="500">{z.name}</text>
              <text x="14" y="30" fill="#94A3B8" fontSize="7">{z.description}</text>
              <text x="14" y="42" fill="#64748B" fontSize="6.5">Tendons: {z.tendons}</text>
            </g>
          ))}
        </g>
      )}

      {/* Clinical note */}
      {showLabels && (
        <g transform="translate(410, 360)">
          <rect x="0" y="0" width="175" height="28" rx="4" fill="#1E293B" stroke={CLINICAL_COLORS.danger} strokeWidth="0.5" strokeOpacity="0.4" />
          <text x="10" y="12" fill={CLINICAL_COLORS.danger} fontSize="7" fontWeight="600">Zone II = &quot;No man&apos;s land&quot;</text>
          <text x="10" y="23" fill="#94A3B8" fontSize="6">Most challenging surgical zone</text>
        </g>
      )}
    </svg>
  );

  function renderFinger(baseX: number, baseY: number, length: number, angleDeg: number, fingerName: string) {
    const zoneIColor = getColor(zones[0]);
    const zoneIIColor = getColor(zones[1]);
    const zIOpacity = getOpacity('zone-i');
    const zIIOpacity = getOpacity('zone-ii');

    // Finger proportions
    const dipY = baseY - length;
    const pipY = baseY - length * 0.55;
    const mcpY = baseY;
    const width = 28;
    const half = width / 2;

    return (
      <g key={fingerName} transform={`rotate(${angleDeg}, ${baseX + half}, ${baseY})`}>
        {/* Finger outline */}
        <path
          d={`M${baseX},${mcpY} L${baseX},${dipY + 8} Q${baseX},${dipY - 4} ${baseX + half},${dipY - 6} Q${baseX + width},${dipY - 4} ${baseX + width},${dipY + 8} L${baseX + width},${mcpY}Z`}
          fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth="1"
        />

        {/* Zone I band - DIP to FDS insertion (distal third) */}
        <g
          onClick={() => handleClick('zone-i')}
          onMouseEnter={() => interactive && setHoveredGrade('zone-i')}
          onMouseLeave={() => setHoveredGrade(null)}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
        >
          <title>Zone I: Distal to FDS insertion (FDP only)</title>
          <rect x={baseX + 1} y={dipY} width={width - 2} height={pipY - dipY - 2} rx="2"
            fill={zoneIColor} fillOpacity={zIOpacity * 0.35}
            stroke={isActive('zone-i') ? zoneIColor : 'none'} strokeWidth="1"
            style={{ transition: 'opacity 0.3s ease' }} />
          {showLabels && (
            <text x={baseX + half} y={dipY + (pipY - dipY) / 2 + 2} textAnchor="middle" fill={zoneIColor} fontSize="6" fontWeight="600" opacity={zIOpacity} style={{ transition: 'opacity 0.3s ease' }}>I</text>
          )}
        </g>

        {/* Zone II band - PIP to A1 pulley (middle section) */}
        <g
          onClick={() => handleClick('zone-ii')}
          onMouseEnter={() => interactive && setHoveredGrade('zone-ii')}
          onMouseLeave={() => setHoveredGrade(null)}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
        >
          <title>Zone II: No man&apos;s land - FDP + FDS in sheath</title>
          <rect x={baseX + 1} y={pipY} width={width - 2} height={mcpY - pipY - 1} rx="2"
            fill={zoneIIColor} fillOpacity={zIIOpacity * 0.35}
            stroke={isActive('zone-ii') ? zoneIIColor : 'none'} strokeWidth="1"
            style={{ transition: 'opacity 0.3s ease' }} />
          {showLabels && (
            <text x={baseX + half} y={pipY + (mcpY - pipY) / 2 + 2} textAnchor="middle" fill={zoneIIColor} fontSize="6" fontWeight="600" opacity={zIIOpacity} style={{ transition: 'opacity 0.3s ease' }}>II</text>
          )}
        </g>

        {/* Joint lines */}
        <line x1={baseX + 2} y1={pipY - 1} x2={baseX + width - 2} y2={pipY - 1} stroke={BONE_OUTLINE} strokeWidth="0.6" opacity="0.5" />
        <line x1={baseX + 2} y1={dipY + (pipY - dipY) * 0.45} x2={baseX + width - 2} y2={dipY + (pipY - dipY) * 0.45} stroke={BONE_OUTLINE} strokeWidth="0.4" opacity="0.3" />
      </g>
    );
  }
}
