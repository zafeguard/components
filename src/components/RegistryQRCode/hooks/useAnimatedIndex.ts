import { useCallback, useState } from "react";

export function useAnimatedIndex (interval: number = 500) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const initialize = useCallback((value: string[]) => {
        if (value.length === 1) return;
        const timer = setInterval(() => setCurrentIndex((prev) => {
            if (prev + 1 >= value.length) return 0;
            return prev + 1;
        }), interval);
        return () => clearInterval(timer);
    }, [interval]);

    return { currentIndex, initialize }
}