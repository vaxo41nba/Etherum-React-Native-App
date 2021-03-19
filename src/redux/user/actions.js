export const actionTypes = {
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  ADD_WALLET: 'ADD_WALLET',
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
  SET_ACTIVE: 'SET_ACTIVE',
  GET_WALLET: 'GET_WALLET',
  SET_NETWORK: 'SET_NETWORK',
  SET_DESTINATION: 'SET_DESTINATION',
  SEND_TRANSACTION: 'SEND_TRANSACTION',
  SEND_TOKEN: 'SEND_TOKEN',
  IMPORT_KEY: 'IMPORT_KEY',
  IMPORT_TEXTJSON: 'IMPORT_TEXTJSON',
  SET_FOREIGN: 'SET_FOREING',
  TRANSACTION_HISTORY: 'TRANSACTION_HISTORY',
};

export const addAccount = (payload, mnemonic, active, id) => ({
  type: actionTypes.ADD_ACCOUNT,
  payload,
  mnemonic,
  active,
  id,
});

export const getWalletBalance = (account, network) => ({
  type: actionTypes.GET_WALLET,
  account,
  network,
});

export const addWallet = payload => ({
  type: actionTypes.ADD_WALLET,
  payload,
});

export const setNetwork = network => ({
  type: actionTypes.SET_NETWORK,
  network,
});

export const createNewAcc = payload => ({
  type: actionTypes.CREATE_ACCOUNT,
  payload,
});

export const setActive = (id, payload) => ({
  type: actionTypes.SET_ACTIVE,
  id,
  payload,
});

export const setDestination = payload => ({
  type: actionTypes.SET_DESTINATION,
  payload,
});

export const sendTransaction = (from, to, value, gasPrice, network) => ({
  type: actionTypes.SEND_TRANSACTION,
  from,
  to,
  value,
  gasPrice,
  network,
});

export const sendToken = (from, to, value, gasPrice, network) => ({
  type: actionTypes.SEND_TOKEN,
  from,
  to,
  value,
  gasPrice,
  network,
});

export const importKey = (privKey, name, id) => ({
  type: actionTypes.IMPORT_KEY,
  privKey,
  name,
  id,
});

export const importTextJSON = (mnemonic, password, name, id) => ({
  type: actionTypes.IMPORT_TEXTJSON,
  mnemonic,
  password,
  name,
  id,
});

export const setForeignAddres = payload => ({
  type: actionTypes.SET_FOREIGN,
  payload,
});

export const countTransaction = payload => ({
  type: actionTypes.TRANSACTION_HISTORY,
  payload,
});
