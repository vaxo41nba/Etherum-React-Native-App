import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { AsyncStorage } from 'react-native';

import { composeWithDevTools } from 'redux-devtools-extension';

import './shim.js';

import { reducer } from './src/redux/rootReducer';
import mySaga from './src/redux/sagas';
import Navigator from './src/navigation';

import Snackbar from './src/components/Snackbar';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

const persistedStore = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Navigator />
        <Snackbar />
      </PersistGate>
    </Provider>
  );
}
