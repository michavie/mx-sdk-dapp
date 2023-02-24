import { useGetPendingTransactions } from 'hooks/transactions/useGetPendingTransactions';

export const useGetLastTransactionHash = (): string => {
  const { hasPendingTransactions, pendingTransactions } =
    useGetPendingTransactions();

  if (!hasPendingTransactions) {
    return '';
  }

  const sortedSessionIdsDesc = Object.keys(pendingTransactions)
    .sort()
    .reverse();

  for (const sessionId of sortedSessionIdsDesc) {
    const batch = pendingTransactions[sessionId];

    if (batch.transactions?.length) {
      const lastTransaction = batch.transactions[batch.transactions.length - 1];

      return lastTransaction.hash;
    }
  }

  return '';
};
