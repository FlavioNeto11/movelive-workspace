import type { ContentProvider, ExerciseFilters } from '@/lib/content/provider';
import type { Exercise, MuscleGroup, MuscleGroupId, ReadyWorkout, ReadyWorkoutLevel } from '@/lib/types';
import { EXERCISES, MUSCLE_GROUPS, READY_WORKOUTS } from '@/lib/content/sampleData';

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

export class InMemoryProvider implements ContentProvider {
  async getMuscleGroups(): Promise<MuscleGroup[]> {
    return [...MUSCLE_GROUPS].sort((a, b) => a.order - b.order);
  }

  async getMuscleGroup(id: MuscleGroupId): Promise<MuscleGroup | null> {
    return MUSCLE_GROUPS.find((g) => g.id === id) ?? null;
  }

  async listExercises(groupId: MuscleGroupId, filters: ExerciseFilters = {}): Promise<Exercise[]> {
    const base = EXERCISES.filter((e) => e.groupId === groupId);

    const q = filters.q?.trim();
    const nq = q ? normalize(q) : null;

    return base
      .filter((e) => {
        if (nq) {
          const hay = normalize(`${e.name} ${e.description} ${e.equipment} ${e.goals.join(' ')}`);
          if (!hay.includes(nq)) return false;
        }
        if (filters.level && e.level !== filters.level) return false;
        if (filters.equipment && e.equipment !== filters.equipment) return false;
        if (filters.goal && !e.goals.includes(filters.goal)) return false;
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }

  async getExercise(id: string): Promise<Exercise | null> {
    return EXERCISES.find((e) => e.id === id) ?? null;
  }

  async getReadyWorkout(level: ReadyWorkoutLevel): Promise<ReadyWorkout | null> {
    return READY_WORKOUTS.find((w) => w.id === level) ?? null;
  }

  async listReadyWorkouts(): Promise<ReadyWorkout[]> {
    return [...READY_WORKOUTS];
  }

  async listEquipments(groupId?: MuscleGroupId): Promise<string[]> {
    const list = groupId ? EXERCISES.filter((e) => e.groupId === groupId) : EXERCISES;
    return Array.from(new Set(list.map((e) => e.equipment))).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }
}
