import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { network, walletConnectBridge, walletConnectDeepLink } from './config';

import { DappProvider, AuthenticatedRoutesWrapper, DappUI } from 'dapp-core';
import 'dapp-core/build/index.css';
import AuthenticatedRoute from './pages/AuthenticatedRoute';
import Unlock from './pages/UnlockRoute';

const { TransactionsToastList } = DappUI;

const routes = [
  {
    path: '/home',
    title: 'Home',
    authenticatedRoute: true,
    component: AuthenticatedRoute
  }
];

const App = () => {
  return (
    <Router>
      <DappProvider
        networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}
      >
        <AuthenticatedRoutesWrapper routes={routes} unlockRoute={'unlock'}>
          <TransactionsToastList />
          <Routes>
            <Route path='/' element={<Unlock />} />

            <Route path={'/home'} element={<AuthenticatedRoute />} />

            <Route path={'/unlock'} element={<Unlock />} />

            <Route path='*' element={<div>404</div>} />
          </Routes>
        </AuthenticatedRoutesWrapper>
      </DappProvider>
    </Router>
  );
};

export default App;
