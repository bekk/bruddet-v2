import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FRONTPAGE_QUERY } from "@/sanity/lib/queries/frontPage";
import { FRONTPAGE_QUERYResult } from "@/sanity/types/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang;
  const frontPage: FRONTPAGE_QUERYResult = await client.fetch(FRONTPAGE_QUERY(lang));

  return (
    <div
    className="flex grow w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${urlFor(frontPage?.image?.asset?._ref as SanityImageSource).url()})` }}
      aria-label={frontPage?.image?.alt || ''}
    >
      <h1 className="flex h-fill">{frontPage?.title}</h1>
    </div>
  );
}
