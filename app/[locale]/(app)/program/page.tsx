import { generateSeoData } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { PROGRAMPAGE_QUERY } from '@/sanity/lib/queries/programPage';
import { PROGRAMPAGE_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';
import { ProgramPage } from './ProgramPage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const lang = (await params).locale;
  const data: PROGRAMPAGE_QUERYResult = await client.fetch(PROGRAMPAGE_QUERY, {
    lang,
  });

  return <ProgramPage data={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return generateSeoData({ params, query: PROGRAMPAGE_QUERY });
}
