import { delay, put, takeLatest } from 'redux-saga/effects';
import { appLoadSuccess, appLoadRequest } from 'store/app/appAction';

function* bootstrap() {
  yield delay(1000);
  yield put(appLoadSuccess());
}

export default function* watcher() {
  yield takeLatest(appLoadRequest, bootstrap);
}
