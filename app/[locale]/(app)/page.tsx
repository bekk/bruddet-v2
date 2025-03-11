import HexagonButton from '@/components/Hexagonbutton';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { FRONTPAGE_QUERY } from '@/sanity/lib/queries/frontPage';
import { FRONTPAGE_QUERYResult } from '@/sanity/types/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Metadata } from 'next';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const lang = (await params).locale;
  const { data }: { data: FRONTPAGE_QUERYResult } = await sanityFetch({
    query: FRONTPAGE_QUERY,
    params: { lang },
  });

  const minHeight = "calc(100vh-theme('spacing.12'))";

  const hexagon = data?.hexagon;

  const pathFromHexagon =
    data?.hexagon?.linkToArticleOrEvent?._type == 'article' ? '/meny/' : '/program/';

  return (
    <div
      className="flex justify-center items-center min-h-front-page-height-mobile md:min-h-front-page-height bg-cover bg-center"
      style={{
        minHeight: minHeight,
        backgroundImage: `url(${urlFor(data?.image?.imageUrl as SanityImageSource).url()})`,
      }}
      aria-label={typeof data?.image?.alt === 'string' ? data.image.alt : ''}
    >
      <div className="absolute lg:right-24 lg:top-24 right-6 top-16">
        <HexagonButton
          text={hexagon?.text ?? 'Program_slipp'}
          slug={`${pathFromHexagon}${hexagon?.linkToArticleOrEvent?.slug?.current}`}
          shouldShowNewsletter={hexagon?.shouldShowNewsletter}
        />
      </div>

      {data?.title && <h1 className="oversized text-primary-foreground">{data?.title}</h1>}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const lang = (await params).locale;
  const data: FRONTPAGE_QUERYResult = await client.fetch(FRONTPAGE_QUERY, {
    lang,
  });

  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    openGraph: {
      title: data?.metaTitle as string,
      description: data?.metaDescription as string,
    },
  };
}
