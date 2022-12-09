import React from 'react';
import { expect } from '@storybook/jest';
import { waitFor, fireEvent } from '@testing-library/react';
import { renderWithProvider } from '__mocks__/utils';
import { isLoggedInSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { ExtensionLoginButton } from '../';

jest.mock('@elrondnetwork/erdjs-extension-provider', () => {
  const { ExtensionProvider } = require('./mockExtensionProvider');
  return {
    __esModule: true,
    ExtensionProvider
  };
});

const CALLBACK_ROUTE = '/dashboard';

describe('ExtensionLoginButton tests', () => {
  it('should perform simple login', async () => {
    const methods = renderWithProvider({
      route: '/unlock',
      children: <ExtensionLoginButton callbackRoute={CALLBACK_ROUTE} />
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');

    fireEvent.click(loginButton);

    await waitFor(() => {
      const isLoggedIn = isLoggedInSelector(store.getState());
      expect(isLoggedIn).toBe(true);
    });

    await waitFor(() => {
      expect(window.location.assign).toHaveBeenCalledWith(CALLBACK_ROUTE);
    });
  });
});
