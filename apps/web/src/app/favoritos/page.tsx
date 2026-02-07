'use client';

import * as React from 'react';
import Link from 'next/link';
import { Heart, ArrowLeft } from 'lucide-react';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useFavorites } from '@/hooks/useFavorites';
import { contentProvider } from '@/lib/content';
import type { Exercise } from '@/lib/types';

export default function FavoritesPage() {
  const { ids } = useFavorites();
  const [items, setItems] = React.useState<Exercise[]>([]);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      const ex: Exercise[] = [];
      for (const id of ids) {
        const found = await contentProvider.getExercise(id);
        if (found) ex.push(found);
      }
      if (mounted) setItems(ex);
    })();
    return () => {
      mounted = false;
    };
  }, [ids]);

  return (
    <div className="space-y-6">
      <Link href="/exercicios" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-50">
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>

      <SectionTitle title="Meus Favoritos" subtitle="Salve exercícios para achar rápido depois." />

      {ids.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-sm text-zinc-300">
            Você ainda não favoritou nenhum exercício. Abra um grupamento e toque em “Favoritar”.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e) => (
            <Link key={e.id} href={`/exercicios/${e.groupId}?q=${encodeURIComponent(e.name)}`}>
              <Card className="transition hover:-translate-y-0.5 hover:bg-zinc-950/80">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-base">{e.name}</CardTitle>
                    <Heart className="h-5 w-5 fill-emerald-400 text-emerald-400" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-zinc-300">
                  {e.groupId} • {e.equipment} • {e.level}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
