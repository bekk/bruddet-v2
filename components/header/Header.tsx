'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('header');

  const bLogo = (
    <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M44.007 30.4906L31.0973 32.8655L40.4205 28.1454L45.4573 21.1259L41.2626 11.7452L34.5003 11L30.7095 12.2709L14.5 12.456L15.9158 27.9717L14.5 39.4371L16.6937 50.171L29.4451 51.8716L43.3163 49.6338L48.1741 44.0497L49.6657 37.6702L44.0093 30.4883L44.007 30.4906Z"
        className="fill-primary hover:fill-primary-hover active:fill-primary-active"
      />
    </svg>
  );

  return (
    <>
      <div className="z-50 fixed flex items-center h-14 left-2 top-2">
        <Link href={locale === 'nb' ? '/' : '/en'} aria-label={t('go-to-main')}>
          {bLogo}
        </Link>
      </div>
    </>
  );
}
