import { useState } from 'react';
import { hawkinsClassificationData } from '@/data/trauma/hawkins-classification.ts';
import { Alert } from '@/components/ui/Alert.tsx';

const colorMap: Record<string, string> = {
  safe: '#22C55E',
  caution: '#F59E0B',
  danger: '#EF4444',
};

// Images from MANUAL DE TRAUMA ORTOPÉDICO — Hawkins chapter (pp. 208-211)
const hawkinsImages = [
  { src: '/images/manual-trauma/page208_img1.png', alt: 'Hawkins I – Sem desvio', grade: 'hawkins-i' },
  { src: '/images/manual-trauma/page208_img2.png', alt: 'Hawkins II – Luxação subtalar', grade: 'hawkins-ii' },
  { src: '/images/manual-trauma/page208_img3.png', alt: 'Hawkins III – Subtalar + Tornozelo', grade: 'hawkins-iii' },
  { src: '/images/manual-trauma/page208_img4.png', alt: 'Hawkins IV – Três articulações', grade: 'hawkins-iv' },
  { src: '/images/manual-trauma/page208_img5.png', alt: 'Incidência de Canale e Kelly', grade: null },
  { src: '/images/manual-trauma/page208_img6.png', alt: 'Sinal de Hawkins (banda subcondral)', grade: null },
];

export default function HawkinsClassificationTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const data = hawkinsClassificationData;
  const active = selected ? data.grades.find((g) => g.id === selected) : null;

  return (
    <div className="space-y-6">
      {/* Classification images from manual */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] mb-3 font-medium uppercase tracking-wider">
          Classificação de Hawkins — Manual SBOT
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {hawkinsImages.slice(0, 4).map((img) => (
            <button
              key={img.grade || img.alt}
              onClick={() => img.grade && setSelected(img.grade === selected ? null : img.grade)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                img.grade && selected === img.grade
                  ? 'border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                  : 'border-transparent hover:border-[rgba(212,175,55,0.3)]'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-28 object-cover bg-[#0A0A0A]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
                <span className="text-xs text-white truncate block">{img.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Grade buttons */}
      <div className="grid gap-2">
        {data.grades.map((g) => (
          <button
            key={g.id}
            onClick={() => setSelected(g.id === selected ? null : g.id)}
            className={`text-left p-4 rounded-xl border transition-all ${
              selected === g.id
                ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]'
                : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,175,55,0.3)] bg-[#111111]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colorMap[g.colorCode] }} />
              <span className="font-medium text-white text-sm">{g.label}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 ml-6">{g.description}</p>
          </button>
        ))}
      </div>

      {/* Active grade detail */}
      {active && (
        <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colorMap[active.colorCode] }} />
            <h3 className="text-lg font-semibold text-white">{active.label}</h3>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Critérios Diagnósticos</h4>
            <ul className="space-y-1">
              {active.criteria.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">Tratamento</h4>
            <p className="text-sm text-gray-300">{active.treatment}</p>
          </div>
          {active.prognosis && (
            <div>
              <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">Prognóstico</h4>
              <p className="text-sm text-gray-300">{active.prognosis}</p>
            </div>
          )}
        </div>
      )}

      {/* Supplementary images: Canale view + Hawkins sign */}
      <div className="grid grid-cols-2 gap-3">
        {hawkinsImages.slice(4).map((img) => (
          <div key={img.alt} className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-36 object-cover bg-[#0A0A0A]"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="px-3 py-2">
              <p className="text-xs text-gray-400">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {data.clinicalPearl && <Alert type="info">{data.clinicalPearl}</Alert>}
      {data.pitfall && <Alert type="caution">{data.pitfall}</Alert>}
    </div>
  );
}
