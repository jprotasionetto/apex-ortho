import type { ClassificationData } from '@/types/classification';

export const nerveInjuryClassification: ClassificationData = {
  id: 'nerve-injury-classification',
  name: 'Classificação de Lesões Nervosas (Seddon/Sunderland)',
  author: 'Seddon 1943 / Sunderland 1951',
  year: 1943,
  epidemiology: 'Lesões nervosas periféricas: incidência 13–23/100.000/ano; principal causa em adultos = lacerações e fraturas (50–70%), compressão crônica e tração/avulsão. Síndrome do túnel do carpo (neuropraxia por compressão crônica): mais frequente lesão nervosa — 300–400/100.000/ano em mulheres pré-menopausa. Distribuição por grau: Neuropraxia/Sunderland I = 60–70% das lesões nervosas periféricas — recuperação espontânea universal em semanas a meses. Axonotmese (Sunderland II-III) = 20–30% — prognóstico dependente da distância ao órgão alvo. Sunderland IV-V/Neurotmese = 10–15% — requer reparo cirúrgico. Nervo radial: mais lesado em fraturas (diáfise umeral 8–15% — especialmente Holstein-Lewis). Nervo ulnar: neuropraxia pós-cotovelo; nervo mediano: S. Túnel do Carpo. Velocidade de regeneração axonal: ~1mm/dia (1 polegada/mês) = define prazo máximo de reparo antes da fibrose irreversível do órgão alvo (músculo: janela de ~18 meses).',
  mechanism: 'Seddon (1943) propôs 3 categorias clínicas baseadas no prognóstico: neuropraxia (bloqueio de condução sem dano axonal), axonotmese (dano axonal com tubos endoneurais intactos) e neurotmese (transecção completa). Sunderland (1951) subdividiu em 5 graus baseados na integridade das bainhas de suporte: Grau I = neuropraxia; Grau II = axonotmese com endonêurio intacto; Grau III = axonotmese com perinêurio intacto; Grau IV = apenas epinêurio intacto (neuroma em continuidade); Grau V = neurotmese. Princípio: a integridade das bainhas de suporte (endonêurio → perinêurio → epinêurio) determina a fidelidade da regeneração axonal ao órgão alvo. Grau II: axônio regenera dentro do mesmo tubo endoneurial → reinervação precisa e completa. Graus III-IV: fibrose intraneural e regeneração errática por tubos endoneurais misturados → inervação aberrante, reinervação parcial e sincinesias. Grau V: sem guia endoneurial → sem regeneração espontânea → reparo cirúrgico obrigatório. Degeneração Walleriana (distal à lesão): ocorre nos Graus II-V — detectada por ENMG após 2–3 semanas como potenciais de fibrilação e ondas positivas.',
  grades: [
    {
      id: 'neuropraxia',
      label: 'Neuropraxia (Sunderland I)',
      description: 'Bloqueio de condução focal sem dano axonal',
      criteria: [
        'Bainha de mielina lesada focalmente',
        'Axônio intacto',
        'Endonêurio intacto',
        'Perinêurio intacto',
        'Epinêurio intacto',
        'Bloqueio de condução no local da lesão',
        'ENMG: bloqueio de condução sem denervação',
        'Exemplo: compressão transitória, síndrome do sábado à noite'
      ],
      treatment: 'Observação; remoção da causa de compressão; fisioterapia para manutenção de ADM; órteses funcionais se necessário',
      prognosis: 'Excelente; recuperação completa em semanas a meses (até 12 semanas)',
      colorCode: 'safe'
    },
    {
      id: 'axonotmese-2',
      label: 'Axonotmese (Sunderland II)',
      description: 'Dano axonal com endonêurio intacto',
      criteria: [
        'Axônio lesado (degeneração Walleriana distal)',
        'Endonêurio intacto (tubos endoneurais preservados)',
        'Perinêurio intacto',
        'Epinêurio intacto',
        'ENMG: sinais de denervação com potenciais de reinervação progressivos',
        'Sinal de Tinel progride distalmente ao longo do tempo'
      ],
      treatment: 'Observação; fisioterapia para manutenção muscular e ADM; estimulação elétrica; acompanhamento clínico e ENMG seriada',
      prognosis: 'Bom; recuperação completa esperada; velocidade de regeneração ~1mm/dia (1 polegada/mês)',
      colorCode: 'caution'
    },
    {
      id: 'sunderland-3',
      label: 'Sunderland III',
      description: 'Dano ao axônio e endonêurio com perinêurio intacto',
      criteria: [
        'Axônio lesado',
        'Endonêurio lesado (fibrose intrafascicular)',
        'Perinêurio intacto',
        'Epinêurio intacto',
        'Regeneração possível mas com direcionamento axonal errático',
        'ENMG: denervação com reinervação variável e parcial'
      ],
      treatment: 'Observação inicial por 3-6 meses; ENMG seriada; se sem recuperação: exploração cirúrgica com possível neurólise ou enxerto',
      prognosis: 'Variável; recuperação parcial a quase completa; pode haver reinervação aberrante (sincinesia)',
      colorCode: 'caution'
    },
    {
      id: 'sunderland-4',
      label: 'Sunderland IV',
      description: 'Apenas epinêurio intacto; lesão fascicular completa',
      criteria: [
        'Axônio lesado',
        'Endonêurio lesado',
        'Perinêurio lesado (fascículos destruídos)',
        'Epinêurio intacto (continuidade macroscópica mantida)',
        'Neuroma em continuidade',
        'ENMG: denervação sem reinervação significativa'
      ],
      treatment: 'Exploração cirúrgica indicada; ressecção do neuroma e reparo com enxerto nervoso ou conduto; transferência nervosa ou tendinosa se tardio',
      prognosis: 'Reservado; recuperação espontânea improvável; resultado cirúrgico dependente do tempo e técnica',
      colorCode: 'danger'
    },
    {
      id: 'neurotmese',
      label: 'Neurotmese (Sunderland V)',
      description: 'Transecção completa do nervo',
      criteria: [
        'Todas as estruturas lesadas (axônio, endonêurio, perinêurio, epinêurio)',
        'Perda de continuidade do nervo',
        'Sem possibilidade de recuperação espontânea',
        'Cotos nervosos separados',
        'ENMG: denervação completa sem reinervação'
      ],
      treatment: 'Reparo cirúrgico mandatório; reparo primário (se possível sem tensão) ou enxerto nervoso; transferência nervosa; reconstrução tendinosa tardia como salvamento',
      prognosis: 'Reservado; sem reparo: sem recuperação; com reparo precoce: recuperação parcial possível dependente do nível e tipo de nervo',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Neuropraxia: recuperação em semanas-meses. Neurotmese: requer reparo cirúrgico. O sinal de Tinel progressivo (avança distalmente) indica regeneração axonal ativa',
  pitfall: 'Sunderland III-IV: recuperação imprevisível, pode necessitar exploração cirúrgica; ENMG seriada a cada 4-6 semanas para monitorar reinervação é essencial',
  references: [
    'Seddon HJ. Three types of nerve injury. Brain. 1943;66(4):237-288.',
    'Sunderland S. A classification of peripheral nerve injuries producing loss of function. Brain. 1951;74(4):491-516.',
    'Mackinnon SE, Dellon AL. Surgery of the Peripheral Nerve. New York: Thieme; 1988.'
  ]
};
