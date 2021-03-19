import { createSelector } from 'reselect';

const getUserState = state => state.user;

export const getIsUserHaveWallet = createSelector(
  getUserState,
  user => !!user.wallets.length,
);

export const getWallets = createSelector(getUserState, user => user.wallets);

export const getSelectedAccount = createSelector(
  getUserState,
  user => user.selectedAccount,
);

export const getSelectedNetwork = createSelector(
  getUserState,
  user => user.selectedNetwork,
);

export const getDestinationAccount = createSelector(
  getUserState,
  user => user.destinationAccount,
);

export const getForeignAddress = createSelector(
  getUserState,
  user => user.foreignAddress,
);

export const getTransactions = createSelector(
  getUserState,
  user => user.transactions,
);
