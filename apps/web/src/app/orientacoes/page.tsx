import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';

const sections = [
  {
    title: 'Aquecimento',
    bullets: ['5–10 minutos de movimento leve', 'Aqueça articulações (ombros, quadril, joelhos)', 'Comece com pouca carga'],
  },
  {
    title: 'Postura correta',
    bullets: ['Coluna neutra', 'Controle do movimento', 'Evite “roubar” com impulso'],
  },
  {
    title: 'Respiração',
    bullets: ['Inspire na fase fácil', 'Expire na fase de esforço', 'Evite prender a respiração por muito tempo'],
  },
  {
    title: 'Progressão de carga',
    bullets: ['Aumente aos poucos', 'Priorize técnica antes de peso', 'Registre sua evolução'],
  },
  {
    title: 'Frequência semanal',
    bullets: ['Iniciante: 2–3x semana', 'Intermediário: 3–4x', 'Avançado: 4–6x (com planejamento)'],
  },
  {
    title: 'Erros comuns',
    bullets: ['Exagerar na carga', 'Fazer rápido demais', 'Ignorar descanso', 'Postura errada'],
  },
  {
    title: 'Como evitar lesões',
    bullets: ['Aqueça', 'Progrida lentamente', 'Use amplitude confortável', 'Pare se sentir dor aguda'],
  },
  {
    title: 'Como organizar o treino (iniciante / intermediário / avançado)',
    bullets: [
      'Iniciante: exercícios básicos + técnica + consistência',
      'Intermediário: mais volume e variação',
      'Avançado: periodização e foco em objetivos',
    ],
  },
];

export default function OrientacoesPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Orientações"
        subtitle="Treine com segurança: técnica, postura e consistência fazem a diferença."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((s) => (
          <Card key={s.title} className="transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-emerald-500/30 bg-emerald-500/10">
        <CardContent className="p-6 text-sm text-emerald-100">
          “Consulte um profissional de educação física se sentir dores ou desconfortos.”
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-sm text-zinc-300">
          <div className="font-semibold text-zinc-100">Diferencial Move&Live (institucional)</div>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Manutenção preventiva</li>
            <li>Consultoria de infraestrutura</li>
            <li>Avaliações físicas presenciais mensais</li>
            <li>Biblioteca digital de treinos 24/7</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
