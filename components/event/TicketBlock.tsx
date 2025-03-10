import { EVENT_QUERYResult } from '@/sanity/types/types';
import { useTranslations } from 'next-intl';
import { Ticket } from './Ticket';

type TicketBlockProps = {
  saleStartOption: NonNullable<EVENT_QUERYResult>['saleStartOption'] | null;
  saleStartDateTime: NonNullable<EVENT_QUERYResult>['saleStartDateTime'] | null;
  ticketInformation: NonNullable<EVENT_QUERYResult>['ticketInformation'] | null;
  dates: NonNullable<EVENT_QUERYResult>['dates'] | null;
  id: string;
};

export const TicketBlock = ({
  saleStartOption,
  saleStartDateTime,
  ticketInformation,
  dates,
  id,
}: TicketBlockProps) => {
  const t = useTranslations('event');

  return (
    <div id={id} className="space-y-4 md:space-y-9 my-12 md:mt-20 md:mb-0">
      <h2>{t('tickets')}</h2>
      {ticketInformation && <p className="md:text-lg">{ticketInformation}</p>}
      {dates?.map((date, i) => (
        <Ticket {...{ date, saleStartOption, saleStartDateTime }} key={i} />
      ))}
    </div>
  );
};
