interface FractureLineOverlayProps {
  type: 'transverse' | 'oblique' | 'spiral' | 'comminuted' | 'segmental' | 'greenstick';
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  animate?: boolean;
}

const DANGER_RED = '#EF4444';

/** Stroke dasharray for a hand-drawn feel. */
const HAND_DRAWN_DASH = '3 2 6 2 2 3';

/**
 * Generates fracture line paths for each fracture type.
 * All paths are relative to a local coordinate system where
 * (0, 0) is the top-left of the fracture region.
 */
function getFractureElements(
  type: FractureLineOverlayProps['type'],
  w: number,
  h: number,
): Array<{ path: string; strokeWidth: number; dashArray?: string }> {
  const cx = w / 2;
  const cy = h / 2;

  switch (type) {
    case 'transverse': {
      // Straight horizontal line with jagged edges
      const jaggedness = h * 0.08;
      return [
        {
          path:
            `M0 ${cy - jaggedness} ` +
            `L${w * 0.15} ${cy + jaggedness} ` +
            `L${w * 0.3} ${cy - jaggedness * 0.5} ` +
            `L${w * 0.45} ${cy + jaggedness * 0.7} ` +
            `L${w * 0.55} ${cy - jaggedness * 0.3} ` +
            `L${w * 0.7} ${cy + jaggedness * 0.8} ` +
            `L${w * 0.85} ${cy - jaggedness * 0.6} ` +
            `L${w} ${cy + jaggedness * 0.4}`,
          strokeWidth: 2,
          dashArray: HAND_DRAWN_DASH,
        },
      ];
    }

    case 'oblique': {
      // Angled line at approximately 35 degrees with jagged edges
      const startY = h * 0.2;
      const endY = h * 0.8;
      const jag = w * 0.04;
      return [
        {
          path:
            `M${w * 0.1} ${startY} ` +
            `L${w * 0.25} ${startY + (endY - startY) * 0.2 + jag} ` +
            `L${w * 0.38} ${startY + (endY - startY) * 0.35 - jag} ` +
            `L${w * 0.5} ${startY + (endY - startY) * 0.5 + jag * 0.7} ` +
            `L${w * 0.62} ${startY + (endY - startY) * 0.65 - jag * 0.5} ` +
            `L${w * 0.75} ${startY + (endY - startY) * 0.8 + jag} ` +
            `L${w * 0.9} ${endY}`,
          strokeWidth: 2,
          dashArray: HAND_DRAWN_DASH,
        },
      ];
    }

    case 'spiral': {
      // S-shaped curved line wrapping around the bone
      return [
        {
          path:
            `M${w * 0.15} ${h * 0.1} ` +
            `C${w * 0.6} ${h * 0.15}, ${w * 0.8} ${h * 0.3}, ${w * 0.7} ${h * 0.45} ` +
            `C${w * 0.55} ${h * 0.55}, ${w * 0.2} ${h * 0.5}, ${w * 0.25} ${h * 0.65} ` +
            `C${w * 0.3} ${h * 0.78}, ${w * 0.65} ${h * 0.82}, ${w * 0.85} ${h * 0.9}`,
          strokeWidth: 2,
          dashArray: HAND_DRAWN_DASH,
        },
      ];
    }

    case 'comminuted': {
      // Multiple fragment lines radiating from center
      const lines: Array<{ path: string; strokeWidth: number; dashArray: string }> = [];
      const angles = [0, 45, 90, 135, 180, 225, 270, 315];
      const innerR = Math.min(w, h) * 0.08;
      const outerR = Math.min(w, h) * 0.4;

      for (const angle of angles) {
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + innerR * Math.cos(rad);
        const y1 = cy + innerR * Math.sin(rad);
        const x2 = cx + outerR * Math.cos(rad);
        const y2 = cy + outerR * Math.sin(rad);
        // Add slight randomness via control point offset
        const cpOff = outerR * 0.15;
        const cpX = (x1 + x2) / 2 + cpOff * Math.sin(rad);
        const cpY = (y1 + y2) / 2 - cpOff * Math.cos(rad);
        lines.push({
          path: `M${x1} ${y1} Q${cpX} ${cpY} ${x2} ${y2}`,
          strokeWidth: 1.5,
          dashArray: '2 2 4 2',
        });
      }

      // Central impact zone (small irregular polygon)
      const r = innerR * 1.2;
      lines.push({
        path:
          `M${cx - r} ${cy - r * 0.5} ` +
          `L${cx - r * 0.3} ${cy - r} ` +
          `L${cx + r * 0.4} ${cy - r * 0.8} ` +
          `L${cx + r} ${cy - r * 0.2} ` +
          `L${cx + r * 0.7} ${cy + r * 0.6} ` +
          `L${cx} ${cy + r} ` +
          `L${cx - r * 0.6} ${cy + r * 0.5} Z`,
        strokeWidth: 1.5,
        dashArray: HAND_DRAWN_DASH,
      });

      return lines;
    }

    case 'segmental': {
      // Two parallel transverse fracture lines
      const jag = h * 0.05;
      return [
        {
          path:
            `M0 ${h * 0.3 - jag} ` +
            `L${w * 0.2} ${h * 0.3 + jag} ` +
            `L${w * 0.4} ${h * 0.3 - jag * 0.6} ` +
            `L${w * 0.6} ${h * 0.3 + jag * 0.8} ` +
            `L${w * 0.8} ${h * 0.3 - jag * 0.4} ` +
            `L${w} ${h * 0.3 + jag * 0.5}`,
          strokeWidth: 2,
          dashArray: HAND_DRAWN_DASH,
        },
        {
          path:
            `M0 ${h * 0.7 + jag} ` +
            `L${w * 0.2} ${h * 0.7 - jag * 0.7} ` +
            `L${w * 0.4} ${h * 0.7 + jag * 0.5} ` +
            `L${w * 0.6} ${h * 0.7 - jag * 0.8} ` +
            `L${w * 0.8} ${h * 0.7 + jag * 0.6} ` +
            `L${w} ${h * 0.7 - jag * 0.3}`,
          strokeWidth: 2,
          dashArray: HAND_DRAWN_DASH,
        },
      ];
    }

    case 'greenstick': {
      // Partial/incomplete fracture: one cortex intact, other cortex broken
      // Broken cortex (left side) - full jagged line
      const jag = h * 0.06;
      return [
        {
          // Broken cortex
          path:
            `M0 ${cy - jag} ` +
            `L${w * 0.15} ${cy + jag} ` +
            `L${w * 0.3} ${cy - jag * 0.5} ` +
            `L${w * 0.45} ${cy + jag * 0.8} ` +
            `L${w * 0.55} ${cy - jag * 0.3}`,
          strokeWidth: 2,
          dashArray: HAND_DRAWN_DASH,
        },
        {
          // Intact cortex (fading/partial line, thinner)
          path:
            `M${w * 0.55} ${cy - jag * 0.3} ` +
            `L${w * 0.65} ${cy + jag * 0.2} ` +
            `L${w * 0.75} ${cy - jag * 0.15} ` +
            `L${w * 0.85} ${cy + jag * 0.1}`,
          strokeWidth: 1,
          dashArray: '2 4 1 4',
        },
      ];
    }
  }
}

export function FractureLineOverlay({
  type,
  x = 0,
  y = 0,
  width = 80,
  height = 80,
  color = DANGER_RED,
  opacity = 1,
  animate = false,
}: FractureLineOverlayProps) {
  const elements = getFractureElements(type, width, height);

  const animationId = `fracture-pulse-${type}`;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      opacity={opacity}
      role="img"
      aria-label={`${type} fracture pattern`}
    >
      {animate && (
        <defs>
          <style>
            {`
              @keyframes ${animationId} {
                0%, 100% { opacity: ${opacity}; }
                50% { opacity: ${Math.max(opacity * 0.4, 0.2)}; }
              }
              .${animationId} {
                animation: ${animationId} 2s ease-in-out infinite;
              }
            `}
          </style>
        </defs>
      )}

      {elements.map((el, i) => (
        <path
          key={i}
          d={el.path}
          fill="none"
          stroke={color}
          strokeWidth={el.strokeWidth}
          strokeDasharray={el.dashArray ?? 'none'}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animate ? animationId : undefined}
        >
          <title>{`${type} fracture line`}</title>
        </path>
      ))}
    </g>
  );
}
