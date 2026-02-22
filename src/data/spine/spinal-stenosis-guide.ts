export const spinalStenosisGuide = {
  id: 'spinal-stenosis-guide',
  name: 'Guia de Estenose do Canal Vertebral',
  category: 'guide',
  sections: [
    {
      title: 'Tipos de Estenose',
      content: [
        '**Estenose Central:**',
        '- Estreitamento do canal vertebral central',
        '- Causas: hipertrofia facetária, espessamento do ligamento amarelo, protrusão discal, espondilolistese',
        '- Comprime saco dural e raízes da cauda equina',
        '- Causa: claudicação neurogênica bilateral',
        '',
        '**Estenose do Recesso Lateral:**',
        '- Estreitamento do recesso lateral (entre faceta e corpo vertebral)',
        '- Comprime a raiz nervosa transeunte (descending root)',
        '- Hipertrofia da faceta superior é causa mais comum',
        '- Causa: radiculopatia unilateral',
        '',
        '**Estenose Foraminal:**',
        '- Estreitamento do forame de conjugação',
        '- Comprime a raiz nervosa de saída (exiting root)',
        '- Causas: osteófitos, hipertrofia facetária, colapso discal, espondilolistese',
        '- Causa: radiculopatia do nível correspondente',
        '- Acentua-se com extensão e rotação ipsilateral'
      ]
    },
    {
      title: 'Apresentação Clínica',
      content: [
        '**Claudicação Neurogênica vs Vascular:**',
        '',
        '| Característica | Neurogênica | Vascular |',
        '|---|---|---|',
        '| Dor | Lombar + MMII bilateral | Panturrilha/coxas |',
        '| Posição | Piora em extensão | Indiferente |',
        '| Alívio | Flexão (sentar, carrinho supermercado) | Parar de andar |',
        '| Bicicleta | Sem sintomas (posição fletida) | Piora (exercício) |',
        '| Subir escada | Sem dificuldade (flexão) | Piora |',
        '| Descer escada | Piora (extensão) | Sem dificuldade |',
        '| Pulsos | Normais | Diminuídos |',
        '',
        '**Shopping Cart Sign:** Paciente se inclina para frente ao caminhar (posição do carrinho de supermercado) = estenose lombar',
        '',
        '**Exame Neurológico:**',
        '- Pode ser normal em repouso',
        '- Déficit motor/sensitivo pode aparecer após caminhar (teste de estresse)',
        '- Reflexos podem estar diminuídos'
      ]
    },
    {
      title: 'Diagnóstico por Imagem',
      content: [
        '**Ressonância Magnética (exame de escolha):**',
        '',
        '**Critérios de gravidade (diâmetro AP do canal):**',
        '- Normal: >12mm',
        '- Estenose moderada: 10-12mm',
        '- Estenose severa: <10mm',
        '',
        '**Avaliação na RM:**',
        '- Área de secção transversal do saco dural (área <100mm² = severa)',
        '- Classificação de Schizas (baseada na morfologia do líquido cefalorraquidiano):',
        '  - Grau A: sem estenose (LCR claro)',
        '  - Grau B: estenose moderada (LCR irregular)',
        '  - Grau C: estenose severa (sem LCR visível, raízes agrupadas)',
        '  - Grau D: estenose extrema (sem LCR, sem raízes individualizáveis)',
        '',
        '**TC mielografia:**',
        '- Alternativa se RM contraindicada',
        '- Dinâmica (ortostatismo) pode mostrar estenose oculta',
        '',
        '**Radiografia:**',
        '- Dinâmica (flexão/extensão): avaliar instabilidade segmentar',
        '- Panorâmica: avaliar equilíbrio sagital'
      ]
    },
    {
      title: 'Tratamento',
      content: [
        '**Conservador (primeira linha):**',
        '- Fisioterapia: exercícios em flexão (Williams), fortalecimento core, condicionamento aeróbico',
        '- Analgesia: AINE, neuromoduladores (gabapentina, pregabalina)',
        '- Infiltração epidural de corticosteroide: alívio temporário (3-6 meses)',
        '- Orientação: evitar extensão prolongada',
        '',
        '**Cirúrgico (quando conservador falha):**',
        '',
        '**Indicações:**',
        '- Claudicação neurogênica refratária ao tratamento conservador (>3-6 meses)',
        '- Déficit neurológico progressivo',
        '- Síndrome da cauda equina',
        '- Limitação funcional significativa',
        '',
        '**Técnicas:**',
        '- Laminectomia descompressiva: padrão-ouro para estenose central',
        '- Laminotomia bilateral: preserva mais estrutura posterior',
        '- Laminectomia + fusão: se instabilidade associada (espondilolistese, escoliose)',
        '- Dispositivo interespinhoso (Coflex): casos selecionados Grau I listese',
        '- Descompressão minimamente invasiva: laminotomia unilateral com descompressão bilateral (ULBD)',
        '',
        '**Resultados Cirúrgicos:**',
        '- 60-80% melhora significativa dos sintomas',
        '- SPORT Trial: benefício cirúrgico mantido aos 4 anos',
        '- Taxa de reoperação: 10-15% em 5 anos'
      ]
    }
  ],
  clinicalPearl: 'Shopping Cart Sign: paciente que se inclina para frente ao caminhar sugere estenose lombar (alívio com flexão). Claudicação neurogênica melhora ao sentar/fletir; vascular melhora apenas ao parar de caminhar.',
  pitfall: 'Não confundir claudicação neurogênica com vascular. Pulsos periféricos normais + piora ao descer escada + alívio ao sentar = neurogênica. Sempre avaliar instabilidade segmentar (radiografia dinâmica) antes de planejar descompressão isolada.',
  references: [
    'Weinstein JN, et al. Surgical versus nonsurgical therapy for lumbar spinal stenosis. N Engl J Med. 2008;358(8):794-810.',
    'Katz JN, Harris MB. Clinical practice. Lumbar spinal stenosis. N Engl J Med. 2008;358(8):818-825.',
    'Schizas C, et al. Qualitative grading of severity of lumbar spinal stenosis based on the morphology of the dural sac on magnetic resonance images. Spine. 2010;35(21):1919-1924.'
  ]
};
