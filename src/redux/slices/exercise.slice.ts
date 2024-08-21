import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { Exercise } from '../../types/appState';
import { RootState } from '../store';
import { getCurrentFormattedDate } from '../../utils/utilityMethods';
import { v4 as uuidv4 } from 'uuid';
import { addNewExercise } from '../actions/exercises';

const exercisesAdapter = createEntityAdapter<Exercise>();
const initialState = exercisesAdapter.getInitialState();

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(
      addNewExercise,
      (
        state,
        action: PayloadAction<Pick<Exercise, 'name' | 'description'>>,
      ) => {
        const { name, description } = action.payload;
        exercisesAdapter.addOne(state, {
          id: state.ids.length + 1,
          name,
          description,
          workouts: {},
        });
      },
    );
  },
  reducers: {
    addExercises: exercisesAdapter.addMany,
    updateExercise: exercisesAdapter.updateOne,
    removeExercise: exercisesAdapter.removeOne,
    setAllExercises: exercisesAdapter.setAll,
    addSetToExercise: (
      state,
      action: PayloadAction<{
        exerciseId: number;
        weight: number;
        repetitions: number;
        splitId: number;
      }>,
    ) => {
      const { exerciseId, weight, repetitions, splitId } = action.payload;
      const currentDate = getCurrentFormattedDate();
      const exercise = exercisesAdapter
        .getSelectors()
        .selectById(state, exerciseId);
      if (exercise) {
        if (!exercise.workouts[currentDate]) {
          exercise.workouts[currentDate] = {
            date: currentDate,
            splitId,
            sets: [{ id: uuidv4(), weight, repetitions }],
          };
        } else {
          exercise.workouts[currentDate].sets.unshift({
            id: uuidv4(),
            weight,
            repetitions,
          });
        }
      }
    },
  },
});

export const exercisesAction = exercisesSlice.actions;

export default exercisesSlice.reducer;

export const exerciseSelectors = exercisesAdapter.getSelectors(
  (state: RootState) => state.exercises,
);
