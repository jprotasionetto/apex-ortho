import type { GuideData } from '@/types/guide';

export const vteProphylaxisGuide: GuideData = {
  id: 'vte-prophylaxis-guide',
  name: 'Guia de Profilaxia de TEV em Ortopedia',
  description: 'Protocolo de profilaxia de tromboembolismo venoso para pacientes ortopédicos',
  sections: [
    {
      id: 'risk-assessment',
      title: 'Avaliação de Risco',
      content: [
        'Artroplastia total do quadril (ATQ): ALTO risco - profilaxia obrigatória',
        'Artroplastia total do joelho (ATJ): ALTO risco - profilaxia obrigatória',
        'Fratura do quadril: ALTO risco - profilaxia obrigatória',
        'Artroscopia simples do joelho: risco baixo a moderado',
        'Fratura de membros inferiores com imobilização: risco moderado a alto',
        'Cirurgia de coluna: risco variável (baixo em procedimentos curtos; alto em cirurgias longas com imobilização)',
        'Utilizar Score de Caprini para estratificação individual'
      ],
      keyPoints: [
        'ATQ, ATJ e fratura do quadril = sempre alto risco',
        'Individualizar com Score de Caprini',
        'Considerar fatores adicionais: câncer, TEV prévio, trombofilia'
      ],
      colorCode: 'danger'
    },
    {
      id: 'pharmacological',
      title: 'Profilaxia Farmacológica',
      content: [
        'HBPM (heparina de baixo peso molecular): enoxaparina 40mg SC 1x/dia - padrão ouro',
        'Iniciar enoxaparina 12h após cirurgia (ou 6-8h em dose reduzida 20mg)',
        'Rivaroxabana 10mg VO 1x/dia: alternativa oral; iniciar 6-10h após cirurgia',
        'Apixabana 2.5mg VO 2x/dia: alternativa oral',
        'AAS (aspirina) 100mg 1x/dia: pode ser considerado para ATQ/ATJ em pacientes de risco hemorrágico ou após período inicial de HBPM',
        'HNF (heparina não fracionada) 5000UI SC 2-3x/dia: alternativa se IRC com ClCr < 30mL/min',
        'Fondaparinux 2.5mg SC 1x/dia: alternativa; iniciar 6h após cirurgia'
      ],
      keyPoints: [
        'Enoxaparina 40mg SC 1x/dia: primeira escolha',
        'DOACs (rivaroxabana, apixabana): alternativas orais convenientes',
        'AAS: opção em casos selecionados'
      ],
      colorCode: 'safe'
    },
    {
      id: 'mechanical',
      title: 'Profilaxia Mecânica',
      content: [
        'Meias de compressão elástica (TED): 15-20mmHg; usar enquanto imobilizado',
        'Compressão pneumática intermitente (CPI): durante internação e repouso no leito',
        'Bomba venosa plantar: alternativa à CPI',
        'Deambulação precoce: a melhor profilaxia mecânica',
        'Indicações isoladas: contraindicação à profilaxia farmacológica (sangramento ativo, coagulopatia severa)',
        'Combinar com farmacológica: em pacientes de alto risco'
      ],
      keyPoints: [
        'CPI durante toda a internação para alto risco',
        'Deambulação precoce é fundamental',
        'Mecânica isolada se contraindicação a fármacos'
      ],
      colorCode: 'safe'
    },
    {
      id: 'duration',
      title: 'Duração da Profilaxia',
      content: [
        'Artroplastia total (ATQ/ATJ): 35 dias de profilaxia (estendida)',
        'Fratura do quadril: 10-14 dias mínimo; considerar até 35 dias',
        'Artroscopia simples: deambulação precoce; farmacológica por 7-10 dias se fatores de risco',
        'Imobilização de membro inferior: durante todo o período de imobilização se fatores de risco',
        'Cirurgia de coluna: 7-10 dias; estender se imobilização prolongada',
        'Fratura de membros inferiores: durante imobilização + 7 dias após início da carga'
      ],
      keyPoints: [
        '35 dias para artroplastia maior',
        '10-14 dias pós fratura do quadril (considerar estender)',
        'Manter durante toda imobilização'
      ],
      colorCode: 'caution'
    },
    {
      id: 'spinal-surgery',
      title: 'Cirurgia de Coluna',
      content: [
        'Profilaxia mecânica preferida no pós-operatório imediato (risco de hematoma epidural)',
        'CPI intraoperatória e pós-operatória',
        'Profilaxia farmacológica: iniciar 24-48h após cirurgia se sem sangramento',
        'Pacientes de alto risco (câncer, TEV prévio): iniciar farmacológica assim que seguro',
        'Deambulação precoce sempre que possível',
        'Duração: até deambulação plena ou alta hospitalar'
      ],
      keyPoints: [
        'Mecânica preferida nas primeiras 24-48h',
        'Risco de hematoma epidural com profilaxia precoce',
        'Farmacológica após 24-48h se seguro'
      ],
      colorCode: 'caution'
    }
  ],
  clinicalPearl: 'A profilaxia estendida (35 dias) para artroplastia maior reduziu significativamente a taxa de TEV sintomático vs profilaxia apenas hospitalar',
  pitfall: 'Não suspender profilaxia farmacológica na alta hospitalar após artroplastia maior - a maioria dos eventos tromboembólicos ocorre após a alta',
  references: [
    'Falck-Ytter Y, et al. Prevention of VTE in orthopedic surgery patients: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: ACCP Evidence-Based Clinical Practice Guidelines. Chest. 2012;141(2 Suppl):e278S-e325S.',
    'Anderson DR, et al. Aspirin or rivaroxaban for VTE prophylaxis after hip or knee arthroplasty. N Engl J Med. 2018;378(8):699-707.',
    'NICE Guideline NG89. Venous thromboembolism in over 16s: reducing the risk of hospital-acquired deep vein thrombosis or pulmonary embolism. 2018.'
  ]
};
