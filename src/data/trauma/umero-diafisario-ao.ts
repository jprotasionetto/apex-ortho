import type { ClassificationData } from '@/types/tool';

export const umeroDiafisarioAOData: ClassificationData = {
  id: 'umero-diafisario-ao',
  name: 'Classificação AO — Fratura Diafisária do Úmero (12)',
  author: 'Müller / AO Foundation',
  year: 2018,
  grades: [
    {
      id: 'ao-12a',
      label: 'AO 12-A — Simples (Simple)',
      description: 'Fratura diafisária simples com dois fragmentos — traço único sem cominuição',
      criteria: [
        'AO 12-A1: fratura espiral (spiral) — traço oblíquo longo ≥ 45° ao eixo',
        'AO 12-A2: fratura oblíqua (oblique) — traço oblíquo < 45° ao eixo',
        'AO 12-A3: fratura transversa (transverse) — traço perpendicular ao eixo (< 30°)',
        'Sem fragmento livre intermediário',
        'Contato entre fragmentos após redução adequada',
        'Prognóstico de consolidação favorável com tratamento correto',
        'Tratamento conservador (sarmiento) viável para A1 e A2 sem lesão nervosa'
      ],
      treatment: 'Conservador (brace funcional de Sarmiento) para maioria dos tipos A — aceita angulação < 20° anterior, < 30° varo, < 40° rotação, sem diastase. Cirurgia (haste intramedular ou placa): politrauma, fratura bilateral, tórax flutuante, fratura exposta, lesão nervosa progressiva, incapacidade de manter redução aceitável.',
      prognosis: '95% de consolidação com tratamento conservador adequado. Lesão do nervo radial: 8-15% (fratura distal 1/3 = Holstein-Lewis). 70% recuperam espontaneamente em 3-4 meses.',
      colorCode: 'safe'
    },
    {
      id: 'ao-12b',
      label: 'AO 12-B — Cunha (Wedge)',
      description: 'Fratura com fragmento intermediário em cunha — contato cortical mantido após redução',
      criteria: [
        'AO 12-B1: cunha espiral (spiral wedge) — fragmento em cunha de traço espiral',
        'AO 12-B2: cunha dobrada (bending wedge) — fragmento triangular',
        'AO 12-B3: cunha fragmentada — cunha com cominuição',
        'Fragmento intermediário sem contato com ambos os fragmentos principais após redução',
        'Contato cortical entre fragmentos proximal e distal após redução',
        'Maior instabilidade que tipo A',
        'Frequentemente requer fixação cirúrgica para estabilidade adequada'
      ],
      treatment: 'Tendência à fixação cirúrgica — placa ORIF (abordagem posterior com identificação do nervo radial) ou haste intramedular. Brace de Sarmiento pode ser tentado em selecionados casos B1/B2 com bom alinhamento.',
      prognosis: 'Bom prognóstico com fixação adequada. Consolidação esperada em 10-16 semanas. Lesão iatrogênica do nervo radial: 5-10% na fixação com placa posterior.',
      colorCode: 'caution'
    },
    {
      id: 'ao-12c',
      label: 'AO 12-C — Multifragmentária (Complex)',
      description: 'Fratura diafisária com múltiplos fragmentos — sem contato entre fragmentos principais após redução',
      criteria: [
        'AO 12-C1: multifragmentária espiral (spiral) — múltiplos traços espirais',
        'AO 12-C2: multifragmentária segmentar — dois traços principais com fragmento intermediário cilíndrico',
        'AO 12-C3: multifragmentária irregular — cominuição grave',
        'Sem contato entre fragmentos proximal e distal após redução',
        'Alta energia — frequentemente fratura exposta ou politrauma',
        'Risco elevado de lesão neurovascular',
        'Requer fixação cirúrgica definitiva'
      ],
      treatment: 'Cirúrgico obrigatório: haste intramedular bloqueada (preferida para diáfise) OU placa locking (AO MIPO técnica minimamente invasiva) para C1/C2. Controle de danos com fixador externo se instabilidade sistêmica. Enxerto ósseo considerar em C3 com perda óssea.',
      prognosis: 'Prognóstico reservado comparado aos tipos A e B. Maior taxa de pseudartrose (5-10%). Lesão vascular rara mas grave — artéria braquial em risco. Recuperação neurológica mais lenta nas lesões de alta energia.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Fratura de Holstein-Lewis: fratura em espiral do 1/3 distal do úmero — alta associação com lesão do nervo radial (nervo perfura o septo intermuscular lateral nesta região). Exploração cirúrgica obrigatória se: palsy radial após manipulação, palsy radial em fratura exposta, ou palsy radial que não recupera em 3-4 meses. Brace de Sarmiento (brace funcional): aplicado 1-2 semanas após lesão, quando edema reduzido. Aceitar: angulação anterior ≤ 20°, varo ≤ 30°, rotação ≤ 40°, sem diastase. Controle radiológico semanal nas primeiras 3 semanas.',
  pitfall: 'O nervo radial espirala ao redor da diáfise umeral no sulco espiral (entre 1/3 médio e 1/3 distal) e perfura o septo intermuscular lateral 10 cm acima do epicôndilo lateral. Na abordagem posterior com placa: identificar e proteger o nervo radial — dissecção entre tríceps lateral e medial. NÃO confundir paralisia radial PRIMÁRIA (lesão no trauma) com SECUNDÁRIA (iatrogênica). Palsy primária: 70% recuperam espontaneamente — conduta conservadora inicial. Palsy secundária após cirurgia: exploração imediata.',
  references: [
    { authors: 'Sarmiento A, Kinman PB, Galvin EG, et al', title: 'Functional bracing of fractures of the shaft of the humerus', journal: 'J Bone Joint Surg Am', year: 1977 },
    { authors: 'Ekholm R, Adami J, Tidermark J, et al', title: 'Fractures of the shaft of the humerus. An epidemiological study of 401 fractures', journal: 'J Bone Joint Surg Br', year: 2006 }
  ]
};
