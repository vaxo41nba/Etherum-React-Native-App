import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import notifications from './notifications/reducer';
import collectibles from './collectibles/reducer';

const reducers = {
  auth,
  user,
  notifications,
  collectibles,
};

export const reducer = combineReducers(reducers);
