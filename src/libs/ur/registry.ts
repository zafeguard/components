import { isRegistryItem, RegistryItemBase, RegistryItemClass, registryItemFactory, UrRegistry } from "@ngraveio/bc-ur";

export abstract class GenericRegistryItemBase<T> extends RegistryItemBase {
    declare data: T;
    abstract value: T;
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

// nested convert object values that is a `GenericRegistryItemBase` to `.toUr().toString()`
const toUR = <T = any>(data: any): T => {
    if (isRegistryItem(data)) return data.toUr().toString() as T;

    if (Array.isArray(data)) return data.map(item => toUR(item)) as T;

    if (data !== null && typeof data === 'object') {
        const result: any = {};
        for (const [key, value] of Object.entries(data)) {
            result[key] = toUR(value);
        }
        return result;
    }
    return data;
};
const fromUR = <T = any>(data: any): T => {
    if (typeof data === "string" && data.startsWith("ur:")) {
        const [header] = data.split("/");
        const [_, type] = header.split(":");
        const Registry = UrRegistry.queryByURType(type);
        if (!Registry) return data as T;
        return Registry.fromUr(data) as T;
    }

    if (Array.isArray(data)) {
        return data.map(item => fromUR(item)) as T;
    }

    if (data !== null && typeof data === 'object') {
        const result: any = {};
        for (const [key, value] of Object.entries(data)) {
            result[key] = fromUR(value);
        }
        return result;
    }

    return data;
}

function createRegistry<Payload>(
    registry: RegistryItemClass<GenericRegistryItemBase<Payload>> | RegistryItemClass<RegistryItemBase>,
    payload: Payload
): GenericRegistryItemBase<Payload> {
    class Instance extends registry {
        constructor(data: Payload) {
            super(toUR(data));
        }

        get value(): Payload {
            return fromUR((this as unknown as RegistryItemBase).data)
        }
    }
    return new Instance(payload) as GenericRegistryItemBase<Payload>;
}

export { createRegistry, fromUR, toUR }