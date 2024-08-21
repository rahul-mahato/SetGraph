import { createAction } from '@reduxjs/toolkit';

export const addNewExercise = createAction<{
  name: string;
  description: string;
  splitId: number;
}>('exercises/addNewExercise');
