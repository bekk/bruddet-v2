import { generateSeoData } from '@/lib/utils';
import { ARTICLEPAGE_QUERY } from '@/sanity/lib/queries/articlePage';
import { ARTICLEPAGE_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';
import { ArticlePage } from './ArticlePage';
import { sanityFetch } from '@/sanity/lib/live';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const lang = (await params).locale;
  const slug = (await params).slug;
  const { data }: { data: ARTICLEPAGE_QUERYResult } = await sanityFetch({
    query: ARTICLEPAGE_QUERY,
    params: { lang, slug },
  });

  return <ArticlePage data={data} language={lang} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const lang = (await params).locale;
  const slug = (await params).slug;
  const { data }: { data: ARTICLEPAGE_QUERYResult } = await sanityFetch({
    query: ARTICLEPAGE_QUERY,
    params: { lang, slug },
  });
  return generateSeoData(data?.metaTitle, data?.metaDescription);
}
