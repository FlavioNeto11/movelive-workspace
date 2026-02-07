import type { ContentProvider, ExerciseFilters } from '@/lib/content/provider';
import type {
  Exercise,
  MuscleGroup,
  MuscleGroupId,
  OrientationSection,
  ReadyWorkout,
  ReadyWorkoutLevel,
} from '@/lib/types';
import { EXERCISES, MUSCLE_GROUPS, READY_WORKOUTS } from '@/lib/content/sampleData';

const ORIENTATIONS: OrientationSection[] = [
  {
    title: 'Aquecimento',
    bullets: [
      '5–10 minutos de movimento leve',
      'Aqueça articulações (ombros, quadril, joelhos)',
      'Comece com pouca carga',
    ],
  },
  {
    title: 'Postura correta',
    bullets: ['Coluna neutra', 'Controle do movimento', 'Evite “roubar” com impulso'],
  },
  {
    title: 'Respiração',
    bullets: ['Inspire na fase fácil', 'Expire na fase de esforço', 'Evite prender a respiração por muito tempo'],
  },
  {
    title: 'Progressão de carga',
    bullets: ['Aumente aos poucos', 'Priorize técnica antes de peso', 'Registre sua evolução'],
  },
  {
    title: 'Frequência semanal',
    bullets: ['Iniciante: 2–3x semana', 'Intermediário: 3–4x', 'Avançado: 4–6x (com planejamento)'],
  },
  {
    title: 'Erros comuns',
    bullets: ['Exagerar na carga', 'Fazer rápido demais', 'Ignorar descanso', 'Postura errada'],
  },
  {
    title: 'Como evitar lesões',
    bullets: ['Aqueça', 'Progrida lentamente', 'Use amplitude confortável', 'Pare se sentir dor aguda'],
  },
  {
    title: 'Como organizar o treino (iniciante / intermediário / avançado)',
    bullets: [
      'Iniciante: exercícios básicos + técnica + consistência',
      'Intermediário: mais volume e variação',
      'Avançado: periodização e foco em objetivos',
    ],
  },
];

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

  async getOrientations(): Promise<OrientationSection[]> {
    return [...ORIENTATIONS];
  }
}
