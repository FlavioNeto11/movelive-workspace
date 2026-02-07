export type Level = 'Iniciante' | 'Intermediário' | 'Avançado';

export type MuscleGroupId =
  | 'pernas'
  | 'peito'
  | 'biceps'
  | 'triceps'
  | 'dorsais'
  | 'ombros'
  | 'alongamento'
  | 'orientacoes';

export type Goal = 'Força' | 'Hipertrofia' | 'Resistência' | 'Mobilidade';

export type MuscleGroup = {
  id: MuscleGroupId;
  name: string;
  description: string;
  icon: string; // nome do ícone do lucide-react (referencial)
  order: number;
};

export type VideoRef = {
  provider: 'youtube' | 'vimeo' | 'url';
  /** YouTube: videoId, Vimeo: videoId, URL: url */
  videoId?: string;
  url?: string;
};

export type Exercise = {
  id: string;
  groupId: MuscleGroupId;
  name: string;
  description: string;
  equipment: string;
  level: Level;
  goals: Goal[];
  video?: VideoRef;
  tips?: string[];
};

export type ReadyWorkoutLevel = 'iniciante' | 'intermediario' | 'avancado';

export type ReadyWorkoutItem = {
  exerciseId: string;
  sets: number;
  reps: string; // ex: "12" ou "10-12"
  restSeconds: number;
};

export type ReadyWorkout = {
  id: ReadyWorkoutLevel;
  name: string;
  objective: string;
  items: ReadyWorkoutItem[];
};

export type OrientationSection = {
  title: string;
  bullets: string[];
};

export type HomeContent = {
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroLead: string;
  heroDescription: string;
  heroCards: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  objectiveText: string;
  howItWorksText: string;
  whyTitle: string;
  whyDescription: string;
  impactTitle: string;
  impactSubtitle: string;
  impactPhrase: string;
  valuePillars: string[];
};

export type InstitutionalContent = {
  footerDescription: string;
  contactSubtitle: string;
  contactOfferings: string[];
};
