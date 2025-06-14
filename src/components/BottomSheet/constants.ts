import { PropsWithChildren } from "react";

export enum EBottomSheetState {
    OPEN,
    CLOSED,
}
export type BottomSheetProps = PropsWithChildren<{
    readonly height?: number;
    readonly bottomInset?: number;
    readonly defaultOpen?: boolean;
    readonly onClose?: () => void;
    readonly onStateChange?: (state: EBottomSheetState) => void;
}>;