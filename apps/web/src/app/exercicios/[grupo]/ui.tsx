'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import type { Exercise, MuscleGroupId } from '@/lib/types';
import { daySeed, pickDeterministic } from '@/lib/utils';
import { FilterBar, type FilterState } from '@/components/FilterBar';
import { ExerciseCard } from '@/components/ExerciseCard';

function parseState(sp: URLSearchParams): FilterState {
  return {
    q: sp.get('q') ?? '',
    level: (sp.get('level') as any) ?? '',
    equipment: sp.get('equipment') ?? '',
    goal: (sp.get('goal') as any) ?? '',
  };
}

function applyFilters(exercises: Exercise[], state: FilterState) {
  const q = state.q.trim().toLowerCase();
  return exercises.filter((e) => {
    if (q) {
      const hay = `${e.name} ${e.description} ${e.equipment} ${e.goals.join(' ')}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (state.level && e.level !== state.level) return false;
    if (state.equipment && e.equipment !== state.equipment) return false;
    if (state.goal && !e.goals.includes(state.goal)) return false;
    return true;
  });
}

export function GroupClient({
  groupId,
  equipments,
  initialExercises,
}: {
  groupId: MuscleGroupId;
  equipments: string[];
  initialExercises: Exercise[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = React.useState<FilterState>(() => parseState(new URLSearchParams(searchParams)));

  React.useEffect(() => {
    setState(parseState(new URLSearchParams(searchParams)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString()]);

  const filtered = React.useMemo(() => applyFilters(initialExercises, state), [initialExercises, state]);

  const suggestions = React.useMemo(() => {
    const seed = daySeed(new Date());
    return pickDeterministic(initialExercises, 6, seed ^ groupId.length).slice(0, 6);
  }, [initialExercises, groupId]);

  function update(next: FilterState) {
    setState(next);
    const sp = new URLSearchParams();
    if (next.q) sp.set('q', next.q);
    if (next.level) sp.set('level', next.level);
    if (next.equipment) sp.set('equipment', next.equipment);
    if (next.goal) sp.set('goal', next.goal);
    const q = sp.toString();
    router.replace(q ? `?${q}` : '?');
  }

  return (
    <div className="space-y-8">
      <FilterBar state={state} onChange={update} equipments={equipments} />

      <div>
        <SectionTitle
          title="Treino sugerido do dia"
          subtitle="4–6 exercícios recomendados automaticamente."
          className="mb-4"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.slice(0, 6).map((e) => (
            <Card key={e.id} className="border-zinc-900 bg-zinc-950/40">
              <CardHeader>
                <CardTitle className="text-base">{e.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-zinc-300">
                {e.equipment} • {e.level}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle
          title="Exercícios"
          subtitle={`${filtered.length} resultado(s) com os filtros atuais.`}
          className="mb-4"
        />
        <div className="grid gap-4">
          {filtered.length ? (
            filtered.map((e) => <ExerciseCard key={e.id} exercise={e} />)
          ) : (
            <Card>
              <CardContent className="p-6 text-sm text-zinc-300">Nenhum exercício encontrado.</CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
