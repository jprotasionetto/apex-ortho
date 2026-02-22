import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'pathoanatomy',
    title: 'Patoanatomia',
    content: [
      'Tenossinovite estenosante na polia A1',
      'Discrepância entre o volume do tendão flexor e o canal da polia A1',
      'Espessamento e metaplasia fibrocartilaginosa da polia A1',
      'Formação de nódulo no tendão flexor (proximal à polia A1)',
      'Localização mais comum: 4º dedo > polegar > 3º dedo > 5º dedo > 2º dedo',
      'Prevalência: mulheres > homens, 50-60 anos',
      'Associações: diabetes mellitus (até 10%), artrite reumatóide, hipotireoidismo',
    ],
  },
  {
    id: 'grading',
    title: 'Classificação de Green',
    content: [
      'Grau I: dor e sensibilidade na polia A1, sem travamento',
      'Grau II: travamento (triggering) com extensão ativa possível',
      'Grau III: travamento que requer extensão passiva (IIIA) ou incapacidade de flexão ativa completa (IIIB)',
      'Grau IV: contratura fixa em flexão da IFP',
    ],
  },
  {
    id: 'conservative',
    title: 'Tratamento Conservador',
    content: [
      'Imobilização com tala (splint) da MCP em extensão por 6 semanas',
      'Infiltração de corticosteroide (triancinolona + lidocaína) na bainha do tendão',
      'Eficácia da infiltração: 60-90% de resolução com 1 injeção',
      'Máximo de 3 infiltrações por dedo (risco de ruptura tendinosa)',
      'Intervalo mínimo de 6 semanas entre infiltrações',
      'Diabéticos: menor taxa de sucesso com infiltração (50%)',
      'AINE e modificação de atividades como adjuvantes',
    ],
  },
  {
    id: 'surgical',
    title: 'Tratamento Cirúrgico',
    content: [
      'Indicação: falha do tratamento conservador, grau III-IV, ou preferência do paciente',
      'Release aberto da polia A1: gold standard, taxa de sucesso >95%',
      'Incisão transversa ou longitudinal sobre polia A1',
      'Liberação completa da polia A1 sob visão direta',
      'POLEGAR: proteger a polia oblíqua (essencial para função) - liberar apenas A1',
      'Release percutâneo: alternativa com agulha calibre 18-19',
      'Complicações: lesão neurovascular digital, bowstringing (raro), recidiva (<3%)',
      'Retorno às atividades: 2-4 semanas',
    ],
  },
];

export default function TriggerFingerGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('pathoanatomy');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Dedo em Gatilho (Tenossinovite Estenosante) — Classificação de Quinnell</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Tenossinovite estenosante do tendão flexor que causa travamento do dedo na flexão. Inflamação e espessamento do tendão flexor na polia A1 causa disparo ou bloqueio ao deslizamento.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Dedo que trava, estalido doloroso na flexão/extensão ou bloqueio fixo em flexão. Classificação de Quinnell (0-4) guia o tratamento conservador versus cirúrgico.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Grau 0-1: AINE + órtese. Grau 2: infiltração de corticoide A1 (75-90% resolução em 1-2 infiltrações). Grau 3-4 ou falha conservador: liberação percutânea ou cirúrgica da polia A1. Excluir AR e diabetes.</p>
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
      <Alert type="info">No polegar, a polia obliqua e essencial para a funcao de pinca e NUNCA deve ser liberada.</Alert>
      <Alert type="caution">Trigger finger em criancas e uma entidade distinta (trigger thumb congenito) - nao confundir com a forma do adulto.</Alert>
    </div>
  );
}
