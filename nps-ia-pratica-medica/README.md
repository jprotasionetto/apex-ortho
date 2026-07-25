# NPS — IA na Prática Médica

Web app de NPS ao vivo para o curso presencial **IA na Prática Médica**
(ProClinic Academy · IAForDoctors), em identidade **dark gold** APEX/ProClinic.

- **`/`** — página pública de coleta (mobile-first, acessada por QR Code):
  nota NPS 0–10, 7 perguntas sobre o curso (escala 1–5) e comentário opcional.
- **`/palestrantes`** — dashboard em tempo real para projetar no telão:
  NPS gigante com zona colorida, cards de resumo, barra empilhada
  Promotores/Neutros/Detratores, distribuição das notas, médias das 7
  perguntas do curso, feed de comentários e QR Code da página pública.

Novas respostas aparecem no dashboard automaticamente via **Supabase
Realtime**, sem recarregar.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion ·
Supabase (tabela `nps_respostas`, projeto `biblioteca-proclinic`) ·
qrcode.react

## Rodando localmente

```bash
npm install
npm run dev
```

As credenciais públicas do Supabase (URL + anon key) já vêm embutidas como
padrão — a anon key é publicável por design e o acesso é limitado por RLS
(INSERT/SELECT anônimos apenas na tabela `nps_respostas`). Para apontar para
outro projeto, copie `.env.example` para `.env` e ajuste os valores.

## Deploy (Vercel)

1. Crie um **novo projeto** na Vercel a partir do repositório `apex-ortho`
   e defina **Root Directory = `nps-ia-pratica-medica`** (framework: **Vite**),
   para o app ter a própria URL, separada do APEX Ortho. Nenhuma env var é
   obrigatória.
2. A URL pública do deploy é a página de coleta; o QR Code do dashboard é
   gerado automaticamente a partir dela (`window.location.origin`).
3. Projete `https://SEU-DOMINIO/palestrantes` no telão.

## Banco de dados

Tabela `public.nps_respostas` (Supabase):

| coluna         | tipo        | detalhe                     |
| -------------- | ----------- | --------------------------- |
| id             | uuid, pk    | default `gen_random_uuid()` |
| created_at     | timestamptz | default `now()`             |
| nota           | int         | obrigatório, check 0–10     |
| comentario     | text        | opcional                    |
| conteudo       | int         | check 1–5                   |
| didatica       | int         | check 1–5                   |
| aplicabilidade | int         | check 1–5                   |
| exemplos       | int         | check 1–5                   |
| organizacao    | int         | check 1–5                   |
| profundidade   | int         | check 1–5                   |
| expectativa    | int         | check 1–5                   |

RLS habilitado com INSERT e SELECT anônimos; tabela publicada no
`supabase_realtime`.

## Fórmula do NPS

`NPS = % Promotores − % Detratores` · Promotores: notas 9–10 · Neutros: 7–8 ·
Detratores: 0–6. Zonas: `< 0` Crítico · `0–49` Aperfeiçoar · `50–74` Ótimo ·
`75–100` Excelência.
