import { PropsWithChildren } from "react";

export type BottomSheetProps = PropsWithChildren<{
    readonly height?: number;
    readonly bottomInset?: number;
    readonly defaultOpen?: boolean;
    readonly onClose?: () => void;
}>;