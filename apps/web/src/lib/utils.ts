import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function removeKeys(obj: Record<string, any>, keysToRemove: string[]): Record<string, any> {
  const newObj: Record<string, any> = { ...obj }; // Create a shallow copy of the original object

  keysToRemove.forEach((key) => {
    if (newObj.hasOwnProperty(key)) {
      delete newObj[key]; // Remove the key if it exists in the object
    }
  });

  return newObj;
}

export const normalizeUrl = (url: string): string => {
  return url.replace(/\\/g, '/');
};

export const paginationKeys = (searchTextName: string) => ['per_page', 'sort', 'page', searchTextName];



export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {},
) {
  return new Intl.DateTimeFormat("en-US", {
    month: opts.month ?? "long",
    day: opts.day ?? "numeric",
    year: opts.year ?? "numeric",
    ...opts,
  }).format(new Date(date));
}
