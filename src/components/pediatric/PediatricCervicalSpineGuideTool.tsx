import { useState } from 'react';

const images = [
  { src: '/images/manual-trauma/page329_img1.png', caption: 'Anatomia da coluna cervical pediátrica' },
  { src: '/images/manual-trauma/page330_img1.png', caption: 'Figura 3a — Radiografia coluna cervical pediátrica' },
  { src: '/images/manual-trauma/page330_img2.png', caption: 'Figura 3b — Radiografia coluna cervical pediátrica' },
  { src: '/images/manual-trauma/page330_img3.png', caption: 'Figura 3c — Radiografia coluna cervical pediátrica' },
  { src: '/images/manual-trauma/page331_img1.png', caption: 'Linha de Swischuk e pseudossubluxação C2-C3' },
  { src: '/images/manual-trauma/page332_img1.png', caption: 'Instabilidade atlantoaxial — achados radiológicos' },
  { src: '/images/manual-trauma/page335_img1.png', caption: 'SCIWORA — protocolo de imagem e manejo' },
];

const sections = [
  {
    id: 'anatomy',
    title: 'Anatomia Pediátrica vs Adulto',
    content: [
      'DIFERENÇAS CHAVE DA COLUNA CERVICAL PEDIÁTRICA:',
      'Ligamentos mais frouxos — maior mobilidade mas menor estabilidade',
      'Articulações facetárias mais horizontais — favorece translação anterior',
      'Cabeça proporcionalmente maior — alavanca maior sobre C-spine alta',
      'Centros de ossificação múltiplos — risco de confundir variante com fratura',
      'PSEUDOSSUBLUXAÇÃO C2-C3 (e C3-C4): NORMAL até 8 anos',
      '  — Translação anterior até 3 mm é NORMAL em flexão',
      '  — Linha de Swischuk: traça borda posterior de C1-C2-C3 (confirma pseudossubluxação)',
      '  — Se linha de Swischuk desviada &gt;2 mm → suspeita de fratura real',
      'ATLAS: ossifica de 3 centros; sínfise anterior fecha 7-10 anos',
      'DENTE/ODONTÓIDE: 2 centros primários + ápice; sínfise com corpo C2 fecha aos 7 anos',
      'Espaço atlantodental (ADI) normal: < 5 mm em crianças (< 3 mm em adultos)',
    ],
  },
  {
    id: 'sciwora',
    title: 'SCIWORA',
    content: [
      'SCIWORA = Spinal Cord Injury Without Radiographic Abnormality',
      'Incidência: 20-38% das lesões medulares pediátricas (raro em adultos)',
      'MECANISMO: hiperextensão/hiperflexão — medula se estica além da elasticidade',
      'Coluna volta à posição normal → sem fratura/luxação no RX ou TC',
      'FAIXA ETÁRIA: mais comum < 8 anos (coluna mais elástica)',
      'CLÍNICA: déficit neurológico real sem achados de imagem convencionais',
      '  — Pode ser transitório (parestesias) ou permanente (plegia)',
      '  — Latência de sintomas em alguns casos (horas após trauma)',
      'DIAGNÓSTICO: RM é o exame de ELEIÇÃO',
      '  — Pode mostrar edema medular, hemorragia ou contusão',
      '  — RM normal não exclui SCIWORA, mas melhor prognóstico',
      'LOCALIZAÇÃO: C-spine alta (C1-C4) mais comum em < 8 anos',
      'TRATAMENTO: imobilização, reabilitação; esteroides controversos',
      'PROGNÓSTICO: pior com RM anormal; latência ≠ bom prognóstico',
    ],
  },
  {
    id: 'fracture-patterns',
    title: 'Padrões por Idade',
    content: [
      'CRIANÇAS < 8 ANOS — C-spine ALTA (C1-C4):',
      '  — C1: fratura de Jefferson (explosão do atlas) — rara',
      '  — C2: fratura do odontóide pela sincondrosis (Tipo I de Anderson-D\'Alonzo em criança)',
      '  — Atlantoaxial rotatory subluxation (AARS): coceira cervical após trauma leve ou IVAS',
      '  — SCIWORA mais frequente nesta faixa etária',
      'CRIANÇAS > 8 ANOS — C-spine BAIXA (C4-C7), padrão similar ao adulto:',
      '  — Fratura-luxação como nos adultos',
      '  — Fratura em lágrima (flexão), fratura em extensão',
      '  — Lesão unilateral/bilateral das facetas',
      '  — Fratura de Chance (cinto de segurança) — mais na coluna torácica/lombar',
      'ODONTÓIDE EM CRIANÇAS: fratura pela sincondrosis (base do dente)',
      '  — Diferente do adulto (tipo II odontoid) — passa pela cartilagem de crescimento',
      '  — Redução + halo ou colar rígido por 8-12 semanas',
      '  — Cirurgia se redução impossível ou instabilidade persistente',
    ],
  },
  {
    id: 'atlantoaxial',
    title: 'Instabilidade Atlantoaxial',
    content: [
      'CAUSAS EM CRIANÇAS:',
      '  — Síndrome de Down (trissomia 21): 10-30% têm ADI > 4,5 mm; rastreio obrigatório',
      '  — Artrite idiopática juvenil (AIJ): pannus sinovial compromete ligamento transverso',
      '  — Síndrome de Morquio: hipoplasia do odontóide + frouxidão ligamentar',
      '  — Pós-infecção (Grisel): subluxação rotatória após IVAS — por hiperemia ligamentar',
      '  — Trauma direto: rutura do ligamento transverso',
      'DIAGNÓSTICO:',
      '  — ADI (espaço atlantodental): > 5 mm em crianças = instabilidade',
      '  — Espaço medular disponível (SAC) < 13 mm: risco neurológico',
      '  — TC em flexo-extensão para quantificar instabilidade',
      '  — RM para avaliar compressão medular',
      'SÍNDROME DE DOWN — RASTREIO:',
      '  — RX flexo-extensão antes de atividades de risco (esportes, anestesia)',
      '  — ADI > 4,5 mm: restrição de atividades de risco',
      '  — ADI > 10 mm ou sintomas: artrodese C1-C2',
      'TRATAMENTO: colar → tração → artrodese conforme gravidade',
    ],
  },
  {
    id: 'clearance',
    title: 'Liberação da C-Spine',
    content: [
      'PROTOCOLO DE LIBERAÇÃO DA COLUNA CERVICAL PEDIÁTRICA:',
      'CRIANÇA COLABORATIVA E ASSINTOMÁTICA:',
      '  — Mecanismo de baixo risco + sem dor cervical + amplitude normal → liberação clínica',
      '  — NEXUS e Canadian C-Spine Rule validados com adaptações para > 2 anos',
      'CRIANÇA NÃO COLABORATIVA / ALTERADA / SINTOMÁTICA:',
      '  — Colar rígido imediatamente',
      '  — RX em AP, perfil e abertura da boca (> 5 anos)',
      '  — TC: apenas se RX suspeito ou mecanismo de alto risco (dose de radiação!)',
      '  — RM: indicado para SCIWORA, lesão ligamentar, déficit neurológico',
      'IMAGEM:',
      '  — RX perfil: visualizar C1-C7 (incluir C7-T1)',
      '  — TC: melhor para osso, mas maior dose de radiação — usar com parcimônia em crianças',
      '  — RM: melhor para medula, ligamentos e SCIWORA — sem radiação',
      'TRATAMENTO:',
      '  — Colar Philadelphia: lesões estáveis de baixo grau',
      '  — Halo: instabilidade C1-C2 em crianças > 3-4 anos (pino superficial)',
      '  — Cirurgia: instabilidade persistente, déficit neurológico progressivo',
      '  — Em < 2-3 anos: evitar halo (crânio fino) — usar minerva/colar moldado',
    ],
  },
];

export default function PediatricCervicalSpineGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('anatomy');

  return (
    <div className="space-y-6">
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-4">
        <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-3">Manual SBOT — Trauma da Coluna Cervical Pediátrica (pp. 329–335)</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img) => (
            <div key={img.src} className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <img src={img.src} alt={img.caption} className="w-full h-24 object-cover bg-[#0A0A0A]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="px-2 py-1 bg-[#0A0A0A]"><p className="text-xs text-gray-400 leading-tight">{img.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <button key={s.id} onClick={() => setActiveSection(s.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === s.id ? 'bg-[#D4AF37] text-[#0A0A0A]' : 'bg-[#111111] text-gray-400 border border-[rgba(255,255,255,0.08)] hover:text-gray-200 hover:border-[rgba(212,175,55,0.3)]'}`}>{s.title}</button>
        ))}
      </div>
      {sections.filter((s) => s.id === activeSection).map((s) => (
        <div key={s.id} className="bg-[#111111] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">{s.title}</h3>
          <ul className="space-y-2">
            {s.content.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300"><span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4">
        <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">Ponto-Chave</p>
        <p className="text-sm text-gray-300">SCIWORA ocorre em 20-38% das lesões medulares pediátricas — RM é obrigatória em toda criança com déficit neurológico e imagem convencional normal. Pseudossubluxação C2-C3 é NORMAL até 8 anos — usar linha de Swischuk para confirmar. Lesões em menores de 8 anos tendem a ser na C-spine alta; acima de 8 anos o padrão assemelha-se ao adulto.</p>
      </div>
      <div className="bg-[#111111] border border-[rgba(239,68,68,0.2)] rounded-xl p-4">
        <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Atenção</p>
        <p className="text-sm text-gray-300">Na Síndrome de Down: rastreio de instabilidade atlantoaxial obrigatório antes de atividades de risco ou anestesia geral. TC deve ser usada com parcimônia em crianças — preferir RM para avaliação de SCIWORA e lesões ligamentares. ADI normal em criança: até 5 mm (diferente do adulto: 3 mm).</p>
      </div>
    </div>
  );
}
