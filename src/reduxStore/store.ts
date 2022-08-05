import { configureStore } from '@reduxjs/toolkit';
import { createSubscription } from 'react-redux/es/utils/Subscription';

import { setAccount, setAccountNonce } from 'reduxStore/slices';
import { loginSessionMiddleware } from './middlewares/loginSessionMiddleware';
import {
  persistIgnoredActions,
  persistStore,
  reducers
} from './webPersistConfig';
import rootReducer from './reducers';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const getStoreConfig = () => ({
  reducer: reducers,
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
  if (store) {
    return store;
  }

  store = configureStore(getStoreConfig());

  return store;
};

export const getSubscription = () => createSubscription(getStore());

export const getPersistor = () => persistStore(getStore());

const storeType = configureStore({ reducer: rootReducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof storeType;
export type RootState = ReturnType<ReturnType<typeof storeType.getState>>;
