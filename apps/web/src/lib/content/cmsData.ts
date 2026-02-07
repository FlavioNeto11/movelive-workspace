import type { Exercise, MuscleGroup, OrientationSection, ReadyWorkout } from '@/lib/types';
import muscleGroupsJson from '@/content/muscle-groups.json';
import exercisesJson from '@/content/exercises.json';
import readyWorkoutsJson from '@/content/ready-workouts.json';
import orientacoesJson from '@/content/orientacoes.json';

type MuscleGroupsFile = { items: MuscleGroup[] };
type ExercisesFile = { items: Exercise[] };
type ReadyWorkoutsFile = { items: ReadyWorkout[] };
type OrientacoesFile = { sections: OrientationSection[] };

export const MUSCLE_GROUPS = (muscleGroupsJson as MuscleGroupsFile).items;
export const EXERCISES = (exercisesJson as ExercisesFile).items;
export const READY_WORKOUTS = (readyWorkoutsJson as ReadyWorkoutsFile).items;
export const ORIENTATIONS = (orientacoesJson as OrientacoesFile).sections;
