import { useState } from 'react';
import type { SVGDiagramProps } from '@/types/svg.ts';

const BONE_OUTLINE = '#94A3B8';
const BONE_FILL = '#1E293B';
const BG = '#0F172A';

interface MeniscalZone {
  id: string;
  label: string;
  description: string;
  color: string;
  healingPotential: string;
}

const ZONES: MeniscalZone[] = [
  {
    id: 'red-red',
    label: 'Red-Red Zone',
    description: 'Peripheral 1/3 - Vascular',
    color: '#DC2626',
    healingPotential: 'Best healing potential',
  },
  {
    id: 'red-white',
    label: 'Red-White Zone',
    description: 'Middle 1/3 - Limited vascularity',
    color: '#F87171',
    healingPotential: 'Moderate healing potential',
  },
  {
    id: 'white-white',
    label: 'White-White Zone',
    description: 'Inner 1/3 - Avascular',
    color: '#E2E8F0',
    healingPotential: 'Poor healing potential',
  },
];

export function MeniscalZonesSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  function getColor(zone: MeniscalZone): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return zone.color;
  }

  function getOpacity(id: string): number {
    if (activeGrade === id) return 0.85;
    if (hoveredZone === id) return 0.65;
    return 0.4;
  }

  function handleClick(id: string) {
    if (interactive && onGradeSelect) {
      onGradeSelect(id);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, id: string) {
    if ((e.key === 'Enter' || e.key === ' ') && interactive && onGradeSelect) {
      e.preventDefault();
      onGradeSelect(id);
    }
  }

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Meniscal vascular zones - Red-Red, Red-White, and White-White zones shown in coronal cross-section"
    >
      <title>Meniscal Vascular Zones</title>
      <defs>
        {/* Vascularity gradient for the peripheral capsular region */}
        <linearGradient id="vascularGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#DC2626" stopOpacity={0.6} />
          <stop offset="50%" stopColor="#F87171" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#E2E8F0" stopOpacity={0.1} />
        </linearGradient>
        {/* Blood vessel pattern */}
        <pattern id="vesselPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1" fill="#DC2626" opacity={0.4} />
          <circle cx="9" cy="9" r="0.8" fill="#DC2626" opacity={0.3} />
        </pattern>
      </defs>

      <rect width="600" height="400" fill={BG} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={28}
          textAnchor="middle"
          fill={BONE_OUTLINE}
          fontSize={14}
          fontWeight={600}
          fontFamily="system-ui, sans-serif"
        >
          Meniscal Vascular Zones (Coronal Cross-Section)
        </text>
      )}

      {/* Main meniscus cross-section - centered */}
      <g transform="translate(100, 50)">
        {/* Femoral condyle (above) */}
        <path
          d="M50 90 Q200 30 350 90"
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />
        <text x={200} y={70} textAnchor="middle" fill={BONE_OUTLINE} fontSize={11} opacity={0.6} fontFamily="system-ui, sans-serif">
          Femoral Condyle
        </text>

        {/* Tibial plateau (below) */}
        <path
          d="M50 260 Q200 230 350 260 L350 290 Q200 270 50 290 Z"
          fill={BONE_FILL}
          stroke={BONE_OUTLINE}
          strokeWidth={1.5}
        />
        <text x={200} y={308} textAnchor="middle" fill={BONE_OUTLINE} fontSize={11} opacity={0.6} fontFamily="system-ui, sans-serif">
          Tibial Plateau
        </text>

        {/* Joint capsule / synovium (peripheral border) */}
        <path
          d="M55 100 L40 170 L55 250"
          fill="none"
          stroke={BONE_OUTLINE}
          strokeWidth={1}
          strokeDasharray="3 3"
          opacity={0.4}
        />
        <path
          d="M345 100 L360 170 L345 250"
          fill="none"
          stroke={BONE_OUTLINE}
          strokeWidth={1}
          strokeDasharray="3 3"
          opacity={0.4}
        />

        {/* === LEFT MENISCUS (larger, more detail) === */}
        {/* Red-Red Zone - Peripheral */}
        <g
          style={{ transition: 'opacity 0.3s ease' }}
          cursor={interactive ? 'pointer' : 'default'}
          onClick={() => handleClick('red-red')}
          onKeyDown={(e) => handleKeyDown(e, 'red-red')}
          onMouseEnter={() => interactive && setHoveredZone('red-red')}
          onMouseLeave={() => setHoveredZone(null)}
          tabIndex={interactive ? 0 : undefined}
          role={interactive ? 'button' : undefined}
          aria-pressed={interactive ? activeGrade === 'red-red' : undefined}
          aria-label="Red-Red Zone: Peripheral 1/3, vascular, best healing potential"
        >
          <title>Red-Red Zone: Peripheral 1/3 - Vascular - Best healing potential</title>
          <path
            d="M60 105 Q65 95 80 95 L80 105
               Q78 170 80 240
               L80 250 Q65 250 60 245 Q50 230 48 170 Q50 120 60 105 Z"
            fill={getColor(ZONES[0])}
            opacity={getOpacity('red-red')}
            stroke={activeGrade === 'red-red' ? getColor(ZONES[0]) : 'transparent'}
            strokeWidth={activeGrade === 'red-red' ? 2 : 0}
            style={{ transition: 'opacity 0.3s ease' }}
          />
          {/* Blood vessel dots */}
          <circle cx={65} cy={130} r={2} fill="#DC2626" opacity={getOpacity('red-red') * 0.8} />
          <circle cx={70} cy={155} r={1.5} fill="#DC2626" opacity={getOpacity('red-red') * 0.8} />
          <circle cx={63} cy={175} r={2} fill="#DC2626" opacity={getOpacity('red-red') * 0.8} />
          <circle cx={72} cy={200} r={1.5} fill="#DC2626" opacity={getOpacity('red-red') * 0.8} />
          <circle cx={66} cy={220} r={2} fill="#DC2626" opacity={getOpacity('red-red') * 0.8} />
        </g>

        {/* Red-White Zone - Middle */}
        <g
          style={{ transition: 'opacity 0.3s ease' }}
          cursor={interactive ? 'pointer' : 'default'}
          onClick={() => handleClick('red-white')}
          onKeyDown={(e) => handleKeyDown(e, 'red-white')}
          onMouseEnter={() => interactive && setHoveredZone('red-white')}
          onMouseLeave={() => setHoveredZone(null)}
          tabIndex={interactive ? 0 : undefined}
          role={interactive ? 'button' : undefined}
          aria-pressed={interactive ? activeGrade === 'red-white' : undefined}
          aria-label="Red-White Zone: Middle 1/3, limited vascularity, moderate healing potential"
        >
          <title>Red-White Zone: Middle 1/3 - Limited vascularity - Moderate healing potential</title>
          <path
            d="M80 95 Q100 92 120 98 L120 108
               Q115 170 120 240
               L120 248 Q100 252 80 250 L80 240
               Q78 170 80 105 Z"
            fill={getColor(ZONES[1])}
            opacity={getOpacity('red-white')}
            stroke={activeGrade === 'red-white' ? getColor(ZONES[1]) : 'transparent'}
            strokeWidth={activeGrade === 'red-white' ? 2 : 0}
            style={{ transition: 'opacity 0.3s ease' }}
          />
          {/* Sparse vessel dots */}
          <circle cx={95} cy={140} r={1} fill="#F87171" opacity={getOpacity('red-white') * 0.6} />
          <circle cx={100} cy={190} r={1} fill="#F87171" opacity={getOpacity('red-white') * 0.6} />
        </g>

        {/* White-White Zone - Inner */}
        <g
          style={{ transition: 'opacity 0.3s ease' }}
          cursor={interactive ? 'pointer' : 'default'}
          onClick={() => handleClick('white-white')}
          onKeyDown={(e) => handleKeyDown(e, 'white-white')}
          onMouseEnter={() => interactive && setHoveredZone('white-white')}
          onMouseLeave={() => setHoveredZone(null)}
          tabIndex={interactive ? 0 : undefined}
          role={interactive ? 'button' : undefined}
          aria-pressed={interactive ? activeGrade === 'white-white' : undefined}
          aria-label="White-White Zone: Inner 1/3, avascular, poor healing potential"
        >
          <title>White-White Zone: Inner 1/3 - Avascular - Poor healing potential</title>
          <path
            d="M120 98 Q145 105 160 130 L160 140
               Q158 170 160 210
               L160 220 Q145 245 120 248 L120 240
               Q115 170 120 108 Z"
            fill={getColor(ZONES[2])}
            opacity={getOpacity('white-white') * 0.7}
            stroke={activeGrade === 'white-white' ? getColor(ZONES[2]) : 'transparent'}
            strokeWidth={activeGrade === 'white-white' ? 2 : 0}
            style={{ transition: 'opacity 0.3s ease' }}
          />
        </g>

        {/* === RIGHT MENISCUS (mirror) === */}
        <g transform="translate(400, 0) scale(-1, 1)">
          {/* Red-Red */}
          <path
            d="M60 105 Q65 95 80 95 L80 105
               Q78 170 80 240
               L80 250 Q65 250 60 245 Q50 230 48 170 Q50 120 60 105 Z"
            fill={getColor(ZONES[0])}
            opacity={getOpacity('red-red') * 0.6}
          />
          {/* Red-White */}
          <path
            d="M80 95 Q100 92 120 98 L120 108
               Q115 170 120 240
               L120 248 Q100 252 80 250 L80 240
               Q78 170 80 105 Z"
            fill={getColor(ZONES[1])}
            opacity={getOpacity('red-white') * 0.6}
          />
          {/* White-White */}
          <path
            d="M120 98 Q145 105 160 130 L160 140
               Q158 170 160 210
               L160 220 Q145 245 120 248 L120 240
               Q115 170 120 108 Z"
            fill={getColor(ZONES[2])}
            opacity={getOpacity('white-white') * 0.5}
          />
        </g>

        {/* Zone boundary lines */}
        <line x1={80} y1={95} x2={80} y2={250} stroke={BONE_OUTLINE} strokeWidth={0.5} strokeDasharray="2 3" opacity={0.4} />
        <line x1={120} y1={98} x2={120} y2={248} stroke={BONE_OUTLINE} strokeWidth={0.5} strokeDasharray="2 3" opacity={0.4} />

        {/* Mirror side boundary lines */}
        <line x1={280} y1={98} x2={280} y2={248} stroke={BONE_OUTLINE} strokeWidth={0.5} strokeDasharray="2 3" opacity={0.4} />
        <line x1={320} y1={95} x2={320} y2={250} stroke={BONE_OUTLINE} strokeWidth={0.5} strokeDasharray="2 3" opacity={0.4} />

        {/* Center free edge label */}
        {showLabels && (
          <text x={200} y={175} textAnchor="middle" fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
            Free Edge
          </text>
        )}
      </g>

      {/* Legend */}
      {showLabels && (
        <g transform="translate(100, 355)">
          {ZONES.map((zone, idx) => {
            const lx = idx * 140;
            const isActive = activeGrade === zone.id;
            return (
              <g key={zone.id}>
                <rect
                  x={lx}
                  y={0}
                  width={14}
                  height={14}
                  rx={3}
                  fill={getColor(zone)}
                  opacity={isActive ? 0.9 : 0.5}
                  style={{ transition: 'opacity 0.3s ease' }}
                />
                <text
                  x={lx + 20}
                  y={11}
                  fill={isActive ? getColor(zone) : BONE_OUTLINE}
                  fontSize={10}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {zone.label}
                </text>
                <text
                  x={lx + 20}
                  y={24}
                  fill={BONE_OUTLINE}
                  fontSize={8}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {zone.healingPotential}
                </text>
              </g>
            );
          })}
        </g>
      )}
    </svg>
  );
}
