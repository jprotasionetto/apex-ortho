export const canadianCspineGuide = {
  id: 'canadian-cspine',
  name: 'Canadian C-Spine Rules (Regras Canadenses para Coluna Cervical)',
  category: 'guide',
  sections: [
    {
      title: 'Visão Geral',
      content: [
        '**Objetivo:** Determinar a necessidade de imagem radiográfica da coluna cervical em pacientes com trauma, de forma segura e eficiente',
        '',
        '**Pré-requisitos para aplicação:**',
        '- Paciente alerta (GCS 15)',
        '- Trauma com possível lesão cervical',
        '- Paciente estável hemodinamicamente',
        '- Idade ≥16 anos',
        '',
        '**NÃO aplicar se:**',
        '- GCS <15',
        '- Paciente instável hemodinamicamente',
        '- Lesão penetrante',
        '- Déficit neurológico focal agudo',
        '- Doença vertebral conhecida (espondilite anquilosante, AR)',
        '- Idade <16 anos'
      ]
    },
    {
      title: 'PASSO 1 - Fatores de Alto Risco (indicam imagem obrigatória)',
      content: [
        '**Algum fator de ALTO RISCO presente? Se SIM → IMAGEM OBRIGATÓRIA**',
        '',
        '1. Idade ≥65 anos',
        '2. Mecanismo perigoso:',
        '   - Queda de ≥1 metro ou 5 degraus',
        '   - Carga axial sobre a cabeça (mergulho)',
        '   - Acidente com veículo motorizado em alta velocidade (>100 km/h), capotamento, ejeção',
        '   - Acidente com veículo recreativo motorizado',
        '   - Acidente de bicicleta com colisão',
        '3. Parestesias em extremidades',
        '',
        '→ Se ALGUM fator de alto risco presente: **SOLICITAR IMAGEM** (parar aqui)',
        '→ Se NENHUM fator de alto risco: seguir para Passo 2'
      ]
    },
    {
      title: 'PASSO 2 - Fatores de Baixo Risco (permitem avaliação de mobilidade)',
      content: [
        '**Algum fator de BAIXO RISCO presente que permita avaliação segura? Se NÃO → IMAGEM**',
        '',
        '1. Colisão traseira simples (rear-end MVC), EXCLUINDO:',
        '   - Empurrado para tráfego em sentido contrário',
        '   - Atingido por ônibus ou caminhão grande',
        '   - Capotamento',
        '   - Atingido por veículo de alta velocidade',
        '2. Posição sentada na emergência',
        '3. Paciente deambulando em qualquer momento após o trauma',
        '4. Início tardio da dor cervical (não imediato)',
        '5. Ausência de dor à palpação da linha média cervical',
        '',
        '→ Se NENHUM fator de baixo risco: **SOLICITAR IMAGEM** (sem condições de avaliar mobilidade com segurança)',
        '→ Se ALGUM fator de baixo risco presente: seguir para Passo 3'
      ]
    },
    {
      title: 'PASSO 3 - Avaliação de Mobilidade Cervical',
      content: [
        '**O paciente consegue rotar ativamente o pescoço 45° para esquerda E para direita?**',
        '',
        '→ Se SIM (rotação ativa 45° bilateral): **NÃO NECESSITA IMAGEM** - coluna cervical pode ser liberada clinicamente',
        '',
        '→ Se NÃO (incapaz de rotar 45°): **SOLICITAR IMAGEM**',
        '',
        '**Importante:**',
        '- Rotação ATIVA (paciente move sozinho)',
        '- NUNCA forçar rotação passiva',
        '- Paciente deve estar confortável para tentar',
        '- Dor que impede rotação = incapaz de rotar'
      ]
    },
    {
      title: 'Algoritmo Resumido',
      content: [
        '```',
        'TRAUMA CERVICAL (GCS 15, estável)',
        '│',
        '├─ PASSO 1: Fator de ALTO RISCO?',
        '│  ├─ SIM → IMAGEM ✗',
        '│  └─ NÃO ↓',
        '│',
        '├─ PASSO 2: Fator de BAIXO RISCO presente?',
        '│  ├─ NÃO → IMAGEM ✗',
        '│  └─ SIM ↓',
        '│',
        '└─ PASSO 3: Rotação ativa 45° bilateral?',
        '   ├─ NÃO → IMAGEM ✗',
        '   └─ SIM → SEM IMAGEM ✓ (liberar coluna cervical)',
        '```',
        '',
        '**Sensibilidade: 99.4% | Especificidade: 45.1%**',
        '**Pode reduzir em ~15-30% a taxa de radiografias cervicais no trauma**'
      ]
    }
  ],
  clinicalPearl: 'Sensibilidade de 99.4%: as Canadian C-Spine Rules são superiores ao NEXUS na identificação de lesões cervicais clinicamente significativas. Podem reduzir em até 30% a taxa de radiografias desnecessárias.',
  pitfall: 'NÃO aplicar em pacientes com GCS <15, instabilidade hemodinâmica, trauma penetrante, déficit neurológico focal ou doenças vertebrais pré-existentes (espondilite anquilosante, artrite reumatoide).',
  references: [
    'Stiell IG, et al. The Canadian C-spine rule versus the NEXUS low-risk criteria in patients with trauma. N Engl J Med. 2003;349(26):2510-2518.',
    'Stiell IG, et al. The Canadian C-spine rule for radiography in alert and stable trauma patients. JAMA. 2001;286(15):1841-1848.',
    'Stiell IG, et al. Implementation of the Canadian C-Spine Rule: prospective 12 centre cluster randomised trial. BMJ. 2009;339:b4146.'
  ]
};
