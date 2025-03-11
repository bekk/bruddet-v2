import { generateSeoData } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { MENUPAGE_QUERY } from '@/sanity/lib/queries/menuPage';
import { MENUPAGE_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';
import { MenuPage } from './MenuPage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const lang = (await params).locale;
  const data: MENUPAGE_QUERYResult = await client.fetch(MENUPAGE_QUERY, {
    lang,
  });

  return <MenuPage data={data} />;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return generateSeoData({ params, query: MENUPAGE_QUERY });
}
