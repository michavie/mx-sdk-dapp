import React from 'react';
import { expect } from '@storybook/jest';
import { fireEvent } from '@storybook/testing-library';
import { render } from '@testing-library/react';
import { useGetLoginInfo } from 'hooks/account';
import { EnvironmentsEnum, LoginMethodsEnum } from 'types';
import { DappProvider } from 'wrappers/DappProvider';
import { ExtensionLoginButton } from '../';

jest.mock('../../helpers/getIsExtensionAvailable', () => {
  return {
    __esModule: true,
    getIsExtensionAvailable: () => true
  };
});

jest.mock('providers/utils', () => {
  return {
    __esModule: true,
    getProviderType: () => LoginMethodsEnum.none
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
    const check = await methods.findByTestId('checkIsLoggedIn');
    expect(check.textContent).toBe(1);
  });
});
