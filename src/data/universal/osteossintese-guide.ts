import type { GuideData } from '@/types/guide';

export const osteossintesePrinciplesData: GuideData = {
  id: 'osteossintese-guide',
  name: 'Princípios de Osteossíntese',
  description: 'Princípios AO/ASIF, parafusos, placas, hastes intramedulares, fixadores externos, enxerto ósseo e biomecânica de fraturas',
  sections: [
    {
      id: 'ao-principles',
      title: 'Princípios AO/ASIF',
      content: [
        '4 Princípios AO: (1) Redução anatômica das superfícies articulares; (2) Fixação estável conforme a personalidade da fratura; (3) Preservação do suprimento vascular — periósteo e tecidos moles; (4) Mobilização precoce ativa e sem dor',
        'Consolidação primária (sem calo): requer fixação rígida com compressão interfragmentária absoluta; remodelação direta por cones de corte haversianos; processo lento mas sem calo periosteal visível',
        'Consolidação secundária (com calo): requer estabilidade relativa com micromovimento controlado; formação de calo periosteal e endosteal por ossificação endocondral; processo mais rápido e natural',
        'Conceito do Diamante (Giannoudis): 4 elementos para consolidação bem-sucedida: (A) células osteogênicas (MSC, osteoblastos); (B) scaffold osteocondutor; (C) fatores de crescimento osteoindutores (BMP, TGF-β, PDGF); (D) estabilidade mecânica adequada',
        'Nomenclatura AO/OTA: 2 dígitos identificam o osso (ex.: 32 = fêmur diáfise); 1 dígito o segmento (1=proximal, 2=diafisário, 3=distal); letra A/B/C a morfologia (A=simples, B=cunha/bimodal, C=complexo/multifragmentado)',
        'Absoluta estabilidade (compressão interfragmentária): indicada para fraturas articulares, simples; implica consolidação primária; implantes: parafuso de lag isolado, placa de compressão (DCP), placa de neutralização',
        'Relativa estabilidade (splinting/bridging): indicada para fraturas cominutas, diafisárias; implica consolidação secundária; implantes: haste intramedular, placa em ponte (MIPO), fixador externo'
      ],
      keyPoints: [
        'Os 4 P: redução, fixação, preservação vascular, mobilização precoce',
        'Consolidação primária = fixação rígida; secundária = estabilidade relativa',
        'AO/OTA: osso (2 dígitos) + segmento (1 dígito) + morfologia (A/B/C)',
        'Diamante: células + scaffold + fatores de crescimento + estabilidade mecânica'
      ],
      colorCode: 'info'
    },
    {
      id: 'screws',
      title: 'Parafusos',
      content: [
        'Parafuso cortical: rosca em toda a extensão do corpo; parâmetros críticos — diâmetro do núcleo, passo da rosca e ângulo de rosca; tamanhos principais: rosca 3,5mm (sistema pequeno) e 4,5mm (sistema grande)',
        'Parafuso esponjoso: zona lisa proximal (sem rosca) + rosca parcial distal; zona lisa atua como câmara de compressão; diâmetros: 6,5mm (cabeça femoral, côndilo) e 4,0mm (epífise, maléolo); indicado na metáfise/epífise',
        'Técnica do parafuso de lag: orifício deslizante (glide hole) na cortical proximal com diâmetro externo da rosca → parafuso não ancora nessa cortical; rosca ancora apenas na cortical distal (ou fragmento) → compressão interfragmentária de até 2000 N; deve ser perpendicular à linha de fratura (não ao osso)',
        'Parafuso bloqueado (locking): rosca na cabeça do parafuso engata na rosca do orifício da placa LCP; gera ancoragem angular (não comprime osso-placa); funciona como fixador externo interno; indicado em osso osteoporótico e fraturas periarticulares',
        'Parafuso canulado: técnica de guia-fio primeiro (fio de Kirschner) depois parafuso sobre o guia; diâmetros disponíveis 3,0–7,3mm; indicado em cabeça femoral (fraturas tipo Garden/Pauwels), escafoide, maléolo',
        'Parafuso HPS (hip preserving screw): parafuso dinâmico para fraturas do colo femoral; TAD (Tip-Apex Distance) deve ser < 25mm para evitar cut-out; colocado no quadrante inferocentral em AP e central em perfil',
        'Resistência ao arrancamento (pull-out): proporcional à densidade mineral óssea (BMD), ao diâmetro externo da rosca e ao número de corticais engajadas; no osso osteoporótico preferir parafuso bloqueado ou de maior diâmetro'
      ],
      keyPoints: [
        'Lag: glide hole = diâmetro externo da rosca; perpendicular à FRATURA',
        'Bloqueado: ancoragem angular, não comprime osso-placa, ideal no osteoporótico',
        'Esponjoso: rosca parcial, zona lisa = câmara de compressão, metáfise',
        'TAD < 25mm no colo femoral para evitar cut-out do DHS/HPS'
      ],
      colorCode: 'info'
    },
    {
      id: 'plates',
      title: 'Placas',
      content: [
        'DCP (Dynamic Compression Plate): orifícios com inclinação excêntrica — ao inserir o parafuso inclinado e apertar, o deslizamento gera compressão axial no foco de fratura; placa convencional (não angular); requer bom contato osso-placa',
        'LC-DCP (Limited Contact DCP): fundo de orifício em forma de U; reduz contato com o periósteo em 50%; preserva melhor o suprimento vascular subperiostal; mesmas indicações da DCP porém com menor morbidade biológica',
        'LCP (Locking Compression Plate): orifício combinado (DCP convencional + rosca para parafuso bloqueado); permite inserção de parafusos convencionais ou bloqueados ou combinados; padrão atual para fraturas periarticulares e osteoporóticas',
        'Placa de neutralização: parafuso de lag comprime os fragmentos → placa neutraliza as forças de dobramento, torção e cisalhamento que agiriam sobre esse lag; lag + placa é o standard para fraturas diafisárias simples',
        'Placa de sustentação (buttress/anti-glide): posicionada para suportar fragmento metafisário contra o deslizamento; formato L ou T; indicada em plato tibial, pilão tibial, colo femoral; o parafuso mais proximal é o mais importante',
        'Placa em ponte (bridge plating / MIPO): sem parafuso no foco de fratura; 2–3 parafusos em cada bloco ósseo; consolida por formação de calo secundário; técnica MIPO minimiza danos vasculares; indicada em fraturas cominutas diafisárias e metafisárias',
        'Placas pré-moldadas anatômicas (PHILOS, VA-LCP proximal tíbia, etc.): perfil baixo, geometria anatômica; ângulo de bloqueio fixo ou variável; reduzem necessidade de moldagem intraoperatória',
        'Falha de placa: ocorre SEMPRE por fadiga quando não há consolidação — N ciclos de carga → fratura do implante; investigar causa (infecção oculta, instabilidade mecânica, pseudartrose) antes de trocar implante'
      ],
      keyPoints: [
        'DCP: compressão dinâmica por parafuso excêntrico; convencional',
        'LCP: combina DCP + bloqueado; padrão periarticular e osteoporótico',
        'Neutralização: lag comprime, placa neutraliza dobramento/torção',
        'Ponte (MIPO): sem parafuso no foco; consolida calo secundário',
        'Falha = fadiga sem consolidação — sempre investigar biologia e infecção'
      ],
      colorCode: 'info'
    },
    {
      id: 'intramedullary-nails',
      title: 'Hastes Intramedulares',
      content: [
        'Princípio biomecânico: carga compartilhada entre haste e osso; braço de alavanca muito curto (haste dentro do canal) → menor momento fletor sobre o implante em comparação com placa; implante elástico em relação à placa',
        'Encavilhamento bloqueado: parafusos proximais e distais impedem rotação e encurtamento do fragmento; indispensável em fraturas instáveis (oblíqua, espiral, cominutas)',
        'Estático vs dinâmico: estático = todos os parafusos bloqueados proximal e distal (indicado inicialmente); dinâmico = parafusos distais removidos (ou haste com orifício oval) → permite carga axial → microcompressão no foco → estimula consolidação; indicado para retardo de consolidação',
        'Reaming (fresagem intramedular): amplia diâmetro do canal medular; permite inserção de haste maior; libera células-tronco mesenquimais (MSCs) e fatores de crescimento da medula óssea; indicado rotineiramente em não-união e diáfises normais; risco: embolia gordurosa pulmonar (relevante no politrauma)',
        'Sem reaming (unreamed nail): indicado em fraturas expostas Gustilo IIIB/IIIC, comprometimento vascular, fraturas com amplo componente cominutivo com lesão vascular; diâmetro menor, menor potência biológica',
        'Ponto de entrada — fêmur: anterógrado via fossa piriforme (clássico) ou trocânter maior (piriformis-sparing); retrógrado via joelho (fraturas distais, periprostéticas, gestantes); tíbia: ligamento patelar (suprapatelar ou infrapatelar); úmero: via manguito rotador (anterógrado) ou fossa olecrânea (retrógrado)',
        'Comprimento e diâmetro: medidos por fita métrica intraoperatória fluoroscópica ou RX do membro contralateral; diâmetro mínimo determinado pelo ístmo do canal; superestimar o diâmetro leva a fratura iatrogênica na entrada',
        'Complicações: malalinhamento rotacional (frequente — confirmar por TC pós-op comparando com lado contralateral); encurtamento; irritação tendínea (manguito no úmero, tendão patelar na tíbia); fratura na entrada'
      ],
      keyPoints: [
        'Carga compartilhada: menor momento fletor que placa → melhor em diáfise',
        'Estático inicialmente; dinamizar se retardo de consolidação',
        'Reaming libera MSCs e aumenta diâmetro — padrão em não-união',
        'Malalinhamento rotacional: confirmar por TC pós-operatória',
        'Ponto de entrada correto é crítico — erro gera varo/valgo e malalinhamento'
      ],
      colorCode: 'info'
    },
    {
      id: 'external-fixators',
      title: 'Fixadores Externos',
      content: [
        'Indicações principais: fraturas expostas Gustilo IIIB/IIIC (aguardar cobertura de partes moles); politrauma com instabilidade hemodinâmica (DCO — Damage Control Orthopaedics); infecção ativa (osteomielite); região periarticular instável como ponte provisória pré-ORIF definitivo',
        'Fixador temporário (DCO): aplicação rápida (< 30 min); 4 pinos Schanz no osso saudável fora da zona de fratura; barra de conexão; redução e alinhamento grosseiros; conversão para implante definitivo em 7–14 dias (janela de conversão)',
        'Fixador circular (Ilizarov / Taylor Spatial Frame): fios de Kirschner tensionados em anéis; permite correção gradual de deformidade e transporte ósseo; indicado em discrepância de comprimento, pseudartrose infectada, correção angular/rotacional',
        'Distância pino-fratura: quanto mais próximo o pino do foco de fratura, maior a rigidez do fixador; porém mínimo de 2 cm da zona de fratura para evitar contaminação e interferência com implante definitivo posterior',
        'Cuidados de pino: curativo diário com soro fisiológico ou clorexidina; verificar afrouxamento semanalmente (pino afrouxado = instabilidade = retardo de consolidação); infecção de pino é a complicação mais comum (15–30%) e pode inviabilizar conversão para haste',
        'Conversão fixador externo para implante definitivo: aguardar cicatrização completa dos sítios de pino (mínimo 7–14 dias); sinais de infecção de pino (eritema, drenagem, febre) contraindicam conversão imediata para haste intramedular — risco de osteomielite da haste'
      ],
      keyPoints: [
        'DCO: fixador temporário em politrauma instável; janela de conversão 7–14 dias',
        'Fraturas expostas IIIB/IIIC: fixador externo até cobertura de partes moles',
        'Infecção de pino contraindicam conversão para haste intramedular',
        'Ilizarov: transporte ósseo, discrepância de comprimento, pseudartrose infectada',
        'Pino mínimo 2 cm do foco de fratura'
      ],
      colorCode: 'caution'
    },
    {
      id: 'bone-graft',
      title: 'Enxerto Ósseo e Biológicos',
      content: [
        'Autoenxerto esponjoso (ilíaco): padrão ouro; possui as 3 propriedades: osteogênico (células viáveis — osteoblastos, MSCs), osteoindutivo (BMP endógena, TGF-β) e osteocondutor (scaffold de hidroxiapatita); morbidade da área doadora 10–20% (dor crônica, lesão nervo cutâneo lateral)',
        'Aloenxerto (banco de osso): osteoindutivo + osteocondutor, mas NÃO osteogênico (células não viáveis após processamento); risco de transmissão infecciosa mínimo com processamento adequado (γ-irradiação); disponibilidade ilimitada; indicado quando volume grande necessário',
        'BMP-2 (Infuse®, Dibotermin alfa): proteína morfogenética óssea recombinante; potente osteoindutora; indicações aprovadas: pseudartrose recalcitrante diafisária e ALIF (fusão intersomática anterior); custo elevado; risco de osteólise e formação óssea ectópica com uso indevido ou em região cervical',
        'Substitutos ósseos sintéticos (HA — hidroxiapatita, TCP — fosfato tricálcico, CaP bifásico): exclusivamente osteocondutores (scaffold); absorvíveis lentamente (HA: anos; TCP: meses); indicados para preenchimento de cavidades metafisárias com fixação estável; não substituem enxerto em não-união',
        'Concentrado de medula óssea (BMAC): aspirado da crista ilíaca concentrado por centrifugação; rico em MSCs e fatores de crescimento; técnica minimamente invasiva; estratégia emergente para não-união e regeneração',
        'Diamante de Giannoudis revisitado: sucesso do enxerto exige os 4 pilares — (1) células osteogênicas (autoenxerto ou BMAC); (2) scaffold osteocondutor (enxerto esponjoso ou substituto); (3) sinais moleculares osteoindutores (BMP-2, TGF-β); (4) estabilidade mecânica adequada do sítio receptor'
      ],
      keyPoints: [
        'Autoenxerto ilíaco: padrão ouro — osteogênico + osteoindutivo + osteocondutor',
        'Aloenxerto: NÃO osteogênico; células não viáveis após processamento',
        'BMP-2: potente, mas risco de osteólise; não usar fora de indicação aprovada',
        'Substitutos sintéticos (HA/TCP): apenas osteocondutores; só em cavidades com fixação estável',
        'Diamante: 4 pilares devem estar presentes simultaneamente'
      ],
      colorCode: 'caution'
    },
    {
      id: 'biomechanics',
      title: 'Biomecânica de Fraturas',
      content: [
        'Strain theory de Perren: strain (ε) = deformação relativa = deslocamento interfragmentário / comprimento original do gap; osso cortical tolera strain < 2% (fratura acima disso); fibrocartilagem forma-se com strain 2–10%; tecido fibroso forma-se com strain > 10%',
        'Implicação clínica da strain theory: fixação excessivamente rígida reduz strain → 0 → impede formação de calo (consolidação primária necessária); fixação muito frouxa → strain > 10% → tecido fibroso → pseudartrose fibrosa; objetivo: strain 2–10% para consolidação secundária com calo',
        'Módulo de elasticidade dos implantes: titânio (110 GPa) é mais elástico que aço inoxidável (200 GPa) → titânio distribui mais carga para o osso → menor stress shielding; ligas de cobalto-cromo (CoCr): 200–230 GPa (mais rígido)',
        'Stress shielding: placa muito rígida absorve a maioria da carga mecânica → osso subjacente não recebe estímulo → atrofia por desuso (lei de Wolff inversa) → osteopenia cortical → risco de fratura periimplante ao remover o implante',
        'Fadiga de implante: carga cíclica repetida (N ciclos) → acúmulo de microtrincas no metal → fratura por fadiga; implante NUNCA falha por uma única carga se bem inserido; falha = fratura não consolidou antes do implante se fadigar; NUNCA remover implante sem consolidação em segmento de alta carga (fêmur, tíbia)',
        'Lei de Wolff (Julius Wolff, 1892): osso se remodela em resposta à magnitude e direção das cargas mecânicas → carga precoce estimula remodelação e hipertrofia cortical; imobilização prolongada → osteopenia; base para reabilitação com carga precoce'
      ],
      keyPoints: [
        'Strain 2–10%: zona alvo para consolidação secundária com calo',
        'Strain < 2%: necessário para consolidação primária (fixação rígida)',
        'Titânio < Aço em rigidez → menor stress shielding',
        'Implante falha por FADIGA: sempre sinal de não-consolidação',
        'Lei de Wolff: carga precoce → estimula remodelação óssea'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'A "janela de conversão" de fixador externo para haste intramedular é de 7-14 dias. Além desse período, o risco de colonização de pino → infecção da haste sobe de <1% para 7-40%. Sempre verifique sinais de infecção de pino antes de converter.',
  pitfall: 'Parafuso de lag NÃO comprime quando inserido perpendicular ao osso — ele deve ser perpendicular à linha de fratura. O orifício deslizante na cortical próximal (glide hole) deve ser do diâmetro externo da rosca, não do núcleo. Erro aqui elimina toda a compressão interfragmentária.',
  references: [
    'Müller ME, Allgöwer M, Schneider R, Willenegger H. Manual of Internal Fixation. 3rd ed. Berlin: Springer; 1991.',
    'Perren SM. Evolution of the internal fixation of long bone fractures. J Bone Joint Surg Br. 2002;84(8):1093-1110.',
    'Giannoudis PV, et al. Fracture healing: the diamond concept. Injury. 2007;38(Suppl 4):S3-S6.',
    'AO Foundation. AO Surgery Reference. Available at: https://surgeryreference.aofoundation.org'
  ]
};
