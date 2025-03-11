import { EventPage } from '@/app/[locale]/(event)/program/[slug]/EventPage';
import { generateSeoData } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { EVENT_QUERY } from '@/sanity/lib/queries/event';
import { EVENT_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const lang = (await params).locale;
  const slug = (await params).slug;

  const { data }: { data: EVENT_QUERYResult } = await sanityFetch({
    query: EVENT_QUERY,
    params: { lang, slug },
  });

  return <EventPage data={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  return generateSeoData({ params, query: EVENT_QUERY });
}
