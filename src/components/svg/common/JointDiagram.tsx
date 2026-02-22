import { useState } from 'react';
import type { SVGDiagramProps } from '@/types/svg.ts';

interface JointZone {
  id: string;
  path: string;
  label: string;
  color?: string;
}

interface JointDiagramProps extends SVGDiagramProps {
  jointType?: 'glenohumeral' | 'hip' | 'knee' | 'ankle' | 'elbow' | 'generic';
  zones?: JointZone[];
  width?: number;
  height?: number;
}

const CLINICAL_COLORS = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
} as const;

const GRAYSCALE_ACTIVE = '#94A3B8';
const BONE_OUTLINE = '#94A3B8';
const BONE_FILL = '#1E293B';
const CARTILAGE_FILL = '#334155';
const JOINT_SPACE = '#0F172A';

/**
 * Joint shape definitions for each joint type.
 * Each joint is defined by its proximal bone (concave/socket), distal bone (convex/ball),
 * and cartilage surfaces. Designed for a 300x400 viewBox.
 */
interface JointShape {
  proximalBone: string;
  distalBone: string;
  proximalCartilage: string;
  distalCartilage: string;
}

const JOINT_SHAPES: Record<NonNullable<JointDiagramProps['jointType']>, JointShape> = {
  glenohumeral: {
    // Glenoid (shallow socket) + Humeral head (large sphere)
    proximalBone:
      'M60 20 L60 120 C60 140 70 155 85 165 L90 168 C95 172 100 180 100 190 ' +
      'L100 195 C100 180 115 165 140 158 C165 152 185 160 195 175 ' +
      'L200 180 C205 168 210 155 210 140 L210 120 L240 120 L240 20 Z',
    distalBone:
      'M85 400 L85 310 C85 290 95 270 110 258 L115 255 ' +
      'C120 250 128 242 135 232 C142 222 152 215 165 215 ' +
      'C178 215 188 222 195 232 C202 242 210 250 215 255 ' +
      'L220 258 C235 270 245 290 245 310 L245 400 Z',
    proximalCartilage:
      'M100 195 C100 182 112 170 135 162 C158 155 180 162 198 175 ' +
      'L195 185 C180 174 160 168 140 172 C118 177 105 188 105 198 Z',
    distalCartilage:
      'M115 248 C122 238 132 228 148 222 C164 216 180 220 192 228 ' +
      'C204 236 212 246 218 252 L213 258 C207 248 197 238 185 232 ' +
      'C170 225 155 224 143 230 C130 236 122 244 118 252 Z',
  },
  hip: {
    // Acetabulum (deep socket) + Femoral head (large sphere)
    proximalBone:
      'M30 20 L30 135 C30 155 40 175 58 190 C75 205 85 218 85 235 ' +
      'C85 218 100 200 125 192 C150 184 175 188 195 200 ' +
      'C215 188 225 175 235 155 L240 135 L270 135 L270 20 Z',
    distalBone:
      'M100 400 L100 320 C100 295 112 275 130 262 C148 250 155 240 158 228 ' +
      'C162 240 175 250 195 258 C215 266 230 290 230 320 L230 400 Z',
    proximalCartilage:
      'M85 235 C85 220 98 206 120 198 C142 190 168 192 190 202 ' +
      'L186 212 C166 204 145 202 128 208 C110 214 98 226 96 238 Z',
    distalCartilage:
      'M130 256 C140 244 152 236 168 232 C184 228 198 234 208 244 ' +
      'L202 252 C194 244 182 240 170 242 C158 244 148 250 140 258 Z',
  },
  knee: {
    // Femoral condyles (convex) + Tibial plateau (flat/concave)
    proximalBone:
      'M75 20 L75 140 C75 160 68 178 58 190 C48 202 40 218 40 238 ' +
      'C40 255 50 268 65 275 L78 278 ' +
      'L222 278 L235 275 C250 268 260 255 260 238 ' +
      'C260 218 252 202 242 190 C232 178 225 160 225 140 L225 20 Z',
    distalBone:
      'M55 400 L55 340 C55 320 62 305 75 295 L85 290 ' +
      'L215 290 L225 295 C238 305 245 320 245 340 L245 400 Z',
    proximalCartilage:
      'M58 268 C48 258 42 245 42 235 C42 250 52 262 68 270 ' +
      'L78 273 L222 273 L232 270 C248 262 258 250 258 235 ' +
      'C258 245 252 258 242 268 L232 273 L68 273 Z',
    distalCartilage:
      'M85 288 L215 288 L225 290 C232 292 238 296 242 300 ' +
      'L58 300 C62 296 68 292 75 290 Z',
  },
  ankle: {
    // Tibial plafond (concave) + Talar dome (convex)
    proximalBone:
      'M80 20 L80 155 C80 170 72 182 62 190 C52 198 42 210 42 228 ' +
      'L42 245 C42 248 45 250 50 250 L250 250 C255 250 258 248 258 245 ' +
      'L258 228 C258 210 248 198 238 190 C228 182 220 170 220 155 L220 20 Z',
    distalBone:
      'M60 400 L60 330 C60 310 75 295 95 285 L105 282 ' +
      'C120 278 140 276 150 276 C160 276 180 278 195 282 ' +
      'L205 285 C225 295 240 310 240 330 L240 400 Z',
    proximalCartilage:
      'M50 248 L250 248 L250 255 C250 258 248 260 245 260 ' +
      'L55 260 C52 260 50 258 50 255 Z',
    distalCartilage:
      'M105 275 C120 270 140 268 150 268 C160 268 180 270 195 275 ' +
      'L190 282 C178 278 162 276 150 276 C138 276 122 278 110 282 Z',
  },
  elbow: {
    // Trochlea/Capitellum (convex) + Olecranon/Coronoid (concave)
    proximalBone:
      'M85 20 L85 145 C85 165 78 180 68 192 C58 204 48 220 48 240 ' +
      'C48 258 58 272 72 278 L82 280 ' +
      'L218 280 L228 278 C242 272 252 258 252 240 ' +
      'C252 220 242 204 232 192 C222 180 215 165 215 145 L215 20 Z',
    distalBone:
      'M70 400 L70 345 C70 325 78 308 90 298 L98 293 ' +
      'L202 293 L210 298 C222 308 230 325 230 345 L230 400 Z',
    proximalCartilage:
      'M72 272 C60 265 50 252 50 240 C50 255 60 268 75 274 ' +
      'L82 276 L218 276 L225 274 C240 268 250 255 250 240 ' +
      'C250 252 240 265 228 272 L218 276 L82 276 Z',
    distalCartilage:
      'M98 291 L202 291 L210 294 C218 298 224 304 228 310 ' +
      'L72 310 C76 304 82 298 90 294 Z',
  },
  generic: {
    // Simple ball-and-socket
    proximalBone:
      'M60 20 L60 150 C60 170 68 185 80 195 C92 205 100 218 100 235 ' +
      'C100 218 115 202 140 195 C165 188 190 195 210 210 ' +
      'L215 195 C225 185 235 170 235 150 L235 20 Z',
    distalBone:
      'M95 400 L95 310 C95 290 108 272 125 262 C142 252 155 240 160 228 ' +
      'C165 240 180 252 200 260 C218 268 230 288 230 310 L230 400 Z',
    proximalCartilage:
      'M100 235 C100 220 115 208 138 200 C162 192 185 198 206 210 ' +
      'L200 218 C182 208 162 204 142 208 C122 214 108 225 105 235 Z',
    distalCartilage:
      'M128 258 C138 248 150 240 165 236 C180 232 195 236 208 246 ' +
      'L202 254 C192 246 180 242 168 244 C156 246 146 252 138 260 Z',
  },
};

export function JointDiagram({
  jointType = 'generic',
  zones = [],
  width = 300,
  height = 400,
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: JointDiagramProps) {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const shape = JOINT_SHAPES[jointType];

  function getZoneColor(zone: JointZone): string {
    if (colorScheme === 'grayscale') return GRAYSCALE_ACTIVE;
    return zone.color ?? CLINICAL_COLORS.info;
  }

  function getZoneOpacity(zoneId: string): number {
    if (activeGrade === zoneId) return 0.6;
    if (hoveredZone === zoneId) return 0.35;
    return 0;
  }

  function handleZoneClick(zoneId: string) {
    if (interactive && onGradeSelect) {
      onGradeSelect(zoneId);
    }
  }

  function handleZoneKeyDown(e: React.KeyboardEvent, zoneId: string) {
    if ((e.key === 'Enter' || e.key === ' ') && interactive && onGradeSelect) {
      e.preventDefault();
      onGradeSelect(zoneId);
    }
  }

  const jointLabel =
    jointType === 'generic'
      ? 'Joint'
      : jointType.charAt(0).toUpperCase() + jointType.slice(1) + ' joint';

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label={`${jointLabel} diagram${zones.length > 0 ? ` with ${zones.length} zones` : ''}`}
    >
      <defs>
        <filter id="joint-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Proximal bone */}
      <path
        d={shape.proximalBone}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />

      {/* Distal bone */}
      <path
        d={shape.distalBone}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />

      {/* Proximal cartilage surface */}
      <path
        d={shape.proximalCartilage}
        fill={CARTILAGE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={0.75}
        opacity={0.8}
      />

      {/* Distal cartilage surface */}
      <path
        d={shape.distalCartilage}
        fill={CARTILAGE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={0.75}
        opacity={0.8}
      />

      {/* Joint space indicator (gap between cartilage surfaces) */}
      <line
        x1={width * 0.25}
        y1={height * 0.66}
        x2={width * 0.75}
        y2={height * 0.66}
        stroke={JOINT_SPACE}
        strokeWidth={0}
        opacity={0}
        aria-hidden="true"
      />

      {/* Interactive zones */}
      {zones.map((zone) => {
        const isActive = activeGrade === zone.id;
        const fillColor = getZoneColor(zone);
        const opacity = getZoneOpacity(zone.id);

        return (
          <g key={zone.id}>
            <path
              d={zone.path}
              fill={fillColor}
              opacity={opacity}
              stroke={isActive ? fillColor : 'transparent'}
              strokeWidth={isActive ? 1.5 : 0}
              style={{ transition: 'opacity 0.3s ease, stroke 0.3s ease' }}
              cursor={interactive ? 'pointer' : 'default'}
              onClick={() => handleZoneClick(zone.id)}
              onKeyDown={(e) => handleZoneKeyDown(e, zone.id)}
              onMouseEnter={() => interactive && setHoveredZone(zone.id)}
              onMouseLeave={() => setHoveredZone(null)}
              tabIndex={interactive ? 0 : undefined}
              role={interactive ? 'button' : undefined}
              aria-pressed={interactive ? isActive : undefined}
            >
              <title>{zone.label}</title>
            </path>

            {/* Zone label shown when active */}
            {showLabels && isActive && (
              <text
                x={width / 2}
                y={height - 10}
                textAnchor="middle"
                fill={fillColor}
                fontSize={11}
                fontFamily="system-ui, sans-serif"
                style={{ transition: 'opacity 0.3s ease' }}
                filter="url(#joint-glow)"
              >
                {zone.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
