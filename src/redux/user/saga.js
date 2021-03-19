import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import { actionTypes, addWallet, setActive } from './actions';
import {
  createAccount,
  getBalance,
  importWalletKey,
  importWalletTextJSON,
  sendEthereum,
  sendToken,
} from '../../utils/wallet';
import { getNonce } from '../auth/selectors';
import { getSelectedNetwork } from './selectors';
import { incrementNonce } from '../auth/actions';

function* addAccountSaga(action) {
  const nonce = yield select(getNonce);
  const newWallet = yield call(createAccount, action.payload, action.mnemonic);
  yield put(
    addWallet({
      ...newWallet,
      name: action.payload || `Account ${nonce}`,
      active: action.active,
      id: action.id,
    }),
  );
  yield put(incrementNonce());
}

function* getBalanceSaga(action) {
  const { account } = action;
  const network = yield select(getSelectedNetwork);
  const balance = yield call(getBalance, account.address, network.name);
  yield put(setActive(account.id, { ...account, balance }));
}

function* sendTransaction(action) {
  const {
    from, to, value, gasPrice,
  } = action;
  const network = yield select(getSelectedNetwork);
  yield call(sendEthereum, from, to, value, gasPrice, network.name);
  const balance = yield call(getBalance, from.address, network.name);
  yield put(setActive(from.id, { ...from, balance }));
}

function* sendTokenToRec(action) {
  const {
    from, to, value, gasPrice, network,
  } = action;
  yield call(sendToken, from, to, value, gasPrice, network.name);
}

function* importWallKey(action) {
  const { privKey, name, id } = action;
  const network = yield select(getSelectedNetwork);
  const getImportedWallet = yield call(importWalletKey, privKey);
  const balance = yield call(
    getBalance,
    getImportedWallet.address,
    network.name,
  );

  const importedWallet = {
    name,
    address: getImportedWallet.address,
    privKey,
    balance,
    id,
    wallet: getImportedWallet.wallet,
  };

  yield put(addWallet(importedWallet));
}

function* importWallTextJSON(action) {
  const {
    mnemonic, password, name, id,
  } = action;
  const network = yield select(getSelectedNetwork);
  const getImportedWallet = yield call(
    importWalletTextJSON,
    mnemonic,
    password,
  );
  const balance = yield call(
    getBalance,
    getImportedWallet.address,
    network.name,
  );

  const importedWallet = {
    name,
    address: getImportedWallet.address,
    privKey: getImportedWallet.privKey,
    balance,
    id,
    wallet: getImportedWallet.wallet,
  };

  yield put(addWallet(importedWallet));
}

export default function* () {
  yield takeLatest(actionTypes.ADD_ACCOUNT, addAccountSaga);
  yield takeLatest(actionTypes.GET_WALLET, getBalanceSaga);
  yield takeLatest(actionTypes.SEND_TRANSACTION, sendTransaction);
  yield takeLatest(actionTypes.SEND_TOKEN, sendTokenToRec);
  yield takeLatest(actionTypes.IMPORT_KEY, importWallKey);
  yield takeLatest(actionTypes.IMPORT_TEXTJSON, importWallTextJSON);
}
