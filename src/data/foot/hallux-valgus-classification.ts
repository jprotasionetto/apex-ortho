import type { ClassificationData } from '@/types/classification';

export const halluxValgusClassificationData: ClassificationData = {
  id: 'hallux-valgus-classification',
  name: 'Classificação do Hallux Valgus – Gravidade Radiográfica',
  author: 'Coughlin & Mann',
  year: 1993,
  epidemiology:
    'Deformidade do antepé mais comum; afeta 23% dos adultos acima de 18 anos e 36% acima de 65 anos. Mulheres são afetadas 4x mais que homens. Forte predisposição genética (herança autossômica dominante). Piora progressiva com a idade e uso de calçados inadequados (bico fino, salto alto). Associada a pé plano, frouxidão ligamentar e hipermobilidade do 1o raio.',
  mechanism:
    'Desvio lateral progressivo do hálux com desvio medial do 1o metatarso (metatarsus primus varus). A pronação do hálux e subluxação lateral dos sesamóides perpetuam a deformidade. O tendão do flexor longo do hálux desvia-se lateralmente e passa a atuar como deformante. Calçados com bico estreito e salto alto aumentam a pressão lateral sobre o hálux e aceleram a progressão.',
  surgicalBasis:
    'Indicação cirúrgica: dor persistente refratária ao conservador por no mínimo 3-6 meses. A escolha da técnica baseia-se nos ângulos radiográficos (HVA e IMA), na presença de artrose da 1a MTF e na hipermobilidade do 1o raio. Radiografias devem ser em carga. O DASA (Distal Articular Set Angle) normal é <10°; DASA aumentado indica articulação incongruente e influencia a indicação de osteotomia da falange (Akin).',
  grades: [
    {
      id: 'grade-1-mild',
      label: 'Grau 1 – Leve',
      description:
        'HVA 15-20°, IMA <12°. Articulação MTF geralmente congruente. Tratamento conservador ou procedimento minimal como Chevron (Austin).',
      criteria: [
        'Ângulo de Hallux Valgus (HVA): 15-20°',
        'Ângulo Intermetatarsal (IMA): <12°',
        'DASA normal (<10°) ou levemente aumentado',
        'Articulação MTF congruente na maioria dos casos',
        'Subluxação dos sesamóides ausente ou leve',
        'Sem artrose radiográfica da 1a MTF',
      ],
      treatment:
        'Conservador: palmilhas, espaçadores interdigitais, calçados de bico largo, órtese noturna. Cirúrgico (se falha conservadora): osteotomia distal de Chevron (Austin) – cunha de fechamento medial com translação lateral da cabeça. Permite correção de até 20° de HVA e IMA até 13°. Liberação lateral e plicatura capsular medial complementares.',
      prognosis:
        'Excelente prognóstico cirúrgico. Taxa de satisfação >90% com Chevron. Consolidação em 6-8 semanas. Retorno às atividades em 3 meses.',
      colorCode: 'safe',
    },
    {
      id: 'grade-2-moderate',
      label: 'Grau 2 – Moderado',
      description:
        'HVA 20-40°, IMA 12-16°. Articulação pode ser incongruente. Indicação de osteotomia diafisária ou proximal (Scarf, Lapidus).',
      criteria: [
        'Ângulo de Hallux Valgus (HVA): 20-40°',
        'Ângulo Intermetatarsal (IMA): 12-16°',
        'DASA pode estar aumentado (articulação incongruente)',
        'Subluxação parcial dos sesamóides',
        'Sem artrose significativa da 1a MTF',
        'Possível hipermobilidade do 1o raio',
      ],
      treatment:
        'Osteotomia de Scarf (diafisária em Z do 1o MT): permite translação, rotação e encurtamento controlados; fixação com 2 parafusos. Osteotomia crescêntica proximal ou osteotomia de base. Artrodese de Lapidus (fusão TMT) se hipermobilidade do 1o raio. Associar osteotomia de Akin (falange proximal) se DASA aumentado. Liberação lateral obrigatória.',
      prognosis:
        'Bom prognóstico com técnica adequada. Taxa de satisfação 85-90%. Consolidação Scarf em 8-10 semanas. Risco de recidiva se hipermobilidade não tratada.',
      colorCode: 'caution',
    },
    {
      id: 'grade-3-severe',
      label: 'Grau 3 – Severo',
      description:
        'HVA >40°, IMA >16°. Deformidade severa. Artrodese de Lapidus (fusão TMT) ou osteotomia proximal como opções preferenciais.',
      criteria: [
        'Ângulo de Hallux Valgus (HVA): >40°',
        'Ângulo Intermetatarsal (IMA): >16°',
        'Frequente hipermobilidade do 1o raio',
        'Subluxação completa dos sesamóides',
        'Articulação MTF geralmente incongruente',
        'Possível artrose inicial da 1a MTF',
      ],
      treatment:
        'Artrodese de Lapidus (fusão da articulação TMT do 1o raio): corrige o IMA na origem da deformidade; indicada quando há hipermobilidade do 1o raio. Osteotomia proximal de abertura/fechamento se sem hipermobilidade. Sem carga por 6-8 semanas; consolidação em 8-12 semanas. Liberação lateral completa (ligamento metatarsosesamóide lateral, adutor do hálux).',
      prognosis:
        'Prognóstico bom com correção adequada. Taxa de pseudartrose de Lapidus ~5-10%. Risco de metatarsalgia de transferência se encurtamento excessivo do 1o MT.',
      colorCode: 'danger',
    },
    {
      id: 'grade-4-arthritic',
      label: 'Grau 4 – Severo com Artrose',
      description:
        'HVA >40° associado a artrose da 1a MTF. Artrodese MTF (fusão) é o padrão-ouro. Procedimento de Keller em pacientes idosos de baixa demanda.',
      criteria: [
        'Ângulo de Hallux Valgus (HVA): >40°',
        'Artrose radiográfica da 1a MTF (pinçamento do espaço articular)',
        'Dor de caráter articular além da deformidade',
        'Limitação da mobilidade da 1a MTF',
        'Osteófitos marginais visíveis na radiografia',
        'Pode haver artrose avançada (grau III ou IV de Regnauld)',
      ],
      treatment:
        'Artrodese da 1a MTF (padrão-ouro): fusão em posição neutra com 0-10° de valgo, 0-5° de dorsiflexão; fixação com placa + parafuso interfragmentário. Procedimento de Keller (resseção da base da falange proximal): alternativa em idosos de baixa demanda, risco de instabilidade do hálux. Artroplastia total da 1a MTF: resultados inferiores à artrodese na literatura atual.',
      prognosis:
        'Artrodese MTF com excelente resultado funcional e alívio da dor. Taxa de consolidação >95%. Sem mobilidade residual da articulação; adaptação em 3-6 meses. Prognóstico do Keller mais reservado com risco de deformidade residual.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl:
    'As radiografias DEVEM ser realizadas em carga (bipedestação) para avaliação real dos ângulos. IMA aumentado com hipermobilidade do 1o raio é indicação precisa de Lapidus. Sempre avaliar congruência articular: articulação incongruente (DASA aumentado) pode necessitar de osteotomia de Akin associada.',
  pitfall:
    'Não indicar osteotomia distal (Chevron) em deformidades moderadas a severas (IMA >13°) – risco de correção insuficiente e recidiva. Encurtamento excessivo do 1o MT leva a metatarsalgia de transferência para os raios menores. Avaliar sempre os dedos menores: deformidades concomitantes devem ser corrigidas no mesmo tempo cirúrgico.',
  references: [
    {
      authors: 'Coughlin MJ, Mann RA',
      title: 'Hallux valgus. In: Surgery of the Foot and Ankle',
      journal: 'Mosby',
      year: 1993,
    },
    {
      authors: 'Nix S, Smith M, Vicenzino B',
      title: 'Prevalence of hallux valgus in the general population: a systematic review and meta-analysis',
      journal: 'Journal of Foot and Ankle Research',
      year: 2010,
    },
  ],
};
