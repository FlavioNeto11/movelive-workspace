import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { contentProvider } from '@/lib/content';
import type { MuscleGroupId } from '@/lib/types';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { GroupClient } from './ui';

export default async function GroupPage({ params }: { params: { grupo: MuscleGroupId } }) {
  const group = await contentProvider.getMuscleGroup(params.grupo);
  if (!group || group.id === 'orientacoes') return notFound();

  const equipments = await contentProvider.listEquipments(group.id);
  const exercises = await contentProvider.listExercises(group.id);

  return (
    <div className="space-y-6">
      <Link href="/exercicios" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-50">
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>

      <SectionTitle title={group.name} subtitle="Escolha um exercício e assista ao vídeo." />

      <Card className="border-zinc-900 bg-zinc-950/40">
        <CardContent className="p-5 text-sm text-zinc-300">
          Dica: use a busca e os filtros para encontrar o exercício ideal para o seu objetivo.
        </CardContent>
      </Card>

      <GroupClient groupId={group.id} equipments={equipments} initialExercises={exercises} />
    </div>
  );
}
