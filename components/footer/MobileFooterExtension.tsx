"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollingCTA from "./ScrollingCTA";

type MobileFooterExtensionProps = {
    isEventPage: boolean;
    scrollingText: string;
};

export default function MobileFooterExtension({
    isEventPage,
    scrollingText,
}: MobileFooterExtensionProps) {
    const [isTargetVisible, setIsTargetVisible] = useState(false);
    const t = useTranslations("footer");
    const t_event = useTranslations("event");
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isAnyElementVisible = entries.some(
                    (entry) => entry.isIntersecting,
                );
                setIsTargetVisible(isAnyElementVisible);
            },
            { threshold: 0 },
        );

        const elements = ["eventIngress", "ticket-block"]
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null);

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="flex h-full border-t">
            {isEventPage ? (
                !isTargetVisible && (
                    <div className="fixed bottom-footer-height h-footer-height border-t w-full bg-background-event md:hidden flex justify-center items-center">
                        <Link href="#ticket-block">
                            <span>{t_event("buy-ticket")}</span>
                        </Link>
                    </div>
                )
            ) : (
                <Link
                    href="/"
                    className="flex justify-center items-center relative overflow-x-hidden w-full h-full border-x"
                >
                    <ScrollingCTA text={scrollingText} />
                </Link>
            )}
        </div>
    );
}
