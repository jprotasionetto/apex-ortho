import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Smartphone,
  Calculator,
  Image,
  GitBranch,
  ClipboardCheck,
  ShieldCheck,
  WifiOff,
  Star,
  Check,
  X,
  Menu,
  ArrowRight,
  Zap,
  Shield,
  Activity,
  Layers,
  Lock,
  ChevronRight,
} from 'lucide-react';
import {
  ModulesSection,
  ComparisonSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  FinalCTASection,
  Footer,
} from '@/components/landing/LandingSections.tsx';

// ============ COUNTER ANIMATION HOOK ============
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { count, ref };
}

// ============ SECTION WRAPPER ============
function Section({
  children,
  className = '',
  id = '',
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

// ============ FADE IN ANIMATION ============
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ============ PHONE MOCKUP COMPONENT ============
function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[300px] mx-auto">
      {/* Gold glow behind phone */}
      <div
        className="absolute inset-0 blur-[80px] opacity-20 rounded-full"
        style={{
          background:
            'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
        }}
      />

      {/* Phone frame */}
      <div
        className="relative rounded-[40px] p-[3px]"
        style={{
          background:
            'linear-gradient(145deg, rgba(212,175,55,0.4), rgba(212,175,55,0.1), rgba(255,255,255,0.05))',
        }}
      >
        <div className="bg-[#0A0A0A] rounded-[38px] overflow-hidden">
          {/* Notch */}
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-24 h-5 bg-[#111111] rounded-full" />
          </div>

          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-1 text-[10px] text-gray-500">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 border border-gray-500 rounded-[1px] relative">
                <div className="absolute inset-[1px] right-[2px] bg-green-500 rounded-[0.5px]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-2 pb-3">
            <div className="flex items-center gap-2 mb-3">
              <img src="/icons/icon-192.png" alt="APEX Ortho" className="w-6 h-6 rounded-md" />
              <span className="text-[11px] font-semibold tracking-wider text-white">
                APEX Ortho
              </span>
            </div>

            {/* Search bar mockup */}
            <div className="bg-[#1A1A1A] rounded-lg px-3 py-2 flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full border border-gray-600" />
              <span className="text-[10px] text-gray-600">
                Buscar classificacao...
              </span>
            </div>

            {/* Category tag */}
            <div className="flex gap-1.5 mb-3">
              <span className="text-[8px] px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                Trauma
              </span>
              <span className="text-[8px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                Coluna
              </span>
              <span className="text-[8px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                Joelho
              </span>
            </div>

            {/* Gustilo-Anderson Card */}
            <div className="bg-[#111111] rounded-xl p-3 border border-white/[0.06]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-white">
                  Gustilo-Anderson
                </span>
                <span className="text-[7px] px-1.5 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37]">
                  Classificacao
                </span>
              </div>

              {/* SVG Diagram mockup */}
              <div className="bg-[#0A0A0A] rounded-lg p-2 mb-2 relative overflow-hidden">
                {/* Bone shape */}
                <svg
                  viewBox="0 0 200 80"
                  className="w-full h-auto"
                  fill="none"
                >
                  {/* Simplified bone outline */}
                  <path
                    d="M30 25 C30 15, 40 10, 50 15 L80 25 L120 25 L150 15 C160 10, 170 15, 170 25 L170 55 C170 65, 160 70, 150 65 L120 55 L80 55 L50 65 C40 70, 30 65, 30 55 Z"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  {/* Fracture line */}
                  <path
                    d="M98 20 L102 30 L96 40 L104 50 L100 60"
                    stroke="#EF4444"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  {/* Soft tissue zone */}
                  <ellipse
                    cx="100"
                    cy="40"
                    rx="25"
                    ry="20"
                    fill="#EF4444"
                    opacity="0.08"
                  />
                  <ellipse
                    cx="100"
                    cy="40"
                    rx="25"
                    ry="20"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Grade badges */}
              <div className="flex gap-1.5">
                <div className="flex-1 py-1.5 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 text-center">
                  <span className="text-[8px] font-semibold text-[#22C55E]">
                    Grau I
                  </span>
                </div>
                <div className="flex-1 py-1.5 rounded-md bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-center">
                  <span className="text-[8px] font-semibold text-[#F59E0B]">
                    Grau II
                  </span>
                </div>
                <div className="flex-1 py-1.5 rounded-md bg-[#EF4444]/10 border border-[#EF4444]/20 text-center">
                  <span className="text-[8px] font-semibold text-[#EF4444]">
                    Grau III
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-4" />

            {/* Another card peek */}
            <div className="bg-[#111111] rounded-xl p-3 border border-white/[0.06] opacity-60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-white">
                  Garden (Colo do Femur)
                </span>
                <ChevronRight className="w-3 h-3 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-6 pb-4 pt-2 flex justify-center">
            <div className="w-28 h-1 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ DEMO TAB CONTENT ============
function DemoClassificacao() {
  return (
    <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
          <Image className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">
            Neer - Fratura Proximal do Umero
          </h4>
          <p className="text-gray-500 text-xs">Classificacao Visual</p>
        </div>
      </div>

      {/* Visual SVG mockup */}
      <div className="bg-[#0A0A0A] rounded-xl p-6 mb-4 border border-white/[0.04]">
        <svg viewBox="0 0 300 160" className="w-full h-auto" fill="none">
          {/* Humerus proximal simplified */}
          <circle
            cx="80"
            cy="50"
            r="30"
            stroke="#D4AF37"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <rect
            x="65"
            y="75"
            width="30"
            height="70"
            rx="8"
            stroke="#D4AF37"
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* Fragment lines */}
          <line
            x1="55"
            y1="60"
            x2="90"
            y2="78"
            stroke="#EF4444"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <line
            x1="70"
            y1="45"
            x2="95"
            y2="65"
            stroke="#EF4444"
            strokeWidth="1"
            strokeDasharray="4 3"
          />

          {/* Labels */}
          <text x="140" y="35" fill="#9CA3AF" fontSize="10">
            Grande Tuberosidade
          </text>
          <text x="140" y="55" fill="#9CA3AF" fontSize="10">
            Pequena Tuberosidade
          </text>
          <text x="140" y="75" fill="#9CA3AF" fontSize="10">
            Diafise
          </text>
          <text x="140" y="95" fill="#9CA3AF" fontSize="10">
            Cabeca Articular
          </text>

          {/* Dots connecting labels */}
          <circle cx="135" cy="32" r="2" fill="#D4AF37" />
          <circle cx="135" cy="52" r="2" fill="#D4AF37" />
          <circle cx="135" cy="72" r="2" fill="#D4AF37" />
          <circle cx="135" cy="92" r="2" fill="#D4AF37" />

          <line x1="95" y1="42" x2="133" y2="32" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
          <line x1="88" y1="55" x2="133" y2="52" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
          <line x1="82" y1="90" x2="133" y2="72" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
          <line x1="80" y1="48" x2="133" y2="92" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Part selection badges */}
      <div className="grid grid-cols-4 gap-2">
        {['2 partes', '3 partes', '4 partes', 'Luxacao'].map(
          (label, i) => (
            <button
              key={label}
              className={`py-2 rounded-lg text-xs font-medium transition-all ${
                i === 0
                  ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                  : 'bg-white/[0.03] text-gray-500 border border-white/[0.06] hover:border-white/10'
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  );
}

function DemoCalculadora() {
  return (
    <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-[#3B82F6]" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">
            LEFS - Lower Extremity Functional Scale
          </h4>
          <p className="text-gray-500 text-xs">Score Funcional</p>
        </div>
      </div>

      <div className="bg-[#0A0A0A] rounded-xl p-5 mb-4 border border-white/[0.04]">
        {/* Score slider mockup */}
        <div className="mb-5">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Questao 3 de 20</span>
            <span className="text-[#D4AF37]">15%</span>
          </div>
          <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="w-[15%] h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full" />
          </div>
        </div>

        <p className="text-white text-sm mb-4">
          Atividades habituais de trabalho, tarefas de casa ou escola?
        </p>

        {/* Options */}
        <div className="space-y-2">
          {[
            'Dificuldade extrema (0)',
            'Dificuldade moderada (1)',
            'Dificuldade leve (2)',
            'Pouca dificuldade (3)',
            'Nenhuma dificuldade (4)',
          ].map((opt, i) => (
            <button
              key={opt}
              className={`w-full text-left py-2.5 px-4 rounded-lg text-xs transition-all ${
                i === 2
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30'
                  : 'bg-white/[0.02] text-gray-400 border border-white/[0.06] hover:border-white/10'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Result preview */}
      <div className="flex items-center gap-3 bg-[#22C55E]/5 rounded-xl p-4 border border-[#22C55E]/10">
        <div className="text-2xl font-bold text-[#22C55E]">62</div>
        <div>
          <div className="text-xs text-[#22C55E] font-medium">
            /80 pontos
          </div>
          <div className="text-[10px] text-gray-500">
            Funcionalidade Moderada
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoAlgoritmo() {
  return (
    <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center">
          <GitBranch className="w-5 h-5 text-[#8B5CF6]" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">
            Manejo da Fratura de Tornozelo
          </h4>
          <p className="text-gray-500 text-xs">Algoritmo de Decisao</p>
        </div>
      </div>

      <div className="bg-[#0A0A0A] rounded-xl p-5 border border-white/[0.04]">
        {/* Decision tree mockup */}
        <div className="space-y-3">
          {/* Step 1 - completed */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#22C55E]" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Fratura isolada?</p>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E]">
                Sim
              </span>
            </div>
          </div>

          {/* Connector line */}
          <div className="ml-3 w-px h-3 bg-white/10" />

          {/* Step 2 - completed */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#22C55E]" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Maleolo acometido?</p>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#3B82F6]/10 text-[#3B82F6]">
                Maleolo Lateral
              </span>
            </div>
          </div>

          {/* Connector line */}
          <div className="ml-3 w-px h-3 bg-white/10" />

          {/* Step 3 - current */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5 ring-2 ring-[#D4AF37]/30">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            </div>
            <div>
              <p className="text-xs text-white font-medium">
                Classificacao de Weber?
              </p>
              <div className="flex gap-1.5 mt-2">
                {['Weber A', 'Weber B', 'Weber C'].map((opt, i) => (
                  <button
                    key={opt}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-medium transition-all ${
                      i === 1
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                        : 'bg-white/[0.03] text-gray-500 border border-white/[0.06]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Connector line */}
          <div className="ml-3 w-px h-3 bg-white/10 opacity-30" />

          {/* Step 4 - upcoming */}
          <div className="flex items-start gap-3 opacity-30">
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Estabilidade?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoScore() {
  return (
    <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center">
          <ClipboardCheck className="w-5 h-5 text-[#22C55E]" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">
            Caprini - Risco de TEV
          </h4>
          <p className="text-gray-500 text-xs">
            Score de Seguranca Perioperatoria
          </p>
        </div>
      </div>

      <div className="bg-[#0A0A0A] rounded-xl p-5 mb-4 border border-white/[0.04]">
        {/* Checklist mockup */}
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3 font-medium">
          Fatores de Risco (1 ponto cada)
        </p>
        <div className="space-y-2 mb-4">
          {[
            { label: 'Idade 41-60 anos', checked: true },
            { label: 'Cirurgia menor planejada', checked: true },
            { label: 'Varizes', checked: false },
            { label: 'Doenca inflamatoria intestinal', checked: false },
            { label: 'Edema de MMII', checked: true },
          ].map((item) => (
            <label
              key={item.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all ${
                  item.checked
                    ? 'bg-[#D4AF37] border-[#D4AF37]'
                    : 'border border-white/20 group-hover:border-white/40'
                }`}
              >
                {item.checked && (
                  <Check className="w-2.5 h-2.5 text-black" />
                )}
              </div>
              <span
                className={`text-xs ${item.checked ? 'text-white' : 'text-gray-500'}`}
              >
                {item.label}
              </span>
            </label>
          ))}
        </div>

        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3 font-medium">
          Fatores de Risco (2 pontos cada)
        </p>
        <div className="space-y-2">
          {[
            { label: 'Idade 61-74 anos', checked: false },
            { label: 'Cirurgia artroscopica', checked: true },
            { label: 'Neoplasia', checked: false },
          ].map((item) => (
            <label
              key={item.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all ${
                  item.checked
                    ? 'bg-[#D4AF37] border-[#D4AF37]'
                    : 'border border-white/20 group-hover:border-white/40'
                }`}
              >
                {item.checked && (
                  <Check className="w-2.5 h-2.5 text-black" />
                )}
              </div>
              <span
                className={`text-xs ${item.checked ? 'text-white' : 'text-gray-500'}`}
              >
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="flex items-center justify-between bg-[#F59E0B]/5 rounded-xl p-4 border border-[#F59E0B]/10">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-[#F59E0B]">5</div>
          <div>
            <div className="text-xs text-[#F59E0B] font-medium">
              Risco Alto
            </div>
            <div className="text-[10px] text-gray-500">
              Tromboprofilaxia recomendada
            </div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center">
          <Shield className="w-4 h-4 text-[#F59E0B]" />
        </div>
      </div>
    </div>
  );
}

// ============ MAIN LANDING PAGE ============
export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  const demoTabs = [
    { label: 'Classificacao', icon: Image },
    { label: 'Calculadora', icon: Calculator },
    { label: 'Algoritmo', icon: GitBranch },
    { label: 'Score', icon: ClipboardCheck },
  ];

  const demoContent = [
    <DemoClassificacao key="c" />,
    <DemoCalculadora key="calc" />,
    <DemoAlgoritmo key="a" />,
    <DemoScore key="s" />,
  ];

  // Credibility bar stat hooks
  const stat1 = useCountUp(200);
  const stat2 = useCountUp(13);
  const stat3 = useCountUp(112);
  const stat4 = useCountUp(25);

  return (
    <div
      className="min-h-screen"
      style={{
        background: '#0A0A0A',
        color: '#FFFFFF',
      }}
    >
      {/* ============================================================ */}
      {/* NAVBAR                                                        */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className="border-b"
          style={{
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5">
                <img src="/icons/icon-192.png" alt="APEX Ortho" className="w-8 h-8 rounded-lg" />
                <span
                  className="font-bold tracking-[0.15em] text-sm bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
                  }}
                >
                  APEX Ortho
                </span>
              </Link>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-8">
                {[
                  { label: 'Recursos', href: '#recursos' },
                  { label: 'Modulos', href: '#modulos' },
                  { label: 'Precos', href: '#precos' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors tracking-wider"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:flex items-center gap-4">
                <Link
                  to="/app"
                  className="px-5 py-2 rounded-lg text-sm font-semibold text-black tracking-wider transition-all hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
                  }}
                >
                  Acessar App
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-b"
              style={{
                background: 'rgba(10,10,10,0.95)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <div className="px-4 py-4 space-y-1">
                {[
                  { label: 'Recursos', href: '#recursos' },
                  { label: 'Modulos', href: '#modulos' },
                  { label: 'Precos', href: '#precos' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-all tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 px-4">
                  <Link
                    to="/app"
                    className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-black tracking-wider"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Acessar App
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ============================================================ */}
      {/* SECTION 1 - HERO                                              */}
      {/* ============================================================ */}
      <Section id="hero" className="pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 70% 30%, #D4AF37, transparent 60%)',
          }}
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left content - 55% */}
          <motion.div
            className="flex-1 lg:max-w-[55%]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs tracking-wider">
                <Zap className="w-3 h-3" />
                Ecossistema APEX Health IA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-serif leading-[1.15] tracking-wide mb-6"
            >
              <span className="text-white">
                Todas as classificacoes, scores e algoritmos da ortopedia.
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
                }}
              >
                No seu bolso. Em 3 toques.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              200+ ferramentas clinicas em 13 subespecialidades. Diagramas
              interativos de fraturas. Calculadoras com interpretacao
              automatica. Funciona offline. Feito por ortopedista, para
              ortopedistas.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                to="/app"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm tracking-wider text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
                  boxShadow: '0 0 30px rgba(212,175,55,0.3)',
                }}
              >
                COMECAR AGORA — R$ 39,90/mes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm mb-8">
              <span className="text-gray-500">ou </span>
              <Link
                to="/app"
                className="text-[#D4AF37] hover:text-[#F4D03F] underline underline-offset-4 decoration-[#D4AF37]/30 transition-colors"
              >
                R$ 599,90 acesso vitalicio (economize 15 meses)
              </Link>
            </motion.p>

            {/* Micro proof */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500"
            >
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-[#D4AF37]" />
                7 dias de garantia
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3 h-3 text-[#D4AF37]" />
                Funciona offline
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-[#D4AF37]" />
                Sem cadastro longo
              </span>
            </motion.div>
          </motion.div>

          {/* Right content - 45% Phone Mockup */}
          <motion.div
            className="flex-1 lg:max-w-[45%] flex justify-center"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* SECTION 2 - CREDIBILITY BAR                                   */}
      {/* ============================================================ */}
      <div
        className="border-t border-b py-8 sm:py-10"
        style={{
          background: '#111111',
          borderColor: 'rgba(212,175,55,0.15)',
        }}
      >
        <Section>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { num: stat1, suffix: '+', label: 'Ferramentas', icon: Layers },
              { num: stat2, suffix: '', label: 'Subespecialidades', icon: Activity },
              { num: stat3, suffix: '', label: 'Classificacoes', icon: Image },
              { num: stat4, suffix: '+', label: 'SVGs Interativos', icon: Star },
              { num: null, suffix: '', label: 'Offline', icon: WifiOff, display: '100%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <stat.icon className="w-5 h-5 text-[#D4AF37] mb-2" />
                <span
                  ref={stat.num?.ref}
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                >
                  {stat.display ?? stat.num?.count}
                  {stat.suffix}
                </span>
                <span className="text-xs text-gray-500 mt-1 tracking-wider uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </div>

      {/* ============================================================ */}
      {/* SECTION 3 - THE PROBLEM                                       */}
      {/* ============================================================ */}
      <Section id="problem" className="py-20 sm:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-xs text-[#EF4444] uppercase tracking-[0.2em] mb-4 font-medium">
              O Problema
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
              Voce ja passou por isso no plantao?
            </h2>
          </motion.div>

          {/* Problem cards */}
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {[
              {
                icon: Brain,
                title: 'O Branco na Discussao de Caso',
                description:
                  'O preceptor pergunta a classificacao da fratura. Voce sabe que estudou, mas na hora... nada. Fica aquele silencio constrangedor na frente de toda a equipe.',
                accent: '#EF4444',
              },
              {
                icon: Smartphone,
                title: 'O Malabarismo de 5 Apps',
                description:
                  'Um app para classificacoes, outro para scores, um PDF salvo no celular, o Google aberto com 12 abas. Nenhum funciona offline. Nenhum tem tudo.',
                accent: '#F59E0B',
              },
              {
                icon: Calculator,
                title: 'A Conta que Nao Fecha',
                description:
                  'Voce paga R$ 50 aqui, R$ 80 ali, mais uma assinatura de livro digital. No fim do mes sao R$ 200+ em ferramentas que voce mal usa.',
                accent: '#EF4444',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-[#111111] rounded-2xl p-6 sm:p-8 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.accent}40, transparent)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${card.accent}10` }}
                >
                  <card.icon className="w-6 h-6" style={{ color: card.accent }} />
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 tracking-wide">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Transition text */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-block relative">
              <p className="text-lg sm:text-xl text-gray-300 font-serif tracking-wide max-w-2xl mx-auto">
                E se existisse um unico app com{' '}
                <span
                  className="font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
                  }}
                >
                  TUDO
                </span>{' '}
                que voce precisa consultar na ortopedia?
              </p>
              {/* Decorative line */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ============================================================ */}
      {/* SECTION 4 - THE SOLUTION                                      */}
      {/* ============================================================ */}
      <Section id="recursos" className="py-20 sm:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-xs text-[#D4AF37] uppercase tracking-[0.2em] mb-4 font-medium">
              A Solucao
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide mb-4">
              APEX Ortho: 200+ ferramentas.
              <br className="hidden sm:block" /> 13 subespecialidades.{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
                }}
              >
                1 app.
              </span>
            </h2>
          </motion.div>

          {/* Feature grid 2x3 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: Image,
                title: 'Classificacoes Visuais',
                description:
                  'Diagramas SVG interativos com animacoes. Toque em cada grau para ver criterios, imagens e manejo. Mais de 112 classificacoes cobrindo todas as subespecialidades.',
                highlight: '112+',
              },
              {
                icon: Calculator,
                title: 'Calculadoras Inteligentes',
                description:
                  'Insira os dados e receba o resultado com interpretacao clinica automatica. Faixas de risco coloridas, alertas criticos e referencias bibliograficas integradas.',
                highlight: 'Auto',
              },
              {
                icon: GitBranch,
                title: 'Algoritmos de Decisao',
                description:
                  'Fluxogramas interativos passo-a-passo para tomada de decisao clinica. Cada caminho leva a uma recomendacao com nivel de evidencia.',
                highlight: 'Step-by-step',
              },
              {
                icon: ClipboardCheck,
                title: 'Scores Funcionais',
                description:
                  'DASH, LEFS, Harris Hip Score e dezenas de outros. Preenchimento guiado com calculo automatico e classificacao do resultado.',
                highlight: '25+',
              },
              {
                icon: ShieldCheck,
                title: 'Seguranca Perioperatoria',
                description:
                  'Caprini, ASA, Goldman, Mallampati e mais. Todos os scores de risco que voce precisa antes de levar o paciente para o centro cirurgico.',
                highlight: 'Risco',
              },
              {
                icon: WifiOff,
                title: '100% Offline',
                description:
                  'PWA com cache completo. Abra o app sem internet, no centro cirurgico, no plantao, na ambulancia. Todos os dados ficam no seu dispositivo.',
                highlight: 'PWA',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-[#111111] rounded-2xl p-6 sm:p-8 border border-white/[0.06] hover:border-[#D4AF37]/20 transition-all duration-300"
              >
                {/* Gold left border */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white font-semibold text-sm tracking-wide">
                        {feature.title}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ============================================================ */}
      {/* SECTION 5 - DEMO                                              */}
      {/* ============================================================ */}
      <Section id="modulos" className="py-20 sm:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-xs text-[#D4AF37] uppercase tracking-[0.2em] mb-4 font-medium">
              Demo Interativo
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
              Veja como funciona na pratica
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex bg-[#111111] rounded-xl p-1 border border-white/[0.06]">
              {demoTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDemo(i)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeDemo === i
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] shadow-lg shadow-[#D4AF37]/5'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Demo content */}
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {demoContent[activeDemo]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Section>

      {/* Sections 6-12 */}
      <ModulesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
