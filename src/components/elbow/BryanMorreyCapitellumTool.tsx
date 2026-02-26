import { useState } from 'react';
import { bryanMorreyCapitellumData } from '@/data/elbow/bryan-morrey-capitellum.ts';
import { dubberleyCapitellumData } from '@/data/elbow/dubberley-capitellum.ts';
import { Alert } from '@/components/ui/Alert.tsx';
import type { ClassificationGrade } from '@/types/classification.ts';

// ─── helpers ────────────────────────────────────────────────────────────────

const colorDot: Record<ClassificationGrade['colorCode'], string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

const colorBadge: Record<ClassificationGrade['colorCode'], string> = {
  safe: 'bg-green-500/15 text-green-300 border-green-500/30',
  caution: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  danger: 'bg-red-500/15 text-red-300 border-red-500/30',
  info: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
};

const colorBadgeLabel: Record<ClassificationGrade['colorCode'], string> = {
  safe: 'Boa indicação',
  caution: 'Atenção',
  danger: 'Alta complexidade',
  info: 'Informativo',
};

// ─── Dubberley grid ─────────────────────────────────────────────────────────

interface DubberleyRow {
  type: string;
  labelA: string;
  labelB: string;
  descA: string;
  descB: string;
  colorA: ClassificationGrade['colorCode'];
  colorB: ClassificationGrade['colorCode'];
}

const dubberleyRows: DubberleyRow[] = [
  {
    type: 'Tipo 1',
    labelA: '1A',
    labelB: '1B',
    descA: 'Capitelo isolado — sem cominuição',
    descB: 'Capitelo isolado — com cominuição',
    colorA: 'safe',
    colorB: 'caution',
  },
  {
    type: 'Tipo 2',
    labelA: '2A',
    labelB: '2B',
    descA: 'Capitelo + tróclea lateral — sem cominuição',
    descB: 'Capitelo + tróclea lateral — com cominuição',
    colorA: 'caution',
    colorB: 'danger',
  },
  {
    type: 'Tipo 3',
    labelA: '3A',
    labelB: '3B',
    descA: 'Capitelo + tróclea completa — sem cominuição',
    descB: 'Capitelo + tróclea completa — com cominuição',
    colorA: 'danger',
    colorB: 'danger',
  },
];

// ─── component ──────────────────────────────────────────────────────────────

export default function BryanMorreyCapitellumTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected
    ? bryanMorreyCapitellumData.grades.find((g) => g.id === selected)
    : null;

  return (
    <div className="space-y-6">

      {/* ── Manual SBOT images ─────────────────────────────────────────── */}
      <div className="pt-2 pb-4 border-b border-[rgba(212,175,55,0.15)]">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">
          Manual SBOT — Imagens de Referência
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: '/images/manual-trauma/capitellum_overview.png', alt: 'Fratura do capitelo — visão geral' },
            { src: '/images/manual-trauma/capitellum_bryan_morrey.png', alt: 'Bryan-Morrey tipos I–IV' },
            { src: '/images/manual-trauma/capitellum_dubberley.png', alt: 'Dubberley tipos 1–3 A/B' },
            { src: '/images/manual-trauma/capitellum_fixation.png', alt: 'RAFI — parafusos sem cabeça' },
          ].map((img, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                }}
              />
              <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Context / epidemiology block ───────────────────────────────── */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-3">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
          Contexto Clínico
        </p>
        {bryanMorreyCapitellumData.epidemiology && (
          <div>
            <p className="text-xs text-slate-400 font-medium mb-0.5">Epidemiologia</p>
            <p className="text-sm text-slate-300">{bryanMorreyCapitellumData.epidemiology}</p>
          </div>
        )}
        {bryanMorreyCapitellumData.mechanism && (
          <div>
            <p className="text-xs text-slate-400 font-medium mb-0.5">Mecanismo</p>
            <p className="text-sm text-slate-300">{bryanMorreyCapitellumData.mechanism}</p>
          </div>
        )}
        {bryanMorreyCapitellumData.surgicalBasis && (
          <div>
            <p className="text-xs text-slate-400 font-medium mb-0.5">Base Cirúrgica</p>
            <p className="text-sm text-slate-300">{bryanMorreyCapitellumData.surgicalBasis}</p>
          </div>
        )}
      </div>

      {/* ── Bryan-Morrey selector ──────────────────────────────────────── */}
      <div>
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">
          Classificação de Bryan-Morrey (1985)
        </p>
        <div className="grid gap-2">
          {bryanMorreyCapitellumData.grades.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelected(selected === g.id ? null : g.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selected === g.id
                  ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]'
                  : 'border-slate-700 hover:border-slate-600 bg-[#111111]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: colorDot[g.colorCode] }}
                  />
                  <span className="font-medium text-slate-100">{g.label}</span>
                </div>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded border uppercase tracking-wide shrink-0 ${colorBadge[g.colorCode]}`}
                >
                  {colorBadgeLabel[g.colorCode]}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1 pl-6">{g.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* ── Detail card for selected Bryan-Morrey grade ────────────────── */}
      {active && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.25)] rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: colorDot[active.colorCode] }}
            />
            <h3 className="text-lg font-semibold text-slate-100">{active.label}</h3>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">
              Critérios Diagnósticos
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {active.criteria.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-1">
              Tratamento
            </h4>
            <p className="text-sm text-slate-300">{active.treatment}</p>
          </div>

          {active.prognosis && (
            <div>
              <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-1">
                Prognóstico
              </h4>
              <p className="text-sm text-slate-300">{active.prognosis}</p>
            </div>
          )}
        </div>
      )}

      {/* ── Dubberley section ──────────────────────────────────────────── */}
      <div>
        <div className="mb-3">
          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            Classificação de Dubberley (2006) — Estratificação por Envolvimento Troclear
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Acrescenta envolvimento troclear e cominuição posterior à classificação de Bryan-Morrey.
            Sufixo A = sem cominuição posterior · Sufixo B = com cominuição posterior.
          </p>
        </div>

        {/* Grid table */}
        <div className="rounded-xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#0A0A0A] border-b border-slate-700">
            <div className="p-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              Tipo
            </div>
            <div className="p-3 text-xs font-semibold text-slate-400 uppercase tracking-wide border-l border-slate-700">
              A — Sem cominuição
            </div>
            <div className="p-3 text-xs font-semibold text-slate-400 uppercase tracking-wide border-l border-slate-700">
              B — Com cominuição
            </div>
          </div>

          {dubberleyRows.map((row, idx) => (
            <div
              key={row.type}
              className={`grid grid-cols-3 ${idx < dubberleyRows.length - 1 ? 'border-b border-slate-700/60' : ''}`}
            >
              {/* Type label */}
              <div className="p-3 flex items-center">
                <span className="text-sm font-semibold text-slate-200">{row.type}</span>
              </div>

              {/* A column */}
              <div className="p-3 border-l border-slate-700/60">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: colorDot[row.colorA] }}
                  />
                  <span className="text-xs font-bold text-slate-100">{row.labelA}</span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">{row.descA}</p>
              </div>

              {/* B column */}
              <div className="p-3 border-l border-slate-700/60">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: colorDot[row.colorB] }}
                  />
                  <span className="text-xs font-bold text-slate-100">{row.labelB}</span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">{row.descB}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dubberley surgical basis note */}
        {dubberleyCapitellumData.surgicalBasis && (
          <p className="text-xs text-slate-500 mt-2 px-1">
            <span className="text-slate-400 font-medium">Técnica: </span>
            {dubberleyCapitellumData.surgicalBasis}
          </p>
        )}
      </div>

      {/* ── Clinical pearls & pitfalls ─────────────────────────────────── */}
      {bryanMorreyCapitellumData.clinicalPearl && (
        <Alert type="info">{bryanMorreyCapitellumData.clinicalPearl}</Alert>
      )}
      {bryanMorreyCapitellumData.pitfall && (
        <Alert type="caution">{bryanMorreyCapitellumData.pitfall}</Alert>
      )}

      {/* ── Dubberley pearl ───────────────────────────────────────────── */}
      {dubberleyCapitellumData.clinicalPearl && (
        <Alert type="info">{dubberleyCapitellumData.clinicalPearl}</Alert>
      )}
      {dubberleyCapitellumData.pitfall && (
        <Alert type="caution">{dubberleyCapitellumData.pitfall}</Alert>
      )}

    </div>
  );
}
