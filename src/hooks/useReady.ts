import { useEffect, useState } from "react";

export default function useReady() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);
    useEffect(() => {
        if (isReady) return;
        if (!isLoaded) return;
        setIsReady(true);
    }, [isLoaded, isReady]);

    return { isReady };
}