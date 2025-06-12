import { RegistryItemBase, registryItemFactory } from "@ngraveio/bc-ur";

export class GenericRegistryItemBase<T> extends RegistryItemBase {
    declare data: T;
}
export class RegistryItemHelper {
    static createKeyMap<T extends Record<string, number> = Record<string, number>, P extends any = any>(
        keyMap: T,
        type: string = "mapped",
        CDDL?: string,
        tag: number = 112,
    ) {
        return registryItemFactory<GenericRegistryItemBase<P>>({
            tag: tag ?? 112,
            URType: type,
            CDDL: CDDL ?? ``,
            keyMap,
        });
    }
    static createArray<P extends any = any>(
        type: string = "array",
        CDDL?: string,
    ) {
        return registryItemFactory<GenericRegistryItemBase<P>>({
            tag: 112,
            URType: type,
            CDDL: CDDL ?? ``,
        })
    }
}
