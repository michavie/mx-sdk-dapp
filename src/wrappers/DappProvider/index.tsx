import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ProviderInitializer } from 'components/ProviderInitializer';

import { getDappCoreContext } from 'reduxStore/DappProviderContext';
import { getPersistor, getStore } from 'reduxStore/store';
import { CustomNetworkType, EnvironmentsEnum, IDappProvider } from 'types';
import { AppInitializer } from 'wrappers/AppInitializer';

import { CustomComponents, CustomComponentsType } from './CustomComponents';
import { setExternalProvider } from 'providers/accountProvider';
import { Storage } from 'redux-persist/es/types';
import {
  setPersistorLocalStorage,
  setPersistorSessionStorage
} from '../../reduxStore/storage';

export interface DappProviderPropsType {
  children: React.ReactChildren | React.ReactElement;
  customNetworkConfig?: CustomNetworkType;
  externalProvider?: IDappProvider;
  //we need the strings for autocomplete suggestions
  environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
  customComponents?: CustomComponentsType;
  persistorLocalStorage?: Storage;
  persistorSessionStorage?: Storage;
}

export const DappProvider = ({
  children,
  customNetworkConfig = {},
  externalProvider,
  environment,
  customComponents,
  persistorLocalStorage,
  persistorSessionStorage
}: DappProviderPropsType) => {
  if (persistorLocalStorage) {
    setPersistorLocalStorage(persistorLocalStorage);
  }
  if (persistorSessionStorage) {
    setPersistorSessionStorage(persistorSessionStorage);
  }

  const context = getDappCoreContext();
  if (!context) {
    throw new Error('Missing DappCoreContext');
  }

  if (!environment) {
    //throw if the user tries to initialize the app without a valid environment
    throw new Error('missing environment flag');
  }

  if (externalProvider != null) {
    setExternalProvider(externalProvider);
  }

  return (
    <Provider context={context} store={getStore()}>
      <PersistGate persistor={getPersistor()} loading={null}>
        <AppInitializer
          environment={environment as EnvironmentsEnum}
          customNetworkConfig={customNetworkConfig}
        >
          <ProviderInitializer />
          <CustomComponents customComponents={customComponents} />
          {children}
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
};
