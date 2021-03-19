import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';

import { actionTypes, setUser } from './actions';
import { createMnemonicFromPassword, createAccount } from '../../utils/wallet';

function* addAccountSaga(action) {
  yield delay(1000);

  const mnemonic = yield call(createMnemonicFromPassword, action.payload);
  const createDefaultWallet = yield call(
    createAccount,
    action.payload,
    mnemonic,
  );

  const newUser = {
    name: 'Account 1',
    password: action.payload,
    nonce: 0,
    id: 0,
    address: createDefaultWallet.address,
    privKey: createDefaultWallet.privKey,
    mnemonic,
  };

  yield put(setUser(newUser));
}

export default function* () {
  yield takeLatest(actionTypes.CREATE_PASSWORD, addAccountSaga);
}
