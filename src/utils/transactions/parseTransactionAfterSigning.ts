import { Transaction } from '@elrondnetwork/erdjs';
import { TransactionServerStatusesEnum } from 'types/enums';

export function parseTransactionAfterSigning(transaction: Transaction) {
  const parsedTransaction = transaction.toPlainObject();
  parsedTransaction.hash = transaction.getHash().toString();
  parsedTransaction.status = TransactionServerStatusesEnum.pending;
  return parsedTransaction;
}

export default parseTransactionAfterSigning;
