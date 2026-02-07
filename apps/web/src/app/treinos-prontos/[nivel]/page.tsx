import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download } from 'lucide-react';
import { contentProvider } from '@/lib/content';
import type { ReadyWorkoutLevel } from '@/lib/types';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ReadyWorkoutClient } from './ui';

const LABEL: Record<ReadyWorkoutLevel, string> = {
  iniciante: 'Treino do Iniciante',
  intermediario: 'Treino Intermediário',
  avancado: 'Treino Avançado',
};

export default async function ReadyWorkoutPage({ params }: { params: { nivel: ReadyWorkoutLevel } }) {
  const workout = await contentProvider.getReadyWorkout(params.nivel);
  if (!workout) return notFound();

  // Pré-carrega os exercícios do treino
  const exercises = await Promise.all(workout.items.map((i) => contentProvider.getExercise(i.exerciseId)));

  return (
    <div className="space-y-6">
      <Link href="/treinos-prontos" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-50">
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>

      <SectionTitle title={LABEL[workout.id]} subtitle={workout.objective} />

      <Link
        href={`/api/pdf/treino?nivel=${workout.id}`}
        className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
      >
        <Download className="h-4 w-4" /> Baixar treino em PDF
      </Link>

      <ReadyWorkoutClient workout={workout} exercises={exercises.filter(Boolean) as any} />
    </div>
  );
}
