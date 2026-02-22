import type { GuideData } from '@/types/guide';

export const castImmobilizationGuide: GuideData = {
  id: 'cast-immobilization-guide',
  name: 'Guia de Imobilização Gessada',
  description: 'Princípios de imobilização, tipos de gesso/tala e complicações',
  sections: [
    {
      id: 'principles',
      title: 'Princípios de Imobilização',
      content: [
        'Acolchoamento adequado: malha tubular + algodão ortopédico; proteção de proeminências ósseas',
        'Moldagem em 3 pontos: princípio biomecânico fundamental para manter redução',
        'Imobilizar articulação acima e abaixo da fratura (regra geral)',
        'Posição funcional: punho em leve extensão (20-30°), MF em flexão (70-90°), IF em extensão',
        'Tornozelo: manter em 90° (posição neutra) para evitar equino',
        'Não circunferencial na fase aguda: usar tala (splint) se edema esperado',
        'Gesso circunferencial: converter tala para gesso quando edema estabilizar (5-7 dias)',
        'Abertura bivalve: se suspeita de síndrome compartimental sob gesso'
      ],
      keyPoints: [
        'Moldagem em 3 pontos é essencial para manter redução',
        'Tala na fase aguda → gesso circular após 5-7 dias',
        'Proteger proeminências ósseas com acolchoamento extra'
      ],
      colorCode: 'info'
    },
    {
      id: 'common-types',
      title: 'Tipos Comuns de Imobilização',
      content: [
        'Luva gessada curta (short arm cast): fraturas de metacarpos, falanges (exceto polegar), fraturas distais de rádio estáveis',
        'Luva gessada longa (long arm cast): fraturas de antebraço, Monteggia, Galeazzi em crianças',
        'Tala axilopalmar com polegar (thumb spica): fratura de escafoide, 1º metacarpo, de Quervain',
        'Gesso tipo Muenster: fraturas estáveis do antebraço que precisam limitar pronossupinação sem travar cotovelo completamente',
        'Bota gessada curta (short leg cast): fraturas de metatarsos, tornozelo estáveis, fraturas do calcâneo sem desvio',
        'Bota gessada longa (long leg cast): fraturas diafisárias de tíbia, fraturas de platô tibial estáveis',
        'Gesso pelvipodálico (spica): fraturas femorais em crianças',
        'Tala posterior (posterior splint): imobilização temporária de tornozelo/pé na emergência',
        'Tala em U (sugar tong): fraturas distais de rádio na fase aguda; limita pronossupinação'
      ],
      keyPoints: [
        'Tala antes de gesso circular na fase aguda',
        'Thumb spica: escafoide, 1º metacarpo',
        'Short leg: tornozelo estável, metatarsos; Long leg: diáfise tibial'
      ],
      colorCode: 'safe'
    },
    {
      id: 'complications',
      title: 'Complicações',
      content: [
        'Síndrome compartimental: EMERGÊNCIA; dor desproporcional, dor ao estiramento passivo, parestesias; abrir gesso IMEDIATAMENTE e avaliar fasciotomia',
        'Lesão por pressão: proeminências ósseas (maléolo, cabeça da fíbula, olecrânio); acolchoamento inadequado; dor focal sob gesso',
        'Maceração cutânea: umidade sob gesso; instruir paciente a manter gesso seco',
        'Rigidez articular: imobilização prolongada; fisioterapia precoce após retirada',
        'Trombose venosa profunda: imobilização de membro inferior; considerar profilaxia em fatores de risco',
        'Perda de redução: moldagem inadequada; edema resolve e gesso fica frouxo; controle radiográfico seriado',
        'Lesão nervosa: compressão do nervo fibular na cabeça da fíbula (mais comum); pé caído'
      ],
      keyPoints: [
        'Dor crescente sob gesso = suspeitar síndrome compartimental',
        'NUNCA ignorar queixa de dor sob gesso',
        'Controle radiográfico em 7-10 dias para verificar alinhamento'
      ],
      colorCode: 'danger'
    },
    {
      id: 'follow-up',
      title: 'Acompanhamento',
      content: [
        'Verificação em 24-48h: avaliar circulação, sensibilidade e motricidade distal',
        'Controle radiográfico em 7-10 dias: verificar manutenção da redução após resolução do edema',
        'Remoldar ou cunhar (wedging): se perda parcial de redução aceitável',
        'Trocar gesso: se frouxo por resolução de edema; se úmido ou danificado',
        'Orientações ao paciente: elevar membro, mobilizar dedos, não introduzir objetos sob gesso, não molhar',
        'Sinais de alerta: dor crescente, dormência, edema distal, palidez ou cianose, odor fétido',
        'Tempo médio de imobilização: varia por fratura (4-6 semanas para membro superior; 6-12 semanas para membro inferior)'
      ],
      keyPoints: [
        'Check 24-48h: circulação, sensibilidade, motricidade',
        'RX controle em 7-10 dias: manutenção da redução',
        'Orientar sinais de alerta ao paciente'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'A regra de "anel vs tala": qualquer imobilização circunferencial na fase aguda (primeiras 48-72h) deve ser bivalvada ou substituída por tala para acomodar edema e prevenir síndrome compartimental',
  pitfall: 'Gesso circunferencial aplicado na urgência com edema crescente é a principal causa iatrogênica de síndrome compartimental em fraturas fechadas',
  references: [
    'Boyd AS, Benjamin HJ, Asplund C. Principles of casting and splinting. Am Fam Physician. 2009;79(1):16-22.',
    'Halanski M, Noonan KJ. Cast and splint immobilization: complications. J Am Acad Orthop Surg. 2008;16(1):30-40.',
    'Bae DS. Pediatric distal radius and forearm fractures. J Hand Surg Am. 2008;33(10):1911-1923.'
  ]
};
