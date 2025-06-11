import { useCallback, useEffect, useMemo, useState } from "react";

export function useDot(maxCount: number = 3) {
    const [counts, setCounts] = useState<number>(maxCount);

    const dots = useMemo(() =>
        new Array(counts).fill(".").join(""),
        [maxCount, counts]
    );
    const animate = useCallback(() => {
        const timer = setInterval(() => {
            setCounts((prev) => {
                if (prev >= 3) return 0;
                return prev + 1;
            });
        }, 500);
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        animate();
    }, []);

    return { dots, counts };
}