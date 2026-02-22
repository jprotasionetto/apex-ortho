import { useState } from 'react';

const GEHWEILER_TYPES = [
  {
    id: 'I',
    label: 'Tipo I — Fratura do arco anterior',
    description: 'Fratura isolada do arco anterior de C1. Mecanismo de hiperextensão. Ligamento transverso intacto.',
    stability: 'stable',
    treatment: 'Colar cervical rígido por 8–12 semanas. Sem cirurgia.',
    criteria: [
      'Fratura do tubérculo anterior do atlas',
      'Ligamento transverso íntegro',
      'Sem expansão lateral das massas laterais',
      'Regra de Spence negativa',
    ],
  },
  {
    id: 'II',
    label: 'Tipo II — Fratura do arco posterior',
    description: 'Fratura bilateral do arco posterior de C1. Mecanismo de hiperextensão com compressão axial.',
    stability: 'stable',
    treatment: 'Colar cervical rígido por 8–12 semanas. Geralmente estável.',
    criteria: [
      'Fratura bilateral do arco posterior',
      'Pode estar associada à fratura de C2',
      'Ligamento transverso geralmente intacto',
      'Monitorizar com TC seriada',
    ],
  },
  {
    id: 'III',
    label: 'Tipo III — Fratura de massa lateral',
    description: 'Fratura de uma única massa lateral. Compressão unilateral. Potencial instabilidade dependendo da lesão ligamentar.',
    stability: 'caution',
    treatment: 'Avaliação ligamentar obrigatória. Colar rígido se estável; halo ou cirurgia se instável.',
    criteria: [
      'Fratura da massa lateral unilateral',
      'Afastamento unilateral na incidência transoral',
      'Avaliar integridade do ligamento transverso',
      'RM para avaliação ligamentar',
    ],
  },
  {
    id: 'IV',
    label: 'Tipo IV — Fratura de Jefferson (burst)',
    description: 'Fratura clássica por explosão com 2 ou 4 fragmentos. Expansão bilateral das massas laterais. Estabilidade determinada pela Regra de Spence.',
    stability: 'caution',
    treatment: 'Se Spence < 6,9 mm: halo por 12 semanas. Se Spence ≥ 6,9 mm (ruptura do transverso): cirurgia C1–C2.',
    criteria: [
      'Fraturas em 4 pontos do anel de C1',
      'Expansão bilateral das massas laterais',
      'Regra de Spence: soma dos desvios laterais ≥ 6,9 mm = instável',
      'Mecanismo de carga axial pura',
    ],
  },
  {
    id: 'V',
    label: 'Tipo V — Fratura com avulsão do ligamento transverso',
    description: 'Avulsão óssea do tubérculo do ligamento transverso. Instável por definição. Equivale à ruptura do transverso.',
    stability: 'danger',
    treatment: 'Instável por definição. Cirurgia indicada: fusão C1–C2 (Harms ou Gallie/Brooks). Considerar C0–C2 se instabilidade occipitocervical associada.',
    criteria: [
      'Fratura por avulsão da inserção do ligamento transverso',
      'Fragmento ósseo na face interna da massa lateral',
      'Instabilidade atlantoaxial associada',
      'Cirurgia obrigatória',
    ],
  },
];

const colorMap: Record<string, string> = {
  stable: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
};

const stabilityLabel: Record<string, string> = {
  stable: 'Estável',
  caution: 'Avaliar',
  danger: 'Instável',
};

export default function AtlasFractureGuideTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? GEHWEILER_TYPES.find((t) => t.id === selected) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-1">
          Fratura do Atlas (C1) — Manual SBOT (p. 224)
        </p>
        <p className="text-xs text-gray-500">
          Classificação de Gehweiler (I–V) · Regra de Spence · Avaliação do ligamento transverso · Indicações cirúrgicas
        </p>
      </div>

      {/* Manual image */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Manual SBOT — Imagem de Referência
        </p>
        <div className="max-w-sm mx-auto">
          <div className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]">
            <img
              src="/images/manual-trauma/page224_img1.png"
              alt="Fraturas do atlas — ligamento transverso (Figura 1, p. 224)"
              className="w-full h-auto object-contain"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
            />
            <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">
              Figura 1 — Fraturas do atlas, ligamento transverso (p. 224)
            </p>
          </div>
        </div>
      </div>

      {/* Regra de Spence */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
          Regra de Spence — Integridade do Ligamento Transverso
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)]">
            <div className="w-3 h-3 rounded-full bg-[#22C55E] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">Soma dos desvios &lt; 6,9 mm → Ligamento intacto (estável)</p>
              <p className="text-xs text-gray-400 mt-0.5">Tratamento conservador com colar ou halo</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)]">
            <div className="w-3 h-3 rounded-full bg-[#EF4444] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">Soma dos desvios ≥ 6,9 mm → Ruptura do transverso (instável)</p>
              <p className="text-xs text-gray-400 mt-0.5">Indicação cirúrgica: fusão C1–C2 ou C0–C2</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Medição na incidência transoral (boca aberta): soma do desvio lateral da massa lateral direita + esquerda em relação às facetas de C2.
            Atenção: RM é mais confiável que a Regra de Spence isolada para avaliação do ligamento transverso.
          </p>
        </div>
      </div>

      {/* Gehweiler classification */}
      <div>
        <h3 className="text-sm font-semibold text-white px-1 mb-2">Classificação de Gehweiler (I–V)</h3>
        <div className="grid gap-2">
          {GEHWEILER_TYPES.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id === selected ? null : t.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selected === t.id
                  ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]'
                  : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,175,55,0.3)] bg-[#111111]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colorMap[t.stability] }}
                  />
                  <span className="font-medium text-white text-sm">{t.label}</span>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    color: colorMap[t.stability],
                    backgroundColor: `${colorMap[t.stability]}18`,
                    border: `1px solid ${colorMap[t.stability]}40`,
                  }}
                >
                  {stabilityLabel[t.stability]}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1 ml-6">{t.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Selected type details */}
      {active && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: colorMap[active.stability] }}
            />
            <h3 className="text-lg font-semibold text-white">{active.label}</h3>
          </div>
          <p className="text-sm text-gray-300 ml-7">{active.description}</p>

          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              Critérios Diagnósticos
            </h4>
            <ul className="space-y-1">
              {active.criteria.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.15)]">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
              Conduta / Tratamento
            </h4>
            <p className="text-sm text-gray-300">{active.treatment}</p>
          </div>
        </div>
      )}

      {/* Surgical indications summary */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4 space-y-3">
        <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
          Indicações Cirúrgicas — Fusão Cervical
        </h3>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex gap-2">
            <span className="text-[#D4AF37] flex-shrink-0">•</span>
            <span><span className="text-white font-medium">Fusão C1–C2 (Harms ou Gallie/Brooks):</span> Instabilidade atlantoaxial isolada — ruptura do ligamento transverso (Gehweiler V ou Spence ≥ 6,9 mm)</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#D4AF37] flex-shrink-0">•</span>
            <span><span className="text-white font-medium">Fusão C0–C2 (occipitoatlantaxial):</span> Instabilidade occipitocervical associada, falha de fusão C1–C2, lesão condiliana occipital concomitante</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#D4AF37] flex-shrink-0">•</span>
            <span><span className="text-white font-medium">Halo vest:</span> Fraturas instáveis sem indicação cirúrgica imediata — Gehweiler IV com Spence &lt; 6,9 mm, ou lesão incompleta do ligamento transverso</span>
          </div>
        </div>
      </div>

      {/* Clinical pearls */}
      <div className="p-4 rounded-xl bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)]">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Pérola Clínica</p>
        <p className="text-sm text-gray-300">
          A Regra de Spence tem limitações: estudos cadavéricos mostram sensibilidade de apenas ~50% para ruptura do ligamento transverso.
          A RM ponderada em T2 é o método mais confiável para avaliar a integridade do ligamento transverso.
          Sempre solicitar RM em fraturas de Jefferson/Gehweiler IV–V.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)]">
        <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Atenção</p>
        <p className="text-sm text-gray-300">
          Fratura do atlas isolada raramente causa déficit neurológico (anel de C1 é largo — lei de Steel).
          Sempre avaliar lesões associadas: 50% das fraturas de C1 têm lesão concomitante em C2 (odontoide ou hangman).
          Realizar TC de coluna cervical completa.
        </p>
      </div>
    </div>
  );
}
