import Link from 'next/link';
import { contentProvider } from '@/lib/content';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const ORDER = ['iniciante', 'intermediario', 'avancado'] as const;

export default async function TreinosProntosPage() {
  const workouts = await contentProvider.listReadyWorkouts();
  const sorted = [...workouts].sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Treinos Prontos"
        subtitle="Treinos estruturados completos para facilitar sua rotina."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {sorted.map((w) => (
          <Link key={w.id} href={`/treinos-prontos/${w.id}`}>
            <Card className="h-full transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
              <CardHeader>
                <CardTitle>{w.name}</CardTitle>
                <CardDescription>{w.objective}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-zinc-300">
                Abra para ver a ordem correta, checklist e PDF.
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
