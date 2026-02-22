import { useState } from 'react';
import type { SVGDiagramProps } from '@/types/svg.ts';

interface SpineZone {
  id: string;
  path: string;
  label: string;
  color?: string;
}

interface SpineSegmentProps extends SVGDiagramProps {
  view?: 'lateral' | 'ap';
  segments?: number;
  zones?: SpineZone[];
  showDiscs?: boolean;
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
const DISC_FILL = '#334155';
const DISC_OUTLINE = '#64748B';

/** Height allocated per vertebral body in the viewBox. */
const BODY_HEIGHT = 60;
/** Height allocated per intervertebral disc. */
const DISC_HEIGHT = 14;
/** Padding above and below the stack. */
const PADDING_Y = 30;

/**
 * Builds a lateral-view vertebra at a given Y offset.
 * Includes: vertebral body (rounded rect), pedicle, spinous process.
 */
function buildLateralVertebra(
  yOffset: number,
  bodyWidth: number,
  centerX: number,
): { body: string; pedicle: string; spinousProcess: string } {
  const halfW = bodyWidth / 2;
  const left = centerX - halfW;
  const right = centerX + halfW;
  const r = 6; // corner radius

  // Vertebral body as rounded rectangle
  const body =
    `M${left + r} ${yOffset} ` +
    `L${right - r} ${yOffset} Q${right} ${yOffset} ${right} ${yOffset + r} ` +
    `L${right} ${yOffset + BODY_HEIGHT - r} Q${right} ${yOffset + BODY_HEIGHT} ${right - r} ${yOffset + BODY_HEIGHT} ` +
    `L${left + r} ${yOffset + BODY_HEIGHT} Q${left} ${yOffset + BODY_HEIGHT} ${left} ${yOffset + BODY_HEIGHT - r} ` +
    `L${left} ${yOffset + r} Q${left} ${yOffset} ${left + r} ${yOffset} Z`;

  // Pedicle: short horizontal bar extending posteriorly from vertebral body
  const pedicleY = yOffset + BODY_HEIGHT * 0.35;
  const pedicleH = BODY_HEIGHT * 0.3;
  const pedicleLen = 28;
  const pedicle =
    `M${right} ${pedicleY} L${right + pedicleLen} ${pedicleY} ` +
    `L${right + pedicleLen} ${pedicleY + pedicleH} L${right} ${pedicleY + pedicleH} Z`;

  // Spinous process: angled projection from pedicle extending posteriorly and inferiorly
  const spX = right + pedicleLen;
  const spMidY = pedicleY + pedicleH / 2;
  const spinousProcess =
    `M${spX} ${spMidY - 4} L${spX + 35} ${spMidY + 15} L${spX + 32} ${spMidY + 22} L${spX} ${spMidY + 4} Z`;

  return { body, pedicle, spinousProcess };
}

/**
 * Builds an AP-view vertebra at a given Y offset.
 * Includes: vertebral body (wider rounded rect), pedicles (bilateral dots), spinous process (central dot).
 */
function buildAPVertebra(
  yOffset: number,
  bodyWidth: number,
  centerX: number,
): { body: string; pedicleLeft: string; pedicleRight: string; spinous: string } {
  const halfW = bodyWidth / 2;
  const left = centerX - halfW;
  const right = centerX + halfW;
  const r = 8;

  const body =
    `M${left + r} ${yOffset} ` +
    `L${right - r} ${yOffset} Q${right} ${yOffset} ${right} ${yOffset + r} ` +
    `L${right} ${yOffset + BODY_HEIGHT - r} Q${right} ${yOffset + BODY_HEIGHT} ${right - r} ${yOffset + BODY_HEIGHT} ` +
    `L${left + r} ${yOffset + BODY_HEIGHT} Q${left} ${yOffset + BODY_HEIGHT} ${left} ${yOffset + BODY_HEIGHT - r} ` +
    `L${left} ${yOffset + r} Q${left} ${yOffset} ${left + r} ${yOffset} Z`;

  // Pedicle circles (shown as small filled circles in AP view)
  const pCY = yOffset + BODY_HEIGHT / 2;
  const pR = 6;
  const pedicleLeft =
    `M${left + 18} ${pCY - pR} A${pR} ${pR} 0 1 1 ${left + 18} ${pCY + pR} A${pR} ${pR} 0 1 1 ${left + 18} ${pCY - pR} Z`;
  const pedicleRight =
    `M${right - 18} ${pCY - pR} A${pR} ${pR} 0 1 1 ${right - 18} ${pCY + pR} A${pR} ${pR} 0 1 1 ${right - 18} ${pCY - pR} Z`;

  // Spinous process (small circle at center, projected posteriorly)
  const spR = 4;
  const spinous =
    `M${centerX} ${pCY - spR} A${spR} ${spR} 0 1 1 ${centerX} ${pCY + spR} A${spR} ${spR} 0 1 1 ${centerX} ${pCY - spR} Z`;

  return { body, pedicleLeft, pedicleRight, spinous };
}

/**
 * Builds a disc shape (slightly narrower rounded rectangle) between vertebrae.
 */
function buildDisc(yOffset: number, discWidth: number, centerX: number): string {
  const halfW = discWidth / 2;
  const left = centerX - halfW;
  const right = centerX + halfW;
  const r = 4;

  return (
    `M${left + r} ${yOffset} ` +
    `L${right - r} ${yOffset} Q${right} ${yOffset} ${right} ${yOffset + r} ` +
    `L${right} ${yOffset + DISC_HEIGHT - r} Q${right} ${yOffset + DISC_HEIGHT} ${right - r} ${yOffset + DISC_HEIGHT} ` +
    `L${left + r} ${yOffset + DISC_HEIGHT} Q${left} ${yOffset + DISC_HEIGHT} ${left} ${yOffset + DISC_HEIGHT - r} ` +
    `L${left} ${yOffset + r} Q${left} ${yOffset} ${left + r} ${yOffset} Z`
  );
}

export function SpineSegment({
  view = 'lateral',
  segments = 3,
  zones = [],
  showDiscs = true,
  width: widthProp,
  height: heightProp,
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SpineSegmentProps) {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const clampedSegments = Math.max(1, Math.min(segments, 7));

  // Calculate viewBox dimensions based on segment count
  const totalHeight =
    PADDING_Y * 2 +
    clampedSegments * BODY_HEIGHT +
    (showDiscs ? (clampedSegments - 1) * DISC_HEIGHT : 0);

  const isLateral = view === 'lateral';
  const baseWidth = isLateral ? 250 : 200;

  const width = widthProp ?? baseWidth;
  const height = heightProp ?? totalHeight;

  const bodyWidth = isLateral ? 100 : 130;
  const discWidth = bodyWidth - 8;
  const centerX = isLateral ? width * 0.35 : width / 2;

  function getZoneColor(zone: SpineZone): string {
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

  // Build all vertebrae and discs
  const vertebrae: Array<{ y: number; index: number }> = [];
  const discs: Array<{ y: number; index: number }> = [];

  let currentY = PADDING_Y;
  for (let i = 0; i < clampedSegments; i++) {
    vertebrae.push({ y: currentY, index: i });
    currentY += BODY_HEIGHT;
    if (showDiscs && i < clampedSegments - 1) {
      discs.push({ y: currentY, index: i });
      currentY += DISC_HEIGHT;
    }
  }

  const viewLabel = isLateral ? 'Lateral' : 'AP';

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label={`${viewLabel} spine segment diagram with ${clampedSegments} vertebra${clampedSegments !== 1 ? 'e' : ''}`}
    >
      <defs>
        <filter id="spine-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Render vertebrae */}
      {vertebrae.map((v) => {
        if (isLateral) {
          const parts = buildLateralVertebra(v.y, bodyWidth, centerX);
          return (
            <g key={`vert-${v.index}`}>
              {/* Vertebral body */}
              <path
                d={parts.body}
                fill={BONE_FILL}
                stroke={BONE_OUTLINE}
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              {/* Pedicle */}
              <path
                d={parts.pedicle}
                fill={BONE_FILL}
                stroke={BONE_OUTLINE}
                strokeWidth={1}
                opacity={0.7}
              />
              {/* Spinous process */}
              <path
                d={parts.spinousProcess}
                fill={BONE_FILL}
                stroke={BONE_OUTLINE}
                strokeWidth={1}
                opacity={0.6}
              />
            </g>
          );
        } else {
          const parts = buildAPVertebra(v.y, bodyWidth, centerX);
          return (
            <g key={`vert-${v.index}`}>
              {/* Vertebral body */}
              <path
                d={parts.body}
                fill={BONE_FILL}
                stroke={BONE_OUTLINE}
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              {/* Pedicles */}
              <path d={parts.pedicleLeft} fill={BONE_OUTLINE} opacity={0.4} />
              <path d={parts.pedicleRight} fill={BONE_OUTLINE} opacity={0.4} />
              {/* Spinous process marker */}
              <path d={parts.spinous} fill={BONE_OUTLINE} opacity={0.3} />
            </g>
          );
        }
      })}

      {/* Render intervertebral discs */}
      {showDiscs &&
        discs.map((d) => (
          <path
            key={`disc-${d.index}`}
            d={buildDisc(d.y, discWidth, centerX)}
            fill={DISC_FILL}
            stroke={DISC_OUTLINE}
            strokeWidth={0.75}
            opacity={0.8}
          />
        ))}

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
                y={height - 8}
                textAnchor="middle"
                fill={fillColor}
                fontSize={11}
                fontFamily="system-ui, sans-serif"
                style={{ transition: 'opacity 0.3s ease' }}
                filter="url(#spine-glow)"
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
