import * as React from 'react';
import { OperationType } from 'types/serverTransactions.types';
import { TransactionActionBlock } from 'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock';

const getTicker = (identifier: string) => {
  if (!identifier) return '';

  const arr = identifier.split('-');
  if (arr.length > 0) {
    return arr[0];
  }

  return identifier;
};

export const OperationToken = ({ operation }: { operation: OperationType }) => {
  const token = {
    type: operation.esdtType,
    name: operation.name,
    ticker: operation.svgUrl
      ? getTicker(operation.identifier)
      : operation.identifier,
    collection: operation.collection,
    identifier: operation.identifier,
    token: operation.identifier,
    decimals: operation.decimals,
    value: operation.value,
    svgUrl: operation.svgUrl
  };
  switch (operation.type) {
    case 'nft':
      return <TransactionActionBlock.Nft token={token} />;
    case 'esdt':
      return <TransactionActionBlock.Token token={token} />;
    default:
      return <></>;
  }
};