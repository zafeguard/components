export function toRGB(hex: string, alpha: number = 1) {
    const r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);

    const range = (min:number, max: number, value: number) => Math.max(min, Math.min(max, value));
    if (alpha) return `rgba(${range(0, 255, r)}, ${range(0, 255, g)}, ${range(0, 255, b)}, ${range(0, 1, alpha)})`;
    return `rgb(${range(0, 255, r)}, ${range(0, 255, g)}, ${range(0, 255, b)})`;
}