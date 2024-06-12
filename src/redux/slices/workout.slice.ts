import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { WorkoutSession, Set } from '../../types/appState';
import { RootState } from '../store';

const workoutSessionsAdapter = createEntityAdapter<WorkoutSession>();

const initialWorkoutSessionsState = workoutSessionsAdapter.getInitialState();

// Workout sessions slice
const workoutSessionsSlice = createSlice({
  name: 'workoutSessions',
  initialState: initialWorkoutSessionsState,
  reducers: {
    addWorkoutSession: workoutSessionsAdapter.addOne,
    addWorkoutSessions: workoutSessionsAdapter.addMany,
    updateWorkoutSession: workoutSessionsAdapter.updateOne,
    removeWorkoutSession: workoutSessionsAdapter.removeOne,
    setAllWorkoutSessions: workoutSessionsAdapter.setAll,
    addExerciseToWorkoutSession: (
      state,
      action: PayloadAction<{ id: number; exerciseId: number }>,
    ) => {
      const { id, exerciseId } = action.payload;
      const workoutSession = state.entities[id];
      if (workoutSession) {
        workoutSession.exercises.push({ exerciseId, sets: [] });
      }
    },
    addSetToExerciseInWorkout: (
      state,
      action: PayloadAction<{
        workoutId: number;
        exerciseId: number;
        set: Set;
      }>,
    ) => {
      const { workoutId, exerciseId, set } = action.payload;
      const session = state.entities[workoutId];
      if (session) {
        const exercise = session.exercises.find(
          ex => ex.exerciseId === exerciseId,
        );
        if (exercise) {
          exercise.sets.push(set);
        }
      }
    },
  },
});

export default workoutSessionsSlice.reducer;

export const {
  addWorkoutSession,
  addWorkoutSessions,
  updateWorkoutSession,
  removeWorkoutSession,
  setAllWorkoutSessions,
  addExerciseToWorkoutSession,
  addSetToExerciseInWorkout,
} = workoutSessionsSlice.actions;

export const {
  selectAll: selectAllWorkoutSessions,
  selectById: selectWorkoutSessionById,
  selectIds: selectWorkoutSessionIds,
} = workoutSessionsAdapter.getSelectors(
  (state: RootState) => state.workoutSessions,
);
