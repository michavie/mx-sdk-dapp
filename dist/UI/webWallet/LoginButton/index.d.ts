import { ReactNode } from 'react';
export interface WebWalletLoginButtonPropsType {
    token?: string;
    className?: string;
    callbackRoute: string;
    buttonClassName?: string;
    children?: ReactNode;
    loginButtonText?: string;
    shouldRenderDefaultCss?: boolean;
}
declare const WebWalletLoginButton: (props: WebWalletLoginButtonPropsType) => JSX.Element;
export default WebWalletLoginButton;
//# sourceMappingURL=index.d.ts.map