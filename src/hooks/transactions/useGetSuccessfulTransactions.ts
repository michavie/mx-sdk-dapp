import { useSelector } from 'reduxStore/DappProviderContext';
import { successfulTransactionsSelector } from 'reduxStore/selectors';
import { SignedTransactionsType, SignedTransactionsBodyType } from 'types';

export interface UseGetSuccessfulTransactionsReturnType {
  successfulTransactions: SignedTransactionsType;
  successfulTransactionsArray: [string, SignedTransactionsBodyType][];
  hasSuccessfulTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetSuccessfulTransactions(): UseGetSuccessfulTransactionsReturnType {
  const successfulTransactions = useSelector(successfulTransactionsSelector);
  const successfulTransactionsArray: [
    string,
    SignedTransactionsBodyType
  ][] = Object.entries(successfulTransactions);
  const hasSuccessfulTransactions = successfulTransactionsArray?.length > 0;
  return {
    successfulTransactions,
    successfulTransactionsArray,
    hasSuccessfulTransactions
  };
}
