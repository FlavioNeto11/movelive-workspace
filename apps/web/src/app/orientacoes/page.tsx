import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { contentProvider } from '@/lib/content';

export default async function OrientacoesPage() {
  const sections = await contentProvider.getOrientations();

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
