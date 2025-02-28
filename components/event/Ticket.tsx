import { EVENT_QUERYResult } from '@/sanity/types/types';
import { useFormatter, useTranslations } from 'next-intl';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

type TicketProps = {
  date: NonNullable<NonNullable<EVENT_QUERYResult>['dates']>[number] | null;
  saleStartOption: NonNullable<EVENT_QUERYResult>['saleStartOption'] | null;
  saleStartDateTime: NonNullable<EVENT_QUERYResult>['saleStartDateTime'] | null;
};

export const Ticket = ({ date, saleStartOption, saleStartDateTime }: TicketProps) => {
  const t = useTranslations('event');
  const status =
    date?.eventTicketStatus == 2
      ? t('fewTicketsLeft')
      : date?.eventTicketStatus == 3
        ? t('soldOut')
        : undefined;

  const renderSaleButton = renderSaleButtonByStatus(saleStartOption, saleStartDateTime, date);

  const format = useFormatter();

  return (
    <div>
      <h3 className="uppercase">
        {format.dateTime(new Date(date?.date || ''), {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
        })}
      </h3>
      <h4 className="uppercase">
        {format.dateTime(new Date(date?.date || ''), {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </h4>
      {renderSaleButton}
    </div>
  );
};

const renderSaleButtonByStatus = (
  saleStartOption: TicketProps['saleStartOption'],
  saleStartDateTime: TicketProps['saleStartDateTime'],
  date: TicketProps['date'],
) => {
  const format = useFormatter();
  const t = useTranslations('event');
  switch (saleStartOption) {
    case 'saleStartKnown':
      if (saleStartDateTime) {
        return (
          <Badge variant={'outline'} size={'lg'} className="uppercase">
            {t('saleStart')}{' '}
            {format.dateTime(new Date(saleStartDateTime), {
              weekday: 'long',
              day: '2-digit',
              month: 'long',
              hour: '2-digit',
              minute: '2-digit',
            })}
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
      break;

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
  return <p>Nassing</p>;
};
