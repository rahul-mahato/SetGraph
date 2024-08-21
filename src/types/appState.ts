import { current } from '@reduxjs/toolkit';

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
  description: string;
  exerciseIds: number[];
}

export interface Exercise {
  id: string | number;
  name: string;
  description: string;
  workouts: {
    [currentDate: string]: WorkoutSession;
  };
}

export interface Set {
  id: string | number;
  weight: number;
  repetitions: number;
}

export interface WorkoutSession {
  date: string; // unique date
  splitId: number;
  sets: Set[];
}
