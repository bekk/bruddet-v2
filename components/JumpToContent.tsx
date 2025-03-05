'use client';
import { useTranslations } from 'next-intl';

export const JumpToContent = () => {
  const t = useTranslations('accessibility');

  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        const content = document.getElementById('main-content');
        if (content) {
          content.scrollIntoView({ behavior: 'smooth' });
          content.focus();
        }
      }}
      className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:right-0 focus:z-[60] focus:p-4 focus:bg-primary border-dashed border-2 border-primary-foreground outline-none focus:text-primary-foreground text-center underline"
    >
      {t('jump-to-content')}
    </a>
  );
};
