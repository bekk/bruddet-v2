import { generateSeoData } from '@/lib/utils';
import { MENUPAGE_QUERY } from '@/sanity/lib/queries/menuPage';
import { MENUPAGE_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';
import { MenuPage } from './MenuPage';
import { sanityFetch } from '@/sanity/lib/live';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const lang = (await params).locale;
  const { data }: { data: MENUPAGE_QUERYResult } = await sanityFetch({
    query: MENUPAGE_QUERY,
    params: { lang },
  });

  return <MenuPage data={data} />;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const lang = (await params).locale;
  const { data }: { data: MENUPAGE_QUERYResult } = await sanityFetch({
    query: MENUPAGE_QUERY,
    params: { lang },
  });
  return generateSeoData(data?.metaTitle, data?.metaDescription);
}
