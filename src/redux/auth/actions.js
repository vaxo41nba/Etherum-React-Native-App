export const actionTypes = {
  SET_USER: 'SET_USER',
  INCREMENT_NONCE: 'INCREMENT_NONCE',
  CREATE_PASSWORD: 'CREATE_PASSWORD',
  CLEAR_AUTH: 'CLEAR_AUTH',
  LOG_IN: 'LOG_IN',
};

export const setUser = payload => ({
  type: actionTypes.SET_USER,
  payload,
});

export const incrementNonce = payload => ({
  type: actionTypes.INCREMENT_NONCE,
  payload,
});

export const createPassword = payload => ({
  type: actionTypes.CREATE_PASSWORD,
  payload,
});

export const clearAuth = () => ({
  type: actionTypes.CLEAR_AUTH,
});

export const SetLogin = payload => ({
  type: actionTypes.LOG_IN,
  payload,
});
