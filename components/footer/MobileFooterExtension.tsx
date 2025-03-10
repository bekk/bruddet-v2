'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollingCTA from './ScrollingCTA';
import { useNewsLetterContext } from '@/hooks/useDialog';

type MobileFooterExtensionProps = {
  isEventPage: boolean;
  scrollingText: string;
  link: string;
  showNewsletter: boolean;
};

export default function MobileFooterExtension({
  isEventPage,
  scrollingText,
  link,
  showNewsletter,
}: MobileFooterExtensionProps) {
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const { setNewsletterOpen } = useNewsLetterContext();
  const t_event = useTranslations('event');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyElementVisible = entries.some((entry) => entry.isIntersecting);
        setIsTargetVisible(isAnyElementVisible);
      },
      { threshold: 0 },
    );

    const elements = ['eventIngress', 'ticket-block']
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

  const handleClick = (e: React.MouseEvent) => {
    if (showNewsletter) {
      e.preventDefault();
      setNewsletterOpen(true);
    }
  };

  return (
    <div className="flex h-full">
      {isEventPage ? (
        !isTargetVisible && (
          <Link
            href="#ticket-block"
            className="hover:underline fixed bottom-footer-height h-footer-height border-t w-full bg-background-event md:hidden flex justify-center items-center"
          >
            <span className="font-bold uppercase text-xl">{t_event('buy-ticket')}</span>
          </Link>
        )
      ) : (
        <Link
          href={`/program/${link}`}
          className="flex justify-center items-center relative overflow-x-hidden w-full h-full border-t"
          onClick={handleClick}
        >
          <ScrollingCTA text={scrollingText} />
        </Link>
      )}
    </div>
  );
}
