import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => (twMerge(clsx(inputs)))

export const isEnglish = () => (location.pathname.includes("/en/") || location.pathname === "/en")
