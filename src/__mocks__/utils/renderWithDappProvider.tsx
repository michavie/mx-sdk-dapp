import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { EnvironmentsEnum } from 'types';
import { DappProvider } from 'wrappers/DappProvider';

export const renderWithDappProvider = ({ children }: PropsWithChildren) =>
  render(
    <DappProvider environment={EnvironmentsEnum.devnet}>
      <>{children}</>
    </DappProvider>
  );
