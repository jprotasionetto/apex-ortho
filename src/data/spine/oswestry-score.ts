import type { ScoreDefinition } from '@/types/score';

export const oswestryScore: ScoreDefinition = {
  id: 'oswestry-score',
  name: 'ODI - Oswestry Disability Index',
  items: [
    {
      id: 'pain_intensity',
      label: 'Intensidade da Dor',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Sem dor no momento (0)' },
        { value: 1, label: 'Dor muito leve no momento (1)' },
        { value: 2, label: 'Dor moderada no momento (2)' },
        { value: 3, label: 'Dor razoavelmente severa no momento (3)' },
        { value: 4, label: 'Dor muito severa no momento (4)' },
        { value: 5, label: 'Pior dor imaginável no momento (5)' }
      ]
    },
    {
      id: 'personal_care',
      label: 'Cuidados Pessoais (lavar-se, vestir-se)',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Cuido de mim normalmente sem causar dor extra (0)' },
        { value: 1, label: 'Cuido de mim normalmente mas causa dor extra (1)' },
        { value: 2, label: 'É doloroso cuidar de mim e sou lento e cuidadoso (2)' },
        { value: 3, label: 'Preciso de alguma ajuda mas consigo a maioria dos cuidados (3)' },
        { value: 4, label: 'Preciso de ajuda todos os dias na maioria dos cuidados (4)' },
        { value: 5, label: 'Não consigo me vestir, lavo-me com dificuldade e fico na cama (5)' }
      ]
    },
    {
      id: 'lifting',
      label: 'Levantar Objetos',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Consigo levantar objetos pesados sem dor extra (0)' },
        { value: 1, label: 'Consigo levantar objetos pesados mas com dor extra (1)' },
        { value: 2, label: 'Dor impede de levantar do chão, mas consigo se estiver posicionado (2)' },
        { value: 3, label: 'Dor impede de levantar objetos pesados, mas leves a moderados (3)' },
        { value: 4, label: 'Só consigo levantar objetos muito leves (4)' },
        { value: 5, label: 'Não consigo levantar ou carregar nada (5)' }
      ]
    },
    {
      id: 'walking',
      label: 'Caminhar',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Dor não me impede de caminhar qualquer distância (0)' },
        { value: 1, label: 'Dor impede de caminhar mais de 1,5km (1)' },
        { value: 2, label: 'Dor impede de caminhar mais de 800m (2)' },
        { value: 3, label: 'Dor impede de caminhar mais de 400m (3)' },
        { value: 4, label: 'Só consigo caminhar com bengala ou muletas (4)' },
        { value: 5, label: 'Fico na cama a maior parte do tempo (5)' }
      ]
    },
    {
      id: 'sitting',
      label: 'Sentar',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Consigo sentar em qualquer cadeira o tempo que quiser (0)' },
        { value: 1, label: 'Só consigo sentar na minha cadeira favorita o tempo que quiser (1)' },
        { value: 2, label: 'Dor impede de sentar mais de 1 hora (2)' },
        { value: 3, label: 'Dor impede de sentar mais de 30 minutos (3)' },
        { value: 4, label: 'Dor impede de sentar mais de 10 minutos (4)' },
        { value: 5, label: 'Dor impede de sentar completamente (5)' }
      ]
    },
    {
      id: 'standing',
      label: 'Ficar em Pé',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Consigo ficar em pé o tempo que quiser sem dor extra (0)' },
        { value: 1, label: 'Consigo ficar em pé o tempo que quiser mas com dor extra (1)' },
        { value: 2, label: 'Dor impede de ficar em pé mais de 1 hora (2)' },
        { value: 3, label: 'Dor impede de ficar em pé mais de 30 minutos (3)' },
        { value: 4, label: 'Dor impede de ficar em pé mais de 10 minutos (4)' },
        { value: 5, label: 'Dor impede de ficar em pé completamente (5)' }
      ]
    },
    {
      id: 'sleeping',
      label: 'Dormir',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Meu sono nunca é perturbado por dor (0)' },
        { value: 1, label: 'Meu sono é ocasionalmente perturbado por dor (1)' },
        { value: 2, label: 'Durmo menos de 6 horas por causa da dor (2)' },
        { value: 3, label: 'Durmo menos de 4 horas por causa da dor (3)' },
        { value: 4, label: 'Durmo menos de 2 horas por causa da dor (4)' },
        { value: 5, label: 'Dor impede completamente de dormir (5)' }
      ]
    },
    {
      id: 'social_life',
      label: 'Vida Social',
      type: 'radio',
      section: 'Participação',
      options: [
        { value: 0, label: 'Vida social normal sem dor extra (0)' },
        { value: 1, label: 'Vida social normal mas aumenta a dor (1)' },
        { value: 2, label: 'Dor não afeta significativamente, exceto atividades mais enérgicas (2)' },
        { value: 3, label: 'Dor restringiu minha vida social e não saio com frequência (3)' },
        { value: 4, label: 'Dor restringiu vida social ao lar (4)' },
        { value: 5, label: 'Não tenho vida social por causa da dor (5)' }
      ]
    },
    {
      id: 'traveling',
      label: 'Viajar / Deslocar-se',
      type: 'radio',
      section: 'Participação',
      options: [
        { value: 0, label: 'Posso viajar para qualquer lugar sem dor (0)' },
        { value: 1, label: 'Posso viajar para qualquer lugar mas com dor extra (1)' },
        { value: 2, label: 'Dor é ruim mas consigo viagens de mais de 2 horas (2)' },
        { value: 3, label: 'Dor restringe viagens a menos de 1 hora (3)' },
        { value: 4, label: 'Dor restringe viagens curtas e necessárias (<30 min) (4)' },
        { value: 5, label: 'Dor impede de viajar exceto para tratamento (5)' }
      ]
    },
    {
      id: 'employment',
      label: 'Emprego / Trabalho',
      type: 'radio',
      section: 'Participação',
      options: [
        { value: 0, label: 'Atividades normais não causam dor extra (0)' },
        { value: 1, label: 'Atividades normais causam dor extra (1)' },
        { value: 2, label: 'Consigo a maioria do trabalho mas não atividades mais pesadas (2)' },
        { value: 3, label: 'Dor impede de fazer qualquer trabalho além de leve (3)' },
        { value: 4, label: 'Dor impede quase todo trabalho (4)' },
        { value: 5, label: 'Dor impede qualquer trabalho (5)' }
      ]
    }
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    {
      range: [0, 20],
      label: 'Incapacidade Mínima',
      description: 'Pode lidar com a maioria das atividades diárias. Geralmente nenhum tratamento necessário além de orientações',
      color: 'safe'
    },
    {
      range: [21, 40],
      label: 'Incapacidade Moderada',
      description: 'Dor e dificuldade em sentar, levantar e ficar em pé. Viagens e vida social mais difíceis. Pode estar afastado do trabalho. Tratamento conservador geralmente suficiente',
      color: 'caution'
    },
    {
      range: [41, 60],
      label: 'Incapacidade Severa',
      description: 'Dor é o problema principal. Atividades diárias afetadas. Requer investigação detalhada e tratamento agressivo',
      color: 'danger'
    },
    {
      range: [61, 80],
      label: 'Incapacitante',
      description: 'Dor afeta todos os aspectos da vida. Intervenção positiva necessária. Considerar tratamento cirúrgico se indicado',
      color: 'danger'
    },
    {
      range: [81, 100],
      label: 'Acamado / Exagerando',
      description: 'Acamado ou exagerando sintomas. Avaliação cuidadosa necessária para descartar fatores psicossociais',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    const sum = Object.values(values).reduce((s, val) => s + (val || 0), 0);
    return Math.round((sum / 50) * 100);
  },
  references: [
    'Fairbank JC, Pynsent PB. The Oswestry Disability Index. Spine. 2000;25(22):2940-2952.',
    'Fairbank JC, et al. The Oswestry low back pain disability questionnaire. Physiotherapy. 1980;66(8):271-273.'
  ]
};
