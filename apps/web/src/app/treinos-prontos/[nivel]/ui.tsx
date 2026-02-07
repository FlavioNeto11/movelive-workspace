'use client';

import * as React from 'react';
import type { Exercise, ReadyWorkout } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { VideoEmbed } from '@/components/VideoEmbed';

function formatRest(sec: number) {
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m${s ? ` ${s}s` : ''}`;
}

export function ReadyWorkoutClient({ workout, exercises }: { workout: ReadyWorkout; exercises: Exercise[] }) {
  const map = React.useMemo(() => new Map(exercises.map((e) => [e.id, e])), [exercises]);
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});

  const total = workout.items.length;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <Card className="border-emerald-500/30 bg-emerald-500/10">
        <CardContent className="p-5 text-sm text-emerald-100">
          Checklist do treino: <strong>{done}</strong> de <strong>{total}</strong> concluídos.
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {workout.items.map((item, idx) => {
          const ex = map.get(item.exerciseId);
          if (!ex) return null;

          const key = `${workout.id}:${ex.id}`;
          const isOn = !!checked[key];

          return (
            <Card key={key} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">
                      {idx + 1}. {ex.name}
                    </CardTitle>
                    <div className="mt-1 text-sm text-zinc-300">
                      {item.sets} séries • {item.reps} reps • descanso {formatRest(item.restSeconds)}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">{ex.equipment} • {ex.level}</div>
                  </div>

                  <label className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={isOn}
                      onChange={(e) => setChecked((p) => ({ ...p, [key]: e.target.checked }))}
                    />
                    Concluído
                  </label>
                </div>
              </CardHeader>

              <CardContent>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-4 text-sm text-zinc-300">
                  Treine com atenção, respeite seus limites e mantenha a postura correta.
                </div>

                <div className="mt-4">
                  <VideoEmbed video={ex.video} title={ex.name} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
