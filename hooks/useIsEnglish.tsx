"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useIsEnglish = (): boolean => {
  const pathname = usePathname();

  const isEnglish = useMemo(() => {
    if (!pathname) return false;
    return pathname.includes("/en/") || pathname === "/en";
  }, [pathname]);

  return isEnglish;
};
