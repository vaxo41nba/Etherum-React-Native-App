import { actionTypes } from './actions';

const INITIAL_STATE = {
  wallets: [],
  transactions: [],
  foreignAddress: null,
  selectedAccount: null,
  destinationAccount: null,
};

export default (state = INITIAL_STATE, action) => {
  const { wallets } = state;
  const editItem = wallets.map(item => (item.id !== action.id
    ? { ...item, active: false }
    : { ...item, active: true }));
  switch (action.type) {
    case actionTypes.ADD_WALLET:
      return {
        ...state,
        wallets: [...state.wallets, action.payload],
      };
    case actionTypes.CREATE_ACCOUNT:
      return {
        ...state,
        wallets: [...state.wallets, action.payload],
      };
    case actionTypes.SET_ACTIVE:
      return {
        ...state,
        wallets: editItem,
        selectedAccount: action.payload,
      };
    case actionTypes.SET_NETWORK:
      return {
        ...state,
        selectedNetwork: action.network,
      };
    case actionTypes.SET_DESTINATION:
      return {
        ...state,
        destinationAccount: action.payload,
      };
    case actionTypes.SET_FOREIGN:
      return {
        ...state,
        foreignAddress: action.payload,
      };
    case actionTypes.TRANSACTION_HISTORY:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
