import {
  capitalizeFirstLetter,
  formatDateOnly,
  formatDayAndDate,
  getMonth,
} from '@/lib/dateAndTime';
import { useLocale, useTranslations } from 'next-intl';

type DatesLabelProps = {
  dates: DateObject[];
};

type DateObject = {
  date?: string | undefined;
  url?: string | undefined;
  _key?: string | undefined;
};

type LabelProps = {
  dates: DateObject[];
  formattedDate: string;
  datesOnlyFirst: string;
  datesOnlyLast: string;
  firstDate: string;
  language: string;
  t?: any;
};

export const getDateLabel = ({
  dates,
  formattedDate,
  datesOnlyFirst,
  datesOnlyLast,
  firstDate,
  language,
  t,
}: LabelProps) => {
  if (dates.length === 1) {
    return capitalizeFirstLetter(formattedDate);
  }

  const lastDate = dates[dates.length - 1].date?.split('T')[0];

  const hasMoreThanOneDate = lastDate !== firstDate;

  if (!hasMoreThanOneDate) {
    return capitalizeFirstLetter(formattedDate);
  }

  const firstMonth = getMonth(firstDate, language);
  const lastMonth = getMonth(firstDate, language, lastDate);

  return `${t ? t('date-label') : ''} ${datesOnlyFirst}. ${
    hasMoreThanOneDate && firstMonth?.toLowerCase()
  } - ${datesOnlyLast}. ${lastMonth?.toLowerCase()}`;
};

export const DatesLabel = ({ dates }: DatesLabelProps) => {
  const language = useLocale();
  const firstDate = dates[0].date ?? '';
  const lastdate = dates[dates.length - 1].date ?? '';
  const formattedDate = formatDayAndDate(firstDate, 'nb');
  const datesOnlyFirst = formatDateOnly(firstDate);
  const datesOnlyLast = formatDateOnly(lastdate);
  const dateLabel = getDateLabel({
    dates,
    formattedDate,
    datesOnlyFirst,
    datesOnlyLast,
    firstDate,
    language,
  });

  return <p>{dateLabel}</p>;
};
