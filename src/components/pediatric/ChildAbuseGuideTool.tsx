import { useState } from 'react';
import { Alert } from '@/components/ui/Alert.tsx';

const sections = [
  {
    id: 'suspicious-fractures',
    title: 'Fraturas Suspeitas',
    content: [
      'Fratura metafisária clássica (CML/bucket handle): ALTAMENTE específica para maus-tratos',
      'Fraturas costais posteriores: especialmente em lactentes',
      'Fraturas da escápula: raro em trauma acidental',
      'Fraturas dos processos espinhosos: mecanismo de hiperflexão forçada',
      'Fraturas do esterno: trauma direto significativo necessário',
      'Fraturas em diferentes estádios de cicatrização: sugere lesões repetidas',
      'Fraturas diafisárias em espiral do úmero/fémur em lactentes',
      'Fraturas bilaterais ou simétricas',
      'Fraturas complexas do crânio em lactentes',
    ],
  },
  {
    id: 'age-suspicion',
    title: 'Suspição por Idade',
    content: [
      'Lactente não deambulante (&lt;1 ano) com qualquer fratura: investigar SEMPRE',
      'Fratura do fémur em criança &lt;18 meses sem história de trauma significativo',
      'Fratura do úmero em criança &lt;3 anos: 50% associada a maus-tratos',
      'Quanto mais jovem a criança, maior a probabilidade de lesão não acidental',
      'Crianças &lt;2 anos: 80% das fraturas por maus-tratos ocorrem nesta faixa',
      'História inconsistente com o padrão de fratura ou nível de desenvolvimento motor',
      'Atraso na procura de cuidados médicos',
      'História que muda entre relatos ou entre cuidadores',
    ],
  },
  {
    id: 'workup',
    title: 'Investigação',
    content: [
      'Levantamento esquelético completo (skeletal survey): obrigatório em &lt;2 anos',
      'AP e lateral de todos os ossos longos, mãos, pés, crânio, coluna, tórax, pelve',
      'Repetir levantamento esquelético em 2 semanas (fraturas ocultas tornam-se visíveis)',
      'TC crânio: excluir hemorragia intracraniana',
      'Fundo de olho: hemorragias retinianas (síndrome do bebé abanado)',
      'Análises: hemograma, coagulação, metabolismo fosfo-cálcico, vitamina D',
      'Avaliação pela assistência social obrigatória',
      'Documentação fotográfica de lesões cutâneas',
      'Cintigrafia óssea pode complementar o levantamento esquelético',
    ],
  },
  {
    id: 'reporting',
    title: 'Notificação Obrigatória',
    content: [
      'Notificação é OBRIGAÇÃO LEGAL em caso de suspeita (não necessita certeza)',
      'O médico NÃO precisa provar o abuso, apenas reportar a suspeita',
      'Notificar: CPCJ (Comissão de Proteção de Crianças e Jovens) ou tribunal',
      'Documentar detalhadamente: história, exame físico, achados radiológicos',
      'Internar a criança se necessário para proteção imediata',
      'Avaliar irmãos e outros menores no domicílio',
      'O médico está protegido legalmente ao notificar de boa-fé',
      'NÃO confrontar os cuidadores nem fazer acusações diretas',
      'Trabalho multidisciplinar: pediatria, ortopedia, assistência social, psicologia',
    ],
  },
  {
    id: 'differential',
    title: 'Diagnóstico Diferencial',
    content: [
      'Osteogénese imperfeita: fraturas múltiplas, escleróticas azuis, história familiar, osteopenia difusa',
      'Raquitismo: alargamento metafisário, craniotabes, rosário raquítico, alargamento dos punhos',
      'Escorbuto (deficiência de vitamina C): hemorragia subperiosteal, petéquias',
      'Sífilis congénita: periostite, osteocondrite',
      'Leucemia/tumores: dor óssea, pancitopenia, lesões líticas',
      'Osteomielite: febre, sinais inflamatórios locais',
      'Insensibilidade congénita à dor: fraturas recorrentes sem reação dolorosa',
      'Síndrome de Menkes: cabelo quebradiço, hipotonia, osteoporose',
      'Osteopetrose: osso denso mas frágil',
    ],
  },
];

export default function ChildAbuseGuideTool() {
  const [activeSection, setActiveSection] = useState<string>('suspicious-fractures');

  return (
    <div className="space-y-6">
      {/* Contexto Clínico */}
      <div className="bg-[#111111] border border-[rgba(212,175,55,0.15)] rounded-xl p-4 space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-1 min-h-[40px] rounded-full bg-[#D4AF37] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">Guia de Suspeita de Maus-Tratos em Crianças — Child Abuse</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Protocolo de identificação de fraturas e padrões radiológicos suspeitos de abuso infantil. Inclui fraturas patognomônicas e sinais de alarme que obrigam notificação e investigação multidisciplinar.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Indicação</p>
            <p className="text-xs text-gray-300 leading-relaxed">Fratura em criança &lt;2 anos sem mecanismo compatível, fraturas múltiplas em diferentes fases de consolidação, fraturas de arco posterior de costelas, fraturas metafisárias em balde. Qualquer suspeita deve ser notificada.</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-lg p-2">
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Relevância Clínica</p>
            <p className="text-xs text-gray-300 leading-relaxed">Fraturas altamente específicas: metafisárias clásicas, costelas posteriores, escápula, apófise espinhosa e crânio bilateral. Obrigatório: tomografia de corpo inteiro (esquema esquelético), TC de crânio, exame de fundo de olho, avaliação social e notificação ao Conselho Tutelar.</p>
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
      <Alert type="info">A fratura metafisaria classica (CML/bucket handle) e a fratura mais especifica para maus-tratos em criancas. Levantamento esqueletico completo e obrigatorio em criancas menores de 2 anos com suspeita.</Alert>
      <Alert type="caution">A notificacao e uma obrigacao legal. Nao e necessario ter certeza do abuso para notificar — a suspeita clinica e suficiente e o medico esta protegido legalmente.</Alert>
    </div>
  );
}
