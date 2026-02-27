import type { ClassificationData } from '@/types/tool';

export const aoClassificationData: ClassificationData = {
  id: 'ao-classification',
  name: 'Classificação AO/OTA — Compêndio 2018',
  author: 'Müller / ICCFC',
  year: 2018,
  epidemiology: 'O sistema AO/OTA é a classificação alfanumérica universal de fraturas, criado por Müller (1990) e atualizado no Compêndio 2018 (Meinberg et al., J Orthop Trauma). Compêndio 2018: removeu o hífen (31A, não 31-A), substituiu "complexa" por "multifragmentária", integrou Neer no úmero proximal (11A=unifocal, 11B=bifocal, 11C=articular), integrou exceções para fêmur proximal (31A=trocantérica, 31B=colo femoral, 31C=cabeça femoral) e padronizou os qualificadores. Usado em >150 países; codificação padronizada em ensaios clínicos, banco de dados da OTA e publicações internacionais.',
  mechanism: 'Princípio hierárquico AO A<B<C reflete crescente instabilidade e gravidade. Diafisárias: Tipo A (simples, 2 fragmentos, contato cortical total após redução) → B (cunha com fragmento intermediário, contato parcial) → C (multifragmentária, sem contato = máxima instabilidade). Segmentos finais (proximal/distal): Tipo A (extra-articular, melhor prognóstico) → B (articular parcial, parte da articulação ainda unida à diáfise) → C (articular completa, separação total = máxima complexidade técnica e pior prognóstico funcional). Para diáfises: A = tratamento conservador possível na maioria; B/C = fixação cirúrgica preferencial.',
  grades: [
    {
      id: 'diaphysis-a',
      label: 'Diáfise — Tipo A: Simples',
      description: 'Fratura diafisária com traço único de fratura circunferencial',
      criteria: [
        'A1: Espiral — traço espiralado ao longo do osso',
        'A2: Oblíqua — ângulo ≥ 30° em relação à perpendicular do eixo longo',
        'A3: Transversa — ângulo < 30° em relação à perpendicular',
        'Qualificações de localização: (a) 1/3 proximal, (b) 1/3 médio, (c) 1/3 distal',
        'Após redução, contato cortical completo entre fragmentos'
      ],
      treatment: 'Tratamento conservador ou fixação com placa/haste intramedular dependendo do osso e localização. Bom potencial de redução anatômica.',
      prognosis: 'Excelente prognóstico. Consolidação esperada dentro do tempo normal para o osso afetado.',
      colorCode: 'safe'
    },
    {
      id: 'diaphysis-b',
      label: 'Diáfise — Tipo B: Cunha (Wedge)',
      description: 'Fratura diafisária em cunha — contato entre fragmentos principais após redução',
      criteria: [
        'B2: Cunha intacta (intact wedge) — fragmento em cunha único',
        'B3: Cunha fragmentada (fragmentary wedge) — cunha em múltiplos fragmentos',
        'Após redução, há contato entre fragmentos proximal e distal',
        'Fragmento em cunha pode ser espiral ou em flexão (borboleta)',
        'Qualificações de localização: (a) 1/3 proximal, (b) 1/3 médio, (c) 1/3 distal'
      ],
      treatment: 'Frequentemente requer fixação cirúrgica. Placa com parafusos interfragmentários para a cunha ou haste intramedular bloqueada.',
      prognosis: 'Prognóstico bom a moderado dependendo da energia do trauma e integridade dos tecidos moles.',
      colorCode: 'caution'
    },
    {
      id: 'diaphysis-c',
      label: 'Diáfise — Tipo C: Multifragmentária',
      description: 'Fratura diafisária multifragmentária — sem contato entre fragmentos após redução',
      criteria: [
        'C2: Segmentar intacta (intact segmental) — dois níveis de fratura com segmento intermediário intacto',
        'C3: Segmentar fragmentada (fragmentary segmental) — múltiplos fragmentos contíguos',
        'Após redução, NÃO há contato entre fragmentos proximal e distal',
        'Terminologia 2018: "multifragmentária" substitui "complexa" das versões anteriores',
        'Qualificações: (i) diafisário-metafisário proximal, (j) diafisário puro, (k) diafisário-metafisário distal'
      ],
      treatment: 'Fixação cirúrgica: haste intramedular bloqueada é o tratamento de escolha na maioria dos ossos longos. Placa em ponte (bridging plate) como alternativa. Evitar exposição excessiva do foco.',
      prognosis: 'Prognóstico reservado. Maior risco de pseudoartrose e consolidação viciosa. Tempo de consolidação prolongado.',
      colorCode: 'danger'
    },
    {
      id: 'end-segment-a',
      label: 'Segmento Final — Tipo A: Extra-articular',
      description: 'Fratura do segmento final (proximal ou distal) sem extensão à superfície articular',
      criteria: [
        'A1: Avulsão — fratura por arrancamento (epicôndilo, tuberosidade, espinha tibial)',
        'A2: Simples — traço único metafisário (espiral, oblíqua ou transversa)',
        'A3: Cunha ou multifragmentária — fragmentação metafisária',
        'Linha de fratura NÃO atinge a superfície articular',
        'Exceções: úmero proximal (11A = unifocal/2 partes Neer), fêmur proximal (31A = trocantérica)'
      ],
      treatment: 'Variável conforme localização. Avulsões simples: conservador ou fixação. Fraturas metafisárias: placa bloqueada. Multifragmentárias: placa bloqueada longa ou fixação externa.',
      prognosis: 'Prognóstico bom a moderado. Melhor que fraturas articulares por preservar a superfície articular.',
      colorCode: 'safe'
    },
    {
      id: 'end-segment-b',
      label: 'Segmento Final — Tipo B: Articular Parcial',
      description: 'Fratura envolvendo parte da superfície articular com restante conectada à diáfise',
      criteria: [
        'B1: Split (cisão) — fragmento articular separado por cisão',
        'B2: Depressão ou split-depressão — afundamento da superfície articular',
        'B3: Multifragmentária parcial — fragmentação da porção articular envolvida',
        'Parte da articulação permanece em continuidade com a metáfise/diáfise',
        'EXCEÇÃO AO/OTA 2018: Tipo B parcial articular NÃO existe no úmero proximal (11B = bifocal/3 partes Neer) e fêmur proximal (31B = colo femoral)'
      ],
      treatment: 'Tratamento cirúrgico. Redução anatômica obrigatória da superfície articular. Parafusos interfragmentários + placa de suporte. Enxerto ósseo para defeitos por depressão.',
      prognosis: 'Prognóstico moderado. Resultado depende da qualidade da redução articular. Risco de artrose pós-traumática proporcional à incongruência residual.',
      colorCode: 'caution'
    },
    {
      id: 'end-segment-c',
      label: 'Segmento Final — Tipo C: Articular Completa',
      description: 'Separação completa da superfície articular da diáfise',
      criteria: [
        'C1: Articular simples + metáfise simples',
        'C2: Articular simples + metáfise cunha ou multifragmentária',
        'C3: Articular multifragmentária + metáfise multifragmentária',
        'Superfície articular completamente separada da diáfise',
        'Exceções: úmero proximal (11C = articular/4 partes Neer), fêmur proximal (31C = cabeça femoral)'
      ],
      treatment: 'Cirúrgico. Estratégia em 2 etapas: 1) reconstruir superfície articular anatomicamente; 2) fixar bloco articular à diáfise. Considerar fixação externa temporária (staged).',
      prognosis: 'Prognóstico reservado. Maior risco de artrose pós-traumática, rigidez, pseudoartrose e infecção. C3 tem pior prognóstico.',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Codificação AO/OTA 2018: Osso + Segmento + Tipo + Grupo.Subgrupo(qualificação)[modificador universal]. Ex: 42A1(a) = tíbia, diáfise, simples, espiral, 1/3 proximal. Hífen removido no compêndio 2018. Exceções: úmero proximal integrou Neer (11A=unifocal, 11B=bifocal, 11C=articular); fêmur proximal usa 31A=trocantérica, 31B=colo, 31C=cabeça; parede lateral do trocânter (≤ 20,5 mm = 31A2 incompetente).',
  pitfall: 'Classificar somente com informação completa (Rx em 2 incidências + TC para articulares). A classificação final pode ser determinada apenas no intraoperatório. O termo "complexa" foi substituído por "multifragmentária" no compêndio 2018 para evitar confusão terminológica.',
  references: [
    {
      authors: 'Müller ME, Nazarian S, Koch P, Schatzker J',
      title: 'The Comprehensive Classification of Fractures of Long Bones',
      journal: 'Springer-Verlag',
      year: 1990
    },
    {
      authors: 'Meinberg EG, Agel J, Roberts CS, Karam MD, Kellam JF',
      title: 'Fracture and Dislocation Classification Compendium—2018',
      journal: 'J Orthop Trauma',
      year: 2018
    }
  ]
};
