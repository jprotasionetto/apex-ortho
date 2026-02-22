import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  Star,
  Shield,
  ArrowRight,
  Zap,
  Crown,
  Quote,
} from 'lucide-react';

/* ─────────────── animation variants ─────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ─────────────── shared helpers ─────────────── */

function SectionWrapper({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="flex justify-center mb-4">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[rgba(212,175,55,0.1)] text-[#D4AF37] border border-[rgba(212,175,55,0.2)]">
        {children}
      </span>
    </motion.div>
  );
}

function SectionHeadline({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      variants={fadeInUp}
      className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4 ${className}`}
    >
      {children}
    </motion.h2>
  );
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={fadeInUp}
      className="text-center text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-16"
    >
      {children}
    </motion.p>
  );
}

function GoldDivider() {
  return (
    <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2" />
  );
}

/* ============================================================
   SECTION 6 — ModulesSection
   ============================================================ */

const MODULES = [
  {
    name: 'Trauma Ortopédico',
    color: '#EF4444',
    tools: 18,
    examples: ['Gustilo-Anderson', 'ISS', 'MESS'],
  },
  {
    name: 'Ombro',
    color: '#3B82F6',
    tools: 14,
    examples: ['Neer', 'Rockwood', 'Constant-Murley'],
  },
  {
    name: 'Cotovelo',
    color: '#8B5CF6',
    tools: 10,
    examples: ['Mason', 'Gartland', 'MEPI'],
  },
  {
    name: 'Mão e Punho',
    color: '#EC4899',
    tools: 12,
    examples: ['Herbert', 'Fernandez', 'DASH'],
  },
  {
    name: 'Quadril',
    color: '#F97316',
    tools: 14,
    examples: ['Garden', 'Pauwels', 'Harris Hip Score'],
  },
  {
    name: 'Joelho',
    color: '#10B981',
    tools: 16,
    examples: ['Schatzker', 'Dejour', 'KOOS'],
  },
  {
    name: 'Coluna Vertebral',
    color: '#6366F1',
    tools: 16,
    examples: ['TLICS', 'SLICS', 'ODI'],
  },
  {
    name: 'Pé e Tornozelo',
    color: '#14B8A6',
    tools: 12,
    examples: ['Weber', 'Sanders', 'Hawkins'],
  },
  {
    name: 'Tumor Ósseo',
    color: '#78716C',
    tools: 9,
    examples: ['Enneking', 'Mirels', 'Tokuhashi'],
  },
  {
    name: 'Ortopedia Pediátrica',
    color: '#F59E0B',
    tools: 14,
    examples: ['Salter-Harris', 'Herring', 'Ponseti'],
  },
  {
    name: 'Reconstrução Óssea',
    color: '#84CC16',
    tools: 8,
    examples: ['Weber-Cech', 'Masquelet', 'CORA'],
  },
  {
    name: 'Medicina Esportiva',
    color: '#06B6D4',
    tools: 9,
    examples: ['Munich', 'SCAT6', 'VISA-A'],
  },
  {
    name: 'Ferramentas Universais',
    color: '#64748B',
    tools: 15,
    examples: ['Caprini', 'Wells', 'ASA'],
  },
];

export function ModulesSection() {
  return (
    <SectionWrapper id="modulos">
      <div className="max-w-7xl mx-auto">
        <SectionBadge>Stack Completo</SectionBadge>
        <SectionHeadline>
          13 subespecialidades.{' '}
          <span className="text-[#D4AF37]">Uma biblioteca clínica completa.</span>
        </SectionHeadline>
        <GoldDivider />
        <SectionSub>
          Cada módulo reúne classificações, scores e algoritmos da subespecialidade — com diagramas
          interativos e conteúdo em português.
        </SectionSub>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {MODULES.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl p-5 bg-[#111111] border border-[rgba(255,255,255,0.06)] transition-colors duration-300 cursor-default"
              style={
                {
                  '--module-color': m.color,
                } as React.CSSProperties
              }
            >
              {/* hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${m.color}`,
                }}
              />

              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{
                    backgroundColor: `${m.color}18`,
                    color: m.color,
                  }}
                >
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {m.name}
                  </h3>
                  <span
                    className="text-xs font-medium"
                    style={{ color: m.color }}
                  >
                    {m.tools} ferramentas
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {m.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-[11px] text-[#6B7280] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 rounded-md"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom stat */}
        <motion.div
          variants={fadeInUp}
          className="mt-14 text-center"
        >
          <p className="font-mono text-lg sm:text-xl tracking-wide">
            <span className="text-[#D4AF37] font-semibold">167</span>
            <span className="text-[#6B7280]"> ferramentas &middot; </span>
            <span className="text-[#D4AF37] font-semibold">0</span>
            <span className="text-[#6B7280]"> dependência de internet &middot; </span>
            <span className="text-[#D4AF37] font-semibold">&infin;</span>
            <span className="text-[#6B7280]"> consultas</span>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   SECTION 7 — ComparisonSection
   ============================================================ */

type FeatureVal = boolean | string;

interface CompRow {
  feature: string;
  orthobullets: FeatureVal;
  aoRef: FeatureVal;
  orthoRef: FeatureVal;
  mdCalc: FeatureVal;
  apex: FeatureVal;
}

const COMPARISON_ROWS: CompRow[] = [
  {
    feature: 'Classificações visuais',
    orthobullets: true,
    aoRef: true,
    orthoRef: true,
    mdCalc: false,
    apex: true,
  },
  {
    feature: 'Calculadoras / Scores',
    orthobullets: false,
    aoRef: false,
    orthoRef: false,
    mdCalc: true,
    apex: true,
  },
  {
    feature: 'Algoritmos de decisão',
    orthobullets: false,
    aoRef: true,
    orthoRef: false,
    mdCalc: false,
    apex: true,
  },
  {
    feature: 'Scores funcionais',
    orthobullets: false,
    aoRef: false,
    orthoRef: false,
    mdCalc: true,
    apex: true,
  },
  {
    feature: 'Segurança perioperatória',
    orthobullets: false,
    aoRef: false,
    orthoRef: false,
    mdCalc: true,
    apex: true,
  },
  {
    feature: 'Funciona offline',
    orthobullets: false,
    aoRef: false,
    orthoRef: false,
    mdCalc: false,
    apex: true,
  },
  {
    feature: 'Conteúdo em português',
    orthobullets: false,
    aoRef: false,
    orthoRef: false,
    mdCalc: false,
    apex: true,
  },
  {
    feature: 'Preço',
    orthobullets: '~R$900/ano',
    aoRef: 'Grátis',
    orthoRef: 'Grátis',
    mdCalc: 'Grátis',
    apex: 'R$599,90 vitalício',
  },
];

const COMP_COLS = [
  { key: 'orthobullets' as const, label: 'Orthobullets' },
  { key: 'aoRef' as const, label: 'AO Reference' },
  { key: 'orthoRef' as const, label: 'OrthoRef' },
  { key: 'mdCalc' as const, label: 'MDCalc' },
  { key: 'apex' as const, label: 'APEX Ortho' },
];

function CellVal({ val, isApex }: { val: FeatureVal; isApex: boolean }) {
  if (typeof val === 'string') {
    return (
      <span
        className={`text-xs sm:text-sm font-medium ${
          isApex ? 'text-[#D4AF37]' : 'text-[#9CA3AF]'
        }`}
      >
        {val}
      </span>
    );
  }
  if (val) {
    return <Check className="w-5 h-5 text-[#22C55E] mx-auto" />;
  }
  return <X className="w-5 h-5 text-[#EF4444]/40 mx-auto" />;
}

export function ComparisonSection() {
  return (
    <SectionWrapper id="comparacao">
      <div className="max-w-6xl mx-auto">
        <SectionBadge>Comparativo</SectionBadge>
        <SectionHeadline>
          Compare e <span className="text-[#D4AF37]">decida</span>
        </SectionHeadline>
        <GoldDivider />
        <div className="mb-16" />

        {/* table scroll container */}
        <motion.div variants={fadeInUp} className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[700px]">
            {/* header row */}
            <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] gap-px mb-1">
              <div className="p-3" />
              {COMP_COLS.map((c) => (
                <div
                  key={c.key}
                  className={`p-3 text-center text-xs sm:text-sm font-semibold rounded-t-xl ${
                    c.key === 'apex'
                      ? 'bg-[rgba(212,175,55,0.12)] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] border-b-0 relative'
                      : 'text-[#9CA3AF]'
                  }`}
                >
                  {c.key === 'apex' && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider uppercase bg-[#D4AF37] text-[#0A0A0A] px-3 py-0.5 rounded-full whitespace-nowrap">
                      Mais completo
                    </span>
                  )}
                  {c.label}
                </div>
              ))}
            </div>

            {/* body rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1.6fr_repeat(5,1fr)] gap-px ${
                  i % 2 === 0 ? 'bg-[rgba(255,255,255,0.02)]' : ''
                }`}
              >
                <div className="p-3 text-sm text-[#9CA3AF] flex items-center">
                  {row.feature}
                </div>
                {COMP_COLS.map((c) => (
                  <div
                    key={c.key}
                    className={`p-3 flex items-center justify-center ${
                      c.key === 'apex'
                        ? 'bg-[rgba(212,175,55,0.06)] border-x border-[rgba(212,175,55,0.15)]'
                        : ''
                    } ${
                      c.key === 'apex' && i === COMPARISON_ROWS.length - 1
                        ? 'border-b border-[rgba(212,175,55,0.15)] rounded-b-xl'
                        : ''
                    }`}
                  >
                    <CellVal val={row[c.key]} isApex={c.key === 'apex'} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* bottom copy */}
        <motion.p
          variants={fadeInUp}
          className="text-center text-[#9CA3AF] mt-12 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Pela primeira vez,{' '}
          <span className="text-white font-medium">
            tudo que estava espalhado em 5 apps
          </span>{' '}
          está em um só.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   SECTION 9 — TestimonialsSection
   ============================================================ */

const TESTIMONIALS = [
  {
    text: 'Testei o beta e nunca mais abri o OrthoRef. Ter a classificação com o diagrama interativo é outro nível.',
    author: 'R2 Ortopedia',
    place: 'Hospital Geral de Palmas',
  },
  {
    text: 'Uso o TLICS e o MESS quase todo plantão. Antes fazia na mão ou no MDCalc. Agora é 3 toques.',
    author: 'R3 Ortopedia',
    place: 'UFT',
  },
  {
    text: 'O módulo de pediátrica sozinho já vale a assinatura. Salter-Harris, Herring, Ponseti, tudo visual.',
    author: 'Ortopedista',
    place: '8 anos de formado',
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper id="depoimentos">
      <div className="max-w-6xl mx-auto">
        <SectionBadge>Depoimentos</SectionBadge>
        <SectionHeadline>
          Quem já usa, <span className="text-[#D4AF37]">recomenda</span>
        </SectionHeadline>
        <GoldDivider />
        <div className="mb-16" />

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative rounded-2xl p-6 bg-[#111111] border border-[rgba(255,255,255,0.06)] flex flex-col"
            >
              {/* gold quote */}
              <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4 shrink-0" />

              {/* stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="text-white/90 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-[#6B7280]">{t.place}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* counter */}
        <motion.div variants={fadeInUp} className="mt-14 text-center">
          <p className="text-[#9CA3AF] text-base">
            <span className="text-white font-bold text-lg">500+</span>{' '}
            ortopedistas já estão usando
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   SECTION 10 — PricingSection
   ============================================================ */

const FEATURES_MONTHLY = [
  'Acesso aos 13 módulos completos',
  '167 ferramentas clínicas',
  'Diagramas interativos',
  'Funciona 100% offline',
  'Conteúdo em português',
  'Atualizações automáticas',
  'Suporte prioritário',
];

const FEATURES_LIFETIME = [
  ...FEATURES_MONTHLY,
  'Todas as atualizações futuras inclusas',
  'Novos módulos sem custo adicional',
  'Acesso vitalício garantido',
];

export function PricingSection() {
  return (
    <SectionWrapper id="precos">
      <div className="max-w-5xl mx-auto">
        <SectionBadge>Preços</SectionBadge>
        <SectionHeadline>
          Escolha seu <span className="text-[#D4AF37]">plano</span>
        </SectionHeadline>
        <GoldDivider />
        <SectionSub>
          Duas opções. Mesmo conteúdo completo. Zero propaganda.
        </SectionSub>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start"
        >
          {/* MENSAL */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-8 bg-[#111111] border border-[rgba(255,255,255,0.06)] flex flex-col"
          >
            <h3 className="text-lg font-semibold text-[#9CA3AF] uppercase tracking-wider mb-6">
              Mensal
            </h3>

            <div className="mb-2">
              <span className="text-4xl font-bold text-white">R$ 39,90</span>
              <span className="text-[#6B7280] ml-1">/mês</span>
            </div>
            <p className="text-sm text-[#6B7280] mb-8">
              Cancele quando quiser
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {FEATURES_MONTHLY.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#9CA3AF]">
                  <Check className="w-4 h-4 text-[#22C55E] mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] transition-colors">
              Assinar Mensal
            </button>
          </motion.div>

          {/* VITALICIO */}
          <motion.div
            variants={scaleIn}
            className="relative rounded-2xl p-8 bg-[#111111] border-2 border-[#D4AF37] flex flex-col lg:scale-105 origin-center"
          >
            {/* badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A0A0A]">
                <Crown className="w-3.5 h-3.5" />
                Melhor Valor
              </span>
            </div>

            {/* glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[rgba(212,175,55,0.12)] to-transparent pointer-events-none" />

            <h3 className="relative text-lg font-semibold text-[#D4AF37] uppercase tracking-wider mb-6 mt-2">
              Vitalício
            </h3>

            <div className="relative mb-1">
              <span className="text-sm text-[#6B7280] line-through mr-2">
                De R$ 1.199,90
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#22C55E] bg-[rgba(34,197,94,0.1)] px-2 py-0.5 rounded-full">
                Economize R$ 600
              </span>
            </div>
            <div className="relative mb-1">
              <span className="text-5xl font-bold text-white">R$ 599,90</span>
              <span className="text-[#6B7280] ml-2 text-sm">pagamento único</span>
            </div>
            <p className="relative text-sm text-[#6B7280] mb-8">
              ou 12x de R$ 57,49
            </p>

            <ul className="relative space-y-3 mb-8 flex-1">
              {FEATURES_LIFETIME.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#9CA3AF]">
                  <Check className="w-4 h-4 text-[#22C55E] mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="relative w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A0A0A] hover:brightness-110 transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              Garantir Acesso Vitalício
            </button>
          </motion.div>
        </motion.div>

        {/* guarantee */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex items-center justify-center gap-3 text-sm text-[#9CA3AF]"
        >
          <Shield className="w-5 h-5 text-[#22C55E]" />
          <span>
            <strong className="text-white">7 dias de garantia.</strong>{' '}
            Reembolso total, sem perguntas.
          </span>
        </motion.div>

        {/* anchoring */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 max-w-2xl mx-auto rounded-xl p-5 bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.15)] text-center"
        >
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Orthobullets PEAK{' '}
            <span className="text-white font-medium">~R$900/ano</span>.
            UpToDate{' '}
            <span className="text-white font-medium">~R$3.300/ano</span>.
            <br />
            APEX Ortho{' '}
            <span className="text-[#D4AF37] font-bold">R$599,90 para sempre</span>.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   SECTION 11 — FAQSection
   ============================================================ */

const FAQ_ITEMS = [
  {
    q: 'Funciona sem internet?',
    a: 'Sim. O APEX Ortho é um PWA (Progressive Web App) que funciona 100% offline. Depois do primeiro acesso, todo o conteúdo fica armazenado no seu dispositivo. Você pode usar no centro cirúrgico, no ambulatório ou em qualquer lugar sem sinal.',
  },
  {
    q: 'Precisa baixar na App Store?',
    a: 'Não. Basta acessar pelo navegador e adicionar à tela inicial do celular. Funciona como um app nativo — com ícone, tela cheia e notificações — sem precisar passar por App Store ou Play Store.',
  },
  {
    q: 'O conteúdo é atualizado?',
    a: 'Sim. Atualizações são enviadas automaticamente sempre que houver novas classificações, correções ou melhorias. Basta abrir o app com internet que ele sincroniza sozinho.',
  },
  {
    q: 'O conteúdo está em português?',
    a: 'Sim. Todo o conteúdo — classificações, scores, algoritmos e a interface — está em português brasileiro. Termos técnicos mantêm a nomenclatura internacional quando apropriado.',
  },
  {
    q: 'Substitui o Orthobullets?',
    a: 'O APEX Ortho é complementar. O Orthobullets é excelente para estudo teórico e preparação para provas. O APEX Ortho é feito para uso clínico rápido: classificar, calcular e decidir em segundos, na beira do leito.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar, basta entrar em contato e devolvemos 100% do valor — sem perguntas, sem burocracia.',
  },
  {
    q: 'Vitalício é vitalício mesmo?',
    a: 'Sim. Um único pagamento e o acesso é seu para sempre. Isso inclui todas as atualizações futuras, novos módulos e funcionalidades que forem adicionadas ao longo do tempo.',
  },
  {
    q: 'Posso usar em mais de um dispositivo?',
    a: 'Sim. Sua conta funciona em qualquer dispositivo — celular, tablet, computador. Basta fazer login e todo o conteúdo estará disponível.',
  },
];

function FAQItem({ item }: { item: (typeof FAQ_ITEMS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-[rgba(255,255,255,0.06)] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white text-base sm:text-lg font-medium pr-4 group-hover:text-[#D4AF37] transition-colors">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#D4AF37] text-2xl font-light shrink-0 select-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-3xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionBadge>FAQ</SectionBadge>
        <SectionHeadline>
          Perguntas <span className="text-[#D4AF37]">frequentes</span>
        </SectionHeadline>
        <GoldDivider />
        <div className="mb-12" />

        <motion.div
          variants={stagger}
          className="rounded-2xl bg-[#111111] border border-[rgba(255,255,255,0.06)] p-4 sm:p-8"
        >
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   SECTION 12 — FinalCTASection
   ============================================================ */

export function FinalCTASection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* background mesh / gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[rgba(212,175,55,0.04)] to-[#0A0A0A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        {/* gold grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="relative max-w-3xl mx-auto text-center"
      >
        <motion.div variants={scaleIn}>
          <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-8" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Sua ortopedia de bolso{' '}
          <span className="text-[#D4AF37]">começa agora</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto"
        >
          167 ferramentas. Diagramas interativos. Offline. Em português.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
          <button className="group relative px-10 py-4 rounded-xl text-base font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A0A0A] hover:brightness-110 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            <span className="flex items-center gap-2">
              Começar Agora — R$ 599,90 Vitalício
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <span className="text-sm text-[#6B7280]">
            ou{' '}
            <span className="text-[#9CA3AF] font-medium">R$ 39,90/mês</span>
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-[#6B7280]"
        >
          <Shield className="w-4 h-4 text-[#22C55E]" />
          7 dias de garantia — reembolso total, sem perguntas.
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

const ECOSYSTEM_LINKS = [
  { name: 'APEX Finance', href: '#' },
  { name: 'APEX Pain', href: '#' },
  { name: 'APEX Ortho', href: '#' },
  { name: 'APEX Academy', href: '#' },
];

const LEGAL_LINKS = [
  { name: 'Termos de Uso', href: '#' },
  { name: 'Política de Privacidade', href: '#' },
  { name: 'Contato', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* col 1 — brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/icons/icon-192.png" alt="APEX Health IA" className="w-8 h-8 rounded-lg" />
              <span className="text-lg font-bold text-white">
                APEX <span className="text-[#D4AF37]">Health IA</span>
              </span>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Tecnologia clínica para quem não pode parar de aprender.
            </p>
            <p className="text-xs text-[#6B7280] mt-4">
              &copy; {new Date().getFullYear()} APEX Health IA. Todos os direitos reservados.
            </p>
          </div>

          {/* col 2 — ecosystem */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ecossistema
            </h4>
            <ul className="space-y-2.5">
              {ECOSYSTEM_LINKS.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-[#6B7280] hover:text-[#D4AF37] transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* col 3 — legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-[#6B7280] hover:text-[#D4AF37] transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* disclaimer */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8">
          <p className="text-xs text-[#6B7280] text-center leading-relaxed max-w-4xl mx-auto">
            O APEX Ortho é uma ferramenta de apoio clínico e educacional. Não substitui o
            julgamento clínico do profissional de saúde. Todas as classificações, scores e
            algoritmos devem ser interpretados no contexto clínico individual de cada paciente.
            As referências bibliográficas estão disponíveis dentro de cada ferramenta do aplicativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
