import { all } from 'redux-saga/effects';

import userSagas from './user/saga';
import authSagas from './auth/saga';
import notificationsSagas from './notifications/saga';
import collectiblesSagas from './collectibles/saga';

export default function* rootSaga() {
  yield all([
    userSagas(),
    authSagas(),
    notificationsSagas(),
    collectiblesSagas(),
  ]);
}
