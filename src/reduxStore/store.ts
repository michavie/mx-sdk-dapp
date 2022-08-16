import { configureStore } from '@reduxjs/toolkit';
import { createSubscription } from 'react-redux/es/utils/Subscription';

import { setAccount, setAccountNonce } from 'reduxStore/slices';
import { loginSessionMiddleware } from './middlewares/loginSessionMiddleware';
import {
  getReducers,
  persistIgnoredActions,
  persistStore
} from './webPersistConfig';
import rootReducer from './reducers';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const getStoreConfig = () => ({
  reducer: getReducers(),
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<any>) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          ...persistIgnoredActions,
          setAccountNonce.type,
          setAccount.type
        ],
        ignoredPaths: [
          'payload.nonce',
          'account.account.nonce',
          'providers.accountProvider'
        ]
      }
    }).concat(loginSessionMiddleware)
});

// This store is used just to infer the real store type
const fakeStore = configureStore(getStoreConfig());

let store: typeof fakeStore | null = null;

export const getStore = () => {
  console.log('getStore');

  if (store) {
    console.log('store from cache');
    return store;
  }

  console.log('creating new store');
  store = configureStore(getStoreConfig());

  return store;
};

export const getSubscription = () => createSubscription(getStore());

export const persistor = persistStore(getStore());

export const resetStore = async () => {
  console.log('resetStore');

  await persistor.purge();
  // const { reducers } = require('./webPersistConfig');

  // console.log(reducers);

  // store?.replaceReducer(reducers);
  store = null;

  await persistor.flush();

  console.log('Flush persitor');
};

export const reInitializeStore = () => {
  const { reducers } = require('./webPersistConfig');

  console.log(reducers);

  store?.replaceReducer(reducers);

  // store = configureStore(getStoreConfig());

  return store;
};

const storeType = configureStore({ reducer: rootReducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof storeType;
export type RootState = ReturnType<ReturnType<typeof storeType.getState>>;
