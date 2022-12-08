import React from 'react';
import { expect } from '@storybook/jest';
import { fireEvent } from '@storybook/testing-library';
import { render, waitFor } from '@testing-library/react';
import { useGetLoginInfo } from 'hooks/account';
import { EnvironmentsEnum } from 'types';
import { DappProvider } from 'wrappers/DappProvider';
import { ExtensionLoginButton } from '../';

jest.mock('../../helpers/getIsExtensionAvailable', () => {
  return {
    __esModule: true,
    getIsExtensionAvailable: () => true
  };
});

jest.mock('@elrondnetwork/erdjs-extension-provider', () => {
  const { ExtensionProvider } = require('./mockExtensionProvider');
  return {
    __esModule: true,
    ExtensionProvider
  };
});

const CheckLogin = () => {
  const { isLoggedIn } = useGetLoginInfo();
  return <span data-testid='checkIsLoggedIn'>{String(isLoggedIn)}</span>;
};

describe('ExtensionLoginButton tests', () => {
  it('should display short time', async () => {
    const methods = render(
      <DappProvider environment={EnvironmentsEnum.devnet}>
        <>
          <ExtensionLoginButton />
          <CheckLogin />
        </>
      </DappProvider>
    );

    const button = await methods.findByTestId('extensionLoginButton');

    expect(button.textContent).toBe('Maiar DeFi Wallet');

    fireEvent.click(button);

    await waitFor(() => {
      const isLoggedin = methods.getByTestId('checkIsLoggedIn');
      expect(isLoggedin.textContent).toBe('true');
    });
  });
});
