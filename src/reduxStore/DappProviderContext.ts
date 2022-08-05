import React from 'react';
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
  ReactReduxContextValue
} from 'react-redux';
import { getStore, getSubscription } from './store';

const defaultContextValue: ReactReduxContextValue = {
  store: getStore(),
  subscription: getSubscription()
};

let DappCoreContext: React.Context<ReactReduxContextValue> | null;

export const getDappCoreContext = () => {
  if (DappCoreContext) {
    return DappCoreContext;
  }

  DappCoreContext = React.createContext(defaultContextValue);

  return DappCoreContext;
};

export const useStore = createStoreHook(getDappCoreContext());
export const useDispatch = createDispatchHook(getDappCoreContext());
export const useSelector = createSelectorHook(getDappCoreContext());
