import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Language } from "./i18n";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getLanguageFromPath = (path: string) => {
    try {
      if (path.startsWith("/en/") || path === "/en") {
        return Language.English;
      }
      return Language.NorwegianBokmal;
    } catch {
      return Language.NorwegianBokmal;
    }
  };