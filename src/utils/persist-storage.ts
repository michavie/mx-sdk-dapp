import { Storage } from 'redux-persist';
import {
  setPersistorLocalStorage,
  setPersistorSessionStorage
} from 'reduxStore/storage';
import { resetStore } from '../reduxStore/store';

export const setLocalStorage = (storage: Storage) => {
  setPersistorLocalStorage(storage);
};

export const setSessionStorage = (storage: Storage) => {
  setPersistorSessionStorage(storage);
};

export const forceStoreReload = async () => {
  await resetStore();
};
