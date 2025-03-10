import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "short",
    year: "numeric",

  })
}

export function parseServeActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response))
}