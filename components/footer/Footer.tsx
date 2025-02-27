"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type FooterProps = {
    isEventPage?: boolean;
};

export default function Footer({ isEventPage }: FooterProps) {
    const [isHovering, setIsHovering] = useState(false);
    const locale = useLocale();
    const t = useTranslations("footer");
    const t_event = useTranslations("event");

    return (
        <footer className="flex flex-col h-full">
            <div className="h-full flex justify-between border-t border-foreground">
                <FooterLink href={`/${locale}/meny`} ariaLabel={t("menu-a11y")}>
                    {t("menu")}
                </FooterLink>

                {isEventPage ? (
                    <Link
                        href="#top"
                        className="hidden md:w-[70%] md:flex justify-center items-center border-x border-foreground hover:bg-primary hover:text-primary-foreground hover:underline"
                    >
                        <span className="font-bold uppercase">
                            {t_event("buy-ticket")}
                        </span>
                    </Link>
                ) : (
                    <Link
                        href="/"
                        className="hidden md:w-[70%] md:flex justify-center items-center relative overflow-x-hidden w-full h-full border-x border-foreground hover:bg-primary hover:text-primary-foreground hover:underline"
                        onMouseOver={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onFocus={() => setIsHovering(true)}
                        onBlur={() => setIsHovering(false)}
                    >
                        {isHovering ? (
                            <span className="font-bold ">Meld deg på!</span>
                        ) : (
                            <ScrollingCTA />
                        )}
                    </Link>
                )}

                <FooterLink
                    href={`/${locale}/program`}
                    ariaLabel={t("program-a11y")}
                >
                    {t("program")}
                </FooterLink>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
    ariaLabel,
}: {
    href: string;
    children: React.ReactNode;
    ariaLabel: string;
}) {
    return (
        <Link
            href={href}
            className="w-[50%] md:w-[15%] flex justify-center items-center font-bold hover:bg-primary hover:text-primary-foreground hover:underline"
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    );
}

export function ScrollingCTA() {
    return (
        <>
            <div className="animate-marquee whitespace-nowrap">
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="m-4">
                        Sjekk ut vårt sommerprogram!
                    </span>
                ))}
            </div>
            <div className="absolute flex justify-center items-center animate-marquee2 whitespace-nowrap">
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="m-4">
                        Sjekk ut vårt sommerprogram!
                    </span>
                ))}
            </div>
        </>
    );
}
