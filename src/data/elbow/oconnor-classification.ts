import type { ClassificationData } from '@/types/classification.ts';

export const oconnorClassificationData: ClassificationData = {
  id: 'oconnor-classification',
  name: 'Classificação de OConnor – OCD do Cotovelo',
  author: 'OConnor',
  year: 1992,
  epidemiology: 'OCD do cotovelo afeta 0,1–0,3/100.000 jovens atletas (13–16 anos). Capitellum envolvido em 85–90% dos casos (face anterolateral). Predomina em atletas de arremesso e ginastas. Diagnóstico diferencial com Doença de Panner: Panner afeta <10a (processo autolimitado, tratamento conservador), OCD >12a (lesão mecânica, potencial cirúrgico). Desfecho sem tratamento: Estágio I–II com fise aberta → cura em 50–80% com repouso. Estágio III–IV → risco de artrose a longo prazo.',
  mechanism: 'Microtrauma repetitivo por compressão lateral no capitellum durante abdução + carga axial (arremesso, carga em apoio na ginástica). Zona de watershed avascular do capitellum anterolateral predisposta à necrose subcondral. Progressão: edema subcondral (I) → fissuração da cartilagem (II) → fragmento destacado in situ (III) → corpo livre deslocado (IV). RM com contraste: linha de fluido subcondral = fragmento instável = indicação cirúrgica. Artroscopia: confirmação e estadiamento definitivo.',
  grades: [
    {
      id: 'stage-i',
      label: 'Estágio I – Cartilagem Intacta',
      description: 'Lesão osteocondral com cartilagem articular intacta e amolecimento subcondral.',
      criteria: [
        'Cartilagem articular intacta',
        'Amolecimento da cartilagem à palpação',
        'Alterações subcondrais na RM (edema)',
        'Lesão estável',
      ],
      treatment: 'Tratamento conservador: repouso desportivo, modificação de atividade por 3-6 meses. Evitar lançamento e carga axial. Reavaliação com RM.',
      prognosis: 'Excelente em doentes com fise aberta. Bom potencial de cicatrização.',
      colorCode: 'safe',
    },
    {
      id: 'stage-ii',
      label: 'Estágio II – Fissuração/Destacamento Parcial',
      description: 'Fissuração da cartilagem com destacamento parcial do fragmento osteocondral.',
      criteria: [
        'Fissuração da cartilagem articular',
        'Destacamento parcial do fragmento',
        'Fragmento ainda parcialmente aderente',
        'Sinal de instabilidade na RM (linha de fluido)',
      ],
      treatment: 'Perfuração (drilling) ou microfraturas se fise aberta. Fixação com pinos/parafusos bioabsorvíveis se fragmento viável e de tamanho adequado.',
      prognosis: 'Moderado. Depende da viabilidade do fragmento e da idade do doente.',
      colorCode: 'caution',
    },
    {
      id: 'stage-iii',
      label: 'Estágio III – Destacado In Situ',
      description: 'Fragmento osteocondral completamente destacado mas ainda no leito (in situ).',
      criteria: [
        'Fragmento completamente destacado',
        'Fragmento ainda no leito (cratera)',
        'Instabilidade à palpação artroscópica',
        'Sem deslocamento',
      ],
      treatment: 'Fixação do fragmento se viável (parafusos bioabsorvíveis, pinos). Excisão + microfraturas/mosaicoplastia se fragmento não viável.',
      prognosis: 'Reservado. Risco de progressão para corpo livre e artrose.',
      colorCode: 'danger',
    },
    {
      id: 'stage-iv',
      label: 'Estágio IV – Corpo Livre Deslocado',
      description: 'Fragmento osteocondral deslocado, formando corpo livre intra-articular.',
      criteria: [
        'Fragmento destacado e deslocado',
        'Corpo livre intra-articular',
        'Defeito (cratera) no capitellum',
        'Possível bloqueio mecânico',
      ],
      treatment: 'Remoção do corpo livre + tratamento do defeito: microfraturas, mosaicoplastia (autoenxerto osteocondral) ou OATS. Considerar enxerto de costela osteocondral em defeitos grandes.',
      prognosis: 'Reservado. Risco elevado de artrose do cotovelo. Melhores resultados em doentes jovens.',
      colorCode: 'danger',
    },
  ],
  clinicalPearl: 'A OCD do cotovelo afeta mais frequentemente o capitellum (face anterolateral) em adolescentes atletas (ginástica, lançamento). A RM com contraste é essencial para avaliar a estabilidade do fragmento.',
  pitfall: 'Em doentes com fise aberta, lesões estágio I-II podem cicatrizar com repouso. Não indicar cirurgia prematuramente. No entanto, em doentes com fise fechada, os resultados conservadores são piores.',
  references: [
    {
      authors: 'OConnor MA, Palaniappan M, Khan N, Bruce CE',
      title: 'Osteochondritis dissecans of the knee in children',
      journal: 'Journal of Bone and Joint Surgery (Br)',
      year: 1992,
    },
  ],
};
