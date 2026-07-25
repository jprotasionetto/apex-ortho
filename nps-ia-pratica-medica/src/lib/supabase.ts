import { createClient } from '@supabase/supabase-js'

// A anon key do Supabase é publicável por design; o acesso real é limitado
// pelas políticas RLS (INSERT/SELECT apenas em nps_respostas).
const url =
  import.meta.env.VITE_SUPABASE_URL ?? 'https://hisbzfupdrrtkgpcawjy.supabase.co'
const anonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpc2J6ZnVwZHJydGtncGNhd2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMDY4ODIsImV4cCI6MjA5NDY4Mjg4Mn0.UNAXI7fBt8XYnZ9QIGmHw2Z4VDxautnxI0O_4_O3e6w'

export const supabase = createClient(url, anonKey)
