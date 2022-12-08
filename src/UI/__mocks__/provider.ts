import { Transaction } from '@elrondnetwork/erdjs';
import { IDappProvider, LoginMethodsEnum } from 'types';

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

export const provider = (type: LoginMethodsEnum): IDappProvider => {
  let isInit = false;
  let isConnected = false;

  let login: any = notInitializedError('login');
  if (type === LoginMethodsEnum.extension) {
    login = () => {
      isConnected = true;
      return isConnected;
    };
  }
  return {
    init: async () => {
      isInit = true;
      return isInit;
    },
    login,
    logout: () => {
      return new Promise((resolve, reject) => {
        if (!isConnected) {
          reject('Unable to perform logout');
        } else {
          isConnected = false;
          isInit = false;
          resolve(true);
        }
      });
    },
    getAddress: notInitializedError('getAddress'),
    isInitialized: () => isInit,
    isConnected: async () => false,
    sendTransaction: notInitializedError('sendTransaction'),
    signTransaction: async (transaction: Transaction) => {
      return transaction;
    },

    signMessage: async (transaction) => {
      return transaction;
    },
    signTransactions: async (transactions: Transaction[]) => {
      return transactions;
    }
  };
};
