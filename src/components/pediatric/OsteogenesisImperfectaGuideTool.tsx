import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'sillence',
    title: 'Classificação de Sillence',
    content: [
      'Tipo I – Forma Leve (mais comum, autossómico dominante)',
      '  - Escleróticas azuis',
      '  - Fraturas com trauma mínimo, diminuem após puberdade',
      '  - Estatura normal ou ligeiramente reduzida',
      '  - Surdez em 50% (otosclerose)',
      '  - Dentinogénese imperfeita variável (Ia: sem; Ib: com)',
      'Tipo II – Forma Letal Perinatal',
      '  - Fraturas intrauterinas múltiplas',
      '  - Ossos wormianos no crânio, costelas em rosário',
      '  - Incompatível com vida (morte perinatal por insuficiência respiratória)',
      'Tipo III – Forma Severa Progressiva',
      '  - Fraturas recorrentes com deformidade progressiva',
      '  - Baixa estatura severa, escoliose progressiva',
      '  - Escleróticas azuis ao nascer, clareiam com idade',
      '  - Face triangular, macrocefalia relativa',
      '  - Dentinogénese imperfeita frequente',
      'Tipo IV – Forma Moderada',
      '  - Escleróticas normais (brancas)',
      '  - Fraturas moderadas, deformidade variável',
      '  - Baixa estatura moderada',
      '  - Dentinogénese imperfeita variável (IVa: sem; IVb: com)',
      '  - Autossómico dominante',
    ],
  },
  {
    id: 'pathophysiology',
    title: 'Fisiopatologia',
    content: [
      'Defeito no colagénio tipo I (principal proteína estrutural do osso)',
      'Mutações nos genes COL1A1 ou COL1A2',
      'Tipo I: defeito quantitativo (menos colagénio mas estruturalmente normal)',
      'Tipos II-IV: defeito qualitativo (colagénio estruturalmente anormal)',
      'Osso osteoporótico com córtex fino e trabéculas reduzidas',
      'Herança autossómica dominante (maioria), recessiva (formas raras)',
      'Mutações de novo em 25-30% dos casos (sem história familiar)',
      'Afeta todos os tecidos ricos em colagénio I: osso, pele, dentes, esclera, ligamentos',
    ],
  },
  {
    id: 'treatment',
    title: 'Tratamento Médico',
    content: [
      'Bifosfonatos: tratamento médico de primeira linha (pamidronato IV ou zoledronato)',
      'Bifosfonatos: aumentam DMO, reduzem fraturas, melhoram dor e mobilidade',
      'Iniciar precocemente nos tipos III e IV (primeiros meses de vida)',
      'Ciclos de pamidronato IV cada 3-4 meses em crianças',
      'Cálcio e vitamina D: suplementação adequada',
      'Reabilitação: essencial para manter mobilidade e função',
      'Hidroterapia: permite exercício com menor risco de fratura',
      'Ortóteses: proteção durante a marcha',
      'Equipa multidisciplinar: ortopedia, pediatria, fisiatria, dentista, geneticista',
    ],
  },
  {
    id: 'surgical',
    title: 'Tratamento Cirúrgico',
    content: [
      'Encavilhamento intramedular: indicado para fraturas recorrentes e deformidades',
      'Hastes telescópicas de Fassier-Duval: crescem com o osso da criança',
      'Vantagem das hastes telescópicas: menos reoperações que hastes fixas',
      'Hastes fixas (Rush, Steinmann): alternativa em ossos pequenos',
      'Osteotomias corretivas múltiplas: corrigir deformidades angulares + encavilhamento',
      'Técnica: osteotomias percutâneas segmentares + enfiamento da haste',
      'Escoliose: artrodese posterior com instrumentação (osso osteoporótico = desafio técnico)',
      'Basilar invagination: rara, monitorização com RM craniocervical',
      'Complicações: migração de hastes, fraturas periprotésicas, pseudartrose',
    ],
  },
];

export default function OsteogenesisImperfectaGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('sillence');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Osteogênese Imperfeita — Classificação de Sillence</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Doença genética do colágeno tipo I que causa fragilidade óssea. Classificação de Sillence divide em 4 tipos principais pela gravidade (I: leve a IV: moderada-grave). Mutações em COL1A1/COL1A2.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Criança com fraturas repetidas, escleróticas azuis, perda auditiva, dentinogênese imperfeita ou hiperlassidão ligamentar. Suspeita de maus-tratos deve ser diferenciada. Diagnóstico clínico + genético.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Tipo I: mais comum, leve, poucas fraturas. Tipo II: letal perinatal. Tipo III: grave, deformidade progressiva. Tipo IV: moderada. Tratamento: bisfosfonatos (pamidronato), hastes telescópicas intramedular (Fassier-Duval) para fêmur e tíbia com deformidades. Sem cura.</p>
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
      <Alert type="info">Hastes telescopicas de Fassier-Duval sao o gold standard para encavilhamento em criancas com OI — crescem com o osso e reduzem reoperacoes.</Alert>
      <Alert type="caution">Diferenciar OI de maus-tratos infantis e crucial. Historia familiar, escleróticas azuis, osteopenia difusa, ossos wormianos e dentinogenese imperfeita ajudam no diagnostico diferencial.</Alert>
    </div>
  );
}
