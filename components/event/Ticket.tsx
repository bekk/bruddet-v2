'use client';
import { EVENT_QUERYResult } from '@/sanity/types/types';
import { useFormatter, useLocale, useTranslations } from 'next-intl';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';
import EventDate from './EventDate';

type TicketProps = {
  date: NonNullable<NonNullable<EVENT_QUERYResult>['dates']>[number] | null;
  saleStartOption: NonNullable<EVENT_QUERYResult>['saleStartOption'] | null;
  saleStartDateTime: NonNullable<EVENT_QUERYResult>['saleStartDateTime'] | null;
};

export const Ticket = ({ date, saleStartOption, saleStartDateTime }: TicketProps) => {
  const format = useFormatter();
  const locale = useLocale();
  const t = useTranslations('event');
  const formattedDate = saleStartDateTime
    ? format.dateTime(new Date(saleStartDateTime), {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  const renderSaleButton = renderSaleButtonByStatus(
    saleStartOption,
    saleStartDateTime,
    date,
    formattedDate,
    t,
  );
  const status =
    date?.eventTicketStatus == 2
      ? t('fewTicketsLeft')
      : date?.eventTicketStatus == 3
        ? t('soldOut')
        : null;

  return (
    <div>
      <div>
        <span className="block text-2xl font-bold first-letter:capitalize">
          <EventDate startDate={date?.date || ''} />
        </span>
        <span className="block text-xl uppercase mt-1">
          {locale === 'nb' && 'KL. '}
          {format.dateTime(new Date(date?.date || ''), {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
        {status && (
          <Badge variant="outline" size="lg" className="mt-6">
            {status}
          </Badge>
        )}
      </div>
      <div className="mt-6">{renderSaleButton}</div>
    </div>
  );
};

const renderSaleButtonByStatus = (
  saleStartOption: TicketProps['saleStartOption'],
  saleStartDateTime: TicketProps['saleStartDateTime'],
  date: TicketProps['date'],
  formattedDate: string, // Consider using a more specific type
  t: (key: string) => string,
) => {
  switch (saleStartOption) {
    case 'saleStartKnown':
      if (saleStartDateTime) {
        return (
          <Badge variant="outline" size="lg">
            {t('saleStart')} {formattedDate}
          </Badge>
        );
      }
      break;
    case 'saleStartUnknown':
      return (
        <Badge variant="outline" size="lg">
          {t('saleStartUnknown')}
        </Badge>
      );
    case 'saleStarted':
      return (
        <>
          <Button asChild size="lg" disabled={date?.eventTicketStatus === 3} className="mr-2 mb-2">
            <Link href={date?.ticketUrl || ''} rel="noopener noreferrer" target="_blank">
              {t('buy-ticket')}
            </Link>
          </Button>
          <Button asChild size="lg" disabled={date?.busTicketStatus === 3} variant="secondary">
            <Link href={date?.busTicketUrl || ''} rel="noopener noreferrer" target="_blank">
              {t('buy-bus-ticket')}
            </Link>
          </Button>
        </>
      );
  }
  return null;
};
