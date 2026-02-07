import type { Exercise, Goal, Level, MuscleGroup, MuscleGroupId, ReadyWorkout, ReadyWorkoutLevel } from '@/lib/types';

export type ExerciseFilters = {
  q?: string;
  level?: Level;
  equipment?: string;
  goal?: Goal;
};

export interface ContentProvider {
  getMuscleGroups(): Promise<MuscleGroup[]>;
  getMuscleGroup(id: MuscleGroupId): Promise<MuscleGroup | null>;
  listExercises(groupId: MuscleGroupId, filters?: ExerciseFilters): Promise<Exercise[]>;
  getExercise(id: string): Promise<Exercise | null>;
  getReadyWorkout(level: ReadyWorkoutLevel): Promise<ReadyWorkout | null>;
  listReadyWorkouts(): Promise<ReadyWorkout[]>;
  listEquipments(groupId?: MuscleGroupId): Promise<string[]>;
}
