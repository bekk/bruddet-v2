import { generateSeoData } from '@/lib/utils';
import { PROGRAMPAGE_QUERY } from '@/sanity/lib/queries/programPage';
import { PROGRAMPAGE_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';
import { ProgramPage } from './ProgramPage';
import { sanityFetch } from '@/sanity/lib/live';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const lang = (await params).locale;
  const { data }: { data: PROGRAMPAGE_QUERYResult } = await sanityFetch({
    query: PROGRAMPAGE_QUERY,
    params: { lang },
  });

  return <ProgramPage data={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const lang = (await params).locale;
  const { data }: { data: PROGRAMPAGE_QUERYResult } = await sanityFetch({
    query: PROGRAMPAGE_QUERY,
    params: { lang },
  });
  return generateSeoData(data?.metaTitle, data?.metaDescription);
}
