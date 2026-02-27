import type { ClassificationData } from '@/types/classification.ts';

export const brookerClassificationData: ClassificationData = {
  id: 'brooker-classification',
  name: 'Classificação de Brooker – Ossificação Heterotópica',
  author: 'Brooker',
  year: 1973,
  epidemiology: 'Ossificação Heterotópica (OH) após ATQ: incidência 30–80% radiográfica, clinicamente significativa (Brooker III–IV) em 1–7%. Incidência sem profilaxia: Brooker III–IV em 5–10% após acesso de Kocher-Langenbeck (posterior). Fatores de risco: OH prévia contralateral, espondilite anquilosante, doença de Paget, DISH, cabeça femoral grande, trauma cirúrgico extenso. Risco após acesso de Kocher-Langenbeck: 3–4× maior que via anterior/anterolateral (Southern/Hardinge). Profilaxia: AINE (indometacina 75mg/dia VO por 6 semanas) OU radioterapia 700 cGy dose única (7 Gy — pré-op no dia da cirurgia OU pós-op em 72h). OH após fraturas acetabulares com acesso posterior: incidência de Brooker III–IV de 15–30% sem profilaxia. Maturação radiográfica: 12–18 meses (cintilografia óssea em fase fria = critério para ressecção). Recidiva após excisão: 15–30% mesmo com profilaxia pós-op adequada.',
  mechanism: 'Ossificação heterotópica = formação de osso maduro (lamellar) em tecidos moles extraesqueléticos. Cascata de Urist (1965): precursores mesenquimais indiferenciados + indutores locais (BMPs — bone morphogenetic proteins liberadas por trauma cirúrgico/fratura) + ambiente permissivo → diferenciação osteoblástica → calcificação progressiva. Três condições necessárias: (1) células precursoras osteogênicas (fibroblastos locais, células satélite musculares); (2) sinal indutor (BMP-2, BMP-4, PGE2 liberados por trauma); (3) ambiente permissivo (hematoma, pH favorável). Mecanismo da prevenção: AINE (indometacina) inibem COX-2 → reduzem PGE2 → inibem diferenciação osteoblástica → previnem formação de OH. RT: irradiação de baixa dose danifica DNA de precursores mesenquimais antes de diferenciação → previne OH. Timing de RT: eficaz se dada pré-op (8h antes) OU pós-op (72h após) — janela terapêutica dos precursores. Estruturas a proteger da RT: cabeça femoral, prótese, ferida operatória.',
  grades: [
    {
      id: 'class-i',
      label: 'Classe I – Ilhas Ósseas',
      description: 'Ilhas de osso nos tecidos moles ao redor do quadril.',
      criteria: [
        'Ilhas de osso dentro dos tecidos moles',
        'Sem ponte óssea entre superfícies',
        'Não limita amplitude de movimento significativamente',
        'Geralmente achado incidental',
      ],
      treatment: 'Observação na maioria dos casos. Tratamento apenas se sintomático. AINE profilático não necessário se já presente.',
      prognosis: 'Excelente. Geralmente assintomático. Progressão incomum.',
      colorCode: 'safe',
    },
    {
      id: 'class-ii',
      label: 'Classe II – Gap <1cm Entre Superfícies',
      description: 'Esporões ósseos com gap <1cm entre superfícies opostas (fêmur e pelve).',
      criteria: [
        'Esporões ósseos originando do fêmur e/ou pelve',
        'Gap <1cm entre as superfícies opostas',
        'Sem ponte óssea completa',
        'Possível limitação da amplitude de movimento',
      ],
      treatment: 'Observação se assintomático. Se limitação funcional: aguardar maturação (12-18 meses) e então excisão cirúrgica.',
      prognosis: 'Bom. Pode limitar parcialmente amplitude de movimento. Risco de progressão moderado.',
      colorCode: 'caution',
    },
    {
      id: 'class-iii',
      label: 'Classe III – Gap >1cm Entre Superfícies',
      description: 'Esporões ósseos com gap reduzido (>1cm) entre superfícies opostas.',
      criteria: [
        'Esporões ósseos originando do fêmur e pelve',
        'Gap >1cm entre as superfícies',
        'Ponte óssea incompleta mas com espaço reduzido',
        'Limitação significativa da amplitude de movimento',
      ],
      treatment: 'Excisão cirúrgica após maturação (12-18 meses). Cintilografia óssea para confirmar maturação (fase fria). Profilaxia pós-excisão obrigatória: indometacina 75mg/dia por 6 semanas ou RT dose única.',
      prognosis: 'Moderado. Limitação funcional significativa. Excisão cirúrgica com bons resultados se timing adequado.',
      colorCode: 'danger',
    },
    {
      id: 'class-iv',
      label: 'Classe IV – Anquilose',
      description: 'Anquilose aparente com ponte óssea entre fêmur e pelve.',
      criteria: [
        'Ponte óssea completa entre fêmur e pelve',
        'Anquilose do quadril',
        'Ausência ou mínima amplitude de movimento',
        'Severa limitação funcional',
      ],
      treatment: 'Excisão cirúrgica extensa após maturação completa. Profilaxia obrigatória pós-operatória. Considerar radioterapia 700cGy dose única no pré ou pós-operatório imediato.',
      prognosis: 'Reservado. Recidiva após excisão 15-30% mesmo com profilaxia. Resultado funcional pode ser limitado.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'Profilaxia com indometacina ou RT em dose unica para pacientes de risco',
  pitfall: 'Esperar maturacao (12-18 meses) antes de considerar resseccao',
  references: [
    {
      authors: 'Brooker AF, Bowerman JW, Robinson RA, Riley LH Jr',
      title: 'Ectopic ossification following total hip replacement',
      journal: 'J Bone Joint Surg Am',
      year: 1973,
    },
  ],
};
