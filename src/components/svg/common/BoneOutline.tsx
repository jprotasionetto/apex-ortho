import { useState } from 'react';
import type { SVGDiagramProps } from '@/types/svg.ts';

interface BoneZone {
  id: string;
  path: string;
  label: string;
  color?: string;
}

interface BoneOutlineProps extends SVGDiagramProps {
  boneType?: 'femur' | 'tibia' | 'humerus' | 'radius' | 'ulna' | 'generic';
  zones?: BoneZone[];
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

/**
 * Simplified long bone outlines for each bone type.
 * Each path is designed for a 200x500 viewBox.
 * The shape represents: proximal metaphysis -> shaft -> distal metaphysis.
 */
const BONE_PATHS: Record<NonNullable<BoneOutlineProps['boneType']>, string> = {
  femur:
    'M70 30 C50 30 35 50 30 80 L28 90 C25 100 30 115 45 120 L48 125 C50 128 52 130 55 130 ' +
    'L55 370 C52 380 48 395 42 410 C36 425 35 440 40 455 C45 468 55 478 70 480 ' +
    'L130 480 C145 478 155 468 160 455 C165 440 164 425 158 410 C152 395 148 380 145 370 ' +
    'L145 130 C148 130 150 128 152 125 L155 120 C170 115 175 100 172 90 L170 80 ' +
    'C165 50 150 30 130 30 Z',
  tibia:
    'M55 30 C40 30 30 45 28 65 C26 80 30 95 40 105 L45 110 ' +
    'C48 112 52 115 55 118 L60 125 L60 380 ' +
    'C58 390 52 405 48 420 C42 440 40 455 45 468 C50 478 60 485 75 488 ' +
    'L125 488 C140 485 150 478 155 468 C160 455 158 440 152 420 C148 405 142 390 140 380 ' +
    'L140 125 L145 118 C148 115 152 112 155 110 L160 105 ' +
    'C170 95 174 80 172 65 C170 45 160 30 145 30 Z',
  humerus:
    'M85 25 C60 25 42 45 38 70 C34 90 36 105 42 115 L48 122 ' +
    'C52 126 55 130 58 135 L60 140 L60 365 ' +
    'C55 375 48 390 40 405 C32 420 28 438 35 455 C42 470 58 480 78 482 ' +
    'L122 482 C142 480 158 470 165 455 C172 438 168 420 160 405 C152 390 145 375 140 365 ' +
    'L140 140 L142 135 C145 130 148 126 152 122 L158 115 ' +
    'C164 105 166 90 162 70 C158 45 140 25 115 25 Z',
  radius:
    'M78 35 C65 35 55 48 52 65 C50 78 52 88 58 95 L62 100 ' +
    'C64 102 66 105 68 108 L70 115 L65 375 ' +
    'C60 388 52 400 45 415 C38 430 35 448 40 462 C46 475 60 482 80 485 ' +
    'L125 485 C142 482 152 472 155 458 C158 445 155 432 148 418 C142 405 138 392 135 375 ' +
    'L130 115 L132 108 C134 105 136 102 138 100 L142 95 ' +
    'C148 88 150 78 148 65 C145 48 135 35 122 35 Z',
  ulna:
    'M72 20 C58 20 48 30 44 48 L40 65 C36 80 34 95 38 108 ' +
    'C42 118 50 125 58 128 L62 130 L65 135 L62 380 ' +
    'C58 395 55 410 55 425 C55 442 60 458 72 468 C82 475 92 478 100 478 ' +
    'L105 478 C115 478 125 472 132 462 C140 450 142 438 140 425 C138 410 135 395 132 380 ' +
    'L130 135 L132 130 L138 128 C146 125 154 118 158 108 ' +
    'C162 95 160 80 156 65 L152 48 C148 30 138 20 125 20 Z',
  generic:
    'M70 35 C50 35 38 55 35 80 C32 100 35 115 45 125 L50 130 ' +
    'L55 140 L55 370 L50 380 L45 385 ' +
    'C35 395 32 410 35 430 C38 455 50 475 70 478 ' +
    'L130 478 C150 475 162 455 165 430 C168 410 165 395 155 385 L150 380 ' +
    'L145 370 L145 140 L150 130 L155 125 ' +
    'C165 115 168 100 165 80 C162 55 150 35 130 35 Z',
};

export function BoneOutline({
  boneType = 'generic',
  zones = [],
  width = 200,
  height = 500,
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: BoneOutlineProps) {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const bonePath = BONE_PATHS[boneType];

  function getZoneColor(zone: BoneZone): string {
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

  const boneLabel =
    boneType === 'generic'
      ? 'Long bone'
      : boneType.charAt(0).toUpperCase() + boneType.slice(1);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label={`${boneLabel} diagram${zones.length > 0 ? ` with ${zones.length} zones` : ''}`}
    >
      <defs>
        <filter id="bone-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Bone silhouette */}
      <path
        d={bonePath}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />

      {/* Medullary canal hint (dashed center line) */}
      <line
        x1={width / 2}
        y1={height * 0.28}
        x2={width / 2}
        y2={height * 0.72}
        stroke={BONE_OUTLINE}
        strokeWidth={0.5}
        strokeDasharray="4 6"
        opacity={0.3}
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
                y={height - 12}
                textAnchor="middle"
                fill={fillColor}
                fontSize={11}
                fontFamily="system-ui, sans-serif"
                style={{ transition: 'opacity 0.3s ease' }}
                filter="url(#bone-glow)"
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
