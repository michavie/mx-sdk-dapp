/// <reference types="react" />
interface LedgerLoginContainerPropsType {
    callbackRoute: string;
    className?: string;
    shouldRenderDefaultCss?: boolean;
    wrapContentInsideModal?: boolean;
    redirectAfterLogin?: boolean;
    token?: string;
    onClose?: () => void;
}
declare function LedgerLoginContainer({ callbackRoute, className, shouldRenderDefaultCss, wrapContentInsideModal, redirectAfterLogin, onClose, token }: LedgerLoginContainerPropsType): JSX.Element;
export default LedgerLoginContainer;
//# sourceMappingURL=index.d.ts.map