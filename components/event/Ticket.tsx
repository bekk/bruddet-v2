import { EVENT_QUERYResult } from '@/sanity/types/types';
import { useFormatter, useTranslations } from 'next-intl';
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
        <h3 className="uppercase">
          <EventDate startDate={date?.date || ''} />
        </h3>
        <h4 className="uppercase">
          {format.dateTime(new Date(date?.date || ''), {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </h4>
        {status && (
          <Badge variant={'outline'} size={'lg'} className="uppercase">
            {status}
          </Badge>
        )}
      </div>
      <div>{renderSaleButton}</div>
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
          <Badge variant={'outline'} size={'lg'} className="uppercase">
            {t('saleStart')} {formattedDate}
          </Badge>
        );
      }
      break;
    case 'saleStartUnknown':
      return (
        <Badge variant={'outline'} size={'lg'} className="uppercase">
          {t('saleStartUnknown')}
        </Badge>
      );
    case 'saleStarted':
      return (
        <>
          <Button size={'lg'} disabled={date?.eventTicketStatus === 3}>
            <Link
              href={date?.ticketUrl || ''}
              className="uppercase"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('buy-ticket')}
            </Link>
          </Button>
          <Button size={'lg'} disabled={date?.busTicketStatus === 3} variant={'secondary'}>
            <Link
              href={date?.busTicketUrl || ''}
              className="uppercase"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('buy-bus-ticket')}
            </Link>
          </Button>
        </>
      );
  }
  return null;
};
