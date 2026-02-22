import { useState } from 'react';
import type { SVGDiagramProps } from '@/types/svg.ts';

const CLINICAL_COLORS = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
} as const;

const BONE_OUTLINE = '#94A3B8';
const BONE_FILL = '#1E293B';
const BG = '#0F172A';
const PHYSIS_COLOR = '#60A5FA';

interface SalterHarrisType {
  id: string;
  label: string;
  description: string;
  mnemonic: string;
  color: string;
}

const TYPES: SalterHarrisType[] = [
  { id: 'type-i', label: 'Type I', description: 'Through physis only', mnemonic: 'S - Slipped', color: CLINICAL_COLORS.safe },
  { id: 'type-ii', label: 'Type II', description: 'Physis + metaphyseal fragment', mnemonic: 'A - Above', color: CLINICAL_COLORS.safe },
  { id: 'type-iii', label: 'Type III', description: 'Physis + epiphyseal fragment', mnemonic: 'L - Lower', color: CLINICAL_COLORS.caution },
  { id: 'type-iv', label: 'Type IV', description: 'Through metaphysis + physis + epiphysis', mnemonic: 'T - Through', color: CLINICAL_COLORS.danger },
  { id: 'type-v', label: 'Type V', description: 'Crush injury to physis', mnemonic: 'E - Erasure (crush)', color: CLINICAL_COLORS.danger },
];

function PhysealBone({
  x,
  y,
  typeIndex,
  color,
  opacity,
}: {
  x: number;
  y: number;
  typeIndex: number;
  color: string;
  opacity: number;
}) {
  const w = 70;
  const epiphH = 35; // Epiphysis height
  const physH = 6;   // Physis height
  const metaH = 55;  // Metaphysis height

  const physY = epiphH;
  const metaY = physY + physH;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* === Epiphysis (above physis) === */}
      <path
        d={`M5 0 Q${w / 2} -8 ${w - 5} 0 L${w - 3} ${epiphH} L3 ${epiphH} Z`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />
      {/* Articular cartilage on top */}
      <path
        d={`M5 0 Q${w / 2} -8 ${w - 5} 0`}
        fill="none"
        stroke={PHYSIS_COLOR}
        strokeWidth={2}
        opacity={0.3}
      />

      {/* === Growth Plate (Physis) === */}
      <rect
        x={3}
        y={physY}
        width={w - 6}
        height={physH}
        fill={PHYSIS_COLOR}
        opacity={0.4}
        stroke={PHYSIS_COLOR}
        strokeWidth={0.8}
        rx={1}
      />

      {/* === Metaphysis (below physis) === */}
      <path
        d={`M3 ${metaY} L8 ${metaY + metaH} Q${w / 2} ${metaY + metaH + 5} ${w - 8} ${metaY + metaH} L${w - 3} ${metaY} Z`}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.5}
      />

      {/* === Fracture patterns === */}
      {typeIndex === 0 && (
        /* Type I: Through physis only - widened physis / separation */
        <>
          {/* Widened physis with displacement */}
          <rect
            x={3}
            y={physY - 2}
            width={w - 6}
            height={physH + 4}
            fill={color}
            opacity={opacity * 0.35}
            rx={1}
          />
          {/* Separation lines */}
          <line x1={3} y1={physY} x2={w - 3} y2={physY} stroke={color} strokeWidth={2} opacity={opacity} />
          <line x1={3} y1={physY + physH} x2={w - 3} y2={physY + physH} stroke={color} strokeWidth={2} opacity={opacity} />
          {/* Displacement arrow */}
          <path d={`M${w + 5} ${physY + physH / 2 - 8} L${w + 5} ${physY + physH / 2 + 8}`} fill="none" stroke={color} strokeWidth={1} opacity={opacity * 0.5} />
          <path d={`M${w + 2} ${physY + physH / 2 - 5} L${w + 5} ${physY + physH / 2 - 8} L${w + 8} ${physY + physH / 2 - 5}`} fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.5} />
          <path d={`M${w + 2} ${physY + physH / 2 + 5} L${w + 5} ${physY + physH / 2 + 8} L${w + 8} ${physY + physH / 2 + 5}`} fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.5} />
        </>
      )}

      {typeIndex === 1 && (
        /* Type II: Through physis + metaphyseal (Thurston-Holland) fragment */
        <>
          {/* Physis fracture line */}
          <line x1={3} y1={physY + physH / 2} x2={w * 0.6} y2={physY + physH / 2} stroke={color} strokeWidth={2} opacity={opacity} />
          {/* Metaphyseal fracture line (Thurston-Holland fragment) */}
          <path
            d={`M${w * 0.6} ${physY + physH / 2} L${w * 0.7} ${metaY + 15} L${w - 3} ${metaY + 20}`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Thurston-Holland fragment highlight */}
          <path
            d={`M${w * 0.6} ${physY + physH / 2} L${w - 3} ${physY + physH / 2} L${w - 3} ${metaY + 20} L${w * 0.7} ${metaY + 15} Z`}
            fill={color}
            opacity={opacity * 0.2}
          />
          {/* Label */}
          <text x={w + 5} y={metaY + 15} fill={color} fontSize={6} opacity={opacity * 0.6} fontFamily="system-ui, sans-serif">TH</text>
        </>
      )}

      {typeIndex === 2 && (
        /* Type III: Through physis + epiphyseal fragment */
        <>
          {/* Physis fracture line */}
          <line x1={3} y1={physY + physH / 2} x2={w * 0.45} y2={physY + physH / 2} stroke={color} strokeWidth={2} opacity={opacity} />
          {/* Epiphyseal fracture line going up into epiphysis */}
          <path
            d={`M${w * 0.45} ${physY + physH / 2} L${w * 0.42} ${epiphH * 0.5} L${w * 0.38} 0`}
            fill="none"
            stroke={color}
            strokeWidth={2}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Epiphyseal fragment highlight */}
          <path
            d={`M5 0 Q15 -4 ${w * 0.38} 0 L${w * 0.42} ${epiphH * 0.5} L${w * 0.45} ${physY + physH / 2} L3 ${physY + physH / 2} L3 ${epiphH} Z`}
            fill={color}
            opacity={opacity * 0.2}
          />
        </>
      )}

      {typeIndex === 3 && (
        /* Type IV: Through metaphysis + physis + epiphysis */
        <>
          {/* Complete fracture line from metaphysis through physis into epiphysis */}
          <path
            d={`M${w * 0.55} ${metaY + 25} L${w * 0.48} ${metaY} L${w * 0.45} ${physY + physH / 2} L${w * 0.42} ${physY} L${w * 0.38} ${epiphH * 0.5} L${w * 0.35} 0`}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            opacity={opacity}
            strokeLinecap="round"
          />
          {/* Fragment highlight (epiphysis + metaphysis piece) */}
          <path
            d={`M5 0 Q15 -4 ${w * 0.35} 0 L${w * 0.38} ${epiphH * 0.5} L${w * 0.45} ${physY + physH / 2} L${w * 0.48} ${metaY} L${w * 0.55} ${metaY + 25} L8 ${metaY + 25} Z`}
            fill={color}
            opacity={opacity * 0.15}
          />
        </>
      )}

      {typeIndex === 4 && (
        /* Type V: Crush injury - compressed physis */
        <>
          {/* Compressed physis (narrowed) */}
          <rect
            x={w * 0.25}
            y={physY}
            width={w * 0.5}
            height={physH * 0.4}
            fill={color}
            opacity={opacity * 0.5}
            rx={1}
          />
          {/* Compression arrows from above and below */}
          <path d={`M${w / 2} ${physY - 15} L${w / 2} ${physY - 3}`} stroke={color} strokeWidth={1.5} opacity={opacity * 0.7} />
          <polygon points={`${w / 2 - 3},${physY - 6} ${w / 2},${physY - 1} ${w / 2 + 3},${physY - 6}`} fill={color} opacity={opacity * 0.7} />
          <path d={`M${w / 2} ${physY + physH + 15} L${w / 2} ${physY + physH + 3}`} stroke={color} strokeWidth={1.5} opacity={opacity * 0.7} />
          <polygon points={`${w / 2 - 3},${physY + physH + 6} ${w / 2},${physY + physH + 1} ${w / 2 + 3},${physY + physH + 6}`} fill={color} opacity={opacity * 0.7} />
          {/* Crushed zone */}
          <rect
            x={w * 0.2}
            y={physY - 3}
            width={w * 0.6}
            height={physH + 6}
            fill={color}
            opacity={opacity * 0.15}
            rx={2}
          />
          {/* Irregularity in physis */}
          <path
            d={`M${w * 0.25} ${physY + physH * 0.5} Q${w * 0.35} ${physY} ${w * 0.45} ${physY + physH * 0.5} Q${w * 0.55} ${physY + physH} ${w * 0.65} ${physY + physH * 0.5} Q${w * 0.72} ${physY} ${w * 0.75} ${physY + physH * 0.5}`}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            opacity={opacity * 0.6}
          />
        </>
      )}

      {/* Bone zone labels */}
      <text x={-8} y={epiphH / 2 + 3} fill={BONE_OUTLINE} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif" textAnchor="end">Epi</text>
      <text x={-8} y={physY + physH / 2 + 2} fill={PHYSIS_COLOR} fontSize={7} opacity={0.5} fontFamily="system-ui, sans-serif" textAnchor="end">Physis</text>
      <text x={-8} y={metaY + metaH / 2} fill={BONE_OUTLINE} fontSize={7} opacity={0.4} fontFamily="system-ui, sans-serif" textAnchor="end">Meta</text>
    </g>
  );
}

export function SalterHarrisSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(type: SalterHarrisType): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return type.color;
  }

  function getOpacity(id: string): number {
    if (activeGrade === id) return 1;
    if (hoveredGrade === id) return 0.7;
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

  const cellW = 112;
  const startX = 15;
  const segY = 75;

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Salter-Harris classification of physeal fractures showing Types I through V with SALTER mnemonic"
    >
      <title>Salter-Harris Classification of Physeal Fractures</title>
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
          Salter-Harris Classification of Physeal Fractures
        </text>
      )}

      {/* SALTER mnemonic */}
      {showLabels && (
        <text
          x={300}
          y={48}
          textAnchor="middle"
          fill={PHYSIS_COLOR}
          fontSize={10}
          opacity={0.5}
          fontFamily="system-ui, sans-serif"
        >
          Mnemonic: S-A-L-T-E-R
        </text>
      )}

      {TYPES.map((type, idx) => {
        const cx = startX + idx * cellW;
        const color = getColor(type);
        const opacity = getOpacity(type.id);
        const isActive = activeGrade === type.id;

        return (
          <g
            key={type.id}
            style={{ transition: 'opacity 0.3s ease' }}
            cursor={interactive ? 'pointer' : 'default'}
            onClick={() => handleClick(type.id)}
            onKeyDown={(e) => handleKeyDown(e, type.id)}
            onMouseEnter={() => interactive && setHoveredGrade(type.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            tabIndex={interactive ? 0 : undefined}
            role={interactive ? 'button' : undefined}
            aria-pressed={interactive ? isActive : undefined}
            aria-label={`${type.label}: ${type.description} (${type.mnemonic})`}
          >
            {/* Background card */}
            <rect
              x={cx + 5}
              y={segY - 20}
              width={cellW - 10}
              height={175}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.08 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <PhysealBone
              x={cx + 28}
              y={segY}
              typeIndex={idx}
              color={color}
              opacity={opacity}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2}
                  y={segY + 115}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={12}
                  fontWeight={isActive ? 700 : 500}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {type.label}
                </text>
                <text
                  x={cx + cellW / 2}
                  y={segY + 130}
                  textAnchor="middle"
                  fill={color}
                  fontSize={8}
                  opacity={isActive ? 0.9 : 0.5}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.mnemonic}
                </text>
                <text
                  x={cx + cellW / 2}
                  y={segY + 145}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={7}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {type.description.length > 25 ? type.description.substring(0, 23) + '...' : type.description}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Detail panel */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={295} width={540} height={88} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const type = TYPES.find((t) => t.id === activeGrade);
            if (!type) return null;
            const color = getColor(type);
            return (
              <>
                <circle cx={50} cy={320} r={6} fill={color} opacity={0.6} />
                <text x={65} y={324} fill={color} fontSize={13} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {type.label} ({type.mnemonic})
                </text>
                <text x={65} y={344} fill={BONE_OUTLINE} fontSize={10} fontFamily="system-ui, sans-serif">
                  {type.description}
                </text>
                <text x={65} y={362} fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
                  {type.id === 'type-i' && 'Fracture runs entirely through the physis. X-ray may appear normal. Most common in younger children.'}
                  {type.id === 'type-ii' && 'Most common type (75%). Thurston-Holland metaphyseal fragment. Good prognosis.'}
                  {type.id === 'type-iii' && 'Intra-articular fracture through epiphysis and physis. Requires anatomic reduction.'}
                  {type.id === 'type-iv' && 'Fracture crosses all 3 zones. Highest risk of growth arrest if not anatomically reduced.'}
                  {type.id === 'type-v' && 'Compression/crush of growth plate. Often diagnosed retrospectively. Poor prognosis for growth.'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
