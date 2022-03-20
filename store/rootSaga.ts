import { all, fork } from '@redux-saga/core/effects';
import appSaga from 'store/app/appSaga';

export default function* rootSaga() {
  yield all([fork(appSaga)]);
}
