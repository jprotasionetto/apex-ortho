import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'diagnosis',
    title: 'Diagnóstico (Critérios MSIS)',
    content: [
      'Critérios major (1 critério = diagnóstico):',
      '  - Fístula comunicante com a articulação',
      '  - 2 culturas positivas com o mesmo organismo',
      'Critérios minor (≥3 dos seguintes = diagnóstico):',
      '  - VS (ESR) elevada (>30mm/h)',
      '  - PCR (CRP) elevada (>10mg/L)',
      '  - Leucócitos no líquido sinovial >3.000/μL (>10.000 para joelho agudo)',
      '  - PMN% no líquido sinovial >80%',
      '  - Alfa-defensina positiva (teste mais específico: >95%)',
      '  - D-dímero sinovial elevado',
      'Outros testes úteis:',
      '  - Leucocyte esterase strip test (artrocentese)',
      '  - Cintigrafia com leucócitos marcados (Tc-99m HMPAO)',
      '  - PET-CT: útil em casos duvidosos',
      '  - Culturas de biópsia tecidular (≥3 amostras intra-operatórias)',
    ],
  },
  {
    id: 'acute-vs-chronic',
    title: 'Aguda vs Crónica',
    content: [
      'Infeção aguda pós-operatória: <4-6 semanas após cirurgia',
      'Infeção aguda hematogénica: início agudo em prótese previamente assintomática',
      '  - Febre, dor súbita, eritema, derrame articular',
      '  - Frequentemente secundária a bacteriémia (dentária, urinária, cutânea)',
      'Infeção crónica: >4-6 semanas após cirurgia ou de evolução insidiosa',
      '  - Dor crónica, afrouxamento séptico, fístula',
      '  - Biofilme maduro estabelecido no implante',
      '  - Frequentemente: Staphylococcus epidermidis, Cutibacterium acnes',
      'Organismos mais comuns globais:',
      '  - S. aureus (aguda), S. epidermidis (crónica)',
      '  - Enterococcus, Gram-negativos (polimicrobianas em 10-20%)',
      '  - Fungos (Candida): raro, imunodeprimidos',
    ],
  },
  {
    id: 'dair',
    title: 'Tratamento Aguda (DAIR)',
    content: [
      'DAIR: Debridement, Antibiotics, Implant Retention',
      'Indicações: infeção aguda (<4-6 semanas) OU hematogénica aguda (<3-4 semanas de sintomas)',
      'Implante bem fixo obrigatório',
      'Procedimento:',
      '  1. Desbridamento agressivo de todos os tecidos infetados',
      '  2. Lavagem abundante (>9L de soro)',
      '  3. Troca do inserto de polietileno e cabeça femoral',
      '  4. Manter componentes metálicos fixos',
      '  5. Encerramento sobre drenos',
      'Antibioterapia: IV 2-6 semanas + oral 3-6 meses',
      'Rifampicina: essencial se Staphylococcus (anti-biofilme) — nunca em monoterapia',
      'Taxa de sucesso do DAIR: 55-75% (melhor se <7 dias de sintomas)',
      'Se falha do DAIR: proceder para revisão em 2 tempos',
    ],
  },
  {
    id: 'two-stage',
    title: 'Tratamento Crónica (2 Tempos)',
    content: [
      'Revisão em 2 tempos: gold standard para infeção crónica',
      '1º tempo:',
      '  - Remoção de TODOS os componentes protésicos e cimento',
      '  - Desbridamento agressivo de todos os tecidos infetados',
      '  - Colheita de ≥5 amostras para cultura e histologia',
      '  - Colocação de espaçador de cimento com antibiótico (estático ou articulado)',
      '  - Espaçador articulado: permite alguma mobilidade e facilita 2º tempo',
      '  - Antibióticos no cimento: vancomicina + tobramicina/gentamicina',
      'Intervalo:',
      '  - Antibioterapia IV dirigida por 6 semanas',
      '  - Pausa antibiótica de 2-4 semanas (antibiotic holiday)',
      '  - Repetir análises: VS, PCR, artrocentese',
      '2º tempo (reimplantação):',
      '  - Quando VS e PCR normalizados e culturas negativas',
      '  - Desbridamento adicional + reimplantação definitiva',
      '  - Geralmente 8-12 semanas após 1º tempo',
      'Taxa de sucesso: 85-95%',
    ],
  },
  {
    id: 'salvage',
    title: 'Salvamento',
    content: [
      'Artrodese (fusão): joelho — Girdlestone (quadril) — raro atualmente',
      'Girdlestone (artroplastia de resseção): remoção definitiva do implante sem reimplantação',
      '  - Indicação: infeção não controlável, paciente não candidato a reimplantação',
      '  - Resultado funcional pobre: encurtamento, instabilidade, marcha com auxiliares',
      'Amputação: último recurso para infeção não controlada com risco de vida',
      '  - Indicação: sepsis refratária, destruição óssea massiva, vasculopatia',
      'Antibioterapia supressiva crónica:',
      '  - Indicação: paciente não candidato a cirurgia ou recusa cirurgia',
      '  - Antibiótico oral de longo prazo (flucloxacilina, cotrimoxazol)',
      '  - Controla mas não cura a infeção',
      '  - Risco de resistência antibiótica e efeitos adversos',
      'Revisão em 1 tempo: alternativa em centros especializados (crescente evidência)',
      '  - Remoção + reimplantação no mesmo tempo cirúrgico',
      '  - Seleção rigorosa: organismo conhecido, sensível, sem fístula',
    ],
  },
];

export default function PeriprostheticInfectionGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('diagnosis');

  return (
    <div className="space-y-6">
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
      <Alert type="info">Alfa-defensina e o teste sinovial mais especifico ({'>'}95%) para infecao periprotesica. Criterios MSIS 2018 combinam multiplos testes para diagnostico definitivo.</Alert>
      <Alert type="caution">Rifampicina e essencial contra biofilme de Staphylococcus mas NUNCA deve ser usada em monoterapia (resistencia rapida). Sempre combinar com outro antibiotico (fluoroquinolona, cotrimoxazol).</Alert>
    </div>
  );
}
