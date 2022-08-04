import {
  useRegisterWebsocketListener,
  UseRegisterWebsocketListenerPropsType
} from 'hooks/useRegisterWebsocketListener';
import { useEffect, useState } from 'react';
import { useCheckTransactionStatus } from '../useCheckTransactionStatus';

const msDelay = 1000;

type UseTestProps = Omit<UseRegisterWebsocketListenerPropsType, 'onMessage'> & {
  onChange: (unixTime: number) => void;
};

const useTest = (args: UseTestProps) => {
  const [checkTxTimestamp, setCheckTxTimestamp] = useState(Date.now());
  const checkTransactionStatus = useCheckTransactionStatus();

  useEffect(() => {
    setTimeout(() => {
      checkTransactionStatus({ shouldRefreshBalance: true });
    }, msDelay);
  }, [checkTxTimestamp]);

  useRegisterWebsocketListener({
    onMessage: () => {
      const now = Date.now();
      setCheckTxTimestamp(now);
      args.onChange(now);
    },
    address: '12321',
    apiAddress: 'ws://google.com'
  });

  return null;
};

export default useTest;
