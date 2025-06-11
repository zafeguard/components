import { FontAwesomeIconName } from "../Icon";
import { JSX } from "react";

export type SelectItemProps<T> = {
    readonly label: string;
    readonly value: string;
    readonly context?: T;
};
export type SelectProps<T> = {
    readonly gap?: number;
    readonly data: Array<SelectItemProps<T>>;
    readonly value?: string;
    readonly disabled?: boolean;
    readonly onChange?: (value: string) => void;
    readonly itemComponent?: (props: SelectItemProps<T> & {
        readonly selectedValue?: string;
    }) => JSX.Element;
    readonly icons?: {
        readonly selected?: FontAwesomeIconName;
        readonly unselected?: FontAwesomeIconName;
    },
};