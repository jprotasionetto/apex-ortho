import type { GuideData } from '@/types/guide';

export const osteochondralLesionGuide: GuideData = {
  id: 'osteochondral-lesion-guide',
  name: 'Guia de Lesões Osteocondrais',
  description: 'Classificação e abordagem de lesões osteocondrais em atletas',
  sections: [
    {
      id: 'classification',
      title: 'Classificação ICRS (International Cartilage Repair Society)',
      content: [
        'Grau 0: Normal - cartilagem intacta',
        'Grau 1: Quase normal - amolecimento superficial e/ou fissuras superficiais',
        'Grau 2: Anormal - defeito que se estende a < 50% da profundidade da cartilagem',
        'Grau 3: Severamente anormal - defeito > 50% da profundidade, sem exposição do osso subcondral',
        'Grau 3A: sem atingir osso subcondral',
        'Grau 3B: até a camada calcificada',
        'Grau 3C: até o osso subcondral (sem penetrar)',
        'Grau 3D: com bolhas (blistering)',
        'Grau 4: Defeito osteocondral completo - exposição do osso subcondral'
      ],
      keyPoints: [
        'Graus 1-2: tratamento conservador geralmente eficaz',
        'Graus 3-4: tratamento cirúrgico frequentemente indicado',
        'Tamanho e localização determinam a abordagem'
      ],
      colorCode: 'info'
    },
    {
      id: 'size-assessment',
      title: 'Avaliação por Tamanho da Lesão',
      content: [
        'Pequena: < 1 cm² - geralmente boa resposta a técnicas de estimulação medular',
        'Média: 1-2 cm² - zona de transição; considerar opções com base na demanda do paciente',
        'Grande: > 2 cm² - técnicas de transplante ou engenharia tecidual preferidas',
        'Avaliação precisa por artroscopia e/ou RM com cartilagem específica',
        'Localização na superfície de carga é fator prognóstico importante'
      ],
      keyPoints: [
        '< 1 cm²: microfraturas',
        '1-2 cm²: OATS/mosaicoplastia',
        '> 2 cm²: ACI/MACI'
      ],
      colorCode: 'caution'
    },
    {
      id: 'treatment-by-size',
      title: 'Tratamento por Tamanho',
      content: [
        'Pequena (< 1 cm²): Microfraturas - estimulação de formação de fibrocartilagem',
        'Média (1-2 cm²): OATS/Mosaicoplastia - transplante autólogo osteocondral cilíndrico',
        'Grande (> 2 cm²): ACI (Implante Autólogo de Condrócitos) ou MACI (Matrix-Assisted ACI)',
        'Aloenxerto osteocondral: opção para lesões muito grandes (> 3-4 cm²)',
        'Scaffold bioabsorvível: opções emergentes para lesões intermediárias',
        'Lesões bipolares (kissing lesions): pior prognóstico, considerar alinhamento e descarga'
      ],
      keyPoints: [
        'Microfraturas: simples, mas cartilagem de reparo (fibrocartilagem) inferior',
        'OATS: cartilagem hialina, mas limitada pela área de coleta',
        'ACI/MACI: cartilagem hialina, mas dois tempos cirúrgicos (ACI clássico)'
      ],
      colorCode: 'safe'
    },
    {
      id: 'rehabilitation',
      title: 'Reabilitação',
      content: [
        'Microfraturas: descarga parcial 6-8 semanas, mobilização passiva contínua (CPM)',
        'OATS: descarga parcial 6-8 semanas, progressão conforme integração do enxerto',
        'ACI/MACI: descarga parcial 6-8 semanas, protocolo progressivo baseado em biologia',
        'Retorno a atividades de baixo impacto: 4-6 meses',
        'Retorno ao esporte de impacto: 9-12 meses',
        'RM de controle para avaliar maturação do reparo antes do retorno esportivo'
      ],
      keyPoints: [
        'Descarga parcial por 6-8 semanas para todas as técnicas de cartilagem',
        'Retorno ao esporte: 9-12 meses',
        'CPM e mobilização precoce são fundamentais'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'Alinhar indicação cirúrgica com demanda funcional: atleta jovem com lesão focal em área de carga tem melhor indicação para técnicas de restauração',
  pitfall: 'Microfraturas em lesões grandes (> 2-4 cm²) têm resultados inferiores a longo prazo; fibrocartilagem de reparo degrada com o tempo sob carga esportiva',
  references: [
    'Brittberg M, et al. ICRS Cartilage Injury Evaluation Package. 3rd ICRS Meeting, Goteborg, Sweden, 2000.',
    'Hangody L, et al. Autologous osteochondral mosaicplasty for the treatment of full-thickness defects of weight-bearing joints. J Bone Joint Surg Am. 2003;85-A(Suppl 2):25-32.',
    'Mithoefer K, et al. Clinical efficacy of the microfracture technique for articular cartilage repair in the knee. Am J Sports Med. 2009;37(10):2053-2063.'
  ]
};
