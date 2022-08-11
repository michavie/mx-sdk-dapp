import reduxPersistLocalStorage from 'redux-persist/lib/storage';
import reduxPersistSessionStorage from 'redux-persist/lib/storage/session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Storage } from 'redux-persist';

const isMobileDevice = true;
// platform?.os?.family === 'iOS' || platform?.os?.family === 'Android';

console.log('isMobileDevice = ', isMobileDevice);

let persistorLocalStorage: Storage = reduxPersistLocalStorage;
let persistorSessionStorage: Storage = reduxPersistSessionStorage;

export const getPersistorLocalStorage = () =>
  isMobileDevice ? AsyncStorage : persistorLocalStorage;

export const getPersistorSessionStorage = () =>
  isMobileDevice ? AsyncStorage : persistorSessionStorage;

export const setPersistorLocalStorage = (storage: Storage) => {
  persistorLocalStorage = storage;
};

export const setPersistorSessionStorage = (storage: Storage) => {
  persistorSessionStorage = storage;
};
