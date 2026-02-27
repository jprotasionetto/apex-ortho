import type { ClassificationData } from '@/types/classification';

export const kellgrenLawrenceClassification: ClassificationData = {
  id: 'kellgren-lawrence',
  name: 'Classificação de Kellgren-Lawrence (Artrose)',
  author: 'Kellgren/Lawrence',
  year: 1957,
  epidemiology: 'Artrose do joelho (gonartrose) é a forma mais prevalente de artrose: afeta 250 milhões de pessoas globalmente. Prevalência radiográfica (K-L ≥ Grau 2): 30% acima de 45 anos, 60% acima de 65 anos. Prevalência sintomática: ~10–15% dos adultos >45 anos. Progressão: 30% dos K-L grau 2 evoluem para grau 3–4 em 10 anos. Kellgren-Lawrence é o sistema radiográfico mais utilizado mundialmente para pesquisa clínica e epidemiológica em artrose. Correlação clínico-radiográfica: fraca (Kappa 0,45) — 50% dos K-L grau 3–4 são assintomáticos; 30% dos K-L 0–1 têm dor significativa (artrose pré-radiográfica). Indicação de ATJ: K-L grau 3–4 + dor refratária ao conservador ≥3 meses + incapacidade funcional — o escore K-L per se NÃO é indicação cirúrgica (tratar o paciente, não o Rx). ATJ para K-L grau 4: sobrevida do implante 90–95% em 10 anos, 75–80% em 20 anos. Osteotomia tibial alta (HTO): indicada em K-L grau 2–3 + desvio em varo + <55 anos + compartimento medial isolado.',
  mechanism: 'Artrose primária: falha progressiva da homeostasia cartilaginosa — desequilíbrio entre síntese (condrócitos + matriz colagénica + proteoglicanos) e degradação (MMP-13, ADAMTS-5, IL-1, TNF-α). Progressão: fissuras superficiais → fibrilação → perda completa de espessura cartilaginosa → osso subcondral exposto (eburnação). Remodelação reativa: esclerose subcondral (aumenta rigidez → transmite cargas à cartilagem restante → ciclo vicioso), osteófitos (estabilização articular adaptativa), cistos subcondrais (microfraturas trabeculares). Kellgren-Lawrence quantifica a progressão morfológica: Grau 0 (normal) → Grau 1 (osteófito duvidoso = só osteófito) → Grau 2 (osteófito definido = critério mínimo para OA certa) → Grau 3 (osteófito + estreitamento + esclerose) → Grau 4 (estreitamento marcado = osso-a-osso + osteófito grande + deformidade). Grau 2 = limiar diagnóstico de OA radiográfica por consenso ACR/OARSI.',
  grades: [
    {
      id: 'grade-0',
      label: 'Grau 0',
      description: 'Normal',
      criteria: [
        'Sem alterações radiográficas',
        'Espaço articular preservado',
        'Sem osteófitos'
      ],
      treatment: 'Nenhum tratamento específico necessário; orientações de prevenção',
      prognosis: 'Normal',
      colorCode: 'safe'
    },
    {
      id: 'grade-1',
      label: 'Grau 1',
      description: 'Duvidoso',
      criteria: [
        'Estreitamento articular duvidoso',
        'Possíveis osteófitos incipientes',
        'Significância clínica questionável'
      ],
      treatment: 'Modificação de atividade, fortalecimento muscular, perda de peso se necessário',
      prognosis: 'Pode ou não progredir; monitorização',
      colorCode: 'safe'
    },
    {
      id: 'grade-2',
      label: 'Grau 2',
      description: 'Leve',
      criteria: [
        'Osteófitos definidos',
        'Possível estreitamento do espaço articular',
        'Sem esclerose subcondral significativa'
      ],
      treatment: 'Fisioterapia, anti-inflamatórios, perda de peso, viscossuplementação',
      prognosis: 'Progressão lenta esperada; bom prognóstico com medidas conservadoras',
      colorCode: 'caution'
    },
    {
      id: 'grade-3',
      label: 'Grau 3',
      description: 'Moderado',
      criteria: [
        'Osteófitos moderados múltiplos',
        'Estreitamento articular definido',
        'Alguma esclerose subcondral',
        'Possível deformidade dos contornos ósseos'
      ],
      treatment: 'Tratamento conservador otimizado; considerar osteotomia ou artroplastia unicompartimental em pacientes selecionados',
      prognosis: 'Progressão provável; pode necessitar intervenção cirúrgica',
      colorCode: 'danger'
    },
    {
      id: 'grade-4',
      label: 'Grau 4',
      description: 'Severo',
      criteria: [
        'Osteófitos grandes',
        'Estreitamento articular marcado',
        'Esclerose subcondral severa',
        'Deformidade definida dos contornos ósseos'
      ],
      treatment: 'Artroplastia total do joelho',
      prognosis: 'Indicação cirúrgica na maioria dos pacientes sintomáticos',
      colorCode: 'danger'
    }
  ],
  clinicalPearl: 'Sistema de classificação mais amplamente utilizado mundialmente para artrose; essencial radiografia em carga para avaliação precisa',
  pitfall: 'Baixa correlação entre achados radiográficos e sintomas clínicos - tratar o paciente, não o raio-X',
  references: [
    'Kellgren JH, Lawrence JS. Radiological assessment of osteo-arthrosis. Ann Rheum Dis. 1957;16(4):494-502.'
  ]
};
