"use client";

import { useParams } from "next/navigation";

export function useLocale() {
  const params = useParams();
  return params?.locale as string | undefined;
}

export function useIsEnglish() {
  const locale = useLocale();
  return locale === "en";
}
