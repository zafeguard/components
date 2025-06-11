export type PinPadButtonProps = {
    readonly number: number;
    readonly disabled?: boolean;
    readonly onPress?: () => void;
    readonly height: number;
};
export type PinPadProps = {
    readonly shuffle?: boolean;
    readonly height?: number;
    readonly onPress?: (num: number) => void;
};