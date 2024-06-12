import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const getUserState = (state: RootState) => state.user;
const getUserInfo = createSelector(getUserState, user => ({
  name: user.name,
  email: user.email,
  weight: user.weight,
  height: user.height,
  age: user.age,
}));

const getUserStreaks = createSelector(getUserState, user => user.streaks);

const UserSelector = {
  getUserInfo,
  getUserStreaks,
};

export default UserSelector;
