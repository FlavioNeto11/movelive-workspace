import type { Exercise, MuscleGroup, ReadyWorkout } from '@/lib/types';
import muscleGroupsJson from '@/content/muscle-groups.json';
import exercisesJson from '@/content/exercises.json';
import readyWorkoutsJson from '@/content/ready-workouts.json';

type MuscleGroupsFile = { items: MuscleGroup[] };
type ExercisesFile = { items: Exercise[] };
type ReadyWorkoutsFile = { items: ReadyWorkout[] };

export const MUSCLE_GROUPS = (muscleGroupsJson as MuscleGroupsFile).items;
export const EXERCISES = (exercisesJson as ExercisesFile).items;
export const READY_WORKOUTS = (readyWorkoutsJson as ReadyWorkoutsFile).items;
