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
    addNewSplit: (
      state,
      action: PayloadAction<Pick<Split, 'name' | 'description'>>,
    ) => {
      const { name, description } = action.payload;
      splitsAdapter.addOne(state, {
        id: state.ids.length + 1,
        name,
        description,
        exerciseIds: [],
      });
    },
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

export const splitsAction = splitsSlice.actions;

export default splitsSlice.reducer;

export const splitsSelectors = splitsAdapter.getSelectors(
  (state: RootState) => state.splits,
);
