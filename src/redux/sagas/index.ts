import { AllEffect, ForkEffect } from 'redux-saga/effects';

function* rootSaga(): Generator<AllEffect<ForkEffect<unknown>>, void, unknown> {
  // Here you would fork all your other sagas, e.g.:
  // yield all([
  //   fork(someSaga),
  //   fork(anotherSaga),
  // ]);
}

export default rootSaga;
