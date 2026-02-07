'use client';

import * as React from 'react';
import { Heart, Play } from 'lucide-react';
import type { Exercise } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { useFavorites } from '@/hooks/useFavorites';
import { VideoEmbed } from '@/components/VideoEmbed';

const SAFETY_WARNING = 'Treine com atenção, respeite seus limites e mantenha a postura correta.';

export function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const [open, setOpen] = React.useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(exercise.id);

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl">{exercise.name}</CardTitle>
            <CardDescription className="mt-1">{exercise.description}</CardDescription>
          </div>
          <button
            onClick={() => toggleFavorite(exercise.id)}
            className={cn(
              'rounded-2xl border border-zinc-800 p-2 transition hover:bg-zinc-900/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950',
              fav ? 'bg-emerald-500/15' : 'bg-zinc-950/40',
            )}
            aria-label={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Heart className={cn('h-5 w-5', fav ? 'fill-emerald-400 text-emerald-400' : 'text-zinc-200')} />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Badge>{exercise.level}</Badge>
          <Badge>{exercise.equipment}</Badge>
          {exercise.goals.map((g) => (
            <Badge key={g}>{g}</Badge>
          ))}
        </div>

        <p className="mt-3 text-xs text-zinc-400">{SAFETY_WARNING}</p>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="primary" onClick={() => setOpen((v) => !v)}>
            <Play className="mr-2 h-4 w-4" />
            {open ? 'Fechar vídeo' : 'Assistir vídeo'}
          </Button>
          <Button
            variant="secondary"
            onClick={() => toggleFavorite(exercise.id)}
            aria-label={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Heart className={cn('mr-2 h-4 w-4', fav ? 'fill-zinc-50 text-zinc-50' : '')} />
            {fav ? 'Favorito' : 'Favoritar'}
          </Button>
        </div>

        {open ? (
          <div className="mt-4">
            <VideoEmbed video={exercise.video} title={exercise.name} />
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
