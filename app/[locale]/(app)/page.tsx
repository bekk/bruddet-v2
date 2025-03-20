import Image from 'next/image';
import HexagonButton from '@/components/Hexagonbutton';
import { generateSeoData } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { FRONTPAGE_QUERY } from '@/sanity/lib/queries/frontPage';
import { FRONTPAGE_QUERYResult } from '@/sanity/types/types';
import { Metadata } from 'next';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const lang = (await params).locale;
  console.log('Frontpage locale', lang);
  const { data }: { data: FRONTPAGE_QUERYResult } = await sanityFetch({
    query: FRONTPAGE_QUERY,
    params: { lang },
  });
  console.log('Frontpage Data', data);
  const minHeight = "calc(100vh-theme('spacing.12'))";

  const hexagon = data?.hexagon;

  const pathFromHexagon =
    data?.hexagon?.linkToArticleOrEvent?._type == 'article' ? '/meny/' : '/program/';

  return (
    <div
      className="flex justify-center items-center min-h-front-page-height-mobile md:min-h-front-page-height relative"
      style={{ minHeight: minHeight }}
    >
      {data?.image?.asset && (
        <Image
          src={urlFor(data.image.asset).url()}
          alt={data.image.alt || ''}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      <div className="absolute lg:right-24 lg:top-24 right-6 top-16 z-10">
        <HexagonButton
          text={hexagon?.text ?? 'Program_slipp'}
          slug={`${pathFromHexagon}${hexagon?.linkToArticleOrEvent?.slug?.current}`}
          shouldShowNewsletter={hexagon?.shouldShowNewsletter}
        />
      </div>

      {data?.title && (
        <h1 className="text-primary-foreground z-10 relative oversized uppercase">{data?.title}</h1>
      )}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const lang = (await params).locale;
  const { data }: { data: FRONTPAGE_QUERYResult } = await sanityFetch({
    query: FRONTPAGE_QUERY,
    params: { lang },
  });
  return generateSeoData(data?.metaTitle, data?.metaDescription);
}
