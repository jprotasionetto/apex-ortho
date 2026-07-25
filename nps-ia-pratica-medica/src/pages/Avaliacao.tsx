import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { PERGUNTAS, type CampoPergunta } from '../lib/nps'

const NOTAS = Array.from({ length: 11 }, (_, i) => i)
const ESCALA = [1, 2, 3, 4, 5]

type Respostas = Partial<Record<CampoPergunta, number>>

export default function Avaliacao() {
  const [nota, setNota] = useState<number | null>(null)
  const [respostas, setRespostas] = useState<Respostas>({})
  const [comentario, setComentario] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)

  const completo =
    nota !== null && PERGUNTAS.every((p) => respostas[p.campo] !== undefined)

  async function enviar() {
    if (!completo || enviando) return
    setEnviando(true)
    setErro(null)
    const { error } = await supabase.from('nps_respostas').insert({
      nota,
      comentario: comentario.trim() || null,
      ...respostas,
    })
    setEnviando(false)
    if (error) {
      setErro('Não foi possível enviar. Verifique sua conexão e tente de novo.')
      return
    }
    setEnviado(true)
  }

  function novaAvaliacao() {
    setNota(null)
    setRespostas({})
    setComentario('')
    setErro(null)
    setEnviado(false)
  }

  return (
    <div className="min-h-dvh bg-page">
      <AnimatePresence mode="wait">
        {enviado ? (
          <motion.main
            key="obrigado"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.1 }}
              className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gold/10 text-6xl ring-1 ring-hairline-gold"
            >
              🙌
            </motion.div>
            <h1 className="text-gold-gradient text-4xl font-black tracking-tight">
              Obrigado!
            </h1>
            <p className="mt-3 text-lg text-ink-2">
              Sua avaliação foi registrada.
            </p>
            <button
              onClick={novaAvaliacao}
              className="mt-10 h-13 rounded-2xl border border-hairline-gold px-8 text-base font-bold text-gold transition active:scale-95"
            >
              Enviar outra
            </button>
          </motion.main>
        ) : (
          <motion.main
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto w-full max-w-md px-5 pt-8 pb-12"
          >
            <header className="text-center">
              <span className="inline-block rounded-full border border-hairline-gold bg-gold/5 px-4 py-1.5 text-xs font-bold tracking-widest text-gold uppercase">
                ProClinic Academy · IAForDoctors
              </span>
              <h1 className="text-gold-gradient mt-4 text-3xl font-black tracking-tight">
                IA na Prática Médica
              </h1>
              <p className="mt-1 text-base text-ink-2">Sua opinião em 1 minuto</p>
            </header>

            <section className="mt-8">
              <h2 className="text-xl leading-snug font-bold text-ink">
                De 0 a 10, o quanto você recomendaria este curso a um colega
                médico?
              </h2>

              <div className="mt-5 grid grid-cols-4 gap-2.5">
                {NOTAS.map((n) => {
                  const ativa = nota === n
                  return (
                    <button
                      key={n}
                      onClick={() => setNota(n)}
                      aria-pressed={ativa}
                      className={`h-15 rounded-2xl text-xl font-bold transition active:scale-95 ${
                        ativa
                          ? 'bg-gold-gradient scale-105 text-black shadow-lg shadow-gold/20 ring-2 ring-gold-light ring-offset-2 ring-offset-page'
                          : 'border border-hairline bg-card text-ink'
                      }`}
                    >
                      {n}
                    </button>
                  )
                })}
              </div>
              <div className="mt-3 flex justify-between text-xs font-medium text-ink-3">
                <span>0 = Não recomendaria</span>
                <span>10 = Recomendaria com certeza</span>
              </div>
            </section>

            <section className="mt-9">
              <h2 className="text-xl leading-snug font-bold text-ink">
                Avalie o curso em 7 pontos
              </h2>
              <p className="mt-1 text-xs font-medium text-ink-3">
                1 = Ruim · 5 = Excelente
              </p>
              <div className="mt-4 space-y-4">
                {PERGUNTAS.map(({ campo, rotulo }) => (
                  <div
                    key={campo}
                    className="rounded-2xl border border-hairline bg-card px-4 py-3.5"
                  >
                    <p className="text-sm leading-snug font-bold text-ink">
                      {rotulo}
                    </p>
                    <div className="mt-2.5 grid grid-cols-5 gap-2">
                      {ESCALA.map((v) => {
                        const ativa = respostas[campo] === v
                        return (
                          <button
                            key={v}
                            onClick={() =>
                              setRespostas((r) => ({ ...r, [campo]: v }))
                            }
                            aria-pressed={ativa}
                            className={`h-11 rounded-xl text-base font-bold transition active:scale-95 ${
                              ativa
                                ? 'bg-gold-gradient text-black ring-1 ring-gold-light'
                                : 'border border-hairline bg-card-2 text-ink-2'
                            }`}
                          >
                            {v}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-bold text-ink">
                  Quer deixar um comentário?{' '}
                  <span className="font-normal text-ink-3">(opcional)</span>
                </span>
                <textarea
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="O que mais te marcou hoje?"
                  rows={3}
                  className="mt-2 w-full resize-none rounded-2xl border border-hairline bg-card px-4 py-3 text-base text-ink placeholder:text-ink-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </label>
            </section>

            {erro && (
              <p className="mt-4 rounded-xl bg-detrator/15 px-4 py-3 text-sm font-medium text-detrator">
                {erro}
              </p>
            )}

            <button
              onClick={enviar}
              disabled={!completo || enviando}
              className="bg-gold-gradient mt-6 h-15 w-full rounded-2xl text-lg font-black text-black shadow-lg shadow-gold/15 transition active:scale-[0.98] disabled:opacity-30 disabled:shadow-none"
            >
              {enviando ? 'Enviando...' : 'Enviar avaliação'}
            </button>
            {!completo && (
              <p className="mt-3 text-center text-xs text-ink-3">
                Responda a nota de 0 a 10 e os 7 pontos para liberar o envio
              </p>
            )}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
