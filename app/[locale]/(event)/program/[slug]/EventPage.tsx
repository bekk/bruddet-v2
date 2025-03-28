import { ColumnItem, Columns } from '@/components/column-layout';
import EventDate from '@/components/event/EventDate';
import ImageEventPage from '@/components/event/ImageEventPage';
import { RolesBlock } from '@/components/event/RolesBlock';
import { TicketBlock } from '@/components/event/TicketBlock';
import { MainBlock } from '@/components/MainBlock';
import { NormalRightColumn } from '@/components/NormalRightColumn';
import { StickyRightColumn } from '@/components/StickyRightColumn';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/sanity/lib/image';
import { EVENT_QUERYResult } from '@/sanity/types/types';
import { getFirstAndLastDate } from '@/utils/formatDates';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

type EventPageProps = {
  data: EVENT_QUERYResult;
};

export const EventPage = async ({ data }: EventPageProps) => {
  const t = await getTranslations('event');

  if (!data) return;

  const { image, title, ingress, dates, labels, genre, text, galleryDisplayType } = data;

  return (
    <>
      <div id="eventIngress" className="event-header flex flex-col">
        {image?.asset && (
          <ImageEventPage
            url={urlFor(image.asset).url()}
            alt={(image.alt || '') as string}
            title={title || ''}
          />
        )}
        <div className="flex flex-col max-w-6xl mx-auto gap-8 md:gap-14 my-8 md:my-16 px-6 md:px-12">
          {ingress && <p className="text-xl text-center md:text-3xl font-bold">{ingress}</p>}

          <div className="flex flex-wrap gap-4 md:justify-center">
            {labels?.map((label, i) => (
              <Badge variant="outline" key={i}>
                {label}
              </Badge>
            ))}
            {dates && (
              <Badge variant="outline">
                <EventDate
                  startDate={getFirstAndLastDate(dates).startDate}
                  endDate={getFirstAndLastDate(dates).endDate}
                />
              </Badge>
            )}
            {genre?.title && <Badge variant="outline">{genre.title}</Badge>}
            <Button asChild>
              <Link href="#ticket-block" scroll={true}>
                {t('buy-ticket')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Columns>
        <ColumnItem variant="leftColumn">
          <MainBlock text={text} />
          <RolesBlock roleGroups={data.roleGroups} />
          <TicketBlock
            saleStartDateTime={data.saleStartDateTime}
            saleStartOption={data.saleStartOption}
            ticketInformation={data.ticketInformation}
            dates={data.dates}
            id="ticket-block"
          />
        </ColumnItem>
        <ColumnItem variant="rightColumn">
          {galleryDisplayType === 1 ? (
            <StickyRightColumn text={text} />
          ) : (
            <NormalRightColumn text={text} />
          )}
        </ColumnItem>
      </Columns>
    </>
  );
};
