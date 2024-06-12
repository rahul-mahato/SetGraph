import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import userReducer from './slices/user.slice';
import splitsReducer from './slices/splits.slice';
import exerciseReducer from './slices/exercise.slice';
import workoutReducer from './slices/workout.slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    splits: splitsReducer,
    exercises: exerciseReducer,
    workoutSessions: workoutReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export default store;
