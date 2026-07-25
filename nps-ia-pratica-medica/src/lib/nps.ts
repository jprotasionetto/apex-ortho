export interface NpsResposta {
  id: string
  created_at: string
  nota: number
  comentario: string | null
  conteudo: number | null
  didatica: number | null
  aplicabilidade: number | null
  exemplos: number | null
  organizacao: number | null
  profundidade: number | null
  expectativa: number | null
}

export type Categoria = 'promotor' | 'neutro' | 'detrator'

/** As 7 perguntas sobre o curso (escala 1–5) */
export const PERGUNTAS = [
  { campo: 'conteudo', rotulo: 'Relevância do conteúdo para a sua prática' },
  { campo: 'didatica', rotulo: 'Didática e clareza das aulas' },
  { campo: 'aplicabilidade', rotulo: 'Aplicável já na sua rotina de consultório' },
  { campo: 'exemplos', rotulo: 'Qualidade dos exemplos e demonstrações ao vivo' },
  { campo: 'organizacao', rotulo: 'Organização do evento (local, horários, estrutura)' },
  { campo: 'profundidade', rotulo: 'Profundidade técnica na medida certa' },
  { campo: 'expectativa', rotulo: 'O curso entregou o que prometeu' },
] as const

export type CampoPergunta = (typeof PERGUNTAS)[number]['campo']

export function categoria(nota: number): Categoria {
  if (nota >= 9) return 'promotor'
  if (nota >= 7) return 'neutro'
  return 'detrator'
}

export interface ResumoNps {
  total: number
  promotores: number
  neutros: number
  detratores: number
  pctPromotores: number
  pctNeutros: number
  pctDetratores: number
  /** null quando não há respostas */
  nps: number | null
}

export function resumirNps(notas: number[]): ResumoNps {
  const total = notas.length
  if (total === 0) {
    return {
      total: 0,
      promotores: 0,
      neutros: 0,
      detratores: 0,
      pctPromotores: 0,
      pctNeutros: 0,
      pctDetratores: 0,
      nps: null,
    }
  }
  let promotores = 0
  let neutros = 0
  let detratores = 0
  for (const nota of notas) {
    const cat = categoria(nota)
    if (cat === 'promotor') promotores++
    else if (cat === 'neutro') neutros++
    else detratores++
  }
  const pctPromotores = (promotores / total) * 100
  const pctNeutros = (neutros / total) * 100
  const pctDetratores = (detratores / total) * 100
  return {
    total,
    promotores,
    neutros,
    detratores,
    pctPromotores,
    pctNeutros,
    pctDetratores,
    nps: Math.round(pctPromotores - pctDetratores),
  }
}

export interface Zona {
  rotulo: 'Crítico' | 'Aperfeiçoar' | 'Ótimo' | 'Excelência'
  /** classe Tailwind de cor de texto */
  texto: string
  /** classe Tailwind de fundo suave */
  fundo: string
}

export function zonaNps(nps: number): Zona {
  if (nps < 0)
    return { rotulo: 'Crítico', texto: 'text-zona-critico', fundo: 'bg-zona-critico/10' }
  if (nps < 50)
    return {
      rotulo: 'Aperfeiçoar',
      texto: 'text-zona-aperfeicoar',
      fundo: 'bg-zona-aperfeicoar/10',
    }
  if (nps < 75)
    return { rotulo: 'Ótimo', texto: 'text-zona-otimo', fundo: 'bg-zona-otimo/10' }
  return {
    rotulo: 'Excelência',
    texto: 'text-zona-excelencia',
    fundo: 'bg-zona-excelencia/10',
  }
}
