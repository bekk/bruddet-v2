import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FooterHoverCTALink } from './FooterHoverLink';

type DesktopMiddleFooterProps = {
  isEventPage: boolean;
  scrollingText: string;
  hoverText: string;
  link: string;
  showNewsletter: boolean;
};

export default function DesktopMiddleFooter({
  isEventPage,
  scrollingText,
  hoverText,
  link,
  showNewsletter,
}: DesktopMiddleFooterProps) {
  const t_event = useTranslations('event');
  return (
    <>
      {isEventPage ? (
        <Link
          href="#ticket-block"
          className="hidden md:w-[70%] md:flex justify-center items-center border-x border-foreground hover:bg-primary hover:text-primary-foreground hover:underline"
        >
          <span className="font-bold uppercase text-xl">{t_event('buy-ticket')}</span>
        </Link>
      ) : (
        <FooterHoverCTALink
          link={`/program/${link}`}
          scrollingText={scrollingText}
          hoverText={hoverText}
          showNewsletter={showNewsletter}
        />
      )}
    </>
  );
}
