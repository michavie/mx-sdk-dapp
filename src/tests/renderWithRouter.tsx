import React from 'react';
import { render } from '@testing-library/react';

import { createMemoryHistory, History } from 'history';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes } from 'react-router-dom';
import { DappCoreContext } from 'reduxStore/DappProviderContext';
import { store } from 'reduxStore/store';

export const renderWithHistory = ({
  route = '/',
  history = createMemoryHistory({ initialEntries: ['/'] })
}: {
  route: string;
  history?: History;
}) => {
  history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <ReduxProvider context={DappCoreContext} store={store}>
        <Routes>{children}</Routes>
      </ReduxProvider>
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
};

export const renderWithHistoryRouter = ({ route }: { route: string }) => {
  return renderWithHistory({
    route
  });
};
