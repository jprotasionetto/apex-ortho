import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { NpsResposta } from '../lib/nps'

interface Estado {
  respostas: NpsResposta[]
  carregando: boolean
  erro: string | null
}

/**
 * Carrega todas as respostas e mantém o estado atualizado em tempo real via
 * Supabase Realtime (novos INSERTs entram sem recarregar a página).
 */
export function useNpsRespostas(): Estado {
  const [respostas, setRespostas] = useState<NpsResposta[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    let ativo = true

    async function carregar() {
      const { data, error } = await supabase
        .from('nps_respostas')
        .select('*')
        .order('created_at', { ascending: true })
      if (!ativo) return
      if (error) {
        setErro(error.message)
      } else {
        setRespostas((data ?? []) as NpsResposta[])
        setErro(null)
      }
      setCarregando(false)
    }

    carregar()

    const canal = supabase
      .channel('nps-respostas-live')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'nps_respostas' },
        (payload) => {
          const nova = payload.new as NpsResposta
          setRespostas((atual) =>
            atual.some((r) => r.id === nova.id) ? atual : [...atual, nova],
          )
        },
      )
      .subscribe()

    return () => {
      ativo = false
      supabase.removeChannel(canal)
    }
  }, [])

  return { respostas, carregando, erro }
}
