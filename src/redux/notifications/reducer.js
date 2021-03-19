import { actionTypes } from './actions';

const INITIAL_STATE = {
  message: '',
  isError: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload.message,
        isError: action.payload.isError,
      };
    case actionTypes.HIDE_NOTIFICATION:
      return {
        ...state,
        message: '',
        isError: false,
      };
    default:
      return state;
  }
};
