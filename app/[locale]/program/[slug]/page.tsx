import ImageEventPage from "@/components/event/ImageEventPage";
import { portableTextComponents } from "@/components/portable-text/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENT_QUERY } from "@/sanity/lib/queries/event";
import { EVENT_QUERYResult } from "@/sanity/types/types";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const lang = (await params).locale ?? process.env.NEXT_PUBLIC_DEFAULT_LANG;
  const slug = (await params).slug;

  const { data: event }: { data: EVENT_QUERYResult } = await sanityFetch({
    query: EVENT_QUERY,
    params: { lang, slug },
  });

  if (!event) {
    return null;
  }

  const { image, title, ingress, dates, labels, genre, duration, text } = event;

  return (
    <>
      <div className={`flex-col flex w-full font-serif gap-8`}>
        <div id="eventIngress" className="flex flex-col gap-8">
          {image?.imageUrl && (
            <ImageEventPage
              url={urlFor(image.imageUrl).url() || ""}
              alt={image.alt || ""}
              title={title || ""}
            />
          )}
          <div className="flex flex-col mx-6 md:mx-8 lg:mx-24 gap-8">
            {ingress && <h2>{ingress}</h2>}

            <div className="flex flex-wrap gap-4">
              {labels?.map((label, i) => (
                <Badge variant={"outline"} key={i}>
                  {label.toUpperCase()}
                </Badge>
              ))}
              {dates && <Badge variant={"outline"}>DATO</Badge>}
              {genre?.title && (
                <Badge variant={"outline"}>{genre.title.toUpperCase()}</Badge>
              )}
              <Button>
                <Link href="#top" scroll={true}>
                  KJØP BILLETT
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <p>Hello</p>
          </div>
        </div>
        {text?.map((block, i) => (
          <div key={i} className="flex flex-col mx-6 md:mx-8 lg:mx-24">
            <PortableText
              key={i}
              components={portableTextComponents}
              value={block}
            />
          </div>
        ))}
      </div>
      {/* <BuyButtonFooter /> */}
    </>
  );
}
