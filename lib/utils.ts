import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const RedirectType = (type: string) => {
  if (type == "article") {
    return "meny";
  } else if (type == "event") {
    return "event";
  } else {
    return "";
  }
};
