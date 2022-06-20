/// <reference types="react" />
import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';
export interface TransactionToastPropsType {
    title?: string;
    toastId: string;
    className?: string;
    errorMessage?: string;
    withTxNonce?: boolean;
    successMessage?: string;
    endTimeProgress?: number;
    processingMessage?: string;
    startTimeProgress?: number;
    shouldRenderDefaultCss?: boolean;
    transactions: SignedTransactionType[];
    status: TransactionBatchStatusesEnum;
    lifetimeAfterSuccess?: number;
    onClose?: (toastId: string) => void;
}
declare const TransactionToast: ({ toastId, title, shouldRenderDefaultCss, className, withTxNonce, transactions, status, onClose, startTimeProgress, endTimeProgress, lifetimeAfterSuccess }: TransactionToastPropsType) => JSX.Element | null;
export default TransactionToast;
//# sourceMappingURL=index.d.ts.map