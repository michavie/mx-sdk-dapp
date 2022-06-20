/// <reference types="react" />
import { SignedTransactionsType } from 'types';
export interface TransactionsToastListPropsType {
    toastProps?: any;
    className?: string;
    withTxNonce?: boolean;
    shouldRenderDefaultCss?: boolean;
    pendingTransactions?: SignedTransactionsType;
    signedTransactions?: SignedTransactionsType;
    successfulToastLifetime?: number;
}
declare function TransactionsToastList({ shouldRenderDefaultCss, withTxNonce, className, pendingTransactions, signedTransactions, successfulToastLifetime }: TransactionsToastListPropsType): JSX.Element;
export default TransactionsToastList;
//# sourceMappingURL=index.d.ts.map