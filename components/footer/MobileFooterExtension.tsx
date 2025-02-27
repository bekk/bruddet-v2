"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollingCTA } from "./Footer";

type MobileFooterExtensionProps = {
  isEventPage?: boolean;
};

export default function MobileFooterExtension({
  isEventPage,
}: MobileFooterExtensionProps) {
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const t = useTranslations("footer");
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTargetVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const targetElement = document.getElementById("eventIngress");
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <div className="flex h-full border-t">
      {isEventPage ? (
        !isTargetVisible && (
          <div className="fixed bottom-footer-height h-footer-height border-t w-full bg-background-event md:hidden flex justify-center items-center">
            <Link href="#top">
              <span>{t("buy-ticket")}</span>
            </Link>
          </div>
        )
      ) : (
        <Link
          href="/"
          className="flex justify-center items-center relative overflow-x-hidden w-full h-full border-x"
        >
          <ScrollingCTA />
        </Link>
      )}
    </div>
  );
}
