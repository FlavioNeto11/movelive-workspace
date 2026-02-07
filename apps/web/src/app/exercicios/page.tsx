import Link from 'next/link';
import * as Icons from 'lucide-react';
import { contentProvider } from '@/lib/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { SectionTitle } from '@/components/SectionTitle';

function Icon({ name }: { name: string }) {
  const Cmp = (Icons as any)[name] ?? Icons.Dumbbell;
  return <Cmp className="h-7 w-7 text-emerald-400" aria-hidden="true" />;
}

export default async function ExerciseLibraryPage() {
  const groups = await contentProvider.getMuscleGroups();

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Escolha o grupo muscular"
        subtitle="Clique em um grupamento para acessar os exercícios disponíveis."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <Link key={g.id} href={g.id === 'orientacoes' ? '/orientacoes' : `/exercicios/${g.id}`}>
            <Card className="h-full transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
                    <Icon name={g.icon} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{g.name}</CardTitle>
                    <CardDescription>{g.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-zinc-300">
                Toque para ver exercícios e vídeos.
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="pt-6">
        <Link href="/treinos-prontos">
          <Card className="border-emerald-500/30 bg-emerald-500/10 transition hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle>Treinos Prontos</CardTitle>
              <CardDescription>Treinos estruturados completos com checklist e PDF.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-emerald-100">
              Acesse os treinos do Iniciante, Intermediário e Avançado.
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
