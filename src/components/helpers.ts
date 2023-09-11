export const RANDOM_INT = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);
export const RANDOM_DECIMAL = (min: number, max: number): number => Math.random() * (max - min) + min;
