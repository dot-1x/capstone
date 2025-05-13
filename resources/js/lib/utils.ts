import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isUsingNumber(input: string) {
    return;
}

export async function fetchApi<T>(url: string, init?: RequestInit): Promise<T> {
    const data = await fetch(url, init);
    return await data.json();
}
