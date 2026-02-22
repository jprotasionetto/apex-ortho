import type { GuideData } from '@/types/guide';

export const surgicalSafetyChecklist: GuideData = {
  id: 'surgical-safety-checklist',
  name: 'Checklist de Segurança Cirúrgica (OMS)',
  description: 'Lista de verificação de segurança cirúrgica da Organização Mundial de Saúde adaptada para ortopedia',
  sections: [
    {
      id: 'sign-in',
      title: 'Sign In (Antes da Indução Anestésica)',
      content: [
        '☐ Confirmação da identidade do paciente (nome completo, data de nascimento, registro)',
        '☐ Confirmação do procedimento e local/lateralidade',
        '☐ Demarcação do sítio cirúrgico realizada (com marcação indelével pelo cirurgião)',
        '☐ Consentimento informado assinado',
        '☐ Oxímetro de pulso funcionando e no paciente',
        '☐ Alergias conhecidas verificadas',
        '☐ Via aérea: risco de aspiração ou dificuldade avaliado',
        '☐ Risco de perda sanguínea > 500mL (adulto): acesso IV adequado e hemoderivados disponíveis',
        '☐ Profilaxia antibiótica prescrita',
        '☐ Profilaxia de TEV prescrita',
        '☐ Exames de imagem essenciais no centro cirúrgico'
      ],
      keyPoints: [
        'SEMPRE demarcar o sítio cirúrgico com o paciente acordado',
        'Verificar alergias ANTES de administrar qualquer medicação',
        'Garantir disponibilidade de sangue se risco de sangramento'
      ],
      colorCode: 'danger'
    },
    {
      id: 'time-out',
      title: 'Time Out (Antes da Incisão)',
      content: [
        '☐ Todos os membros da equipe se apresentam (nome e função)',
        '☐ Confirmação verbal: paciente, sítio cirúrgico e procedimento',
        '☐ Antibiótico profilático administrado nos últimos 60 minutos',
        '☐ Exames de imagem essenciais visíveis e no negatoscópio/tela',
        '☐ Equipamento e implantes verificados e disponíveis',
        '☐ Torniquete: pressão e tempo planejados',
        '☐ Eventos críticos antecipados:',
        '  - Cirurgião: passos críticos, duração estimada, perda sanguínea prevista',
        '  - Anestesista: preocupações específicas do paciente',
        '  - Instrumentador/Enfermeiro: esterilização confirmada, equipamento funcionando',
        '☐ Fluoroscopia/intensificador de imagem: posicionamento e proteção de radiação'
      ],
      keyPoints: [
        'PARAR antes da incisão - confirmação verbal por TODA a equipe',
        'Antibiótico já administrado',
        'Imagens essenciais visíveis na sala'
      ],
      colorCode: 'caution'
    },
    {
      id: 'sign-out',
      title: 'Sign Out (Antes do Paciente Sair da Sala)',
      content: [
        '☐ Confirmação verbal do procedimento realizado',
        '☐ Contagem de instrumentais, compressas e agulhas: COMPLETA e conferida',
        '☐ Identificação de amostras/espécimes (se houver): rotuladas com nome do paciente',
        '☐ Problemas com equipamento: documentados para resolução',
        '☐ Implante utilizado: registrado (lote, validade, tipo)',
        '☐ Plano de recuperação e cuidados pós-operatórios comunicados:',
        '  - Imobilização necessária (tipo, posição)',
        '  - Restrições de carga (NWB, PWB, WBAT)',
        '  - Profilaxia de TEV confirmada',
        '  - Antibiótico pós-operatório (se indicado)',
        '  - Controle radiográfico pós-operatório',
        '  - Analgesia pós-operatória prescrita'
      ],
      keyPoints: [
        'NUNCA fechar sem contagem de compressas completa',
        'Registrar implantes utilizados (lote e tipo)',
        'Comunicar plano pós-operatório para toda a equipe'
      ],
      colorCode: 'safe'
    }
  ],
  clinicalPearl: 'A implementação do checklist da OMS reduziu complicações cirúrgicas em 36% e mortalidade em 47% no estudo original multicêntrico',
  pitfall: 'O checklist só funciona se realizado de forma genuína com participação de toda a equipe; checklists feitos mecanicamente sem atenção real são ineficazes',
  references: [
    'Haynes AB, et al. A surgical safety checklist to reduce morbidity and mortality in a global population. N Engl J Med. 2009;360(5):491-499.',
    'World Health Organization. WHO Surgical Safety Checklist. 2009.',
    'de Vries EN, et al. Effect of a comprehensive surgical safety system on patient outcomes. N Engl J Med. 2010;363(20):1928-1937.'
  ]
};
