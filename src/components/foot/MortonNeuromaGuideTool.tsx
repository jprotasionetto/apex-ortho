import { Alert } from '@/components/ui/Alert.tsx';

export default function MortonNeuromaGuideTool() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Patoanatomia</h3>
        <p className="text-sm text-slate-300">
          O neuroma de Morton e uma neuropatia compressiva do nervo interdigital plantar, resultando em fibrose perineural e degeneracao nervosa. Nao e um verdadeiro neuroma, mas sim uma fibrose perineural.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li>Localizacao mais comum: 3o espaco interdigital (entre 3o e 4o MT) - 65-70%</li>
          <li>2o espaco interdigital: 25-30%</li>
          <li>Causa: compressao do nervo sob o ligamento transverso metatarsico profundo</li>
          <li>O 3o espaco e mais afetado por receber ramos dos nervos plantar medial e lateral</li>
          <li>Fatores predisponentes: calcados apertados, salto alto, deformidades do antepé</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Diagnostico</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Sinal de Mulder (click):</span> compressao lateromedial do antepé com pressao direta no espaco interdigital - click palpavel e/ou dor</li>
          <li>Dor em queimacao, choque ou dormencia irradiando para os dedos adjacentes</li>
          <li>Piora com calcados apertados e em pe prolongado</li>
          <li><span className="font-medium text-slate-100">Ultrassonografia:</span> sensibilidade 79-95%; massa hipoecogenica no espaco intermetatarsico</li>
          <li><span className="font-medium text-slate-100">RM:</span> massa em sinal baixo em T1 e T2, melhor para exclusao de diagnosticos diferenciais</li>
          <li>Diagnostico diferencial: capsulite MTF, fratura de estresse, sinovite</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Conservador</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Calcados adequados:</span> caixa anterior larga, salto baixo, evitar pontiagudos</li>
          <li><span className="font-medium text-slate-100">Pad metatarsico:</span> apoio retrometatarsico para separar cabecas e descomprimir o nervo</li>
          <li><span className="font-medium text-slate-100">Infiltracao com corticoide:</span> alivio temporario em 30-50%; guiada por US para maior precisao</li>
          <li>Infiltracao com alcool (sclerosing): serie de 3-7 injecoes, resultados variaveis</li>
          <li>Anti-inflamatorios, gelo, modificacao de atividades</li>
          <li>Taxa de sucesso conservador: 40-50%</li>
        </ul>
      </section>

      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Tratamento Cirurgico</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
          <li><span className="font-medium text-slate-100">Neurectomia por via dorsal:</span> abordagem preferida; incisao longitudinal dorsal no espaco intermetatarsico</li>
          <li>Seccao do ligamento transverso metatarsico profundo</li>
          <li>Resseccao do nervo proximal ao ligamento (neuroma fica proximal e profundo)</li>
          <li>Coto nervoso deve ser posicionado em area sem pressao</li>
          <li>Alternativa: abordagem plantar (melhor exposicao mas cicatriz plantar dolorosa)</li>
          <li>Taxa de satisfacao cirurgica: 80-85%</li>
          <li>Complicacoes: neuroma recorrente (stump neuroma), dormencia interdigital esperada</li>
        </ul>
      </section>

      <Alert type="info">O sinal de Mulder positivo com click audivel/palpavel tem alta especificidade para neuroma de Morton. Sempre confirmar com ultrassonografia antes de planejar cirurgia.</Alert>
      <Alert type="caution">Neurectomia em 2 espacos adjacentes simultaneos pode causar desvascularizacao do dedo central. Se necessario operar 2 espacos, realizar em tempos diferentes.</Alert>
    </div>
  );
}
