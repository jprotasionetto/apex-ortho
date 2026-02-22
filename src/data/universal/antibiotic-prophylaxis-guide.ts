import type { GuideData } from '@/types/guide';

export const antibioticProphylaxisGuide: GuideData = {
  id: 'antibiotic-prophylaxis-guide',
  name: 'Guia de Profilaxia Antibiótica em Cirurgia Ortopédica',
  description: 'Protocolo de profilaxia antibiótica para cirurgias ortopédicas',
  sections: [
    {
      id: 'standard',
      title: 'Protocolo Padrão',
      content: [
        'Cefazolina 2g IV (3g se peso > 120kg): antibiótico de primeira escolha',
        'Administrar nos 60 minutos antes da incisão',
        'Redose intraoperatória: a cada 3-4 horas OU se perda sanguínea > 1500mL',
        'Cefazolina cobre Staphylococcus aureus e Streptococcus (principais agentes em ortopedia)',
        'Dose pediátrica: cefazolina 30mg/kg IV (máximo 2g)'
      ],
      keyPoints: [
        'Cefazolina 2g IV é o padrão',
        'Administrar dentro de 60min antes da incisão',
        'Redosar a cada 3-4h em cirurgias longas'
      ],
      colorCode: 'safe'
    },
    {
      id: 'allergy',
      title: 'Alergia a Penicilinas/Cefalosporinas',
      content: [
        'Vancomicina 15mg/kg IV (máximo 2g): para alergia grave a beta-lactâmicos ou colonização MRSA',
        'Infundir em 60-120 minutos (iniciar 120 minutos antes da incisão)',
        'Clindamicina 600mg IV: alternativa se contraindicação a vancomicina',
        'Em caso de alergia não anafilática a penicilina: cefalosporinas podem ser seguras (reatividade cruzada < 2%)',
        'Teicoplanina 400mg IV: alternativa em alguns protocolos europeus'
      ],
      keyPoints: [
        'Vancomicina: iniciar 120min antes (infusão lenta)',
        'Clindamicina 600mg IV: alternativa prática',
        'Avaliar grau de alergia antes de excluir cefalosporinas'
      ],
      colorCode: 'caution'
    },
    {
      id: 'timing',
      title: 'Timing da Administração',
      content: [
        'Janela ideal: 30-60 minutos antes da incisão',
        'Cefazolina: administrar nos 60 minutos antes da incisão',
        'Vancomicina: iniciar infusão 120 minutos antes da incisão (infusão lenta obrigatória)',
        'Torniquete: antibiótico deve estar completamente infundido ANTES da insuflação',
        'Administração após a incisão: eficácia significativamente reduzida',
        'Redose intraoperatória: a cada 2 meias-vidas do antibiótico (cefazolina: 3-4h; vancomicina: 6-12h)'
      ],
      keyPoints: [
        'Antes da incisão é mandatório',
        'Antes do torniquete é mandatório',
        'Vancomicina necessita mais tempo (120min)'
      ],
      colorCode: 'danger'
    },
    {
      id: 'open-fractures',
      title: 'Fraturas Expostas',
      content: [
        'Gustilo I: cefazolina 2g IV a cada 8h por 24h',
        'Gustilo II: cefazolina 2g IV a cada 8h por 24h',
        'Gustilo IIIA: cefazolina 2g IV a cada 8h + gentamicina 5mg/kg/dia IV por 72h',
        'Gustilo IIIB/IIIC: cefazolina + gentamicina por 72h; considerar adição de penicilina se contaminação fecal/solo agrícola',
        'Iniciar antibióticos O MAIS RÁPIDO POSSÍVEL após trauma (idealmente < 3h)',
        'Repetir profilaxia a cada desbridamento cirúrgico',
        'Contaminação por água doce: considerar cobertura para Gram-negativos',
        'Contaminação por solo agrícola: cobrir Clostridium (penicilina/metronidazol)'
      ],
      keyPoints: [
        'Tipo I-II: cefazolina 24h',
        'Tipo III: cefazolina + aminoglicosídeo 72h',
        'Iniciar o mais precoce possível (< 3h)'
      ],
      colorCode: 'danger'
    },
    {
      id: 'duration',
      title: 'Duração da Profilaxia',
      content: [
        'Cirurgia limpa eletiva com implante: dose única pré-operatória (± 1 redose intraop se >3-4h)',
        'Máximo 24h pós-operatório para cirurgias limpas (tendência atual: dose única)',
        'Fraturas fechadas: 24h pós-operatório',
        'Fraturas expostas Gustilo I-II: 24h após fechamento de ferida',
        'Fraturas expostas Gustilo III: 72h após última limpeza cirúrgica',
        'NÃO estender profilaxia por drenos ou cateteres',
        'Profilaxia prolongada NÃO reduz infecção e AUMENTA resistência bacteriana'
      ],
      keyPoints: [
        'Dose única para cirurgia limpa (tendência atual)',
        'Máximo 24h para a maioria dos casos',
        '72h para fraturas expostas tipo III',
        'NÃO prolongar por drenos/cateteres'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'O timing é mais importante que a escolha do antibiótico: administração nos 60 minutos antes da incisão reduz infecção em até 50% vs administração tardia',
  pitfall: 'Esquecer de redosar em cirurgias longas (> 3-4h) ou após sangramento maciço reduz significativamente a eficácia da profilaxia',
  references: [
    'Bratzler DW, et al. Clinical practice guidelines for antimicrobial prophylaxis in surgery. Am J Health Syst Pharm. 2013;70(3):195-283.',
    'Hoff WS, et al. East Practice Management Guidelines Work Group: update to practice management guidelines for prophylactic antibiotic use in open fractures. J Trauma. 2011;70(3):751-754.',
    'Parvizi J, et al. Proceedings of the International Consensus on Periprosthetic Joint Infection. Bone Joint J. 2013;95-B(11):1450-1452.'
  ]
};
