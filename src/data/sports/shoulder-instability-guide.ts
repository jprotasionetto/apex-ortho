import type { GuideData } from '@/types/guide';

export const shoulderInstabilityGuide: GuideData = {
  id: 'shoulder-instability-guide',
  name: 'Guia de Instabilidade do Ombro no Atleta',
  description: 'Abordagem da instabilidade glenoumeral em atletas com foco em perda óssea e decisão cirúrgica',
  sections: [
    {
      id: 'first-episode',
      title: 'Primeiro Episódio de Luxação',
      content: [
        'Atleta jovem < 25 anos: taxa de recorrência de 80-90% com tratamento conservador',
        'Atleta > 30 anos: taxa de recorrência menor (40-50%)',
        'Esportes de contato/colisão: risco aumentado de recidiva',
        'Consideração para reparo primário em atleta jovem de alto risco',
        'Imobilização em rotação externa: evidência controversa mas promissora',
        'RM obrigatória para avaliar lesão labral e perda óssea'
      ],
      keyPoints: [
        'Jovem + contato = alto risco recidiva (80-90%)',
        'RM após primeiro episódio é mandatória',
        'Discutir reparo primário em atletas de alto risco'
      ],
      colorCode: 'caution'
    },
    {
      id: 'bone-loss-assessment',
      title: 'Avaliação de Perda Óssea',
      content: [
        'Glenoid Track Concept: relação entre perda glenoidal e Hill-Sachs',
        'Perda glenoidal: medir em TC 3D (método de Sugaya ou melhor de área de superfície)',
        'Hill-Sachs: medir largura e localização (on-track vs off-track)',
        'ISIS Score (Instability Severity Index Score): auxilia decisão cirúrgica',
        'ISIS ≤ 3: Bankart artroscópico adequado',
        'ISIS > 6: considerar Latarjet ou procedimento aberto',
        'ISIS 4-6: zona cinzenta - individualizar'
      ],
      keyPoints: [
        'Glenoid Track: on-track vs off-track Hill-Sachs',
        'ISIS Score guia a decisão cirúrgica',
        'TC 3D essencial para quantificar perda óssea'
      ],
      colorCode: 'info'
    },
    {
      id: 'arthroscopic-bankart',
      title: 'Reparo Artroscópico de Bankart',
      content: [
        'Indicação: perda óssea glenoidal < 20% e Hill-Sachs on-track',
        'Técnica: mínimo 3 âncoras, reparo do labrum inferior (5h-7h)',
        'Capsuloplastia associada: shift capsular inferior para reduzir volume',
        'Remplissage: preenchimento do Hill-Sachs com infraespinal (se borderline off-track)',
        'Resultados: 85-90% de sucesso em casos adequadamente selecionados',
        'Taxa de re-luxação: 5-15% em atletas de esporte de contato'
      ],
      keyPoints: [
        'Perda óssea < 20% + on-track Hill-Sachs',
        'Mínimo 3 âncoras com capsuloplastia',
        'Considerar Remplissage se Hill-Sachs borderline'
      ],
      colorCode: 'safe'
    },
    {
      id: 'latarjet-open',
      title: 'Latarjet e Procedimentos Abertos',
      content: [
        'Indicação: perda glenoidal > 20%, Hill-Sachs off-track, falha de Bankart artroscópico',
        'Latarjet: transferência do processo coracoide com efeito triplo (enxerto ósseo + sling + capsulodese)',
        'Aumenta a superfície articular glenoidal em ~40%',
        'Eden-Hybinette: enxerto ilíaco livre na glenoide anterior',
        'Resultados do Latarjet: taxa de recidiva < 5%',
        'Complicações: lesão do nervo musculocutâneo, pseudartrose do enxerto, artrose a longo prazo'
      ],
      keyPoints: [
        'Perda > 20% ou off-track → Latarjet',
        'Efeito triplo: osso + sling dinâmico + capsulodese',
        'Taxa de recidiva < 5% mas complicações possíveis'
      ],
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'O conceito de Glenoid Track unificou a avaliação de perda óssea glenoidal e Hill-Sachs em uma decisão integrada - on-track permite Bankart, off-track indica Latarjet',
  pitfall: 'Bankart artroscópico em paciente com perda óssea não reconhecida é a principal causa de falha cirúrgica',
  references: [
    'Balg F, Boileau P. The instability severity index score. A simple pre-operative score to select patients for arthroscopic or open shoulder stabilisation. J Bone Joint Surg Br. 2007;89(11):1470-1477.',
    'Di Giacomo G, et al. The arthroscopic Bankart repair with glenoid bone loss: what the glenoid track tells us. Knee Surg Sports Traumatol Arthrosc. 2014;22(5):1009-1015.',
    'Yamamoto N, et al. Contact between the glenoid and the humeral head in abduction, external rotation, and horizontal extension: a new concept of glenoid track. J Shoulder Elbow Surg. 2007;16(5):649-656.'
  ]
};
