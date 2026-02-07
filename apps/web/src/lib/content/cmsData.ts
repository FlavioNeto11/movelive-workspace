import type {
	Exercise,
	HomeContent,
	InstitutionalContent,
	MuscleGroup,
	OrientationSection,
	ReadyWorkout,
} from '@/lib/types';
import muscleGroupsJson from '@/content/muscle-groups.json';
import exercisesJson from '@/content/exercises.json';
import readyWorkoutsJson from '@/content/ready-workouts.json';
import orientacoesJson from '@/content/orientacoes.json';
import homeJson from '@/content/home.json';
import institutionalJson from '@/content/institutional.json';

type MuscleGroupsFile = { items: MuscleGroup[] };
type ExercisesFile = { items: Exercise[] };
type ReadyWorkoutsFile = { items: ReadyWorkout[] };
type OrientacoesFile = { sections: OrientationSection[] };
type HomeFile = HomeContent;
type InstitutionalFile = InstitutionalContent;

export const MUSCLE_GROUPS = (muscleGroupsJson as MuscleGroupsFile).items;
export const EXERCISES = (exercisesJson as ExercisesFile).items;
export const READY_WORKOUTS = (readyWorkoutsJson as ReadyWorkoutsFile).items;
export const ORIENTATIONS = (orientacoesJson as OrientacoesFile).sections;
export const HOME_CONTENT = homeJson as HomeFile;
export const INSTITUTIONAL_CONTENT = institutionalJson as InstitutionalFile;
