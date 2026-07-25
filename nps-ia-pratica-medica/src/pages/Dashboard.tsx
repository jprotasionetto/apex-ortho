import { useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { useNpsRespostas } from '../hooks/useNpsRespostas'
import {
  categoria,
  PALESTRANTES,
  resumirNps,
  zonaNps,
  type Categoria,
  type NpsResposta,
} from '../lib/nps'

const COR_CATEGORIA: Record<
  Categoria,
  { hex: string; rotulo: string; plural: string }
> = {
  promotor: { hex: '#0ca30c', rotulo: 'Promotor', plural: 'Promotores' },
  neutro: { hex: '#eda100', rotulo: 'Neutro', plural: 'Neutros' },
  detrator: { hex: '#d03b3b', rotulo: 'Detrator', plural: 'Detratores' },
}

function fmtPct(v: number) {
  return `${Math.round(v)}%`
}

export default function Dashboard() {
  const { respostas, carregando, erro } = useNpsRespostas()

  const resumo = useMemo(
    () => resumirNps(respostas.map((r) => r.nota)),
    [respostas],
  )

  const distribuicao = useMemo(() => {
    const contagem = Array.from({ length: 11 }, () => 0)
    for (const r of respostas) contagem[r.nota]++
    return contagem
  }, [respostas])

  const porPalestrante = useMemo(
    () =>
      PALESTRANTES.map((p) => {
        const notas = respostas
          .filter((r) => r.palestrante === p)
          .map((r) => r.nota)
        return { palestrante: p, resumo: resumirNps(notas) }
      }),
    [respostas],
  )

  const comentarios = useMemo(
    () =>
      respostas
        .filter((r) => r.comentario)
        .sort((a, b) => b.created_at.localeCompare(a.created_at))
        .slice(0, 6),
    [respostas],
  )

  const urlPublica =
    typeof window !== 'undefined' ? `${window.location.origin}/` : '/'
  const vazio = !carregando && resumo.total === 0

  return (
    <div className="min-h-dvh bg-page px-6 py-5 lg:px-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold tracking-wide text-brand-mid uppercase">
            ProClinic Academy · IAForDoctors
          </p>
          <h1 className="text-3xl font-black tracking-tight text-brand lg:text-4xl">
            NPS — IA na Prática Médica
          </h1>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-hairline">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-promotor opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-promotor" />
          </span>
          <span className="text-sm font-bold text-ink">Ao vivo</span>
        </div>
      </header>

      {erro && (
        <p className="mt-6 rounded-2xl bg-detrator/10 px-5 py-4 font-medium text-detrator">
          Erro ao carregar respostas: {erro}
        </p>
      )}

      {vazio ? (
        <EstadoVazio url={urlPublica} />
      ) : (
        <main className="mt-6 grid gap-5 xl:grid-cols-3">
          {/* Coluna principal */}
          <div className="space-y-5 xl:col-span-2">
            <HeroNps resumo={resumo} />
            <CartaoDistribuicao distribuicao={distribuicao} />
          </div>

          {/* Coluna lateral */}
          <div className="space-y-5">
            <CartaoQr url={urlPublica} />
            <CartaoPalestrantes dados={porPalestrante} />
            <CartaoComentarios comentarios={comentarios} />
          </div>
        </main>
      )}
    </div>
  )
}

function EstadoVazio({ url }: { url: string }) {
  return (
    <main className="mx-auto mt-10 flex max-w-2xl flex-col items-center rounded-3xl bg-white px-8 py-14 text-center shadow-sm ring-1 ring-hairline">
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-soft text-4xl"
      >
        📊
      </motion.div>
      <h2 className="mt-6 text-3xl font-black tracking-tight text-brand">
        Aguardando as primeiras avaliações...
      </h2>
      <p className="mt-2 max-w-md text-lg text-ink-2">
        Escaneie o QR Code abaixo para responder — leva 20 segundos.
      </p>
      <div className="mt-8 rounded-3xl bg-white p-5 shadow-lg ring-1 ring-hairline">
        <QRCodeSVG value={url} size={220} fgColor="#0f4d3a" marginSize={1} />
      </div>
      <p className="mt-4 text-sm font-medium break-all text-ink-3">{url}</p>
    </main>
  )
}

function HeroNps({ resumo }: { resumo: ReturnType<typeof resumirNps> }) {
  const nps = resumo.nps ?? 0
  const zona = zonaNps(nps)
  const segmentos = [
    { cat: 'promotor' as const, pct: resumo.pctPromotores, n: resumo.promotores },
    { cat: 'neutro' as const, pct: resumo.pctNeutros, n: resumo.neutros },
    { cat: 'detrator' as const, pct: resumo.pctDetratores, n: resumo.detratores },
  ]

  return (
    <section className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-hairline lg:p-9">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm font-bold tracking-wide text-ink-3 uppercase">
            NPS ao vivo
          </p>
          <div className="flex items-end gap-5">
            <motion.span
              key={nps}
              initial={{ scale: 0.85, opacity: 0.4 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
              className={`text-[7rem] leading-none font-black tracking-tight lg:text-[10rem] ${zona.texto}`}
            >
              {nps}
            </motion.span>
            <span
              className={`mb-5 rounded-full px-5 py-2 text-xl font-black lg:text-2xl ${zona.texto} ${zona.fundo}`}
            >
              {zona.rotulo}
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-3">
            NPS = % Promotores − % Detratores · Promotores 9–10 · Neutros 7–8 ·
            Detratores 0–6
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Metrica rotulo="Respostas" valor={String(resumo.total)} cor="text-brand" />
          <Metrica
            rotulo="Promotores"
            valor={fmtPct(resumo.pctPromotores)}
            cor="text-promotor"
            ponto="#0ca30c"
          />
          <Metrica
            rotulo="Neutros"
            valor={fmtPct(resumo.pctNeutros)}
            cor="text-zona-aperfeicoar"
            ponto="#eda100"
          />
          <Metrica
            rotulo="Detratores"
            valor={fmtPct(resumo.pctDetratores)}
            cor="text-detrator"
            ponto="#d03b3b"
          />
        </div>
      </div>

      {/* Barra empilhada de proporção */}
      <div className="mt-7">
        <div className="flex h-9 w-full gap-0.5 overflow-hidden rounded-xl">
          {segmentos.map(({ cat, pct, n }) => (
            <motion.div
              key={cat}
              animate={{ width: `${Math.max(pct, n > 0 ? 3 : 0)}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{ backgroundColor: COR_CATEGORIA[cat].hex }}
              className="flex items-center justify-center overflow-hidden"
            >
              {pct >= 12 && (
                <span className="text-sm font-black text-white drop-shadow-sm">
                  {fmtPct(pct)}
                </span>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-ink-2">
          {segmentos.map(({ cat, n }) => (
            <span key={cat} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COR_CATEGORIA[cat].hex }}
              />
              {COR_CATEGORIA[cat].plural} · {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Metrica({
  rotulo,
  valor,
  cor,
  ponto,
}: {
  rotulo: string
  valor: string
  cor: string
  ponto?: string
}) {
  return (
    <div className="min-w-28 rounded-2xl bg-page px-4 py-3">
      <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-ink-3 uppercase">
        {ponto && (
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: ponto }}
          />
        )}
        {rotulo}
      </p>
      <p className={`text-3xl font-black tracking-tight tabular-nums ${cor}`}>
        {valor}
      </p>
    </div>
  )
}

function CartaoDistribuicao({ distribuicao }: { distribuicao: number[] }) {
  const max = Math.max(...distribuicao, 1)
  return (
    <section className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-hairline">
      <h2 className="text-lg font-black tracking-tight text-ink">
        Distribuição das notas
      </h2>
      <div className="mt-5 flex h-48 items-end gap-2 lg:h-56">
        {distribuicao.map((qtd, notaAtual) => {
          const cat = categoria(notaAtual)
          return (
            <div
              key={notaAtual}
              className="flex h-full flex-1 flex-col items-center justify-end gap-1.5"
              title={`Nota ${notaAtual}: ${qtd} resposta${qtd === 1 ? '' : 's'}`}
            >
              {qtd > 0 && (
                <span className="text-sm font-black text-ink-2 tabular-nums">
                  {qtd}
                </span>
              )}
              <motion.div
                animate={{ height: `${(qtd / max) * 100}%` }}
                transition={{ type: 'spring', stiffness: 140, damping: 20 }}
                style={{
                  backgroundColor:
                    qtd > 0 ? COR_CATEGORIA[cat].hex : 'var(--color-hairline)',
                }}
                className="w-full min-h-1 rounded-t-md opacity-95"
              />
              <span className="text-sm font-bold text-ink-3 tabular-nums">
                {notaAtual}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function CartaoPalestrantes({
  dados,
}: {
  dados: { palestrante: string; resumo: ReturnType<typeof resumirNps> }[]
}) {
  return (
    <section className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-hairline">
      <h2 className="text-lg font-black tracking-tight text-ink">
        NPS por palestrante
      </h2>
      <ul className="mt-4 divide-y divide-hairline">
        {dados.map(({ palestrante, resumo }) => {
          const zona = resumo.nps === null ? null : zonaNps(resumo.nps)
          return (
            <li
              key={palestrante}
              className="flex items-center justify-between gap-3 py-3.5"
            >
              <div>
                <p className="font-bold text-ink">{palestrante}</p>
                <p className="text-xs text-ink-3">
                  {resumo.total} resposta{resumo.total === 1 ? '' : 's'}
                </p>
              </div>
              {zona ? (
                <span
                  className={`text-4xl font-black tracking-tight tabular-nums ${zona.texto}`}
                >
                  {resumo.nps}
                </span>
              ) : (
                <span className="text-2xl font-black text-ink-3">—</span>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function CartaoComentarios({ comentarios }: { comentarios: NpsResposta[] }) {
  return (
    <section className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-hairline">
      <h2 className="text-lg font-black tracking-tight text-ink">
        Últimos comentários
      </h2>
      {comentarios.length === 0 ? (
        <p className="mt-4 text-sm text-ink-3">Nenhum comentário ainda.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          <AnimatePresence initial={false}>
            {comentarios.map((c) => {
              const cat = categoria(c.nota)
              const cor = COR_CATEGORIA[cat]
              return (
                <motion.li
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: -14, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                  className="rounded-2xl bg-page px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-black text-white"
                      style={{ backgroundColor: cor.hex }}
                    >
                      {c.nota} · {cor.rotulo}
                    </span>
                    {c.palestrante && (
                      <span className="text-xs font-medium text-ink-3">
                        {c.palestrante}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm leading-snug text-ink">
                    “{c.comentario}”
                  </p>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      )}
    </section>
  )
}

function CartaoQr({ url }: { url: string }) {
  return (
    <section className="flex items-center gap-5 rounded-3xl bg-brand p-6 text-white shadow-sm">
      <div className="rounded-2xl bg-white p-2.5">
        <QRCodeSVG value={url} size={104} fgColor="#0f4d3a" marginSize={1} />
      </div>
      <div>
        <p className="text-lg leading-tight font-black">Escaneie e avalie</p>
        <p className="mt-1 text-sm leading-snug text-white/75">
          Aponte a câmera do celular para responder em 20 segundos.
        </p>
      </div>
    </section>
  )
}
