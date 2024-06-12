import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Exercise } from '../../types/appState';
import { RootState } from '../store';

const exercisesAdapter = createEntityAdapter<Exercise>();

const initialState = exercisesAdapter.getInitialState();

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: initialState,
  reducers: {
    addExercise: exercisesAdapter.addOne,
    addExercises: exercisesAdapter.addMany,
    updateExercise: exercisesAdapter.updateOne,
    removeExercise: exercisesAdapter.removeOne,
    setAllExercises: exercisesAdapter.setAll,
  },
});

export const {
  addExercise,
  addExercises,
  updateExercise,
  removeExercise,
  setAllExercises,
} = exercisesSlice.actions;

export default exercisesSlice.reducer;

export const {
  selectAll: selectAllExercises,
  selectById: selectExerciseById,
  selectIds: selectExerciseIds,
} = exercisesAdapter.getSelectors((state: RootState) => state.exercises);
