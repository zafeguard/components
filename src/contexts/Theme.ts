import { createContext, useContext } from "react";
import { EColorScheme } from "@constants/scheme";

type Parameter = {
    readonly theme: EColorScheme;
    readonly setTheme: (theme: EColorScheme) => void;
    readonly fontLoaded: boolean;
};
export const Context = createContext<Parameter>({
    theme: EColorScheme.AUTO,
    setTheme: () => { },
    fontLoaded: false,
});
export const useTheme = () => useContext(Context);