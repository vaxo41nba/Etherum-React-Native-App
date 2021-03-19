import { createSelector } from 'reselect';

const getAuthState = state => state.auth;

export const getMnemonicPhrase = createSelector(
  getAuthState,
  user => user.mnemonic,
);

export const getPassword = createSelector(
  getAuthState,
  user => user.password,
);

export const getAuth = createSelector(getAuthState, user => user);

export const getAccountName = createSelector(getAuthState, user => user.name);

export const getAddress = createSelector(getAuthState, user => user.address);

export const getNonce = createSelector(getAuthState, user => user.nonce);

export const getSeed = createSelector(getAuthState, user => user.seed);

export const getWallet = createSelector(getAuthState, user => user.wallet);

export const getIsAuthenticated = createSelector(
  getAuthState,
  user => user.isAuthenticated,
);

export const getIsCreating = createSelector(
  getAuthState,
  user => user.isCreating,
);

export const getIsLogged = createSelector(
  getAuthState,
  user => user.isLoggedIn,
);
