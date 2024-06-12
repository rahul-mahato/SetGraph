export type Entity<T> = {
  [k in keyof T]: T[k];
};

export type User = Entity<{
  id: string;
  name: string;
  email: string;
  weight: number;
  height: Entity<{
    feet: number;
    inches: number;
  }>;
  age: number;
  streaks: {
    startDate: string;
    endDate?: string;
    currentStreak: number;
    longestStreak?: number;
    longestStreakStartDate?: string;
    longestStreakEndDate?: string;
  };
}>;

export interface Split {
  id: number;
  name: string;
  exerciseIds: number[];
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
}

export interface Set {
  id: number;
  weight: number;
  repetitions: number;
}

export interface WorkoutSession {
  id: number;
  splitId: number;
  date: string;
  exercises: {
    exerciseId: number;
    sets: Set[];
  }[];
}
