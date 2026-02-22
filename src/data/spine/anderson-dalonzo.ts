import type { ClassificationData } from '@/types/classification';

export const andersonDalonzoClassification: ClassificationData = {
  id: 'anderson-dalonzo',
  name: 'Classificação de Anderson-D\'Alonzo (Fratura do Odontoide)',
  author: 'Anderson/D\'Alonzo',
  year: 1974,
  grades: [
    {
      id: 'type-1',
      label: 'Tipo I',
      description: 'Avulsão da ponta do odontoide',
      criteria: [
        'Fratura por avulsão do ápice do dente (processo odontoide)',
        'Acima do ligamento transverso',
        'Local de inserção do ligamento alar',
        'Rara',
        'Estável - ligamento transverso intacto'
      ],
      treatment: 'Tratamento conservador: colar cervical rígido por 6-8 semanas',
      prognosis: 'Excelente prognóstico; consolidação esperada; verificar estabilidade C1-C2',
      colorCode: 'safe'
    },
    {
      id: 'type-2',
      label: 'Tipo II',
      description: 'Fratura na base do odontoide (junção corpo-dente)',
      criteria: [
        'Fratura na junção do dente com o corpo de C2',
        'Tipo mais comum (60-65% das fraturas do odontoide)',
        'Suprimento sanguíneo comprometido',
        'Alta taxa de pseudartrose (até 26-40%)',
        'Instável'
      ],
      treatment: 'Cirúrgico na maioria: parafuso odontoide anterior (traço favorável) ou artrodese C1-C2 posterior (Harms, Magerl). Conservador em casos selecionados: halo-vest por 12 semanas',
      prognosis: 'Maior taxa de pseudartrose entre todos os tipos; fatores de risco: idade >50, deslocamento >5mm, angulação posterior, atraso no tratamento',
      colorCode: 'danger'
    },
    {
      id: 'type-2a',
      label: 'Tipo IIA',
      description: 'Fratura cominutiva da base do odontoide',
      criteria: [
        'Fragmentos de fratura cominutivos na base do odontoide',
        'Padrão instável',
        'Adicionado por Hadley como subtipo',
        'Não adequada para parafuso odontoide anterior'
      ],
      treatment: 'Artrodese C1-C2 posterior (técnica de Harms ou Magerl); parafuso odontoide contraindicado pela cominuição',
      prognosis: 'Prognóstico reservado; necessita fixação posterior; alto risco de pseudartrose com tratamento conservador',
      colorCode: 'danger'
    },
    {
      id: 'type-3',
      label: 'Tipo III',
      description: 'Fratura que se estende ao corpo de C2',
      criteria: [
        'Linha de fratura se estende para o corpo de C2',
        'Osso esponjoso do corpo envolvido',
        'Pode envolver as facetas articulares superiores de C2',
        'Melhor vascularização que Tipo II'
      ],
      treatment: 'Tratamento conservador na maioria: halo-vest ou colar rígido tipo Philadelphia por 8-12 semanas. Cirúrgico se instabilidade ou não-consolidação',
      prognosis: 'Bom prognóstico; taxa de consolidação >90% com tratamento conservador; melhor vascularização do leito da fratura',
      colorCode: 'caution'
    }
  ],
  clinicalPearl: 'Tipo II: maior taxa de pseudartrose. Considerar fixação cirúrgica especialmente em idosos, deslocamento >5mm, ou angulação posterior',
  pitfall: 'Tipo II em idosos: considerar tratamento cirúrgico pela alta taxa de não consolidação com tratamento conservador',
  references: [
    'Anderson LD, D\'Alonzo RT. Fractures of the odontoid process of the axis. J Bone Joint Surg Am. 1974;56(8):1663-1674.',
    'Hadley MN, et al. New subtype of acute odontoid fractures (type IIA). Neurosurgery. 1988;22(1 Pt 1):67-71.'
  ]
};
