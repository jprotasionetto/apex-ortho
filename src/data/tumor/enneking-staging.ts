import type { ClassificationData } from '@/types/classification.ts';

export const ennekingStagingData: ClassificationData = {
  id: 'enneking-staging',
  name: 'Estadiamento de Enneking (Tumores Musculoesqueleticos)',
  author: 'Enneking',
  year: 1980,
  epidemiology: 'Estadiamento de Enneking (1980) é o sistema padrão da MSTS (Musculoskeletal Tumor Society) para tumores musculoesqueléticos primários. Osteossarcoma (Estágio IIB): 3–5/1.000.000/ano; pico 10–20 anos; sem tratamento: sobrevida 15%. Com quimioterapia neoadjuvante (MAP: metotrexato + adriamicina + cisplatina) + ressecção ampla: sobrevida 5 anos = 65–75%. Sarcoma de Ewing: segunda causa de sarcoma ósseo em <20 anos; protocolo VAIA/VIDE; sobrevida 5 anos = 60–70%.',
  mechanism: 'Enneking define grau histológico (G1=baixo grau: bem diferenciado, poucas mitoses; G2=alto grau: pobreza de diferenciação, mitoses frequentes) e compartimentalização (intracompartimental-A vs extracompartimental-B). Sarcomas Estágio A: confinados ao osso/músculo de origem → margens amplas mais factíveis. Estágio B: ultrapassam fáscia ou córtex → margens amplas mais difíceis, maior risco de recidiva. Grau histológico = principal preditor de metástase: >95% dos óbitos por sarcoma decorrem de doença metastática pulmonar.',
  grades: [
    {
      id: 'benign-1',
      label: 'Benigno - Estagio 1 (Latente)',
      description: 'Tumor benigno latente/inativo',
      criteria: [
        'Tumor benigno de crescimento lento ou estacionario',
        'Bem encapsulado com margem esclerótica definida',
        'Descoberto incidentalmente na maioria dos casos',
        'Padrao radiografico Lodwick IA',
        'Exemplos: encondroma, defeito cortical fibroso, osteoma osteoide'
      ],
      treatment: 'Observacao na maioria dos casos; curetagem intralesional se sintomatico',
      prognosis: 'Excelente; resolucao espontanea possivel em alguns casos (defeito cortical fibroso)',
      colorCode: 'safe'
    },
    {
      id: 'benign-2',
      label: 'Benigno - Estagio 2 (Ativo)',
      description: 'Tumor benigno ativo',
      criteria: [
        'Tumor benigno de crescimento ativo e continuo',
        'Capsula fina, zona reativa presente',
        'Pode causar deformidade ossea ou fratura patologica',
        'Padrao radiografico Lodwick IB',
        'Exemplos: cisto osseo aneurismatico, condroblastoma, osteoblastoma'
      ],
      treatment: 'Curetagem intralesional estendida com adjuvantes locais (fenol, nitrogenio liquido, cimento)',
      prognosis: 'Bom; taxa de recidiva de 10-25% apos curetagem com adjuvante',
      colorCode: 'caution'
    },
    {
      id: 'benign-3',
      label: 'Benigno - Estagio 3 (Agressivo)',
      description: 'Tumor benigno localmente agressivo',
      criteria: [
        'Tumor benigno com comportamento localmente agressivo',
        'Rompe a capsula e invade tecidos adjacentes',
        'Pode romper cortical e invadir partes moles',
        'Padrao radiografico Lodwick IC ou II',
        'Exemplos: tumor de celulas gigantes (Campanacci III), condroblastoma agressivo'
      ],
      treatment: 'Resseccao ampla ou curetagem estendida agressiva com adjuvantes; reconstrucao ossea pode ser necessaria',
      prognosis: 'Moderado; risco de recidiva elevado (30-50%); raramente metastatiza',
      colorCode: 'danger'
    },
    {
      id: 'malignant-ia',
      label: 'Maligno - Estagio IA',
      description: 'Baixo grau, intracompartimental',
      criteria: [
        'Tumor maligno de baixo grau histologico (G1)',
        'Confinado ao compartimento de origem',
        'Sem extensao extracompartimental',
        'Sem metastases',
        'Exemplos: condrossarcoma grau I, fibrossarcoma de baixo grau'
      ],
      treatment: 'Resseccao ampla (margem ampla no compartimento); radioterapia adjuvante em casos selecionados',
      prognosis: 'Bom para tumor maligno; sobrevida em 5 anos >90%',
      colorCode: 'caution'
    },
    {
      id: 'malignant-ib',
      label: 'Maligno - Estagio IB',
      description: 'Baixo grau, extracompartimental',
      criteria: [
        'Tumor maligno de baixo grau histologico (G1)',
        'Extensao alem do compartimento de origem',
        'Invade tecidos adjacentes ou articulacao',
        'Sem metastases',
        'Margens amplas mais dificeis de obter'
      ],
      treatment: 'Resseccao ampla com margem adequada; pode necessitar cirurgia mais extensa para obter margens livres',
      prognosis: 'Moderado; sobrevida depende da obtencao de margens adequadas',
      colorCode: 'danger'
    },
    {
      id: 'malignant-iia',
      label: 'Maligno - Estagio IIA',
      description: 'Alto grau, intracompartimental',
      criteria: [
        'Tumor maligno de alto grau histologico (G2)',
        'Confinado ao compartimento de origem',
        'Sem extensao extracompartimental',
        'Sem metastases',
        'Exemplos: osteossarcoma intramedular, sarcoma de Ewing localizado'
      ],
      treatment: 'Quimioterapia neoadjuvante + resseccao ampla + quimioterapia adjuvante (para osteossarcoma e Ewing); radioterapia para tumores radiossensiveis',
      prognosis: 'Moderado; sobrevida em 5 anos 60-80% com tratamento multimodal',
      colorCode: 'danger'
    },
    {
      id: 'malignant-iib',
      label: 'Maligno - Estagio IIB',
      description: 'Alto grau, extracompartimental',
      criteria: [
        'Tumor maligno de alto grau histologico (G2)',
        'Extensao extracompartimental',
        'Invade tecidos moles adjacentes',
        'Sem metastases a distancia',
        'Mais comum na apresentacao inicial'
      ],
      treatment: 'Quimioterapia neoadjuvante + resseccao ampla (pode necessitar amputacao se margem inadequada) + quimioterapia adjuvante',
      prognosis: 'Reservado; sobrevida em 5 anos 40-60%; depende de resposta a quimioterapia e margens cirurgicas',
      colorCode: 'danger'
    },
    {
      id: 'malignant-iii',
      label: 'Maligno - Estagio III',
      description: 'Qualquer grau com metastases',
      criteria: [
        'Tumor maligno de qualquer grau (G1 ou G2)',
        'Intra ou extracompartimental',
        'Metastases a distancia presentes',
        'Metastases pulmonares sao as mais frequentes',
        'Metastases osseas ou linfonodais em alguns tipos'
      ],
      treatment: 'Quimioterapia intensiva; resseccao do tumor primario + metastasectomia pulmonar se viavel; tratamento paliativo se doenca disseminada',
      prognosis: 'Mau prognostico; sobrevida em 5 anos 15-30% se metastases ressecaveis; <10% se irressecaveis',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Grau histologico (G1/G2) e compartimentalizacao definem o estadio. O sistema de Enneking e a base do planejamento cirurgico em oncologia ortopedica e determina o tipo de margem necessaria.',
  pitfall: 'Biopsia deve ser planejada no trajeto da resseccao definitiva. Biopsia mal planejada pode contaminar compartimentos adicionais e comprometer o salvamento do membro.',
  references: [
    'Enneking WF, Spanier SS, Goodman MA. A system for the surgical staging of musculoskeletal sarcoma. Clin Orthop Relat Res. 1980;(153):106-120.',
    'Enneking WF. A system of staging musculoskeletal neoplasms. Clin Orthop Relat Res. 1986;(204):9-24.'
  ]
};
