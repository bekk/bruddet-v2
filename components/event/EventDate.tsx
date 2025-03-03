'use client';

import { useFormatter } from 'next-intl';

interface EventDateProps {
  startDate: string | Date;
  endDate?: string | Date;
}

export default function EventDate({ startDate, endDate }: EventDateProps) {
  const format = useFormatter();

  let formattedDate;

  if (endDate) {
    formattedDate = `${format.dateTime(new Date(startDate), {
      day: '2-digit',
      month: 'long',
    })} - ${format.dateTime(new Date(endDate), {
      day: '2-digit',
      month: 'long',
    })}`;
  } else {
    formattedDate = format.dateTime(new Date(startDate), {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    });
  }

  return <div>{formattedDate}</div>;
}
