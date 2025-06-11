import { Portal } from "@gorhom/portal";
import { Fragment, memo, PropsWithChildren } from "react";

type WrapperProps = PropsWithChildren<{
    readonly portal?: boolean;
}>;
function BaseWrapper(props: WrapperProps) {
    const {
        children,
        portal,
    } = props;

    if (!portal) return (
        <Fragment>
            {children}
        </Fragment>
    )
    return (
        <Portal>{children}</Portal>
    )
}
const Wrapper = memo(BaseWrapper);
export { Wrapper };