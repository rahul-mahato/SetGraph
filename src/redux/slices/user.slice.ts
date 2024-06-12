import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/appState';

const initialState: User = {
  id: '',
  name: 'John Doe',
  email: 'john@gmail.com',
  weight: 70,
  height: {
    feet: 5,
    inches: 10,
  },
  age: 25,
  streaks: {
    startDate: '2021-01-01',
    endDate: '2021-01-01',
    currentStreak: 0,
    longestStreak: 0,
    longestStreakStartDate: '2021-01-01',
    longestStreakEndDate: '2021-01-01',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateStreak(state, action) {
      state.streaks = {
        ...state.streaks,
        ...action.payload,
      };
    },
  },
});

export const { updateStreak, updateUser } = userSlice.actions;

export default userSlice.reducer;
