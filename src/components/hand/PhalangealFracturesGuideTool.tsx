import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'surgical-indications',
    title: 'Indicações Cirúrgicas',
    content: [
      'Mal-rotação: qualquer grau de rotação clinicamente evidente (cascata digital alterada)',
      'Mal-rotação >10° na avaliação radiográfica',
      'Envolvimento de >50% da superfície articular',
      'Fraturas instáveis: oblíquas longas, espirais, com encurtamento progressivo',
      'Fraturas com subluxação articular associada',
      'Fraturas abertas (Gustilo II-III)',
      'Fraturas múltiplas na mesma mão',
      'Fraturas associadas a lesão tendínea ou neurovascular',
      'Perda de redução após tratamento conservador',
    ],
  },
  {
    id: 'fixation',
    title: 'Opções de Fixação',
    content: [
      'Fios de Kirschner (K-wires): fixação percutânea, mais usados em fraturas fechadas simples',
      'K-wires: vantagem de mínima lesão tecidual, fácil remoção; desvantagem: menos estáveis',
      'Parafusos interfragmentários (lag screws): ideais para oblíquas longas e espirais',
      'Mini-placas e parafusos (1.3mm-2.0mm): máxima estabilidade, permite mobilização precoce',
      'Placas: dorsal (mais acessível) vs lateral (menos interferência com extensor)',
      'Fixador externo: fraturas cominutivas ou com perda óssea',
      'Cerclagem com fio: fraturas oblíquas em combinação com K-wires',
      'Bandas de tensão: fraturas avulsão de inserções tendinosas',
    ],
  },
  {
    id: 'conservative',
    title: 'Fraturas Estáveis',
    content: [
      'Buddy taping (sindactilia): fraturas estáveis da falange proximal e média',
      'Tala em posição intrínseca plus: MCP 70-90° flexão, IFP extensão, IFD extensão',
      'Duração: 3-4 semanas com mobilização precoce (buddy taping desde o início)',
      'Fraturas do tufo: tala protetora por 3-4 semanas, controle da dor',
      'Fraturas condilares sem desvio: tala + controle RX semanal nas primeiras 2 semanas',
      'Mobilização ativa precoce: essencial para prevenir rigidez',
      'Controle radiográfico semanal na 1ª-2ª semana para verificar estabilidade',
    ],
  },
  {
    id: 'pitfalls',
    title: 'Armadilhas',
    content: [
      'RIGIDEZ é o principal inimigo: mobilização precoce sempre que possível',
      'Rotação: verificar cascata digital com dedos em flexão (todos apontam para escafóide)',
      'Edema: elevação agressiva, compressão e mobilização para controle',
      'Placas dorsais: risco de aderência do extensor e perda de mobilidade',
      'Imobilização prolongada: contratura da cápsula articular (especialmente IFP)',
      'Não imobilizar articulações não envolvidas',
      'Fraturas condilares em crianças: podem ser Salter-Harris III - avaliar com cuidado',
      'Fratura volar da base da falange média (FDP insertion): pode ser jersey finger associado',
    ],
  },
];

export default function PhalangealFracturesGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('surgical-indications');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Fraturas das Falanges — Trauma da Mão</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Fraturas das falanges proximal, média e distal são as fraturas mais comuns da mão. A maioria pode ser tratada conservadoramente com buddy tape ou tala, mas instabilidade e articular requerem fixação.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Toda fratura de falange com desvio rotacional, angulação &gt;10-15°, intra-articular com &gt;20% da superfície ou instabilidade. Avaliação clínica de rotação é essencial — observar alinhamento dos dedos em flexão.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Estável não deslocada: buddy tape / tala 3-4 semanas. Deslocada redutível: tala após redução. Instável / intra-articular significativa: fixação (K-wire, parafuso, placa). Rigidez pós-fratura de falange é a complicação mais comum.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <button key={s.id} onClick={() => setActiveSection(s.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === s.id ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}>{s.title}</button>
        ))}
      </div>
      {sections.filter((s) => s.id === activeSection).map((s) => (
        <div key={s.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-slate-100 mb-4">{s.title}</h3>
          <ul className="space-y-2">
            {s.content.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-300"><span className="text-primary-400 mt-0.5">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
      <Alert type="info">Rigidez e o inimigo numero 1 nas fraturas das falanges - mobilizacao precoce quando a estabilidade da fratura permitir.</Alert>
      <Alert type="caution">Verificar SEMPRE a cascata digital (rotacao) em flexao - mal-rotacao e indicacao cirurgica independente de outros fatores.</Alert>
    </div>
  );
}
