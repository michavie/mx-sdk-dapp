/// <reference types="react" />
export interface WalletConnectLoginModalPropsType {
    lead?: string;
    title?: string;
    className?: string;
    logoutRoute?: string;
    callbackRoute: string;
    loginButtonText: string;
    wrapContentInsideModal?: boolean;
    shouldRenderDefaultCss?: boolean;
    redirectAfterLogin?: boolean;
    token?: string;
    onClose?: () => void;
}
declare function WalletConnectLoginContainer({ callbackRoute, loginButtonText, title, logoutRoute, className, lead, shouldRenderDefaultCss, wrapContentInsideModal, redirectAfterLogin, token, onClose }: WalletConnectLoginModalPropsType): JSX.Element;
export default WalletConnectLoginContainer;
//# sourceMappingURL=index.d.ts.map