'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function FooterLink({
  translationKey,
  allyTranslationKey,
  link,
  className,
}: {
  translationKey: string;
  allyTranslationKey: string;
  link: string;
  className?: string;
}) {
  const locale = useLocale();
  const t = useTranslations('footer');
  return (
    <Link
      href={`/${locale}/${link}`}
      className={`border-r border-foreground md:border-0 w-[50%] md:w-[15%] flex items-center md:px-6 text-xl justify-center font-bold hover:bg-primary hover:text-primary-foreground hover:underline ${className}`}
      aria-label={t(allyTranslationKey)}
    >
      {t(translationKey)}
    </Link>
  );
}
