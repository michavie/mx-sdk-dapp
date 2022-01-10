import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import account from './slices/accountInfoSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import networkConfig from './slices/networkConfigSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';

const transactionsPersistConfig = {
  key: 'transactions',
  version: 1,
  storage: sessionStorage
};

const transactionsReducer = persistReducer(
  transactionsPersistConfig,
  transactions
);

const rootReducer = combineReducers({
  account,
  networkConfig,
  loginInfo,
  transactionsInfo,
  transactions: transactionsReducer,
  modals
});

export default rootReducer;
