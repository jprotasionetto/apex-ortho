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

interface EnnekingStage {
  id: string;
  label: string;
  category: 'benign' | 'malignant';
  description: string;
  grade: string;
  compartment: string;
  color: string;
}

const STAGES: EnnekingStage[] = [
  { id: 'benign-1', label: 'Benign 1', category: 'benign', description: 'Latent - Intracapsular', grade: 'Latent', compartment: 'Intracapsular', color: CLINICAL_COLORS.safe },
  { id: 'benign-2', label: 'Benign 2', category: 'benign', description: 'Active - Intracapsular', grade: 'Active', compartment: 'Intracapsular', color: CLINICAL_COLORS.caution },
  { id: 'benign-3', label: 'Benign 3', category: 'benign', description: 'Aggressive - Extracapsular', grade: 'Aggressive', compartment: 'Extracapsular', color: CLINICAL_COLORS.danger },
  { id: 'malignant-ia', label: 'Stage IA', category: 'malignant', description: 'Low grade, intracompartmental', grade: 'Low (G1)', compartment: 'Intra (T1)', color: CLINICAL_COLORS.caution },
  { id: 'malignant-ib', label: 'Stage IB', category: 'malignant', description: 'Low grade, extracompartmental', grade: 'Low (G1)', compartment: 'Extra (T2)', color: CLINICAL_COLORS.caution },
  { id: 'malignant-iia', label: 'Stage IIA', category: 'malignant', description: 'High grade, intracompartmental', grade: 'High (G2)', compartment: 'Intra (T1)', color: CLINICAL_COLORS.danger },
  { id: 'malignant-iib', label: 'Stage IIB', category: 'malignant', description: 'High grade, extracompartmental', grade: 'High (G2)', compartment: 'Extra (T2)', color: CLINICAL_COLORS.danger },
  { id: 'malignant-iii', label: 'Stage III', category: 'malignant', description: 'Any grade with metastasis', grade: 'Any + M1', compartment: 'Any', color: CLINICAL_COLORS.danger },
];

function TumorDiagram({
  x,
  y,
  stage,
  color,
  opacity,
  compact,
}: {
  x: number;
  y: number;
  stage: EnnekingStage;
  color: string;
  opacity: number;
  compact: boolean;
}) {
  const w = compact ? 50 : 65;
  const h = compact ? 60 : 75;
  const boneW = w * 0.5;
  const boneX = (w - boneW) / 2;

  // Tumor sizes based on stage
  const isBenign = stage.category === 'benign';
  const isIntra = stage.compartment.includes('Intra') || stage.compartment === 'Intracapsular';
  const isMetastatic = stage.id === 'malignant-iii';

  const tumorR = isBenign
    ? stage.id === 'benign-1' ? 5 : stage.id === 'benign-2' ? 7 : 10
    : isIntra ? 8 : 12;

  const tumorCx = w / 2;
  const tumorCy = h * 0.45;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Compartment boundary (soft tissue envelope) */}
      <rect
        x={boneX - 8}
        y={5}
        width={boneW + 16}
        height={h - 10}
        rx={4}
        fill="none"
        stroke={BONE_OUTLINE}
        strokeWidth={0.8}
        strokeDasharray="3 3"
        opacity={0.3}
      />

      {/* Bone cross-section */}
      <rect
        x={boneX}
        y={10}
        width={boneW}
        height={h - 20}
        rx={3}
        fill={BONE_FILL}
        stroke={BONE_OUTLINE}
        strokeWidth={1.2}
      />

      {/* Cortex lines */}
      <rect x={boneX + 2} y={12} width={2} height={h - 24} rx={1} fill={BONE_OUTLINE} opacity={0.2} />
      <rect x={boneX + boneW - 4} y={12} width={2} height={h - 24} rx={1} fill={BONE_OUTLINE} opacity={0.2} />

      {/* Medullary canal */}
      <rect x={boneX + 5} y={14} width={boneW - 10} height={h - 28} rx={2} fill={BG} opacity={0.3} />

      {/* === Tumor mass === */}
      {/* Capsule for benign tumors */}
      {isBenign && (
        <circle
          cx={tumorCx}
          cy={tumorCy}
          r={tumorR + 2}
          fill="none"
          stroke={color}
          strokeWidth={1}
          opacity={opacity * 0.4}
          strokeDasharray={stage.id === 'benign-3' ? '2 2' : 'none'}
        />
      )}

      {/* Tumor body */}
      {stage.id === 'benign-1' && (
        /* Latent: small, well-defined, within bone */
        <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.4} stroke={color} strokeWidth={1} />
      )}

      {stage.id === 'benign-2' && (
        /* Active: slightly larger, still intracapsular but more aggressive edge */
        <>
          <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.45} stroke={color} strokeWidth={1.2} />
          {/* Reactive zone (thin rim) */}
          <circle cx={tumorCx} cy={tumorCy} r={tumorR + 3} fill="none" stroke={color} strokeWidth={0.8} opacity={opacity * 0.25} />
        </>
      )}

      {stage.id === 'benign-3' && (
        /* Aggressive: extends through cortex, extracapsular */
        <>
          <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.5} stroke={color} strokeWidth={1.5} />
          {/* Cortical breakthrough */}
          <path
            d={`M${tumorCx + tumorR - 3} ${tumorCy - 4} L${tumorCx + tumorR + 6} ${tumorCy - 2} Q${tumorCx + tumorR + 10} ${tumorCy} ${tumorCx + tumorR + 6} ${tumorCy + 2} L${tumorCx + tumorR - 3} ${tumorCy + 4}`}
            fill={color}
            opacity={opacity * 0.35}
            stroke={color}
            strokeWidth={0.8}
          />
          {/* Soft tissue extension */}
          <ellipse cx={tumorCx + tumorR + 6} cy={tumorCy} rx={5} ry={4} fill={color} opacity={opacity * 0.25} />
        </>
      )}

      {stage.id === 'malignant-ia' && (
        /* Low grade intracompartmental */
        <>
          <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.5} stroke={color} strokeWidth={1.5} />
          {/* Irregular border (low grade) */}
          <circle cx={tumorCx + 2} cy={tumorCy - 1} r={tumorR - 2} fill={color} opacity={opacity * 0.2} />
        </>
      )}

      {stage.id === 'malignant-ib' && (
        /* Low grade extracompartmental */
        <>
          <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.5} stroke={color} strokeWidth={1.5} />
          {/* Extra-compartmental extension */}
          <path
            d={`M${tumorCx + tumorR - 2} ${tumorCy} Q${tumorCx + tumorR + 8} ${tumorCy - 3} ${tumorCx + tumorR + 12} ${tumorCy} Q${tumorCx + tumorR + 8} ${tumorCy + 3} ${tumorCx + tumorR - 2} ${tumorCy}`}
            fill={color}
            opacity={opacity * 0.35}
            stroke={color}
            strokeWidth={0.8}
          />
        </>
      )}

      {stage.id === 'malignant-iia' && (
        /* High grade intracompartmental */
        <>
          <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.6} stroke={color} strokeWidth={2} />
          {/* More irregular/aggressive internal pattern */}
          <path
            d={`M${tumorCx - 4} ${tumorCy - 4} L${tumorCx + 3} ${tumorCy - 2} L${tumorCx - 2} ${tumorCy + 4} L${tumorCx + 5} ${tumorCy + 2}`}
            fill="none"
            stroke={BG}
            strokeWidth={0.8}
            opacity={opacity * 0.3}
          />
        </>
      )}

      {stage.id === 'malignant-iib' && (
        /* High grade extracompartmental */
        <>
          <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.6} stroke={color} strokeWidth={2} />
          {/* Aggressive extra-compartmental extension */}
          <path
            d={`M${tumorCx + tumorR - 3} ${tumorCy - 5} Q${tumorCx + tumorR + 12} ${tumorCy} ${tumorCx + tumorR - 3} ${tumorCy + 5}`}
            fill={color}
            opacity={opacity * 0.4}
            stroke={color}
            strokeWidth={1}
          />
          <path
            d={`M${tumorCx - tumorR + 3} ${tumorCy - 3} Q${tumorCx - tumorR - 8} ${tumorCy} ${tumorCx - tumorR + 3} ${tumorCy + 3}`}
            fill={color}
            opacity={opacity * 0.3}
            stroke={color}
            strokeWidth={0.8}
          />
        </>
      )}

      {stage.id === 'malignant-iii' && (
        /* Any grade with metastasis */
        <>
          <circle cx={tumorCx} cy={tumorCy} r={tumorR} fill={color} opacity={opacity * 0.6} stroke={color} strokeWidth={2} />
          {/* Extra-compartmental */}
          <path
            d={`M${tumorCx + tumorR - 2} ${tumorCy} Q${tumorCx + tumorR + 10} ${tumorCy} ${tumorCx + tumorR + 8} ${tumorCy + 3}`}
            fill={color}
            opacity={opacity * 0.35}
            stroke={color}
            strokeWidth={0.8}
          />
          {/* Metastasis indicators (small satellite dots) */}
          <circle cx={w - 5} cy={10} r={2.5} fill={color} opacity={opacity * 0.5} stroke={color} strokeWidth={0.5} />
          <circle cx={w + 2} cy={h - 15} r={2} fill={color} opacity={opacity * 0.4} stroke={color} strokeWidth={0.5} />
          <circle cx={3} cy={15} r={2} fill={color} opacity={opacity * 0.4} stroke={color} strokeWidth={0.5} />
          {/* Metastasis arrows */}
          <path d={`M${tumorCx + tumorR} ${tumorCy - tumorR + 2} L${w - 7} 13`} fill="none" stroke={color} strokeWidth={0.6} opacity={opacity * 0.3} strokeDasharray="1 2" />
          <path d={`M${tumorCx + tumorR} ${tumorCy + tumorR - 2} L${w} ${h - 17}`} fill="none" stroke={color} strokeWidth={0.6} opacity={opacity * 0.3} strokeDasharray="1 2" />
        </>
      )}

      {/* Compartment label */}
      {!compact && (
        <text x={w / 2} y={h + 3} textAnchor="middle" fill={BONE_OUTLINE} fontSize={6} opacity={0.3} fontFamily="system-ui, sans-serif">
          {isMetastatic ? 'M1' : isIntra ? 'T1' : 'T2'}
        </text>
      )}
    </g>
  );
}

export function EnnekingSVG({
  activeGrade,
  onGradeSelect,
  interactive = false,
  showLabels = true,
  colorScheme = 'clinical',
}: SVGDiagramProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  function getColor(stage: EnnekingStage): string {
    if (colorScheme === 'grayscale') return '#94A3B8';
    return stage.color;
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

  // Layout: benign (3) on top row, malignant (5) on bottom row
  const benignStages = STAGES.filter((s) => s.category === 'benign');
  const malignantStages = STAGES.filter((s) => s.category === 'malignant');

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      role="img"
      aria-label="Enneking staging system for musculoskeletal tumors showing benign stages 1-3 and malignant stages IA through III"
    >
      <title>Enneking Staging of Musculoskeletal Tumors</title>
      <rect width="600" height="400" fill={BG} rx={8} />

      {/* Title */}
      {showLabels && (
        <text
          x={300}
          y={22}
          textAnchor="middle"
          fill={BONE_OUTLINE}
          fontSize={13}
          fontWeight={600}
          fontFamily="system-ui, sans-serif"
        >
          Enneking Staging System
        </text>
      )}

      {/* === Benign row === */}
      {showLabels && (
        <text x={15} y={52} fill={CLINICAL_COLORS.safe} fontSize={11} fontWeight={500} fontFamily="system-ui, sans-serif">
          Benign
        </text>
      )}

      {benignStages.map((stage, idx) => {
        const cellW = 180;
        const cx = 15 + idx * cellW;
        const color = getColor(stage);
        const opacity = getOpacity(stage.id);
        const isActive = activeGrade === stage.id;

        return (
          <g
            key={stage.id}
            style={{ transition: 'opacity 0.3s ease' }}
            cursor={interactive ? 'pointer' : 'default'}
            onClick={() => handleClick(stage.id)}
            onKeyDown={(e) => handleKeyDown(e, stage.id)}
            onMouseEnter={() => interactive && setHoveredGrade(stage.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            tabIndex={interactive ? 0 : undefined}
            role={interactive ? 'button' : undefined}
            aria-pressed={interactive ? isActive : undefined}
            aria-label={`${stage.label}: ${stage.description}`}
          >
            <rect
              x={cx}
              y={56}
              width={cellW - 10}
              height={120}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.1 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <TumorDiagram
              x={cx + cellW / 2 - 38}
              y={62}
              stage={stage}
              color={color}
              opacity={opacity}
              compact={false}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2 - 5}
                  y={145}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={11}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {stage.label}
                </text>
                <text
                  x={cx + cellW / 2 - 5}
                  y={160}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={8}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {stage.description}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* === Malignant row === */}
      {showLabels && (
        <text x={15} y={200} fill={CLINICAL_COLORS.danger} fontSize={11} fontWeight={500} fontFamily="system-ui, sans-serif">
          Malignant
        </text>
      )}

      {malignantStages.map((stage, idx) => {
        const cellW = 112;
        const cx = 15 + idx * cellW;
        const color = getColor(stage);
        const opacity = getOpacity(stage.id);
        const isActive = activeGrade === stage.id;

        return (
          <g
            key={stage.id}
            style={{ transition: 'opacity 0.3s ease' }}
            cursor={interactive ? 'pointer' : 'default'}
            onClick={() => handleClick(stage.id)}
            onKeyDown={(e) => handleKeyDown(e, stage.id)}
            onMouseEnter={() => interactive && setHoveredGrade(stage.id)}
            onMouseLeave={() => setHoveredGrade(null)}
            tabIndex={interactive ? 0 : undefined}
            role={interactive ? 'button' : undefined}
            aria-pressed={interactive ? isActive : undefined}
            aria-label={`${stage.label}: ${stage.description}`}
          >
            <rect
              x={cx}
              y={208}
              width={cellW - 10}
              height={120}
              rx={6}
              fill={isActive ? color : BONE_FILL}
              opacity={isActive ? 0.1 : 0.3}
              stroke={isActive ? color : BONE_OUTLINE}
              strokeWidth={isActive ? 1.5 : 0.3}
              style={{ transition: 'all 0.3s ease' }}
            />

            <TumorDiagram
              x={cx + cellW / 2 - 30}
              y={215}
              stage={stage}
              color={color}
              opacity={opacity}
              compact={true}
            />

            {showLabels && (
              <>
                <text
                  x={cx + cellW / 2 - 5}
                  y={295}
                  textAnchor="middle"
                  fill={isActive ? color : BONE_OUTLINE}
                  fontSize={10}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="system-ui, sans-serif"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {stage.label}
                </text>
                <text
                  x={cx + cellW / 2 - 5}
                  y={308}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={7}
                  opacity={0.6}
                  fontFamily="system-ui, sans-serif"
                >
                  {stage.grade}
                </text>
                <text
                  x={cx + cellW / 2 - 5}
                  y={319}
                  textAnchor="middle"
                  fill={BONE_OUTLINE}
                  fontSize={7}
                  opacity={0.5}
                  fontFamily="system-ui, sans-serif"
                >
                  {stage.compartment}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Detail panel */}
      {activeGrade && showLabels && (
        <g>
          <rect x={30} y={340} width={540} height={48} rx={6} fill={BONE_FILL} stroke={BONE_OUTLINE} strokeWidth={0.5} opacity={0.9} />
          {(() => {
            const stage = STAGES.find((s) => s.id === activeGrade);
            if (!stage) return null;
            const color = getColor(stage);
            return (
              <>
                <circle cx={48} cy={358} r={5} fill={color} opacity={0.6} />
                <text x={62} y={356} fill={color} fontSize={11} fontWeight={600} fontFamily="system-ui, sans-serif">
                  {stage.label}: {stage.description}
                </text>
                <text x={62} y={372} fill={BONE_OUTLINE} fontSize={9} opacity={0.5} fontFamily="system-ui, sans-serif">
                  Grade: {stage.grade} | Compartment: {stage.compartment}
                  {stage.id === 'malignant-iii' && ' | Distant metastases present'}
                </text>
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
}
