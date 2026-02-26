import type { ClassificationData } from '@/types/classification';

export const castellviClassification: ClassificationData = {
  id: 'castellvi-classification',
  name: 'Classificação de Castellvi — Vértebra de Transição Lombossacral (VTLS)',
  author: 'Castellvi',
  year: 1984,
  epidemiology: 'A vértebra de transição lombossacral (VTLS) é uma variação anatômica congênita com prevalência de 4–35% na população geral (variação por critério diagnóstico). A VTLS pode ser sacralização do L5 (fusão com o sacro) ou lombarização do S1 (S1 com morfologia lombar). A síndrome de Bertolotti — lombalgia associada à VTLS — afeta 4–8% dos adultos jovens com dor lombar. Indivíduos com VTLS têm menor mobilidade no segmento de transição, maior estresse nos segmentos adjacentes (L4-L5 frequentemente) e risco aumentado de hérnia de disco e artrose facetária em L4-L5.',
  mechanism: 'A VTLS resulta de falha na segmentação embriológica da coluna lombossacral. O processo transverso anômalo (hipertrófico ou fundido) cria uma neoarticulação (pseudoartrose) ou fusão óssea com o sacro/ilíaco. O número de vértebras lombares pode variar: no caso de sacralização, o indivíduo tem apenas 4 vértebras lombares móveis; na lombarização, tem 6. A contagem de vértebras a partir do sacro (numeração "de baixo para cima") é fundamental para evitar erros cirúrgicos de nível. Técnica de Farshad: contar a partir da última costela ou usar ressonância magnética com todo o sacro visível.',
  surgicalBasis: 'Implicações cirúrgicas: (1) Identificação correta do nível é crítica — erros de nível em cirurgia de coluna são mais comuns com VTLS. (2) Artrodese na VTLS: nos Tipos III e IV, o segmento de transição é fixo, e a artrodese deve incluir L4-L5 (segmento mais sintomático). (3) Ressecção da neoarticulação (Tipo II) pode aliviar a dor em casos selecionados. (4) Injeção na pseudoartrose diagnóstica: se alívio > 80%, ressecção ou bloqueio crônico são opções.',
  grades: [
    {
      id: 'tipo-ia',
      label: 'Tipo IA — Processo Transverso Displásico Unilateral',
      description: 'Processo transverso unilateral hipertrófico (≥19 mm de largura), sem fusão óssea',
      criteria: [
        'Processo transverso unilateral com largura ≥ 19 mm',
        'Sem contato ósseo com o sacro ou ilíaco',
        'Aspecto displásico mas sem neoarticulação',
        'Mobilidade lombar preservada neste nível',
        'Pode ser assintomático ou causar dor lombar unilateral'
      ],
      treatment: 'Geralmente assintomático. Se sintomático: fisioterapia, anti-inflamatórios, infiltração diagnóstica/terapêutica. Ressecção cirúrgica em casos refratários com confirmação por bloqueio anestésico positivo.',
      prognosis: 'Forma mais leve; menor impacto funcional. Boa resposta ao tratamento conservador.',
      colorCode: 'safe'
    },
    {
      id: 'tipo-ib',
      label: 'Tipo IB — Processo Transverso Displásico Bilateral',
      description: 'Processo transverso bilateral hipertrófico (≥19 mm), sem fusão óssea',
      criteria: [
        'Processo transverso bilateral com largura ≥ 19 mm',
        'Sem contato ósseo com sacro ou ilíaco',
        'Simetria bilateral do achado',
        'Mobilidade preservada',
        'Pode causar lombalgia mecânica bilateral'
      ],
      treatment: 'Mesmo protocolo do Tipo IA. Tratamento conservador. Se bilateral e sintomático, bloqueio diagnóstico bilateral para identificar o lado mais contributivo.',
      prognosis: 'Similar ao Tipo IA. Leve risco aumentado de hipermobilidade em L4-L5 por sobrecarga.',
      colorCode: 'safe'
    },
    {
      id: 'tipo-iia',
      label: 'Tipo IIA — Neoarticulação Unilateral (Pseudoartrose)',
      description: 'Processo transverso unilateral em contato articular com o sacro/ilíaco, formando pseudoartrose',
      criteria: [
        'Processo transverso unilateral em contato com o sacro ou ilíaco',
        'Presença de cartilagem articular ou espaço articular na TC',
        'Neoarticulação (falsa articulação) unilateral',
        'Mobilidade parcialmente restrita neste nível',
        'Síndrome de Bertolotti frequentemente presente',
        'Dor lombar unilateral irradiando para glúteo ipsilateral'
      ],
      treatment: 'Infiltração na neoarticulação com corticoide + anestésico (diagnóstica e terapêutica). Se alívio > 80%: ressecção cirúrgica da pseudoartrose (abordagem posterior ou minimamente invasiva) ou radiofrequência.',
      prognosis: 'Resolução em 60–70% com ressecção cirúrgica. Recorrência possível se L4-L5 degenera. Artrodese L4-S1 reservada para falha da ressecção com degeneração discal associada.',
      colorCode: 'caution'
    },
    {
      id: 'tipo-iib',
      label: 'Tipo IIB — Neoarticulação Bilateral (Pseudoartrose)',
      description: 'Pseudoartrose bilateral — processo transverso em contato articular com sacro/ilíaco dos dois lados',
      criteria: [
        'Processo transverso bilateral em contato com sacro/ilíaco',
        'Neoarticulações bilaterais',
        'Mobilidade muito restrita na vértebra de transição',
        'Dor lombar bilateral, frequentemente com irradiação',
        'Movimento paradoxal em L4-L5 (sobrecarga)'
      ],
      treatment: 'Infiltrações bilaterais. Ressecção bilateral ou artrodese L4-sacro em casos refratários graves com degeneração de L4-L5 associada.',
      prognosis: 'Maior complexidade cirúrgica. Artrodese frequentemente necessária em longo prazo por sobrecarga em L4-L5.',
      colorCode: 'caution'
    },
    {
      id: 'tipo-iiia',
      label: 'Tipo IIIA — Fusão Óssea Incompleta Unilateral',
      description: 'Fusão óssea parcial unilateral entre processo transverso e sacro/ilíaco',
      criteria: [
        'Fusão óssea parcial unilateral visível na TC/Rx',
        'Contato ósseo sem espaço articular',
        'Mobilidade significativamente reduzida no segmento',
        'Assimetria de movimento — rotação e inclinação laterais assimétricas',
        'Risco de hipermobilidade contralateral compensatória'
      ],
      treatment: 'Se sintomático: artrodese cirúrgica completando a fusão (L5-sacro) e incluindo L4-L5 se degenerado. Ressecção raramente indicada neste tipo.',
      prognosis: 'Evolução para fusão completa possível. Maior risco de degeneração em L4-L5 ipsilateral.',
      colorCode: 'danger'
    },
    {
      id: 'tipo-iiib',
      label: 'Tipo IIIB — Fusão Óssea Incompleta Bilateral',
      description: 'Fusão óssea parcial bilateral entre processos transversos e sacro/ilíaco',
      criteria: [
        'Fusão parcial bilateral',
        'Vértebra de transição quase fixada ao sacro',
        'Muito pouca mobilidade residual no segmento',
        'Redistribuição de carga para L4-L5 (segmento adjacente)'
      ],
      treatment: 'Artrodese L4-sacro (incluindo o segmento de transição) quando indicado. Paciente frequentemente oligossintomático pelo segmento já quase imóvel.',
      prognosis: 'Segmento de transição funciona como sacro adicional. Degeneração de L4-L5 é a principal preocupação a longo prazo.',
      colorCode: 'danger'
    },
    {
      id: 'tipo-iva',
      label: 'Tipo IV — Fusão Completa Bilateral',
      description: 'Sacralização completa bilateral do L5 — vértebra totalmente fundida ao sacro, formando bloco osseo único',
      criteria: [
        'Fusão óssea completa bilateral',
        'L5 fundido ao sacro bilateral e completamente',
        'Efetivamente apenas 4 vértebras lombares móveis',
        'Sem articulação visível entre L5 e sacro',
        'Geralmente assintomático no nível de fusão',
        'L4-L5 é o segmento mais estressado (risco de degeneração)'
      ],
      treatment: 'Frequentemente assintomático. Se dor em L4-L5: tratamento conservador e, se necessário, artrodese L4-sacro. Numeração de vértebras crítica para qualquer cirurgia de coluna.',
      prognosis: 'O segmento de transição é fixo. L4-L5 acelera sua degeneração — hérnia de disco e estenose em L4-L5 são as principais complicações tardias.',
      colorCode: 'info'
    }
  ],
  clinicalPearl: 'Sempre identificar VTLS no pré-operatório de qualquer cirurgia de coluna lombar! A contagem errônea de níveis é a principal causa de cirurgia no nível errado (never event). Use RM com todo o sacro visível ou RX de tórax para contar a partir da T12/costelas.',
  pitfall: 'A síndrome de Bertolotti pode mimetizar hérnia de disco L4-L5 ou L5-S1. O bloqueio diagnóstico na neoarticulação (Tipos IIA/IIB) deve preceder qualquer decisão cirúrgica para confirmar a neoarticulação como gerador de dor.',
  references: [
    { id: 'r1', text: 'Castellvi AE, et al. Transitional lumbosacral vertebrae and their relationship with lumbar extradural defects. Spine. 1984;9(5):493-495.' },
    { id: 'r2', text: 'Konin GP, Walz DM. Lumbosacral transitional vertebrae: classification, imaging findings, and clinical relevance. AJNR Am J Neuroradiol. 2010;31(10):1778-1786.' },
    { id: 'r3', text: 'Farshad-Amacker NA, et al. MRI characteristics of transitional lumbosacral vertebrae. Eur Spine J. 2014;23(11):2406-2412.' }
  ]
};
