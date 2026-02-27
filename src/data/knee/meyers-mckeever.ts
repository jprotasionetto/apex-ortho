import type { ClassificationData } from '@/types/classification';

export const meyersMckeeverClassification: ClassificationData = {
  id: 'meyers-mckeever',
  name: 'Classificação de Meyers-McKeever (Eminência Tibial)',
  author: 'Meyers/McKeever',
  year: 1959,
  epidemiology: 'Fraturas da eminência tibial (espinha tibial) representam ~3% das lesões do ligamento cruzado anterior em crianças. Incidência: 3/100.000 crianças/ano. Pico etário: 8–14 anos (esqueleto imaturo — a inserção do LCA na eminência é mais fraca que o próprio ligamento). Predominância masculina 2:1 (esportes de contato). Mecanismo análogo ao da ruptura do LCA no adulto — mas em crianças a zona óssea cede antes das fibras ligamentares. Meyers-McKeever (1959): 3 tipos baseados no desvio radiográfico (modificado por Zaricznyj 1977 para adicionar Tipo IV cominutivo). Tipo I: conservador em extensão; Tipo II–IV: cirúrgico. Artroscopia = padrão de tratamento atual — permite avaliar interposição meniscal (medial em 26%) que impede a redução. Resultado geral: excelente em >90% com tratamento adequado. Laxidão residual do LCA (aumento do pivot shift) em 40–60% mesmo após consolidação anatômica = fenômeno de "soft tissue healing" inadequado. RNM pré-operatória: essencial para identificar interposição do corno anterior do menisco medial.',
  mechanism: 'Mecanismo: força em valgo + rotação com joelho em flexão de 30–40° → tração do LCA sobre sua inserção na eminência tibial anterior → avulsão do bloco ósseo da inserção. Em crianças: resistência da cartilagem de crescimento epifisária tibial proximal < resistência das fibras colágenas do LCA → a zona fisária cede = avulsão óssea em vez de ruptura ligamentar. Força de tração do LCA + cisalhamento borda do côndilo medial femoral → padrão de desvio progressivo: Tipo I (sem desvio) → Tipo II (dobradiça anterior intacta, fragmento elevado posteriormente) → Tipo III (fragmento completamente deslocado + rotado) → Tipo IV (cominutivo). Interposição meniscal: o corno anterior do menisco medial pode deslizar sobre o fragmento avulsionado em Tipo III–IV → bloqueia a redução fechada → "false Tipo III" que se apresenta como Tipo II → diagnóstico por RNM ou artroscopia. "Tall femoral notch sign" no RX lateral: signo característico de avulsão de eminência = fragmento visível no notch intercondilar.',
  grades: [
    {
      id: 'type-1',
      label: 'Tipo I',
      description: 'Fratura não deslocada',
      criteria: [
        'Fragmento minimamente elevado anteriormente',
        'Sem deslocamento significativo',
        'Redução anatômica mantida em extensão',
        'LCA funcionalmente intacto'
      ],
      treatment: 'Tratamento conservador: imobilização em extensão por 4-6 semanas; carga parcial progressiva',
      prognosis: 'Excelente prognóstico; consolidação esperada com tratamento conservador',
      colorCode: 'safe'
    },
    {
      id: 'type-2',
      label: 'Tipo II',
      description: 'Fratura parcialmente deslocada (em charneira)',
      criteria: [
        'Fragmento elevado anteriormente, com charneira posterior',
        'Terço anterior ou metade do fragmento elevada',
        'Pode reduzir com extensão do joelho',
        'Possível interposição do menisco medial ou ligamento intermeniscal'
      ],
      treatment: 'Tentativa de redução fechada com extensão; se irredutível, redução artroscópica e fixação',
      prognosis: 'Bom prognóstico se redução anatômica obtida; risco de frouxidão residual do LCA',
      colorCode: 'caution'
    },
    {
      id: 'type-3',
      label: 'Tipo III',
      description: 'Fratura completamente deslocada',
      criteria: [
        'Fragmento completamente deslocado do leito',
        'Sem contato com o leito ósseo',
        'Rotação do fragmento possível',
        'Interposição de menisco frequente'
      ],
      treatment: 'Redução aberta ou artroscópica com fixação interna (parafusos ou suturas transósseas)',
      prognosis: 'Bom prognóstico com fixação adequada; risco de frouxidão residual do LCA',
      colorCode: 'danger'
    },
    {
      id: 'type-4',
      label: 'Tipo IV',
      description: 'Fratura cominutiva ou com rotação (Zaricznyj)',
      criteria: [
        'Fragmento cominutivo',
        'Rotação do fragmento sobre seu eixo',
        'Adicionado por Zaricznyj como extensão da classificação original',
        'Redução fechada impossível'
      ],
      treatment: 'Redução aberta ou artroscópica com fixação; pode necessitar suturas transósseas se cominuição impede parafuso',
      prognosis: 'Prognóstico reservado; maior risco de frouxidão residual e rigidez',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Mais comum em crianças e adolescentes; equivalente à lesão do LCA no adulto. Sempre verificar interposição meniscal que impede redução',
  pitfall: 'Menisco medial ou ligamento intermeniscal transverso podem impedir redução fechada nos tipos II e III',
  references: [
    'Meyers MH, McKeever FM. Fracture of the intercondylar eminence of the tibia. J Bone Joint Surg Am. 1959;41-A(2):209-222.',
    'Zaricznyj B. Avulsion fracture of the tibial eminence: treatment by open reduction and pinning. J Bone Joint Surg Am. 1977;59(8):1111-1114.'
  ]
};
