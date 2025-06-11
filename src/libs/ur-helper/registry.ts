import { registryItemFactory } from "@ngraveio/bc-ur";

export class RegistryItemHelper {
    static createKeyMap<T extends Record<string, number> = Record<string, number>>(
        keyMap: T,
        type: string = "mapped",
        CDDL?: string,
        tag: number = 112,
    ) {
        return registryItemFactory({
            tag: tag ?? 112,
            URType: type,
            CDDL: CDDL ?? ``,
            keyMap,
        });
    }
    static createArray(
        type: string = "array",
        CDDL?: string,
    ) {
        return registryItemFactory({
            tag: 112,
            URType: type,
            CDDL: CDDL ?? ``,
        })
    }
}
