'use client';
import { CustomImage, PROGRAMPAGE_QUERYResult } from '@/sanity/types/types';
import { SocialMedia } from '@/components/SocialMedia';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DynamicImage } from '@/components/DynamicImage';
import { useLocale, useTranslations } from 'next-intl';
import EventDate from '@/components/event/EventDate';
import { getFirstAndLastDate } from '@/utils/formatDates';
import { urlFor } from '@/sanity/lib/image';

type ProgramPageProps = {
  data: PROGRAMPAGE_QUERYResult;
};

export const ProgramPage = ({ data }: ProgramPageProps) => {
  const [image, setImage] = useState<CustomImage | null>(null);
  const t = useTranslations('program');
  const locale = useLocale();

  if (!data) return;

  return (
    <div className="flex flex-row h-full w-full">
      <h1 className="sr-only">{data?.title}</h1>
      <div className="hidden lg:flex items-end justify-center lg:justify-normal lg:w-[25%]">
        <SocialMedia socialMediaText={data?.socialMediaText} />
      </div>

      <ul className="flex grow flex-col items-center mt-20 lg:mt-20 px-6 sm:px-44 lg:px-4">
        {data?.links?.map((link, index) => (
          <li
            onMouseEnter={() => {
              setImage(link.image);
            }}
            className="mb-14 w-full flex flex-col gap-2"
            key={index}
          >
            <Link
              key={index}
              href={`/${locale}/program/${link.slug?.current}`}
              aria-label={`${t('link-a11y')} ${link.title}`}
              className="block lg:text-center hover:underline"
            >
              <div className="lg:hidden flex justify-center aspect-square w-full">
                {link?.image?.asset && (
                  <Image
                    key={index}
                    src={urlFor(link.image?.asset).url()}
                    alt={link.image?.alt || ''}
                    width={350}
                    height={350}
                    className="inline-block object-cover w-full h-full"
                  />
                )}
              </div>
              <h2 className="mt-4 lg:mt-0 uppercase">{link.title}</h2>
              {link.dates && link.dates.length > 0 && (
                <span className="inline-block text-lg mt-5 lg:text-xl first-letter:capitalize ">
                  <EventDate
                    startDate={getFirstAndLastDate(link.dates).startDate}
                    endDate={getFirstAndLastDate(link.dates).endDate}
                  />
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block w-[25%]">{image && <DynamicImage image={image} />}</div>
    </div>
  );
};
