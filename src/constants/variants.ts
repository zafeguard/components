import { ColorValue } from "react-native";
import { EColorScheme } from "./scheme";

const TINT_COLOR_LIGHT = '#0a7ea4';
const TINT_COLOR_DARK = '#fff';

export const BORDER_RADIUS = 15;
export const WHITE = '#FFFFFF';
export const CHERRY_RED = '#FF3C00';
export const JET_BLACK = '#090605';
export const SHOCKING_YELLOW = '#FFBC00';
export const OCEAN_BLUE = '#001E59';
export const LIGHT_COLORS = {
    text: {
        default: '#11181C',
        muted: '#E6E6E6',
        selected: null,
    },
    background: {
        default: '#FFFFFF',
        muted: '#FDFDFD',
        selected: null,
    },
    tint: {
        default: TINT_COLOR_LIGHT,
        muted: null,
        selected: null,
    },
    icon: {
        default: '#687076',
        muted: null,
        selected: null,
    },
    tabIcon: {
        default: '#687076',
        muted: null,
        selected: TINT_COLOR_LIGHT,
    }
};
export const DARK_COLORS = {
    text: {
        default: '#ECEDEE',
        muted: '#D9DBDB',
        selected: null,
    },
    background: {
        default: '#151718',
        muted: '#1B1C1C',
        selected: null,
    },
    tint: {
        default: TINT_COLOR_DARK,
        muted: null,
        selected: null,
    },
    icon: {
        default: '#9BA1A6',
        muted: null,
        selected: null,
    },
    tabIcon: {
        default: '#9BA1A6',
        muted: null,
        selected: TINT_COLOR_DARK,
    }
};
export const COLORS = {
    [EColorScheme.LIGHT]: LIGHT_COLORS,
    [EColorScheme.DARK]: DARK_COLORS,
};
type VariantProps = {
    readonly border: ColorValue;
    readonly background: ColorValue;
    readonly text?: string;
};
export const VARIANTS = {
    primary: {
        border: CHERRY_RED,
        background: CHERRY_RED,
        text: WHITE,
    } as VariantProps,
    secondary: {
        border: OCEAN_BLUE,
        background: OCEAN_BLUE,
        text: WHITE,
    } as VariantProps,
    warning: {
        border: SHOCKING_YELLOW,
        background: SHOCKING_YELLOW,
        text: JET_BLACK,
    } as VariantProps,
    dark: {
        border: "#1F1F1F",
        background: JET_BLACK,
        text: WHITE,
    } as VariantProps,
    outline: {
        border: CHERRY_RED,
        background: 'transparent',
        text: CHERRY_RED,
    } as VariantProps,
    link: {
        border: 'transparent',
        background: 'transparent',
        text: undefined,
    } as VariantProps,
};
