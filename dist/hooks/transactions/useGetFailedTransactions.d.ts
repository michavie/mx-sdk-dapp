import { SignedTransactionsType, SignedTransactionsBodyType } from 'types/transactions';
interface useGetFailedTransactionsReturnType {
    failedTransactions: SignedTransactionsType;
    failedTransactionsArray: [string, SignedTransactionsBodyType][];
    hasFailedTransactions: boolean;
}
export declare function useGetFailedTransactions(): useGetFailedTransactionsReturnType;
export {};
//# sourceMappingURL=useGetFailedTransactions.d.ts.map