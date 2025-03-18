'use client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import RedLogo from './logo_red.svg';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('header');

  return (
    <>
      <div className="z-50 fixed flex items-center h-14 left-2 top-2">
        <Link href={locale === 'nb' ? '/' : '/en'} aria-label={t('go-to-main')}>
          <Image src={RedLogo} alt="Logo" />
        </Link>
      </div>
    </>
  );
}
