import { client } from '@/sanity/lib/client';

import { generateSeoData } from '@/lib/utils';
import { ARTICLEPAGE_QUERY } from '@/sanity/lib/queries/articlePage';
import { ARTICLEPAGE_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';
import { ArticlePage } from './ArticlePage';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const lang = (await params).locale;
  const slug = (await params).slug;
  const data: ARTICLEPAGE_QUERYResult = await client.fetch(ARTICLEPAGE_QUERY, {
    lang,
    slug,
  });

  return <ArticlePage data={data} language={lang} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return generateSeoData({ params, query: ARTICLEPAGE_QUERY });
}
