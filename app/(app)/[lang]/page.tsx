import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FRONTPAGE_QUERY } from "@/sanity/lib/queries/frontPage";
import { FRONTPAGE_QUERYResult } from "@/sanity/types/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang;
  const frontPage: FRONTPAGE_QUERYResult = await client.fetch(FRONTPAGE_QUERY, { lang });
  const minHeight = "calc(100vh-theme('spacing.12'))";

  return (
    <div
      className={`flex justify-center items-center min-h-front-page-height bg-cover bg-center`}
      style={{ 
        minHeight: minHeight,
        backgroundImage: `url(${urlFor(frontPage?.customImage?.asset?._ref as SanityImageSource).url()})` 
      }}

      aria-label={frontPage?.customImage?.alt || ''}
    >
      <h1 className="text-[clamp(2rem,5vw,4rem)]">{frontPage?.title}</h1>
    </div>
  );
}
