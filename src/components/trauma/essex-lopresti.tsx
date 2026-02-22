import { Alert } from '@/components/ui/Alert.tsx';

export default function EssexLoprestiTool() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Definição</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">A lesão de Essex-Lopresti é uma lesão longitudinal do antebraço que envolve três componentes fundamentais:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li>Fratura da cabeça do rádio (geralmente cominutiva)</li>
            <li>Ruptura da membrana interóssea do antebraço (MIO)</li>
            <li>Instabilidade da articulação radioulnar distal (ARUD)</li>
          </ul>
          <p className="text-sm text-slate-300">O mecanismo é uma carga axial longitudinal pelo rádio, transmitida proximalmente, com dissipação de energia pela MIO e ARUD.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Diagnóstico</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300">O diagnóstico é frequentemente perdido na avaliação inicial. Elementos-chave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Fratura da cabeça do rádio</strong> - geralmente cominutiva (Mason tipo III)</li>
            <li><strong className="text-slate-100">Dor no punho</strong> - dor na ARUD associada a fratura do cotovelo = sinal de alerta</li>
            <li><strong className="text-slate-100">Instabilidade da ARUD</strong> - teste da tecla do piano positivo, subluxação dorsal da ulna</li>
            <li><strong className="text-slate-100">Migração proximal do rádio</strong> - variância ulnar positiva na radiografia do punho</li>
            <li><strong className="text-slate-100">Sensibilidade ao longo do antebraço</strong> - dor à palpação sobre a MIO</li>
          </ul>
          <p className="text-sm text-slate-400 mt-2">Regra: Em TODA fratura da cabeça do rádio, radiografar o punho ipsilateral.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Tratamento</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <p className="text-sm text-slate-300 font-semibold">Princípio fundamental: NUNCA ressecar a cabeça do rádio sem substituição protética.</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Se cabeça reconstrutível:</strong> RAFI com placa/parafusos</li>
            <li><strong className="text-slate-100">Se cabeça não reconstrutível:</strong> prótese metálica da cabeça do rádio (OBRIGATÓRIO)</li>
            <li><strong className="text-slate-100">ARUD:</strong> imobilização em supinação por 6 semanas, reparo do CFCT se instável</li>
            <li><strong className="text-slate-100">Fixação temporária da ARUD:</strong> fio de Kirschner transradioulnar distal por 6 semanas</li>
            <li><strong className="text-slate-100">Casos crônicos:</strong> reconstrução da MIO (enxerto tendíneo), prótese radial, osteotomia de encurtamento ulnar</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-100 mb-3">Complicações</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3">
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-100">Migração proximal do rádio:</strong> causa impacto ulnocarpal e dor crônica no punho</li>
            <li><strong className="text-slate-100">Instabilidade crônica da ARUD:</strong> dor, limitação de pronosupinação</li>
            <li><strong className="text-slate-100">Artrose radiocapitelar:</strong> se prótese mal dimensionada ou inadequada</li>
            <li><strong className="text-slate-100">Síndrome de impacto ulnocarpal:</strong> consequência da variância ulnar positiva progressiva</li>
          </ul>
        </div>
      </section>

      <Alert type="info">Regra clínica fundamental: NUNCA excise a cabeça do rádio em uma lesão de Essex-Lopresti sem substituição protética. A excisão isolada resulta em migração proximal progressiva do rádio e dor crônica no punho.</Alert>
    </div>
  );
}
