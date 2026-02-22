import type { ClassificationData } from '@/types/tool';

export const sandersClassificationData: ClassificationData = {
  id: 'sanders-classification',
  name: 'Classificação de Sanders — Fraturas do Calcâneo',
  author: 'Sanders',
  year: 1992,
  grades: [
    {
      id: 'sanders-i',
      label: 'Sanders Tipo I — Não Deslocada',
      description: 'Fratura articular não deslocada da faceta posterior — qualquer número de linhas de fratura com desvio < 2 mm',
      criteria: [
        'Fratura da faceta posterior do calcâneo sem desvio significativo (< 2 mm)',
        'Pode haver múltiplas linhas de fratura, todas sem desvio',
        'TC coronal: faceta posterior articular contínua e sem degrau articular',
        'Ângulo de Böhler preservado (normal: 25–40°)',
        'Ângulo crítico de Gissane preservado (normal: 95–105°)',
        'Corresponde a qualquer fratura não deslocada independente do padrão'
      ],
      treatment: 'Conservador: imobilização e carga progressiva conforme tolerância. Mobilização precoce do tornozelo encorajada para nutrição cartilaginosa. Resultado funcional comparável ao cirúrgico neste tipo.',
      prognosis: 'Excelente prognóstico. Consolidação sem sequelas articulares na maioria dos casos. Artrose subtalar rara se mantido sem desvio.',
      colorCode: 'safe'
    },
    {
      id: 'sanders-iia',
      label: 'Sanders Tipo IIA — 2 Fragmentos (Linha A)',
      description: 'Fratura em 2 fragmentos da faceta posterior com linha de fratura na coluna A (lateral)',
      criteria: [
        'Fratura da faceta posterior em 2 fragmentos com desvio ≥ 2 mm',
        'Linha de fratura na coluna A — terço lateral da faceta posterior',
        'TC coronal: 2 fragmentos articulares principais',
        'Ângulo de Böhler reduzido (frequentemente < 20°)',
        'Ângulo de Gissane alterado',
        'Sem cominuição central da faceta — prognóstico favorável para ORIF'
      ],
      treatment: 'Cirurgia: redução aberta e fixação interna (ORIF) via abordagem lateral extensível (L invertido ou sinus tarsi minimamente invasivo). Fixação com placa de calcâneo anatômica ± parafusos de suporte articular. Cirurgia ideal 7–14 dias após trauma (aguardar resolução edema — sinal da prega cutânea positivo).',
      prognosis: 'Bom prognóstico com ORIF adequado. Taxa de artrose subtalar 20–30%. Resultados melhores que tipos III e IV.',
      colorCode: 'caution'
    },
    {
      id: 'sanders-iib',
      label: 'Sanders Tipo IIB — 2 Fragmentos (Linha B)',
      description: 'Fratura em 2 fragmentos da faceta posterior com linha de fratura na coluna B (central)',
      criteria: [
        'Fratura da faceta posterior em 2 fragmentos com desvio ≥ 2 mm',
        'Linha de fratura na coluna B — terço central da faceta posterior',
        'TC coronal: 2 fragmentos articulares principais, fratura mais medial que IIA',
        'Ângulo de Böhler reduzido',
        'Padrão mais comum de Sanders Tipo II',
        'Fratura primária através do sulco interfacetário (critical angle of Gissane)'
      ],
      treatment: 'Cirurgia: ORIF via abordagem lateral extensível. Placa anatômica de calcâneo. Técnica de redução: restaurar altura do calcâneo, ângulo de Böhler e congruência articular subtalar.',
      prognosis: 'Bom prognóstico com ORIF. Resultado funcional superior ao conservador em pacientes ativos com desvio articular. Taxa de artrose subtalar 25–35%.',
      colorCode: 'caution'
    },
    {
      id: 'sanders-iic',
      label: 'Sanders Tipo IIC — 2 Fragmentos (Linha C)',
      description: 'Fratura em 2 fragmentos da faceta posterior com linha de fratura na coluna C (medial)',
      criteria: [
        'Fratura da faceta posterior em 2 fragmentos com desvio ≥ 2 mm',
        'Linha de fratura na coluna C — terço medial da faceta posterior',
        'TC coronal: linha de fratura próxima ao processo sustentacular',
        'Sustentáculo tali frequentemente intacto (sustentáculo "constante" — fixo ao tálus pelos ligamentos)',
        'Tipo II menos comum — fratura mais medial',
        'Pode envolver a faceta média (medial) do calcâneo'
      ],
      treatment: 'Cirurgia: ORIF com atenção especial ao fragmento medial. Abordagem lateral ± abordagem medial adicional se necessário. Sustentáculo tali intacto serve como referência para redução.',
      prognosis: 'Bom prognóstico similar ao IIA e IIB com redução adequada. O sustentáculo tali intacto facilita a redução anatômica.',
      colorCode: 'caution'
    },
    {
      id: 'sanders-iiiab',
      label: 'Sanders Tipo IIIAB — 3 Fragmentos (Linhas A + B)',
      description: 'Fratura em 3 fragmentos da faceta posterior com linhas de fratura A e B — fragmento central deprimido',
      criteria: [
        'Fratura da faceta posterior em 3 fragmentos articulares',
        'Linhas de fratura A e B presentes simultaneamente',
        'Fragmento central da faceta tipicamente deprimido ("die-punch")',
        'TC coronal: 3 fragmentos articulares distintos',
        'Ângulo de Böhler significativamente reduzido ou negativo',
        'Cominuição parcial da faceta — maior dificuldade técnica para redução'
      ],
      treatment: 'Cirurgia: ORIF tecnicamente desafiadora. Abordagem lateral extensível. Enxerto ósseo frequentemente necessário para preencher o vazio central após elevação do fragmento deprimido. Placa anatômica de calcâneo. Alguns autores consideram artrodese subtalar primária em pacientes selecionados.',
      prognosis: 'Prognóstico moderado. Taxa de artrose subtalar 50–60%. Resultados funcionais inferiores aos tipos II. Considerar artrodese subtalar primária em pacientes > 50 anos com osteoporose ou lesão articular grave.',
      colorCode: 'danger'
    },
    {
      id: 'sanders-iiiac',
      label: 'Sanders Tipo IIIAC — 3 Fragmentos (Linhas A + C)',
      description: 'Fratura em 3 fragmentos da faceta posterior com linhas de fratura A e C — fragmento central de localização B',
      criteria: [
        'Fratura da faceta posterior em 3 fragmentos articulares',
        'Linhas de fratura A e C presentes (sem linha B)',
        'Fragmento central corresponde à coluna B da faceta',
        'TC coronal: 3 fragmentos com fragmento central de largura moderada',
        'Padrão menos comum que IIIAB',
        'Cominuição envolvendo colunas lateral e medial'
      ],
      treatment: 'Cirurgia: ORIF via abordagem lateral. Reconstrução articular complexa com 3 fragmentos. Enxerto ósseo se necessário. Placa anatômica de calcâneo com parafusos articulares.',
      prognosis: 'Prognóstico moderado a reservado. Artrose subtalar frequente. Resultados funcionais comprometidos pela cominuição da faceta posterior.',
      colorCode: 'danger'
    },
    {
      id: 'sanders-iiibc',
      label: 'Sanders Tipo IIIBC — 3 Fragmentos (Linhas B + C)',
      description: 'Fratura em 3 fragmentos da faceta posterior com linhas de fratura B e C — fragmento lateral isolado',
      criteria: [
        'Fratura da faceta posterior em 3 fragmentos articulares',
        'Linhas de fratura B e C presentes (sem linha A)',
        'Fragmento lateral corresponde à coluna A da faceta',
        'TC coronal: 3 fragmentos com fragmento lateral pequeno',
        'Cominuição envolvendo colunas central e medial',
        'Sustentáculo relativamente preservado'
      ],
      treatment: 'Cirurgia: ORIF via abordagem lateral. Atenção ao fragmento lateral pequeno — pode necessitar de parafuso adicional ou enxerto. Fixação do fragmento medial-central ao sustentáculo intacto.',
      prognosis: 'Prognóstico moderado a reservado. Artrose subtalar frequente a longo prazo.',
      colorCode: 'danger'
    },
    {
      id: 'sanders-iv',
      label: 'Sanders Tipo IV — Cominutiva (4+ Fragmentos)',
      description: 'Fratura altamente cominutiva da faceta posterior com 4 ou mais fragmentos articulares — todas as linhas de fratura (A, B e C) presentes',
      criteria: [
        'Fratura da faceta posterior com 4 ou mais fragmentos articulares',
        'Todas as linhas de fratura (A, B e C) presentes na TC coronal',
        'Cominuição grave de toda a faceta posterior',
        'Ângulo de Böhler frequentemente negativo (< 0°)',
        'Ângulo de Gissane gravemente alterado',
        'Expansão lateral do calcâneo causando compressão dos tendões fibulares',
        'Frequentemente associada a quedas de grande altura ou esmagamento'
      ],
      treatment: 'Controverso: ORIF com artrodese subtalar primária (gold standard em muitos centros) OU artrodese subtalar primária isolada via abordagem lateral ± fixação externa temporária. Conservador pode ser considerado em pacientes com comorbidades graves, tabagismo pesado, diabetes insulino-dependente ou lesão de partes moles grave (bolha sanguinolenta = contraindicação relativa a ORIF).',
      prognosis: 'Prognóstico reservado. ORIF isolada raramente restaura a congruência articular. Artrodese subtalar secundária necessária em 30–50% dos casos operados. A artrodese subtalar primária pode oferecer resultados funcionais superiores à ORIF isolada neste tipo.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Ângulo de Böhler (Böhler angle): medido no RX lateral — entre a linha do processo posterior ao ápice da faceta posterior E a linha do ápice da faceta anterior ao ápice da faceta posterior. Normal: 25–40°. Redução indica colapso articular. Ângulo negativo = colapso grave. Ângulo Crítico de Gissane (Gissane angle ou critical angle): ângulo no ápice do "bico" do calcâneo (sulco interfacetário) na lateral. Normal: 95–105°. Aumentado nas fraturas cominutivas. A TC em coronal é obrigatória — os 3 pontos de referência da classificação de Sanders (A, B, C) são definidos na projeção coronal na faceta posterior da articulação subtalar: A = lateral (junto ao tubérculo fibular), B = central (sulco interfacetário), C = medial (junto ao sustentáculo).',
  pitfall: 'Sinal da "prega cutânea" (wrinkle sign): indica resolução suficiente do edema para cirurgia — aguardar 7–14 dias. Bolha sanguinolenta (blood-filled fracture blister) = risco aumentado de complicações de ferida — aguardar ou reconsiderar abordagem. Contraindições relativas à ORIF: tabagismo (OR 3,6 para complicações de ferida), diabetes, doença vascular periférica, baixa demanda funcional. O sustentáculo tali é o ponto "constante" do calcâneo — raramente fratura — e serve como âncora para a reconstrução.',
  references: [
    {
      authors: 'Sanders R, Fortin P, DiPasquale T, Walling A',
      title: 'Operative treatment in 120 displaced intraarticular calcaneal fractures. Results using a prognostic computed tomography scan classification',
      journal: 'Clin Orthop Relat Res',
      year: 1993
    },
    {
      authors: 'Essex-Lopresti P',
      title: 'The mechanism, reduction technique, and results in fractures of the os calcis',
      journal: 'Br J Surg',
      year: 1952
    },
    {
      authors: 'Buckley R, Tough S, McCormack R, et al',
      title: 'Operative compared with nonoperative treatment of displaced intra-articular calcaneal fractures: a prospective, randomized, controlled multicenter trial',
      journal: 'J Bone Joint Surg Am',
      year: 2002
    },
    {
      authors: 'Agren PH, Wretenberg P, Sayed-Noor AS',
      title: 'Operative versus nonoperative treatment of displaced intra-articular calcaneal fractures: a prospective, randomized, controlled multicenter trial',
      journal: 'J Bone Joint Surg Am',
      year: 2013
    }
  ]
};
