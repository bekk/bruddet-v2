'use client';
import { useLocale, useTranslations } from 'next-intl';
import RedLogo from './logo_red.svg';
import BlackLogo from './logo_black.svg';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const frontpageUrl = ['/', '/en'];
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('header');

  const isArticlePage = pathname.includes('/meny/');

  const className = !frontpageUrl.includes(pathname) ? 'visible' : 'invisible';

  return (
    <>
      <div className="z-50 fixed flex items-center h-14 left-2 top-2">
        <Link
          className={className}
          href={locale === 'nb' ? '/' : '/en'}
          aria-label={t('go-to-main')}
        >
          <Image src={isArticlePage ? BlackLogo : RedLogo} alt="Logo" />
        </Link>
      </div>
    </>
  );
}
