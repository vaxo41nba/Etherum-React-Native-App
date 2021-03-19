import { put, takeLatest, delay } from 'redux-saga/effects';

import { actionTypes, hideNotification } from './actions';

function* notificationsWorker() {
  yield delay(2000);
  yield put(hideNotification());
}

export default function* () {
  yield takeLatest(actionTypes.SHOW_NOTIFICATION, notificationsWorker);
}
