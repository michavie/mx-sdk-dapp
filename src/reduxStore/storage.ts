import reduxPersistLocalStorage from 'redux-persist/lib/storage';
import reduxPersistSessionStorage from 'redux-persist/lib/storage/session';
import { Storage } from 'redux-persist';

let persistorLocalStorage: Storage = reduxPersistLocalStorage;
let persistorSessionStorage: Storage = reduxPersistSessionStorage;

export const getPersistorLocalStorage = () => persistorLocalStorage;
export const getPersistorSessionStorage = () => persistorSessionStorage;
export const setPersistorLocalStorage = (storage: Storage) => {
  persistorLocalStorage = storage;
};
export const setPersistorSessionStorage = (storage: Storage) => {
  persistorSessionStorage = storage;
};
