import { useState } from 'react';

const AO_TYPES = [
  {
    id: '42A',
    label: 'AO 42-A — Fratura simples',
    description: 'Fratura diafisária simples (traço único). Subtipo A1: espiral; A2: oblíqua (≥30°); A3: transversa (<30°).',
    colorCode: 'safe',
    criteria: [
      'Traço único, sem fragmento intermediário',
      'A1 (espiral): baixa energia, boa vasculari­zação dos fragmentos',
      'A2 (oblíqua longa): frequente em impacto direto',
      'A3 (transversa): alta energia, maior instabilidade',
    ],
    treatment: 'Haste intramedular bloqueada (padrão ouro). Fratura A1/A2: possibilidade de tratamento conservador em casos selecionados com alinhamento adequado. Haste com bloqueio estático.',
  },
  {
    id: '42B',
    label: 'AO 42-B — Fratura em cunha (wedge)',
    description: 'Fratura com fragmento em cunha (butterfly). B1: cunha em espiral; B2: cunha com dobramento (bending); B3: cunha fragmentada.',
    colorCode: 'caution',
    criteria: [
      'Fragmento intermediário (cunha) sem contato entre os fragmentos principais',
      'Instabilidade rotacional no pós-operatório',
      'Maior risco de pseudartrose',
      'Bloqueio estático obrigatório',
    ],
    treatment: 'Haste intramedular bloqueada estática. Evitar carga precoce até formação de calo. Alternativa: placa bloqueada (MIPO) em casos específicos.',
  },
  {
    id: '42C',
    label: 'AO 42-C — Fratura complexa (cominutiva)',
    description: 'Fratura com múltiplos fragmentos sem contato entre os dois fragmentos principais. C1: espiral; C2: segmentar; C3: cominutiva.',
    colorCode: 'danger',
    criteria: [
      'Múltiplos fragmentos ou fratura segmentar',
      'Alta energia cinética',
      'Maior taxa de complicações: pseudartrose, infecção, síndrome compartimental',
      'Frequentemente associada a fraturas expostas (Gustilo II–III)',
    ],
    treatment: 'Haste intramedular bloqueada estática (primeira escolha). Fixador externo temporário em fraturas expostas graves (Gustilo IIIB/C) ou politraumatizados (damage control). Placa bloqueada em casos selecionados.',
  },
];

const GUSTILO_TYPES = [
  { type: 'I', wound: '< 1 cm', contamination: 'Limpa', energy: 'Baixa', management: 'Limpeza, antibiótico (cefalosporina 1ª), haste IM primária possível' },
  { type: 'II', wound: '1–10 cm', contamination: 'Moderada', energy: 'Moderada', management: 'Limpeza, antibiótico, haste IM primária (controverso) ou fixador externo + conversão' },
  { type: 'IIIA', wound: '> 10 cm', contamination: 'Severa', energy: 'Alta', management: 'Desbridamento agressivo, fixador externo, cobertura cutânea local possível, haste diferida' },
  { type: 'IIIB', wound: '> 10 cm', contamination: 'Severa + perda ossea', energy: 'Alta', management: 'Desbridamento, fixador externo, retalho muscular (retalho microvascular), enxerto ósseo posterior' },
  { type: 'IIIC', wound: 'Lesão vascular', contamination: 'Qualquer', energy: 'Alta', management: 'Revascularização < 6h (shunt temporário), amputação x salvamento (MESS > 7), fixador externo' },
];

const colorMap: Record<string, string> = { safe: '#22C55E', caution: '#F59E0B', danger: '#EF4444' };

const TABS = [
  { id: 'ao', label: 'AO 42 (A/B/C)' },
  { id: 'gustilo', label: 'Gustilo (abertas)' },
  { id: 'technique', label: 'Técnica HIM' },
];

export default function TibiaShaftFractureTool() {
  const [activeTab, setActiveTab] = useState<'ao' | 'gustilo' | 'technique'>('ao');
  const [selected, setSelected] = useState<string | null>(null);

  const handleTabChange = (tab: 'ao' | 'gustilo' | 'technique') => {
    setActiveTab(tab);
    setSelected(null);
  };

  const activeGrade = selected ? AO_TYPES.find((t) => t.id === selected) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-1">
          Fratura Diafisária da Tíbia (AO 42) — Manual SBOT (pp. 231, 250–251)
        </p>
        <p className="text-xs text-gray-500">
          Classificação AO (42-A/B/C) · Haste intramedular · Gustilo (fraturas expostas) · Complicações
        </p>
      </div>

      {/* Manual images */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">
          Manual SBOT — Imagens de Referência
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { src: '/images/manual-trauma/page231_img1.png', alt: 'Fratura diafisária da tíbia — contexto anatômico' },
            { src: '/images/manual-trauma/page250_img1.png', alt: 'Placas bloqueadas — técnica MIPO' },
            { src: '/images/manual-trauma/page251_img1.png', alt: 'Hastes intramedulares — visão geral' },
            { src: '/images/manual-trauma/page251_img2.png', alt: 'Hastes intramedulares — detalhes técnicos' },
          ].map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-[#0A0A0A] border border-[rgba(212,175,55,0.1)]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
              />
              <p className="text-[10px] text-[#6B7280] p-1.5 leading-tight">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id as 'ao' | 'gustilo' | 'technique')}
            className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all border ${
              activeTab === tab.id
                ? 'bg-[rgba(212,175,55,0.15)] border-[#D4AF37] text-[#D4AF37]'
                : 'bg-[#111111] border-[rgba(255,255,255,0.08)] text-gray-400 hover:border-[rgba(212,175,55,0.3)] hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* AO Classification */}
      {activeTab === 'ao' && (
        <div className="space-y-4">
          <div className="grid gap-2">
            {AO_TYPES.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelected(t.id === selected ? null : t.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selected === t.id
                    ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)]'
                    : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,175,55,0.3)] bg-[#111111]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colorMap[t.colorCode] }}
                  />
                  <span className="font-medium text-white text-sm">{t.label}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 ml-6">{t.description}</p>
              </button>
            ))}
          </div>

          {activeGrade && (
            <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: colorMap[activeGrade.colorCode] }}
                />
                <h3 className="text-lg font-semibold text-white">{activeGrade.label}</h3>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Critérios</h4>
                <ul className="space-y-1">
                  {activeGrade.criteria.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-300">
                      <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.15)]">
                <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">Tratamento</h4>
                <p className="text-sm text-gray-300">{activeGrade.treatment}</p>
              </div>
            </div>
          )}

          {/* Treatment options overview */}
          <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Opções de Tratamento</h3>
            <div className="space-y-2">
              {[
                { option: 'Haste intramedular (HIM) bloqueada', indication: 'Padrão ouro para fraturas diafisárias 42-A/B/C. Bloqueio estático sempre. Conversão halo → HIM em 5–14 dias em fraturas expostas Gustilo I–II.' },
                { option: 'Gesso / brace funcional', indication: 'Reservado a fraturas estáveis (A1) com desvio mínimo, em pacientes de baixa demanda ou contraindicação cirúrgica.' },
                { option: 'Fixador externo', indication: 'Damage control em politraumatizados, fraturas expostas Gustilo IIIB/C, contaminação grave. Conversão para HIM após 5–14 dias ou cobertura definitiva.' },
                { option: 'Placa bloqueada (MIPO)', indication: 'Fraturas proximais ou distais (zona de isthmo ausente), falha de HIM, casos com fragmento articular periarticular.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="text-[#D4AF37] flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <span className="text-white font-medium">{item.option}: </span>
                    <span className="text-gray-300">{item.indication}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gustilo Classification */}
      {activeTab === 'gustilo' && (
        <div className="space-y-3">
          <p className="text-xs text-gray-400 px-1">
            Classificação de Gustilo-Anderson para fraturas expostas — relevante em 20–25% das fraturas diafisárias da tíbia.
          </p>
          {GUSTILO_TYPES.map((g) => (
            <div
              key={g.type}
              className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#D4AF37]">Gustilo {g.type}</span>
                <span className="text-xs text-gray-500">— {g.wound}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Contaminação: </span>
                  <span className="text-gray-300">{g.contamination}</span>
                </div>
                <div>
                  <span className="text-gray-500">Energia: </span>
                  <span className="text-gray-300">{g.energy}</span>
                </div>
              </div>
              <p className="text-xs text-gray-300">{g.management}</p>
            </div>
          ))}
          <div className="p-4 rounded-xl bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)]">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">Antibioticoterapia</p>
            <p className="text-xs text-gray-300">
              Gustilo I–II: cefalosporina 1ª geração (cefazolina 1–2 g 8/8h) por 24–48h.
              Gustilo III: adicionar aminoglicosídeo (gentamicina) por 72h.
              IIIC com contaminação orgânica: adicionar penicilina G cristalina (cobertura anaeróbia).
              Iniciar no pronto-socorro — não aguardar BO.
            </p>
          </div>
        </div>
      )}

      {/* HIM Technique */}
      {activeTab === 'technique' && (
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Técnica da Haste Intramedular Tibial</h3>
            <div className="space-y-3">
              {[
                {
                  step: '1. Posicionamento',
                  detail: 'Decúbito dorsal com joelho fletido 90° (posição semi-fletida / "hyperflexion"). Mesa ortopédica ou coxim sob o joelho. Tração pode ser usada em fraturas muito distais.',
                },
                {
                  step: '2. Ponto de entrada',
                  detail: 'Infrapatelar (transtendinoso ou parapatelar medial). Guia de Ender ou ponta do tendão patelar como referência. Ponto ideal: fossa intercondilar, ligeiramente medial ao tubérculo tibial — confirmar com arco em PA e perfil.',
                },
                {
                  step: '3. Fresagem (reaming)',
                  detail: 'Fresagem sequencial aumenta área de contato, permite haste de maior calibre e melhora consolidação (ativa o processo biológico). Controverso em fraturas expostas — fresagem leve (0,5–1 mm acima canal) pode ser realizada em Gustilo I–II.',
                },
                {
                  step: '4. Inserção da haste',
                  detail: 'Haste de diâmetro adequado ao canal. Comprimento: do ponto de entrada até nível articular do tornozelo (verificar em perfil — haste não deve ultrapassar epífise distal).',
                },
                {
                  step: '5. Bloqueio',
                  detail: 'Bloqueio estático proximal e distal SEMPRE em fraturas agudas. Dinamização (retirada de 1 parafuso proximal) somente após 6–8 semanas se ausência de calo. Técnica de "poking" com intensificador.',
                },
              ].map((s, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#D4AF37]">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{s.step}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complications */}
          <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Complicações</h3>
            <div className="space-y-2">
              {[
                { comp: 'Dor anterior no joelho', detail: 'Mais comum (até 50%). Relacionada ao ponto de entrada transtendinoso. Reduzida com abordagem parapatelar medial.' },
                { comp: 'Malrotação', detail: 'Erro técnico mais frequente. Comparar com membro contralateral. Usar marcadores de rotação intraoperatórios (projeção da cabeca do perônio).' },
                { comp: 'Síndrome compartimental', detail: 'Urgência cirúrgica. Monitorizar pressão (delta P < 30 mmHg = indicação de fasciotomia). Alta suspeição em fraturas de alta energia e expostas.' },
                { comp: 'Pseudartrose', detail: 'Mais comum na tíbia que em outros ossos longos (menor cobertura de partes moles). Tratamento: dinamização, enxerto ósseo, troca de haste.' },
                { comp: 'Infecção', detail: 'Maior risco em fraturas expostas Gustilo III. Tratamento: desbridamento, antibiótico guiado por cultura, manutenção ou remoção da haste conforme estabilidade.' },
              ].map((c, i) => (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="text-[#EF4444] flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <span className="text-white font-medium">{c.comp}: </span>
                    <span className="text-gray-400">{c.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Clinical pearl */}
      <div className="p-4 rounded-xl bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)]">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Pérola Clínica</p>
        <p className="text-sm text-gray-300">
          A haste intramedular bloqueada é o padrão ouro para fraturas diafisárias da tíbia. A fresagem aumenta as taxas de consolidação mesmo em fraturas fechadas.
          A posição semi-fletida do joelho (semi-extended nailing) reduz a dor anterior pós-operatória e facilita o alinhamento em fraturas proximais.
        </p>
      </div>
    </div>
  );
}
