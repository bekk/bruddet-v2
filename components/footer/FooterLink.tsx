"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function FooterLink({
    translationKey,
    allyTranslationKey,
    link,
}: {
    translationKey: string;
    allyTranslationKey: string;
    link: string;
}) {
    const locale = useLocale();
    const t = useTranslations("footer");
    return (
        <Link
            href={`/${locale}/${link}`}
            className="w-[50%] md:w-[15%] flex justify-center items-center font-bold hover:bg-primary hover:text-primary-foreground hover:underline"
            aria-label={t(allyTranslationKey)}
        >
            {t(translationKey)}
        </Link>
    );
}
