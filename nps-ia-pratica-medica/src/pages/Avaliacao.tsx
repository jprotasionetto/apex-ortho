import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { PALESTRANTES } from '../lib/nps'

const NOTAS = Array.from({ length: 11 }, (_, i) => i)

export default function Avaliacao() {
  const [nota, setNota] = useState<number | null>(null)
  const [palestrante, setPalestrante] = useState('')
  const [comentario, setComentario] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)

  async function enviar() {
    if (nota === null || enviando) return
    setEnviando(true)
    setErro(null)
    const { error } = await supabase.from('nps_respostas').insert({
      nota,
      palestrante: palestrante || null,
      comentario: comentario.trim() || null,
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
    setPalestrante('')
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
              className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-soft text-6xl"
            >
              🙌
            </motion.div>
            <h1 className="text-3xl font-black tracking-tight text-brand">
              Obrigado!
            </h1>
            <p className="mt-3 text-lg text-ink-2">
              Sua avaliação foi registrada.
            </p>
            <button
              onClick={novaAvaliacao}
              className="mt-10 h-13 rounded-2xl border-2 border-brand px-8 text-base font-bold text-brand transition active:scale-95"
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
              <span className="inline-block rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold tracking-wide text-brand">
                ProClinic Academy · IAForDoctors
              </span>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-brand">
                IA na Prática Médica
              </h1>
              <p className="mt-1 text-base text-ink-2">Sua opinião em 20 segundos</p>
            </header>

            <section className="mt-8">
              <h2 className="text-xl leading-snug font-bold">
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
                          ? 'scale-105 bg-brand text-white shadow-lg ring-2 ring-brand ring-offset-2'
                          : 'border border-hairline bg-white text-ink shadow-sm'
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

            <section className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-bold text-ink">
                  Qual palestrante quer destacar?{' '}
                  <span className="font-normal text-ink-3">(opcional)</span>
                </span>
                <select
                  value={palestrante}
                  onChange={(e) => setPalestrante(e.target.value)}
                  className="mt-2 h-13 w-full appearance-none rounded-2xl border border-hairline bg-white px-4 text-base shadow-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                >
                  <option value="">Selecionar...</option>
                  {PALESTRANTES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </label>

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
                  className="mt-2 w-full resize-none rounded-2xl border border-hairline bg-white px-4 py-3 text-base shadow-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </label>
            </section>

            {erro && (
              <p className="mt-4 rounded-xl bg-detrator/10 px-4 py-3 text-sm font-medium text-detrator">
                {erro}
              </p>
            )}

            <button
              onClick={enviar}
              disabled={nota === null || enviando}
              className="mt-6 h-15 w-full rounded-2xl bg-brand text-lg font-bold text-white shadow-lg transition active:scale-[0.98] disabled:opacity-35 disabled:shadow-none"
            >
              {enviando ? 'Enviando...' : 'Enviar avaliação'}
            </button>
            {nota === null && (
              <p className="mt-3 text-center text-xs text-ink-3">
                Toque numa nota para liberar o envio
              </p>
            )}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
