import type { ScoreDefinition } from '@/types/score';

export const ndiScore: ScoreDefinition = {
  id: 'ndi-score',
  name: 'NDI - Neck Disability Index',
  items: [
    {
      id: 'pain_intensity',
      label: 'Intensidade da Dor Cervical',
      type: 'radio',
      section: 'Dor',
      options: [
        { value: 0, label: 'Sem dor neste momento (0)' },
        { value: 1, label: 'Dor muito leve neste momento (1)' },
        { value: 2, label: 'Dor moderada neste momento (2)' },
        { value: 3, label: 'Dor razoavelmente severa neste momento (3)' },
        { value: 4, label: 'Dor muito severa neste momento (4)' },
        { value: 5, label: 'Pior dor imaginável neste momento (5)' }
      ]
    },
    {
      id: 'personal_care',
      label: 'Cuidados Pessoais',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Cuido de mim sem causar dor extra (0)' },
        { value: 1, label: 'Cuido de mim mas causa dor extra (1)' },
        { value: 2, label: 'É doloroso cuidar de mim e sou lento (2)' },
        { value: 3, label: 'Preciso de alguma ajuda mas faço a maioria (3)' },
        { value: 4, label: 'Preciso de ajuda na maioria dos cuidados (4)' },
        { value: 5, label: 'Não consigo me vestir, lavo-me com dificuldade (5)' }
      ]
    },
    {
      id: 'lifting',
      label: 'Levantar Objetos',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Consigo levantar objetos pesados sem dor extra (0)' },
        { value: 1, label: 'Consigo levantar pesados mas com dor extra (1)' },
        { value: 2, label: 'Dor impede de levantar do chão mas de mesa sim (2)' },
        { value: 3, label: 'Dor impede de levantar pesados, leves a moderados sim (3)' },
        { value: 4, label: 'Só consigo levantar objetos muito leves (4)' },
        { value: 5, label: 'Não consigo levantar nada (5)' }
      ]
    },
    {
      id: 'reading',
      label: 'Leitura',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Posso ler o quanto quiser sem dor no pescoço (0)' },
        { value: 1, label: 'Posso ler o quanto quiser com dor leve (1)' },
        { value: 2, label: 'Posso ler o quanto quiser com dor moderada (2)' },
        { value: 3, label: 'Não posso ler o quanto quiser por dor moderada (3)' },
        { value: 4, label: 'Quase não posso ler por dor severa (4)' },
        { value: 5, label: 'Não consigo ler de forma alguma (5)' }
      ]
    },
    {
      id: 'headaches',
      label: 'Cefaleia (Dor de Cabeça)',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 0, label: 'Sem cefaleia (0)' },
        { value: 1, label: 'Cefaleias leves e pouco frequentes (1)' },
        { value: 2, label: 'Cefaleias moderadas e pouco frequentes (2)' },
        { value: 3, label: 'Cefaleias moderadas e frequentes (3)' },
        { value: 4, label: 'Cefaleias severas e frequentes (4)' },
        { value: 5, label: 'Cefaleia quase constante (5)' }
      ]
    },
    {
      id: 'concentration',
      label: 'Concentração',
      type: 'radio',
      section: 'Sintomas',
      options: [
        { value: 0, label: 'Consigo me concentrar totalmente sem dificuldade (0)' },
        { value: 1, label: 'Consigo me concentrar com dificuldade leve (1)' },
        { value: 2, label: 'Tenho dificuldade razoável em me concentrar (2)' },
        { value: 3, label: 'Tenho muita dificuldade em me concentrar (3)' },
        { value: 4, label: 'Tenho grande dificuldade em me concentrar (4)' },
        { value: 5, label: 'Não consigo me concentrar de forma alguma (5)' }
      ]
    },
    {
      id: 'work',
      label: 'Trabalho',
      type: 'radio',
      section: 'Participação',
      options: [
        { value: 0, label: 'Posso trabalhar o quanto quiser (0)' },
        { value: 1, label: 'Só posso fazer meu trabalho habitual, nada mais (1)' },
        { value: 2, label: 'Posso fazer a maior parte do trabalho, nada mais (2)' },
        { value: 3, label: 'Não consigo fazer meu trabalho habitual (3)' },
        { value: 4, label: 'Quase não consigo trabalhar (4)' },
        { value: 5, label: 'Não consigo trabalhar de forma alguma (5)' }
      ]
    },
    {
      id: 'driving',
      label: 'Dirigir',
      type: 'radio',
      section: 'Participação',
      options: [
        { value: 0, label: 'Posso dirigir sem dor no pescoço (0)' },
        { value: 1, label: 'Posso dirigir o quanto quiser com dor leve (1)' },
        { value: 2, label: 'Posso dirigir o quanto quiser com dor moderada (2)' },
        { value: 3, label: 'Não posso dirigir o quanto quiser pela dor (3)' },
        { value: 4, label: 'Quase não posso dirigir pela dor (4)' },
        { value: 5, label: 'Não consigo dirigir de forma alguma (5)' }
      ]
    },
    {
      id: 'sleeping',
      label: 'Dormir',
      type: 'radio',
      section: 'Atividades',
      options: [
        { value: 0, label: 'Sem problemas para dormir (0)' },
        { value: 1, label: 'Sono levemente perturbado (<1h sem dormir) (1)' },
        { value: 2, label: 'Sono moderadamente perturbado (1-2h sem dormir) (2)' },
        { value: 3, label: 'Sono moderadamente perturbado (2-3h sem dormir) (3)' },
        { value: 4, label: 'Sono muito perturbado (3-5h sem dormir) (4)' },
        { value: 5, label: 'Sono completamente perturbado (5-7h sem dormir) (5)' }
      ]
    },
    {
      id: 'recreation',
      label: 'Recreação / Lazer',
      type: 'radio',
      section: 'Participação',
      options: [
        { value: 0, label: 'Atividades recreativas sem dor (0)' },
        { value: 1, label: 'Atividades recreativas com alguma dor (1)' },
        { value: 2, label: 'Consigo a maioria mas não todas as atividades (2)' },
        { value: 3, label: 'Só consigo poucas atividades recreativas (3)' },
        { value: 4, label: 'Quase não consigo nenhuma atividade (4)' },
        { value: 5, label: 'Não consigo nenhuma atividade recreativa (5)' }
      ]
    }
  ],
  maxScore: 100,
  minScore: 0,
  interpretations: [
    {
      range: [0, 8],
      label: 'Sem Incapacidade',
      description: 'Sem incapacidade cervical significativa',
      color: 'safe'
    },
    {
      range: [10, 28],
      label: 'Incapacidade Leve',
      description: 'Pode fazer a maioria das atividades. Tratamento conservador geralmente suficiente',
      color: 'safe'
    },
    {
      range: [30, 48],
      label: 'Incapacidade Moderada',
      description: 'Limitação significativa nas atividades. Investigação detalhada e tratamento agressivo necessários',
      color: 'caution'
    },
    {
      range: [50, 64],
      label: 'Incapacidade Severa',
      description: 'Atividades diárias significativamente afetadas. Necessita intervenção ativa',
      color: 'danger'
    },
    {
      range: [70, 100],
      label: 'Incapacidade Completa',
      description: 'Todas as atividades afetadas. Avaliação cirúrgica se indicada; avaliar fatores psicossociais',
      color: 'danger'
    }
  ],
  calculate: (values: Record<string, number>) => {
    const sum = Object.values(values).reduce((s, val) => s + (val || 0), 0);
    return Math.round((sum / 50) * 100);
  },
  references: [
    'Vernon H, Mior S. The Neck Disability Index: a study of reliability and validity. J Manipulative Physiol Ther. 1991;14(7):409-415.',
    'Vernon H. The Neck Disability Index: state-of-the-art, 1991-2008. J Manipulative Physiol Ther. 2008;31(7):491-502.'
  ]
};
