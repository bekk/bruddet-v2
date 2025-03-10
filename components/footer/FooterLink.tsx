'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('footer');
  const isActive = pathname === `/${link}`;
  return (
    <Link
      href={`/${locale}/${link}`}
      className={`md:border-0 border-foreground ${isActive ? 'underline' : ''} w-[50%] md:w-[15%] flex items-center sm:justify-center px-6 text-xl font-bold hover:bg-primary hover:text-primary-foreground hover:underline ${className}`}
      aria-label={t(allyTranslationKey)}
    >
      {t(translationKey)}
    </Link>
  );
}
