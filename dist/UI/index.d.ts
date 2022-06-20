/// <reference types="react" />
import LedgerLoginContainer from './ledger/LoginModal';
import NotificationModal from './NotificationModal';
import SignTransactionsModals from './SignTransactionsModals';
import TransactionsToastList from './TransactionsToastList';
import WalletConnectLoginContainer from './walletConnect/WalletConnectLoginContainer';
declare const _default: {
    ExplorerLink: ({ page, text, className }: {
        page: string;
        text?: any;
        className?: string | undefined;
    }) => JSX.Element;
    Denominate: (props: import("../types").DenominateType) => JSX.Element;
    PageState: ({ icon, title, action, iconClass, dataTestId, description, iconBgClass, iconSize, className, shouldRenderDefaultCss }: import("./PageState").PageStateProps) => JSX.Element;
    ExtensionLoginButton: (props: import("../types").ExtensionLoginButtonPropsType) => JSX.Element;
    LedgerLoginButton: (props: import("./ledger/LoginButton/types").LedgerLoginButtonPropsType) => JSX.Element;
    LedgerLoginContainer: typeof LedgerLoginContainer;
    NotificationModal: typeof NotificationModal;
    SignTransactionsModals: typeof SignTransactionsModals;
    SignWithLedgerModal: (props: import("../types").SignModalPropsType) => JSX.Element;
    SignWithDeviceModal: ({ handleClose, error, className, verifyReceiverScam, title }: import("../types").SignModalPropsType) => JSX.Element;
    SignWithExtensionModal: ({ handleClose, error, callbackRoute, transactions, className }: import("../types").SignModalPropsType) => JSX.Element;
    TransactionsToastList: typeof TransactionsToastList;
    TransactionToast: ({ toastId, title, shouldRenderDefaultCss, className, withTxNonce, transactions, status, onClose, startTimeProgress, endTimeProgress, lifetimeAfterSuccess }: import("./TransactionToast").TransactionToastPropsType) => JSX.Element | null;
    WalletConnectLoginButton: ({ children, callbackRoute, onModalOpens, onModalCloses, loginButtonText, title, logoutRoute, shouldRenderDefaultCss, wrapContentInsideModal, redirectAfterLogin, buttonClassName, className, lead, token, hideButtonWhenModalOpens }: import("./walletConnect/WalletConnectLoginButton").WalletConnectLoginButtonPropsType) => JSX.Element;
    WalletConnectLoginContainer: typeof WalletConnectLoginContainer;
    WebWalletLoginButton: (props: import("./webWallet/LoginButton").WebWalletLoginButtonPropsType) => JSX.Element;
    Trim: ({ text, dataTestId }: import("./Trim").TrimType) => JSX.Element;
    UsdValue: (props: {
        amount: string;
        usd: number;
        'data-testid'?: string | undefined;
    }) => JSX.Element;
    ProgressSteps: ({ totalSteps, currentStep, className }: import("./ProgressSteps").ProgressStepsType) => JSX.Element;
    UnlockPage: ({ loginRoute, title, className, shouldRenderDefaultCss, LedgerLoginButtonText, description, WalletConnectLoginButtonText, ExtensionLoginButtonText, WebWalletLoginButtonText }: import("./pages/UnlockPage/types").Props) => JSX.Element;
};
export default _default;
//# sourceMappingURL=index.d.ts.map