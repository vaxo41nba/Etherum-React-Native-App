import { actionTypes } from './actions';

const INITIAL_STATE = {
  mnemonic: null,
  seed: null,
  password: null,
  nonce: null,
  isAuthenticated: false,
  isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case actionTypes.INCREMENT_NONCE:
      return {
        ...state,
        nonce: state.nonce + 1,
      };
    case actionTypes.CLEAR_AUTH:
      return {
        ...state,
        mnemonic: null,
        seed: null,
        password: null,
        nonce: null,
        isAuthenticated: false,
      };
    case actionTypes.LOG_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
