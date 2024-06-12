import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Split } from '../../types/appState';
import { RootState } from '../store';

const splitsAdapter = createEntityAdapter<Split>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = splitsAdapter.getInitialState();

const splitsSlice = createSlice({
  name: 'splits',
  initialState,
  reducers: {
    addSplit: splitsAdapter.addOne,
    updateSplit: splitsAdapter.updateOne,
    removeSplit: splitsAdapter.removeOne,
    setAllSplits: splitsAdapter.setAll,
    upsertSplit: splitsAdapter.upsertOne,
    linkExerciseToSplit: (
      state,
      action: PayloadAction<{ id: number; excerciseId: number }>,
    ) => {
      const { id, excerciseId } = action.payload;
      const split = state.entities[id];
      if (split) {
        split.exerciseIds.push(excerciseId);
      }
    },
  },
});

export const { addSplit, updateSplit, removeSplit, setAllSplits, upsertSplit } =
  splitsSlice.actions;

export default splitsSlice.reducer;

export const splitsSelectors = splitsAdapter.getSelectors(
  (state: RootState) => state.splits,
);
